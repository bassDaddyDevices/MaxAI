---
type: mc
name: "mc.div~"
summary: "Divide one signal by another (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.div~/"
package: "MC"
see_also: ["!/~", "\\*~", "%~"]
---
# mc.div~

Divide one signal by another (multichannel)

## Description

Use the [/~](https://docs.cycling74.com/reference/div~) object is to multiply a signal coming into the left inlet by the reciprocal of either the initial argument or an  int  or  float  received in the right inlet.

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

In left inlet: The number is divided by the signal coming into the right inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: A number by which to divide the signal coming into the left inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- dividend/divisor
  [int]

### float

In left inlet: The number is divided by the signal coming into the right inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

In right inlet: A number by which to divide the signal coming into the left inlet. If a signal is connected to both left and right inlets, a  float  or  int  connected to either inlet will be ignored.

Arguments:

- dividend/divisor
  [float]

### signal

In left inlet: The signal is divided by a signal coming into the right inlet, or a constant value received in the right inlet. All signal inputs to a single inlet are summed. If a signal and number are both sent to the left inlet, the specified operation will be performed with those values.

In right inlet: The signal is used as the divisor, to be divided into the signal coming into the left inlet, or the constant value received in the left inlet. All signal inputs to a single inlet are summed.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The ratio of the two inputs, i.e., the left input divided by the right input.

## See Also

| Name | Description |
| --- | --- |
| [!/~](https://docs.cycling74.com/reference/rdiv) | Divide input from a number |
| [\*~](https://docs.cycling74.com/reference/times~) | Multiply two signals |
| [%~](https://docs.cycling74.com/reference/modulo~) | Divide two signals, output the remainder |
