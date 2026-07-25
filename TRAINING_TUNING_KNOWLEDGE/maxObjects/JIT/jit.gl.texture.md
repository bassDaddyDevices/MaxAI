---
type: jitter
name: "jit.gl.texture"
summary: "Create OpenGL textures"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.texture/"
package: "Jitter"
see_also: ["jit.gl.graph", "jit.gl.gridshape", "jit.gl.handle", "jit.gl.isosurf", "jit.gl.mesh", "jit.gl.model", "jit.gl.nurbs", "jit.gl.plato", "jit.gl.render", "jit.gl.shader", "jit.gl.sketch", "jit.gl.slab", "jit.gl.text2d", "jit.gl.text3d", "jit.gl.videoplane", "jit.gl.volume"]
---
# jit.gl.texture

Create OpenGL textures

## Description

Creates OpenGL textures - buffers of image data used in drawing 3D geometry. [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) is similar to [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) except that textures reside on the graphics card.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### adapt[int]

Enable adapt to input (default = 1). When enabled the texture output dimensions will match the input dimensions.

### anisotropy[int]

Anisotropic filter width (default = 0). Anisotropic filtering is an advanced filtering technique that takes multiple samples and blends the results together. Using anisotropy requires rectangle mode disabled.

### autoclear[int]

Auto-clear texture during capture

### autoscale[int]

Auto-scale texture coordinates

### autotype[symbol] read-only

Returns the actual texture type used when type is  *auto*  (adapting to input).

### bordercolor[4 floats]

Texture border color

### colormode[symbol]

Texture color mode

Possible values:

'auto'

'alpha'

'depth'

'intensity'

'luminance'

'lumalpha'

'rgb'

'argb'

'uyvy'

'srgb'

'srgba'

### compare\_func[symbol]

Shadow mapping comparison function

Possible values:

'lequal'

'gequal'

'less'

'greater'

'equal'

'notequal'

'always'

'never'

### compare\_mode[symbol]

Shadow mapping comparison mode

Possible values:

'none'

'compare\_r\_to\_texture'

### defaultimage[symbol]

Texture default image

Possible values:

'checker'

'black'

'white'

### dim[3 ints]

The texture dimensions when adapt is disabled (default = 256 256 0)

### dstdimend[3 ints]

Matrix destination dimension end position. Used when submitting a subtexture via the  subtex\_matrix  message.

### dstdimstart[3 ints]

Matrix destination dimension start position. Used when submitting a subtexture via the  subtex\_matrix  message.

### erase\_color[4 floats]

Capture erase color

### file[symbol]

Image or file to load

### filter[symbol]

Set the texture filter mode (default = linear). This controls the magnification filter used when a texture is rendered at a size larger than its native resolution. The filter determines how a texture's pixels, or texels, are interpolated to fill the larger screen space.

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

### flip[int]

Flip texture

### level[int]

Mipmap Level

### mipmap[symbol]

Enable mipmap interpolation (default = none). Mipmap interpolation is used for minification filtering (meaning the area of the fragment in texture space is larger than a texel). Using mipmap interpolation requires rectangle mode disabled.

Possible values:

'none'

'nearest'

'linear'

'bilinear'

'trilinear'

### rectangle[int]

Enable texture rectangle mode (default = 1). When enabled the internal GL texture is treated as a rectangular texture, and must be referenced using sampler2DRect and sampled using texture2DRect when sampled from a GLSL shader. When disabled the texture dimensions are upsampled to the nearest power of two value, and must be referenced and sampled using sampler2D and texture2D. Certain texture attributes and GLSL effects require rectangle mode disabled.

### thru[int]

Enable thru mode (default = 1). When the flag is set, texture output is sent whenever input is received.

### slice[int]

3D Texture Slice

### srcdimend[3 ints]

Matrix source dimension end position. Used when submitting a subtexture via the  subtex\_matrix  message.

### srcdimstart[3 ints]

Matrix source dimension start position. Used when submitting a subtexture via the  subtex\_matrix  message.

### type[symbol]

The texture data type (default = auto). When type is  auto  the type is set by the input texture or matrix type. If the texture is the target of a capture operation,  auto  defaults to  char .

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

### usedstdim[int]

Enable matrix destination dimension

### usesrcdim[int]

Enable matrix source dimension

### wrap[3 symbols]

Texture wrap mode

Possible values:

'clamp'

'repeat'

'clampedge'

'clampborder'

'mirroredrepeat'

### OB3D Attributes

### automatic[int]

Automatic rendering flag (default = 1) When the flag is set, rendering occurs when the associated jit.gl.render object receives a bang message

### drawto[symbol]

The named drawing context in which to draw (default = none) A named drawing context is a named instance of a jit.window, jit.pwindow, or jit.matrix object that has an instance of the jit.gl.render object associated with it.

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### layer[int]

Object layer number (default = 0) When in automatic mode, the layer number determines the rendering order (low to high). Objects in the same layer have no guarantee which will be rendered first.

### name[symbol]

The instance name (default = UID)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (drag)

Drag and drop a compatible media file onto the object to load it.

### begin\_capture

Start texture capture

### bind

Bind the texture

### end\_capture

End texture capture

### read

Load image into texture

Arguments:

- filename
  [symbol]

### subtex\_matrix

Submit a matrix as a subtexture. See the
[subtex.3d](openfilelink)
example patch for a demonstration.

### tomatrix

Update the named [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) with the texture

Arguments:

- name
  [symbol]

### unbind

Unbind the texture

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
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.gl.text2d](https://docs.cycling74.com/reference/jit.gl.text2d) |  |
| [jit.gl.text3d](https://docs.cycling74.com/reference/jit.gl.text3d) |  |
| [jit.gl.videoplane](https://docs.cycling74.com/reference/jit.gl.videoplane) | Display video in OpenGL |
| [jit.gl.volume](https://docs.cycling74.com/reference/jit.gl.volume) | Create a volume visualization |
