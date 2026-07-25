---
type: max
name: "table"
summary: "Store and edit an array of numbers"
signal: false
url: "https://docs.cycling74.com/reference/table/"
package: "Max"
see_also: ["capture", "coll", "funbuff", "histo", "itable", "multislider", "text"]
---
# table

Store and edit an array of numbers

## Arguments

### name[symbol] optional

The argument gives a name to the [table](https://docs.cycling74.com/reference/table). Max looks for a file of the same name to load. If two or more [table](https://docs.cycling74.com/reference/table) objects share the same names, they also share the same values.

## Attributes

### annotation\_name[symbol]:

Info View Title

### embed[int]: 1

Toggles the ability to embed the table and save its data as part of the main patch. The default behavior is 1 (save the data).

### name[symbol]

Specifies the name of a table. You can also specify the name of a [table](https://docs.cycling74.com/reference/table) object using an argument. Max looks for a table of the s ame name which has been saved as a separate file. If two or more table objects share the same names, they also share the same values.

### notename[int]: 0

Toggles Y axis display using MIDI note names.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters).

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping). (default = 1).

### range[int]

Specifies the range of values which can be displayed on the y axis of the editing window. A newly created table has a range of 128, from 0 to 127.

### setresizes[int]: 0

set Message Resizes Table

### signed[int]: 0

Toggles the ability to store and display signed integer values. A newly created table with signed values has a range of 256, from -128 to 127.

### size[int]

Specifies the number of values stored in the table. The default is 128 values, indexed with numbers from 0 to 127.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Same as a  quantile  message with a random number between 0 and 32,768 as an argument. See the  quantile  message for more details.

### int

Retrieves the number by address from the [table](https://docs.cycling74.com/reference/table), and sends if out the left outlet.

Arguments:

- index
  [int]

### (inlet1)

Stores the value at the next index number received at the left inlet.

Arguments:

- value
  [int]

### float

Convert to  int

Arguments:

- index
  [float]

### list

The second number is stored in at the address (index) specified by the first number.

Arguments:

- index
  [int]
- value
  [int]

### cancel

Causes table to ignore a number received in the right inlet, so that the next number received in the left inlet will output a number, rather than storing a number at that address.

### clear

Set all values to 0

### const

Fill the table with a number

Arguments:

- value
  [int]

### (mouse)

The values stored in table can be entered and edited graphically with the mouse. When a [table](https://docs.cycling74.com/reference/table) object is first created in a patcher window, the [table](https://docs.cycling74.com/reference/table) object’s graphic editing window is opened, and values can be entered by drawing with the mouse. The editing window provides a palette of graphic editing tools. When the patcher window is locked, the graphic editing window can be opened by double-clicking with the mouse on the [table](https://docs.cycling74.com/reference/table) object.

### dump

Sends all the numbers stored in the table out the left outlet in immediate succession, beginning with address 0.

### flags

Changes the [table](https://docs.cycling74.com/reference/table) object’s saving options as found in the Inspector. The first argument affects the Save with Patcher option, and the second argument affects the Don’t Save option. If the argument is zero the option is unchecked, otherwise it is checked.

Arguments:

- save-with-patcher
  [list]
- dont-save
  [list]

### fquantile

Given a number between zero and one, multiplies the number by the sum of all the numbers in the table. Then, table sends out the address at which the sum of the all values up to that address is greater than or equal to the result.

Arguments:

- multiplier
  [float]

### getbits

Gets the value of one or more specific bits of a number stored in the table, and sends that value out the left outlet. The first argument is the address to query; the second argument is the starting bit location in the number stored at that address (the bit locations are numbered 0 to 31, from the least significant bit to the most significant bit); and the third argument specifies how many bits to the right of the starting bit location should be sent out. The specified bits are sent out the outlet as a single decimal integer.

Arguments:

- address
  [int]
- start
  [int]
- bits
  [int]

### goto

Sets a pointer to the address specified by the number. The pointer is set at the beginning of the table initially.

Arguments:

- index
  [int]

### inv

Finds the first value which is greater than or equal to that number, and sends the address of that value out the left outlet.

Arguments:

- value
  [int]

### length

Output the table size

### load

Places the table in load mode. In load mode, every number received in the left inlet gets stored in the table, beginning at address 0 and continuing until the table is filled (or until the table is taken out of load mode by a  normal  message). If more numbers are received than will fit in the size of the table, additional numbers are ignored.

### max

Retrieve the maximum stored value

### min

Retrieve the minimum stored value

### next

Sends the value stored in the address pointed at by the pointer out the left outlet, then sets the pointer to the next address. If the pointer is currently at the last address in the table, it wraps around to the first address.

### normal

Takes the table out of load mode and reverts it to normal operation. See the  load  message for more details.

### open

Opens the object’s graphic editor window and brings it to the foreground. Double-clicking on the [table](https://docs.cycling74.com/reference/table) object in a locked patcher has the same effect.

### prev

Causes the same output as the  next  message, but the pointer is then decremented rather than incremented. If the pointer is currently at the first address in the table, it wraps around to the last address.

### quantile

Multiplies the incoming number by the sum of all the numbers in the table. This result is then divided by 2^15 (32,768). Then, table sends out the address at which the sum of all values up to that address is greater than or equal to the result.

Arguments:

- number
  [int]

### read

Opens and reads data values from a file in Text or Max binary format. Without an argument,  read  opens a standard Open Document dialog to choose a file. If the file contains valid data, the entire contents of the existing table are replaced with the file contents.

Arguments:

- filename
  [symbol]

### refer

Sets the receiving [table](https://docs.cycling74.com/reference/table) object to read its data values from the named table.

Arguments:

- name
  [symbol]

### send

Sends the value stored at the incoming address to all [receive](https://docs.cycling74.com/reference/receive) objects with that name.

Arguments:

- receive-name
  [symbol]
- address
  [int]

### set

Stores values in certain addresses. The first argument specifies an address. The next number is the value to be stored in that address, and each number after that is stored in a successive address.

Arguments:

- start
  [int]
- values
  [list]

### setbits

Changes the value of one or more specific bits of a number stored in the table. The first argument is the address being referred to; the second argument is the starting bit location in the number stored at that address (the bit locations are numbered 0 to 31, from the least significant bit to the most significant bit); the third argument specifies how many bits to the right of the starting bit location should be modified, and the fourth argument is the value (stated in decimal or hexadecimal form) to which those bits should be set.

Arguments:

- address
  [int]
- start
  [int]
- count
  [int]
- value
  [int]

### sum

Output the sum of all values

### wclose

Close the graphic editing window

### write

Opens a standard save file dialog for choosing a name to write data values from the table. The file can be saved in Text or Max binary format.

## Output

### bang

When the contents of a [table](https://docs.cycling74.com/reference/table) have been changed by an edit in the graphic editing window,  bang  is sent out the right outlet.

### int

All numbers sent out by [table](https://docs.cycling74.com/reference/table) are sent out the left outlet.

## See Also

| Name | Description |
| --- | --- |
| [capture](https://docs.cycling74.com/reference/capture) | Store values to view or edit |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [funbuff](https://docs.cycling74.com/reference/funbuff) | Store pairs of numbers |
| [histo](https://docs.cycling74.com/reference/histo) | Create a histogram of numbers received |
| [itable](https://docs.cycling74.com/reference/itable) | Data table editor |
| [multislider](https://docs.cycling74.com/reference/multislider) | Display data as sliders or a scrolling display |
| [text](https://docs.cycling74.com/reference/text) | Format messages as a text file |
