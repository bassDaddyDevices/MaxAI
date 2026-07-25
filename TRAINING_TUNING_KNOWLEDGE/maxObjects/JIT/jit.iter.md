---
type: jitter
name: "jit.iter"
summary: "Iterate a matrix as lists or values"
signal: false
url: "https://docs.cycling74.com/reference/jit.iter/"
package: "Jitter"
see_also: ["iter", "jit.fill", "jit.matrix", "jit.spill"]
---
# jit.iter

Iterate a matrix as lists or values

## Description

Iterates through all the cells of a matrix, sending a message or list for each cell out the object's left outlet. Output is one item per plane of data. A list of ints is sent out the middle outlet that containing the current cell coordinates.

## Arguments

None.

## Attributes

### mode[int]

Traversal mode (default = 0 (horizontal))

0 = horizontal traversal

1 = vertical traversal

Possible values:

0 = 'Horizontal Traversal'

1 = 'Vertical Traversal'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [iter](https://docs.cycling74.com/reference/iter) | Break a list into individual messages |
| [jit.fill](https://docs.cycling74.com/reference/jit.fill) | Fill a matrix with a list |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.spill](https://docs.cycling74.com/reference/jit.spill) | Unroll a matrix into a list |
