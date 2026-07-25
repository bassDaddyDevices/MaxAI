---
type: jitter
name: "jit.geom.topoints"
summary: "Convert geometry to a matrix of unique points"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.topoints/"
package: "Jitter Geometry"
see_also: ["jit.geom.todict", "jit.geom.togeom", "jit.geom.topoints", "jit.geom.tomesh"]
---
# jit.geom.topoints

Convert geometry to a matrix

## Description

The [jit.geom.tomatrix](https://docs.cycling74.com/reference/jit.geom.tomatrix) op converts Jitter half-edge geometry to a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) containing geometry mesh data. If texture coordinates and normals are present, they will be included as additional planes in the matrix according to the Jitter [matrixoutput spec](https://docs.cycling74.com/userguide/jitter/graphics_processing#using-matrixoutput-with-jitglgridshape).

## Attributes

### auto\_normals[int]

Auto generate normals

### crease\_angle[float]

Crease angle for generated normals

### mode[symbol]

Sets the output type for conversion (default = "surface"). The default  surface  triangulates the mesh prior to conversion, and writes triangle data to the matrix.  points  mode outputs unique point data to the matrix.

Possible values:

'surface'
(
Surface triangluation
)
'points'
(
Unique points
)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.todict](https://docs.cycling74.com/reference/jit.geom.todict) |  |
| [jit.geom.togeom](https://docs.cycling74.com/reference/jit.geom.togeom) |  |
| [jit.geom.topoints](https://docs.cycling74.com/reference/jit.geom.topoints) |  |
| [jit.geom.tomesh](https://docs.cycling74.com/reference/jit.geom.tomesh) |  |
