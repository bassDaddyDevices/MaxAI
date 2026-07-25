---
type: jitter
name: "jit.gl.textureinfo"
summary: "Report texture planecount, type, dimensions"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.textureinfo/"
package: "Jitter Tools"
see_also: ["jit.gl.texture", "jit.fpsgui", "jit.matrixinfo"]
---
# jit.gl.textureinfo

Report texture planecount, type, dimensions

## Description

[jit.gl.textureinfo](https://docs.cycling74.com/reference/jit.gl.textureinfo) reports a given textures's planecount, type, and dim attributes in the form

 planecount   *number-of-planes*
 type   *data-type*
 dim   *dimension0* ...  *dimensionN* .

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### jit\_gl\_texture

A named texture to report info on.

Arguments:

- texture-name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.fpsgui](https://docs.cycling74.com/reference/jit.fpsgui) | FPS meter |
| [jit.matrixinfo](https://docs.cycling74.com/reference/jit.matrixinfo) | Report matrix planecount, type, dimensions |
