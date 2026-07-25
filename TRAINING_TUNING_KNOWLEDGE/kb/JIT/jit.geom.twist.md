---
type: jitter
name: "jit.geom.twist"
summary: "Named geometry container"
signal: false
url: "https://docs.cycling74.com/reference/jit.geom.twist/"
package: "Jitter Geometry"
see_also: ["jit.geom.dimples", "jit.geom.displace", "jit.geom.normalize", "jit.geom.waves"]
---
# jit.geom.twist

Twist deformation of a surface

## Description

[jit.geom.twist](https://docs.cycling74.com/reference/jit.geom.twist) deforms input surface by twisting around an axis.

## Attributes

### angle[float]

The twist angle in degrees.

### axis[symbol]

The twist axis.

Possible values:

'X'
(
X-Axis
)
X-Axis

'Y'
(
Y-Axis
)
Y-Axis

'Z'
(
Z-Axis
)
Z-Axis

'custom'
(
Custom axis
)
Allows specifying of a custom twist axis.

'points'
(
Axis from points
)
Allows specifying of the twist axis from two positions.

### custom\_axis[3 floats]

The custom twist axis value when custom axis is selected.

### end[3 floats]

The twist axis end position when points axis is used.

### start[3 floats]

The twist axis start position when points axis is used.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.geom.dimples](https://docs.cycling74.com/reference/jit.geom.dimples) |  |
| [jit.geom.displace](https://docs.cycling74.com/reference/jit.geom.displace) |  |
| [jit.geom.normalize](https://docs.cycling74.com/reference/jit.geom.normalize) |  |
| [jit.geom.waves](https://docs.cycling74.com/reference/jit.geom.waves) |  |
