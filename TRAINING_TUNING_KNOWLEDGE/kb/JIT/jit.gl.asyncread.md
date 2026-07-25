---
type: jitter
name: "jit.gl.asyncread"
summary: "Read back from an OpenGL framebuffer"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.asyncread/"
package: "Jitter"
see_also: ["jit.gl.node", "jit.gl.pix", "jit.gl.slab", "jit.gl.videoplane", "jit.world"]
---
# jit.gl.asyncread

Read back from an OpenGL framebuffer

## Description

Uses Pixel Buffer Objects (PBOs) to perform asynchronous reads of the OpenGL context at high framerates. The performance gain comes from using two pixel buffer objects in tandem to amortize the cost of the read operation over time without blocking other rendering commands from executing as is typically the case when naive methods are used.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Arguments

None.

## Attributes

### matrixoutput[int]

Output a copy of the frame buffer (OpenGL render context). The output matrix dimensions adapt to the size of the window.

### mode[symbol]

Sets the reading mode (default = interleaved).

Possible values:

'interleaved'
(
Reads an entire frame into each internal buffer, switching buffers every other frame. In interleaved mode, the readback is delayed for one frame.
)
'split'
(
Reads a single frame in two passes and the output is concurrent.
)

### out\_name[symbol] read-only

Returns the name of the internal frame buffer (OpenGL render context).

### texture[symbol]

Sets the name of the texture to readback. If not set, the readback is performed on the the drawto context.

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
| [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) | Create hierarchical rendering groups |
| [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) | Generates pixel processing shaders from a gen patcher |
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.gl.videoplane](https://docs.cycling74.com/reference/jit.gl.videoplane) | Display video in OpenGL |
| [jit.world](https://docs.cycling74.com/reference/jit.world) | The Jitter world context |
