---
type: jitter
name: "jit.keyscreen"
summary: "Choke chromakey from 3 sources"
signal: false
url: "https://docs.cycling74.com/reference/jit.keyscreen/"
package: "Jitter"
see_also: ["jit.alphablend", "jit.chromakey", "jit.lumakey", "jit.op"]
---
# jit.keyscreen

Choke chromakey from 3 sources

## Description

Takes three 4-plane char matrix and does an interchangeable choke chromakey between the three sources. Any of the three input matrices can be designated as the key image (from which the image mask is created), the target image (which the mask is overlaid onto), or the mask image (which is placed on top of the target in the shape of the key).

#### Discussion

The [jit.keyscreen](https://docs.cycling74.com/reference/jit.keyscreen) object takes a color and a tolerance range for the keying. It can work by cell or by plane (set via the mode attribute).

## Matrix Operator

matrix inputs:3, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | resamp | 1 | 1 | 1 | 4 | 1 | char |
| in3 | resamp | 1 | 1 | 1 | 4 | 1 | char |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### alpha[float]

The alpha (plane 0) value for the chroma key (default = 0.)

### alphatol[float]

The alpha tolerance level for the chroma key (default = 0.)

### blue[float]

The blue (plane 3) value for the chroma key (default = 0.)

### bluetol[float]

The blue tolerance level for the chroma key (default = 0.)

### green[float]

The green (plane 2) value for the chroma key (default = 0.)

### greentol[float]

The green tolerance level for the chroma key (default = 0.)

### key[int]

The inlet number for the key matrix (default = 0)

A matrix received in the key inlet is used to build the shape of mask image

### mask[int]

The inlet number for the mask matrix (default = 2)

A matrix received in the mask inlet is shaped by the key image and occludes the target image

### mode[int]

Chomakeying mode (default = 0 (key entire cells))

0 = chroma key entire cells of the input matrices

1 = chroma key individual planes of the input matrices

Possible values:

0 = 'Wrap'

1 = 'Clip'

2 = 'Fold'

### red[float]

The red (plane 1) value for the chroma key (default = 0.)

### redtol[float]

The red tolerance level for the chroma key (default = 0.)

### target[int]

The inlet number for the target matrix (default = 1)

A matrix received in the target inlet is placed behind the mask image

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.alphablend](https://docs.cycling74.com/reference/jit.alphablend) | Blend two images with an alpha channel image |
| [jit.chromakey](https://docs.cycling74.com/reference/jit.chromakey) | Key images based on chromatic distance |
| [jit.lumakey](https://docs.cycling74.com/reference/jit.lumakey) | Key based on distance from a luminance value |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
