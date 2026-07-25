---
type: jitter
name: "jit.quat"
summary: "Quaternion multiplication"
signal: false
url: "https://docs.cycling74.com/reference/jit.quat/"
package: "Jitter"
see_also: ["jit.quat2axis", "jit.axis2quat", "jit.quat2euler", "jit.euler2quat", "jit.anim.node"]
---
# jit.quat

Quaternion multiplication

## Description

[jit.quat](https://docs.cycling74.com/reference/jit.quat) will perform quaternion multiplication, with optional normalization of the input quaternions. In relation to 3D transforms, quaternion multiplication is the concatenation of two orientations. Jitter quaternions are ordered X Y Z W.

#### Discussion

A quaternion is a mathematical construct that is a four dimensional vector, and can be visualized as a rotation around an arbitrary axis. Quaternions are a useful representation of an orientation in 3D space.

## Attributes

### inverse[4 floats] read-only

The output quaternion's opposite rotation.

### normalize[int]

Determines whether or not the input quaternions are normalized before the multiplication. (default = 0)

### quat1[4 floats]

Sets the first operand (default = 0 0 0 1)

### quat2[4 floats]

Sets the second operand (default = 0 0 0 1)

### quatout[4 floats] read-only

The resulting quaternion after the multiplication

### xaxis[3 floats]

the output quaternion's rotation matrix X axis.

### yaxis[3 floats]

the output quaternion's rotation matrix Y axis.

### zaxis[3 floats]

the output quaternion's rotation matrix Z axis.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Perform the multiplication and output the resulting quaternion.

### list

In left inlet: A four element list of floating point numbers sets the first operand and triggers the multiplication and output.

In right inlet: A four element list of floating point numbers sets the second operand.

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
| [jit.quat2axis](https://docs.cycling74.com/reference/jit.quat2axis) | Quaternion to angle-axis conversion |
| [jit.axis2quat](https://docs.cycling74.com/reference/jit.axis2quat) | Convert angle-axis to quaternion |
| [jit.quat2euler](https://docs.cycling74.com/reference/jit.quat2euler) | Quaternion to Euler conversion |
| [jit.euler2quat](https://docs.cycling74.com/reference/jit.euler2quat) | Convert Euler angles to quaternion |
| [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) | Perform hierarchical transformation |
