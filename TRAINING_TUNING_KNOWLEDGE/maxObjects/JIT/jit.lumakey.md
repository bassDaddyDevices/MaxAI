---
type: jitter
name: "jit.lumakey"
summary: "Key based on distance from a luminance value"
signal: false
url: "https://docs.cycling74.com/reference/jit.lumakey/"
package: "Jitter"
see_also: ["jit.alphablend", "jit.chromakey", "jit.keyscreen", "jit.rgb2luma"]
---
# jit.lumakey

Key based on distance from a luminance value

## Description

The [jit.lumakey](https://docs.cycling74.com/reference/jit.lumakey) object measures the chromatic distance of each of the left input's cells (pixels) with a reference luminance calulated by the formula lum = (ascale \* alpha\_value) + (rscale \* r\_value) + (gscale \* g\_value) + (bscale \* b\_value).

#### Discussion

If the distance is less than or equal to a tolerated distance ( tol ) value, the right input cell is multiplied by a maximum keying ( maxkey ) value.

If the distance is greater than the tolerated distance but less than the sum of the tolerated value and a set fade value ( fade ) an interpolated value between the some value between  minkey  and  maxkey  values is applied.

For values whose distance is greater than the sum of the tolerated and fade values, the right input cell is multiplied by the  minkey  value.

The left input is always multiplied by the additive inverse of the left input's multiplicand.

The [jit.lumakey](https://docs.cycling74.com/reference/jit.lumakey) object has two modes of output; the first keys between the two input sources, and the second mode will output the keying values (i.e., the left input multiplicands) rather than applying the keying -- the left input is ignored. This is useful for outputting keying information for use with other Jitter objects. Keying can be inverted by swapping the  minkey  and  maxkey  values.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | resamp | 1 | 1 | 1 | 4 | 1 | char long float32 float64 |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### ascale[float]

The alpha scaling factor (default = 0.)

### bscale[float]

The blue scaling factor (default = 0.114)

### fade[float]

Amount of fade (default = 0.)

### gscale[float]

The green scaling factor (default = 0.587)

### lum[float]

The reference luminance (default = all 0.)

### maxkey[float]

The maximum keying ( maxkey ) value (default = 1.)

### minkey[float]

The minimum keying ( minkey ) value (default = 0.)

### mode[int]

Output mode (default = 0 (output keyed matrix))

0 = perform keying and output matrix

1 = output the key map for use elsewhere

2 = alpha contains key map, other planes are from left input

Possible values:

0 = 'Composite'

1 = 'Key Map in All Channels'

2 = 'Key Map in Alpha'

### rscale[float]

The red scaling factor (default = 0.299)

### tol[float]

The tolerated distance ( tol ) -- the range of variance from which an input cell's absolute value can diverge when calculating keying (default = 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.alphablend](https://docs.cycling74.com/reference/jit.alphablend) | Blend two images with an alpha channel image |
| [jit.chromakey](https://docs.cycling74.com/reference/jit.chromakey) | Key images based on chromatic distance |
| [jit.keyscreen](https://docs.cycling74.com/reference/jit.keyscreen) | Choke chromakey from 3 sources |
| [jit.rgb2luma](https://docs.cycling74.com/reference/jit.rgb2luma) | Converts RGB to monochrome (luminance) |
