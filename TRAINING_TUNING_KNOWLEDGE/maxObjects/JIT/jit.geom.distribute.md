---
type: jitter
name: "jit.geom.distribute"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.distribute/"
package: "Jitter Geometry"
see_also: ["jit.geom.multiple"]
---
# jit.geom.distribute

Distribute points on surface geometry

## Description

[jit.geom.distribute](https://docs.cycling74.com/reference/jit.geom.distribute) scatters points on the surface of geometry.

## Attributes

### count[int]

The number of points to distribute. Only works in random mode.

### mode[symbol]

Determines how points are distributed on the surface.

Possible values:

'random'
(
Randomly distribute points
)
Distributes count points randomly on the surface.

'centroid'
(
Distribute on face centroids
)
Distributes one point at the center of each face of the surface geometry.

### seed[int]

Seed used for the random distribution mode.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.multiple](https://docs.cycling74.com/reference/jit.geom.multiple) |  |
