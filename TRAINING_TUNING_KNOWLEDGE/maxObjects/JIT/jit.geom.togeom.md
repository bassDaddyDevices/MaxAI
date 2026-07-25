---
type: jitter
name: "jit.geom.togeom"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.togeom/"
package: "Jitter Geometry"
see_also: ["jit.geom.todict", "jit.geom.tomatrix", "jit.geom.topoints", "jit.geom.tomesh"]
---
# jit.geom.togeom

Convert to geometry

## Description

[jit.geom.togeom](https://docs.cycling74.com/reference/jit.geom.togeom) takes a jitter matrix or dictionary and converts it into a geometry representation that can be processed by a geometry graph.

## Attributes

### type[symbol]

Describes what geometry representation the input data should be converted to (default = 'surface').

Possible values:

'surface'
(
Surface geometry
)
Convert to surface geometry.

'points'
(
Point geometry
)
Convert to point geometry.

'matrix'
(
Geometry matrix
)
Convert to a geometry matrix (arbitrary data) that can be processed by a geometry graph.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.todict](https://docs.cycling74.com/reference/jit.geom.todict) |  |
| [jit.geom.tomatrix](https://docs.cycling74.com/reference/jit.geom.tomatrix) |  |
| [jit.geom.topoints](https://docs.cycling74.com/reference/jit.geom.topoints) |  |
| [jit.geom.tomesh](https://docs.cycling74.com/reference/jit.geom.tomesh) |  |
