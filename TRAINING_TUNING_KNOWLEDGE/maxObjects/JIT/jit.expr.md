---
type: jitter
name: "jit.expr"
summary: "Evaluate an expression to fill a matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.expr/"
package: "Jitter"
see_also: ["expr", "jit.charmap", "jit.op", "jit.bfg", "vexpr"]
---
# jit.expr

Evaluate an expression to fill a matrix

## Description

Evaluates expressions to fill an output matrix. The expression can contain any operator available from within [jit.op](https://docs.cycling74.com/reference/jit.op), any functor available from within [jit.bfg](https://docs.cycling74.com/reference/jit.bfg), and many jitter MOPs. A variable number of inputs can be specified with an attribute argument setting the inputs attribute.

#### Discussion

**Note:**  The [jit.op](https://docs.cycling74.com/reference/jit.op) operators  >p  and  <p  are not recognized by the [jit.expr](https://docs.cycling74.com/reference/jit.expr) parser. The expressions  gtp( *x* ,  *y* )  and  ltp( *x* ,  *y* )  may be used in their place.

Expressions should be specified between double quotes, and different expressions can be evaluated per plane if multiple symbols are used for the expr attribute. There are special variables and constants which can be used within expressions listed below. All expressions are evaluated using floating point arithmetic, so they will be more precise, but often slower for computing char data. For optimal speed with char data, it is recommended to use [jit.charmap](https://docs.cycling74.com/reference/jit.charmap) where possible (perhaps filled with an evaluated expression).

## Matrix Operator

matrix inputs:-1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### cache[int]

Toggles the cache intermediary values flag. The default is 1 (on). It may be desirable to turn off when using generator operators such as [jit.noise](https://docs.cycling74.com/reference/jit.noise) in the expression, which should not be cached.

### expr[32 symbols]

The expression to evaluate. If one expression is specified, it is evaluated for all planes. If multiple expressions are specified, they are evaluated on a plane by plane basis.

### inputs[int]

Input count (default = 2). Please note, there is no inlet support for this attribute. Changing the input count via an attrui, message, or the inspector will not work. You can only change the input count by typing the attribute into the object box.

### precision[symbol]

Sets the internal precision. The options are:

float32 (the default)

float64

### verbose[int]

Toggles the printing of expression information to Max Console.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Sets all matrix cells corresponding with input to  int .

### float

Sets all matrix cells corresponding with input to  float .

### list

Sets all matrix cells corresponding with input to list, on a per plane basis.

Arguments:

- input
  [list]

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [jit.charmap](https://docs.cycling74.com/reference/jit.charmap) | Map 256-point input to output |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.bfg](https://docs.cycling74.com/reference/jit.bfg) | Evaluate a procedural basis function graph |
| [vexpr](https://docs.cycling74.com/reference/vexpr) | Evaluate a math expression for a list |
