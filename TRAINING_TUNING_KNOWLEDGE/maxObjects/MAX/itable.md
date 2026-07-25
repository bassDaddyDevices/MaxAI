---
type: max
name: "itable"
summary: "Data table editor"
signal: false
url: "https://docs.cycling74.com/reference/itable/"
package: "Max"
see_also: ["capture", "coll", "funbuff", "histo", "multislider", "table", "text"]
---
# itable

Data table editor

## Description

Provides visual display of the table contents in your patcher window.

## Arguments

### tablename[symbol] optional

The argument gives a name to the [itable](https://docs.cycling74.com/reference/itable). Max looks for a file of the same name to load. If two or more [table](https://docs.cycling74.com/reference/table) or [itable](https://docs.cycling74.com/reference/itable) objects share the same names, they also share the same values.

## Attributes

### annotation\_name[symbol]:

Info View Title

### autohint[int]: 1

Toggles display of the mouse position when positioned over the table.

### bgcolor[4 floats]

Sets the table background color in RGBA format.

### embed[int]: 1

Toggles the ability to embed the table and save its data as part of the main patch. The default behavior is 1 (save the subpatch).

### linecolor[4 floats]

Sets the color used in the line tool mode in RGBA format. The  linecolor  attribute is mapped to the  elementcolor  style color.

### name[symbol]

Specifies the name of a table. You can also specify the name of an [itable](https://docs.cycling74.com/reference/itable) object using an argument. Max looks for an [itable](https://docs.cycling74.com/reference/itable) object of the same name which has been saved as a separate file. If two or more table objects share the same names, they also share the same values.

For information about using named objects in Max for Live, click [here](https://docs.cycling74.com/userguide/m4l/live_symbols).

### notename[int]: 0

Toggles Y axis display using MIDI note names.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### pointcolor[4 floats]

Set the color of the data display points using the 0. - 1. RGBA format.

### range[int]

Specifies the range of values which can be displayed on the y axis of the editing window. A newly created table has a range of 128, from 0 to 127.

### selectioncolor[4 floats] >= 7.0.0

Sets the selection color used in Select tool mode in RGBA format.

### setresizes[int]: 0

set Message Resizes Table

### shadowalpha[float]: 0.

Shadow Alpha

### shadowblend[float]: 0.

Shadow Blend

### shadowproportion[float]: 0.

Shadow Proportion

### signed[int]: 0

Toggles the ability to store and display signed integer values. A newly created table with signed values has a range of 128, from -128 to 127.

### size[int]

Specifies the number of values stored in the table. The default is 128 values, indexed with numbers from 0 to 127.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the table text color in RGBA format. The  textcolor  attribute is mapped to the  textcolor\_inverse  style color.

### tool[int]: 0

Sets the tool used when graphically interacting with the object. The options are:

0: Pencil tool

1: Line tool

2: Select tool

3: Move tool

Possible values:

0 = 'Pencil'

1 = 'Select'

2 = 'Line'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Same as a  quantile  message with a random number between 0 and 32,768 as an argument.

### int

In left inlet: The number specifies an address in the [itable](https://docs.cycling74.com/reference/itable). The value stored at that address is sent out the left outlet. However, if a value has been received in the right inlet, [itable](https://docs.cycling74.com/reference/itable) stores that value in the specified address, rather than sending out a number.

In right inlet: The number specifies a value to be stored in [itable](https://docs.cycling74.com/reference/itable). The next address number received in the left inlet causes the value to be stored at that address.

Arguments:

- index
  [int]

### (inlet1)

In right inlet: The number specifies a value to be stored in [itable](https://docs.cycling74.com/reference/itable). The next address number received in the left inlet causes the value to be stored at that address.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- index
  [float]

### list

In left inlet: The second number is stored in [itable](https://docs.cycling74.com/reference/itable), at the address (index) specified by the first number.

Arguments:

- index
  [int]
- value
  [int]

### clear

In left inlet: Sets all values in the table to 0.

### const

In left inlet: The word  const , followed by a number, stores that number at all addresses in the table.

Arguments:

- input
  [int]

### dump

In left inlet: Sends all the numbers stored in the table out the left outlet in immediate succession, beginning with address 0.

### fquantile

In left inlet: The word  fquantile , followed by a number between zero and one, multiplies the number by the sum of all the numbers in the table. Then, table sends out the address at which the sum of the all values up to that address is greater than or equal to the result.

Arguments:

- input
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

In left inlet: The word  goto , followed by a number, sets a pointer to the address specified by the number. The pointer is set at the beginning of the table initially.

Arguments:

- index
  [int]

### handtool

The word  handtool , followed by a zero or one, toggles setting the [itable](https://docs.cycling74.com/reference/itable) object to use the hand tool. It is equivalent to setting the  tool  attribute.

Arguments:

- flag
  [list]

### inv

In left inlet: The word  inv , followed by a number, finds the first value which is greater than or equal to that number, and sends the address of that value out the left outlet.

Arguments:

- value
  [int]

### length

Output the table size

### linetool

The word  linetool , followed by a zero or one, toggles setting the [itable](https://docs.cycling74.com/reference/itable) object to use the line tool. It is equivalent to setting the  tool  attribute.

Arguments:

- flag
  [list]

### load

In left inlet: Puts the object in load mode. In load mode, every number received in the left inlet gets stored in the table, beginning at address 0 and continuing until the table is filled (or until the table is taken out of load mode by a  normal  message). If more numbers are received than will fit in the size of the table, excess numbers are ignored.

### max

Retrieve the maximum stored value

### min

Retrieve the minimum stored value

### (mouse)

The values stored in table can be entered and edited graphically with the mouse.

### next

In left inlet: Sends the value stored in the address pointed at by the  goto  pointer out the left outlet, then sets the pointer to the next address. If the pointer is currently at the last address in the [itable](https://docs.cycling74.com/reference/itable) object, it wraps around to the first address.

### normal

In left inlet: Undoes a prior  load  message; takes the [itable](https://docs.cycling74.com/reference/itable) object out of load mode and reverts it to normal operation.

### penciltool

The word  penciltool , followed by a zero or one, toggles setting the [itable](https://docs.cycling74.com/reference/itable) object to use the pencil tool. It is equivalent to setting the  tool  attribute.

Arguments:

- flag
  [list]

### prev

In left inlet: Causes the same output as the word  next , but the pointer is then decremented rather than incremented. If the pointer is currently at the first address in the [itable](https://docs.cycling74.com/reference/itable) object, it wraps around to the last address.

### quantile

In left inlet: The word  quantile , followed by a number, multiplies the number by the sum of all the numbers in the [itable](https://docs.cycling74.com/reference/itable) object. This result is then divided by 2^15 (32,768). Then, table sends out the address at which the sum of all values up to that address is greater than or equal to the result.

Arguments:

- number
  [int]

### read

In left inlet: The word  read , followed by a name, opens and reads data values from a file in Text or Max binary format. Without an argument,  read  opens a standard Open Document dialog for choosing a file to read values from. If the file contains valid data, the entire contents of the existing table are replaced with the data.

Arguments:

- filename
  [symbol]

### refer

In left inlet: The word  refer , followed by the name of another table, sets the receiving [itable](https://docs.cycling74.com/reference/itable) object to read its data values from a named [table](https://docs.cycling74.com/reference/table) object.

Arguments:

- name
  [symbol]

### selecttool

The word  selecttool , followed by a zero or one, toggles setting the [itable](https://docs.cycling74.com/reference/itable) object to use the select tool. It is equivalent to setting the  tool  attribute.

Arguments:

- flag
  [list]

### send

The word  send , followed by the name of a [receive](https://docs.cycling74.com/reference/receive) object, followed by an address number, sends the value stored at that address to all [receive](https://docs.cycling74.com/reference/receive) objects with that name, without sending the value out the [itable](https://docs.cycling74.com/reference/itable) object’s outlet.

Arguments:

- receive-name
  [symbol]
- address
  [int]

### set

In left inlet: The word  set , followed by a list of numbers, stores values in certain addresses. The first number after the word  set  specifies an address. The next number is the value to be stored in that address, and each number after that is stored in a successive address.

Arguments:

- start
  [int]
- values
  [list]

### setbits

In left inlet: Changes the value of one or more specific bits of a number stored in the [itable](https://docs.cycling74.com/reference/itable) object. The word  setbits  is followed by four number arguments. The first argument is the address being referred to; the second argument is the starting bit location in the number stored at that address (the bit locations are numbered 0 to 31, from the least significant bit to the most significant bit); the third argument specifies how many bits to the right of the starting bit location should be modified, and the fourth argument is the value (stated in decimal or hexadecimal form) to which those bits should be set.

For example, the message  setbits 47 5 3 6  will look at address 47 in the [itable](https://docs.cycling74.com/reference/itable) object, start at bit location 5 (the sixth bit from the right), and replace the 3 bits starting at that location with the bits 110 (the binary equivalent of the decimal integer 6). Suppose that address 47 of the [itable](https://docs.cycling74.com/reference/itable) object stores the number 87. The binary form of 87 is 1  *010*  111, so replacing the 3 bits starting at bit location 5 with 110 would change the number to 1  *110*  111, which is the binary form of the decimal integer 119. The new number stored at address 47 in the [itable](https://docs.cycling74.com/reference/itable) object will therefore be 119.

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

In left inlet: Sends the sum of all the values in the [itable](https://docs.cycling74.com/reference/itable) object out the left outlet.

### write

In left inlet: Opens a standard save file dialog for choosing a name to write data values from the [itable](https://docs.cycling74.com/reference/itable) object. The file can be saved in Text or Max binary format.

## See Also

| Name | Description |
| --- | --- |
| [capture](https://docs.cycling74.com/reference/capture) | Store values to view or edit |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [funbuff](https://docs.cycling74.com/reference/funbuff) | Store pairs of numbers |
| [histo](https://docs.cycling74.com/reference/histo) | Create a histogram of numbers received |
| [multislider](https://docs.cycling74.com/reference/multislider) | Display data as sliders or a scrolling display |
| [table](https://docs.cycling74.com/reference/table) | Store and edit an array of numbers |
| [text](https://docs.cycling74.com/reference/text) | Format messages as a text file |
