---
type: jitter
name: "jit.gl.shader"
summary: "Manage a GL shader"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.shader/"
package: "Jitter"
see_also: ["External Text Editor", "JXS File Format", "jit.gl.mesh", "jit.gl.pix", "jit.gl.slab", "jit.gl.texture", "jit.gl.material", "jit.gl.pass"]
---
# jit.gl.shader

Manage a GL shader

## Description

Manages the process of compiling, binding and submitting a shader to OpenGL. A shader consists of both a vertex program and a fragment (aka pixel) program, which can be defined in a xml shader description file (JXS), or submitted individually. Currently the high level language GLSL is supported.

#### Discussion

Shaders can be attached to any OB3D thru the OB3D shader method. If the shader is attached to an OB3D, the OB3D will automatically manage the compiling and binding for the [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) object.

Shader programs can include external source code via the [JXS include tag](https://docs.cycling74.com/userguide/jitter/jxs_file_format#the-include-tag). Additionally, as of Max 9.1 external source code can be inlined directly via the  #include  directive.

```
			#include "Package:/MyPackage/GLSL/myinclude.glsl"

```

The includer supports both [Max path prefixes](https://docs.cycling74.com/userguide/search_path#path-prefixes), and relative paths. The relative path will be relative to the loading shader file if it exists, or the loading Max patch if it is an embedded shader.

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### autowatch[int] >= 9.0.0

Enable watching for changes in the source file (default = 1). When file watching is on, the file is recompiled automatically when it is modified. This allows you to use an external editor for your file.

### embed[int] >= 9.0.0

When enabled, the shader file is saved with its patcher. If the object is loaded in a patch with no file argument, embed is enabled by default. If a file argument is provided, embed will be disabled unless explicitly enabled by the user.

### file[symbol]

The shader description file (JXS) to use (default = none)

### verbose[int]

Enables or disables verbose output to the max console window (default = 0).

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

Dragging a JXS file from the [Max File Browser](https://docs.cycling74.com/userguide/file_browser) or desktop to a jit.gl.shader object, will load the file.

### bind

Manually binds and compiles the shader object.

### compile

Manually compiles the shader object.

### (mouse)

Double click to open the shader editor. If no file is loaded the editor will load a starter shader to use as the basis for a new shader. This file must be saved to disk for use after the editor is closed.

### dispose

Dispose of and unload the current shader.

### dump

Dumps the indicated shader data to the max console window. Valid types are params, source, assembly.

Arguments:

- type
  [symbol]

### getparamdefault

Sends the default data values for the indicated shader parameter out the right-most outlet.

Arguments:

- name
  [symbol]

### getparamdescription

Get a parameter description

### getparamlist

Sends the names of all the shader parameters out the right-most outlet.

### getparamtype

Sends the name of the datatype for the indicated shader parameter out the right-most outlet.

Arguments:

- name
  [symbol]

### getparamval

Sends the data values for the indicated shader parameter out the right-most outlet.

Arguments:

- name
  [symbol]

### link

Manually links the shader object.

### param

Sets the given shader parameter with the given atom values as defined in a JXS (Jitter shader) file.

### program\_param

A geometry shader program parameter.

### read

Loads the given JXS shader file from disk.

Arguments:

- filename
  [symbol]

### unbind

Manually unbinds the shader object.

### OB3D Messages

### bang

Equivalent to the  draw  message.

### draw

Draws the object in the named drawing destination. If the matrixoutput attribute is supported and set to 1, the geometry matrices are sent out the object's left outlet.

### drawraw

Equivalent to  draw  with the inherit\_all attribute set to 1.

### drawimmediate

Equivalent to  draw  but ignoring any potential renderer setup

## See Also

| Name | Description |
| --- | --- |
| [External Text Editor](https://docs.cycling74.com/userguide/external_text_editor) | External Text Editor |
| [JXS File Format](https://docs.cycling74.com/userguide/jitter/jxs_file_format) | JXS File Format |
| [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) | Generate GL geometry from matrices |
| [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) | Generates pixel processing shaders from a gen patcher |
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.material](https://docs.cycling74.com/reference/jit.gl.material) | Generate materials for 3D objects |
| [jit.gl.pass](https://docs.cycling74.com/reference/jit.gl.pass) | Render scene passes with shader processing |
