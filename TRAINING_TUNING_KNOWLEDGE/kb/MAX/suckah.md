---
type: max
name: "suckah"
summary: "Get a pixel from the display"
signal: false
url: "https://docs.cycling74.com/reference/suckah/"
package: "Max"
see_also: ["route", "sprintf", "zl"]
---
# suckah

Get a pixel from the display

## Description

Creates a click-able area that returns an RGB color, or can accept any screen coordinates to get the RGB values of that pixel.

#### Discussion

Note -- while [cmd]-clicking on the [suckah](https://docs.cycling74.com/reference/suckah) when the patch is unlocked, the [suckah](https://docs.cycling74.com/reference/suckah) sees itself.

## Arguments

None.

## Attributes

### boundmode[int]: 0

When enabled, the [suckah](https://docs.cycling74.com/reference/suckah) object will only output color values within the bounds of the object's box. Coordinates outside of the object's bounds will be ignored.

### compatibility[int]: 0

Toggles the output of the [suckah](https://docs.cycling74.com/reference/suckah) object in old-style integer values in the range 0-255 (0) or 0.-1.0 floating-point values (1).

### outputalpha[int]: 1

Toggles the output of 3-element RGB lists (0) or 4-element RGBA lists that include alpha channel values (1).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### list

A list of two integers specifying x and y offset values from the upper left corner of the screen will cause the [suckah](https://docs.cycling74.com/reference/suckah) object to report the color at the specified screen location in RGB format.

Arguments:

- screen-x
  [int]
- screen-y
  [int]

### (mouse)

Clicking on the [suckah](https://docs.cycling74.com/reference/suckah) object causes it to report the color of the pixel at the current mouse position to be reported in RGB format (i.e., as a list of three ints).

## Output

### list

A list of three ints corresponding to the RGB value of the pixel selected by using the mouse or in response to a list of x and y offsets will be sent out the [suckah](https://docs.cycling74.com/reference/suckah) object's outlet.

## See Also

| Name | Description |
| --- | --- |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
