---
type: jitter
name: "jit.change"
summary: "Only pass different frames"
signal: false
url: "https://docs.cycling74.com/reference/jit.change/"
package: "Jitter"
see_also: ["jit.op"]
---
# jit.change

Only pass different frames

## Description

Calculates the number of cells in which the current matrix differs from the previously received matrix, and based on this difference either passes the matrix or not.

#### Discussion

In mode 0 (default), the matrix is passed if the difference is  **greater**  than the specified threshold, otherwise not. In mode 1, the matrix is passed if the difference is  **less**  than the specified threshold, otherwise not. This object is particularly useful for reducing the density of dataflow and for motion tracking applications.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### mode[int]

Mode of operation (default = 0 (more differing cells))

0 = pass new frames having MORE differing cells than the number specified by the thresh value

1 = pass new frames having FEWER differing cells than the number specified by the thresh value

Possible values:

0 = 'More-Than-Threshold'

1 = 'Less-Than-Threshold'

### report[int]

Report whether a matrix was passed (default = 0)

0 = do not report whether a matrix was passed

1 = report whether a matrix was passed

With report set to on (1), [jit.change](https://docs.cycling74.com/reference/jit.change) will behave a bit like Max's [==](https://docs.cycling74.com/reference/equals) object. If jit.change determines that the matrix input has not changed (within the parameters set with the mode and thresh attributes), it will send the message  report 1  from its rightmost outlet. If the matrix input has changed, [jit.change](https://docs.cycling74.com/reference/jit.change) will send the message  report 0 .

### thresh[int]

The difference threshold (default = 0)

The threshold specifies the number to cells above or below which a new "changed" frame will be output. This object uses cells not planes; if you have a 4-plane matrix and a threshold value of 3, one matrix cell with a different values from the previously passed frame will NOT trigger a new frame -- If you have a single matrix cell with 4 values (one per plane) which are different from the previously passed frame, it will not trigger a new frame.

With the mode set to 0, a threshold of 0 means that even 1 different matrix cell between 2 frames will cause that frame to be output. Higher values refer explicitly to the matrix cell count required to cause output (5000 means it will take 5000 different matrix cells to cause the matrix to be output). Setting a negative threshold will pass all frames.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
