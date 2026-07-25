---
type: max
name: "textbox"
summary: "Display and output numbers, lists, and messages"
signal: false
url: "https://docs.cycling74.com/reference/textbox/"
package: "Max"
see_also: ["float", "int"]
---
# textbox

Display and output numbers, lists, and messages

## Description

The [number](https://docs.cycling74.com/reference/number) object displays and outputs either integers, floats, lists of numbers, or any message, depending on its format. [flonum](https://docs.cycling74.com/reference/flonum) is a synonym for [number](https://docs.cycling74.com/reference/number) in Float format, [listbox](https://docs.cycling74.com/reference/listbox) is a synonym for [number](https://docs.cycling74.com/reference/number) in List format, and [textbox](https://docs.cycling74.com/reference/textbox) is a synonym for [number](https://docs.cycling74.com/reference/number) in Text format.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the color for the object's background

### cantchange[int]: 0

When cantchange is enabled, the value of the [number](https://docs.cycling74.com/reference/number) box cannot be changed by text or mouse input. The value can be changed via an incoming message however.

### format[int]: 0

Sets characteristics of the appearance and behavior of the [number](https://docs.cycling74.com/reference/number) box. All formats restrict text entry to the characters displayed. For example, in Binary format you can only type 0 or 1.

Possible values:

0 = 'Decimal (Integer)'

Display and output  int  values as decimal (base 10) numbers

1 = 'Hex'

Display and output  int  values as hex (base 16) numbers

2 = 'Roland Octal'

Display and output  int  values using a display format where digits range from 1 to 8, where  11  is zero  88  is 63 in decimal.

3 = 'Binary'

Display and output  int  values using a binary display format of 1s and 0s.

4 = 'MIDI'

Display and output  int  values using MIDI note names, where middle C (60) is C3.

5 = 'MIDI (C4)'

Display and output  int  values using MIDI note names, where middle C (60) is C4.

6 = 'Decimal (Floating-Point)'

Display and output  float  values

7 = 'List'

Display and output a  list  of int and float values

8 = 'Text'

Display and output any message

### htricolor[4 floats]

Sets the highlight color for the triangle or other symbol indicating the object is highlighted for text entry by typing

### maximum[atom]: <none>

Sets the maximum value that can be displayed or output

### minimum[atom]: <none>

Sets the minimum value that can be displayed or output

### mousefilter[int]: 0 >= 7.2.0

Alias:
mouseup

When enabled, mousefilter only sends the value you change by scrolling the number up and down by dragging when you release the mouse button. When disabled, numbers are output as you scroll.

### numdecimalplaces[int]: 0

Sets the number of decimal places displayed for a [number](https://docs.cycling74.com/reference/number) box whose format is set to Float.

### outputonclick[int]: 0

When outputonclick is enabled, the current value of the object will be sent out when you click on it

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the color for drawing the text

### triangle[int]: 1

Toggles the drawing of the triangle or other symbol indicating the object is highlighted for text entry by typing

### tricolor[4 floats]

Sets the color for the triangle or other symbol that indicates that the contents are editable.

### triscale[float]: 1.

Scales the size of the triangle or other symbol drawn in the object

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the currently displayed value out the outlet

### int

An  int  value received will be displayed and sent out the outlet. The value will be converted to a  float  if the [number](https://docs.cycling74.com/reference/number) box's format attribute is set to Float.

Arguments:

- input
  [int]

### float

float  value received will be displayed and sent out the outlet. The value will be converted to an  int  if the [number](https://docs.cycling74.com/reference/number) box's format attribute is set to Int or another integer-based format.

Arguments:

- input
  [float]

### list

list  received is displayed and sent out the outlet. If the format is set to List or Text, the entire list is stored and output. Otherwise only the first value in the list is stored and output.

### anything

If any message is received and the [number](https://docs.cycling74.com/reference/number) box's format is set to Text, the entire message is stored and output. If the format is set to Int or Float, an error message is posted to the Max console and no value is stored or output. If the format is set to List, no value is stored or output, but no error message is posted.

### clear

When the format atrribute of [number](https://docs.cycling74.com/reference/number) is set to List or Text,  clear  will clear the current list or message displayed.

### max

The word  max , followed by a number, sets the maximum value that can be displayed or sent out by the [number](https://docs.cycling74.com/reference/number) box. The word  max  by itself sets the maximum to None, removing any previously set maximum value.

Arguments:

- maximum
  [list]

### min

The word  min , followed by a number, sets the minimum value that can be displayed or sent out by the [number](https://docs.cycling74.com/reference/number) box. The word  min  by itself sets the minimum to None, removing any previously set minimum value.

Arguments:

- minimum
  [list]

### (mouse)

Clicking and dragging up and down on a [number](https://docs.cycling74.com/reference/number) box with the mouse (when the patcher window is locked) moves the displayed value up and down, and outputs the new values continuously.

In a float number box, dragging to the left of the decimal point changes the value in increments of 1. Dragging to the right of the decimal point changes the fractional part of the number in increments of 0.01.

When the active patcher window is locked, numbers can be entered into a number box by clicking on it with the mouse and typing in a number on the computer keyboard. Typing the Return or Enter keys on Macintosh or the Enter key on Windows, or clicking outside the number box, sends the number out the outlet. You can also click on the number box and use the up or down arrows on your keyboard to increase or decrease the number by one. Shift+arrow jumps by tens. For the float number box, alt/option+arrow jumps by tenths.

When the format of the [number](https://docs.cycling74.com/reference/number) box is set to List, you can drag up or down on individual numbers within the list to change them.

When the format of the [number](https://docs.cycling74.com/reference/number) box is set to List or Text, you can select individual items in a list or message to replace them by typing, or select the entire contents to replace everything by typing.

### select

The word  select  will highlight the number box so you can type values into it. Clicking on any empty space in a locked patcher will deselect the object.

### set

The word  set , followed by a number, list or message, sets the stored and displayed value to that number without triggering output.

Arguments:

- input
  [int]

## See Also

| Name | Description |
| --- | --- |
| [float](https://docs.cycling74.com/reference/float) | Store a decimal number |
| [int](https://docs.cycling74.com/reference/int) | Store an integer value |
