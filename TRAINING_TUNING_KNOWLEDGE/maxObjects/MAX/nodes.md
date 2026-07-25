---
type: max
name: "nodes"
summary: "Interpolate data graphically"
signal: false
url: "https://docs.cycling74.com/reference/nodes/"
package: "Max"
see_also: ["multislider", "pictslider", "pattrstorage"]
---
# nodes

Interpolate data graphically

## Description

The [nodes](https://docs.cycling74.com/reference/nodes) object displays overlapping circular regions ("nodes") and outputs a list of interpolated weights based on the distance between a slider position and each node's center point. You can drag the slider with the mouse or set its position with a list of coordinates.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the nodes background color in RGBA format.

### candycane[int]: 1

Sets the [nodes](https://docs.cycling74.com/reference/nodes) object to use multiple colors for the nodes, with the color pattern repeating (like the stripes in a candycane) every N nodes (indicated by the integer argument).

### candycane2[4 floats]

Sets the RGBA values for the second node color in candycane mode.

### candycane3[4 floats]

Sets the RGBA values for the third node color in candycane mode.

### candycane4[4 floats]

Sets the RGBA values for the fourth node color in candycane mode.

### candycane5[4 floats]

Sets the RGBA values for the fifth node color in candycane mode.

### candycane6[4 floats]

Sets the RGBA values for the sixth node color in candycane mode.

### candycane7[4 floats]

Sets the RGBA values for the seventh node color in candycane mode.

### candycane8[4 floats]

Sets the RGBA values for the eighth node color in candycane mode.

### clickmoveinactive[int]: 1 >= 8.0.0

When disabled, inactive nodes cannot be moved using the mouse.

### disabledalpha[float]: 0.4

Sets the transparency factor (between 0. and 1.) applied to the disabled nodes.

### displayknob[int]: 0

Sets the display options for the slider. The display options are:

0: Hidden: the slider is not displayed.

1: Circle: the slider is displayed as a circle.

2: Picture: the slider uses a picture file.

Possible values:

0 = 'Hidden'

1 = 'Circle'

2 = 'Picture'

### dynamic[int]: 1 >= 9.0.0

When enabled, dynamic updates the count and position of nodes based on the number of presets in a connected [preset](https://docs.cycling74.com/reference/preset) object. If the left outlet of [nodes](https://docs.cycling74.com/reference/nodes) is not connected to the inlet of a [preset](https://docs.cycling74.com/reference/preset), dynamic has no effect.

### filternodeschanges[int]: 0 >= 8.0.0

When enabled, the middle outlet will only output the data for each node when it is changed.

### knobcolor[4 floats]

Sets the RGBA values for knob circle (when
displayknob
is set to circle).

### knobpict[symbol]: <default>

The word  knobpict , followed by the name of a file, will read any type of file into the [nodes](https://docs.cycling74.com/reference/nodes) object and attempt to interpret it as a knob image (when
displayknob
is set to Picture).

### knobsize[float]: 10.

Sets the knob size in pixels.

### maxdynamicnodes[int]: 8 >= 9.0.0

Sets the maximum number of nodes created for presets in a connected [preset](https://docs.cycling74.com/reference/preset) object.

### mousemode[int]: 0

Sets the mouse behavior. Mouse behavior options are:

0: Automatic: allows the mouse to change the nodes position or the slider (if displayed).

1: Nodes: the mouse can only edit the nodes position and size.

2: Slider; the mouse can only changes the slider location.

Possible values:

0 = 'Automatic'

1 = 'Nodes'

2 = 'Slider'

### nodecolor[4 floats]

Sets the RGBA values for the first node.

### nodenumber[atom\_long]: 1

Sets the number of nodes.

### nodesnames[64 symbols]: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64

Sets the display names of individual nodes

### nsize[64 floats]

Sets the sizes of every node.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### pointcolor[4 floats]

Sets the RGBA values for the center color of the node.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the RGBA values for the text.

### xplace[64 floats]

Sets the x position of every node.

### yplace[64 floats]

Sets the y position of every node.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Outputs the nodes values out the second outlet.

### list

Sets the position of the slider (if present) and outputs the new coefficients.

Arguments:

- x
  [number]
- y
  [number]

### active

Sets the active state (0 disabled, 1 enabled) of the node(s). Index numbering for the nodes starts at 1. When the index is set to 0, it affects every node.

Arguments:

- index
  [int]
- state
  [int]

### ad

Sets the position of the slider (if present) in polar coordinates (azimuth in degrees, distance) and outputs the new coefficients.

Arguments:

- azimuth
  [float]
- distance
  [float]

### clear

TEXT\_HERE

### getactive

The word  getactive  causes the [nodes](https://docs.cycling74.com/reference/nodes) object to send a list of the active states of every node out the  dumpout  outlet. An optional argument allows you to query the active state of a specific node.

Arguments:

- index
  [int]

### getad

The word  getad  causes the [nodes](https://docs.cycling74.com/reference/nodes) object to send a list of polar coordinates of the slider out the  dumpout  outlet.

### getnode

The word  getnode  causes the [nodes](https://docs.cycling74.com/reference/nodes) object to send a list of the values of the node {x, y, size, active} of every node out the  dumpout  outlet. An optional argument allows you to query a specific node.

Arguments:

- index
  [int]

### getsize

The word  getsize  causes the [nodes](https://docs.cycling74.com/reference/nodes) object to send a list of the values of the node size of every node out the  dumpout  outlet. An optional argument allows you to query a specific node.

Arguments:

- index
  [int]

### getxy

The word  getxy  causes the [nodes](https://docs.cycling74.com/reference/nodes) object to send a list of cartesian coordinates of the slider out the  dumpout  outlet.

### (mouse)

You can manipulate the nodes or the slider depending on the
displayknob
and
mousemode
attributes.

### setnode

Sets the position of the node(s). Index numbering for the nodes starts at 1. When the index is set to 0, it affects every node. You can also provide additional arguments to define the size and active state.

Arguments:

- index
  [int]
- x
  [float]
- y
  [float]
- size
  [float]
- active
  [int]

### setnodead

Sets the position of the node(s) in azimuth (angle in degree) and distance. Index numbering for the nodes starts at 1. When the index is set to 0, it affects every node. You can also provide additional arguments to define the size and active state.

Arguments:

- index
  [int]
- azimuth
  [float]
- distance
  [float]
- size
  [float]
- active
  [int]

### setnodename

Sending the message  setnodename  followed by an integer and a symbol changes the displayed name for that node from its index value to the specified symbol.

Arguments:

- nodename
  [list]

### setsize

Sets the size of the specified node. Index numbering for the nodes starts at 1. When the index is set to 0, it affects every node.

Arguments:

- index
  [int]
- size
  [float]

## See Also

| Name | Description |
| --- | --- |
| [multislider](https://docs.cycling74.com/reference/multislider) | Display data as sliders or a scrolling display |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [pattrstorage](https://docs.cycling74.com/reference/pattrstorage) | Save and recall pattr presets |
