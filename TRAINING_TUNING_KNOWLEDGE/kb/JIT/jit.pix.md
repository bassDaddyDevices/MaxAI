---
type: jitter
name: "jit.pix"
summary: "Generates Jitter mop pixel processing objects from a patcher."
signal: false
url: "https://docs.cycling74.com/reference/jit.pix/"
package: "Jitter"
see_also: ["Gen Common Operators", "GenExpr", "Jitter Operators", "Gen Overview", "jit.gen", "jit.gl.pix", "jit.expr", "jit.matrix", "gen~"]
---
# jit.pix

Generates Jitter mop pixel processing objects from a patcher.

## Description

The [jit.pix](https://docs.cycling74.com/reference/jit.pix) object generates new Jitter mop objects from [Gen](https://docs.cycling74.com/userguide/gen/_gen_overview) patchers specifically for pixel processing. The patcher describes how each cell of a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) should be processed. [jit.pix](https://docs.cycling74.com/reference/jit.pix) is exactly the same as [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) except that all processing happens on the CPU as with standard Jitter mop objets. [jit.pix](https://docs.cycling74.com/reference/jit.pix) always outputs a 4-plane matrix.

## Matrix Operator

matrix inputs:-1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### dirty[int] read-only

Gen patcher dirty flag

### gen[symbol]:

The name of a .genjit gen patcher to load

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

Compile the Gen patcher

### (mouse)

Double-click to open gen patcher window

### destroy

Destroy the currently compiled Gen patcher

### open

Open the Gen patcher window

### param

Set a parameter of the gen patcher.

### wclose

Close the Gen patcher window

## See Also

| Name | Description |
| --- | --- |
| [Gen Common Operators](https://docs.cycling74.com/userguide/gen/gen_common_operators) | Gen Common Operators |
| [GenExpr](https://docs.cycling74.com/userguide/gen/gen_genexpr) | GenExpr |
| [Jitter Operators](https://docs.cycling74.com/userguide/gen/gen_jitter_operators) | Jitter Operators |
| [Gen Overview](https://docs.cycling74.com/userguide/gen/gen_overview) | Gen Overview |
| [jit.gen](https://docs.cycling74.com/reference/jit.gen) | Generate new Jitter MOP objects |
| [jit.gl.pix](https://docs.cycling74.com/reference/jit.gl.pix) | Generates pixel processing shaders from a gen patcher |
| [jit.expr](https://docs.cycling74.com/reference/jit.expr) | Evaluate an expression to fill a matrix |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [gen~](https://docs.cycling74.com/reference/gen~) | Generate native audio signal processing routines |
