---
type: jitter
name: "jit.gl.pix"
summary: "Generates pixel processing shaders from a gen patcher"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.pix/"
package: "Jitter"
see_also: ["Gen Common Operators", "GenExpr", "Jitter Operators", "Gen Overview", "jit.gen", "jit.pix", "jit.gl.slab", "jit.expr", "jit.matrix", "gen~"]
---
# jit.gl.pix

Generates pixel processing shaders from a gen patcher

## Description

The [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) object generates new pixel processing shaders from a patcher. [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) is essentially a [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) object whose shader files are generated from [Gen](https://docs.cycling74.com/userguide/gen/_gen_overview) patchers.

## Attributes

### bypass[int]

TEXT\_HERE

### activeinput[int]

The current input used for texture and matrix messages (default = 0). Useful when calling input messages from Java or JavaScript.

### adapt[int]: 1

Enable adapt to input (default = 1). When enabled the texture output dimensions will match the input dimensions.

### colormode[symbol]

Texture color mode (default = argb)

Possible values:

'argb'

'uyvy'

### dim[2 ints]

The texture output dimensions when adapt is disabled (default = 256 256)

### dimscale[2 floats]

The output dimension scaling factor of the output (default = 1 1). Useful for upsampling or downsampling texture output.

output.dim = input.dim\*dimscale

### dirty[int] read-only

Gen patcher dirty flag

### exportfolder[symbol]

Sets the folder to export gen patchers into when using the  exportcode  message.

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

### gen[symbol]:

The name of the gen patcher to use.

### inputs[int] read-only

Input count (default = 2)

### out\_name[32 symbols] read-only

Output texture name

### outputs[int] read-only

Number of texture outputs (default = 1). Texture outputs correspond to gen patcher outs.

### rect[4 floats]

Geometry rectangle (default = 0 0 1 1). The four values represent normalized coordinates for the left, bottom, right and top sides of the geometry rectangle. To flip the image horizontally use  *rect 1 0 0 1*  or to flip vertically use  *rect 0 1 1 0* .

### rectangle[int]

Enable texture rectangle mode on internal texture objects(default = 1). When enabled the internal GL texture is treated as a rectangular texture, and must be referenced using sampler2DRect and sampled using texture2DRect when sampled from a GLSL shader. When disabled the texture dimensions are upsampled to the nearest power of two value, and must be referenced and sampled using sampler2D and texture2D. Certain texture attributes and GLSL effects require rectangle mode disabled.

### t[symbol]

Gen patcher title

### thru[int]

Enable thru mode (default = 1). When the flag is set, texture output is sent whenever input is received.

### title[symbol]

Gen patcher title

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

Set parameter values in the Gen patcher

### (drag)

Drag and drop a .genjit Gen patcher

### compile

Compile the Gen patcher

### (mouse)

Double-click to open gen patcher window

### exportcode

Export a gen patcher as shader code. With no arguments, jit.gl.pix will export a standard Jitter JXS shader file with GLSL code. The optional arguments can be either 'jxs' or 'webgl' or 'isf'.

In the 'webgl' case, jit.gl.pix will export an .html file suitable for loading in a
[WebGL context](https://www.khronos.org/webgl/)
. The code uses
[TWGL](http://twgljs.org)
as a helper library and requires the
[twgl-full.min.js](https://github.com/greggman/twgl.js/blob/v4.4.0/dist/4.x/twgl-full.min.js)
file be in the same directory as the exported html file.

In the 'isf' case, jit.gl.pix will export a .fs fragment shader suitable for loading in a
[ISF (Interactive Shader Format) context](https://www.interactiveshaderformat.com)

Arguments:

- target
  [symbol]

### full\_source\_code

Opens an editor window with the generated source code formatted as a JXS file.

### getparamdefault

Sends the default data values for the indicated shader parameter for the internal [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) object out the right-most outlet.

### getparamdescription

Get a parameter description

### getparamlist

Sends the names of all the internal [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) object shader parameters out the right-most outlet.

### getparamtype

Sends the name of the datatype for the indicated shader parameter for the internal [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) object out the right-most outlet.

### getparamval

Sends the data values for the indicated shader parameter for the internal [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) object out the right-most outlet.

### open

Open the Gen patcher window

### param

Sets the given shader parameter with the given atom values as defined in a JXS (Jitter shader) file.

### sendinput

Sends an input [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) a message. If the first arg is an int, it specifies the texture index to send the message, otherwise all input textures receive the message.

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

### wclose

Close the Gen patcher

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
| [Gen Common Operators](https://docs.cycling74.com/userguide/gen/gen_common_operators) | Gen Common Operators |
| [GenExpr](https://docs.cycling74.com/userguide/gen/gen_genexpr) | GenExpr |
| [Jitter Operators](https://docs.cycling74.com/userguide/gen/gen_jitter_operators) | Jitter Operators |
| [Gen Overview](https://docs.cycling74.com/userguide/gen/gen_overview) | Gen Overview |
| [jit.gen](https://docs.cycling74.com/reference/jit.gen) | Generate new Jitter MOP objects |
| [jit.pix](https://docs.cycling74.com/reference/jit.pix) | Generates Jitter mop pixel processing objects from a patcher. |
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.expr](https://docs.cycling74.com/reference/jit.expr) | Evaluate an expression to fill a matrix |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [gen~](https://docs.cycling74.com/reference/gen~) | Generate native audio signal processing routines |
