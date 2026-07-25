---
type: jitter
name: "jit.tiffany"
summary: "Arbitrary rectangular resampling"
signal: false
url: "https://docs.cycling74.com/reference/jit.tiffany/"
package: "Jitter"
see_also: ["jit.resamp", "jit.rubix"]
---
# jit.tiffany

Arbitrary rectangular resampling

## Description

The [jit.tiffany](https://docs.cycling74.com/reference/jit.tiffany) object performs an arbitrary rectangular resampling of a matrix.

#### Discussion

The xrange and yrange values represent a percentage of the total matrix size, and are used as an upward limit on facet sizes when jit.tiffany assigns them randomly. The [jit.tiffany](https://docs.cycling74.com/reference/jit.tiffany) object will generate random values across the x, y or x and y (respectively) axes, limited by the xrange and yrange attributes unless you explicitly specify values using the  x ,  y , or  xy  messages. Values you do not specify will be randomly generated.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### bgcolor[32 floats]

The background color (default = 0. 0. 0. 0.)

### grid[int]

Grid border flag (default = 1) When the flag is set, a border is drawn for each facet in the grid.

### xrange[float]

The upward limit for width of a facet as a percentage of the total matrix size (default = 0.2)

### xskip[int]

The number of columns to 'skip' when rendering an output matrix (default = 0)

### yrange[float]

The upward limit for height of a facet as a percentage of the total matrix size (default = 0.2)

### yskip[int]

The number of rows to 'skip' when rendering an output matrix (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### x

Generates new values for the widths of all facets. New values can be specified by an optional float or list of floats, which represent percentages of the [jit.tiffany](https://docs.cycling74.com/reference/jit.tiffany) object's display area, or they will be randomly generated within the ranges limited by the xrange attribute.

Arguments:

- facet-width
  [float]
- ...
  [literal]

### xy

Generates new values for the heights and widths of all facets. New values can be specified by an optional float or list of floats, which represent percentages of the [jit.tiffany](https://docs.cycling74.com/reference/jit.tiffany) object's display area, or they will be randomly generated within the ranges limited by the xrange and yrange attributes.

Arguments:

- group
  (optional)
  facet-size
  [float]

  end group
- ...
  [literal]

### y

Generates new values for the height of all facets. New values can be specified by an optional float or list of floats, which represent percentages of the [jit.tiffany](https://docs.cycling74.com/reference/jit.tiffany) object's display area, or they will be randomly generated within the ranges limited by the yrange attribute.

Arguments:

- facet-height
  [float]
- ...
  [literal]

## See Also

| Name | Description |
| --- | --- |
| [jit.resamp](https://docs.cycling74.com/reference/jit.resamp) | Resample spatially |
| [jit.rubix](https://docs.cycling74.com/reference/jit.rubix) | Reorder grid of rectangles |
