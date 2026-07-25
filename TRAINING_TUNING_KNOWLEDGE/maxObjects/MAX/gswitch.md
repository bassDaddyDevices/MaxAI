---
type: max
name: "gswitch"
summary: "Select output from two inlets"
signal: false
url: "https://docs.cycling74.com/reference/gswitch/"
package: "Max"
see_also: ["gate", "ggate", "pictctrl", "receive", "route", "router", "switch"]
---
# gswitch

Select output from two inlets

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats] >= 7.0.0

Sets the outline color of the [gswitch](https://docs.cycling74.com/reference/gswitch) object in RGBA format.

### color[4 floats] >= 7.0.0

Sets the color of the [gswitch](https://docs.cycling74.com/reference/gswitch) pathway in RGBA format.

### inputs[atom\_long]: 2

Sets the number of inputs for the [gswitch](https://docs.cycling74.com/reference/gswitch) object.

### int[atom\_long]: 0

Specifies which one of the other two inlets is to be open. The default is 0 (middle inlet).

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### switchcolor[4 floats] >= 7.0.0

Sets the switch contacts color of the [gswitch](https://docs.cycling74.com/reference/gswitch) object in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Causes the connection to be made to the other inlet.

### int

In left inlet: The number specifies which one of the other inlets is to be open. 0 specifies the middle inlet, any number other than 0 specifies the right inlet. The [gswitch](https://docs.cycling74.com/reference/gswitch) icon shows the open inlet.

Arguments:

- inlet
  [int]

### float

In left inlet: Converted to  int .

Arguments:

- inlet
  [float]

### list

A list sent to one of the [gswitch](https://docs.cycling74.com/reference/gswitch) inlets will pass through if the appropriate connection is made.

Arguments:

- input
  [list]

### anything

Any message sent to one of the [gswitch](https://docs.cycling74.com/reference/gswitch) inlets will pass through if the appropriate connection is made.

Arguments:

- input
  [list]

### (mouse)

Clicking on [gswitch](https://docs.cycling74.com/reference/gswitch) causes the connection to be made to the other inlet.

## Output

### anything

If the number in the left inlet is  0 , all messages received in the middle inlet are passed out the outlet, and messages received in the right inlet are ignored. If the number in the left inlet is not 0, messages received in the middle inlet are ignored, and all messages received in the right inlet are passed out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [gate](https://docs.cycling74.com/reference/gate) | Pass input to an outlet |
| [ggate](https://docs.cycling74.com/reference/gswitch2) | Send input to one of two outlets |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [router](https://docs.cycling74.com/reference/router) | Route messages to multiple locations |
| [switch](https://docs.cycling74.com/reference/switch) | Accept messages from a specific inlet |
