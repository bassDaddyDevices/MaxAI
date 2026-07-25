---
type: msp
name: "mcs.selector~"
summary: "Assign a channel of a multi-channel signal to an outlet"
signal: true
url: "https://docs.cycling74.com/reference/mcs.selector~/"
package: "MC"
see_also: ["gate~", "crosspatch", "selector~", "switch"]
---
# mcs.selector~

Assign a channel of a multi-channel signal to an outlet

## Description

Use the [selector~](https://docs.cycling74.com/reference/selector~) object to choose between one of several input signals (or none). The [selector~](https://docs.cycling74.com/reference/selector~) is similar to the Max [switch](https://docs.cycling74.com/reference/switch) object but for signals, however if no input is chosen, it outputs a signal composed of zero values.

When the [selector~](https://docs.cycling74.com/reference/selector~) object is created as [mcs.selector~](https://docs.cycling74.com/reference/mcs.selector~) all of its signal inlets are combined into a single multichannel inlet. The behavior of [mcs.selector~](https://docs.cycling74.com/reference/mcs.selector~) is otherwise analogous to [selector~](https://docs.cycling74.com/reference/selector~) with the exception that [mcs.selector~](https://docs.cycling74.com/reference/mcs.selector~) changes its number of inputs (auto-adapts) as the number of inputs in the multi-channel signal connected to its right inlet change.

## Arguments

### number-of-inputs[int] optional

Number of inputs

### initially-open-inlet[int] optional

Specify which input is initially selected. If 0, where all signals are shut off and a zero signal is sent out.

## Attributes

### ramptime[float]: 0.

Alias:
ramp

Sets the ramp time to use for fading connections in milliseconds. When the ramptime attribute is non-zero, [selector~](https://docs.cycling74.com/reference/selector~) will crossfade between inputs when the acive input is switched, fading out the input that was previous active and fading in the input that is becoming active.

### stepmode[int]: 0

When enabled, all whole-number changes to a signal value in the left inlet (either increasing and decreasing) will increment the open input channel by 1, wrapping accross the available channels. A value of zero will stop output.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Same as the  next  message.

### int

Select which input to route to the outlet. If the value is 0 or negative, a zero signal is sent out all outlets. If the value is greater than the number of inputs, the right-most input is used. If a signal is connected to the left inlet, this message is ignored.

Arguments:

- open-input
  [int]

### float

Float input is truncated and, like the  int  message, is used to select which input channel is routed to the outlet.

### next

Sending the  next  message to the left inlet will close the current input channel and open the next one, wrapping accross all channels. If currently closed (set to 0) or set to the last channel, the first channel will be routed to the outlet.

### signal

In left inlet: If a signal is connected to the left inlet, [selector~](https://docs.cycling74.com/reference/selector~) operates in a mode that uses signal values to determine which of its input signals is to be passed to its outlet. If the signal coming in the left inlet is 0 or negative, the output is shut off and a zero signal is sent out. If it is 1 but less than 2, the signal coming in the first inlet to the right of the leftmost inlet is passed to the outlet. If the signal is 2 but less than 3, the signal coming into the next inlet to the right is used, and so on.

In right inlets: One channel of a multi-channel signal will be passed to the [mcs.selector~](https://docs.cycling74.com/reference/mcs.selector~) object's outlet depending on the value of the most recently received int or float in the left inlet, or the signal coming into the left inlet. The first signal inlet to the right of the leftmost inlet is considered input 1, the next to the right input 2, and so on.

## Output

### signal

The output is the signal coming from the selected input channel, as specified by a number or signal in the left inlet. The output is a zero signal if all inputs are shut off.

## See Also

| Name | Description |
| --- | --- |
| [gate~](https://docs.cycling74.com/reference/gate~) | Route a signal to one of several outlets |
| [crosspatch](https://docs.cycling74.com/reference/crosspatch) | Patching Editor for Matrix Objects |
| [selector~](https://docs.cycling74.com/reference/selector~) | Assign one of several inputs to an outlet |
| [switch](https://docs.cycling74.com/reference/switch) | Accept messages from a specific inlet |
