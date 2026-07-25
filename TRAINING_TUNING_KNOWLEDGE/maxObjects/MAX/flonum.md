---
type: max
name: "flonum"
summary: "Display and output numbers, lists, and messages"
signal: false
url: "https://docs.cycling74.com/reference/flonum/"
package: "Max"
see_also: ["float", "int"]
---
# flonum

Display and output a number

## Description

Display, input, and output floating-point numbers in a number box.

#### Discussion

Note: The way floating-point numbers are stored on your computer means that not all numbers can be represented. This means that you will often see values such as 2.3 displayed as 2.29999. Clicking in the  Float Display Correction  checkbox in the [Interface pane](https://docs.cycling74.com/documentation/interface_pane.maxvig.xml) of the Max Preferences Window will make the Max application round numbers and truncates them at what it guesses is the least significant digit.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the color for the [number box](https://docs.cycling74.com/reference/flonum) object's displayed/unclicked background.

### bordercolor[4 floats]

Sets the color for the [number box](https://docs.cycling74.com/reference/flonum) object's outline.

### cantchange[int]: 0

Toggles the ability to disallow changes with the mouse or the computer keyboard. The default is 0 (mouse/keyboard output active).

### hbgcolor[4 floats]

Sets the RGBA values for the background of the [number box](https://docs.cycling74.com/reference/flonum) when it is highlighted or being updated.

### htextcolor[4 floats]

Sets the RGBA values for the number values displayed by the [number box](https://docs.cycling74.com/reference/flonum) when it is highlighted or being updated.

### htricolor[4 floats]

Sets the highlight color for the triangle inside the [number box](https://docs.cycling74.com/reference/number) object that indicates that the contents are editable.

### maximum[atom]: <none>

Sets the maximum value that can be displayed or sent out by the [number box](https://docs.cycling74.com/reference/flonum).

### minimum[atom]: <none>

Sets the minimum value that can be displayed or sent out by the [number box](https://docs.cycling74.com/reference/flonum).

### mouseup[int]: 0

Toggles the ability to send a number only when the mouse button is released, rather than continuously. The default is 0 (continuous display).

### numdecimalplaces[int]: 0

Specifies the number of decimal places used when displaying a value.

### outputonclick[int]: 0

Toggles outputting a value on mouse click.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/documentation/live_parameters.maxvig.xml) and allows for [setting initial parameter values](https://docs.cycling74.com/documentation/parameter_enable.maxvig.xml) in the Max environment.

### textcolor[4 floats]

Sets the color for the [number box](https://docs.cycling74.com/reference/flonum) object's displayed/unclicked number values.

### triangle[int]: 1

Toggles the drawing of a triangular arrow pointing to the number in the number box. The default is 1 (draw the triangle).

### tricolor[4 floats]

Sets the color for the triangle inside the [number box](https://docs.cycling74.com/reference/number) object that indicates that the contents are editable.

### triscale[float]: 1.

Scales the size of the triangle drawn in the number box.

#### Legacy

### brgba

Typelist (3 ints)

brgba  is a legacy RGB alias for the bgcolor RGBA attribute. See [here](https://docs.cycling74.com/documentation/maxcolor.maxvig.xml) for more information.

### frgba

Typelist (3 ints)

frgba  is a legacy RGB alias for the textcolor RGBA attribute. See [here](https://docs.cycling74.com/documentation/maxcolor.maxvig.xml) for more information.

### rgba2

Typelist (3 ints)

rgba2  is a legacy RGB alias for the htextcolor RGBA attribute. See [here](https://docs.cycling74.com/documentation/maxcolor.maxvig.xml) for more information.

### rgba3

Typelist (3 ints)

rgba3  is a legacy RGB alias for the hbgcolor RGBA attribute. See [here](https://docs.cycling74.com/documentation/maxcolor.maxvig.xml) for more information.

### rgba4

Typelist (3 ints)

rgba4  is a legacy RGB alias for the bordercolor RGBA attribute. See [here](https://docs.cycling74.com/documentation/maxcolor.maxvig.xml) for more information.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the currently displayed number out the outlet.

### int

The number received in the inlet is stored and displayed in the [number box](https://docs.cycling74.com/reference/flonum) and sent out the outlet.

Arguments:

- input
  [int]

### float

The number received in the inlet is stored and displayed in the [number box](https://docs.cycling74.com/reference/flonum) and sent out the outlet.

Arguments:

- input
  [float]

### max

The word  max , followed by a number, sets the maximum value that can be displayed or sent out by the [number box](https://docs.cycling74.com/reference/flonum). The word  max  by itself sets the maximum to None (removes a prior maximum value constraint).

Arguments:

- maximum-value
  [list]

### min

The word  min , followed by a number, sets the minimum value that can be displayed or sent out by the [number box](https://docs.cycling74.com/reference/flonum). The word  min  by itself sets the minimum to None (removes a prior minimum value constraint).

Arguments:

- minimum
  [list]

### (mouse)

Clicking and dragging up and down on the number box with the mouse (when the patcher window is locked) moves the displayed value up and down, and outputs the new values continuously.

In the float number box, dragging to the left of the decimal point changes the value in increments of 1. Dragging to the right of the decimal point changes the fractional part of the number in increments of 0.01.

When the active patcher window is locked, numbers can be entered into a number box by clicking on it with the mouse and typing in a number on the computer keyboard. Typing the Return or Enter keys on Macintosh or the Enter key on Windows, or clicking outside the number box, sends the number out the outlet.

### select

The word  select  will make the number box active so that you can type numbers straight into it (click on any empty space in a locked patcher to deselect it).

### set

The word  set , followed by a number, sets the stored and displayed value to that number without triggering output.

Arguments:

- input
  [int]

## Menu Items

### Color

Choosing the  **Color...**  menu item from the  **Object**  menu when the object is selected opens a [color picker](https://docs.cycling74.com/documentation/color_palette.maxvig.xml), permitting adjustment to the appearance of the [number box](https://docs.cycling74.com/reference/flonum).

## Output

### float

The number displayed in the [number box](https://docs.cycling74.com/reference/flonum) is sent out the outlet. Numbers received in the inlet or typed on the computer keyboard can exceed the limits of the [number box](https://docs.cycling74.com/reference/flonum), but the value that gets stored, displayed, and sent out will automatically be limited to the specified range.

### int

The number displayed in the [number box](https://docs.cycling74.com/reference/flonum) is sent out the outlet. Numbers received in the inlet or typed on the computer keyboard can exceed the limits of the [number box](https://docs.cycling74.com/reference/flonum), but the value that gets stored, displayed, and sent out will automatically be limited to the specified range.

## See Also

| Name | Description |
| --- | --- |
| [float](https://docs.cycling74.com/reference/float) | Store a decimal number |
| [int](https://docs.cycling74.com/reference/int) | Store an integer value |
