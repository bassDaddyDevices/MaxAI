---
type: mc
name: "mc.!/~"
summary: "Signal division (inlets reversed) (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.!%2F~/"
package: "MC"
see_also: ["\\*~"]
---
# mc.!/~

Signal division (inlets reversed) (multichannel)

## Description

The [!/~](https://docs.cycling74.com/reference/rdiv) object functions just like the [/~](https://docs.cycling74.com/reference/div~) object, but the inlet order is reversed.

## Arguments

### initial-divisor[number] optional

Sets an initial value by which to divide the signal coming into the left inlet. If a signal is connected to the right inlet, the argument is ignored. If no argument is present, and no signal is connected to the right inlet, the initial value is  1  by default.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: A number by which to divide the signal coming into the right inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: The number is divided by the signal coming into the left inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- input
  [int]

### float

In left inlet: A number by which to divide the signal coming into the right inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: The number is divided by the signal coming into the left inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- input
  [float]

### signal

In left inlet: The signal is used as the divisor, to be divided into the signal coming into the right inlet, or the constant value received in the right inlet. All signal inputs to a single inlet are summed. If a signal and number are both sent to the left inlet, the specified operation will be performed with those values.

In right inlet: The signal is divided by a signal coming into the left inlet, or a constant value received in the left inlet. All signal inputs to a single inlet are summed.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The ratio of the two inputs, i.e. the right input divided by the left input.

## See Also

| Name | Description |
| --- | --- |
| [\*~](https://docs.cycling74.com/reference/times~) | Multiply two signals |
