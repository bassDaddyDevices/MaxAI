---
type: jitter
name: "jit.gen"
summary: "Generate new Jitter MOP objects"
signal: false
url: "https://docs.cycling74.com/reference/jit.gen/"
package: "Jitter"
see_also: ["Gen Common Operators", "GenExpr", "Jitter Operators", "Gen Overview", "jit.pix", "jit.gl.pix", "jit.gl.slab", "jit.op", "jit.expr", "jit.matrix", "gen~"]
---
# jit.gen

Generate new Jitter MOP objects

## Description

Generates new Jitter Matrix Operator (MOP) objects from [Gen](https://docs.cycling74.com/userguide/gen/_gen_overview) patcher and code expressions. The patcher and code describes how each cell of a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) will be processed by the [jit.gen](https://docs.cycling74.com/reference/jit.gen) object.

## Matrix Operator

matrix inputs:-1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### dirty[int] read-only

Gen patcher needs to recompile

### gen[symbol]:

Gen patcher name

### precision[symbol]: auto

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

### compile

Compile gen patcher

### (mouse)

Double-click to open gen patcher window

### destroy

Destroy the currently compiled kernel

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

## See Also

| Name | Description |
| --- | --- |
| [Gen Common Operators](https://docs.cycling74.com/userguide/gen/gen_common_operators) | Gen Common Operators |
| [GenExpr](https://docs.cycling74.com/userguide/gen/gen_genexpr) | GenExpr |
| [Jitter Operators](https://docs.cycling74.com/userguide/gen/gen_jitter_operators) | Jitter Operators |
| [Gen Overview](https://docs.cycling74.com/userguide/gen/gen_overview) | Gen Overview |
| [jit.pix](https://docs.cycling74.com/reference/jit.pix) | Generates Jitter mop pixel processing objects from a patcher. |
| [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) | Generates pixel processing shaders from a gen patcher |
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.expr](https://docs.cycling74.com/reference/jit.expr) | Evaluate an expression to fill a matrix |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [gen~](https://docs.cycling74.com/reference/gen~) | Generate native audio signal processing routines |
