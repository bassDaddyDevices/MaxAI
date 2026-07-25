---
type: ableton
name: "ddg.mono"
summary: "Monophonic Synth Controller for Virtual Synths"
signal: false
url: "https://docs.cycling74.com/reference/ddg.mono/"
package: "Max for Live"
see_also: ["kslider", "midiin", "midiparse", "notein"]
---
# ddg.mono

Monophonic Synth Controller for Virtual Synths

## Description

[ddg.mono](https://docs.cycling74.com/reference/ddg.mono) provides MIDI message handling for virtual monophonic synths in Max. It implements last/high/low note priority and legato/retrigger phrasing.

## Arguments

### note priority[int] optional

An optional integer argument in the range 0 - 2 can be used to specify note priority. The mode settings are:

mode 0 (retrigger): Retrigger on each keypress (default).

mode 1 (legato): When a note is held, new notes ignore velocity.

mode 2 (laststep): Send a noteoff message on last note only.

## Attributes

### legatomode[atom\_long]

Sets the legato mode.

Possible values:

0 = 'Retrigger'
(
Retrigger mode
)
Retrigger on each keypress (default).

1 = 'Legato'
(
Legato mode
)
When a note is held, new notes ignore velocity.

2 = 'Last Step'

### mode[atom\_long]

Sets the note priority mode.

Possible values:

0 = 'Last Note'

1 = 'High Note'

2 = 'Low Note'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In first inlet: The number is treated as a pitch value for a MIDI note-on message. Output of the received number and its corresponding velocity value is dependent on the  mode  attribute and the triggering modes (set using the  legato  or  retrig  messages).

In second inlet: The number is stored as a velocity to be paired with pitch numbers received in the left inlet.

Arguments:

- MIDI-note-value
  [int]

### (inlet1)

In right inlet: The number is stored as a velocity to be paired with pitch numbers received in the left inlet.

Arguments:

- MIDI-velocity-value
  [int]

### clear

The  clear  message will send a note-off message to stop any notes which are currently playing.

### laststep

The  laststep  message will cause the [ddg.mono](https://docs.cycling74.com/reference/ddg.mono) object to send a note-off message for the last note played.

### legato

The  legato  message will cause the [ddg.mono](https://docs.cycling74.com/reference/ddg.mono) object to send its output only when a new note is played.

### retrig

The  retrig  message will cause the [ddg.mono](https://docs.cycling74.com/reference/ddg.mono) object to send its output on each key press (i.e., retriggering previously played notes).

## See Also

| Name | Description |
| --- | --- |
| [kslider](https://docs.cycling74.com/reference/kslider) | Output numbers from an onscreen keyboard |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [midiparse](https://docs.cycling74.com/reference/midiparse) | Interpret raw MIDI data |
| [notein](https://docs.cycling74.com/reference/notein) | Receive MIDI note messages |
