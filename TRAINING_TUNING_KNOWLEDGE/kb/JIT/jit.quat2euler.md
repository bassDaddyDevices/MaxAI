---
type: jitter
name: "jit.quat2euler"
summary: "Quaternion to Euler conversion"
signal: false
url: "https://docs.cycling74.com/reference/jit.quat2euler/"
package: "Jitter"
see_also: ["jit.quat", "jit.euler2quat", "jit.axis2quat", "jit.quat2axis", "jit.anim.node"]
---
# jit.quat2euler

Quaternion to Euler conversion

## Description

Convert a quaternion (a four-dimensional vector) to Euler X Y Z angles. Jitter quaternions are ordered X Y Z W.

#### Discussion

A quaternion is a mathematical construct that is a four dimensional vector, and can be visualized as a rotation around an arbitrary axis. Quaternions are a useful representation of an orientation in 3D space.

## Attributes

### euler[3 floats] read-only

The resulting Euler angles after the conversion.

### normalize[int]

Normalize the quaternion before outputting (default = 0).

### quat[4 floats]

The quaternion to be converted. (default = 0 0 0 1)

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

Output the resulting Euler angles.

### list

A four element list of floating point numbers interpreted as a quaternion, is converted to Euler angles and output.

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
| [jit.euler2quat](https://docs.cycling74.com/reference/jit.euler2quat) | Convert Euler angles to quaternion |
| [jit.axis2quat](https://docs.cycling74.com/reference/jit.axis2quat) | Convert angle-axis to quaternion |
| [jit.quat2axis](https://docs.cycling74.com/reference/jit.quat2axis) | Quaternion to angle-axis conversion |
| [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) | Perform hierarchical transformation |
