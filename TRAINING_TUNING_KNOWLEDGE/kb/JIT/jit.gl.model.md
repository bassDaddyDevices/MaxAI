---
type: jitter
name: "jit.gl.model"
summary: "Read and draw various 3D model formats"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.model/"
package: "Jitter"
see_also: ["jit.gl.mesh", "jit.gl.multiple", "jit.gl.node", "jit.gl.render", "jit.gl.texture", "jit.gl.material", "jit.gl.camera"]
---
# jit.gl.model

Read and draw various 3D model formats

## Description

[jit.gl.model](https://docs.cycling74.com/reference/jit.gl.model) Reads and draws a variety of 3D model formats, such as OBJ, Collada, and Blender. Only tessellated polygons are drawn, and surfaces that are not tessellated are converted before drawing. Certain model formats, such as Collada, support skinned animation.

#### Discussion

Supported model file types include:

 *Graphics Library Transmission Format(glTF)*

 *Wavefront Object*

 *Collada*

 *Stanford Polygon Library*

 *Stereolithography*

 *Biovision BVH Motion Capture*

 *Ogre3D XML*

 *BlitzBasic 3D*

 *Autodesk FBX*

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### animblendmode[int]

Determine how multiple enabled animations will be blended (default = 0 - Average).

Possible values:

0 = 'Average'
(
Weights will be averaged to equal 1
)
1 = 'Cumulative'
(
Weights will be added and can go greater than 1
)

### drawgroup[int]

If non-zero, draw only one mesh. If zero, draw all mesh groups in the model (default = 0).

### drawskeleton[int]

If enabled draw a wireframe representation of the bones in the model (default = 0).

### file[symbol]

Load a model file

### find\_instances[int]

Mesh instance removal on import (default = 1). An optional post-processing step when importing the model file. Instanced meshes are removed by referencing one parent.

### fix\_normals[int]

Fix normals on import (default = 0). An optional post-processing step when importing the model file. Tries to fix normal vectors that are facing inwards.

### gen\_normals[int]

Generate normals on import (default = 1). An optional post-processing step when importing the model file.

### gen\_tangents[int]

Generate tangents on import (default = 1). An optional post-processing step when importing the model file. Calculates tangents and bitangents if possible.

### hasbones[int] read-only

Indicates whether the loaded model has bone nodes.

### index\_matrixoutput[int] >= 9.0.0

Enable index matrixoutput mode (default = 0). When enabled matrixoutput mode will output a list of two matrix names. The first contains unique shared vertex data, and the second contains index data as a single plane  long  data type matrix. The mesh can be reconstructed by sending the vertex data to the first inlet of [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) and the index data to last (the  index\_matrix  inlet).

### material\_mode[int]

Mode for applying built-in material properties of a model. (default = 1 - Diffuse)

Possible values:

0 = 'Ignore (Inherit Colors From OB3D)'
(
Material properties are ignored
)
1 = 'Diffuse (Use Diffuse Only)'
(
Only diffuse color component is used
)
2 = 'All (Use All Color Values)'
(
All material components are used
)
3 = 'JMTL (Use Jitter Material)'
(
Internal [jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material) object is used
)

### nodeaxes[int]

If non-zero, draw a RGB axes at the location of all the nodes in the model.

### normalize[int]

Normalize model coordinates flag (default = 1). When enabled, the model is scaled to the range (-1.,1.) for the x, y, and z axes.

### numanimations[int] read-only

Indicates the number of animations in the model.

### numgroups[int] read-only

Indicates the number of mesh groups. A mesh group consists of vertex data and material data.

### optimize[int]

Optimize vertices and nodes on import (default = 1). An optional post-processing step when importing the model file. Identical vertices are jointed to optimize indexing, small meshes are joined if possible, and Nodes with no data assigned are collapsed and joined.

### smoothing\_angle[float]

Specifies the edge angle above which to smooth vertex normals (default = 89.)

### verbose[int]

Verbose mode flag (default = 0). If enabled, messages useful for debugging are printed to the Max Console.

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

### matrixoutput[int]

Matrix output mode (default = 0)

0 = issue render commands

1 = output geometry matrices

2 = output geometry matrices with local transform applied

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

Drag and drop model files

### animenable

Enable a model animation. If two arguments are provided, the first is the animation index to enable. Otherwise the current animation is used.

Arguments:

- anim-index (optional)
  [int]
- enable
  [int]

### animloop

Enable/disable looping on an animation. Looping on animations is enabled by default. If two arguments are provided, the first is the animation index to enable. Otherwise the current animation is used.

Arguments:

- anim-index (optional)
  [int]
- loop-enable
  [int]

### animlooppoints

Set the loop points of an animation, if looping is currently enabled on that animation. If two arguments are provided, the first is the animation index to enable. Otherwise the current animation is used.

Arguments:

- anim-index (optional)
  [int]
- loop-start
  [float]
- loop-stop
  [float]

### animrate

Set an animation's rate. If two arguments are provided, the first is the animation index, otherwise the current animation is used.

Arguments:

- anim-index (optional)
  [int]
- rate
  [float]

### animreset

Reset the state of an animation. Time is set to 0., rate to 1., weight to 1., and the loop points are set to the beginning and end of the animation. If two arguments are provided, the first is the animation index to enable. Otherwise the current animation is used.

Arguments:

- anim-index (optional)
  [int]

### animtime

Jump to a specific time, in seconds, of an animation. If two arguments are provided, the first is the animation index, otherwise the current animation is used.

Arguments:

- anim-index (optional)
  [int]
- time
  [float]

### animweight

Set an animation's weight which determines how much influence the animation has on the affected mesh. If two arguments are provided, the first is the animation index, otherwise the current animation is used.

Arguments:

- anim-index (optional)
  [int]
- weight
  [float]

### copynodestoclipboard

Copy all nodes in the model as [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) objects, to the clipboard. When the nodes are pasted in the patch, they will control the internal nodes of the model. Make sure the name attribute is set before using this feature.

### dispose

Unload the model file and free all resources

### getanim\_dict

Send a description of the animation at  anim-index  as a dictionary out the dumpout.

Arguments:

- anim-index
  [int]

### getanimnames

Sends a list of the scenes named animations out the dumpout. Some model files don't support named animations, and therefore the names will not be sent, even though animations are present.

### getbonenames

Sends a list of the bones currently loaded in the model, if any, out the dumpout.

### getmaterial\_dict

Send a description of the  drawgroup  material as a dictionary out the dumpout. If no argument, use the current drawgroup attribute.

Arguments:

- drawgroup (optional)
  [int]

### getnodenames

Sends a list of the scene nodes currently loaded in the model out the dumpout.

### gettexnames

Sends a list of all the textures currently loaded in the model out the dumpout.

### nodeanimenable

Toggle the animation of the named node. If disabled, model animations will have no effect on that node.

Arguments:

- model node name
  [symbol]
- anim-enable
  [int]

### nodebind

Takes two args, the name of the node in the model to bind, and the name of an [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) object to bind to.

Arguments:

- model node name
  [symbol]
- jit.anim.node name
  [symbol]

### nodereset

Resets the named node in the model to it's initial spatial transform state.

Arguments:

- model node name
  [symbol]

### nodesetinitial

Sets the named nodes initial transform state to it's current transform.

Arguments:

- model node name
  [symbol]

### read

Loads an model file from disk. The  read  message will attempt to find the model file in the Max search path and load it. If no file name is specified, a file dialog box is presented.

### sendmaterial

Send the internal material for  drawgroup  a message. See [jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material) for possible messages and attributes.

Arguments:

- drawgroup
  [int]
- message
  [symbol]
- values
  [list]

### sendtexture

Send the internal named texture a message. See [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) for possible messages and attributes.

Arguments:

- texture name
  [symbol]
- message
  [symbol]
- values
  [list]

### texgroup

The  texgroup  message is used to apply a named texture to a specific mesh within the model. The model's mesh-groups are specified in its model file. The texture applied to a group will override any textures which have been applied to the object using the texture attribute, and textures loaded from the model file.

Arguments:

- group-number
  [int]
- texture-name
  [symbol]

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
| [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) | Generate GL geometry from matrices |
| [jit.gl.multiple](https://docs.cycling74.com/reference/jit.gl.multiple) | Create multiple object instances |
| [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) | Create hierarchical rendering groups |
| [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) | Render Jitter OpenGL objects |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material) | Generate materials for 3D objects |
| [jit.gl.camera](https://docs.cycling74.com/reference/jit.gl.camera) | Set a rendering view |
