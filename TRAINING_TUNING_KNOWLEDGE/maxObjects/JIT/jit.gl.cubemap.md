---
type: jitter
name: "jit.gl.cubemap"
summary: "Manage a cubemap texture target"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.cubemap/"
package: "Jitter"
see_also: ["jit.gl.texture", "jit.gl.shader", "jit.gl.material", "jit.gl.pbr", "jit.gl.skybox", "jit.gl.environment"]
---
# jit.gl.cubemap

Manage a cubemap texture target

## Description

Maintains a cubemap texture target in an OpenGL context. It has 6 inputs -- one for each face of the cube. Cubemaps are typically used to map an environment for material effects such as reflection and refraction. When sent a texture to any inlet, jit.gl.cubemap adapts to the input type of the texture.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Arguments

None.

## Attributes

### adapt[int]

Enable adapt to input (default = 1). When enabled the texture output dimensions will match the input dimensions.

### autotype[symbol] read-only

Autotype

### bordercolor[4 floats]

Sets the texture bordercolor

### edge\_length[int]

The length in pixels of a cube edge. Each face of the sube will be edge\_length\*edge\_length in dimension.

### file[symbol]

Sets an image file to read that is in panorama format

### filter[symbol]

Filter applied to the texture.

### gamma\_correction[int]

Gamma Correction

### level[int]

Specify mipmap level to write input data (default = 0). When level is non-zero inputs will overwrite the mipmap image at the specified mipmap level, where 1 is the largest resolution/nearest level. If necessary the data will be scaled for the appropriate level. The height and width of each level in the mipmap is a factor of two smaller than the previous level.

### matrix\_name[6 symbols] read-only

The named matrix to access (default = none)

### mipmap[symbol]

Texture mipmap interpolation style (default = none). A mipmap is a pre-calculated sequence of images, each of which is a progressively lower resolution. Mipmap interpolation is used for minification filtering, a technique for increasing efficiency by changing the amount of texture information displayed based on the position of the textured object in a 3D scene. When the area of the fragment in texture space is larger than a texel, a filtered (reduced size) copy of the texture is used instead. Thus objects that are close can use the highest resolution image, then swap for lower resolution copies as the object gets farther away. Setting mipmap to bilinear (better performance) or trilinear (better image quality) will enable automatic mipmap generation whenever the texture is updated.

Possible values:

'none'

'nearest'

'linear'

'bilinear'

'trilinear'

### type[symbol]

Force incoming textures to a particular type. If set to auto, jit.gl.cubemap will adapt to the incoming type, otherwise they will be forced to the type specified.

Possible values:

'auto'

'char'

'float16'

'float32'

### wrap[3 symbols]

Texture wrapping mode.

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

TEXT\_HERE

### bind

Sets binding of the cubemap to texture geometry.

### equirect\_matrix

TEXT\_HERE

### panorama\_matrix

Load a matrix formatted in a cross shape containing every face of the cubemap. The panorama matrix layout is a cross shape holding the 6 faces of the cube. The faces are in a 4x3 grid where the rows are formatted as follows:

1. \*\* py \*\* \*\*
2. nx pz px nz
3. \*\* ny \*\* \*\*

### read

Read in a panorama formatted image file.

### unbind

Unbinds the cubemap after a bind operation.

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
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
| [jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material) | Generate materials for 3D objects |
| [jit.gl.pbr](https://docs.cycling74.com/reference/jit.gl.pbr) |  |
| [jit.gl.skybox](https://docs.cycling74.com/reference/jit.gl.skybox) | Render a skybox in OpenGL |
| [jit.gl.environment](https://docs.cycling74.com/reference/jit.gl.environment) |  |
