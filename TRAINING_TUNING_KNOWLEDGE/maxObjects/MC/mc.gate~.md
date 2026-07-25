---
type: mc
name: "mc.gate~"
summary: "Route a signal to one of several outlets (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.gate~/"
package: "MC"
see_also: ["crosspatch", "selector~", "matrix~", "gate"]
---
# mc.gate~

Route a signal to one of several outlets (multichannel)

## Description

Use [gate~](https://docs.cycling74.com/reference/gate~) to route an input signal at the second inlet to one of several outlets, or to no outlet at all. When there is only one outlet (the default case), it acts as a simple switch. Unlike the Max [gate](https://docs.cycling74.com/reference/gate) object, any outlet which is not selected outputs a signal composed of zero values.

When the [gate~](https://docs.cycling74.com/reference/gate~) object is created as [mcs.gate~](https://docs.cycling74.com/reference/mcs.gate~) all of its signal outlets are combined into a single multichannel outlet. The behavior of [mcs.gate~](https://docs.cycling74.com/reference/mcs.gate~) is otherwise identical to [gate~](https://docs.cycling74.com/reference/gate~).

## Arguments

### number-of-outlets[int] optional

Number of outlets

### initial-open-outlet[int] optional

Set the outlet that is initially selected. If 0, all signals are shut off and zero signals are sent out all outlets.

## Attributes

### ramptime[float]: 0.

Alias:
ramp

Sets the ramp time to use for fading connections in milliseconds. When the ramptime attribute is non-zero, [gate~](https://docs.cycling74.com/reference/gate~) will crossfade between outputs when the output is switched, fading out the output that was previous active and fading in the output that is becoming active.

### stepmode[int]: 0

When enabled, all whole-number changes to a signal value in the left inlet (either increasing and decreasing) will increment the open outlet by 1, wrapping accross the available outlets. A value of zero will stop output.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Same as the  next  message

### int

If the number is  0  or negative a zero signal is sent out all outlets. If the number is greater than the number of outlets, the signal is sent to the rightmost outlet. If a  signal  is connected to the left inlet, [gate~](https://docs.cycling74.com/reference/gate~) ignores  int  or  float  messages.

Arguments:

- outlet-selected
  [int]

### float

Float input is truncated and, like the  int  message, selects the destination outlet for the signal in the right inlet

### next

Sending the  next  message to the left inlet closes the current outlet and opens the next one, wrapping accross all outlets. If all outlets are currently closed or the rightmost outlet is currenty open, outlet 1 will be opened.

### signal

In left inlet: Selects destination outlet for the input. If the number is  0  or negative a zero signal is sent out all outlets. If the number is greater than the number of outlets, the signal is sent to the rightmost outlet. If a  signal  is connected to the left inlet, [gate~](https://docs.cycling74.com/reference/gate~) ignores  int  or  float  messages.

In right inlet: The input signal to be passed through to one of the [gate~](https://docs.cycling74.com/reference/gate~) object's outlets, according to the most recently received  int  or  float  in the left inlet, or the value of the signal coming in the left inlet.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

Depending on the value of the left inlet (either  signal  or number), one of the object's outlets will send out the input signal and rest will send out zero signals, or (if the inlet is closed) all outlets will send out zero signals.

## See Also

| Name | Description |
| --- | --- |
| [crosspatch](https://docs.cycling74.com/reference/crosspatch) | Patching Editor for Matrix Objects |
| [selector~](https://docs.cycling74.com/reference/selector~) | Assign one of several inputs to an outlet |
| [matrix~](https://docs.cycling74.com/reference/matrix~) | Signal routing and mixing matrix |
| [gate](https://docs.cycling74.com/reference/gate) | Pass input to an outlet |
