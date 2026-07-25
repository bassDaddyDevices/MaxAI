---
type: jitter
name: "jit.euler2quat"
summary: "Convert Euler angles to quaternion"
signal: false
url: "https://docs.cycling74.com/reference/jit.euler2quat/"
package: "Jitter"
see_also: ["jit.quat", "jit.quat2euler", "jit.quat2axis", "jit.axis2quat", "jit.anim.node"]
---
# jit.euler2quat

Convert Euler angles to quaternion

## Description

Convert Euler X/Y/Z representation of an orientation to a quaternion. Jitter quaternions are ordered X Y Z W.

#### Discussion

A quaternion is a mathematical construct that is a four dimensional vector, and can be visualized as a rotation around an arbitrary axis. Quaternions are a useful representation of an orientation in 3D space.

## Attributes

### euler[3 floats]

The Euler angles to be converted. (default = 0 0 0)

### normalize[int]

Normalize the quaternion before outputting (default = 0).

### quat[4 floats] read-only

The resulting quaternion after the conversion.

### rotate\_order[symbol]

Set the order rotations are applied (default = auto). E.G. if set to  xyz , the object is first rotated around its X axis, then Y, and finally Z. The default of  auto  implements  yzx  ordering. To replicate Max 5, use  zyx .

Possible values:

'auto'

'xyz'

'xzy'

'yxz'

'yzx'

'zxy'

'zyx'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output the resulting quaternion conversion.

### list

A three element list of floating point numbers interpreted as Euler angles in degrees, is converted to a quaternion and output.

Arguments:

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
| [jit.quat2euler](https://docs.cycling74.com/reference/jit.quat2euler) | Quaternion to Euler conversion |
| [jit.quat2axis](https://docs.cycling74.com/reference/jit.quat2axis) | Quaternion to angle-axis conversion |
| [jit.axis2quat](https://docs.cycling74.com/reference/jit.axis2quat) | Convert angle-axis to quaternion |
| [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) | Perform hierarchical transformation |
