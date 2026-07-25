---
type: jitter
name: "jit.gl.environment"
summary: "Manage environment textures for image-based lighting (IBL)"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.environment/"
package: "Jitter Tools"
see_also: ["jit.gl.pbr", "jit.gl.material", "jit.gl.cubemap", "jit.gl.skybox", "jit.gl.texture", "jit.openexr"]
---
# jit.gl.environment

Manage environment textures for image-based lighting (IBL)

## Description

The [jit.gl.environment](https://docs.cycling74.com/reference/jit.gl.environment) object utilizes internal [jit.gl.cubemap](https://docs.cycling74.com/reference/jit.gl.cubemap) and [jit.openexr](https://docs.cycling74.com/reference/jit.openexr) objects for loading and uploading equirectangular exr environment maps. Once loaded the data is converted as needed and passed to requesting objects. Environments are bound to [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-contexts, and only a single environment can be active in the sub-context at a time.

#### Discussion

Supporting objects include:

[jit.gl.pbr](https://docs.cycling74.com/reference/jit.gl.pbr)

[jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material)

[jit.gl.skybox](https://docs.cycling74.com/reference/jit.gl.skybox)

When used with PBR, irradiance and reflection maps are generated for IBL effects.

The object will process cubemaps based on requests from the supporting objects. The cubemap will either be stored internally, if loaded via  read  or  jit\_matrix  messages, or external as the result of a  jit\_gl\_texture  message.

## Attributes

### adapt[int]

Adapt the internal cubemap to input file dimensions on load (default = 1). Only effective when the internal cubemap is in use. When enabled edge\_length has no effect.

### drawto[symbol]

The named context or sub-context drawing destination. When set, any supporting objects in the same (sub)context will have access to this envirnoment.

### edge\_length[int]

Set length of the cubemap edge (default = 64). Only effective when adapt is disabled and the internal cubemap is in use.

### enable[int]

Enable the environment map for access by supporting objects in the same (sub)context (default = 1). Only a single envirnoment map can be active at a time, see the  activate  message for a convenient way to switch between enabled envirnoment maps.

### file[symbol]

Set an image file to read with the internal cubemap for envirnoment map processing.

### gamma\_correction[int]

Enable gamma correction on the input (default = 1). Only effective when the internal cubemap is in use. Changing this value requires a re-load of the input file to have an effect.

### name[symbol] read-only

Environment map name

### reflect\_edge[int]

Set the length of the generated reflection map edge (default = 128). Higher values improve the resolution and perceived quality of PBR reflections (most notably on flat surfaces), at the expense of longer loading time and greater GPU memory usage. Changing this value causes the reflection map to regenerate, which will stall the renderer.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output the cubemap texture name

### (drag)

Drag and drop image files for envirnoment map processing

### activate

In contexts where multiple enironments are enabled, only a single environment can be active at a time. This message tells the context to make this environment the active one. The enable attribute must be on to make active.

### jit\_gl\_texture

Upload the named texture data to the cubemap for envirnoment map processing

### read

Read in an image file for envirnoment map processing

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.pbr](https://docs.cycling74.com/reference/jit.gl.pbr) |  |
| [jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material) | Generate materials for 3D objects |
| [jit.gl.cubemap](https://docs.cycling74.com/reference/jit.gl.cubemap) | Manage a cubemap texture target |
| [jit.gl.skybox](https://docs.cycling74.com/reference/jit.gl.skybox) | Render a skybox in OpenGL |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.openexr](https://docs.cycling74.com/reference/jit.openexr) | Read or write an OpenEXR image. |
