---
type: jitter
name: "jit.gl.skybox"
summary: "Render a skybox in OpenGL"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.skybox/"
package: "Jitter"
see_also: ["jit.gl.camera", "jit.gl.cubemap", "jit.gl.material", "jit.gl.pbr", "jit.gl.environment"]
---
# jit.gl.skybox

Render a skybox in OpenGL

## Description

The [jit.gl.skybox](https://docs.cycling74.com/reference/jit.gl.skybox) object renders a skybox in a opengl world. A skybox is a cube that remains infinitely far away from the camera, and gives the illusion of distant 3D surroundings. The [jit.gl.cubemap](https://docs.cycling74.com/reference/jit.gl.cubemap) object is used to texture the skybox.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### infinite[int]

When enabled the skybox is rendered at an infinite distance from the camera (default = 1).

### OB3D Attributes

### drawto[symbol]

The named drawing context in which to draw (default = none) A named drawing context is a named instance of a jit.window, jit.pwindow, or jit.matrix object that has an instance of the jit.gl.render object associated with it.

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### name[symbol]

The instance name (default = UID)

### quat[4 floats]

The current rotation as a quaternion(default = 0. 0. 0. 1.). A quaternion is a mathematical construct that is a four dimensional vector, and can be visualized as a rotation around an arbitrary axis. Quaternions are a useful representation of an orientation in 3D space.

### rotate[4 floats]

The angle of rotation and the xyz vector about which the rotation is performed in the form rotation-angle x y z (default = 0. 0. 0. 1.)

### rotatexyz[3 floats]

Sets the current rotation to the concatenation of rotations about the positive x, y, and z axes, also known as Euler angles (default = 0. 0. 0.). The default order is yzx and can be changed with the [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) rotate\_order attribute. Angles are expressed in degrees.

### scale[3 floats]

The 3D scaling factor in the form x y z (default = 1. 1. 1.)

### texture[8 symbols]

The name of the texture to be applied (default = none). If multiple textures are specified, uses multi-texturing.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### OB3D Messages

### bang

Equivalent to the  draw  message.

### draw

Draws the object in the named drawing destination. If the matrixoutput attribute is supported and set to 1, the geometry matrices are sent out the object's left outlet.

### drawraw

Equivalent to  draw  with the inherit\_all attribute set to 1.

### drawimmediate

Equivalent to  draw  but ignoring any potential renderer setup

### jit\_gl\_texture

Binds the texture specified by  *texture-name*  to this object. Equivalent to setting the texture attribute to  *texture-name* .

Arguments:

- texture-name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.camera](https://docs.cycling74.com/reference/jit.gl.camera) | Set a rendering view |
| [jit.gl.cubemap](https://docs.cycling74.com/reference/jit.gl.cubemap) | Manage a cubemap texture target |
| [jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material) | Generate materials for 3D objects |
| [jit.gl.pbr](https://docs.cycling74.com/reference/jit.gl.pbr) |  |
| [jit.gl.environment](https://docs.cycling74.com/reference/jit.gl.environment) |  |
