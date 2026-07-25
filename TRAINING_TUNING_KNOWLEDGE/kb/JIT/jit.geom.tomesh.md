---
type: jitter
name: "jit.geom.tomesh"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.tomesh/"
package: "Jitter Geometry"
see_also: ["jit.geom.todict", "jit.geom.tomatrix", "jit.geom.togeom", "jit.geom.topoints"]
---
# jit.geom.tomesh

Convert geometry to [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh)

## Description

Use [jit.geom.tomesh](https://docs.cycling74.com/reference/jit.geom.tomesh) to convert geometry to a [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh). Typically, you want to use [jit.geom.tomesh](https://docs.cycling74.com/reference/jit.geom.tomesh) over [jit.geom.tomatrix](https://docs.cycling74.com/reference/jit.geom.tomatrix) if you want to directly render it as it is more performant for that use case.

## Attributes

### auto\_normals[int]

Toggle generation of normals (default = 1).

### crease\_angle[float]

Determine the kind of normal (whether an edge is hard or soft) based on the angle between adjacent faces (only relevant if auto\_normals is enabled).

### mesh[symbol]

The name of the target mesh to bind to.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.todict](https://docs.cycling74.com/reference/jit.geom.todict) |  |
| [jit.geom.tomatrix](https://docs.cycling74.com/reference/jit.geom.tomatrix) |  |
| [jit.geom.togeom](https://docs.cycling74.com/reference/jit.geom.togeom) |  |
| [jit.geom.topoints](https://docs.cycling74.com/reference/jit.geom.topoints) |  |
