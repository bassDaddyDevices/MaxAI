---
type: jitter
name: "jit.gl.textmult"
summary: "Multiple 3D Texts"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.textmult/"
package: "Jitter Tools"
see_also: ["jit.gl.multiple", "jit.gl.text"]
---
# jit.gl.textmult

Multiple 3D Texts

## Description

The jit.gl.textmult object is very similar to jit.gl.multiple, but for text.
It allows to treat a list of words as several jit.gl.text objects, which can be controlled through matrices.

## Arguments

### drawto[message] optional

The named drawing context in which to draw (default = none). A named drawing context
is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) or [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) object. If no argument is
provided the object will find a context implicitly.

### inputs\_number[integer] optional

The number of inputs the object will have. The number of inputs determines the number of glparams that can be used.

## Attributes

### align[]

Text alignment mode (default = 0 (left))

### color[]

The color of the mesh (default = 1. 1. 1. 1.)

### enable[]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### position[]

The 3D origin in the form x y z (default = 0. 0. 0.)

### scale[]

The 3D scaling factor in the form x y z (default = 1. 1. 1.)

### texture[]

The name of the texture to be applied (default = none).

### use\_individual\_texcoord[]

Set texture coordinates behavior. If set to 0 each word will map to a single pixel of the texture.
If set to 1 wach word will be covered by the whole texture.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear

Delete all the text objects.

### jit\_matrix

jit\_matrix

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.multiple](https://docs.cycling74.com/reference/jit.gl.multiple) | Create multiple object instances |
| [jit.gl.text](https://docs.cycling74.com/reference/jit.gl.text) | Render text in a GL context |
