---
type: jitter
name: "jit.mgraphics"
summary: "2D Vector Graphics"
signal: false
url: "https://docs.cycling74.com/reference/jit.mgraphics/"
package: "Jitter"
see_also: ["JS MGraphics API", "jit.lcd", "jit.gl.sketch", "jsui"]
---
# jit.mgraphics

2D Vector Graphics

## Description

The [jit.mgraphics](https://docs.cycling74.com/reference/jit.mgraphics) object supports drawing 2D vector graphics with the MGraphics API.

#### Discussion

This is the Max wrapper for the JGraphics API. Documentation on JGraphics is available online
<https://sdk.cdn.cycling74.com/max-sdk-8.2.0/group__jgraphics.html>
. They are both loosely based on the API of
<http://cairographics.org>
. When looking at the JGraphics documentation, the functions don't pass in t\_jgraphics \*. Otherwise arguments are similar.

## Matrix Operator

matrix inputs:0, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### autofill[int]

Automatically fill paths when closed.

### dim[2 ints]

Dimensions.

### relative\_coords[int]

Use relative coordinates (0.-1. rather than pixels).

### textfieldvisible[int]

TEXT\_HERE

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### append\_path

Add a path to a graphics context.

Arguments:

- path
  [symbol]

### arc

Add a circular, clockwise, arc to the current path.

Arguments:

- xc
  [float]
- yc
  [float]
- radius
  [float]
- angle1
  [float]
- angle2
  [float]

### arc\_negative

Add a circular, counter-clockwise, arc to the current path.

Arguments:

- xc
  [float]
- yc
  [float]
- radius
  [float]
- angle1
  [float]
- angle2
  [float]

### attr\_setfill

Fill a pattern with a named style color

### clear\_surface

Clear the drawing surface and reset to it's initial state.

### close\_path

Close the current path in a context.

### curve\_to

Add a cubic Bezier spline to the current path.

Arguments:

- x1
  [float]
- y1
  [float]
- x2
  [float]
- y2
  [float]
- x3
  [float]
- y3
  [float]

### device\_to\_user

Converts device coordinates to user coordinates. User coordinates are those passed to drawing functions. Device coordinates are those of the display device. The result is sent out the dumpout outlet with a  device\_to\_user  prefix.

Arguments:

- x
  [float]
- y
  [float]

### ellipse

Add a closed elliptical path in the context.

Arguments:

- x
  [float]
- y
  [float]
- width
  [float]
- height
  [float]

### fill

Fill the current path, discarding the path once filled.

### fill\_extents

Return the current path's extents if filled. The result is 4 floating point numbers of the form x1, y1, x2, y2, and is sent out the dumpout outlet with a  fill\_extents  prefix.

### fill\_preserve

Fill the current path, preserving the path for further path operations.

### fill\_preserve\_with\_alpha

Fill the current path, applying a global alpha, and preserving the path for further path operations.

Arguments:

- alpha
  [float]

### fill\_with\_alpha

Fill the current path, applying a global alpha, and discarding the path once filled.

Arguments:

- alpha
  [float]

### font\_extents

Return the extents of the currently selected font. The result is 3 floating point numbers of the form ascent, descent, height, and is sent out the dumpout outlet with a  font\_extents  prefix.

### get\_current\_point

Get the current location of the cursor in a graphics context. The result is sent out the dumpout outlet with a  get\_current\_point  prefix.

### get\_line\_cap

Return the current line cap style. The result is a symbol, and is sent out the dumpout outlet with a  get\_line\_cap  prefix.

### get\_line\_join

Return the current line join style. The result is a symbol, and is sent out the dumpout outlet with a  get\_line\_join  prefix.

### get\_line\_width

Return the current line width. The result is a floating point number, and is sent out the dumpout outlet with a  get\_line\_width  prefix.

### get\_matrix

Return the transform matrix. The result is 6 floating point numbers of the form xx, yx, xy, yy, x0, y0, and is sent out the dumpout outlet with a  get\_matrix  prefix.

### getfontlist

Return the current font list. The result is a list of symbols, and is sent out the dumpout outlet with a  getfontlist  prefix.

### identity\_matrix

Set the current transform to be the identity matrix.

### image\_surface\_create

Create a named image surface, filling with the contents of specified source. Source can be a file name or a matrix name.

Arguments:

- name
  [symbol]
- source
  [symbol]
- width
  [float]
- height
  [float]

### image\_surface\_destroy

Destroy a named image surface.

Arguments:

- name
  [symbol]

### image\_surface\_draw

Draw an image surface. Supports zoom, but not rotations. Source can be a surface name, file name or a matrix name.

Arguments:

- source
  [symbol]

### image\_surface\_draw\_fast

Draw an image surface quickly. Does not support zoom or rotations. Source can be a surface name, file name or a matrix name.

Arguments:

- source
  [symbol]

### image\_surface\_get\_size

Return the size of an image surface. The result is sent out the dumpout outlet with a  image\_surface\_get\_size  prefix.

Arguments:

- name
  [symbol]

### in\_fill

Check if a point is in the current path's fill region. The result is sent out the dumpout outlet with a  in\_fill  prefix.

Arguments:

- x
  [float]
- y
  [float]

### line\_to

Add a line segment to the current path.

Arguments:

- x
  [float]
- y
  [float]

### move\_to

Move the cursor to a new point and begin a new subpath.

Arguments:

- x
  [float]
- y
  [float]

### new\_path

Begin a new path.

### ovalarc

Add a non-circular arc to the current path.

Arguments:

- xc
  [float]
- yc
  [float]
- radiusx
  [float]
- radiusy
  [float]
- angle1
  [float]
- angle2
  [float]

### paint

Paint current source in entire current clip region.

### paint\_with\_alpha

Paint current source with alpha in entire current clip region.

### parentpaint

This is primarily used for jspainter functionality to tell the parent object to call it's native paint method.

### path\_roundcorners

Round out any corners in a path.

Arguments:

- corner\_radius
  [float]

### pattern\_add\_color\_stop\_rgba

Add a color stop to a gradient pattern.

Arguments:

- pattern\_name
  [symbol]
- offset
  [float]
- red
  [float]
- green
  [float]
- blue
  [float]
- alpha
  [float]

### pattern\_create\_for\_surface

Create a named image pattern, filling with the contents of specified source. Source can be an image surface name, a file name, or a matrix name.

Arguments:

- pattern\_name
  [symbol]
- source
  [symbol]

### pattern\_create\_linear

Create a named linear gradient pattern.

Arguments:

- pattern\_name
  [symbol]
- x0
  [float]
- y0
  [float]
- x1
  [float]
- y1
  [float]

### pattern\_create\_radial

Create a named radial gradient pattern.

Arguments:

- pattern\_name
  [symbol]
- cx0
  [float]
- cy0
  [float]
- radius0
  [float]
- cx1
  [float]
- cy1
  [float]
- radius1
  [float]

### pattern\_create\_rgba

Create a named solid color pattern.

Arguments:

- pattern\_name
  [symbol]
- red
  [float]
- green
  [float]
- blue
  [float]
- alpha
  [float]

### pattern\_destroy

Destroy a named pattern.

Arguments:

- pattern\_name
  [symbol]

### pattern\_get\_extend

Get the pattern's extend mode. The result is sent out the dumpout outlet with a  pattern\_get\_extend  prefix.

Arguments:

- pattern\_name
  [symbol]

### pattern\_get\_matrix

Get the pattern's transform matrix. The result is sent out the dumpout outlet with a  pattern\_get\_matrix  prefix.

Arguments:

- pattern\_name
  [symbol]

### pattern\_get\_type

Get the pattern's type. The result is sent out the dumpout outlet with a  pattern\_get\_type  prefix.

Arguments:

- pattern\_name
  [symbol]

### pattern\_identity\_matrix

Set the pattern's transform matrix to the identity matrix.

Arguments:

- pattern\_name
  [symbol]

### pattern\_rotate

Rotate the pattern's transform matrix.

Arguments:

- pattern\_name
  [symbol]
- radians
  [float]

### pattern\_scale

Scale the pattern's transform matrix.

Arguments:

- pattern\_name
  [symbol]
- sx
  [float]
- sy
  [float]

### pattern\_set\_extend

Set a pattern's extend mode. Values can be: none, repeat, reflect, or pad. However, many of these are not implemented for various pattern types.

Arguments:

- pattern\_name
  [symbol]
- extend\_mode
  [symbol]

### pattern\_set\_matrix

Set the pattern's transform matrix.

Arguments:

- pattern\_name
  [symbol]
- xx
  [float]
- xy
  [float]
- yx
  [float]
- yy
  [float]
- x0
  [float]
- y0
  [float]

### pattern\_translate

Translate the pattern's transform matrix.

Arguments:

- pattern\_name
  [symbol]
- tx
  [float]
- ty
  [float]

### pop\_group\_to\_source

Pops the current group to the current source pattern.

### push\_group

Temporarily redirects drawing to an intermediate surface known as a group. Use pop\_group, pop\_group\_to\_source, or pop\_group\_to\_surface to use it.

### rectangle

Add a closed rectangle path in the context.

Arguments:

- x
  [float]
- y
  [float]
- width
  [float]
- height
  [float]

### rectangle\_rounded

Add a closed rounded-rectangle path in the context.

Arguments:

- x
  [float]
- y
  [float]
- width
  [float]
- height
  [float]
- ovalwidth
  [float]
- ovalheight
  [float]

### rel\_curve\_to

Add a cubic Bezier spline to the current path, using coordinates relative to the current point.

Arguments:

- x1
  [float]
- y1
  [float]
- x2
  [float]
- y2
  [float]
- x3
  [float]
- y3
  [float]

### rel\_line\_to

Add a line segment to the current path, using coordinates relative to the current point.

Arguments:

- x
  [float]
- y
  [float]

### rel\_move\_to

Move the cursor to a new point and begin a new subpath, using coordinates relative to the current point.

Arguments:

- x
  [float]
- y
  [float]

### restore

Restores the saved graphics settings ("pops" the graphics state stack).

### rotate

Rotate the transform matrix.

Arguments:

- radians
  [float]

### save

Saves the current graphics settings to be restored later ("pushes" the graphics state stack).

### scale

Scale the transform matrix.

Arguments:

- tx
  [float]
- ty
  [float]

### scale\_source\_rgba

Set the source color transform's scale factor.

Arguments:

- redscale
  [float]
- greenscale
  [float]
- bluescale
  [float]
- alphascale
  [float]

### select\_font\_face

Specify a font for a graphics context. The  slant  may be  normal  or  italic , and The  weight  may be  normal  or  bold .

Arguments:

- fontfamily
  [symbol]
- slant
  [symbol]
- weight
  [symbol]

### set\_dash

Sets the line drawing style to a dash. The first argument sets the dash length, and the second sets the gap length.

Arguments:

- dash-length
  [float]
- gap-length
  [float]

### set\_font\_size

Specify the font size.

Arguments:

- size
  [float]

### set\_line\_cap

Set the current line cap style. Values can be: butt, round, or square.

Arguments:

- style
  [symbol]

### set\_line\_join

Set the current line join style. Values can be: miter, round, or bevel.

Arguments:

- style
  [symbol]

### set\_line\_width

Set the current line width.

Arguments:

- width
  [float]

### set\_matrix

Set the transform matrix.

Arguments:

- xx
  [float]
- xy
  [float]
- yx
  [float]
- yy
  [float]
- x0
  [float]
- y0
  [float]

### set\_source

Set the current source to the named pattern or image surface.

Arguments:

- source
  [symbol]

### set\_source\_rgb

Set the current source color.

Arguments:

- red
  [float]
- green
  [float]
- blue
  [float]

### set\_source\_rgba

Set the current source color.

Arguments:

- red
  [float]
- green
  [float]
- blue
  [float]
- alpha
  [float]

### set\_source\_surface

Set the current source to the named image surface or file name.

Arguments:

- source
  [symbol]

### show\_text

Display text at the current position.

Arguments:

- text
  [symbol]

### stroke

Stroke the current path, discarding the path once filled.

### stroke\_preserve

Stroke the current path, preserving the path for further path operations.

### stroke\_preserve\_with\_alpha

Stroke the current path, applying a global alpha, and preserving the path for further path operations.

Arguments:

- alpha
  [float]

### stroke\_with\_alpha

Stroke the current path, applying a global alpha, and discarding the path once filled.

Arguments:

- alpha
  [float]

### svg\_create

Create a named svg object, filling with the contents of specified source. Source can be a file name, or an XML svg string.

Arguments:

- svg\_name
  [symbol]
- source
  [symbol]

### svg\_destroy

Destroy a named svg object.

Arguments:

- svg\_name
  [symbol]

### svg\_get\_size

Get a named svg object's size. The result is sent out the dumpout outlet with a  svg\_get\_size  prefix.

Arguments:

- svg\_name
  [symbol]

### svg\_render

Render a named svg object.

Arguments:

- svg\_name
  [symbol]

### svg\_set

Reuse an existing SVG object that was created with  svg\_create .

Arguments:

- svg\_name
  [symbol]

### text\_measure

Return the width and height of a string given current graphics settings in a context. The result is sent out the dumpout outlet with a  text\_measure  prefix.

Arguments:

- text
  [symbol]

### text\_path

Add a path of text to the current path.

Arguments:

- text
  [symbol]

### transform

Multiply the transform matrix by another matrix.

Arguments:

- xx
  [float]
- xy
  [float]
- yx
  [float]
- yy
  [float]
- x0
  [float]
- y0
  [float]

### translate

Translate the transform matrix.

Arguments:

- tx
  [float]
- ty
  [float]

### translate\_source\_rgba

Set the source color transform's offset values.

Arguments:

- redoffset
  [float]
- greenoffset
  [float]
- blueoffset
  [float]
- alphaoffset
  [float]

### user\_to\_device

Converts user coordinates to device coordinates. User coordinates are those passed to drawing functions. Device coordinates are those of the display device. The result is sent out the dumpout outlet with a  user\_to\_device  prefix.

Arguments:

- x
  [float]
- y
  [float]

## See Also

| Name | Description |
| --- | --- |
| [JS MGraphics API](https://appdocs.cycling74.com/apiref/js/mgraphics) | JS MGraphics API |
| [jit.lcd](https://docs.cycling74.com/reference/jit.lcd) | QuickDraw wrapper (deprecated) |
| [jit.gl.sketch](https://docs.cycling74.com/reference/jit.gl.sketch) | Use drawing commands with OpenGL |
| [jsui](https://docs.cycling74.com/reference/jsui) | Javascript user interfaces and graphics (Legacy Engine) |
