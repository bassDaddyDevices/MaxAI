---
type: jitter
name: "jit.gradient"
summary: "Generate Chebyshev gradients"
signal: false
url: "https://docs.cycling74.com/reference/jit.gradient/"
package: "Jitter"
see_also: ["jit.alphablend", "jit.charmap"]
---
# jit.gradient

Generate Chebyshev gradients

## Description

Generates a 4-plane char matrix containing a gradient curve that runs along the horizontal axis (i.e. it smoothly fades from left to right). You can select the cell values to fade between as well as Chebyshev coefficients to generate more complex curves and ripples.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### cheby[64 floats]

A list of Chebyshev coefficients to generate the curve for the gradient (default = 1.)

### end[4 floats]

The cell value for the end of the gradient (default = 1. 1. 1. 1.)

### start[4 floats]

The cell value for the start of the gradient (default = 0. 0. 0. 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.alphablend](https://docs.cycling74.com/reference/jit.alphablend) | Blend two images with an alpha channel image |
| [jit.charmap](https://docs.cycling74.com/reference/jit.charmap) | Map 256-point input to output |
