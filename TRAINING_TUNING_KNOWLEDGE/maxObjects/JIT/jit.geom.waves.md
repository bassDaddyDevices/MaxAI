---
type: jitter
name: "jit.geom.waves"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.waves/"
package: "Jitter Geometry"
see_also: ["jit.geom.dimples", "jit.geom.displace", "jit.geom.normalize", "jit.geom.twist"]
---
# jit.geom.waves

Waves deformation on surface geometry

## Description

[jit.geom.waves](https://docs.cycling74.com/reference/jit.geom.waves) deforms input geometry by applying a wave function to the vertex positions. It supports a linear and radial function (see radial).

## Attributes

### amp[float]

The height of the wave ripple.

### center[3 floats]

The origin of the wave (only relevant for radial waves or if a falloff is used).

### dir[3 floats]

The deformation direction of the wave (the direction that amp is applied to.).

### falloff[float]

Controls how fast waves fade out as they travel away from center (default = 0, meaning no falloff).

### freq[float]

The frequency of the wave function (default = 4). This controls how wide or narrow the waves are. For example, if freq is 4, there will be 4 waves across the distance of 1 jitter world unit.

### offset[float]

The wave function phase offset (default = 0). This is expressed in world units and can be used to position or animate the wave.

### radial[int]

Toggle to enable radial mode.

### rotation[float]

Wave rotation in degrees around the deformation axis (dir). This is mainly useful for linear waves to control which direction they are travelling.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.dimples](https://docs.cycling74.com/reference/jit.geom.dimples) |  |
| [jit.geom.displace](https://docs.cycling74.com/reference/jit.geom.displace) |  |
| [jit.geom.normalize](https://docs.cycling74.com/reference/jit.geom.normalize) |  |
| [jit.geom.twist](https://docs.cycling74.com/reference/jit.geom.twist) |  |
