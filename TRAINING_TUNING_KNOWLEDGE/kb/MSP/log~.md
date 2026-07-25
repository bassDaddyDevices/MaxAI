---
type: msp
name: "log~"
summary: "Logarithm of a signal"
signal: true
url: "https://docs.cycling74.com/reference/log~/"
package: "MSP"
see_also: ["pow~", "curve~", "sqrt~"]
---
# log~

Logarithm of a signal

## Description

Use the [log~](https://docs.cycling74.com/reference/log~) object to output a signal composed of the logarithms of its input values. You can specify the logarithmic base.

## Arguments

### logarithmic-base[number] optional

Sets the base of the logarithm. The default value is 0.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

In right inlet: Sets the base of the logarithm. The default is 0, which is equivalent to the natural logarithm (log to the base e, or 2.71828182). log to the base of 1 is always 0.

Arguments:

- logarithmic-base
  [float]

### signal

In left inlet: [log~](https://docs.cycling74.com/reference/log~) sends out a signal that is the logarithm of the input signal, to the base specified by the typed-in argument or the value most recently received in the right inlet. If a value in the signal is less than or equal to 0, [log~](https://docs.cycling74.com/reference/log~) sends out a value of 0.00000001.

## Output

### signal

The logarithm of the input signal to the base specified by the initial argument or the value most recently received in the right inlet.

## See Also

| Name | Description |
| --- | --- |
| [pow~](https://docs.cycling74.com/reference/pow~) | Signal power function |
| [curve~](https://docs.cycling74.com/reference/curve~) | Exponential ramp generator |
| [sqrt~](https://docs.cycling74.com/reference/sqrt~) | Square root of a signal |
