---
type: jitter
name: "jit.gl.tf"
summary: "Manage transform feedback on geometric meshes"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.tf/"
package: "Jitter Tools"
see_also: ["jit.gl.buffer", "jit.gl.mesh", "jit.gl.shader"]
---
# jit.gl.tf

Manage transform feedback on geometric meshes

## Description

The [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf) object binds to a [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) object, takes input from [jit.gl.buffer](https://docs.cycling74.com/reference/jit.gl.buffer) objects, and uses a shader program defined in a [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) object to apply a transform feedback effect on the mesh geometry.

#### Discussion

Transform feedback is an advanced rendering technique that allows you to capture the state of a shader into a buffer after processing the vertex portion of the transform, then resubmit it to be processed multiple times. This is especially useful for creating GPU based particle systems or for any vertex process that requires multiple stages or prior-state awareness.

To add buffers to the transform feedback process, you need to create both a jit.gl.tf object and one or more jit.gl.buffer objects. The jit.gl.tf object must include an argument for the total number of buffers (inputs) and for each jit.gl.buffer you must specify the buffer type and outname attributes. The type in each jit.gl.buffer must match one of the internal buffers of jit.gl.mesh ( *position* ,  *normal* ,  *color* ,  *vertex\_attr* , etc.) and will override the default buffer to use as directed in the shader. The outname can be any symbol, but is used by the shader to perform the feedback operation in GPU memory, so make sure that it matches the out name in the shader. So if you have a setup like this:
![](''tf-image.png)
then in your shader params declaration you need something like:

```
			<param name="position" type="vec3" state="POSITION" />
<param name="velocity" type="vec3" state="NORMAL" />

```

and in the program body you would declare both the in AND out names like this:

```
			in vec3 position;
in vec3 velocity;
out vec3 Position1;
out vec3 Velocity1;

```

Once your system is setup you must start the transform feedback via the [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf) enable attribute.

The following example patches demonstrate transform feedback:

[basic locomotion](openfilelink)
- Basic locomotion

[curl noise](openfilelink)
- Curl noise

[flock](openfilelink)
- Flocking behavior

[galaxy chickens](openfilelink)
- Vector field simulation

[oil water](openfilelink)
- Oil and water interaction

[particles billboard](openfilelink)
- Billboarded particle

[particles fx](openfilelink)
- Particle effects

[particles simple](openfilelink)
- Simple particle system

[sculpt](openfilelink)
- Sculpting effect

[strange attractors](openfilelink)
- Strange attractors simulation

[vecfield 2tex](openfilelink)
- Vector field with two textures

## Arguments

### numbuffers[int] optional

The number of inlets to create. Each inlet can bind to a [jit.gl.buffer](https://docs.cycling74.com/reference/jit.gl.buffer). The maximum is 8, although the actual maximum number of feedback buffers is hardware dependent, usually 4.

## Attributes

### bufnames[8 symbols]

Currently read only. Displays the list of buffers bound to the [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf) object. Order of buffers reflects bound inlets from left to right.

### enable[int]

Enables transform feedback when set to 1. When disabled, the bound input buffer is passed in its intial state.

It is recommended to disable this before modifying input buffers and reenable it after making changes. Changing input buffer state while enabled may result in unexpected behavior.

### initcount[int]

The initial number of primitives that will be passed to the transform feedback stage. Useful for particle simulations when used in conjunction with geometry shaders to create emitters. If set to 0, the entire buffer is passed on enable.

### name[symbol] read-only

The read only name of the [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf) object. This name is used internally to handle the feedback bindings.

### numbuffers[int]

Set as an argument after the jit.gl.tf object name, reports the number of buffer inlets.

### shader[symbol]

The name of the [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) object for the [jit.gl.tf](https://docs.cycling74.com/reference/jit.gl.tf) object to bind to.

### texture[32 symbols]

The name of the texture or textures bound to the transform feedback shader process (default = none).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### jit\_gl\_buffer

Binds the named [jit.gl.buffer](https://docs.cycling74.com/reference/jit.gl.buffer) object to the inlet. Note that the incoming buffer must have the outname attribute set in order to reference it in the corresponding [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader). The jit.gl.buffer object outlet is pre-formatted with this message prefix, so connecting them automatically binds the incoming buffer.

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.buffer](https://docs.cycling74.com/reference/jit.gl.buffer) |  |
| [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) | Generate GL geometry from matrices |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
