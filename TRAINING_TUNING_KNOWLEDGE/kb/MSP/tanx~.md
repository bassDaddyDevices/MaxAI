---
type: msp
name: "tanx~"
summary: "Signal tangent function"
signal: true
url: "https://docs.cycling74.com/reference/tanx~/"
package: "MSP"
see_also: ["atan~", "atanh~", "atan2~", "tanh~"]
---
# tanx~

Signal tangent function

## Description

Use the [tanx~](https://docs.cycling74.com/reference/tanx~) object to calculate and output a signal that is the tangent function of each sample of the input signal. The [tanx~](https://docs.cycling74.com/reference/tanx~) object is a true π based function - it varies from the [tanh~](https://docs.cycling74.com/reference/tanh~) object, whose output is based around 1 and is intended for use as a lookup table with the [phasor~](https://docs.cycling74.com/reference/phasor~) object.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Input to tangent function

## Output

### signal

The tangent of the input.

## See Also

| Name | Description |
| --- | --- |
| [atan~](https://docs.cycling74.com/reference/atan~) | Signal arc-tangent function |
| [atanh~](https://docs.cycling74.com/reference/atanh~) | Signal hyperbolic arc-tangent function |
| [atan2~](https://docs.cycling74.com/reference/atan2~) | Signal arc-tangent function (two variables) |
| [tanh~](https://docs.cycling74.com/reference/tanh~) | Signal hyperbolic tangent function |
