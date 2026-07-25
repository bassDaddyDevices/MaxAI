---
type: jitter
name: "jit.geom.subdivide"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.subdivide/"
package: "Jitter Geometry"
see_also: ["jit.geom.smooth", "jit.geom.decimate", "jit.geom.remesh"]
---
# jit.geom.subdivide

Subdivide surface geometry

## Description

[jit.geom.subdivide](https://docs.cycling74.com/reference/jit.geom.subdivide) performs different subdivision algorithms on surface geometry meshes, increasing the vertex and face density of the surface. Depending on the algorithm type used, the mesh shape may also be altered.

## Attributes

### iterations[int]

The number of times the subdivision algorithm is run.

### type[symbol]

The subdivision algorithm to use.

Possible values:

'simple'
(
Simple
)
Simply splits each edge in half and each face into four new faces without moving any vertices.

'catmull'
(
Catmull-Clark
)
Catmull-Clark subdivision algorithm. Produces smooth surfaces by averaging the positions of vertices.

'quad'
(
Quad-Tri
)
Quad-Tri subdivision algorithm. Produces a smooth surface similar to catmull. Works on quad and triangle surfaces.

'loop'
(
Loop
)
Loop subdivision algorithm. Smoothes resulting surface. Only works on triangle surfaces.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.smooth](https://docs.cycling74.com/reference/jit.geom.smooth) |  |
| [jit.geom.decimate](https://docs.cycling74.com/reference/jit.geom.decimate) |  |
| [jit.geom.remesh](https://docs.cycling74.com/reference/jit.geom.remesh) |  |
