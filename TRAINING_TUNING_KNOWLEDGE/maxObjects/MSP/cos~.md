---
type: msp
name: "cos~"
summary: "Signal cosine function (0-1 range)"
signal: true
url: "https://docs.cycling74.com/reference/cos~/"
package: "MSP"
see_also: ["acos~", "acosh~", "asin~", "asinh~", "atan~", "atanh~", "atan2~", "cosh~", "cosx~", "cycle~", "phasor~", "sinh~", "sinx~", "tanh~", "tanx~", "trapezoid~", "triangle~", "wave~", "2d.wave~"]
---
# cos~

Signal cosine function (0-1 range)

## Description

Use the [cos~](https://docs.cycling74.com/reference/cos~) object to calculate and output a signal that is the cosine function of each sample of the input signal.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Input to a cosine function. The input is stated as a fraction of a cycle (typically in the range from 0 to 1), and is multiplied by 2π before being used in the cosine function.

## Output

### signal

The cosine of 2π times the input. The method used in this object to calculate the cosine directly is typically less efficient than using the stored cosine in a [cycle~](https://docs.cycling74.com/reference/cycle~) object.

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
| [cosh~](https://docs.cycling74.com/reference/cosh~) | Signal hyperbolic cosine function |
| [cosx~](https://docs.cycling74.com/reference/cosx~) | Signal cosine function |
| [cycle~](https://docs.cycling74.com/reference/cycle~) | Sinusoidal oscillator |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [sinh~](https://docs.cycling74.com/reference/sinh~) | Signal hyperbolic sine function |
| [sinx~](https://docs.cycling74.com/reference/sinx~) | Signal sine function |
| [tanh~](https://docs.cycling74.com/reference/tanh~) | Signal hyperbolic tangent function |
| [tanx~](https://docs.cycling74.com/reference/tanx~) | Signal tangent function |
| [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) | Trapezoidal wavetable |
| [triangle~](https://docs.cycling74.com/reference/triangle~) | Triangle/ramp wavetable |
| [wave~](https://docs.cycling74.com/reference/wave~) | Variable size wavetable |
| [2d.wave~](https://docs.cycling74.com/reference/2d.wave~) | Two-dimensional wavetable |
