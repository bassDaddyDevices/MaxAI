---
type: jitter
name: "jit.fill"
summary: "Fill a matrix with a list"
signal: false
url: "https://docs.cycling74.com/reference/jit.fill/"
package: "Jitter"
see_also: ["jit.iter", "jit.matrix", "jit.spill", "zl"]
---
# jit.fill

Fill a matrix with a list

## Description

Fills one plane of a named matrix with the values of a list received in its left inlet. The offset and plane attributes determine the cells to be filled. Upon completion, the [jit.fill](https://docs.cycling74.com/reference/jit.fill) object sends a  bang  message out its left outlet.

## Arguments

None.

## Attributes

### matrix\_name[symbol]

The name of target matrix

### plane[int]

The plane in matrix to be filled (default = 0)

### offset[32 ints]

The dimension offset into matrix to be filled (default = all zero)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Fills the cell at the current offset with an  int  value

### float

Fills the cell at the current offset with a  float  value

### list

Fills the cells beginning at the current offset with list values

## See Also

| Name | Description |
| --- | --- |
| [jit.iter](https://docs.cycling74.com/reference/jit.iter) | Iterate a matrix as lists or values |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.spill](https://docs.cycling74.com/reference/jit.spill) | Unroll a matrix into a list |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
