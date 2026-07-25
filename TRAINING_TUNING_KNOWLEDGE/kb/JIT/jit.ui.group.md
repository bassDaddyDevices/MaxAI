---
type: jitter
name: "jit.ui.group"
summary: "Group other UI objects into an interactive container"
signal: false
url: "https://docs.cycling74.com/reference/jit.ui.group/"
package: "Jitter Tools"
see_also: ["jit.ui.canvas", "jit.ui.button", "jit.ui.toggle", "jit.ui.number", "jit.ui.slider"]
---
# jit.ui.group

Group other UI objects into an interactive container

## Description

Use [jit.ui.group](https://docs.cycling74.com/reference/jit.ui.group) to organise and automatically position jit.ui objects in the rendering window.

## Arguments

None.

## Attributes

### align[symbol]

How the UI objects in the group align on the vertical axis (default="space-evenly").
Check the reference to see the possible values.

Possible values:

'space-between'

'space-evenly'

'center'

'top'

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

### collapse\_group[int]

Collapse or expand UI group (default=0)

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

### hide\_title\_bar[int]

Hide or show the title bar of UI group (default = 0)

### highlight\_color[int]

Background color when the mouse hovers on the UI object

### highlight\_hover[int]

Enable highlight on hover (default = 0)
When enabled and the mouse is on top of the UI object area,
the background changes to the highlight\_color.

### ignore\_click[int]

Ignore mouse clicks (default = 0)
When set to 1, the UI object will not respond to mouse clicks unless in edit mode.

### justify[symbol]

How the UI objects in the group are distributed on the horizontal axis (default = "space-evenly")

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

The name of this jit.ui.group object
If no name is manually set it will be assigned a random unique identifier.
The name of a jit.ui.group object will be used as other UI objects' group attribute.

### order\_in\_group[int]

Order index within a UI group when the group attribute is set.

### padding[4 ints]

Distance of the UI objects inside the group from the group edges (default = 0 0 0 0)
The arguments for this attribute are arranged like this:
left, top, right, bottom

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

### radiogroup\_mode[int]

Make the UI group behave like a [radiogroup](https://docs.cycling74.com/reference/radiogroup) (default = 0)
It only works when more than one [jit.ui.toggle](https://docs.cycling74.com/reference/jit.ui.toggle) objects are assigned to the [jit.ui.group](https://docs.cycling74.com/reference/jit.ui.group)

### read\_image\_background[symbol]

Load an image and display it on the background of the UI object
The argument to this attribute is the path of the image.

### read\_image\_button\_collapsed[symbol]

Load an image for the "+" button to display when group is collapsed

### read\_image\_button\_expanded[symbol]

Load an image for the "+" button to display when group is expanded

### resize\_when\_child\_groups\_collapse\_or\_expand[int]

Resize this UI group if children [jit.ui.group](https://docs.cycling74.com/reference/jit.ui.group) collapse or expand (default = 1)

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

### spacing[2 ints]

Horizontal and vertical spacing between contained UI objects (default = 0 0)

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
| [jit.ui.canvas](https://docs.cycling74.com/reference/jit.ui.canvas) |  |
| [jit.ui.button](https://docs.cycling74.com/reference/jit.ui.button) |  |
| [jit.ui.toggle](https://docs.cycling74.com/reference/jit.ui.toggle) |  |
| [jit.ui.number](https://docs.cycling74.com/reference/jit.ui.number) |  |
| [jit.ui.slider](https://docs.cycling74.com/reference/jit.ui.slider) |  |
