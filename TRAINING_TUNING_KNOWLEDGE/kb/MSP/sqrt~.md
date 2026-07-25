---
type: msp
name: "sqrt~"
summary: "Square root of a signal"
signal: true
url: "https://docs.cycling74.com/reference/sqrt~/"
package: "MSP"
see_also: ["curve~", "log~", "pow~"]
---
# sqrt~

Square root of a signal

## Description

[sqrt~](https://docs.cycling74.com/reference/sqrt~) will output a signal which is the square-root function of the input signal.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

The object outputs a signal that is the square root of the input signal. A negative input has no real solution, so it causes an output of 0.

## Output

### signal

The square root of the input signal.

## See Also

| Name | Description |
| --- | --- |
| [curve~](https://docs.cycling74.com/reference/curve~) | Exponential ramp generator |
| [log~](https://docs.cycling74.com/reference/log~) | Logarithm of a signal |
| [pow~](https://docs.cycling74.com/reference/pow~) | Signal power function |
