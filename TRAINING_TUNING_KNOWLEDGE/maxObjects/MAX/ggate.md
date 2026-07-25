---
type: max
name: "ggate"
summary: "Send input to one of two outlets"
signal: false
url: "https://docs.cycling74.com/reference/ggate/"
package: "Max"
see_also: ["gate", "gswitch", "onebang", "pictctrl", "route", "router", "send", "switch"]
---
# ggate

Send input to one of two outlets

## Description

Switches the right inlet between two output pathways.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats] >= 7.0.0

Sets the outline color of the [gswitch2](https://docs.cycling74.com/reference/gswitch2) object in RGBA format.

### color[4 floats] >= 7.0.0

Sets the color of the [gswitch2](https://docs.cycling74.com/reference/gswitch2) pathway in RGBA format.

### int[atom\_long]: 0

Specifies which one of the two outlets is to be open. The default is 0 (left outlet).

### outputs[atom\_long]: 2

Sets the number of outputs. Default value is 2.

### param\_connect[symbol]:

Connect to Parameter

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### switchcolor[4 floats] >= 7.0.0

Sets the color of the switch contacts in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes the connection to be made to the other outlet. Clicking on the graphic display with the mouse has the same effect.

### int

The number specifies which one of the two outlets is to be open. 0 specifies the left outlet, any number other than 0 specifies the right outlet. The graphical icon shows the open outlet.

Arguments:

- outlet
  [int]

### float

In left inlet: Converted to  int .

Arguments:

- outlet
  [float]

### (mouse)

Clicking on [gswitch2](https://docs.cycling74.com/reference/gswitch2) causes the connection to be made to the other outlet.

## Output

### anything

Messages received in the right inlet are passed out one of the two outlets. If the number in the left inlet is 0, incoming messages are sent out the left outlet. If the number in the left inlet is not 0, messages are sent out the right outlet.

## See Also

| Name | Description |
| --- | --- |
| [gate](https://docs.cycling74.com/reference/gate) | Pass input to an outlet |
| [gswitch](https://docs.cycling74.com/reference/gswitch) | Select output from two inlets |
| [onebang](https://docs.cycling74.com/reference/onebang) | Gate bangs using a bang |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [router](https://docs.cycling74.com/reference/router) | Route messages to multiple locations |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [switch](https://docs.cycling74.com/reference/switch) | Accept messages from a specific inlet |
