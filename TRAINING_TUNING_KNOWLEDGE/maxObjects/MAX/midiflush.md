---
type: max
name: "midiflush"
summary: "Send MIDI note-offs for hanging note-ons"
signal: false
url: "https://docs.cycling74.com/reference/midiflush/"
package: "Max"
see_also: ["flush", "midiin", "midiinfo", "midiout"]
---
# midiflush

Send MIDI note-offs for hanging note-ons

## Description

Analyzes a raw MIDI stream (from [midiin](https://docs.cycling74.com/reference/midiin) or [seq](https://docs.cycling74.com/reference/seq)), counting the number of note-ons received for each note and MIDI channel. When it is sent a  bang , MIDI note-off messages are sent for any notes which have not been turned off.

#### Discussion

This object is useful in conjunction with [seq](https://docs.cycling74.com/reference/seq), which doesn't turn its notes off when it receives the  stop  message. At all times, [midiflush](https://docs.cycling74.com/reference/midiflush) echoes its input to output.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

When [midiflush](https://docs.cycling74.com/reference/midiflush) receives a  bang , it outputs MIDI note-off messages for all note-ons which have not been matched by note-offs since the object was created (or the last  bang  message was sent).

### int

Raw MIDI data from a source such as [seq](https://docs.cycling74.com/reference/seq) or [midiin](https://docs.cycling74.com/reference/midiin) will be passed through unchanged, while the object observes which note-on messages on each channel have not received matching note-off messages.

Arguments:

- input
  [int]

### clear

Erases any note-ons held by [midiflush](https://docs.cycling74.com/reference/midiflush), without sending any note-offs.

## Output

### int

[midiflush](https://docs.cycling74.com/reference/midiflush) passes all its input through to its output, and sends MIDI note-off messages (as a series of numbers) for all note-ons which have not been matched by note-offs at its input.

## See Also

| Name | Description |
| --- | --- |
| [flush](https://docs.cycling74.com/reference/flush) | Output MIDI note-offs for held notes |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [midiinfo](https://docs.cycling74.com/reference/midiinfo) | Fill a pop-up menu with MIDI device names |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
