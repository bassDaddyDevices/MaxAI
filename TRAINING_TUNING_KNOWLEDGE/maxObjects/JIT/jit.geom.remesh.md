---
type: jitter
name: "jit.geom.remesh"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.remesh/"
package: "Jitter Geometry"
see_also: ["jit.geom.subdivide", "jit.geom.decimate", "jit.geom.smooth"]
---
# jit.geom.remesh

Remesh surface geometry

## Description

The [jit.geom.remesh](https://docs.cycling74.com/reference/jit.geom.remesh) rebuilds the surface of the input geometry. The algorithm adjusts mesh faces and vertices to achieve a surface with a more uniform topology (vertex spacing).

## Attributes

### iterations[int]

The number of iterations used by the algorithm to unify the mesh topology. The higher the number, the more uniform the vertex distribution will be.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.subdivide](https://docs.cycling74.com/reference/jit.geom.subdivide) |  |
| [jit.geom.decimate](https://docs.cycling74.com/reference/jit.geom.decimate) |  |
| [jit.geom.smooth](https://docs.cycling74.com/reference/jit.geom.smooth) |  |
