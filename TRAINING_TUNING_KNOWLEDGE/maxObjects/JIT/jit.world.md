---
type: jitter
name: "jit.world"
summary: "The Jitter world context"
signal: false
url: "https://docs.cycling74.com/reference/jit.world/"
package: "Jitter"
see_also: ["jit.window", "jit.gl.render", "jit.gl.node", "jit.gl.cornerpin", "jit.phys.world", "jit.pworld"]
---
# jit.world

The Jitter world context

## Description

The [jit.world](https://docs.cycling74.com/reference/jit.world) object encapsulates the functionality of several jitter objects, including [jit.window](https://docs.cycling74.com/reference/jit.window), [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render), [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node), [jit.gl.cornerpin](https://docs.cycling74.com/reference/jit.gl.cornerpin) and [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world). Physics and GL objects are automatically added to the jit.world context and video objects have their automatic output enabled, when in the same patch.

#### Discussion

Typically the [jit.world](https://docs.cycling74.com/reference/jit.world) window will display context objects as soon as receiving the first draw call, either via external bang or internally via automatic rendering (enable 1). If output\_texture is enabled two draw calls are required for correct display and output. An additional draw call is required for correct matrix output if both output\_matrix and matrix\_mode\_async are enabled.

## Arguments

### name[symbol] optional

The drawing context name

## Attributes

### border[int]

Show window border (default = 1).

### auto\_handle[int]

Enables the auto-handle transform gizmo mode (default = 0). The transform mode defaults to rotation, and changes to translate or scale via command and option modifiers. Shift modifier toggles between local and world axes.

### enable[int]

Enable automatic rendering (default = 0). When enabled, rendering is performed automatically.

### depth\_sort[int] >= 9.0.0

Enables depth sorting mode (default = 0). When enabled, objects are sorted by distance from the camera prior to rendering each frame.

### dim[2 ints]

Internal texture dimensions (default = 640 x 480). This attribute is set only if the desired texture output dimensions should differ from the window size. If no arguments are given, the texture dimensions will adapt to the window size.

### displaylink[int]

Enable render draw sync to display swap (default = 1) (Mac only). When enabled, render draw calls are synced to the display swap.

### drawbang[symbol]

The draw bang output timing (default = prerender). Determines if the middle-outlet draw bang happens before or after rendering.

Possible values:

'prerender'
(
Before rendering
)
'postrender'
(
After rendering
)

### drawto[symbol]

The internal [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) context name (default = UID). [jit.world](https://docs.cycling74.com/reference/jit.world) drawto is the parent context of the internal [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context.

### capture[int]

Capture to the internal texture (default = 0). When enabled, all rendering is captured to texture and the texture name is output out the left outlet. The texture is also drawn to the internal [jit.gl.cornerpin](https://docs.cycling74.com/reference/jit.gl.cornerpin) for display on the window. Synonym for output\_texture.

### fixed\_delta[float] >= 9.0.0

Locks the delta time value used by animation objects, in seconds (default = 0). When non-zero, animating objects will calculate updates using this value, rather than the actual time between frames. Useful for non realtime frame capture.

### floating[int]

Enable floating window style (default = 0).

### fps[float]

The frames per second of automatic rendering (default = 30). Setting fps also sets interval. These attributes only have an effect if enable is 1 and displaylink is 0.

### fsaa[int]

Enable full scene anti-aliasing (default = 0).

### fsmenubar[int]

Enable menubar in fullscreen (default = 1).

### fullscreen[int]

Enable fullscreen (default = 0).

### enable\_cornerpin[int]

Enable the internal [jit.gl.cornerpin](https://docs.cycling74.com/reference/jit.gl.cornerpin) object (default = 0). When enabled the cornerpin's handles are visible, and mouse handler is enabled. Enabling also sets output\_texture to 1. Attributes and messages of the cornerpin can be sent using  sendcornerpin .

### erase\_color[4 floats]

Background and clear color as RGBA values (default = 0.2 0.2 0.2 1.0).

### esc\_fullscreen[int]

When enabled, the escape key sends the window to fullscreen (default = 1).

### interval[int]

The millisecond interval of automatic rendering (default = 33). Setting interval also sets fps. These attributes only have an effect if enable is 1 and displaylink is 0.

### gizmos[int] >= 9.0.0

Enables gizmo drawing and manipulation for [jit.gl.light](https://docs.cycling74.com/reference/jit.gl.light) and [jit.gl.camera](https://docs.cycling74.com/reference/jit.gl.camera) objects bound to this context (default = 0).

### matrix\_mode\_async[int] >= 8.0.0

Enable asynchronous matrix output (default = 1). When enabled jit.world will use the more CPU efficient asynchronous code path for matrix output. Disable if synchronous output is desired.

### ortho[int]

Orthographic projection mode (default = 0)

0 = orthographic projection off (perspective projection)

1 = orthographic projection on, using lens angle

2 = orthographic projection on, ignoring lens angle

Possible values:

0 = 'Off (Perspective)'

1 = 'Orthographic (Lens Angle)'

2 = 'Orthographic (No Lens Angle)'

### output\_matrix[int]

Output the scene as a matrix (default = 0). When enabled, all rendering is captured to texture then read back to an internal matrix, and the matrix name is output out the left outlet. The texture is also drawn to the internal [jit.gl.cornerpin](https://docs.cycling74.com/reference/jit.gl.cornerpin) for display on the window.

### output\_texture[int]

Capture to the internal texture (default = 0). When enabled, all rendering is captured to texture and the texture name is output out the left outlet. The texture is also drawn to the internal [jit.gl.cornerpin](https://docs.cycling74.com/reference/jit.gl.cornerpin) for display on the window. Synonym for capture.

### name[symbol]

The drawing context name (default = UID). Jitter GL objects attach to this context through their drawto attribute. The [jit.world](https://docs.cycling74.com/reference/jit.world) name is actually the internal [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context name.

Using [jit.world](https://docs.cycling74.com/reference/jit.world) in a Max for Live device requires an implicitly named context or --- (triple-dash) named contexts.

### phys\_worldname[symbol]

The internal [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) physics world name (default = UID).

### position[3 floats]

The 3D origin in the form x y z (default = 0. 0. 0.). This attribute sets the internal [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) position.

### preserve\_aspect[int]

Preserve aspect ratio flag of input image (default = 1)

### size[2 ints]

Window size (default = 640 480)

### rect[4 ints]

The window rectangle is specified in pixels giving the left, top, right, and bottom coordinates of the window from the upper left corner.

### sync[int]

The vertical sync flag sets the window to update synchronous to the monitor's refresh (default = 1).

### rotate[4 floats]

The angle of rotation and the three axes about which the rotation is performed in the form rotation-angle x y z (default = 0. 0. 1. 0.). This attribute sets the internal [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) rotate.

### quat[4 floats]

Specifies a quaternion orientation in 3D space (default = 0 0 0 1). This attribute sets the internal [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) quat.

### rotatexyz[3 floats]

Specifies an Euler orientation in 3D space (default = 0 0 0). This attribute sets the internal [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) rotatexyz.

### scale[3 floats]

The 3D scaling factor in the form x y z (default = 1. 1. 1.). This attribute sets the internal [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) scale.

### running\_fps[float] read-only>= 9.0.0

Sending  getrunning\_fps  will return the actual frames per second rendered by this context (as opposed to the desired frames per second set by fps).

### transparency[int] >= 9.0.0

Enables the global transparency mode (default = 0). When enabled any objects that have a color transparency (ie a color alpha component less than 1) or blend\_enable 1 will be added to a transparency pass and composited with any opaque objects in the scene with proper depth buffering.

### windowposition[2 ints]

Window position is specified in pixels by an x and y offset value in global coordinates from the upper left corner of the screen.

### visible[int]

Enable window visibility (default = 1).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Draw and update all automatic clients and animations. Should only be called if enable is 0.

### int

Set the enable attribute. When enabled frame updates are handled automatically.

### clear

Clear the matrix or texture image from the background, replacing with the erase\_color.

### (mouse)

Double-click on the object box brings the window to front, and mouse events on the window are reported out the dump outlet preceded by the symbol  mouse  when the left mouse button is down, or  mouseidle  if idlemouse is enabled via the  sendwindow  message.

The event is a list containing the horizontal and vertical coordinates of the mouse cursor, followed by several flags representing button state and modifier key state. The flags are: mouse button, command (mac) or control (win) key, shift key, capslock key, option / alt key, control key (mac), left mouse button, right mouse button, and middle mouse button.

### draw

Draw and update all automatic clients and animations. Should only be called if enable is 0.

### front

Bring window to front.

### jit\_gl\_texture

Draw the named texture to the background.

Arguments:

- texture-name
  [symbol]

### sendcornerpin

Sends messages to the internal [jit.gl.cornerpin](https://docs.cycling74.com/reference/jit.gl.cornerpin) object.

Arguments:

- message
  [symbol]
- values
  [list]

### sendhandle

Sends messages to the internal [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) object.

Arguments:

- message
  [symbol]
- values
  [list]

### sendnode

Sends messages to the internal [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) object.

Arguments:

- message
  [symbol]
- values
  [list]

### sendphys

Sends messages to the internal [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) object.

Arguments:

- message
  [symbol]
- values
  [list]

### sendrender

Sends messages to the internal [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) object.

Arguments:

- message
  [symbol]
- values
  [list]

### sendwindow

Sends messages to the internal [jit.window](https://docs.cycling74.com/reference/jit.window) object.

Arguments:

- message
  [symbol]
- values
  [list]

## See Also

| Name | Description |
| --- | --- |
| [jit.window](https://docs.cycling74.com/reference/jit.window) | Display data in a window |
| [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) | Render Jitter OpenGL objects |
| [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) | Create hierarchical rendering groups |
| [jit.gl.cornerpin](https://docs.cycling74.com/reference/jit.gl.cornerpin) | Map textures in a window |
| [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) | Collision detection and rigid body dynamics |
| [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) | Display a Jitter GL context |
