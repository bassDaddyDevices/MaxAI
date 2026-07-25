---
type: max
name: "poly"
summary: "Allocate notes to different voices"
signal: false
url: "https://docs.cycling74.com/reference/poly/"
package: "Max"
see_also: ["borax", "flush", "makenote"]
---
# poly

Allocate notes to different voices

## Description

Provides polyphonic voice-allocation by allocating data to different individual voices.

## Arguments

### voices[number] optional

Sets the number of voices to which [poly](https://docs.cycling74.com/reference/poly) can allocate notes (thus limiting the number of notes [poly](https://docs.cycling74.com/reference/poly) can hold at one time). If there is no argument present, [poly](https://docs.cycling74.com/reference/poly) will hold up to 16 notes.

### steal-mode[int] optional

If there is no second argument, or if the second argument is  0 , [poly](https://docs.cycling74.com/reference/poly) sends any notes it cannot hold out the rightmost outlet. If there is a non=zero second argument, [poly](https://docs.cycling74.com/reference/poly) steals voices: when [poly](https://docs.cycling74.com/reference/poly) receives more notes than it has voices, it turns off the note it has held the longest and puts the new note in its place.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The number is treated as the pitch value of pitch-velocity pair and the note is sent out.

Arguments:

- pitch
  [int]

### (inlet1)

The number is stored as the velocity to be paired with numbers received in the left inlet.

Arguments:

- velocity
  [int]

### stop

In left inlet: Immediately sends note-offs for all the notes currently being held by [poly](https://docs.cycling74.com/reference/poly), freeing all voices.

## Output

### int

Out left outlet: The output is the voice number of the note-on or note-off being sent out.

Out 2nd outlet: The output is the pitch of the note-on or note-off.

Out 3rd outlet: The number is the velocity of the note-on or note-off.

### list

Out 4th outlet: The first number is the pitch, and the second number is the velocity, of any notes [poly](https://docs.cycling74.com/reference/poly) cannot hold. If there is a non-zero second argument, [poly](https://docs.cycling74.com/reference/poly) steals voices rather than send out overflow, so the fourth outlet is not created.

## See Also

| Name | Description |
| --- | --- |
| [borax](https://docs.cycling74.com/reference/borax) | Report note-on and note-off information |
| [flush](https://docs.cycling74.com/reference/flush) | Output MIDI note-offs for held notes |
| [makenote](https://docs.cycling74.com/reference/makenote) | Generate a note-on/note-off pair |
