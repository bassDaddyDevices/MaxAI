---
type: mc
name: "mc.function"
summary: "Breakpoint function editor"
signal: false
url: "https://docs.cycling74.com/reference/mc.function/"
package: "Max"
see_also: ["line"]
---
# mc.function

Breakpoint function editor

## Description

Draw or store a set of x, y points as floating-point numbers. The output the entire function is useful as an input for [line~](https://docs.cycling74.com/reference/line~). You can also get an interpolated y value for any x value.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### autosustain[int]: 0

Sets the sustain mode for [function](https://docs.cycling74.com/reference/function). There are three possible values: 'Off', 'Next-to-Last Point', and 'Any Single Point'. The default is 0 (off).

Possible values:

0 = 'Off'

Turn off sustain mode.

1 = 'Next-to-Last Point'

The next-to-last point in the function is automatically a sustain point. This setting requires that there are more than two points in the current function.

2 = 'Any Single Point'

Allows you to click on any point in the function to make it a sustain point. If autosustain is on and there is already a different point that is a sustain point, that other point will be turned off.

### bgcolor[4 floats]

Sets the display color for the background in RGBA format.

### classic\_curve[int]

When enabled, curves are drawn using a legacy formula; when disabled, curves are drawn in manner that more closely resembles the output of the [curve~](https://docs.cycling74.com/reference/curve~) object typically controlled by [function](https://docs.cycling74.com/reference/function).

### clickadd[int]: 1

Toggles a user's ability to create new breakpoints by clicking and dragging with the mouse. This feature is enabled by default.

### clickmove[int]: 1

Toggles a user's ability to move existing breakpoints by dragging them with the mouse. This feature is enabled by default.

### clicksustain[int]: 2

The clicksustain attribute controls how you can specify sustain points with your mouse. There are three possible values: off, cmd/ctrl click, and double-click. The default value is 2 (double-click).

Possible values:

0 = 'Off'

The ability to specify sustain points with your mouse is turned off.

1 = 'Cmd/Ctrl Click'

Specify sustain points by pressing Cmd/Ctrl and clicking with your mouse.

2 = 'Double-Click'

Specify sustain points by double-clicking with your mouse.

### constrainpointchanges[int]: 0

When enabled, constrainpointchanges limits the X value of a breakpoint changed via a  list  message so that it remains between the X values of the previous and next breakpoints. For example, if constrainpointchanges is enabled and point 2 is at 300 and point 4 is at 800, point 3 will be constrained between 300 and 799.9 when changed via a three element list such as  3 500 1 .

### cursor[float]: -1.

Sets the position of the cursor along the [function](https://docs.cycling74.com/reference/function) object's X axis.

### domain[float]: 1000.

Sets the maximum displayed X value.

### grid[int]: 0

Sets the grid displayed behind the function

Possible values:

0 = 'Off'
(
No grid displayed
)
1 = 'Horizontal'
(
Horizontal grid displayed
)
2 = 'Vertical'
(
Vertical grid displayed
)
3 = 'Horizontal and Vertical'
(
Horizontal and vertical grid displayed
)

### gridcolor[4 floats]

Sets the grid color in RGBA format

### gridstep\_x[float]: 100.

Sets the horizontal grid spacing

### gridstep\_y[float]: 0.1

Sets the vertical spacing

### legend[int]: 1

Toggles the numerical display when a point is highlighted or updated

### linecolor[4 floats]

Sets the display color for line segments in RGBA format

### linethickness[float]: 1.

Sets the width of lines drawn between points

### mode[int]: 0

Sets whether the function includes curve information. This changes both the function display and output format. When curve information is not included, the format of the second outlet is compatible with the [line](https://docs.cycling74.com/reference/line) and [line~](https://docs.cycling74.com/reference/line~) objects. When curve information is included, the output is compatible with the [curve~](https://docs.cycling74.com/reference/curve~) object.

Possible values:

0 = 'Linear'
(
Linear mode
)
No curve information is included or displayed

1 = 'Curve'
(
Curve mode
)
Curve information is included; the curvature of line segments can be changed with the  setcurve  message or by option- (alt-) dragging on a segment.

### mousemode[int]: 0

The mousemode attribute determines the behavior when moving a point by dragging.

Possible values:

0 = 'Free'

1 = 'Shift'

### mousereport[int]: 0

When enabled, the third outlet sends a three item list containing the current cursor position as well as the index of the current point under cursor (or -1 if the cursor is not over a point). Output occurs when the cursor is over the object in a locked patcher.

### outputmode[int]: 0

When enabled, the list sent out the second outlet includes the X coordinate of the first point of the function. By default outputmode is disabled for compatibility with the [line~](https://docs.cycling74.com/reference/line~) and [curve~](https://docs.cycling74.com/reference/curve~) objects that expect a list that starts with the initial Y (target) value.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping). (default = 1).

### pointalign[float]: 0.

The pointalign attribute overrides the pointsize attribute for the purpose of controlling the location of points relative to the function's bounding box. Values range from 0 (no override, positioning is based on the pointsize) to 20 (where the function's points will be centered within a circle with a radius of 20 pixels).

### pointsize[float]: 2.5

Sets the radius size for all points in [function](https://docs.cycling74.com/reference/function). This value influences the position of all points in addition to their size, so that large points are not cut off. The pointsize ranges from 1 to 20.

### range[2 floats]: 0. 1.

Sets the minimum and maximum display ranges for Y values.

### shadowalpha[float]: 0.

The shadowalpha attribute sets the opacity of the gradient shadow underneath the line representing the function. At 0 (the default), the gradient is invisible; at 1 it is completely opaque. shadowalpha must be non-zero for the other shadow drawing attributes to have an effect on the object's appearance.

### shadowblend[float]: 0.1

Sets the amount of black blended with the object's pointcolor to create the shadow. Values of shadowblend closer to 0 will be darker; values closer to 1 will be lighter.

### shadowproportion[float]: 0.

Sets the vertical mid point within the shadow gradient. 0 is at the bottom, 1 is at the top.

### shadowreflectionpoint[float]: 0.

When shadowsigned is enabled, shadowreflectionpoint determines the point where the shadow is divided and reflects symmetrcially in the vertical dimension. 0 is at the bottom (with no reflection); 1 is at the top.

### shadowsigned[int]: 0

When enabled, the shadow can reflect around a point (shadowreflectionpoint) to create a mirrored effect appropriate when the range of [function](https://docs.cycling74.com/reference/function) includes negative values.

### snap2grid[int]: 0

Determines whether points are constrained to grid values when they are added or moved. The behavior of snap2grid is independent of the grid visibility set with the  grid  attribute.

Possible values:

0 = 'Off'
(
Off
)
No grid snapping will occur

1 = 'Horizontal'
(
Horizontal Only
)
Grid snapping will occur only in the horizontal dimension

2 = 'Vertical'
(
Vertical Only
)
Grid snapping will occur only in the vertical dimension

3 = 'Horizontal and Vertical'
(
Both Horizontal and Vertical
)
Grid snapping will occur in both the horizontal and vertical dimensions

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the display color for text in RGBA format.

### zoom\_x[2 floats]: 0. 1.

Sets the horizontal zoom for the [function](https://docs.cycling74.com/reference/function) object's display. Zoom values are set using a pair of floating point values in the range 0.0 - 1.0.

### zoom\_y[2 floats]: 0. 1.

Sets the vertical zoom for the [function](https://docs.cycling74.com/reference/function) object's display. Zoom values are set using a pair of floating point values in the range 0.0 - 1.0.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Triggers a list output of the current breakpoints from the middle-left outlet formatted for use by the [line~](https://docs.cycling74.com/reference/line~) object. As an example, if the [function](https://docs.cycling74.com/reference/function) contained breakpoints at X = 1, Y = 0; X = 10, Y = 1; and X = 20, Y = 0, the output would be  0, 1 9 0 10 . If the optional output mode is enabled, the output would be  0 0 1 9 0 10 .

If there are any sustain points in the function,  bang  outputs a list of all the points up to the sustain point. Additional points in the function, up to a subsequent sustain point or the end point, whichever applies, can be output by sending the next message. See the description of the  next  and  sustain  messages for additional information.

### int

The value is taken as an X value and outputs a corresponding Y value out the left outlet. The Y value is produced by linear floating-point interpolation of the function. If the X value lies outside the first or last breakpoint, the Y value is  0 .

Arguments:

- x-value
  [int]

### float

The value is taken as an X value and outputs a corresponding Y value out the left outlet. The Y value is produced by linear floating-point interpolation of the function. If the X value lies outside the first or last breakpoint, the Y value is  0 .

Arguments:

- input
  [float]

### list

If the list contains two values, a new point is added to the function. The first value is X, the second is Y.

If the list contains three values, an existing point in the [function](https://docs.cycling74.com/reference/function) is modified. The first value is the index (starting at 0) of a breakpoint to modify, the second is the new X value for the breakpoint, and the third is the new Y value for the breakpoint. (If the index number in the list refers to a breakpoint that does not exist, the message is ignored.)

If the list contains four values and the mode attribute is set to 1 (curve), the third value is the curve amount, with values greater than 0 resulting an exponential curve, and values less than 0 resulting in a logarithmic curve.

Arguments:

- x-value
  [number]
- y-value
  [number]
- curve
  [number]

### clear

The word  clear  by itself erases all existing breakpoints. The word  clear  can also be followed by one or more breakpoint indices (starting at 0) to clear selected breakpoints.

Arguments:

- indices
  [list]

### clearfix

The word  clearfix  clears all fix states (sets them to 0).

### clearsustain

The word  clearsustain  clears all sustain states (sets them to 0).

### color >= 7.0.0

The  color  message sets a color with an index from 0 to 15 for breakpoints and lines against a light background. It is no longer supported.

Arguments:

- color index
  [int]

### copy

The  copy  message copies all of the current function points to the clipboard so that they can be pasted into another [function](https://docs.cycling74.com/reference/function) object.

### dump

Outputs a series of multiple element lists describing each break point out the [function](https://docs.cycling74.com/reference/function) object's third outlet. Each list contains the breakpoints X and Y values, followed by the curve value, if present. An optional symbol argument can be used to specify a [receive](https://docs.cycling74.com/reference/receive) objects as a destination.

Arguments:

- receive-name
  [symbol]

### fix

The word  fix , followed by a number specifying the index of a point and 0 or 1, prevents the user from changing the point if the second number is 1, and allows the user to change the point if the second number is 0. By default, points are moveable unless clickmove 0 has been sent to disable moving of all points.

Arguments:

- index
  [number]
- flag
  [int]

### getfix

The word  getfix . with no arguments, will cause the [function](https://docs.cycling74.com/reference/function) object to send a list all fix points out the object's third outlet. If an index is provided as an argument, the fix state for that point will be output.

Arguments:

- point-indices
  [list]

### getsustain

The word  getsustain . with no arguments, will cause the [function](https://docs.cycling74.com/reference/function) object to send a list all sustain points out the object's third outlet. If an index is provided as an argument, the sustain state for that point will be output.

Arguments:

- point-indices
  [list]

### lineout

The word  lineout  followed by either 0, 1, or no argument is equivalent to the  bang  message.

### listdump

Outputs a single list which contains all X and Y values for each of the breakpoints out the [function](https://docs.cycling74.com/reference/function) object's third outlet. An optional symbol argument can be used to specify a [receive](https://docs.cycling74.com/reference/receive) object as a destination.

Arguments:

- receive-name
  [symbol]

### (mouse)

You can use the mouse to add or edit breakpoints.

- Clicking on empty space in the function adds a breakpoint. You can begin to move it immediately by dragging. Adding breakpoints can be disabled with the clickadd attribute.
- Dragging on an existing breakpoint moves the breakpoint. Modifying breakpoints can be disabled with the clickmove attribute.
- Shift-clicking on a breakpoint deletes it.
- Command- (Mac OS) or control-clicking (Windows) on a breakpoint toggles the sustain property of the point. Sustain point click behavior can be set with the clicksustain attribute.
- If the mode attribute has been set to Curve, option- (alt- on Windows) dragging on a line segment modifies the curvature of that segment.

### next

The  next  message sends a list out the second outlet that continues from the sustain point where the output of the last bang or next message ended. For instance, if the [function](https://docs.cycling74.com/reference/function) contained breakpoints at (a) X = 1, Y = 0; (b) X = 10, Y = 1; and (c) X = 20, Y = 0, and point b was a sustain point, a  bang  message would output  0, 1 9  and a subsequent  next  message would output  1, 0 10.  After a  next  message reaches the end point, a subsequent  next  message is equivalent to a  bang  message.  next  is also equivalent to a  bang  when no  bang  has been sent that reached a sustain point, or when a [function](https://docs.cycling74.com/reference/function) contains no sustain points.

### nth

The word  nth , followed by a number, uses the number as the index (starting at 0) of a breakpoint, and outputs the Y value of the breakpoint out the left outlet. If no breakpoint with the specified index exists, no output occurs.

Arguments:

- index
  [int]

### paste

The  paste  message pastes all of the points of a previously copied function into a [function](https://docs.cycling74.com/reference/function) object.

### quantize\_x

This message will cause all of the points to automatically snap to the horizontal grid as defined by the  gridstep\_x  attribute.

### quantize\_y

This message will cause all of the points to automatically snap to the vertical grid as defined by the  gridstep\_y  attribute.

### set

Given the number of points already defined within [function](https://docs.cycling74.com/reference/function) 's graphic editor, a corresponding list of x-y-coordinate pairs will set the position of each point.

Arguments:

- x-y-coordinate-pairs
  [list]

### setcurve

The word  setcurve , followed by an integer that specifies the index of a function point (numbered from 1) and a floating point value that specifies a curve, will create a curved line segment between the specified point and the next point.

Curve factor values from 0 to 1.0 produce an "exponential" curve when increasing in value and values from -1.0 to 0 produce a "logarithmic" curve. The closer to 0 the curve parameter is, the closer the curve is to a straight line, and the farther away the parameter is from 0, the steeper the curve. The  mode  attribute must be set to 1 (curve mode) for this message to be effective.

Arguments:

- index
  [int]
- curve-factor
  [float]

### setdomain

The word  setdomain , followed by a  float  or  int  value, sets the maximum displayed X value, then modifies the X values of all breakpoints so that they remain in the same place given the new domain.

Arguments:

- maximum
  [float]

### setrange

The word  setrange , followed by two  float  or  int  values, sets the minimum and maximum display range for Y values, then modifies the Y values of all breakpoints so that they remain in the same place given the new range.

Arguments:

- minimum
  [number]
- maximum
  [number]

### sustain

The word  sustain , followed by number specifying the index of a point and zero or one, turns that point into a sustain point if the second number is 1, or into a regular point if the second number is 0. By default, points are regular (non-sustain). The behavior of sustain points is discussed in the description of the  bang  message above. Command-clicking on Macintosh or Control-clicking on Windows also toggle the sustain property of a point.

Arguments:

- index
  [int]
- flag
  [int]

### xyc

The word  xyc , followed by an two numbers that specifies X and Y values and a floating point number that specifies a curve factor, will add a new point with curve information to the function.

Curve factor values from 0 to 1.0 produce an "exponential" curve when increasing in value and values from -1.0 to 0 produce a "logarithmic" curve. The closer to 0 the curve parameter is, the closer the curve is to a straight line, and the farther away the parameter is from 0, the steeper the curve. The  mode  attribute must be set to 1 (curve mode) for this message to be effective.

Arguments:

- x-value
  [number]
- y-value
  [number]
- curve-factor
  [float]

## Output

### bang

Out right outlet: When a mouse editing operation is completed, a  bang  is sent out.

### float

Out left outlet: The interpolated Y value is sent out in response to a  float  or  int  X value received in the inlet; or a stored Y value is sent out in response to an  nth  message.

### list

Out middle-left outlet: When  bang  is received, a list containing information about all stored values will be sent out the outlet. This format is intended for input to the [line~](https://docs.cycling74.com/reference/line~) object.

If the [function](https://docs.cycling74.com/reference/function) object is in linear mode (set via the  mode  attribute), a  float  is sent out for the first stored Y value, followed by a  list  containing pairs of numbers indicating each subsequent stored Y value and its transition time (the difference between X and the previous X). If the [function](https://docs.cycling74.com/reference/function) object is in linear mode (set via the  mode  attribute), a  float  is sent out for the first stored Y value, followed by a  list  containing pairs of numbers indicating each subsequent stored Y value and its transition time (the difference between X and the previous X).

If the [function](https://docs.cycling74.com/reference/function) object is in curve mode (set via the  mode  attribute), a  float  is sent out for the first stored Y value, followed by a  list  containing triplets of numbers indicating each subsequent stored Y value, its transition time (the difference between X and the previous X), and a curve factor value (see the  setcurve  message listing).

Out third outlet: If the [function](https://docs.cycling74.com/reference/function) object is in linear mode (set via the  mode  attribute), a series of two-item lists containing the X and Y values of each of the [function](https://docs.cycling74.com/reference/function) object's breakpoints is sent out when a  dump  message is received.

If the [function](https://docs.cycling74.com/reference/function) object is in curve mode (set via the  mode  attribute), a series of three-item lists containing the X and Y values and a curve factor of each of the [function](https://docs.cycling74.com/reference/function) object's breakpoints is sent out when a  dump  message is received.

## See Also

| Name | Description |
| --- | --- |
| [line](https://docs.cycling74.com/reference/line) | Generate timed ramp |
