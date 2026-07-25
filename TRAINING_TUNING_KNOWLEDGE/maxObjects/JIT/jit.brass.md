---
type: jitter
name: "jit.brass"
summary: "Emboss image"
signal: false
url: "https://docs.cycling74.com/reference/jit.brass/"
package: "Jitter"
see_also: ["jit.convolve", "jit.op"]
---
# jit.brass

Emboss image

## Description

Provides a quick and dirty embossing effect on an 4-plane char input matrix. You can specify the amount and direction of the emboss effect and apply an overall tint to the output matrix.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### atint[float]

The amount of tinting to apply to the alpha channel (plane 0) (default = 0.)

### btint[float]

The amount of tinting to apply to the blue channel (plane 3) (default = 0.)

### gtint[float]

The amount of tinting to apply to the green channel (plane 2) (default = 0.)

### mask[4 ints]

The overall embossing mask (default = 0 0 0 0)

The numbers in the list control the embossing amount for the four axes around each cell in the form  *upperleft-to-lowerright*   *top-to-bottom*   *upperright-to-lowerleft*   *across-the-middle* . Negative values will invert the direction of the effect.

### rtint[float]

The amount of tinting to apply to the red channel (plane 1) (default = 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.convolve](https://docs.cycling74.com/reference/jit.convolve) | Convolve two matrices |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
