---
type: jitter
name: "jit.fpsgui"
summary: "FPS meter"
signal: false
url: "https://docs.cycling74.com/reference/jit.fpsgui/"
package: "Jitter"
see_also: ["jit.matrixinfo"]
---
# jit.fpsgui

FPS meter

## Description

Reports timing and matrix information. Currently available reports: fps (frames per second), ms (milliseconds between incoming data), matrix type, dimensions, planecount, and name.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the RGBA values for the data background color of the [jit.fpsgui](https://docs.cycling74.com/reference/jit.fpsgui) object's display.

### bgcolor2[4 floats]

Sets the RGBA values for the mode background color of the [jit.fpsgui](https://docs.cycling74.com/reference/jit.fpsgui) object's display. The  bgcolor2  attribute is mapped to the  elementcolor  style color.

### dim[32 ints] read-only

Displays the current dimensions of the incoming matrices.

### fps[float] read-only

Displays the current fps (frames per second) rate of the incoming matrices.

### interval[int]

The sampling period, in milliseconds, used when calculating fps and ms (default = 100)

### mode[int]: 0

Sets the display mode (default = 0 (fps))

0 = fps

1 = ms

2 = matrix type

3 = matrix dimensions

4 = matrix planecount

5 = matrix name

Possible values:

0 = 'fps'

1 = 'ms'

2 = 'type'

3 = 'dim'

4 = 'planes'

5 = 'name'

### ms[float] read-only

Displays the number of milliseconds elapsed between incoming data.

### name[symbol] read-only

Displays the current name of the incoming matrices.

### planecount[int] read-only

Alias:
planes

Displays the current planecount of the incoming matrices.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the RGBA values for the data text color of the [jit.fpsgui](https://docs.cycling74.com/reference/jit.fpsgui) object's display. The  textcolor  attribute is mapped to the  textcolor\_inverse  style color.

### timeout[int]

The time interval, in milliseconds, after which the timer resets (default = 2000)

### type[symbol] read-only

Displays the current data type of the incoming matrices.

### usetimeout[int]

Sets the timeout flag (default = 1). When the flag is set, use of the timeout attribute is enabled.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Any message sent to the object causes it to calculate fps and ms. The matrix attribute displays show  *n/a* .

Arguments:

- any-message
  [list]

### getstate

Sends a sequence of lists describing the incoming matrix's state out the object's right outlet, one line per attribute. Each line listing line takes the form  attribute-name   *attribute-value1*   *attribute-value2* ...  *attribute-valueN* .

### jit\_gl\_texture

Causes the object to calculate fps and ms. The name attribute shows the texture name.

Arguments:

- name
  [symbol]

### (mouse)

Clicking with the mouse lets you select the [jit.fpsgui](https://docs.cycling74.com/reference/jit.fpsgui) object's display mode.

## See Also

| Name | Description |
| --- | --- |
| [jit.matrixinfo](https://docs.cycling74.com/reference/jit.matrixinfo) | Report matrix planecount, type, dimensions |
