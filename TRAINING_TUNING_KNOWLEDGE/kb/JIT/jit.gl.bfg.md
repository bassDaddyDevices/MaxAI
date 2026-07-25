---
type: jitter
name: "jit.gl.bfg"
summary: "Procedural basis function texture generator"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.bfg/"
package: "Jitter"
see_also: ["jit.bfg", "jit.gl.pix", "jit.gl.shader", "jit.gl.slab", "jit.gl.texture"]
---
# jit.gl.bfg

Procedural basis function texture generator

## Description

Generates OpenGL texture output from a library of procedural basis functions. The functions are processed on the graphics card as OpenGL GLSL shaders. The three categories of functions include noise, fractal and distorted.

## Attributes

### adapt[int]: 1

Enable adapt to input (default = 1). When enabled the texture output dimensions will match the input dimensions.

### basis[symbol]

The name of the basis function to use for the evaluation. (default = noise.perlin)

Possible values:

'noise.perlin'
(
Classic Perlin noise, periodic variant
)
'noise.simplex'
(
Simplex weighted pseudo-random values
)
'noise.cell'
(
Coherent blocky noise
)
'noise.checker'
(
Periodic checker squares
)
'fractal.multi.rigid'
(
Multiplicative fractal with sharp ridges
)
'fractal.multi.hybrid'
(
A hybrid additive and multiplicative fractal
)
'fractal.fbm'
(
Fractal Brownian motion
)
'fractal.multi'
(
Multiplicative fractal with varying simularity across scales
)
'fractal.hetero'
(
Heterogenous multiplicative fractal
)
'noise.voronoi'
(
Distance weighted pseudo-random feature points
)
'noise.voronoi.crackle'
(
Variation of Voronoi
)
'noise.voronoi.smooth'
(
Variation of Voronoi with distance filtering
)
'noise.voronoise'
(
Generalized Voronoi and Noise
)
'noise.voronoi.id'
(
Voronoi variation with cells colorized by ID
)
'distorted'
(
Domain distorted combinational noise
)
'distorted.2axis'
(
Distortion along 2 axes
)
'input.distorted'
(
Distortion of input texture
)
'input.distorted.2axis'
(
Distortion of input texture along 2 axes
)

### basis.inner[symbol]

Set the innter basis function when basis is a distorted type function (default = noise.perlin).

Possible values:

'noise.perlin'

'noise.simplex'

'noise.cell'

'noise.checker'

'fractal.multi.rigid'

'fractal.multi.hybrid'

'fractal.fbm'

'fractal.multi'

'fractal.hetero'

'noise.voronoi'

'noise.voronoi.crackle'

'noise.voronoi.smooth'

'noise.voronoise'

'noise.voronoi.id'

### basis.outer[symbol]

Set the outer basis function when basis is a distorted type function (default = noise.simplex).

Possible values:

'noise.perlin'

'noise.simplex'

'noise.cell'

'noise.checker'

'fractal.multi.rigid'

'fractal.multi.hybrid'

'fractal.fbm'

'fractal.multi'

'fractal.hetero'

'noise.voronoi'

'noise.voronoi.crackle'

'noise.voronoi.smooth'

'noise.voronoise'

'noise.voronoi.id'

### colorize[int]

Colorize the output texture using a cosine function (default = 0). See the palette attribute for making adjustments to the colorization.

### dim[2 ints]

The texture output dimensions when adapt is disabled (default = 256 256)

### dimscale[2 floats]

The output dimension scaling factor of the output (default = 1 1). Useful for upsampling or downsampling texture output.

output.dim = input.dim\*dimscale

### distortion[float]

Adjust the amount of distortion for distorted type functions (default = 1).

### filter[symbol]

Filter Mode

Possible values:

'none'

'nearest'

'linear'

### fractal\_params[4 floats]

Adjust parameters of fractal type functions. The parameters correspond to h, lacunarity, offset, and gain. Not all fracal functions respond to all parameters. Unused paramters are set to 0.

fractal.multi.rigid uses h, lacunarity, offset, gain

fractal.multi, fractal.hetero and fractal.multi.hybrid uses h, lacunarity, offset

fractal.fbm uses h, lacunarity

### offset[2 floats]

The dimensional offsets to use for generating the spatial grid coordinates (default = 0 0).

### out\_name[32 symbols] read-only

Output texture name

### palette[3 floats]

Adjust the colorization effect when colorize is enabled (default = 0 1 2).

### rect[4 floats]

Slab geometry rectangle (default = 0 0 1 1). The four values represent normalized coordinates for the left, bottom, right and top sides of the geometry rectangle. To flip the image horizontally use  *rect 1 0 0 1*  or to flip vertically use  *rect 0 1 1 0* .

### rectangle[int]

Enable texture rectangle mode on internal texture objects(default = 1). When enabled the internal GL texture is treated as a rectangular texture, and must be referenced using sampler2DRect and sampled using texture2DRect when sampled from a GLSL shader. When disabled the texture dimensions are upsampled to the nearest power of two value, and must be referenced and sampled using sampler2D and texture2D. Certain texture attributes and GLSL effects require rectangle mode disabled.

### scale[2 floats]

The dimensional scale factors to use for generating the spatial grid coordinates (default = 1 1).

### time[float]

Time animation parameter

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

### voronoi\_crackle[3 floats]

Voronoi crackle effect values (default = 8.0 2.0 0.5). Only used when basis is  *noise.voronoi.crackle*

### voronoi\_jitter[float]

Voronoi jitter amount (default = 1). Only used when basis is a  *noise.voronoi*  type function.

### voronoi\_shade[float]

Simulate cell shading effect when basis is  *noise.voronoi.id*  (default = 0.5).

### voronoi\_smooth[float]

Adjust the smoothing factor when basis is  *noise.voronoi.smooth*  (default = 64).

### voronoise\_amt[float]

Adjust the mix between the Voronoi and noise functions when basis is  *noise.voronoise*  (default = 0).

### zoom[float]

Adjust both the scale and offset values to simulate zooming in and out of the function center (default = 1).

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

### full\_source\_code

Open an editor window containing the generated JXS shader code based on object state.

### getparamdefault

Report shader parameter's default value

Arguments:

- name
  [symbol]

### getparamdescription

Get a parameter description

Arguments:

- name
  [symbol]

### getparamlist

Report shader parameter names

### getparamtype

Report shader parameter's type

Arguments:

- name
  [symbol]

### getparamval

Report shader parameter's value

Arguments:

- name
  [symbol]

### param

Set a shader parameter value

Arguments:

- name
  [symbol]
- message
  [symbol]
- values
  [list]

### sendinput

Sends an input [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) object a message.

Arguments:

- index
  [int]
- message
  [symbol]
- values
  [list]

### sendoutput

Sends the output [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) object a message.

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
| [jit.bfg](https://docs.cycling74.com/reference/jit.bfg) | Evaluate a procedural basis function graph |
| [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) | Generates pixel processing shaders from a gen patcher |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
