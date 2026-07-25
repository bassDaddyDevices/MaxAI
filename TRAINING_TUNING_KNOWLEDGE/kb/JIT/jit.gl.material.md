---
type: jitter
name: "jit.gl.material"
summary: "Generate materials for 3D objects"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.material/"
package: "Jitter"
see_also: ["jit.gl.pbr", "jit.gl.cubemap", "jit.gl.model", "jit.gl.pass", "jit.gl.shader", "jit.gl.texture", "jit.gl.environment"]
---
# jit.gl.material

Generate materials for 3D objects

## Description

Produces shaders for high quality rendering that automatically adapt to texture inputs and the number of active lights.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### darkness[float]

Material darkness. Only valid when the diffuse shading model is minnaert.

### diffuse\_model[symbol]

Diffuse shading model

Possible values:

'lambert'
(
Lambertian diffuse shading model
)
'oren\_nayer'
(
Oren-Nayer diffuse shading model
)
'toon'
(
Toon diffuse shading model
)
'minnaert'
(
Minnaert diffuse shading model
)

### diffuse\_size[float]

Diffuse toon component size. Only valid when the diffuse shading model is toon.

### diffuse\_smooth[float]

Diffuse toon component smoothness. Only valid when the diffuse shading model is toon.

### drawto[symbol]

Render context name

### fog[symbol]

Fog type

Possible values:

'none'
(
No fog
)
'linear'
(
Linear fog
)
'exp'
(
Exponential fog
)
'exp2'
(
Squared exponential fog
)

### heightmap\_mode[symbol]

Heightmap mode to use when the heightmap input is in use (default = parallax).

Possible values:

'parallax'
(
Parallax heightmap mode
)
Parallax heightmap mode is used in conjunction with normal mapping to enhance the depth effect by displacing texture coordinates. A normals input is required when using parallax mode.

'vtf'
(
Vertex texture fetch mode
)
Vertex texture fetch mode samples the heightmap texture's first channel (red plane) in the vertex program and displaces the vertex position along its normal by that amount. vtf mode requires texture inputs must be non-rectangular (@rectangle 0).

'vtf\_normals'
(
Vertex texture fetch with normals generation mode
)
Vertex texture fetch with normals generation mode is similar to vtf mode but it also regenerates lighting normals for the displaced mesh.

### override[int]

Override jit.gl object color material attributes

### roughness[float]

Material roughness. Only valid when the diffuse shading model is oren\_nayer.

### shadow\_eps[float] >= 7.0.0

Shadow epsilon (eps) modifies the shape of shadows, and corrects self-shadowing error (default = 0.2). This value is used when the bound object is a shadow-receiver.

### shadow\_hard[float] >= 7.0.0

Adjust shadow hardness (default = 0.7). This value is used when the bound object is a shadow-receiver.

### shadow\_radius[float] >= 7.0.0

Adjust shadow blur radius (default = 0.3). This value is used when the bound object is a shadow-receiver.

### shadow\_soft[float] >= 7.0.0

Adjust shadow softness (default = 0.3). Overwrites shadow\_radius and shadow\_hard attributes. This value is used when the bound object is a shadow-receiver.

### specular\_model[symbol]

Specular shading model

Possible values:

'blinn'
(
Blinn specular shading model
)
'phong'
(
Phong specular shading model
)
'toon'
(
Toon specular shading model
)
'ward'
(
Ward specular shading model
)
'cook\_torrance'
(
Cook-Torrance specular shading model
)

### specular\_size[float]

Specular toon component size. Only valid when the specular shading model is toon.

### specular\_smooth[float]

Specular toon component smoothness. Only valid when the specular shading model is toon.

### type[symbol] read-only

Material type (a descriptive name of the material).

### OB3D Attributes

### automatic[int]

Automatic rendering flag (default = 1) When the flag is set, rendering occurs when the associated jit.gl.render object receives a bang message

### aux\_color[4 floats]

The auxiliary color in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### fog\_params[7 floats]

The fog parameters in the form red green blue alpha density start end (default = 0. 0. 0. 0. 0. 0. 0.) The list's color elements should be in the range 0.-1.

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

### matfile[symbol]

The Jitter material file to apply (.jitmtl)

### name[symbol]

The instance name (default = UID)

### shininess[float]

The material shininess value (default = 16.0) The value should be a float in the range 0.-255.

### smooth\_shading[int]

Smooth shading flag (default = 0) When the flag is set, smooth shading is used when rendering.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (drag)

Drag and drop a Jitter material file (.jitmtl)

### ambient\_texture

Set ambient texture

Arguments:

- name
  [symbol]

### clear

Clear the image map at the corresponding input

### (mouse)

Open the materials browser

### diffuse\_texture

Set diffuse texture

Arguments:

- name
  [symbol]

### emission\_texture

Set emission texture

Arguments:

- name
  [symbol]

### environment\_texture

Set the environment texture. The environment texture can be a [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) or a [jit.gl.cubemap](https://docs.cycling74.com/reference/jit.gl.cubemap))

Arguments:

- name
  [symbol]

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

### glossmap\_texture

Set glossmap texture

### heightmap\_texture

Set heightmap texture

### normals\_texture

Set the normals texture. The normals texture will add a bump-mapping effect to the material.

Arguments:

- name
  [symbol]

### open

Open the materials browser

### param

Set material parameter value

Arguments:

- name
  [symbol]
- values
  [list]

### reset

Reset shading model and colors

### reset\_colors

Reset colors to default values

### reset\_shading\_model

Reset shading model to default values

### specular\_texture

Set specular texture

Arguments:

- name
  [symbol]

### wclose

Close material browser

### OB3D Messages

### bang

Equivalent to the  draw  message.

### draw

Draws the object in the named drawing destination. If the matrixoutput attribute is supported and set to 1, the geometry matrices are sent out the object's left outlet.

### drawraw

Equivalent to  draw  with the inherit\_all attribute set to 1.

### drawimmediate

Equivalent to  draw  but ignoring any potential renderer setup

### import\_material

Import a Jitter material file (.jitmtl).

### export\_material

Export material state as a material file (.jitmtl).

### jit\_gl\_texture

Binds the texture specified by  *texture-name*  to this object. Equivalent to setting the texture attribute to  *texture-name* .

Arguments:

- texture-name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.pbr](https://docs.cycling74.com/reference/jit.gl.pbr) |  |
| [jit.gl.cubemap](https://docs.cycling74.com/reference/jit.gl.cubemap) | Manage a cubemap texture target |
| [jit.gl.model](https://docs.cycling74.com/reference/jit.gl.model) | Read and draw various 3D model formats |
| [jit.gl.pass](https://docs.cycling74.com/reference/jit.gl.pass) | Render scene passes with shader processing |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.environment](https://docs.cycling74.com/reference/jit.gl.environment) |  |
