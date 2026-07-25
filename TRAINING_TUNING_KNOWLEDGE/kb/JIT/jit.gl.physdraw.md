---
type: jitter
name: "jit.gl.physdraw"
summary: "A physics opengl debug drawer"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.physdraw/"
package: "Jitter"
see_also: ["jit.phys.body", "jit.phys.world", "jit.phys.multiple"]
---
# jit.gl.physdraw

A physics opengl debug drawer

## Description

The [jit.gl.physdraw](https://docs.cycling74.com/reference/jit.gl.physdraw) object performs debug drawing of the objects in a physics simulation, including [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body), [jit.phys.multiple](https://docs.cycling74.com/reference/jit.phys.multiple), and constraint objects such as [jit.phys.hinge](https://docs.cycling74.com/reference/jit.phys.hinge) and [jit.phys.6dof](https://docs.cycling74.com/reference/jit.phys.6dof). A valid opengl context and a valid [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) context are required for debug drawing of the physics world.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### constraintsize[float]

Set the size for drawing contraints in the physics world (default = 2).

### contactsize[float]

Set the size for drawing contact points and vectors in the physics world (default = 6).

### draw\_aabb[int]

Enable drawing of the physics object's aabb (axis-aligned bounding box) (default = 0).

### draw\_bodies[int]

Enable rigid body drawing (default = 1).

### draw\_worldbox[int]

Enable worldbox drawing (default = 1).

### rgb[int]

Drawer color flag (default = 1). When the flag is set, drawer uses RGB colors. Otherwise, the color attribute determines the color used.

### worldname[symbol]

The name of a [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) context this drawer is bound to.

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

### antialias[int]

Antialiasing flag (default = 0) On some hardware, the blend\_enable attribute must also be enabled for antialiasing to work.

### aux\_color[4 floats]

The auxiliary color in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### axes[int]

x/y/z axis rendering off/on (default = 0)

### blend[symbol]

The named blending mode. The possible values are:

add =  blend\_mode  1 1

multiply =  blend\_mode  2 1

screen =  blend\_mode  4 1

exclusion =  blend\_mode  4 5

colorblend =  blend\_mode  3 4

alphablend =  blend\_mode  6 7

coloradd =  blend\_mode  3 1

alphaadd =  blend\_mode  6 1

### blend\_enable[int]

Blending flag (default = 0) When the flag is set, blending is enabled for all rendered objects.

### blend\_mode[2 ints]

The source and destination planes associated with the blend mode (default = 6 7) Blend modes are specified in the form src\_blend\_mode dst\_blend\_mode. The supported modes are:

0 = zero

1 = one

2 = destination color

3 = source color

4 = one minus destination color

5 = one minus source color

6 = source alpha

7 = one minus source alpha

8 = destination alpha

9 = one minus destination alpha

10 = source alpha saturate

### cull\_face[int]

Face culling mode (default = 0 (no culling))

0 = no culling

1 = cull back faces

2 = cull front faces

### depth\_clear[int]

Depth buffer clear flag (default = 0) When the flag is set, the depth buffer is cleared before rendering the object.

### depth\_enable[int]

Depth buffering flag (default = 1) When the flag is set, depth buffering is enabled.

### depth\_write[int]

Depth write flag (default = 1). When the flag is set, writing to the depth buffer is enabled. This will have no effect if depth\_enable is turned off.

### drawto[symbol]

The named drawing context in which to draw (default = none) A named drawing context is a named instance of a jit.window, jit.pwindow, or jit.matrix object that has an instance of the jit.gl.render object associated with it.

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### filterclass[symbol]

The name of this object's pick filter class (default = default). This controls the visibility of objects to the [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) and [jit.gl.picker](https://docs.cycling74.com/reference/jit.gl.picker) objects. In order to select this object, the filterclass value must be in the picking object's filters list.

### layer[int]

Object layer number (default = 0) When in automatic mode, the layer number determines the rendering order (low to high). Objects in the same layer have no guarantee which will be rendered first.

### line\_width[float]

The drawing line width (default = 1.)

### name[symbol]

The instance name (default = UID)

### point\_mode[symbol]

Point drawing mode to use when  *points*  drawing primitive (poly\_mode 2) is enabled (default = circle).

Possible values:

'square'
(
Draw point as square
)
'circle'
(
Draw point as circle
)
'square\_depth'
(
Draw point as square with depth scaling
)
'circle\_depth'
(
Draw point as circle with depth scaling
)
'user\_shader'
(
Allow writing to  *gl\_PointSize*  in custom vertex shader
)

### point\_size[float]

The draw point size (default = 1.)

### poly\_mode[2 ints]

Polygon rendering modes (default 0 0) Rendering modes are expressed in the form frontface backface. Supported rendering modes are:

0 = render as filled polygons

1 = render as lines

2 = render as points

### position[3 floats]

The 3D origin in the form x y z (default = 0. 0. 0.)

### smooth\_shading[int]

Smooth shading flag (default = 0) When the flag is set, smooth shading is used when rendering.

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
| [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) | A rigid body and collision shape |
| [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) | Collision detection and rigid body dynamics |
| [jit.phys.multiple](https://docs.cycling74.com/reference/jit.phys.multiple) | Uses matrices to simulate multiple rigid bodies |
