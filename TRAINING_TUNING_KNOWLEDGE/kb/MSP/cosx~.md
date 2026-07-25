---
type: msp
name: "cosx~"
summary: "Signal cosine function"
signal: true
url: "https://docs.cycling74.com/reference/cosx~/"
package: "MSP"
see_also: ["acos~", "acosh~", "asin~", "asinh~", "atan~", "atanh~", "atan2~", "cos~", "cosh~", "sinh~", "sinx~", "tanh~", "tanx~"]
---
# cosx~

Signal cosine function

## Description

Use the [cosx~](https://docs.cycling74.com/reference/cosx~) object to calculate and output a signal that is the cosine function of each sample of the input signal. The [cosx~](https://docs.cycling74.com/reference/cosx~) object is a true π based function - it varies from the [cos~](https://docs.cycling74.com/reference/cos~) object, whose output is based around a value range of 0. - 1.0 and is intended for use as a lookup table with the [phasor~](https://docs.cycling74.com/reference/phasor~) object.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Output from a cosine function.

## Output

### signal

The cosine of the input.

## See Also

| Name | Description |
| --- | --- |
| [acos~](https://docs.cycling74.com/reference/acos~) | Signal arc-cosine function |
| [acosh~](https://docs.cycling74.com/reference/acosh~) | Signal hyperbolic arc-cosine function |
| [asin~](https://docs.cycling74.com/reference/asin~) | Signal arc-sine function |
| [asinh~](https://docs.cycling74.com/reference/asinh~) | Signal hyperbolic arc-sine function |
| [atan~](https://docs.cycling74.com/reference/atan~) | Signal arc-tangent function |
| [atanh~](https://docs.cycling74.com/reference/atanh~) | Signal hyperbolic arc-tangent function |
| [atan2~](https://docs.cycling74.com/reference/atan2~) | Signal arc-tangent function (two variables) |
| [cos~](https://docs.cycling74.com/reference/cos~) | Signal cosine function (0-1 range) |
| [cosh~](https://docs.cycling74.com/reference/cosh~) | Signal hyperbolic cosine function |
| [sinh~](https://docs.cycling74.com/reference/sinh~) | Signal hyperbolic sine function |
| [sinx~](https://docs.cycling74.com/reference/sinx~) | Signal sine function |
| [tanh~](https://docs.cycling74.com/reference/tanh~) | Signal hyperbolic tangent function |
| [tanx~](https://docs.cycling74.com/reference/tanx~) | Signal tangent function |
