---
type: jitter
name: "jit.gen.codebox"
summary: "Generate new Jitter MOP objects"
signal: false
url: "https://docs.cycling74.com/reference/jit.gen.codebox/"
package: "Jitter"
see_also: ["jit.gen", "jit.pix", "jit.gl.pix", "jit.pix.codebox", "jit.gl.pix.codebox"]
---
# jit.gen.codebox

Generate new Jitter MOP objects

## Description

Generates new Jitter Matrix Operator (MOP) objects from GenExpr code. The code describes how each cell of a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) will be processed.

## Matrix Operator

matrix inputs:-1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### bgcolor[4 floats]

Sets the color for the object's background frame.

### linenumbers[int]: 1

Show lefthand column containing line numbers for non empty lines.

### linenumberwidth[int32]: 20

Set the width of lefthand line number column in pixels.

### margin[int32]: 4

Set the width of the left and righthand margin in pixels

### style[symbol]:

Style

### textcolor[4 floats]

The default textcolor (typically overridden by syntax coloring)

### gen[symbol]

Gen patcher name

### dirty[int] read-only

Gen patcher needs to recompile

### precision[symbol]

Gen patcher kernel precision

Possible values:

'auto'
(
Auto-choose precision
)
Automatic precision mode will pick a precision based on the type of the input matrices.

'fixed'
(
Fixed point precision
)
Fixed point precision uses fixed point arithmetic, a technique for performing floating point operations with integers.

'float32'
(
Floating point precisions (32-bit)
)
'float64'
(
Floating point precisions (64-bit)
)

### t[symbol]

Gen patcher title

### title[symbol]

Gen patcher title

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Set parameter values in the Gen patcher

### (drag)

Drag and drop a .genjit Gen patcher

### (mouse)

Double-click to open gen patcher window

### open

Open the Gen patcher window

### param

Set parameter values

Arguments:

- name
  [symbol]
- values
  [list]

### wclose

Close gen patcher

### compile

Compile gen patcher

### destroy

Destroy the currently compiled kernel

## See Also

| Name | Description |
| --- | --- |
| [jit.gen](https://docs.cycling74.com/reference/jit.gen) | Generate new Jitter MOP objects |
| [jit.pix](https://docs.cycling74.com/reference/jit.pix) | Generates Jitter mop pixel processing objects from a patcher. |
| [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) | Generates pixel processing shaders from a gen patcher |
| [jit.pix.codebox](https://docs.cycling74.com/reference/jit.pix.codebox) | Generate Jitter MOP pixel processing objects |
| [jit.gl.pix.codebox](https://docs.cycling74.com/reference/jit.gl.pix.codebox) | Generates pixel processing shaders from GenExpr code |
