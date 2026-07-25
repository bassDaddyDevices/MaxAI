---
type: gen
name: "interp"
summary: "Interpolate inputs"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_interp/"
package: "Gen"
see_also: ["mix", "scale", "smoothstep"]
---
# interp

Interpolate inputs

## Description

Smoothly mix between inputs, according to an interpolation factor in the range of 0 to 1 (first inlet). The @mode attribute can choose between linear or cosine interpolation to mix between two additional inlets, cubic or spline to mix between four inlets, and spline6 to mix between six inlets. The default mode is linear.

## Constructors

- { arguments={a, b, c, d, e, f}, inlets={t} }

- { arguments={a, b, c, d, e}, inlets={t, f} }

- { arguments={a, b, c, d}, inlets={t, e, f} }

- { arguments={a, b, c}, inlets={t, d, e, f} }

- { arguments={a, b}, inlets={t, c, d, e, f} }

- { arguments={a}, inlets={t, b, c, d, e, f} }

- { arguments={}, inlets={t, a, b, c, d, e, f} }

- { arguments={a, b, c, d}, inlets={t} }

- { arguments={a, b, c}, inlets={t, d} }

- { arguments={a, b}, inlets={t, c, d} }

- { arguments={a}, inlets={t, b, c, d} }

- { arguments={}, inlets={t, a, b, c, d} }

- { arguments={a, b}, inlets={t} }

- { arguments={a}, inlets={t, b} }

- { arguments={}, inlets={t, a, b} }

## Inlets

### t[float]

interpolation factor (0..1)

### a[float]

input 1

### b[float]

input 2

### f[float]

input 6

### e[float]

input 5

### d[float]

input 4

### c[float]

input 3

## Attributes

### mode[enum]: linear write-only

Specify the interpolation mode: "none" and "step" perform no interpolation, "linear" performs two-point linear interpolation, "cosine" performs two-point cosine interpolation, "cubic" performs four-point cubic interpolation, "spline" performs four-point Catmull-Rom spline interpolation, and "spline6" performs six-point (5th order) B-spline interpolation.

Possible values:

0 = 'none'

1 = 'spline6'

2 = 'step'

3 = 'cosine'

4 = 'cubic'

5 = 'fastcubic'

6 = 'linear'

7 = 'spline'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [mix](https://docs.cycling74.com/reference/gen_common_mix) | Linear crossfade of inputs |
| [scale](https://docs.cycling74.com/reference/gen_common_scale) | Map an input range of values to an output range |
| [smoothstep](https://docs.cycling74.com/reference/gen_common_smoothstep) | Smoothed fade of inputs |
