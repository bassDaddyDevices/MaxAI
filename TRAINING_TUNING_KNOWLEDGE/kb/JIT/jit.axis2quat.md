---
type: jitter
name: "jit.axis2quat"
summary: "Convert angle-axis to quaternion"
signal: false
url: "https://docs.cycling74.com/reference/jit.axis2quat/"
package: "Jitter"
see_also: ["jit.quat", "jit.quat2axis", "jit.quat2euler", "jit.euler2quat", "jit.anim.node"]
---
# jit.axis2quat

Convert angle-axis to quaternion

## Description

Convert an angle-axis representation of an orientation to a quaternion. Jitter quaternions are ordered X Y Z W.

#### Discussion

A quaternion is a mathematical construct that is a four dimensional vector, and can be visualized as a rotation around an arbitrary axis. Quaternions are a useful representation of an orientation in 3D space.

## Attributes

### angleaxis[4 floats]

The angle-axis to be converted. (default = 0 0 0 1)

### normalize[int]

Normalize the quaternion before outputting (default = 0).

### quat[4 floats] read-only

The resulting quaternion after the conversion.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output the resulting quaternion conversion.

### list

A four element list of floating point numbers interpreted as an angle in degrees and an axis, is converted to a quaternion and output.

Arguments:

- angle
  [float]
- x
  [float]
- y
  [float]
- z
  [float]

## See Also

| Name | Description |
| --- | --- |
| [jit.quat](https://docs.cycling74.com/reference/jit.quat) | Quaternion multiplication |
| [jit.quat2axis](https://docs.cycling74.com/reference/jit.quat2axis) | Quaternion to angle-axis conversion |
| [jit.quat2euler](https://docs.cycling74.com/reference/jit.quat2euler) | Quaternion to Euler conversion |
| [jit.euler2quat](https://docs.cycling74.com/reference/jit.euler2quat) | Convert Euler angles to quaternion |
| [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) | Perform hierarchical transformation |
