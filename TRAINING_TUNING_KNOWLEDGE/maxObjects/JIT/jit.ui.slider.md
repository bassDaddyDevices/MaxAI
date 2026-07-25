---
type: jitter
name: "jit.ui.slider"
summary: "An interactive slider in the rendering window"
signal: false
url: "https://docs.cycling74.com/reference/jit.ui.slider/"
package: "Jitter Tools"
see_also: ["jit.ui.canvas", "jit.ui.button", "jit.ui.toggle", "jit.ui.number", "jit.ui.group"]
---
# jit.ui.slider

An interactive slider in the rendering window

## Description

Use the widgets to move and resize this UI object in the rendering window using the mouse.

## Arguments

None.

## Attributes

### background\_color[4 floats]

Color of main body of the UI object (default = 0.7 0.7 0.7 1.)

### border[int]

Enable border around the UI object (default = 1)

### border\_color[4 floats]

Color of border around the UI object (default = 0. 0. 0. 1.)

### border\_size[float]

Size of border around the UI object in pixels

### canvas[symbol]

Name of jit.ui.canvas to draw to
jit.ui objects always need the canvas attribute set, unless they are attache to a [jit.ui.group](https://docs.cycling74.com/reference/jit.ui.group) object.
In this case, they will inherit the canvas attribute of the group.

### constant\_pixel\_size[int]

Maintain consistent pixel size regardless of rendering window size (default = 1).
When enabled, the UI object retains its pixel dimensions even if the rendering window is resized.

### enable[int]

Enable flag (default = 1)
When the flag is set, drawing is enabled.

### enable\_label[int]

Enable label text (default = 1)
When the flag is set, the label text is shown.

### enable\_mouse\_editing[int]

Enable mouse editing (default = 1)
When enabled and the patch is unlocked, the UI object can be resized and moved with the mouse.

### enum\_items[0 atoms]

Set a list of symbols to be displayed as the slider value
It requires the mode attribute to be set ot "enum" for it to have any effect.

### font[symbol]

Font name

### fontsize[float]

Font size

### group[symbol]

Name of assigned [jit.ui.group](https://docs.cycling74.com/reference/jit.ui.group) object
When set, this UI object will be assigned to that [jit.ui.group](https://docs.cycling74.com/reference/jit.ui.group)

### height[int]

Height of the UI object in pixels

### hide\_background[int]

Hide UI object background (default = 0)

### hide\_slider\_value[int]

Hide slider value (default = 0)

### highlight\_color[int]

Background color when the mouse hovers on the UI object (default = 0.9 0.9 0.9 1)

### highlight\_hover[int]

Enable highlight on hover (default = 0)
When enabled and the mouse is on top of the UI object area,
the background changes to the highlight\_color.

### ignore\_click[int]

Ignore mouse clicks (default = 0)
When set to 1, the UI object will not respond to mouse clicks unless in edit mode.

### indicator\_style[symbol]

Change slider indicator to "filled" or "indicator" (default = "filled")

Possible values:

'filled'

'indicator'

### indicator\_thickness[float]

Thickness of slider indicator when indicator\_style is set to "indicator" (default = 0.02)

### keep\_in\_window[int]

Prevent the UI object from moving outside the rendering window (default = 1).

### label[symbol]

UI object label text

### label\_align[int]

Text alignment mode (default = 1 (center))

### label\_bold[int]

Label text bold style (default = 1)

### label\_color[4 floats]

Label text color (default = 1. 1. 1. 1.)

### label\_offset[int]

Label text offset in pixels from center of UI object

### layer[int]

UI Object layer number (default = 0)

### mode[symbol]

Slider mode can be "enum" or "slider" (default = "slider").
When in "enum" mode, the slider value will be chosen from the list of symbols set with the attribute enum\_items.

Possible values:

'slider'

'enum'

### order\_in\_group[int]

Order index within a UI group when the group attribute is set.

### position[2 ints]

UI object position in pixels
The position of the UI object is constant in relation to the position of its anchor.

### position\_anchor[2 ints]

UI object anchor position in pixels
The position of the UI object is always constant in relation to its anchor position.
When the rendering window is resized, the anchor maintains the same position, proportion-wise, inside the rendering window,
while the UI object follows its anchor.

### position\_anchor\_percentage[2 ints]

UI object anchor position as a percentage of the rendering window size (default = 50 50)
Sets the anchor position of the UI object as a percentage of the rendering window dimensions.
The UI object maintains its position relative to this anchor when the window is resized.

### read\_image\_background[symbol]

Load an image and display it on the background of the UI object
The argument to this attribute is the path of the image.

### read\_image\_slider[symbol]

Load an image and display it on the slider area of the UI object
The argument to this attribute is the path of the image.

### roundness\_corners[float]

Roundness of corners of the UI object (default = 0.2)

### scale[float]

Uniform scale of the UI object as a single scalar number (default = 1)

### shadow[int]

Enable shadow flag (default = 1)

### shadow\_color[4 floats]

Color of the shadow (default = 0.1 0.1 0.1 0.5)

### shadow\_offset[2 ints]

Shadow offset in pixels from center of object

### slider\_color[4 floats]

Color of slider area of the UI object (default = 0.2 0.2 0.2 1.)

### slider\_precision[symbol]

Display and output the slider value as decimal or integer (default = "precision\_float")
Possible values: "precision\_float", "precision\_int".

Possible values:

'precision\_float'

'precision\_int'

### slider\_range[float]

Range of the slider value (default = 0. to 1.)

### slider\_value[number]

Set UI slider value

### slider\_value\_align[symbol]

Slider value text alignment mode (default = 1 (center))

### slider\_value\_bold[int]

Slider value text bold style (default = 1)

### slider\_value\_color[4 floats]

Slider value text color (default = 1. 1. 1. 1.)

### slider\_value\_fontsize[float]

Slider value text font size

### slider\_value\_offset[2 ints]

Slider value text offset from center of object in pixels

### take\_row\_group[int]

Occupy a full row within a UI group (default = 0)

### texture\_background[symbol]

Name of texture to be applied to background of the UI object (default = none)

### texture\_slider[symbol]

Name of texture to be applied to slider area of the UI object (default = none)

### width[int]

Width of the UI object in pixels

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.ui.canvas](https://docs.cycling74.com/reference/jit.ui.canvas) |  |
| [jit.ui.button](https://docs.cycling74.com/reference/jit.ui.button) |  |
| [jit.ui.toggle](https://docs.cycling74.com/reference/jit.ui.toggle) |  |
| [jit.ui.number](https://docs.cycling74.com/reference/jit.ui.number) |  |
| [jit.ui.group](https://docs.cycling74.com/reference/jit.ui.group) |  |
