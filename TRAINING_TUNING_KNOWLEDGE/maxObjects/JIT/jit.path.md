---
type: jitter
name: "jit.path"
summary: "Evaluates a series of N-dim points as a path"
signal: false
url: "https://docs.cycling74.com/reference/jit.path/"
package: "Jitter"
see_also: ["jit.anim.path", "jit.gl.path"]
---
# jit.path

Evaluates a series of N-dim points as a path

## Description

The [jit.path](https://docs.cycling74.com/reference/jit.path) object takes a series of N-dimensional points retrieves interpolated values based on an input parameter. It is useful for creating user interfaces for parameter morphing.

#### Discussion

The [jit.path](https://docs.cycling74.com/reference/jit.path) object performs this interpolation using either linear or Hermite spline interpolation. The Hermite splines are automatically calculated using the Catmull-Rom method, which creates a single tangent for each point. The interpolated values are retrieved based on an input parameter. There is also the option of outputting a matrix out the second outlet filled with the interpolated values, with the number of planes equal to the dimension of the path.

Points are added to the path either with messages, or by passing in a 1D matrix of point values. A 2D matrix will be output containing the path points in the first row, and the automatically calculated tangents in the second row.

The length of the path can be calculated by treating the first three dimensions as x/y/z position values. The path can optionally be evaluated based on the length.

## Attributes

### autohandles[int]

Enable the calculation of handle values every time the path is edited (default = 1).

### closed[int] read-only

Indicates the path is closed (first and last points are equal).

### dim[int]

Path dimension and number of planes in point and eval matrices (default = 0).

### duration[float] read-only

Path duration in seconds (default = 0.)

### evalmatrixmode[symbol]

Determines how the eval-matrix is evaluated (default = eval). In evalmatrixmode  eval , the evaluated values are spaced using the distance between the points. In evalmatrixmode  evallength , the evaluated values are spaced evenly along the path length.

Possible values:

'eval'
(
Normalized by pointcount
)
'evallength'
(
Normalized by pathlength
)

### evalmatrixname[symbol] read-only

The eval matrix name (default = UID). This is a read-only attribute and is useful in conjunction with the  calc\_evalmatrix  message when accessing [jit.path](https://docs.cycling74.com/reference/jit.path) in javascript.

### evalmatrixsize[int]

The size of the eval-matrix (default = 100).

### grain[int]

Time grain used when animating in milliseconds (default = 50).

### interpmode[symbol]

Path interpolation method (default = linear).

Possible values:

'linear'
(
Linear interpolation
)
'spline'
(
Hermite interpolation
)

### length[float] read-only

Path length (default = 0.)

### loop[int]

Path animation loop method (default = 1).

Possible values:

0 = 'off'

1 = 'on'

2 = 'palindrome'

### outmatrixname[symbol] read-only

The point output matrix name (default = UID). This is a read-only attribute and is useful in conjunction with the  calc\_outmatrix  message when accessing [jit.path](https://docs.cycling74.com/reference/jit.path) in javascript.

### play[int]

Enable path animation (default = 0).

### pointcount[int] read-only

Number of path points (default = 0).

### rate[float]

Animation rate value (default = 1.)

### thru[int]

Output point matrix receiving input matrix (default = 1).

### time[float]

Current path time value (default = 0.)

### timemode[symbol]

Determine how time values added to the path (default = relative). When timemode is set to absolute and usetime is on, inserting a new point to the path will ignore the point index and sort the points according to their time value.

Possible values:

'absolute'
(
Time value is set to argument
)
'relative'
(
Time value is set to argument plus previous time value
)

### usetime[int]

Determine if first path dim is used as time value (default = 0).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output the point matrix

### append

Append point values to the end of the path. If dim is 0, it is set to length of arg list.

Arguments:

- values
  [list]

### calc\_evalmatrix

Calculate the eval matrix by filling with the evaluated values of the path. The matrix is 1D, the size is equal to the evalmatrixsize, and the planes are equal to path dim. Useful in conjunction with the evalmatrixname attribute when accessing [jit.path](https://docs.cycling74.com/reference/jit.path) in javascript.

### calc\_outmatrix

Calculate the point output matrix by filling with the path point and handle values. The matrix is 2D with the size is equal to number of points, and planes equal to path dim. Useful in conjunction with the outmatrixname attribute when accessing [jit.path](https://docs.cycling74.com/reference/jit.path) in javascript.

### calchandles

Calculate the path handles of each point in the path using the Catmull-Rom method. This will overwrite any previously stored handles.

### clear

Remove all points from the path

### closepath

Close the path by adding a point to the end equal to the first point.

### delete

Delete the point at  index

Arguments:

- index
  [int]

### edit

Edit the point at  index

Arguments:

- index
  [int]
- values
  [list]

### edithandle

Edit the point handle at  index

Arguments:

- index
  [int]
- values
  [list]

### eval

Evaluate the path using  parameter , (between 0. and 1.) and output the interpolated values.

Arguments:

- parameter
  [float]

### evallength

Evaluate the path using the  length-parameter  (between 0 and pathlength) and output the interpolated values.

Arguments:

- length-parameter
  [float]

### evaltime

Evaluate the path using  time  (between 0 and duration) and output the interpolated values. The  usetime  attribute must be set to 1, causing the first dim of the path to be treated as time values.

Arguments:

- time
  [float]

### gethandle

Get handle values at  index  and output through dump outlet.

Arguments:

- index
  [int]

### getpoint

Get the point values at  index  and output through dump outlet.  *point* .

Arguments:

- index
  [int]

### insert

Insert a new point at  index . Index value is ignored if usetime is enabled.

Arguments:

- index
  [int]
- values
  [list]

### next

Advance the path animation to the next point.

### outputeval

Output a matrix from the second outlet, filled with the evaluated values of the path. The matrix is 1D, the size is equal to the evalmatrixsize, and the planes are equal to path dim.

### prev

Rewind the path animation to the previous point

### settime

Set time at  index . If necessary, the path will be resorted prior to evaluation.

Arguments:

- index
  [int]

### sorttime

Sort path based on time values

### start

Start path animation

### stop

Stop path animation

## See Also

| Name | Description |
| --- | --- |
| [jit.anim.path](https://docs.cycling74.com/reference/jit.anim.path) | Evaluate a path of 3D transform points |
| [jit.gl.path](https://docs.cycling74.com/reference/jit.gl.path) | Generate and render a path in OpenGL |
