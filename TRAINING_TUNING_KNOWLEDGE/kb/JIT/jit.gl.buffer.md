---
type: jitter
name: "jit.gl.buffer"
summary: "A buffer of mesh data on the GPU"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.buffer/"
package: "Jitter Tools"
see_also: ["jit.gl.tf", "jit.gl.mesh", "jit.gl.shader"]
---
# jit.gl.buffer

A buffer of mesh data on the GPU

## Description

The [jit.gl.buffer](https://docs.cycling74.com/reference/jit.gl.buffer) object is a named reference to a buffer of data stored on the GPU. The data is rendered via [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh), and [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf) is used to perform transform feedback effects.

## Attributes

### instance\_div[int]

Divides the buffer by the value and applies the values across the total number of instances (default = 1). For example, could be used to create color groups in a large array of mesh instances. Requires instanced enabled.

### instanced[int]

Enabling allows the buffer texture to pass different values to each drawn instance of a mesh when using [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) to perform hardware instancing (default = 0).

### map[symbol]

Takes the name of an existing [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object. When set the buffer data will be written to the named matrix every frame. The destination matrix will adapt dimensions and type appropriately to contain the contents of the buffer.

To clear the mapping send the map message with no arguments.

### name[symbol] read-only

Used internally to manage texture buffers.

### outname[symbol]

Required for use with [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf), this name is used in the [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) transform feedback shader code to process iterations of data on the buffer on the GPU.

### texbuf[int]

When enabled, the buffer is bound as a 1D texture buffer (default = 0). This allows for texture-style lookups in the shader code using the
[texelFetch](https://registry.khronos.org/OpenGL-Refpages/gl4/html/texelFetch.xhtml)
command. It is important to note that any normal textures will be bound first, and then texture buffers. Texture-buffers are accessed in the shader using the samplerBuffer sampler method.

So if you have two texture-buffers patched into a jit.gl.mesh that look like this:

```
					[ jit.gl.buffer @type vertex_attr0 @texbuf 1 ]
[ jit.gl.buffer @type vertex_attr1 @texbuf 1 ]

```

then in your shader params declaration you need something like:

```
					<param name="tex1" type="int" default="0" />
<param name="tex2" type="int" default="1" />
<param name="texbuf1" type="int" default="2" />
<param name="texbuf2" type="int" default="3" />

```

and in the program body:

```
					uniform sampler2DRect tex1;
uniform sampler2DRect tex2;
uniform samplerBuffer texbuf1;
uniform samplerBuffer texbuf2;

```

This allows you access to the sampled texture for use in the rest of the shader using texelFetch:

```
					vec3 bufval = texelFetch(texbuf1, index).xyz;

```

where index is an integer between 0 and the buffer width minus one.

For an example patch, check out
[tb.pl.disco.duck](openfilelink)

### type[symbol]

Sets the type of the buffer to bind to as a texture (position, normal, color, vertex\_attr0, etc). When passed to a [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) (or through a [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf), then to a jit.gl.mesh), it will bind the texture to the mesh object's corresponding internal buffer.

Possible values:

'position'

'texcoord'

'normal'

'tangent'

'bitangent'

'vertex\_attr'

'vertex\_attr0'

'vertex\_attr1'

'vertex\_attr2'

'vertex\_attr3'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Outputs the currently stored buffer out the left outlet as the message  jit\_gl\_buffer  followed by the buffer name.

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf) |  |
| [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) | Generate GL geometry from matrices |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
