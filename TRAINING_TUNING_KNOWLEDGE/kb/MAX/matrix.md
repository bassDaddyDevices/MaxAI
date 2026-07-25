---
type: max
name: "matrix"
summary: "Event routing matrix"
signal: false
url: "https://docs.cycling74.com/reference/matrix/"
package: "Max"
see_also: ["crosspatch", "gate", "matrix~", "matrixctrl", "receive", "router", "switch", "send"]
---
# matrix

Event routing matrix

## Description

The [matrix](https://docs.cycling74.com/reference/matrix) object controls the connections between inlets and outlets. You can route any inlet to any combination of outlets. Each connection has an associated gain factor and all values travelling through [matrix](https://docs.cycling74.com/reference/matrix) can be scaled. It shares the same control protocol with the signal [matrix~](https://docs.cycling74.com/reference/matrix~) object, but unlike [matrix~](https://docs.cycling74.com/reference/matrix~), the outlets of the [matrix](https://docs.cycling74.com/reference/matrix) object do not add the values of multiple inputs. [matrix](https://docs.cycling74.com/reference/matrix) is best understood as a combination of [gate](https://docs.cycling74.com/reference/gate) and [switch](https://docs.cycling74.com/reference/switch) with many more features.

## Arguments

### number-of-inputs[int] optional

Sets the number of inputs; if not present the default is 2.

### number-of-outputs[int] optional

Sets the number of outputs; if not present the default is 2.

### default-connect-gain[float] optional

If a float value is provided as a third argument, it sets a default gain to be used for the  connect  message when a gain argument to  connect  is not supplied.

## Attributes

### defaultgain[float]

Default Gain

### exclusive[int]

Exclusive Connections

Possible values:

0 = 'Off'

1 = 'Inputs'

2 = 'Outputs'

3 = 'Inputs + Outputs'

### inhibit[int]

When inhibit is enabled, messages such as  bang  or  clear  are not passed through the matrix.

### inrange[float]

Sets an input range for constaining incoming values and/or scaling. When an input range is set, incoming numbers and lists are constained so they are within the range. If the outscale attribute is also set, the incoming values are  *also*  scaled so they map from the input range to the output scaling.

### outscale[float]

Sets an output range for constaining output values and/or scaling. When an output scaling is set, values are constained so they are within the range before being sent out the object's outlets. If the inrange attribute is also set, the incoming values are  *also*  scaled so they map from the input range to the output scaling.

### scalemode[int]

When the scalemode attribute is enabled, input, gain, and output scaling will be applied to numeric arguments to messages that do not start with a number. For example, if scalemode is enabled, the message  set 74  will scale the 74.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### list

In left inlet: A list either adds or removes a connection between an inlet and outlet. The format of the message is  input index  (starting at 0 for the object's secont inlet from left),  output index  (starting at 0),  gain . A non-zero gain adds a connection with the designated gain; a gain of 0 deletes the connection if it exists.

A list received in any other inlet is routed to any connected outlets.

### clear

In left inlet: The  clear  message removes all inlet - outlet connections.

### connect

In left inlet: The word  connect  followed by an inlet index, outlet index, and optional gain, adds a connection between the inlet and outlet. If the gain value is not present, the default gain (set either via typed-in argument or the defaultgain attribute) will be used for the connection.

Arguments:

- index
  [list]

### dictionary

The word  dictionary  followed a symbol naming a Max dictionary object, replaces all connections with the ones in the dictionary. If the dictionary has no connections, the existing connections are cleared. To see the format of the dictionary, send the  dumpdictionary  message and print or otherwise capture the resulting dictionary that is sent out the object's left outlet.

Arguments:

- dictionary name
  [symbol]

### disconnect

In left inlet: The word  disconnect  followed by an inlet index and outlet index deletes a connection between the inlet and outlet if it exists.

Arguments:

- index
  [list]

### dumpconnections

The  dumpdictionary  message outputs a Max dictionary message listing all current connections of the [matrix](https://docs.cycling74.com/reference/matrix) object.

## See Also

| Name | Description |
| --- | --- |
| [crosspatch](https://docs.cycling74.com/reference/crosspatch) | Patching Editor for Matrix Objects |
| [gate](https://docs.cycling74.com/reference/gate) | Pass input to an outlet |
| [matrix~](https://docs.cycling74.com/reference/matrix~) | Signal routing and mixing matrix |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [router](https://docs.cycling74.com/reference/router) | Route messages to multiple locations |
| [switch](https://docs.cycling74.com/reference/switch) | Accept messages from a specific inlet |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [switch](https://docs.cycling74.com/reference/switch) | Accept messages from a specific inlet |
