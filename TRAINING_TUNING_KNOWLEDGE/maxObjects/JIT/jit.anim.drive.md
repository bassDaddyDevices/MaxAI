---
type: jitter
name: "jit.anim.drive"
summary: "Animate a 3D transform"
signal: false
url: "https://docs.cycling74.com/reference/jit.anim.drive/"
package: "Jitter"
see_also: ["jit.anim.node", "jit.anim.path", "jit.gl.camera"]
---
# jit.anim.drive

Animate a 3D transform

## Description

Animates relative transforms over time with easing. The [jit.anim.drive](https://docs.cycling74.com/reference/jit.anim.drive) object works in conjunction with [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) and OpenGL objects to perform this function. Double clicking the object will open a ui mapping dictionary, allowing certain user interface actions to be mapped to animation messages.

#### Discussion

UI mapping of key and mouse input is facilitated by editing the ui-map dictionary. Key input is mapped to alpha-numeric keys and arrow keys (using up, down, left and right instead of the key symbol). Mouse mapping looks for the following dictionary entries:

Horizontal: mouse\_horizontal, mouse\_h, mouse\_x

Horizontal with button down: mouse\_down\_horizontal, mouse\_down\_h, mouse\_down\_x

Vertical: mouse\_vertical, mouse\_v, mouse\_y

Vertical with button down: mouse\_down\_vertical, mouse\_down\_v, mouse\_down\_y

UI input can be mapped to  move ,  turn  and  grow  messages.

## Attributes

### active[int] read-only

Indicates if the object is currently animating.

### automatic[int]

Enables automatic update messages (default = 1). Requires the targetname object to belong to a valid OpenGL context.

### drawto[symbol]

Assign to the named drawing context, allowing for updates to be received automatically.

### ease[float]

Set both easein and easeout attributes (default = 1.).

### easefunc[symbol]

Determines how the easing is applied (default = linear).

Possible values:

'linear'

'quadratic'

'cubic'

### easein[float]

Determines how long it will take (in seconds) for a specific animation message to go from it's current value to the new value (default = 1.). This attribute only affects the  move ,  turn  and  grow  animations.

### easeout[float]

Determines how long it will take (in seconds) for a specific animation message to go from it's current value to 0 (default = 1.). This attribute only affects the  move ,  turn  and  grow  animations.

### evalreport[int]

Enable/disable the evaluation parameter reporting out the dumpout (default = 0). The report is a 3 element list where each element represents the current evaluation parameters for the  moveto ,  rotateto , and  scaleto  messages, in that order.

### fixed\_delta[float] >= 9.0.0

Locks the delta time value used when animating, in seconds (default = 0). When non-zero, updates are calculated using this value, rather than the actual time between frames. Useful for non realtime frame capture. If non-zero will override that of the bound [jit.world](https://docs.cycling74.com/reference/jit.world) fixed\_delta value.

### name[symbol]

Specifies the name of the instance (default = UID).

### position[3 floats]

The current stored position in 3D space. This attribute is used for the  moveto  and  springto  messages (default = 0 0 0).

### quat[4 floats]

The current orientation in 3D space, stored as a quaternion value. This attribute is used for the  rotateto  message (default = 0 0 0 1).

### scale[3 floats]

The current stored scale in 3D space. This attribute is used for the  scaleto  message (default = 1 1 1).

### speed[float]

The speed of animations in units per second. (default = 30.)

### spring\_damp[float]

The dampening amount applied to the spring equation used in the  springto  message (default = 0.1).

### spring\_mass[float]

The mass amount applied to the spring equation used in the  springto  message (default = 1.).

### spring\_stiff[float]

The stiffness amount applied to the spring equation used in the  springto  message (default = 0.2).

### spring\_thresh[float]

The threshold value to determine when the spring simulation is no longer active. Used in the  springto  message (default = 0.0001).

### ui\_dict\_layout[symbol]

Sets the keyboard layout for the default ui mapping dict when ui\_listen is enabled. The value is stored in the application preferences and will affect all future instantiations of jit.anim.drive. To override the default ui mapping see the ui\_map and ui\_map\_clone attributes.

Possible values:

'azerty'

'qwerty'

'qwertz'

'qzerty'

'azerty\_v2'
(
Includes a keyboard turn around the Z axis
)
'qwerty\_v2'
(
Includes a keyboard turn around the Z axis
)

### targetname[symbol]

The name of the target object that should be either an OpenGL object, or a [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) object.

### ui\_listen[int]

Cause UI mouse and keyboard messages to be received from context window (default = 0). Requires the targetname object to belong to a valid OpenGL context.

### ui\_map[symbol]

The name of a registered dictionary to clone as the UI mapping dictionary. As of Max 9.0.5 this attribute functions exactly the same as ui\_map\_clone.

### ui\_map\_clone[symbol]

The name of a registered dictionary to clone as the UI mapping dictionary. See the
[anim.drive.ui.dict](openfilelink)
example patch for a demonstration.

### ui\_priority[int]

UI priority value (default = 900). When multiple UI objects are listening to the same window, ui\_priority determines the order objects receive input. Lower values test first.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes the animation messages to be output, if currently animating.

### anim\_reset

Disable all animations

### (mouse)

Mouse events

### dictionary

The incoming dictionary is cloned and used to set the ui mapping.

Arguments:

- name
  [symbol]

### grow

Scale the attached object along each axis by the amount provided. The axis arguments are multiplied by speed.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### move

Move the attached object along the axis provided, relative to the space indicated by the objects's movemode attribute. The axis arguments are multiplied by speed.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### moveto

Move the attached object to the specified position over the specified length of time (in seconds). Easing in and out is applied to the movement based on the easefunc attribute.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]
- duration
  [float]

### rotateto

Rotate the attached object to the specified quaternion orientation over the specified length of time (in seconds). Easing in and out is applied to the rotation based on the easefunc attribute.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]
- w
  [float]
- duration
  [float]

### scaleto

Scale the attached object to the specified scale value over the specified length of time (in seconds). Easing in and out is applied to the scaling based on the easefunc attribute.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]
- duration
  [float]

### springto

Move the attached object to the specified position using a mass-spring simulation.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### turn

Rotate the attached object along each axis by the amount provided. The axis arguments are multiplied by speed.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### ui\_dict

See the  dictionary  listing

### ui\_key

Send the specified key. If the key is in the ui mapping dictionary, the corresponding animation will be enabled.

Arguments:

- key
  [symbol]

### ui\_keyup

Send the specified keyup. If the key is in the ui mapping dictionary, the corresponding animation will be disabled.

Arguments:

- key
  [symbol]

### ui\_mouse

Send the mouse event. If the event is in the ui mapping dictionary, the corresponding animation will be enabled.

Arguments:

- screen-x
  [int]
- screen-y
  [int]
- mouse-down
  [int]

### update\_drive

See the  bang  listing

## See Also

| Name | Description |
| --- | --- |
| [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) | Perform hierarchical transformation |
| [jit.anim.path](https://docs.cycling74.com/reference/jit.anim.path) | Evaluate a path of 3D transform points |
| [jit.gl.camera](https://docs.cycling74.com/reference/jit.gl.camera) | Set a rendering view |
