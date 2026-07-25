---
type: jitter
name: "jit.gl.pix.codebox"
summary: "Generates pixel processing shaders from GenExpr code"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.pix.codebox/"
package: "Jitter"
see_also: ["jit.gen", "jit.pix", "jit.gl.pix", "jit.gen.codebox", "jit.pix.codebox"]
---
# jit.gl.pix.codebox

Generates pixel processing shaders from GenExpr code

## Description

The [jit.gl.pix.codebox](https://docs.cycling74.com/reference/jit.gl.pix.codebox) object generates new pixel processing shaders from GenExpr code. [jit.gl.pix.codebox](https://docs.cycling74.com/reference/jit.gl.pix.codebox) is essentially a [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) object whose shader files are generated from GenExpr code.

## Attributes

### bgcolor[4 floats]

Sets the color for the object's background frame.

### linenumbers[int]: 1

Show lefthand column containing line numbers for non empty lines.

### linenumberwidth[int32]: 20

Set the width of lefthand line number column in pixels.

### margin[int32]: 4

Set the width of the left and righthand margin in pixels

### style[symbol]:

Style

### textcolor[4 floats]

The default textcolor (typically overridden by syntax coloring)

### title[symbol]

Gen patcher title

### t[symbol]

Gen patcher title

### dirty[int] read-only

Gen patcher dirty flag

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

### thru[int]

Enable thru mode (default = 1). When the flag is set, texture output is sent whenever input is received.

### texrect[4 floats]

Texture rectangle mapping values (default = 0 0 1 1...). The four values represent texture mapping coordinates for the left, bottom, right and top sides of the geometry rectangle, and can be used to easily crop the input image. There are four values for each texture input.

### rectangle[long]

Enable texture rectangle mode on internal texture objects(default = 1). When enabled the internal GL texture is treated as a rectangular texture, and must be referenced using sampler2DRect and sampled using texture2DRect when sampled from a GLSL shader. When disabled the texture dimensions are upsampled to the nearest power of two value, and must be referenced and sampled using sampler2D and texture2D. Certain texture attributes and GLSL effects require rectangle mode disabled.

### rect[4 floats]

Geometry rectangle (default = 0 0 1 1). The four values represent normalized coordinates for the left, bottom, right and top sides of the geometry rectangle. To flip the image horizontally use  *rect 1 0 0 1*  or to flip vertically use  *rect 0 1 1 0* .

### outputs[int] >= 7.0.0

Number of texture outputs (default = 1). Texture outputs correspond to gen patcher outs.

### out\_name[symbol] read-only

Output texture name

### inputs[int]

Input count (default = 2)

### gen[symbol]

The name of the gen patcher to use.

### exportfolder[symbol]

Sets the folder to export gen patchers into when using the  exportcode  message.

### dimscale[2 floats]

The output dimension scaling factor of the output (default = 1 1). Useful for upsampling or downsampling texture output.

output.dim = input.dim\*dimscale

### dim[2 ints]

The texture output dimensions when adapt is disabled (default = 256 256)

### depth[float]

The depth or z-offset for the slab geometry. (default = 0.0)

### colormode[symbol]

Texture color mode (default = argb)

Possible values:

'argb'

'uyvy'

### adapt[long]

Enable adapt to input (default = 1). When enabled the texture output dimensions will match the input dimensions.

### activeinput[int]

The current input used for texture and matrix messages (default = 0). Useful when calling input messages from Java or JavaScript.

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

### OB3D Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Set parameter values in the Gen patcher

### (drag)

Drag and drop a .genjit Gen patcher

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

### compile

Compile the Gen patcher

### getparamdescription

Get a parameter description

### OB3D Messages

## See Also

| Name | Description |
| --- | --- |
| [jit.gen](https://docs.cycling74.com/reference/jit.gen) | Generate new Jitter MOP objects |
| [jit.pix](https://docs.cycling74.com/reference/jit.pix) | Generates Jitter mop pixel processing objects from a patcher. |
| [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) | Generates pixel processing shaders from a gen patcher |
| [jit.gen.codebox](https://docs.cycling74.com/reference/jit.gen.codebox) | Generate new Jitter MOP objects |
| [jit.pix.codebox](https://docs.cycling74.com/reference/jit.pix.codebox) | Generate Jitter MOP pixel processing objects |
