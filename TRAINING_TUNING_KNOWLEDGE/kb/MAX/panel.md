---
type: max
name: "panel"
summary: "Colored background area"
signal: false
url: "https://docs.cycling74.com/reference/panel/"
package: "Max"
see_also: ["fpic", "jsui", "lcd", "textbutton", "ubutton", "live.line"]
---
# panel

Colored background area

## Description

The [panel](https://docs.cycling74.com/reference/panel) object lets you create colored panels for use in creating user interfaces. The panel can be a variety of shapes, including circles, triangles, arrows, and rectangles with optional rounded corners. Shadows and gradients can also be used.

## Arguments

None.

## Attributes

### arrow\_orientation[int]: 0

If shape is set to 3 (arrow), this attribute sets the direction that the arrow is pointing.

Possible values:

0 = 'Left to Right'

1 = 'Right to Left'

2 = 'Top to Bottom'

3 = 'Bottom to Top'

### bgfillcolor[4 floats] >= 7.0.0

Sets the color of the [panel](https://docs.cycling74.com/reference/panel) in RGBA format. The panel can be configured to display a gradient using the [format palette](https://docs.cycling74.com/userguide/format_palette).

### border[int]: 0

Sets the size in pixels of the [panel](https://docs.cycling74.com/reference/panel) object's border.

### bordercolor[4 floats]

Sets the color of the [panel](https://docs.cycling74.com/reference/panel) border in RGBA format.

### drag\_window[int]: 0

When drag\_window is set to 1 and the patcher is locked, click-dragging on the panel will drag the patcher window.

### horizontal\_direction[int]: 0

If shape is set to 2 (triangle), this attribute sets the horizontal direction that the triangle is oriented.

Possible values:

0 = 'Left to Right'

1 = 'Right to Left'

### rounded[int]: 8

Sets the amount in pixels by which to round a rectangular panel.

### shadow[int]: 0

Sets the size, in pixels for a "shadow" effect for the [panel](https://docs.cycling74.com/reference/panel) object. Positive numbers create a "raised" shadow effect, and negative numbers created a "recessed" effect.

### shape[int]: 0

Sets the shape of the panel.

Possible values:

0 = 'Rectangle'

1 = 'Circle'

2 = 'Triangle'

3 = 'Arrow'

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### vertical\_direction[int]: 0

If shape is set to 2 (triangle), this attribute sets the vertical direction that the triangle is oriented.

Possible values:

0 = 'Top to Bottom'

1 = 'Center'

2 = 'Bottom to Top'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

When drag\_window is set to 1 and the patcher is locked, click-dragging on the panel will drag the patcher window.

### size

The word  size , followed by two numbers, specifies the width and height, in pixels, of the [panel](https://docs.cycling74.com/reference/panel) object. The default panel size has a width of 69 and a height of 57.

Arguments:

- width (pixels)
  [int]
- height (pixels)
  [int]

## Output

### none

Panel has no outputs and is used for creating user interfaces.

## See Also

| Name | Description |
| --- | --- |
| [fpic](https://docs.cycling74.com/reference/fpic) | Display an image |
| [jsui](https://docs.cycling74.com/reference/jsui) | Javascript user interfaces and graphics (Legacy Engine) |
| [lcd](https://docs.cycling74.com/reference/lcd) | Display graphics (deprecated) |
| [textbutton](https://docs.cycling74.com/reference/textbutton) | Button with text |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
| [live.line](https://docs.cycling74.com/reference/live.line) | Straight line |
