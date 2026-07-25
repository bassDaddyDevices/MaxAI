---
type: jitter
name: "jit.geom.normgen"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.normgen/"
package: "Jitter Geometry"
see_also: ["jit.geom.texgen", "jit.geom.prop"]
---
# jit.geom.normgen

Generate normals

## Description

Use [jit.geom.normgen](https://docs.cycling74.com/reference/jit.geom.normgen) to generate normals for surface geometry.

## Attributes

### crease\_angle[float]

Crease angle is useful if you want a mesh that as both soft and hard edges. If the angle for adjacent faces is less than the crease angle, the edge is considered hard.

### type[symbol]

The type of normals you want to generate.

Possible values:

'face'
(
Face normals
)
Normals perpendicular to each face.

'vertex'
(
Vertex normals
)
Normals perpendicular to each vertex (average of all adjacent faces).

'crease\_angle'
(
Crease angle
)
Determine the kind of normal (whether an edge is hard or soft) based on the angle between adjacent faces.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.texgen](https://docs.cycling74.com/reference/jit.geom.texgen) |  |
| [jit.geom.prop](https://docs.cycling74.com/reference/jit.geom.prop) |  |
