---
type: mc
name: "mc.matrix~"
summary: "Signal routing and mixing matrix (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.matrix~/"
package: "MC"
see_also: ["crosspatch", "gate~", "mcs.matrix~", "matrix", "matrixctrl", "receive~", "router", "selector~", "send~"]
---
# mc.matrix~

Signal routing and mixing matrix (multichannel)

## Description

[matrix~](https://docs.cycling74.com/reference/matrix~) is an array of signal connectors and mixers (adders). It can have any number of inlets and outlets. Signals entering at each inlet can be routed to one or more of the outlets, with a variable amount of gain. If an outlet is connected to more than one inlet, its output signal is the sum of the signals from the inlets.

When the [matrix~](https://docs.cycling74.com/reference/matrix~) object is created as [mcs.matrix~](https://docs.cycling74.com/reference/mcs.matrix~) all of its signal inlets are combined into a single multichannel inlet and all of its signal outlets are combined into a single multichannel outlet. The behavior of [mcs.matrix~](https://docs.cycling74.com/reference/mcs.matrix~) is otherwise identical to [matrix~](https://docs.cycling74.com/reference/matrix~).

#### Discussion

Connections between inputs and outputs can have their own gains, and each connection can include a ramp time to avoid clicks.

## Arguments

### inlets[int] optional

The first argument specifies the number of inlets.

### outlets[int] optional

The second argument specifies the number of outlets.

### default-connect-gain[float] optional

If a float value is provided as a third argument, it sets a default gain to be used for the  connect  message when a gain argument to  connect  is not supplied.

## Attributes

### exclusive[int]

The exclusive attribute controls whether multiple connections from a single input or to a single output are permitted.

Possible values:

0 = 'Off'
(
No connection restrictions
)
1 = 'Inputs'
(
Multiple connections from the same input are prevented
)
2 = 'Outputs'
(
Multiple connections to the same output are prevented
)
3 = 'Inputs + Outputs'
(
Multiple connections from the same input  *and*  multiple connections to the same outlet are prevented.
)

### ramp[float]

Alias:
ramptime

Sets the ramp time in milliseconds, switching signals without creating audible clicks.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### list

In left inlet: A list of three numbers connects inlets and outlets. The first number specifies the inlet, the second number specifies the outlet. If the third number is 0, the inlet is disconnected from the outlet. If the third number is non-zero it is interprted as a gain for the connection between the input and output.

Note: To specify the gain of individual connections, you must use three-element list messages rather than the  connect  message. Connections formed with the  connect  message always have a gain specified by the third argument initially given to the [matrix~](https://docs.cycling74.com/reference/matrix~) object. However, subsequent list messages can alter the gain of connections formed with the  connect  message.

The addition of an optional fourth element to the list message can be used to specify a ramp time, in milliseconds, for the individual connection. Example:  1 2 .8 500  would connect the first inlet to the second outlet and specify a gain of .8 and a ramp time of .5 seconds).

Arguments:

- inlet-to-outlet indices
  [list]

### clear

In left inlet: The word  clear  removes all connections.

### connect

In left inlet: The word  connect , followed by one or more ints, will connect any inlet specified by the first int to the outlet or outlets specified by the remaining ints in the list. Inlets and outlets are numbered from left to right, starting at zero. For example, the message  connect 0 0 1  would connect the first inlet from the left to the leftmost outlet and the second outlet from the left. If the last item in the list is a float, it will set the gain for all specified connections.

Arguments:

- inlet-to-outlet indices
  [list]

### dictionary

The [matrix~](https://docs.cycling74.com/reference/matrix~) object can receive dictionaries to configure its state. When receiving a dictionary, all previous connections are cleared and replaced by the connections in the dictionary. You can also set some attributes with a dictionary, including the default gain and ramp time.

Arguments:

- dict-name
  [symbol]

### disconnect

In left inlet: The word  disconnect , followed by one or more ints, will disconnect any inlet specified by the first int to the outlet or outlets specified by the remaining ints in the list.

Arguments:

- inlet-to-outlet indices
  [list]

### dump

In left inlet: The word  dump  causes the current state of all [matrix~](https://docs.cycling74.com/reference/matrix~) object connections to be sent out the rightmost outlet of the object in the form of a list for each connection. The list consists of two numbers which specify the inlet and outlet, followed by a float which specifies the gain for the connection. Note that the current gains are not necessarily the same as the target gains of all [matrix~](https://docs.cycling74.com/reference/matrix~) object connections, since a connection's gain can ramp to its new target over time.

### dumpconnections

In left inlet: The word  dumpconnections  causes the current contents of the [matrix~](https://docs.cycling74.com/reference/matrix~) object to be sent out the rightmost outlet of the object as a dictionary.

### dumptarget

In left inlet: The word  dumptarget  causes the target state of all [matrix~](https://docs.cycling74.com/reference/matrix~) object connections to be sent out the rightmost outlet of the object in the form of a list for each connection. The list consists of two numbers which specify the inlet and outlet, followed by a float which specifies the target gain for the connection. Note that the target gains are not necessarily the same as the current gains, which can be accessed with the  dump  message.

### print

In left inlet: The word  print  causes the current state of all [matrix~](https://docs.cycling74.com/reference/matrix~) object connections to be printed in the Max Console in the form of a list for each connection. The list consists of two numbers which specify the inlet and outlet, followed by a float which specifies the gain for the connection.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### list

Out right outlet: A set of lists describing the current or target state of all [matrix~](https://docs.cycling74.com/reference/matrix~) object connections will be sent out the right outlet in response to a  dump  or  dumptarget  message.

### signal

The output signals for each outlet are the sum of their connected inputs, scaled by the gain values of the connections.

## See Also

| Name | Description |
| --- | --- |
| [crosspatch](https://docs.cycling74.com/reference/crosspatch) | Patching Editor for Matrix Objects |
| [gate~](https://docs.cycling74.com/reference/gate~) | Route a signal to one of several outlets |
| [mcs.matrix~](https://docs.cycling74.com/reference/mcs.matrix~) | Signal routing and mixing matrix (multichannel I/O) |
| [matrix](https://docs.cycling74.com/reference/matrix) | Event routing matrix |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [receive~](https://docs.cycling74.com/reference/receive~) | Signals can be received from any loaded patcher, without patch cords |
| [router](https://docs.cycling74.com/reference/router) | Route messages to multiple locations |
| [selector~](https://docs.cycling74.com/reference/selector~) | Assign one of several inputs to an outlet |
| [send~](https://docs.cycling74.com/reference/send~) | Send signals without patch cords |
