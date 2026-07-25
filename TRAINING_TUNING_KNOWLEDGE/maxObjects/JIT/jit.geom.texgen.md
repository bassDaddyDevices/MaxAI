---
type: jitter
name: "jit.geom.texgen"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.texgen/"
package: "Jitter Geometry"
see_also: ["jit.geom.normgen", "jit.geom.prop"]
---
# jit.geom.texgen

Generate texture coordinates for surface geometry

## Description

Use [jit.geom.texgen](https://docs.cycling74.com/reference/jit.geom.texgen) to generate texture coordinates for surface geometry.

## Attributes

### planenorm[3 floats]

The normal used by planar texture mapping.

### type[symbol]

The algorithm used to generate texture coordinates.

Possible values:

'planar'
(
Planar
)
Use planar mapping to generate texture coordinates.

'triplanar'
(
Triplanar
)
Use triplanar mapping to generate texture coordinates.

'spherical'
(
Spherical
)
Use spherical mapping to generate texture coordinates.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.normgen](https://docs.cycling74.com/reference/jit.geom.normgen) |  |
| [jit.geom.prop](https://docs.cycling74.com/reference/jit.geom.prop) |  |
