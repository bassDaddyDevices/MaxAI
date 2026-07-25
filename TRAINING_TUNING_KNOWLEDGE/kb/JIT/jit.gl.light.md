---
type: jitter
name: "jit.gl.light"
summary: "Place a light source in a 3D scene"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.light/"
package: "Jitter"
see_also: ["jit.gl.render", "jit.gl.sketch", "jit.gl.material"]
---
# jit.gl.light

Place a light source in a 3D scene

## Description

Contains the properties needed to define a light source in OpenGL. These include light type (directional, point and spot), light color, attenuation, and spot angle and falloff. In addition a position (for point and spot) and orientation (for directional and spot) can be defined for a virtual light in 3D space.

#### Discussion

Multiple [jit.gl.light](https://docs.cycling74.com/reference/jit.gl.light) objects can be added to a scene, up to a maximum that is specific to your graphics card.

The actual appearance of 3D objects is a combination of the material properties of that object, and the color values of the [jit.gl.light](https://docs.cycling74.com/reference/jit.gl.light) objects in the scene. The possible color values are ambient, diffuse and specular. For more information, see chapter 5 of the OpenGl Redbook.

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### ambient[4 floats]

The color and opacity of the ambient light component in the form red green blue opacity (default = 0. 0. 0. 1. (opaque black)) All values should be in the range 0.-1.

### atten\_const[float]

The constant factor in the attenuation formula: 1.0 means never attenuate, 0.0 is complete attenuation. The attenuation parameters determine how the light source diminishes with distance for  *point*  and  *spot*  type lights.

### atten\_linear[float]

The linear factor in the attenuation formula: 1 means attenuate evenly over the distance. The attenuation parameters determine how the light source diminishes with distance for  *point*  and  *spot*  type lights.

### atten\_quad[float]

The quadratic factor in the attenuation formula: adds a curvature to the attenuation formula. The attenuation parameters determine how the light source diminishes with distance for  *point*  and  *spot*  type lights.

### diffuse[4 floats]

The color and opacity of the diffuse light component in the form red green blue opacity (default = 1. 1. 1. 1. (opaque white)) All values should be in the range 0.-1.

### direction[3 floats]

Sets the direction the light points. Only applies to directional and spot lights.

### layer[int]

The light layer controls the ordering of lights in GLSL lighting arrays (default = 0). With the gl2 engine, lights are accessed via the gl\_LightSource array. Objects in the same layer have indeterminate ordering.

### lookat[3 floats]

One way to set the orientation. The light will orient so that it's local Z points to the 3D position provided. (default = 0 0 0)

### shadowblur[float] >= 7.0.0

Shadow blur amount (default = 0.2). Indicates the width of a gaussian blur performed on the shadow output texture.

### shadowquality[symbol] >= 7.0.0

Shadow texture quality (default = med). Setting this value affects the dim and type of the internal [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) shadow target.

Possible values:

'lo'
(
type=float16, dim=512
)
'med-lo'
(
type=float16, dim=1024
)
'med'
(
type=float32, dim=1024
)
'med-hi'
(
type=float32, dim=2048
)
'hi'
(
type=float32, dim=4096
)

### shadowrange[float] >= 7.0.0

Shadow range value (default = 50.0). For directional lights, this represents the the maximum distance a shadow-caster can be from shadow-receiver. For spot/point lights the maximum range a light will affect other objects. Setting this as low as possible in the scene generally gives better shadow results.

### shadows[int] >= 7.0.0

Enable shadow casting from this light (default = 0).

### shadowtexoutname[symbol] read-only>= 7.0.0

The internal shadow texture output name.

### specular[4 floats]

Color and opacity of specular light component (default = 1. 1. 1. 1. (opaque white)) The first three floats in the range 0.-1. specify the RGB components of the specular light color. The fourth float (also in the range 0.-1.) specifies opacity.

### spot\_angle[float]

Defines the cone angle for spot type lights (default = 90)

### spot\_falloff[float]

Defines the rate of falloff of the light from the center, to the edges of the cone (default = 0). Only applies to spot type lights.

### type[symbol]

Light casting type (default = directional).

Possible values:

'point'
(
Models a positional source illuminating in all directions
)
Point lights ignore rotation and direction attributes. Attenuation attributes (atten\_const, atten\_linear, and atten\_quad) affect intensity.

'directional'
(
Models an infinitely far away light with parallel rays (e.g. the sun)
)
Directional lights ignore position and attenuation attributes.

'spot'
(
Models a positional source illuminating in a specific direction
)
Cone shape is determined by spot\_angle with a falloff determined by spot\_falloff. Attenuation attributes (atten\_const, atten\_linear, and atten\_quad) affect intensity.

'hemisphere'
(
 ***(GLCore only)***  Also known as "sky and ground" lighting.
)
Hemisphere lights are similar to directional but the light is cast from both above (sky), and below (ground). Sky color is set from diffuse and ground from ambient color attributes. Hemisphere lights ignore position and attenuation attributes.

### viewproj\_matrix[symbol] read-only>= 7.0.0

Shadow camera current view-projection matrix

### OB3D Attributes

### anim[symbol]

The name of a [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) object that handles all spatial transforms for this instance (default = UID). The default value references an internal object, but can be overridden by setting to the name of an existing external [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) instance. This allows for more advanced control of the spatial transform.

### anchor[3 floats]

The anchor position in local space (default = 0. 0. 0.). Allows for offsetting the local 3D origin around which transforms are applied.

### animmode[symbol]

Determines which space the  anim\_move  and  anim\_turn  messages will affect the position and orientation of this object (default = parent).

local = Rotate relative to local axis

parent = Rotate relative to parent axis

world = Rotate relative to world axis

### axes[int]

x/y/z axis rendering off/on (default = 0)

### drawto[symbol]

The named drawing context in which to draw (default = none) A named drawing context is a named instance of a jit.window, jit.pwindow, or jit.matrix object that has an instance of the jit.gl.render object associated with it.

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### filterclass[symbol]

The name of this object's pick filter class (default = default). This controls the visibility of objects to the [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) and [jit.gl.picker](https://docs.cycling74.com/reference/jit.gl.picker) objects. In order to select this object, the filterclass value must be in the picking object's filters list.

### name[symbol]

The instance name (default = UID)

### position[3 floats]

The 3D origin in the form x y z (default = 0. 0. 0.)

### quat[4 floats]

The current rotation as a quaternion(default = 0. 0. 0. 1.). A quaternion is a mathematical construct that is a four dimensional vector, and can be visualized as a rotation around an arbitrary axis. Quaternions are a useful representation of an orientation in 3D space.

### rotate[4 floats]

The angle of rotation and the xyz vector about which the rotation is performed in the form rotation-angle x y z (default = 0. 0. 0. 1.)

### rotatexyz[3 floats]

Sets the current rotation to the concatenation of rotations about the positive x, y, and z axes, also known as Euler angles (default = 0. 0. 0.). The default order is yzx and can be changed with the [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) rotate\_order attribute. Angles are expressed in degrees.

### scale[3 floats]

The 3D scaling factor in the form x y z (default = 1. 1. 1.)

### transform\_reset[int]

Modelview and projection transform reset flag (default = 0) When the flag is set, the modelview and projection transforms are set to the identity transform before rendering the object. This is useful for sprite or billboard overlays, or automatic scaling to window size. The transform\_reset flag modes are:

0 = do nothing (default)

1 = proportional orthographic glOrtho(-aspect, aspect, -1.0, 1.0, near\_clip, far\_clip);

2 = orthographic normalized glOrtho(-1.0, 1.0, -1.0, 1.0, near\_clip, far\_clip);

3 = proportional perspective with near clip = 0.001 gluPerspective(lens\_angle, aspect, 0.001/\*near\_clip\*/, far\_clip);

4 = normalized perspective with near clip = 0.001 gluPerspective(lens\_angle, 1.0, 0.001/\*near\_clip\*/, far\_clip);

### viewalign[int]

View aligned transformation flag (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### sendoutput

Send the shadow output texture a message

### OB3D Messages

### bang

Equivalent to the  draw  message.

### draw

Draws the object in the named drawing destination. If the matrixoutput attribute is supported and set to 1, the geometry matrices are sent out the object's left outlet.

### drawraw

Equivalent to  draw  with the inherit\_all attribute set to 1.

### drawimmediate

Equivalent to  draw  but ignoring any potential renderer setup

### anim\_move

Move the object along the axis provided, relative to the space indicated by animmode.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### anim\_turn

Rotate the object along each axis by the amount provided, relative to the space indicated by animmode.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### anim\_grow

Scale the object along each axis by the amount provided.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### anim\_reset

Reset the local transformation attributes to their default values (position = 0 0 0, rotatexyz = 0 0 0, and scale = 1 1 1)

### update\_node

Update the node transformation attributes.

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) | Render Jitter OpenGL objects |
| [jit.gl.sketch](https://docs.cycling74.com/reference/jit.gl.sketch) | Use drawing commands with OpenGL |
| [jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material) | Generate materials for 3D objects |
