---
type: jitter
name: "jit.rubix"
summary: "Reorder grid of rectangles"
signal: false
url: "https://docs.cycling74.com/reference/jit.rubix/"
package: "Jitter"
see_also: ["jit.glue", "jit.resamp", "jit.scissors", "jit.tiffany"]
---
# jit.rubix

Reorder grid of rectangles

## Description

[jit.rubix](https://docs.cycling74.com/reference/jit.rubix) segments a matrix into a grid of rectangular cells whose cells can be reordered, flipped both horizontally and vertically, frozen, and filled with a single color value derived from a cell in the grid area (monochromatic).

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### cols[int]

The number of columns (default = 1)

### dots[int]

Dot render flag (default = 0) When the flag is set, dot rendering is used.

### prob[float]

The probability that a rectangular section will update with new data (default = 1.)

### probmono[float]

The probability that a rectangular section will be monochromatic (default = 0.)

### rows[int]

The number of rows (default = 1)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### colrot

Rotates the column specified by  *column*  the number of cells specified by  *rotate-cells* .

Arguments:

- column
  [int]
- number-of-cells
  [int]

### freeze

Toggles the freeze flag for the cell specified by  *column row* . If set, the cell's contents will be frozen.

Arguments:

- column
  [int]
- row
  [int]
- 0/1
  [int]

### hflip

Toggles the horizontal flip flag for the cell specified by  *column row* . If set, the cell's contents will be flipped horizontally.

Arguments:

- column
  [int]
- row
  [int]
- 0/1
  [int]

### mono

Toggles the mono flag for the cell specified by  *column row* . If set, the cell's contents will be all the same value as the upper left most value in cell.

Arguments:

- column
  [int]
- row
  [int]
- 0/1
  [int]

### nomono

Toggles the nomono flag for the cell specified by  *column row* . If set, the cell's contents will not be monochromatic even if probmono has a non-zero value.

Arguments:

- column
  [int]
- row
  [int]
- 0/1
  [int]

### reset

Places all cells in their original position and orientation.

### rowrot

Rotates the row specified by  *row*  the number of cells specified by  *number-of-cells* .

Arguments:

- row
  [int]
- number-of-cells
  [int]

### setcell

Maps the input cell specified by  *input-column input-row*  to the output cell specified by  *output-column*  and  *output-row* .

Arguments:

- output-column
  [int]
- output-row
  [int]
- input-column
  [int]
- input-row
  [int]

### vflip

Toggles the vertical flip flag for the cell specified by  *column row* . If set, the cell's contents will be flipped vertically.

Arguments:

- column
  [int]
- row
  [int]
- 0/1
  [int]

## See Also

| Name | Description |
| --- | --- |
| [jit.glue](https://docs.cycling74.com/reference/jit.glue) | Glue many matrices into one |
| [jit.resamp](https://docs.cycling74.com/reference/jit.resamp) | Resample spatially |
| [jit.scissors](https://docs.cycling74.com/reference/jit.scissors) | Cut up a matrix into evenly spaced sub matrices |
| [jit.tiffany](https://docs.cycling74.com/reference/jit.tiffany) | Arbitrary rectangular resampling |
