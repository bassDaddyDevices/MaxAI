---
type: jitter
name: "jit.quat2axis"
summary: "Quaternion to angle-axis conversion"
signal: false
url: "https://docs.cycling74.com/reference/jit.quat2axis/"
package: "Jitter"
see_also: ["jit.quat", "jit.axis2quat", "jit.quat2euler", "jit.euler2quat", "jit.anim.node"]
---
# jit.quat2axis

Quaternion to angle-axis conversion

## Description

Convert a quaternion (a four-dimensional vector) to an angle-axis representation. Jitter quaternions are ordered X Y Z W.

#### Discussion

A quaternion is a mathematical construct that is a four dimensional vector, and can be visualized as a rotation around an arbitrary axis. Quaternions are a useful representation of an orientation in 3D space.

## Attributes

### angleaxis[4 floats] read-only

The resulting angle-axis values after the conversion, in the form of angle (in degrees) and an axis.

### normalize[int]

Normalize the quaternion before outputting (default = 0).

### quat[4 floats]

The quaternion to be converted. (default = 0 0 0 1)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output the resulting angle-axis values.

### list

A four element list of floating point numbers interpreted as a quaternion, is converted to angle-axis values and output.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]
- w
  [float]

## See Also

| Name | Description |
| --- | --- |
| [jit.quat](https://docs.cycling74.com/reference/jit.quat) | Quaternion multiplication |
| [jit.axis2quat](https://docs.cycling74.com/reference/jit.axis2quat) | Convert angle-axis to quaternion |
| [jit.quat2euler](https://docs.cycling74.com/reference/jit.quat2euler) | Quaternion to Euler conversion |
| [jit.euler2quat](https://docs.cycling74.com/reference/jit.euler2quat) | Convert Euler angles to quaternion |
| [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) | Perform hierarchical transformation |
