---
type: jitter
name: "jit.gl.slab"
summary: "Process texture data"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.slab/"
package: "Jitter"
see_also: ["External Text Editor", "jit.gl.graph", "jit.gl.gridshape", "jit.gl.handle", "jit.gl.isosurf", "jit.gl.mesh", "jit.gl.model", "jit.gl.nurbs", "jit.gl.plato", "jit.gl.render", "jit.gl.shader", "jit.gl.sketch", "jit.gl.text2d", "jit.gl.text3d", "jit.gl.texture", "jit.gl.videoplane", "jit.gl.volume"]
---
# jit.gl.slab

Process texture data

## Description

Generate, process and combine images efficiently using fragment shaders. Develop custom texture effects for processing on the graphics card.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### autowatch[int] >= 9.0.0

Enable watching for changes in the source file (default = 1). When file watching is on, the file is recompiled automatically when it is modified. This allows you to use an external editor for your file.

### bypass[int] >= 9.0.0

Bypass slab processing flag (default = 0). When enabled the input is passed through to the output without processing.

### activeinput[int]

The current input used for texture and matrix messages (default = 0). Useful when calling input messages from Java or JavaScript.

### adapt[int]: 1

Enable adapt to input (default = 1). When enabled the texture output dimensions will match the input dimensions.

### colormode[symbol]

Texture color mode (default = argb)

Possible values:

'argb'

'uyvy'

### embed[int] >= 9.0.0

When enabled, the shader file is saved with its patcher. If the object is loaded in a patch with no file argument, embed is enabled by default. If a file argument is provided, embed will be disabled unless explicitly enabled by the user.

### dim[2 ints]

The texture output dimensions when adapt is disabled (default = 256 256)

### dimscale[2 floats]

The output dimension scaling factor of the output (default = 1 1). Useful for upsampling or downsampling texture output.

output.dim = input.dim\*dimscale

### file[symbol]

The shader description file (JXS) to use (default = none)

### filter[symbol]

Set texture filter mode on internal texture objects (default = linear). This controls the magnification filter used when a texture is rendered at a size larger than its native resolution. The filter determines how a texture's pixels, or texels, are interpolated to fill the larger screen space.

Possible values:

'none'
(
No filtering applied (same as nearest)
)
'nearest'
(
Uses the color of the single nearest pixel
)
'linear'
(
Calculates a weighted average of the four closest texels
)

### inputs[int]

Slab input count (default = 2). The current maximum for this value is 32.

### out\_name[32 symbols] read-only

Output texture name

### outputs[int]

Number of texture outputs (default = 1). Texture outputs correspond to shader render targets. The current maximum for this value is 8. For an example of multiple render targets see
[mrt.slab.unpack](openfilelink)

### rect[4 floats]

Slab geometry rectangle (default = 0 0 1 1). The four values represent normalized coordinates for the left, bottom, right and top sides of the geometry rectangle. To flip the image horizontally use  *rect 1 0 0 1*  or to flip vertically use  *rect 0 1 1 0* .

### rectangle[int]

Enable texture rectangle mode on internal texture objects(default = 1). When enabled the internal GL texture is treated as a rectangular texture, and must be referenced using sampler2DRect and sampled using texture2DRect when sampled from a GLSL shader. When disabled the texture dimensions are upsampled to the nearest power of two value, and must be referenced and sampled using sampler2D and texture2D. Certain texture attributes and GLSL effects require rectangle mode disabled.

### thru[int]

Enable thru mode (default = 1). When the flag is set, texture output is sent whenever input is received.

### scale[float]

TEXT\_HERE

### type[symbol]

The output texture data type (default = auto). When type is  auto  the type is set by the input texture or matrix type.

Possible values:

'auto'
(
Adapt to input data type
)
'char'
(
8bit unsigned byte
)
'long'
(
32bit integer
)
'half'
(
16bit float
)
'float'
(
32bit float
)
'float16'
(
16bit float
)
'float32'
(
32bit float
)

### OB3D Attributes

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

### layer[int]

Object layer number (default = 0) When in automatic mode, the layer number determines the rendering order (low to high). Objects in the same layer have no guarantee which will be rendered first.

### name[symbol]

The instance name (default = UID)

### texture[8 symbols]

The name of the texture to be applied (default = none). If multiple textures are specified, uses multi-texturing.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

TEXT\_HERE

### (drag)

Dragging a JXS file from the [Max File Browser](https://docs.cycling74.com/userguide/file_browser) or desktop to a jit.gl.slab object, will load the file.

### (mouse)

Double click to open the shader editor. If no file is loaded the editor will load a starter shader to use as the basis for a new shader. This file must be saved to disk for use after the editor is closed.

### getparamdefault

Report slab shader parameter's default value

Arguments:

- name
  [symbol]

### getparamdescription

Get a parameter description

### getparamlist

Report slab shader parameter names

### getparamtype

Report slab shader parameter's type

Arguments:

- name
  [symbol]

### getparamval

Report slab shader parameter's value

Arguments:

- name
  [symbol]

### param

Set a slab shader parameter value

Arguments:

- name
  [symbol]
- message
  [symbol]
- values
  [list]

### read

Loads the given JXS shader file from disk.

Arguments:

- filename
  [symbol]

### sendinput

Sends a message to an input texture. If the first arg is an int, it specifies the texture index to send the message, otherwise all input textures receive the message.

Arguments:

- index
  [int]
- message
  [symbol]
- values
  [list]

### sendoutput

Sends the output [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) objects a message.

Arguments:

- message
  [symbol]
- values
  [list]

### sendshader

Sends the internal [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) object a message

Arguments:

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

### jit\_gl\_texture

Binds the texture specified by  *texture-name*  to this object. Equivalent to setting the texture attribute to  *texture-name* .

Arguments:

- texture-name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [External Text Editor](https://docs.cycling74.com/userguide/external_text_editor) | External Text Editor |
| [jit.gl.graph](https://docs.cycling74.com/reference/jit.gl.graph) | Graph floats into 3D space |
| [jit.gl.gridshape](https://docs.cycling74.com/reference/jit.gl.gridshape) | Generate simple geometric shapes as a grid |
| [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) | Use mouse movement to control position/rotation |
| [jit.gl.isosurf](https://docs.cycling74.com/reference/jit.gl.isosurf) | Generate a GL based surface extraction |
| [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) | Generate GL geometry from matrices |
| [jit.gl.model](https://docs.cycling74.com/reference/jit.gl.model) | Read and draw various 3D model formats |
| [jit.gl.nurbs](https://docs.cycling74.com/reference/jit.gl.nurbs) | Generate NURBS surface |
| [jit.gl.plato](https://docs.cycling74.com/reference/jit.gl.plato) | Generate platonic solids |
| [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) | Render Jitter OpenGL objects |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
| [jit.gl.sketch](https://docs.cycling74.com/reference/jit.gl.sketch) | Use drawing commands with OpenGL |
| [jit.gl.text2d](https://docs.cycling74.com/reference/jit.gl.text2d) |  |
| [jit.gl.text3d](https://docs.cycling74.com/reference/jit.gl.text3d) |  |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.videoplane](https://docs.cycling74.com/reference/jit.gl.videoplane) | Display video in OpenGL |
| [jit.gl.volume](https://docs.cycling74.com/reference/jit.gl.volume) | Create a volume visualization |
