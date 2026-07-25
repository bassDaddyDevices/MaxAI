---
type: jitter
name: "jit.anim.path"
summary: "Evaluate a path of 3D transform points"
signal: false
url: "https://docs.cycling74.com/reference/jit.anim.path/"
package: "Jitter"
see_also: ["jit.anim.drive", "jit.anim.path", "jit.path", "jit.gl.path"]
---
# jit.anim.path

Evaluate a path of 3D transform points

## Description

Takes a series of 3D transform points and interpolates between them. See the [jit.path](https://docs.cycling74.com/reference/jit.path) object for more information on this interpolation. Each point stores 11 values: a time value, 3 position values, 3 scale values and 4 quaternion rotation values.

## Attributes

### autohandles[int]

Enable the calculation of handle values every time the path is edited (default = 1).

### automatic[int]

Enable automatic animation notifications from the attached render context (default = 1).

### closed[int] read-only

Indicates the path is closed (first and last points are equal).

### drawpath[symbol]

Name of a [jit.gl.path](https://docs.cycling74.com/reference/jit.gl.path) object used to draw this path.

### drawto[symbol]

Assign to the named drawing context, allowing for updates to be received automatically.

### duration[float] read-only

Path duration in seconds (default = 0.)

### endreport[int]

Enable animation end reporting (default = 0). The symbol  endnotify  is sent out the dumpout when the animation ends. Only valid if loop = 0.

### evalquat[int]

Output evaluated quaternion values (default = 0). Adding orientation values to the path enables.

### evalreport[int]

Enable/disable the evaluation parameter reporting out the dumpout (default = 0). The report is a 3 element list where each element represents the current evaluation parameters as 0 to 1, 0 to duration, and 0 to length, in that order.

### evalscale[int]

Output evaluated scale values (default = 0). Adding scale values to the path enables.

### fixed\_delta[float] >= 9.0.0

Locks the delta time value used when animating, in seconds (default = 0). When non-zero, updates are calculated using this value, rather than the actual time between frames. Useful for non realtime frame capture. If non-zero will override that of the bound [jit.world](https://docs.cycling74.com/reference/jit.world) fixed\_delta value.

### interpmode[symbol]

Path interpolation method (default = linear).

Possible values:

'linear'
(
Linear interpolation
)
Linear interpolation

'spline'
(
Hermite interpolation
)
Linear interpolation

### length[float] read-only

Path length (default = 0.)

### loop[int]

Path animation loop method (default = 1).

Possible values:

0 = 'off'

1 = 'on'

2 = 'palindrome'

### loopreport[int]

Enable animation loop reporting (default = 0). The symbol  loopnotify  is sent out the dumpout when the animation loops. Only valid if loop is not 0.

### name[symbol]

Specifies the name of the instance (default = UID).

### play[int]

Enable path animation (default = 0).

### pointcount[int] read-only

Number of path points (default = 0).

### position[3 floats] read-only

Current path position (default = 0. 0. 0.).

### quat[4 floats] read-only

Current path quaternion orientation (default = 0. 0. 0. 1.)

### rate[float]

Animation rate value (default = 1.)

### scale[3 floats] read-only

Current path scale value (default = 1. 1. 1.).

### shortestrot[int]

Use the shortest path between rotations (default = 1).

### targetname[symbol]

The name of the target object that should be either an OpenGL object, or a [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) object.

### time[float]

Current path time value (default = 0.)

### timemode[symbol]

Determine how time values added to the path (default = relative).

Possible values:

'absolute'
(
Time value is set to argument
)
'relative'
(
Time value is set to argument plus previous time value
)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Cause the animation to update, if currently active, and the transform messages to output.

### addquat

Add quaternion orientation values to the last point in the path.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]
- w
  [float]

### addrotate

Add angle-axis orientation values to the last point in the path. The values are converted to a quaternion before adding.

Arguments:

- angle
  [float]
- x
  [float]
- y
  [float]
- z
  [float]

### addrotatexyz

Add euler orientation values to the last point in the path. The values are converted to a quaternion before adding.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### addscale

Add scale values to the last point in the path.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### append

Append point values to the end of the path. If necessary, the path will be resorted based on the  time  value prior to evaluation.

Arguments:

- time
  [float]
- x
  [float]
- y
  [float]
- z
  [float]
- scale-x
  [float]
- scale-y
  [float]
- scale-z
  [float]
- quat-x
  [float]
- quat-y
  [float]
- quat-z
  [float]
- quat-w
  [float]

### calchandles

Calculate the path handles of each point in the path using the Catmull-Rom method. This will overwrite any previously stored handles.

### clear

Remove all points from the path

### closepath

Close the path by adding a point to the end equal to the first point.

### delete

Delete the point at  index .

Arguments:

- index
  [int]

### edit

Edit the point at  index

Arguments:

- index
  [int]
- time
  [float]
- x
  [float]
- y
  [float]
- z
  [float]
- scale-x
  [float]
- scale-y
  [float]
- scale-z
  [float]
- quat-x
  [float]
- quat-y
  [float]
- quat-z
  [float]
- quat-w
  [float]

### edithandle

Edit the point handle at  index .

Arguments:

- index
  [int]
- time
  [float]
- x
  [float]
- y
  [float]
- z
  [float]
- scale-x
  [float]
- scale-y
  [float]
- scale-z
  [float]
- quat-x
  [float]
- quat-y
  [float]
- quat-z
  [float]
- quat-w
  [float]

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

Evaluate the path using  time  (between 0 and duration) and output the interpolated values.

Arguments:

- time
  [float]

### gethandle

Get handle values at  index  and output through the right (dumpout) outlet.

Arguments:

- index
  [int]

### getpoint

Get point values at  index  and output through the right (dumpout) outlet.

Arguments:

- index
  [int]

### insert

Insert a new point at  index

Arguments:

- index
  [int]
- time
  [float]
- x
  [float]
- y
  [float]
- z
  [float]
- scale-x
  [float]
- scale-y
  [float]
- scale-z
  [float]
- quat-x
  [float]
- quat-y
  [float]
- quat-z
  [float]
- quat-w
  [float]

### next

Advance the path animation to the next point.

### prev

Rewind the path animation to the previous point

### setquat

Set quaternion orientation values at  index

Arguments:

- index
  [int]
- x
  [float]
- y
  [float]
- z
  [float]
- w
  [float]

### setrotate

Set angle-axis orientation orientation values at  index

Arguments:

- index
  [int]
- angle
  [float]
- x
  [float]
- y
  [float]
- z
  [float]

### setrotatexyz

Set euler orientation orientation values at  index

Arguments:

- index
  [int]
- x
  [float]
- y
  [float]
- z
  [float]

### setscale

Set scale values at  index

Arguments:

- index
  [int]
- x
  [float]
- y
  [float]
- z
  [float]

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
| [jit.anim.drive](https://docs.cycling74.com/reference/jit.anim.drive) | Animate a 3D transform |
| [jit.anim.path](https://docs.cycling74.com/reference/jit.anim.path) | Evaluate a path of 3D transform points |
| [jit.path](https://docs.cycling74.com/reference/jit.path) | Evaluates a series of N-dim points as a path |
| [jit.gl.path](https://docs.cycling74.com/reference/jit.gl.path) | Generate and render a path in OpenGL |
