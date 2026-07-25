---
type: mc
name: "mc.modulo~"
summary: "Divide two signals, output the remainder (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.modulo~/"
package: "MC"
see_also: ["!/~", "/~"]
---
# mc.modulo~

Divide two signals, output the remainder (multichannel)

## Description

[%~](https://docs.cycling74.com/reference/modulo~) is a signal remainder operator. If signals are connected to both inlets, the left signal is divided by the right signal, and the remainder is output. If a signal is only connected to left inlet, it is divided to the argument or a float in the right inlet. Note that multiple signals in the same inlet add together automatically.

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

In left inlet: The number is divided by the signal coming into the right inlet. If a signal is also connected to the left inlet, a  float  or  int  is ignored.

In right inlet: A number by which to divide the signal coming into the left inlet. If a signal is also connected to the right inlet, a  float  or  int  is ignored.

Arguments:

- dividend/divisor
  [int]

### float

In left inlet: The number is divided by the signal coming into the right inlet. If a signal is also connected to the left inlet, a  float  or  int  is ignored.

In right inlet: A number by which to divide the signal coming into the left inlet. If a signal is also connected to the right inlet, a  float  or  int  is ignored.

Arguments:

- dividend/divisor
  [float]

### signal

In left inlet: The signal is divided by a signal coming into the right inlet, or a constant value received in the right inlet, and the remainder is sent out the outlet.

In right inlet: The signal is used as the divisor, to be divided into the signal coming into the left inlet, or the constant value received in the left inlet.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

When the two signals in the inlets are divided, the remainder is sent out the outlet. [%](https://docs.cycling74.com/reference/modulo) is called the modulo operator.

## See Also

| Name | Description |
| --- | --- |
| [!/~](https://docs.cycling74.com/reference/rdiv) | Divide input from a number |
| [/~](https://docs.cycling74.com/reference/div~) | Divide one signal by another |
