---
type: jitter
name: "jit.geom.shape"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.shape/"
package: "Jitter Geometry"
see_also: ["jit.geom.togeom"]
---
# jit.geom.shape

Generate geometry shapes

## Description

Use [jit.geom.shape](https://docs.cycling74.com/reference/jit.geom.shape) to generate basic surfaces.

## Attributes

### dim[2 ints]

2D shape subdivisions used by uv\_sphere and torus shapes.

### height[float]

Shape height used by cone and cylinder shapes.

### icodivisions[int]

Subdivisions for icosphere shape.

### radius[float]

Radius used by cone, cyliner and torus shapes.

### shape[symbol]

The type of shape to generate.

Possible values:

'icosphere'
(
Icosphere
)
Icosphere

'uv\_sphere'
(
UV Sphere
)
UV Sphere

'plane'
(
Plane
)
Plane

'cone'
(
Cone
)
Cone

'cylinder'
(
Cylinder
)
Cylinder

'torus'
(
Torus
)
Torus

'cube'
(
Cube
)
Cube

'icosahedron'
(
Icosahedron
)
Icosahedron

### subdivisions[int]

1D subdivisions used by cylinder plane and cone shapes.

### texcoord[int]

Should the shape be generated with texture coordinates (default = 1)

### thickness[float]

The thickness of a torus shape.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.togeom](https://docs.cycling74.com/reference/jit.geom.togeom) |  |
