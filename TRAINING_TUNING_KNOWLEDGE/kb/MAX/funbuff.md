---
type: max
name: "funbuff"
summary: "Store pairs of numbers"
signal: false
url: "https://docs.cycling74.com/reference/funbuff/"
package: "Max"
see_also: ["bline", "coll", "funbuff", "itable", "line", "table"]
---
# funbuff

Store pairs of numbers

## Description

Stores, manages, and recalls pairs of numbers.

## Arguments

### filename[symbol] optional

The argument specifies the name of a file to be read into [funbuff](https://docs.cycling74.com/reference/funbuff) when the patch is loaded. Changes to the contents of one [funbuff](https://docs.cycling74.com/reference/funbuff) will not affect the contents of another [funbuff](https://docs.cycling74.com/reference/funbuff) object with the same name.

A file for [funbuff](https://docs.cycling74.com/reference/funbuff) can also be created using a text editor window, beginning the text with the word  funbuff , followed by a list of space-separated numbers which specify alternating x and y values. A [funbuff](https://docs.cycling74.com/reference/funbuff) that has been saved as a file can be viewed and edited as text by choosing Open as Text... from the File menu. Numbers in the form of text can be pasted in from other sources such as the editing window of a [capture](https://docs.cycling74.com/reference/capture) object, or even from another program such as a word processor.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Prints information in the Max Console concerning the current status of the [funbuff](https://docs.cycling74.com/reference/funbuff) object's contents: how many elements it contains, the minimum and maximum x and y values it contains, and its domain and range (the maximum minus the minimum, for the x and y axes respectively).

### int

In left inlet: The number is the x value of an x,y pair. If a y value has been received in the right inlet, the two numbers are stored together in [funbuff](https://docs.cycling74.com/reference/funbuff). Otherwise, the x value causes the corresponding y value stored in [funbuff](https://docs.cycling74.com/reference/funbuff) to be sent out the left outlet.

If there is no stored x value which matches the number received, [funbuff](https://docs.cycling74.com/reference/funbuff) uses the closest x value which is less than the number received, and sends out the corresponding y value.

Arguments:

- x-value
  [int]

### (inlet1)

In right inlet: The number is a y value which will be paired with the next x value received in the left inlet, and stored in [funbuff](https://docs.cycling74.com/reference/funbuff).

Arguments:

- y-value
  [int]

### float

In either inlet: Converted to  int .

Arguments:

- x or y value
  [float]

### clear

Erases the contents of [funbuff](https://docs.cycling74.com/reference/funbuff).

### copy

Copies the current selection (made by using the  select  message) into the global [funbuff](https://docs.cycling74.com/reference/funbuff) clipboard. The data stored on this clipboard can then be pasted into another [funbuff](https://docs.cycling74.com/reference/funbuff) object using the  paste  message.

### cut

Copies the current selection (made by using the  select  message) into the global [funbuff](https://docs.cycling74.com/reference/funbuff) clipboard and deletes it from the [funbuff](https://docs.cycling74.com/reference/funbuff) object. The data stored on this clipboard can then be pasted into another [funbuff](https://docs.cycling74.com/reference/funbuff) object using the  paste  message.

### delete

In left inlet: The word  delete , followed by two numbers, looks for such an x,y pair in [funbuff](https://docs.cycling74.com/reference/funbuff), and deletes it if it exists. If  delete  is followed by only one number, only the x value is sought, and deleted if it is present.

Arguments:

- x-value
  [int]
- y-value
  [int]

### dump

In left inlet: Sends all the stored pairs out the middle and left outlets in immediate succession. The y values are sent out the middle outlet, and the x values are sent out the left outlet, in alternation. The pairs are sent out in ascending order based on the x value.

### embed

The word  embed , followed by a non-zero number, causes the [funbuff](https://docs.cycling74.com/reference/funbuff) data to be stored inside the patcher. The default setting is not to store the [funbuff](https://docs.cycling74.com/reference/funbuff) data inside the patcher.

Arguments:

- flag
  [int]

### find

The word  find , followed by a number, will output (out the left outlet) all x values (indexes) whose y value is equal to the number indicated.

Arguments:

- y-value
  [int]

### goto

The word  goto , followed by a number, sets a pointer to the x value (index) specified by the number. A subsequent  next  message will return the y value at the specified x.

Arguments:

- index
  [int]

### interp

In left inlet: The word  interp , followed by a number, uses that number as an x value, measures its position between its two neighboring x values in the [funbuff](https://docs.cycling74.com/reference/funbuff), and then sends--out the left outlet--the y value that holds a corresponding position between the two neighboring y values. If the received number is already the x value in a stored x,y pair, the corresponding y value is sent out. If the received number exceeds the minimum or maximum x values stored in [funbuff](https://docs.cycling74.com/reference/funbuff), the y value that's associated with the minimum or maximum x value is sent out. If the [funbuff](https://docs.cycling74.com/reference/funbuff) is empty,  0  is sent out.

Arguments:

- x-value
  [int]

### interptab

In left inlet: The word  interptab , followed by a number and the name of a named [table](https://docs.cycling74.com/reference/table) object functions similarly to the  interp  message (mentioned above), except that it uses the data in the table as an interpolating function. This allows you to easily perform non-linear interpolation between consecutive values in a [funbuff](https://docs.cycling74.com/reference/funbuff).

Arguments:

- value
  [int]
- tablename
  [symbol]

### max

Sends the maximum y value currently stored in the [funbuff](https://docs.cycling74.com/reference/funbuff) out the left outlet.

### min

Sends the minimum y value currently stored in the [funbuff](https://docs.cycling74.com/reference/funbuff) out the left outlet.

### next

Finds the x value pointed to by the pointer (or, if the pointer points to a number not yet stored as an x value, to the next greater x value), and sends the corresponding y value out the left outlet. Also, [funbuff](https://docs.cycling74.com/reference/funbuff) calculates the difference between that x value and the value previously pointed to by the pointer, sends the difference out the middle outlet, and resets the  goto  pointer to the next greater x value.

### paste

The word  paste  will copy the contents of the global [funbuff](https://docs.cycling74.com/reference/funbuff) clipboard into a [funbuff](https://docs.cycling74.com/reference/funbuff) object. The contents of the clipboard are set using the  select ,  copy  and  cut  messages. These messages provide a handy way of copying data between different [funbuff](https://docs.cycling74.com/reference/funbuff) objects in any open patchers.

### print

Prints diagnostic information regarding [funbuff](https://docs.cycling74.com/reference/funbuff) 's current state in the Max Console.

### read

Calls up the Open Document dialog box so that a file of x,y values can be read into [funbuff](https://docs.cycling74.com/reference/funbuff). If the word  read  is followed by a symbol, Max looks for a file with that name (in the file search path) to load directly into the [funbuff](https://docs.cycling74.com/reference/funbuff). The [funbuff](https://docs.cycling74.com/reference/funbuff) file format is described on the next page.

Arguments:

- filename
  [symbol]

### select

In left inlet: The word  select , followed by an two integers representing a starting index and a range will select a region of the [funbuff](https://docs.cycling74.com/reference/funbuff) which can be edited using the  cut ,  copy  and  paste  messages. For example  select 2 3  will select the part of a [funbuff](https://docs.cycling74.com/reference/funbuff) from index 2 through index 5.

Arguments:

- starting-index and range
  [list]

### set

In left inlet: The word  set , followed by one or more space-separated pairs of numbers, stores each pair as x,y pair.

Arguments:

- value-pair
  [list]

### undo

The  undo  message is used to undo the results of the previous  cut  or  paste  message.

### write

Calls up the standard Save As dialog box, so that the contents of [funbuff](https://docs.cycling74.com/reference/funbuff) can be saved as a separate file. If the word  write  is followed by a symbol, the contents of the [funbuff](https://docs.cycling74.com/reference/funbuff) are saved immediately in a file, using the symbol as the filename.

Arguments:

- filename
  [symbol]

## Output

### bang

Out right outlet: When the pointer reaches the end of a [funbuff](https://docs.cycling74.com/reference/funbuff), no numbers are sent out in response to a  next  message, but a  bang  is sent out to notify that the end has been reached.

### int

Out left outlet: When an x value is received in the left inlet, the corresponding y value is sent out. (Or, if there is no such x value yet stored in [funbuff](https://docs.cycling74.com/reference/funbuff), the y value corresponding to the next lesser x value is sent out.) When the word  next  is received in the left inlet, [funbuff](https://docs.cycling74.com/reference/funbuff) sends out the y value that corresponds to the x value pointed to by its pointer (or, if there is no such x value, the y value of the next greater x value).

Out middle outlet: When the word  next  is received in its left inlet, [funbuff](https://docs.cycling74.com/reference/funbuff) sends out the difference between the x value pointed to by its pointer, and the x value previously pointed to, then resets the pointer to the next x value.

## See Also

| Name | Description |
| --- | --- |
| [bline](https://docs.cycling74.com/reference/bline) | Generate ramps using bang |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [funbuff](https://docs.cycling74.com/reference/funbuff) | Store pairs of numbers |
| [itable](https://docs.cycling74.com/reference/itable) | Data table editor |
| [line](https://docs.cycling74.com/reference/line) | Generate timed ramp |
| [table](https://docs.cycling74.com/reference/table) | Store and edit an array of numbers |
