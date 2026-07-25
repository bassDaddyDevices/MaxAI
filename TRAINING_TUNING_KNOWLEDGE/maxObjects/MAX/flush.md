---
type: max
name: "flush"
summary: "Output MIDI note-offs for held notes"
signal: false
url: "https://docs.cycling74.com/reference/flush/"
package: "Max"
see_also: ["bag", "borax", "makenote", "midiflush", "offer", "stripnote", "sustain"]
---
# flush

Output MIDI note-offs for held notes

## Description

Outputss note-off messages for any held note-ons. [flush](https://docs.cycling74.com/reference/flush) keeps track of all note-ons passed through it, and produces note-off messages for any held notes when it receives a  bang  message.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Immediately sends note-offs for any pitches that have passed through as note-ons but not as note-offs by sending 0 out its right outlet followed by a pitch value out its left outlet.

### int

The number is treated as the pitch value of a pitch-velocity pair and the note is sent out.

Arguments:

- pitch
  [int]

### (inlet1)

The number is stored as the velocity to be paired with numbers received in the left inlet.

Arguments:

- velocity
  [int]

### clear

In left inlet: Erases any numbers held by [flush](https://docs.cycling74.com/reference/flush), without sending any note-offs.

## Output

### int

Out left outlet: The output is the pitch of the note-on or note-off.

Out right outlet: The number is the velocity of the note-on or note-off.

The [flush](https://docs.cycling74.com/reference/flush) object keeps track of the notes that have passed through it. When a bang is received in the inlet, note-off messages are provided for any notes that have passed through as note-ons only.

## See Also

| Name | Description |
| --- | --- |
| [bag](https://docs.cycling74.com/reference/bag) | Store a collection of numbers |
| [borax](https://docs.cycling74.com/reference/borax) | Report note-on and note-off information |
| [makenote](https://docs.cycling74.com/reference/makenote) | Generate a note-on/note-off pair |
| [midiflush](https://docs.cycling74.com/reference/midiflush) | Send MIDI note-offs for hanging note-ons |
| [offer](https://docs.cycling74.com/reference/offer) | Store one-time number pairs |
| [stripnote](https://docs.cycling74.com/reference/stripnote) | Filter out note-off messages |
| [sustain](https://docs.cycling74.com/reference/sustain) | Hold note-off messages for release |
