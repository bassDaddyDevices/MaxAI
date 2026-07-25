---
type: jitter
name: "jit.gl.pass"
summary: "Render scene passes with shader processing"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.pass/"
package: "Jitter"
see_also: ["Render Passes", "External Text Editor", "jit.gl.node", "jit.gl.slab", "jit.gl.pix", "jit.gl.shader", "jit.gl.camera", "jit.gl.light"]
---
# jit.gl.pass

Render scene passes with shader processing

## Description

The [jit.gl.pass](https://docs.cycling74.com/reference/jit.gl.pass) object encapsulates processing of one or more sub-passes. A sub-pass consists of a single frame of gl, and post-processing shader, and is defined in a xml pass description file (JXP). Complex scene-processing hierarchies can be obtained by chaining multiple [jit.gl.pass](https://docs.cycling74.com/reference/jit.gl.pass) objects.

#### Discussion

For a detailed discussion of the JXP file format see the [Render Passes](https://docs.cycling74.com/userguide/jitter/render_passes) user guide.

For an example of creating custom pass effects, see the
[pass.custom.effects](openfilelink)
example patch.

Read in JXP files by their pass name using @fxname. This is not the same as the filename, and is determined by the pass name in the JXP file. Below are included <pass> effects linking to corresponding examples :

[atmospheric](openfilelink)
- Atmospheric scattering and ground fog

[bloom-hq](openfilelink)
- Produce atmospheric light extending along the borders of bright areas

[fxaa](openfilelink)
- Fast approximate anti aliasing

[gamma](openfilelink)
- Tone mapping, gamma correction and dithering noise pass

[motionblur-hq](openfilelink)
- Blur effect based on pixel velocity

[motionglitch](openfilelink)
- Data mosh type glitch effects

[smear](openfilelink)
- Pixel smearing effect

[ssao](openfilelink)
- Screen-space ambient occlusion

[ssr](openfilelink)
- Screen-space reflection approximation

[tonemap](openfilelink)
- Modify tonal value of pixels

[tssao-gi](openfilelink)
- Temporal screen-space ambient occlusion with global illumination

[tssao-gi-ssr](openfilelink)
- Temporal screen-space ambient occlusion with global illumination and screen-space reflections

[dof-hq](openfilelink)
- High quality depth of field with bokeh parameters and auto-focus

[taa](openfilelink)
- Temporal anti aliasing

[gi](openfilelink)
- Global illumination via ReSTIR

[vignette](openfilelink)
- Cinematic vignette

[grain](openfilelink)
- Film grain

## Attributes

### amount[4 floats]

This attribute is only used by the default pass effect to control the blending amount.

### autowatch[int] >= 9.0.0

Enable watching for changes in the source file (default = 1). When file watching is on, the file is recompiled automatically when it is modified. This allows you to use an external editor for your file.

### child[symbol]

The child jit.gl.pass name (default = none). Set automatically by patchcord connection, and manually by providing a valid jit.gl.pass object name.

### embed[int] >= 9.0.0

When enabled, the shader file is saved with its patcher. If the object is loaded in a patch with no file argument, embed is enabled by default. If a file argument is provided, embed will be disabled unless explicitly enabled by the user.

### file[symbol]

JXP file name (default = none)

### fxname[symbol]

Load a named pass effect. Several built-in pass effects are available to load from this menu, listed below. Custom pass effects from Packages can also be loaded. The  *jxp*  files for these effects must be located in a  *media/jitter/passes*  folder inside the package folder. Toggling fxname will override the file attribute.

Possible values:

'atmospheric'

'bloom'

'bloom-tonemap'

'bloom-hq'

'depth'

'depth2pass'

'dof'

'dof-hq'

'fxaa'

'gamma'

'grain'

'motionblur-hq'

'motionblur'

'motion-gauss-blur'

'motionglitch'

'motionglitch-ext'

'gi'

'smear'

'ssao'

'ssao-gl2'

'ssr'

'taa'

'tonemap'

'tssao-gi-ssr'

'tssao-gi'

'vignette'

### out\_name[symbol] read-only

Output texture name (default = UID). If there is a name collison then the UID will be appended to the name that is in conflict.

### quality[symbol]

Internal texture quality (deault = med). Changeing quality changes the type attribute of internal [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) objects.

Possible values:

'med'
(
type = float16
)
'hi'
(
type = float32
)

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

### texture[8 symbols]

The name of the texture to be applied (default = none). If multiple textures are specified, uses multi-texturing.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Get and set dynamic attributes generated from sub-pass shader parameters.

### (drag)

Drag and drop a .jxp file

### (mouse)

Open the JXP file

### param

Sets the given shader parameter with the given atom values as defined in a JXS (Jitter shader) file.

### read

Load a JXP file from disk

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
| [Render Passes](https://docs.cycling74.com/userguide/external_text_editor) | Render Passes |
| [External Text Editor](https://docs.cycling74.com/userguide/jitter/render_passes) | External Text Editor |
| [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) | Create hierarchical rendering groups |
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) | Generates pixel processing shaders from a gen patcher |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
| [jit.gl.camera](https://docs.cycling74.com/reference/jit.gl.camera) | Set a rendering view |
| [jit.gl.light](https://docs.cycling74.com/reference/jit.gl.light) | Place a light source in a 3D scene |
