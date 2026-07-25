---
type: max
name: "sustain"
summary: "Hold note-off messages for release"
signal: false
url: "https://docs.cycling74.com/reference/sustain/"
package: "Max"
see_also: ["flush", "makenote", "stripnote"]
---
# sustain

Hold note-off messages for release

## Description

Holds any notes with velocities of 0 until instructed to release them. This provides for sustain pedal-like behavior when working with incoming MIDI notes.

## Arguments

None.

## Attributes

### repeatmode[int]

Sets the behavior mode for handling repeated note-on messages. There are three modes of behavior:

repeatmode 0: (Historical way) Playing the same note multiple times will not retrigger the played note when the sustain pedal is pressed or after a  sustain 1  message is received. This is the default state of the object.

repeatmode 1: (Re-trigger) Playing the same note multiple times will send a note off message and retrigger the played note no matter what its sustain state is. The [sustain](https://docs.cycling74.com/reference/sustain) object will also keep track of the notes to stop when the sustain pedal is released or a  sustain 0  message is received.

repeatmode 2: (Stop last) Playing the same note multiple times will cause the [sustain](https://docs.cycling74.com/reference/sustain) object to keep a count of the number of times the note has been played, holding and sending the accumulated note off messages when the sustain pedal is released or a  sustain 0  message is received.

Possible values:

0 = 'Historical Way'

1 = 'Re-Trigger'

2 = 'Stop Last'

### sustain[int]

Enables (1) or disables (0) sustain mode. Setting this attribute or sending the message  sustain 1  or  sustain 0  is equivalent to pressing or releasing the sustain pedal.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: The number is the pitch value of a pitch-velocity pair. If the velocity value currently held by [sustain](https://docs.cycling74.com/reference/sustain) is not 0, then the pair is sent out immediately. If the velocity is  0 , the note-off is either sent out or held, depending on whether [sustain](https://docs.cycling74.com/reference/sustain) is turned on.

In middle inlet: The number is stored as a velocity to be paired with pitch numbers received in the left inlet.

In right inlet: If the number is not 0, [sustain](https://docs.cycling74.com/reference/sustain) is turned on, and all note-offs are held. If the number is  0 , [sustain](https://docs.cycling74.com/reference/sustain) is turned off, and all note-offs are sent out immediately.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### list

In left inlet: A two-item list consisting of a note-velocity pair can be input.

Arguments:

- note/velocity pair
  [list]

### clear

Clears the  sustain  object's internal memory. No note-off messages are output.

### flush

Output all held note-offs.

## Output

### int

Out left outlet: The pitch value of a pitch-velocity pair.

Out right outlet: The velocity value of a pitch-velocity pair.

Note-on pairs are always sent out immediately. If [sustain](https://docs.cycling74.com/reference/sustain) is turned on, note-offs are held until it is turned off. Otherwise, note-offs are sent out immediately.

## See Also

| Name | Description |
| --- | --- |
| [flush](https://docs.cycling74.com/reference/flush) | Output MIDI note-offs for held notes |
| [makenote](https://docs.cycling74.com/reference/makenote) | Generate a note-on/note-off pair |
| [stripnote](https://docs.cycling74.com/reference/stripnote) | Filter out note-off messages |
