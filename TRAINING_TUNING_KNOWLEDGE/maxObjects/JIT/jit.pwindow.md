---
type: jitter
name: "jit.pwindow"
summary: "Display Jitter data and images"
signal: false
url: "https://docs.cycling74.com/reference/jit.pwindow/"
package: "Jitter"
see_also: ["jit.window", "jit.world", "jit.pworld", "jit.gl.render"]
---
# jit.pwindow

Display Jitter data and images

## Description

Use [jit.pwindow](https://docs.cycling74.com/reference/jit.pwindow) to draw pixels ( jit\_matrix  data) or OpenGL 3D graphics scenes ( jit\_texture  data) within a patcher. When it receives jit\_matrix messages it displays them as pixel data and when it receives jit\_texture messages it displays them using a passive OpenGL render context.

## Arguments

None.

## Attributes

### border[float]: 0.

Enable border drawing

### bordercolor[4 floats]: 0. 0. 0. 1.

Sets the Border Color in RGBA format. The Draw border flag must be set for the border to be visible.

### colormode[symbol]: argb

Matrix color mode

Possible values:

'argb'
(
ARGB color
)
Colors specified in ARGB format (default)

'uyvy'
(
UYVY color
)
Colors specified in UYVY format

### depthbuffer[int]

Enable depth buffer

### doublebuffer[int]

Enable double buffering

### dstrect[4 ints]: 0 0 320 240

The matrix destination rectangle is given by coordinates left, top, bottom, right. All values are relative to the top left corner of the window.

### fsaa[int]

Full scene anti-aliasing enable

### idlemouse[int]: 0

When enabled, idle mouse events are reported (default = 0). When disabled mouse events are only reported when the mouse button is down.

### interp[int]: 0

Matrix interpolation enable

### name[symbol]

The name of the window. Jitter OpenGL objects attach to a rendering context through the window's name.

### onscreen[int]: 1

Draw direct to screen enable

### pickray[int]: 0

Pickray

### planemap[4 ints]: 0 1 2 3

The plane mapping from input matrix to output (default = 0 1 2 3).

### size[2 ints]

Window size

### srcrect[4 ints]: 0 0 320 240

The portion of the input matrix used when copying an input matrix to the internal matrix. (default = 0 0 (matrix width) (matrix height)) The proportions of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top left corner of the viewing area of the input matrix.

### stereo[int]

Stereo buffer enable

### sync[int]

The vertical sync flag sets the window to update synchronous to the monitor's refresh.

### usedstrect[int]: 0

Enable destination rectangle

### usesrcrect[int]: 0

Enable source rectangle

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output the currently stored matrix

### jit\_gl\_texture

Draws the texture to screen using a passive OpenGL render context. In this mode, jit.pwindow is always drawn on the top-most patching layer and will obscure any other patcher elements occupying the same region of the patcher.

Arguments:

- texture-name
  [symbol]

### jit\_matrix

Draws the matrix to screen as ARGB pixel data. In this mode, jit.pwindow can be layered anywhere in the Max patcher layer hierarchy, so text and objects can be seen on top of the incoming matrix data.

Arguments:

- matrix-name
  [symbol]

### (mouse)

Mouse events are reported out the dump outlet preceded by the symbol  mouse  when the left mouse button is down, or  mouseidle  if idlemouse is enabled.

The event is a list containing the horizontal and vertical coordinates of the mouse cursor, followed by several flags representing button state and modifier key state. The flags are: mouse button, command (mac) or control (win) key, shift key, capslock key, option / alt key, control key (mac), left mouse button, right mouse button, and middle mouse button.

## See Also

| Name | Description |
| --- | --- |
| [jit.window](https://docs.cycling74.com/reference/jit.window) | Display data in a window |
| [jit.world](https://docs.cycling74.com/reference/jit.world) | The Jitter world context |
| [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) | Display a Jitter GL context |
| [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) | Render Jitter OpenGL objects |
