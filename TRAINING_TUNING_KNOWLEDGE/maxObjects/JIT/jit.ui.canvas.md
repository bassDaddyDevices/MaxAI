---
type: jitter
name: "jit.ui.canvas"
summary: "A canvas to render jit.ui objects"
signal: false
url: "https://docs.cycling74.com/reference/jit.ui.canvas/"
package: "Jitter Tools"
see_also: ["jit.ui.button", "jit.ui.slider", "jit.ui.toggle", "jit.ui.number", "jit.ui.group"]
---
# jit.ui.canvas

A canvas to render jit.ui objects

## Description

Every jit.ui object needs the canvas attribute set to a [jit.ui.canvas](https://docs.cycling74.com/reference/jit.ui.canvas) name.
There can be more than a single [jit.ui.canvas](https://docs.cycling74.com/reference/jit.ui.canvas) per rendering context.

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

### constant\_pixel\_size[int]

Maintain consistent pixel size regardless of rendering window size (default = 1).
When enabled, the UI object retains its pixel dimensions even if the rendering window is resized.

### drawto[symbol]

The named drawing context in which to draw (default = none)
A named drawing context is a named instance of a jit.window, jit.pwindow, or
jit.matrix object that has an instance of the jit.gl.render object
associated with it.

### edit\_mode[int]

Manually set edit or lock mode for contained UI objects (default = 0)
By default edit and lock mode is set with the unlocking and locking of the patcher.
This flag allows to manually set edit or lock mode, until the lock status of the patcher is changed.

### enable[int]

Enable flag (default = 1)
When the flag is set, drawing is enabled.

### enable\_label[int]

Enable label text (default = 1)
When the flag is set, the label text is shown.

### enable\_mouse\_editing[int]

Enable mouse editing (default = 1)
When enabled and the patch is unlocked, the UI object can be resized and moved with the mouse.

### font[symbol]

Font name

### fontsize[float]

Font size

### grid\_cell\_size[2 ints]

Size in pixels of the grid cells (default = 100 100)
Set the attribute show\_grid to 1 to visualize the canvas grid.

### grid\_offset[2 ints]

Offset in pixels of the grid (default = 0 0)

### group[symbol]

Name of assigned [jit.ui.group](https://docs.cycling74.com/reference/jit.ui.group) object
When set, this UI object will be assigned to that [jit.ui.group](https://docs.cycling74.com/reference/jit.ui.group)

### height[int]

Height of the UI object in pixels

### hide\_background[int]

Hide UI object background (default = 0)

### highlight\_color[int]

Background color when the mouse hovers on the UI object (default = 0.9 0.9 0.9 1)

### highlight\_hover[int]

Enable highlight on hover (default = 0)
When enabled and the mouse is on top of the UI object area,
the background changes to the highlight\_color.

### ignore\_click[int]

Ignore mouse clicks (default = 0)
When set to 1, the UI object will not respond to mouse clicks unless in edit mode.

### ignore\_patch\_lock[int]

Ignore patch lock status (default = 0)
When the flag is set, [jit.ui.canvas](https://docs.cycling74.com/reference/jit.ui.canvas) will decouple the lock status of the patch from jit.ui edit / lock mode.
To go into edit or lock mode you can then use the edit\_mode attribute.

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

### name[symbol]

Name of the [jit.ui.canvas](https://docs.cycling74.com/reference/jit.ui.canvas)
If this attribute is not set, the canvas will automatically receive a unique name.
The name of this canvas must be set as the value for the canvas attribute of jit.ui objects that should draw to this canvas.

### order\_in\_group[int]

Order index within a UI group when the group attribute is set.

### output\_texture[int]

Capture to the internal texture (default = 0)
When enabled, all rendering is captured to texture and the texture name
is output out the left outlet.

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

### show\_grid[int]

Show grid flag (default = 0)
When the flag is set, a 2D grid will appear in the rendering window.
The position and corners of jit.ui objects can be snapped to the grid intersections by pressing "ctrl" or "cmd" and dragging with the mouse.

### take\_row\_group[int]

Occupy a full row within a UI group (default = 0)

### texture\_background[symbol]

Name of texture to be applied to background of the UI object (default = none)

### width[int]

Width of the UI object in pixels

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.ui.button](https://docs.cycling74.com/reference/jit.ui.button) |  |
| [jit.ui.slider](https://docs.cycling74.com/reference/jit.ui.slider) |  |
| [jit.ui.toggle](https://docs.cycling74.com/reference/jit.ui.toggle) |  |
| [jit.ui.number](https://docs.cycling74.com/reference/jit.ui.number) |  |
| [jit.ui.group](https://docs.cycling74.com/reference/jit.ui.group) |  |
