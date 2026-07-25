---
type: jitter
name: "jit.gl.mesh"
summary: "Generate GL geometry from matrices"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.mesh/"
package: "Jitter"
see_also: ["Graphics Processing", "jit.gl.gridshape", "jit.gl.isosurf", "jit.gl.model", "jit.gl.multiple", "jit.gl.nurbs", "jit.gl.plato", "jit.gl.shader", "jit.gl.sketch", "jit.gl.text", "jit.gl.texture", "jit.gl.material", "jit.gl.pbr", "jit.gl.tf", "jit.gl.buffer", "jit.geom.shape", "jit.geom.tomesh", "jit.geom.tomatrix"]
---
# jit.gl.mesh

Generate GL geometry from matrices

## Description

Creates a geometric surface from a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) connected to the left-most inlet containing spatial coordinates. Additional geometry can be specified by attaching other [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) or [jit.gl.buffer](https://docs.cycling74.com/reference/jit.gl.buffer) objects to the other inlets.

#### Discussion

Matrices feed into inlets represent (from left to right): vertex, texcoord, normal, color, specular (unused), edgeflag (unused), tangent, bitangent (unused), and index data. Inlets marked unused are legacy from the gl2 engine and will ignore matrix input when used in glcore. Any inlet (including those marked unused) can be bound to a [jit.gl.buffer](https://docs.cycling74.com/reference/jit.gl.buffer) object via the  jit\_gl\_buffer  message.

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### auto\_colors[int]

Enables or disables the calculation of vertex colors (default = 0).

### auto\_normals[int]

Enables or disables the calculation of normal directions used for calculating lighting (default = 1).

### auto\_tangents[int]

Enables or disables the calculation of tangent directions (only available if texcoords and normals exist) (default = 0).

### color\_mode[symbol]

The mode to use for the calculating vertex colors. (default = position) Supported modes are:

Possible values:

'vertex'

'position'

'texcoord'

'normal'

'tangent'

### draw\_mode[symbol]

The mode to use for rendering the geometry. (default = tri\_grid) Supported modes are:

Possible values:

'tri\_grid'

'quad\_grid'

'points'

'lines'

'line\_strip'

'line\_loop'

'triangles'

'tri\_fan'

'tri\_strip'

'quads'

'quad\_strip'

'polygon'

'lines\_adjacency'

'line\_strip\_adjacency'

'triangles\_adjacency'

'triangle\_strip\_adjacency'

### smooth\_tangents[int]

Enables smooth tangents calculations when auto\_tangents is enabled (default = 0). When on, tangent generation enables a secondary smoothing process, which can improve the look of tangent based effects (e.g. [jit.gl.pbr](https://docs.cycling74.com/reference/jit.gl.pbr) heightmap) at the cost of extra processing.

### tf\_name[symbol]

When set to the name of an existing [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf) object, this mesh will be bound to that object and used to render the transform feedback processs.

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

### automatic[int]

Automatic rendering flag (default = 1) When the flag is set, rendering occurs when the associated jit.gl.render object receives a bang message

### auto\_material[int]

Automatic material attributes flag (default = 1) When the flag is set, and lighting is enabled for the object, the diffuse and ambient material components for the object will be set to the object's color, and the specular and emissive lighting components are disabled.

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

### fog\_params[7 floats]

The fog parameters in the form red green blue alpha density start end (default = 0. 0. 0. 0. 0. 0. 0.) The list's color elements should be in the range 0.-1.

### fog[float]

The amount of fog effect (default = 0.)

### layer[int]

Object layer number (default = 0) When in automatic mode, the layer number determines the rendering order (low to high). Objects in the same layer have no guarantee which will be rendered first.

### lighting\_enable[int]

Lighting enabled flag (default = 0) When the flag is set, lighting is calculated.

### line\_width[float]

The drawing line width (default = 1.)

### mat\_ambient[4 floats]

The ambient light material property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### mat\_diffuse[4 floats]

The diffuse light material property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### mat\_emission[4 floats]

The material emission property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### mat\_specular[4 floats]

The specular light material property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### matfile[symbol]

The Jitter material file to apply (.jitmtl)

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

### quat[4 floats]

The current rotation as a quaternion(default = 0. 0. 0. 1.). A quaternion is a mathematical construct that is a four dimensional vector, and can be visualized as a rotation around an arbitrary axis. Quaternions are a useful representation of an orientation in 3D space.

### rotate[4 floats]

The angle of rotation and the xyz vector about which the rotation is performed in the form rotation-angle x y z (default = 0. 0. 0. 1.)

### rotatexyz[3 floats]

Sets the current rotation to the concatenation of rotations about the positive x, y, and z axes, also known as Euler angles (default = 0. 0. 0.). The default order is yzx and can be changed with the [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) rotate\_order attribute. Angles are expressed in degrees.

### scale[3 floats]

The 3D scaling factor in the form x y z (default = 1. 1. 1.)

### shadow\_caster[int]

Shadow caster flag (default = 0) When the flag is set, object will cast shadows.

### shininess[float]

The material shininess value (default = 16.0) The value should be a float in the range 0.-255.

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

### shader[symbol]

The name of the shader to be applied (default = none)

### texture[8 symbols]

The name of the texture to be applied (default = none). If multiple textures are specified, uses multi-texturing.

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

### (drag)

Drag and drop a Jitter material file

### color\_matrix

Specifies a matrix of color values. This must be the same size as the matrix specified by the  vertex\_matrix  message, and can be a 3 or 4 plane matrix.

### index\_matrix

The word  index\_matrix , followed by a symbol, specifies a matrix of indices. It can be any size, but it must have 1 plane and be an integer matrix.

### jit\_gl\_buffer

Bind a [jit.gl.buffer](https://docs.cycling74.com/reference/jit.gl.buffer) object to this mesh. When bound, the buffer data is used by the mesh when rendering. The mesh inlet determines how the data is used (e.g. as color data or normal data), but this can be overridden by the [jit.gl.buffer](https://docs.cycling74.com/reference/jit.gl.buffer) type attribute.

### normal\_matrix

The word  normal\_matrix , followed by a symbol, specifies a matrix of normal values. This must be the same size as the matrix specified by the  vertex\_matrix  message. It must be a 3 plane matrix.

### reset

Reset all parameters to the default state and clear any stored mesh data.

### tangent\_matrix

The word  tangent\_matrix , followed by a symbol, specifies a matrix of tangent values. This must be the same size as the matrix specified by the  vertex\_matrix  message. It must be a 3 plane matrix.

### texcoord\_matrix

The word  texcoord\_matrix , followed by a symbol, specifies a matrix of texture coordinate values. This must be the same size as the matrix specified by the  vertex\_matrix  message. It can be a 2, 3, or 4 plane matrix.

### vertex\_attr\_matrix

The word  vertex\_attr\_matrix , followed by a symbol, specifies a matrix of arbitrary per-vertex data

### vertex\_matrix

The word  vertex\_matrix , followed by a symbol, specifies a matrix of vertex values. It can be 3 or 4 planes.

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

### import\_material

Import a Jitter material file (.jitmtl).

### export\_material

Export material state as a material file (.jitmtl).

### jit\_gl\_texture

Binds the texture specified by  *texture-name*  to this object. Equivalent to setting the texture attribute to  *texture-name* .

Arguments:

- texture-name
  [symbol]

### get\_shader

Open an editor window containing the object's current JXS shader.

### export\_geometry

Export the object's geometry state as model file with the name specified by the first argument. The second argument sets the file type (default = gltf). Available file types are  gltf  (GL Transmission Format),  ply  (Stanford Polygon Library), and  stl  (Stereolithography).

Arguments:

- filename
  [symbol]
- file-type
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [Graphics Processing](https://docs.cycling74.com/userguide/jitter/graphics_processing) | Graphics Processing |
| [jit.gl.gridshape](https://docs.cycling74.com/reference/jit.gl.gridshape) | Generate simple geometric shapes as a grid |
| [jit.gl.isosurf](https://docs.cycling74.com/reference/jit.gl.isosurf) | Generate a GL based surface extraction |
| [jit.gl.model](https://docs.cycling74.com/reference/jit.gl.model) | Read and draw various 3D model formats |
| [jit.gl.multiple](https://docs.cycling74.com/reference/jit.gl.multiple) | Create multiple object instances |
| [jit.gl.nurbs](https://docs.cycling74.com/reference/jit.gl.nurbs) | Generate NURBS surface |
| [jit.gl.plato](https://docs.cycling74.com/reference/jit.gl.plato) | Generate platonic solids |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
| [jit.gl.sketch](https://docs.cycling74.com/reference/jit.gl.sketch) | Use drawing commands with OpenGL |
| [jit.gl.text](https://docs.cycling74.com/reference/jit.gl.text) | Render text in a GL context |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material) | Generate materials for 3D objects |
| [jit.gl.pbr](https://docs.cycling74.com/reference/jit.gl.pbr) |  |
| [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf) |  |
| [jit.gl.buffer](https://docs.cycling74.com/reference/jit.gl.buffer) |  |
| [jit.geom.shape](https://docs.cycling74.com/reference/jit.geom.shape) |  |
| [jit.geom.tomesh](https://docs.cycling74.com/reference/jit.geom.tomesh) |  |
| [jit.geom.tomatrix](https://docs.cycling74.com/reference/jit.geom.tomatrix) |  |
