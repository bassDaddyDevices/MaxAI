---
type: max
name: "borax"
summary: "Report note-on and note-off information"
signal: false
url: "https://docs.cycling74.com/reference/borax/"
package: "Max"
see_also: ["midiparse", "poly"]
---
# borax

Report note-on and note-off information

## Description

Acquires and outputs comprehensive information regarding note-on and note-off events. Information includes note counts, event details and time between note events.

## Arguments

None.

## Attributes

### size[int]: 128

The size attribute, which can only be changed as a typed-in argument, sets the highest note number [borax](https://docs.cycling74.com/reference/borax) can track. The default value is 128, for MIDI note numbers. If you have a non-MIDI use for [borax](https://docs.cycling74.com/reference/borax) you can specify a size up to maximum of 16384 "note" values.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In right inlet: Resets [borax](https://docs.cycling74.com/reference/borax) by sending note-offs for all notes currently being held, erasing the [borax](https://docs.cycling74.com/reference/borax) object's memory of all notes received, and setting its counters and its clock to 0.

### int

In left inlet: The number is the pitch value of a MIDI note-on message or note-off message (note-on with a velocity of 0). The pitch is paired with the velocity in the middle inlet. [borax](https://docs.cycling74.com/reference/borax) ignores note-on messages for pitches it is already holding, and ignores note-off messages for pitches that have already been turned off. If the note is not a duplicate, [borax](https://docs.cycling74.com/reference/borax) sends out the pitch and velocity values, as well as other information.

Arguments:

- pitch
  [int]

### (inlet1)

In middle inlet: The number is stored as the velocity, to be paired with pitch numbers received in the left inlet.

Arguments:

- velocity
  [int]

### delta

Causes the delta time (the time elapsed since the last note-on) and the delta count (the number of delta times that have been reported) to be sent out.

### list

The second number is stored as the velocity, and the first number is used as the pitch, of a pitch-velocity pair. If the note is not a duplicate, [borax](https://docs.cycling74.com/reference/borax) sends out the pitch and velocity values, as well as other information.

Arguments:

- pitch
  [int]
- velocity
  [int]

## Output

### int

Out left outlet: Each note-on received by [borax](https://docs.cycling74.com/reference/borax) is assigned a unique number, equal to the total count of note-ons received (since the last reset). That number is sent out when the note-on is received, and the same number is sent out when the note is turned off.

Out 2nd outlet: Each note is also assigned a unique voice number, equal to the lowest available number. (A voice becomes available when the note assigned to it is turned off.) That number is sent out when the note-on is received, and the same number is sent out when the note is turned off.

Out 3rd outlet: The number of notes being held by [borax](https://docs.cycling74.com/reference/borax) is sent out each time a note-on or a note-off is received.

Out 4th outlet: The pitch of the note-on or note-off is sent out.

Out 5th outlet: The velocity of the note-on or note-off is sent out.

Out 6th outlet: When a note-off is received, the total count of all completed notes (since the last reset) is sent out.

Out 7th outlet: When a note-off is received, the duration of that note, in milliseconds, is sent out.

Out 8th outlet: Each time a delta time is reported, the total count of delta times is sent out.

Out right outlet: When a note-on is received, the delta time is sent out (the time elapsed since the previous note-on, in milliseconds). A  delta  message in the left inlet causes the same output.

 bang  received in the right inlet causes [borax](https://docs.cycling74.com/reference/borax) to provide note-offs for any notes it currently holds. These note-offs trigger the same outputs as if they had actually been received.

## See Also

| Name | Description |
| --- | --- |
| [midiparse](https://docs.cycling74.com/reference/midiparse) | Interpret raw MIDI data |
| [poly](https://docs.cycling74.com/reference/poly) | Allocate notes to different voices |
