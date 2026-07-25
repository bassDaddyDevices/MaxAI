---
type: jitter
name: "jit.window"
summary: "Display data in a window"
signal: false
url: "https://docs.cycling74.com/reference/jit.window/"
package: "Jitter"
---
# jit.window

Display data in a window

## Description

Use the [jit.window](https://docs.cycling74.com/reference/jit.window) object to draw pixels or graphics to a window. [jit.window](https://docs.cycling74.com/reference/jit.window) displays [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) data as well as OpenGL 3D graphics.

## Attributes

### border[int]

Show window border

### clamp[int]

Clamp matrix values

### depthbuffer[int]

Enable depth buffer

### doublebuffer[int]

Enable back buffer

### dstrect[4 ints]

The matrix destination rectangle is given by coordinates left, top, bottom, right. All values are relative to the top left corner of the window.

### floating[int]

Enable floating window style

### fsaa[int]

Enable full scene anti-aliasing

### fullscreen[int]

Enable fullscreen

### grow[int]

Enable the mouse grow region for the window. When the flag is set, the window can be resized by clicking and dragging in the lower right-hand corner.

### idlemouse[int]

When enabled, idle mouse events are reported (default = 0). When disabled mouse events are only reported when the mouse button is down.

### interp[int]

Enable matrix interpolation

### mousewheel[int]

Enable mousewheel messages

### name[symbol]

The name of the window. Jitter OpenGL objects attach to a rendering context through the window's name.

### noaccel[int]

Disable OpenGL hardware acceleration

### pickray[int]

Enable output of picking ray

### planemap[4 ints]

Maps input planes to output planes (default = 0 1 2 3 ...)

### pos[2 ints]

Window position is specified in pixels by an x and y offset value in global coordinates from the upper left corner of the screen.

### rect[4 ints]

The window rectangle is specified in pixels giving the left, top, right, and bottom coordinates of the window from the upper left corner.

### size[2 ints]

Window size

### srcrect[4 ints]

The portion of the input matrix used when copying an input matrix to the internal matrix. (default = 0 0 (matrix width) (matrix height)) The proportions of the rectangle are expressed in the form left, top, bottom, right. All values are relative to the top left corner of the viewing area of the input matrix.

### stereo[int]

Enable stereo buffers

### sync[int]

The vertical sync flag sets the window to update synchronous to the monitor's refresh.

### title[symbol]

The window title. If not title is set, the title of the window will be set to the name of the window.

### usedstrect[int]

Enables destination rectangle

### usesrcrect[int]

Enables source rectangle

### visible[int]

Enable window visibility

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

Double-click on the object box brings the window to front, and mouse events on the window are reported out the dump outlet preceded by the symbol  mouse  when the left mouse button is down, or  mouseidle  if idlemouse is enabled.

The event is a list containing the horizontal and vertical coordinates of the mouse cursor, followed by several flags representing button state and modifier key state. The flags are: mouse button, command (mac) or control (win) key, shift key, capslock key, option / alt key, control key (mac), left mouse button, right mouse button, and middle mouse button.

### front

Bring the window to front

### sendtexture

Send a message to the internal texture

Arguments:

- name
  [symbol]
- message
  [symbol]
- values
  [list]
