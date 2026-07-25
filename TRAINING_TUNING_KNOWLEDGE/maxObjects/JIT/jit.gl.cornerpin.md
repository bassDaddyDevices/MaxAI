---
type: jitter
name: "jit.gl.cornerpin"
summary: "Map textures in a window"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.cornerpin/"
package: "Jitter"
see_also: ["jit.gl.render", "jit.gl.videoplane", "jit.gl.texture", "jit.gl.slab", "jit.gl.skybox"]
---
# jit.gl.cornerpin

Map textures in a window

## Description

Provides controls for mapping textures and matrices to an output window by repositioning the image corners. Mouse input is received from the context window allowing for easy manipulation of corner positions.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### colormode[symbol]

Matrix color mode

Possible values:

'argb'

'uyvy'

### corner\_color[4 floats]

Set the corner gui color, used when drawcorners is enabled (default = 1 1 1 1).

### corner\_radius[int]

Pixel size of corner GUI (default = 10)

### cornermode[symbol]

Mode to determine how corner attributes are used to set corner position (default = relative)

Possible values:

'relative'
(
Normalized coords relative to window size
)
'absolute'
(
Absolute window coordinates
)
'absolute\_texture'
(
Absolute coordinates based on texture dimensions
)

### drawcorners[int]

Corner GUI mode (default = 1 - on). Determines if and how the cornerpin GUI is visible.

Possible values:

0 = 'off'

1 = 'on'

2 = 'on\_hover'
(
Visible when mouse hovers over cornerpin quad
)
3 = 'on\_click'
(
Visible when mouse clicks on cornerpin quad
)

### enable\_mouse[int]

Mouse interaction flag (default = 1)

### hover[int]

Enable/disable mouse hovering (default = 0), when drawcorners mode is 3 (on\_hover) or mousereport is enabled.

### interp[int]

Enable interpolation of input image (default = 1)

### invert\_corners[int]

Invert source and destination corner position values (default = 0). This allows for deskewing an image, without dragging beyond the window bounds.

### lower\_left[2 floats]

Lower left corner position (default = 0 1)

### lower\_right[2 floats]

Lower right corner position (default = 1 1)

### mousereport[int]

Enable/disable mouse reporting out first outlet (default = 0). The report indicates clicking, dragging, and hovering (if hover enabled) over the cornerpin quad.

### preserve\_aspect[int]

Preserve aspect ratio flag of input image (default = 0)

### rect\_tex[int]

Enable rectangular textures (default = 1)

### texturename[symbol]

Internal texture name

### ui\_priority[int]

UI priority value (default = -900). When multiple UI objects are listening to the same window, ui\_priority determines the order objects receive input. Lower values test first.

### upper\_left[2 floats]

Upper left corner position (default = 0 0)

### upper\_right[2 floats]

Upper right corner position (default = 1 0)

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

### automatic[int]

Automatic rendering flag (default = 1) When the flag is set, rendering occurs when the associated jit.gl.render object receives a bang message

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

### capture[symbol]

The name of a texture to be rendered to - e.g.  jit.gl.nurbs @capture mytex  will capture to  jit.gl.texture @name mytex .

### cull\_face[int]

Face culling mode (default = 0 (no culling))

0 = no culling

1 = cull back faces

2 = cull front faces

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

### tex\_map[int]

Mode for automatic generation of texture coordinate controls (default = 0)

0 = no coordinates are generated.

1 = OpenGL's texture generation is used with mode GL\_OBJECT\_LINEAR. This applies the texture in a fixed orientation relative to the object.

2 = OpenGL's texture generation is used with mode GL\_SPHERE\_MAP. This can be used to create a reflection effect.

3 = OpenGL's texture generation is used with mode GL\_EYE\_LINEAR. This applies the texture in a fixed orientation relative to OpenGL's eye coordinates.

Modes 1 and 3 are affected by the value of the tex\_plane\_s and tex\_plane\_t attributes listed below.

### tex\_plane\_s[4 floats]

The texture generation coefficients a b c d that apply to tex\_map modes 1 and 3. (default = 1. 0. 0. 0.)

The four coefficients define a plane used to generate the s texture coordinate, which corresponds to the x axis of the texture image. If the tex\_map mode is 1, s = ax + by + cz + dw, where x, y, z, and w are the homogeneous coordinates of the vertex.

### tex\_plane\_t[4 floats]

The texture generation coefficients a b c d, which apply to tex\_map modes 1 and 3. (default = 0. 1. 0. 0)

The four coefficients define a plane which is used to generate the t texture coordinate, which corresponds to the y axis of the texture image.

### texture[8 symbols]

The name of the texture to be applied (default = none). If multiple textures are specified, uses multi-texturing.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### reset

Reset corner position attributes

### sendtexture

Send the output texture a message

Arguments:

- name
  [symbol]
- message
  [symbol]
- values
  [list]

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

### jit\_gl\_texture

Binds the texture specified by  *texture-name*  to this object. Equivalent to setting the texture attribute to  *texture-name* .

Arguments:

- texture-name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) | Render Jitter OpenGL objects |
| [jit.gl.videoplane](https://docs.cycling74.com/reference/jit.gl.videoplane) | Display video in OpenGL |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.gl.skybox](https://docs.cycling74.com/reference/jit.gl.skybox) | Render a skybox in OpenGL |
