---
type: max
name: "kslider"
summary: "Output numbers from an onscreen keyboard"
signal: false
url: "https://docs.cycling74.com/reference/kslider/"
package: "Max"
see_also: ["makenote", "notein", "noteout", "nslider", "pictslider", "rslider", "slider"]
---
# kslider

Output numbers from an onscreen keyboard

## Description

Outputs and displays note and velocity information using an on-screen keyboard.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### blackkeycolor[4 floats]

Sets the color for the upper level of keys (otherwise known as the black keys) in RGBA format.

### hkeycolor[4 floats]

Sets the selected key color in RGBA format.

### inputmode[int]: 0

Set how incoming MIDI is interpreted.

Possible values:

0 = 'Off'
(
Input passed unclipped to output
)
1 = 'MIDI'
(
Input clipped to 0-127
)
2 = 'Visible'
(
Input clipped to visible range
)

### mode[int]: 0

Sets the  kslider  object's mode of operation.

 Monophonic : (the default) Only one key can be selected and displayed at one time.

 Polyphonic : The  kslider  object keeps track of note-ons and note-offs, so it mirrors which notes are currently held down on your MIDI keyboard. A key is “turned off” by sending the [kslider](https://docs.cycling74.com/reference/kslider) object a key on message with a velocity of 0.

 Touchscreen : Same as polyphonic, except touch up and mouse up events send out note offs.

Possible values:

0 = 'Monophonic'

1 = 'Polyphonic'

2 = 'Touchscreen'

### offset[int]: 36

Sets an offset value in octaves for the [kslider](https://docs.cycling74.com/reference/kslider) object.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### range[int]: 48

Sets the number of keys in the keyboard display.

### selectioncolor[4 floats] >= 7.0.0

Sets the color for the currently active keys in RGBA format.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### whitekeycolor[4 floats]

Sets the color for the lower level of keys (otherwise known as the white keys) in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out the pitch and velocity values currently stored in [kslider](https://docs.cycling74.com/reference/kslider).

### int

The number received in the inlet is displayed graphically by [kslider](https://docs.cycling74.com/reference/kslider) if it falls within its displayed range. The current velocity value (from 1 to 127) that [kslider](https://docs.cycling74.com/reference/kslider) holds is sent out its right outlet, followed by the received number out the left outlet.

Arguments:

- pitch
  [int]

### (inlet1)

In right inlet: The number received in the right inlet sets the output key velocity without triggering output.

Arguments:

- velocity
  [int]

### float

Converted to  int .

Arguments:

- pitch
  [float]

### (inlet1)

Converted to  int .

Arguments:

- velocity
  [float]

### chord

In left inlet: The word  chord , followed by a list of MIDI note name and velocity pairs, can be used to play chords on the [kslider](https://docs.cycling74.com/reference/kslider) in polyphonic mode (set by the  mode 1  message). The  chord  message sends note-offs for currently held notes, followed by note-on commands for the specified note and velocity pairs. When the [kslider](https://docs.cycling74.com/reference/kslider) object's state is saved by a [preset](https://docs.cycling74.com/reference/preset) object in polyphonic mode, the [preset](https://docs.cycling74.com/reference/preset) object will store chord messages.

Arguments:

- value-pairs
  [list]

### clear

In left inlet: The  clear  message will clear any currently highlighted notes on the keyboard, but will not trigger any output.

### flush

In left inlet: When the [kslider](https://docs.cycling74.com/reference/kslider) object is in polyphonic mode (set by the  mode 1  message), the  flush  message will send note-offs to currently held notes and clear the [kslider](https://docs.cycling74.com/reference/kslider) object's display.

### (mouse)

The [kslider](https://docs.cycling74.com/reference/kslider) object sends out numbers when you click or drag on it with the mouse. The velocity value is determined by the vertical position of the mouse within each key. Higher vertical positions produce higher velocities, to a maximum of 127.

If the [kslider](https://docs.cycling74.com/reference/kslider) object is in polyphonic mode, you need to click on a key twice: once to send a note-on, and once again for a note-off.

Clicking on the very rightmost edge of the [kslider](https://docs.cycling74.com/reference/kslider) sends out the note of the key C that would be just to the right of the keys that are visible.

### set

In left inlet: The word  set , followed by a number, changes the value displayed by [kslider](https://docs.cycling74.com/reference/kslider), without triggering output.

Arguments:

- pitch
  [int]
- velocity
  [int]

### size

This is a legacy message - the size of the [kslider](https://docs.cycling74.com/reference/kslider) object can be set by clicking on the object's resize handle and dragging.

In left inlet: The word  size , followed by a zero or one, sets the size of the keyboard display.  size 0  (default) sets the large keyboard, and  size 1  selects the small keyboard.

Arguments:

- size-flag
  [int]

## Output

### int

[kslider](https://docs.cycling74.com/reference/kslider) sends its current velocity value out its right outlet, followed by the (displayable) pitch value out its left outlet, when a number is received in its inlet or you click or drag on the object.

## See Also

| Name | Description |
| --- | --- |
| [makenote](https://docs.cycling74.com/reference/makenote) | Generate a note-on/note-off pair |
| [notein](https://docs.cycling74.com/reference/notein) | Receive MIDI note messages |
| [noteout](https://docs.cycling74.com/reference/noteout) | Transmit MIDI note messages |
| [nslider](https://docs.cycling74.com/reference/nslider) | Output numbers from a notation display |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [rslider](https://docs.cycling74.com/reference/rslider) | Display or change a range of numbers |
| [slider](https://docs.cycling74.com/reference/slider) | Move a slider to output values |
