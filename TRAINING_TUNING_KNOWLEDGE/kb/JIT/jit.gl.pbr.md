---
type: jitter
name: "jit.gl.pbr"
summary: "Generate physically based rendering materials for 3D objects"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.pbr/"
package: "Jitter Tools"
see_also: ["jit.gl.material", "jit.gl.shader", "jit.gl.texture", "jit.gl.cubemap", "jit.gl.mesh", "jit.gl.environment"]
---
# jit.gl.pbr

Generate physically based rendering materials for 3D objects

## Description

Produces shaders for physically based rendering (
[PBR](https://en.wikipedia.org/wiki/Physically_based_rendering)
) that automatically adapt to texture inputs and the number of active lights. Image based lighting (
[IBL](https://en.wikipedia.org/wiki/Image-based_lighting)
) effects are facilitated via the  environment\_texture  input.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### drawto[symbol]

Render context or sub-context name

### gamma\_correction[int]

Enable gamma corrections (default = 1). Enabling will convert the rendered output from linear color space to non-linear sRGB color space. Users should leave enabled unless applying gamma correction at a later stage in the pipeline, e.g. via [jit.gl.pass](https://docs.cycling74.com/reference/jit.gl.pass).

### height\_scale[float]

Height scaling factor when parallax enabled (default = 1)

### metalness[float]

Determines the metallic value in the material calculation (default = 0.). Fully metallic materials leave only reflected or specular light and show no diffuse (albedo) colors. If a  metallic\_texture  map is sent then metalness should be set to 1 for expected output.

### name[symbol]

The instance name (default = UID)

### override[int]

Override jit.gl object color material attributes

### parallax[int]

Enable parallax height mapping (default = 0). Requires a height map image sent to the  heightmap\_texture  input. When enabled both normals and ambient occlusion maps are ignored and tex\_gen mode is disabled.

### parallax\_shadowing[2 floats]

Parallax heightmap shadowing values (default = 0.3 0.1). The first value sets the amount of self-shadowing (when self\_shadow is enabled) and the second value sets the amount of ambient occlusion shadowing.

### reflection[int]

Enable reflections from the environment map (default = 1). When enabled a specular reflections map is generated from the environment map input and the shader will use specular reflection calculations when rendering.

### roughness[float]

Determines the microsurface's roughness in the bidirectional reflective distribution function (
[BRDF](https://en.wikipedia.org/wiki/Bidirectional_reflectance_distribution_function)
) (default = 0.3). Perfectly smooth surfaces have a roughness of 0. If a  roughness\_texture  map is sent then roughness should be set to 1 for expected output.

### self\_shadow[int]

Enables self shadowing when parallax enabled (default = 0).

### shadow\_eps[float] >= 7.0.0

Shadow epsilon (eps) modifies the shape of shadows, and corrects self-shadowing error (default = 0.2). This value is used when the bound object is a shadow-receiver.

### shadow\_hard[float] >= 7.0.0

Adjust shadow hardness (default = 0.7). This value is used when the bound object is a shadow-receiver.

### shadow\_radius[float] >= 7.0.0

Adjust shadow blur radius (default = 0.3). This value is used when the bound object is a shadow-receiver.

### shadow\_soft[float] >= 7.0.0

Adjust shadow softness (default = 0.3). Overwrites shadow\_radius and shadow\_hard attributes. This value is used when the bound object is a shadow-receiver.

### tex\_gen[symbol]

Texture coordinate generation mode (default = "none"). When enabled texture coordinates are generated from world space projections of two planes (biplanar) or three planes (triplanar).

Possible values:

'none'
(
No generation
)
'biplanar'
(
Generate from two planes of projection
)
'triplanar'
(
Generate from three planes of projection
)

### tex\_repeat[2 floats]

Horizontal and vertical multipliers of texture coordinates (default = 1 1). Values greater than 1 cause repetitions when texture mapping. The attribute effects both tex\_gen mode  *none*  and  *triplanar* .

### triplanar\_blend[float]

The triplanar blending amount adjusts the fade between planar projections when tex\_gen mode is  *triplanar*  (default = 0.7).

### OB3D Attributes

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### layer[int]

Object layer number (default = 0) When in automatic mode, the layer number determines the rendering order (low to high). Objects in the same layer have no guarantee which will be rendered first.

### mat\_ambient[4 floats]

The ambient light material property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### mat\_diffuse[4 floats]

The diffuse light material property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### mat\_emission[4 floats]

The material emission property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### mat\_specular[4 floats]

The specular light material property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### shininess[float]

The material shininess value (default = 16.0) The value should be a float in the range 0.-255.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### albedo\_texture

Sets the texture to use for the albedo map. The albedo texture, like a standard diffuse texture, sets the base color for rendering (or the base reflectivity if the textured object is metallic). Unlike a standard diffuse texture, albedo textures in PBR rendering typically have no directional lighting or ambient occlusion.

### ambient\_texture

Sets the texture to use for the ambient occlusion map. Ambient occlusion textures are used to add additional detail to shadowy parts of a surface and are optional.

### clear

Sending the clear message to jit.gl.pbr will clear the image map at the corresponding input.

### emission\_texture

Sets the texture to use for the emission map. The emission map determines the color of light that is emitted by the object surface. In the final rendered image, the emissive lighting (emission\_texture \*  mat\_emission ) color is added to the calculated lighting color.

### environment\_texture

Sets the texture to use for the environment map. The environment map is used for calculating reflections using Image based lighting (
[IBL](https://en.wikipedia.org/wiki/Image-based_lighting)
) effects. These are usually .env files and the same texture is read into a [jit.gl.cubemap](https://docs.cycling74.com/reference/jit.gl.cubemap) rendered via [jit.gl.skybox](https://docs.cycling74.com/reference/jit.gl.skybox), however, any texture can be used.

### getparamdefault

Get parameter default value

Arguments:

- name
  [symbol]

### getparamlist

Get list of parameter names

### getparamtype

Get parameter type

Arguments:

- name
  [symbol]

### getparamval

Get the parameter value

Arguments:

- name
  [symbol]

### heightmap\_texture

Set the texture to use for the heightmap. The heightmap stores the height data for an object. Each pixel stores a height value that represents the height distance perpendicular to the face of the object surface.

### metallic\_texture

Sets the texture to use for the metallic map. Metallic textures determine the reflectivity of the textured object and support grayscale maps, where 0 represents no metalness (no reflective light color is added to the albedo) and 1 full metalness (only reflective light is displayed). The metallic\_texture is multiplied by the metalness attribute to calculate final reflectivity.

### normals\_texture

Sets the texture to use for the normals map. The normals map determines the angles of reflection for the mapped object's surface to be used when calculating lighting.

### param

Set pbr material parameter value

Arguments:

- name
  [symbol]
- values
  [list]

### roughness\_texture

Sets the texture to use for the roughness map. The roughness affects the quality of reflections on a surface. Low roughness results in crisp and clear reflections, while higher roughness diffuses them, resulting in wider and blurrier reflections. Overall roughness is determined by multiplying the roughness roughness attribute by the roughness texture.

### sendinput

Sends a message to an input texture. If the first arg is an int, it specifies the texture index to send the message, otherwise all input textures receive the message.

Arguments:

- index
  [int]
- message
  [symbol]
- values
  [list]

### OB3D Messages

### bang

Equivalent to the  draw  message.

### jit\_gl\_texture

Binds the texture specified by  *texture-name*  to this object. Equivalent to setting the texture attribute to  *texture-name* .

Arguments:

- texture-name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material) | Generate materials for 3D objects |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.cubemap](https://docs.cycling74.com/reference/jit.gl.cubemap) | Manage a cubemap texture target |
| [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) | Generate GL geometry from matrices |
| [jit.gl.environment](https://docs.cycling74.com/reference/jit.gl.environment) |  |
