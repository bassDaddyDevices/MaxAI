---
type: jitter
name: "jit.wake"
summary: "Feedback with convolution stage"
signal: false
url: "https://docs.cycling74.com/reference/jit.wake/"
package: "Jitter"
see_also: ["jit.convolve", "jit.glop", "jit.op"]
---
# jit.wake

Feedback with convolution stage

## Description

Use the [jit.wake](https://docs.cycling74.com/reference/jit.wake) object to perform video feedback with a convolution stage.

#### Discussion

The feedback, feed forward, gain, and convolution kernel values down, left, right, and up) for red, green, and blue planes are all separately controllable. Additional controls for feedback, feed forward, and gain for all colors considered together, as well as convolution kernel value control for all colors (upper, lower, left, and right).

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### bdownbleed[float]

The lower convolution kernel value for the blue plane (default = 0.)

### bfb[float]

The feedback level for blue plane values (default = 0.)

### bff[float]

The feed forward level for blue plane values (default = 1.)

### bgain[float]

The gain level for blue plane values (default = 1.)

### bleed[float]

The all upper, lower, left, and right convolution kernel values

### bleftbleed[float]

The blue left convolution kernel value (default = 0.)

### brightbleed[float]

The blue right convolution kernel value (default = 0.)

### bupbleed[float]

The blue upper convolution kernel value (default = 0.)

### fb[float]

The feedback level for all plane values (default = 0.)

### ff[float]

The feed forward level for all plane values (default = 1.)

### gain[float]

The gain level for all colors (default = 1.)

### gdownbleed[float]

The lower convolution kernel value for the green plane (default = 0.)

### gfb[float]

The feedback level for green plane values (default = 0.)

### gff[float]

The feed forward level for green plane values (default = 1.)

### ggain[float]

The gain level for green plane values (default = 1.)

### gleftbleed[float]

The left convolution kernel value for the green plane (default = 0.)

### grightbleed[float]

The right convolution kernel value for the green plane (default = 0.)

### gupbleed[float]

The upper convolution kernel value for the green plane (default = 0.)

### normalize[int]

Normalization flag (default = 0)

### rdownbleed[float]

The lower convolution kernel value for the red plane (default = 0.)

### rfb[float]

The feedback level for red plane values (default = 0.)

### rff[float]

The feed forward level for red plane values (default = 1.)

### rgain[float]

The gain level for red plane values (default = 1.)

### rleftbleed[float]

The left convolution kernel value for the red plane (default = 0.)

### rrightbleed[float]

The right convolution kernel value for the red plane (default = 0.)

### rupbleed[float]

The upper convolution kernel value for the red plane (default = 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.convolve](https://docs.cycling74.com/reference/jit.convolve) | Convolve two matrices |
| [jit.glop](https://docs.cycling74.com/reference/jit.glop) | Produce feedback with gain staging |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
