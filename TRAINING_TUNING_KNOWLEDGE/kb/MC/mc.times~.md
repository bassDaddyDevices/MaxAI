---
type: mc
name: "mc.times~"
summary: "Multiply two signals (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.times~/"
package: "MC"
see_also: ["/~", "!/~"]
---
# mc.times~

Multiply two signals (multichannel)

## Description

[\*~](https://docs.cycling74.com/reference/times~) is a signal multiplier-operator that outputs a signal which is the multiplication between two signals.

## Arguments

### initial-multiplier[number] optional

Sets an initial value by which to multiply the signal coming into the left inlet. If a signal is connected to the right inlet, the argument is ignored. If no argument is present, and no signal is connected to the right inlet, the initial value is  0  by default.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: A factor by which to multiply the signal coming into the right inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: A factor by which to multiply the signal coming into the left inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- input
  [int]

### float

In left inlet: A factor by which to multiply the signal coming into the right inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: A factor by which to multiply the signal coming into the left inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- input
  [float]

### signal

In left inlet: The signal is multiplied by the signal coming into the right inlet, or a constant value received in the right inlet. All signal inputs to a single inlet are summed. If a signal and number are both sent to the left inlet, the specified operation will be performed with those values.

In right inlet: The signal is multiplied by the signal coming into the left inlet, or a constant value received in the left inlet. All signal inputs to a single inlet are summed.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The product of the two inputs.

## See Also

| Name | Description |
| --- | --- |
| [/~](https://docs.cycling74.com/reference/div~) | Divide one signal by another |
| [!/~](https://docs.cycling74.com/reference/rdiv) | Divide input from a number |
