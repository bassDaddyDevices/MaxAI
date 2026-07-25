---
type: jitter
name: "jit.gl.textureset"
summary: "A set of textures for storage and resequencing"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.textureset/"
package: "Jitter Tools"
see_also: ["jit.matrixset", "jit.gl.texture"]
---
# jit.gl.textureset

A set of textures for storage and resequencing

## Description

The jit.gl.textureset object keeps a set of internal textures which may be written to or read from. This may be useful for data storage and/or texture resequencing. jit.gl.textureset mimics the functionality of [jit.matrixset](https://docs.cycling74.com/reference/jit.matrixset) but outputs textures instead of matrices.

## Arguments

### texturecount[int] optional

The number of textures in the texture set (default = 1)

### drawto[message] optional

The named drawing context in which to draw (default = none). A named drawing context
is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) or [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) object. If no argument is
provided the object will find a context implicitly.

## Attributes

### adapt[int]

Enable [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) adapt to input attribute (default = 1). When enabled the texture output dimensions will match the input dimensions.

### dims[int]

Set the dimensions of output textures (default = 256 256) when the adapt attribute is disabled.

### index[int]

Set which of texture in the set an incoming texture will be written to (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear

Clear all stored textures

### dumptextures

Output a list preceded by  *dumptextures*  and containing all the texture names currently stored in the textureset out the second outlet.

### outputtexture

Output the texture currently stored at index.

Arguments:

- index
  [int]

## See Also

| Name | Description |
| --- | --- |
| [jit.matrixset](https://docs.cycling74.com/reference/jit.matrixset) | A set of matrices for storage/resequencing |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
