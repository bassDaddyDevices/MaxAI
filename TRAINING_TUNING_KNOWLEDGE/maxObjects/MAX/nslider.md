---
type: max
name: "nslider"
summary: "Output numbers from a notation display"
signal: false
url: "https://docs.cycling74.com/reference/nslider/"
package: "Max"
see_also: ["kslider", "makenote", "notein", "noteout", "pictslider", "rslider", "slider"]
---
# nslider

Output numbers from a notation display

## Description

[nslider](https://docs.cycling74.com/reference/nslider) or "Note Slider" is a musical-notation-based integer value slider.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the background color for the object in RGBA format.

### clefs[int]: 1

Display Clefs

### fgcolor[4 floats]

Sets the foreground color for the object in RGBA format.

### mode[int]: 0

Sets the  nslider  object's mode of operation.

 Monophonic : (the default) Only one note can be selected and displayed at one time.

 Polyphonic : The  kslider  object keeps track of note-ons and note-offs, so it mirrors which notes are currently held down on your MIDI keyboard. A key is “turned off” by sending the [kslider](https://docs.cycling74.com/reference/kslider) object a key on message with a velocity of 0.

Possible values:

0 = 'Monophonic'

1 = 'Polyphonic'

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### staffs[int]: 1

Alias:
staves

Display Staffs

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out the pitch and velocity values currently stored in [nslider](https://docs.cycling74.com/reference/nslider).

### int

The number received in the inlet is displayed graphically by [nslider](https://docs.cycling74.com/reference/nslider) if it falls within its displayed range. The current velocity value (from 1 to 127) that [nslider](https://docs.cycling74.com/reference/nslider) holds is sent out its right outlet, followed by the received number out the left outlet.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number received in the right inlet sets the output key velocity without triggering output.

Arguments:

- velocity
  [int]

### float

In left inlet: Converted to  int .

Arguments:

- input
  [float]

### (inlet1)

In right inlet: Converted to  int .

Arguments:

- velocity
  [float]

### list

A list of two numbers sent to the left inlet of nslider can be used to set and output the note and velocity values.

Arguments:

- value-pair
  [list]

### anything

Notes can also be added using the musical note name and octave, i.e., F#3. This is especially useful for forcing display of accidentals (# or b). For example, a value of 59 and the message Cb4 both produce the same note, but the number will display a B note while the message displays a C-flat.

Arguments:

- notenames
  [list]

### chord

In left inlet: The word  chord , followed by a list of MIDI note name and velocity pairs, can be used to play chords on the [nslider](https://docs.cycling74.com/reference/nslider) in polyphonic mode (set by the  mode 1  message). The  chord  message sends note-offs for currently held notes, followed by note-on commands for the specified note and velocity pairs. When the [nslider](https://docs.cycling74.com/reference/nslider) object's state is saved by a [preset](https://docs.cycling74.com/reference/preset) object in polyphonic mode, the [preset](https://docs.cycling74.com/reference/preset) object will store  chord  messages.

Arguments:

- value-pairs
  [list]

### clear

In left inlet: The  clear  message will clear any notes on the staves, but will not trigger any output.

### flush

In left inlet: When the [nslider](https://docs.cycling74.com/reference/nslider) object is in polyphonic mode (set by the  mode 1  message), the  flush  message will send note-offs to currently held notes and clear the [nslider](https://docs.cycling74.com/reference/nslider) object's display.

### (mouse)

[nslider](https://docs.cycling74.com/reference/nslider) also sends out numbers when you click or drag on it with the mouse. The velocity value is determined by the previous value received in the right inlet.

If the [nslider](https://docs.cycling74.com/reference/nslider) object is in polyphonic mode, you need to click on a note twice: once to send a note-on and draws the note, and once again to send a note-off and erase the note.

### set

In left inlet: The word  set , followed by a number, changes the value displayed by [nslider](https://docs.cycling74.com/reference/nslider), without triggering output. If the  set  message is followed by two numbers, both the note and velocity values are set, without causing output.

Arguments:

- value-pair
  [list]

## Output

### int

[nslider](https://docs.cycling74.com/reference/nslider) sends its current velocity value out its right outlet, followed by the (displayable) pitch value out its left outlet, when a number is received in its inlet or you click or drag on the object. In polyphonic mode, it will send a note value with a velocity of zero when a note is removed from the staves.

## See Also

| Name | Description |
| --- | --- |
| [kslider](https://docs.cycling74.com/reference/kslider) | Output numbers from an onscreen keyboard |
| [makenote](https://docs.cycling74.com/reference/makenote) | Generate a note-on/note-off pair |
| [notein](https://docs.cycling74.com/reference/notein) | Receive MIDI note messages |
| [noteout](https://docs.cycling74.com/reference/noteout) | Transmit MIDI note messages |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [rslider](https://docs.cycling74.com/reference/rslider) | Display or change a range of numbers |
| [slider](https://docs.cycling74.com/reference/slider) | Move a slider to output values |
