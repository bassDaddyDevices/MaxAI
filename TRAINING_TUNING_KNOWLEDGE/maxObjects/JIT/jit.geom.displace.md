---
type: jitter
name: "jit.geom.displace"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.displace/"
package: "Jitter Geometry"
see_also: ["jit.geom.dimples", "jit.geom.normalize", "jit.geom.twist", "jit.geom.waves"]
---
# jit.geom.displace

Displaces a surface using a height field

## Description

[jit.geom.displace](https://docs.cycling74.com/reference/jit.geom.displace) displaces surface geometry based on a height field geometry matrix that can be sampled in different ways. The height field matrix is provided via the secondary inlet.

## Attributes

### mid[float]

The sampled value that is treated as no displacement by the object. Sampled values below this threshold will result in a negative displacement.

### sampler[symbol]

Describes how to sample the height field matrix. The default is "nearest".

Possible values:

'nearest'
(
Nearest neighbor sampling
)
Uses the nearest neighbor when sampling the height field matrix.

'bilinear'
(
Bilinear neighbor sampling
)
Takes an interpolated value from the texture coordinate's neighboring texels in the height field matrix.

### strength[float]

The strength of the displacement. The final displacement is calculated by offseting by mid and then scaling by this value. A negative strength can be used to invert the displacement.

### tex\_coord\_mode[symbol]

Describes where the texture coordinates used to sample the height field should come from. The default is "auto".

Possible values:

'auto'
(
Automatically determine what texture coordinates to use
)
If the surface geometry has texture coordinates, they will be used. Otherwise, position will be used.

'position'
(
Use position to generate texture coordinates
)
The object will generate texture coordinates based on the positions relative to the object bounding box.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.dimples](https://docs.cycling74.com/reference/jit.geom.dimples) |  |
| [jit.geom.normalize](https://docs.cycling74.com/reference/jit.geom.normalize) |  |
| [jit.geom.twist](https://docs.cycling74.com/reference/jit.geom.twist) |  |
| [jit.geom.waves](https://docs.cycling74.com/reference/jit.geom.waves) |  |
