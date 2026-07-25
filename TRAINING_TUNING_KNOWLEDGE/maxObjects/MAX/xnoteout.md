---
type: max
name: "xnoteout"
summary: "Format MIDI note messages with release velocity"
signal: false
url: "https://docs.cycling74.com/reference/xnoteout/"
package: "Max"
see_also: ["noteout", "midiout", "xnotein"]
---
# xnoteout

Format MIDI note messages with release velocity

## Arguments

### channel[int] optional

Sets an initial value for the MIDI channel of the outgoing messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range. If there is no argument, the initial channel number is  1 .

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out a MIDI message using the numbers currently stored in [xnoteout](https://docs.cycling74.com/reference/xnoteout).

### int

In left inlet: The number is used as the pitch value for a note-on or note-off message, and the message is sent out the outlet byte-by-byte.

In left-middle inlet: The number is stored as the velocity for either a note-on or a note-off message. If no number has been received yet, the velocity for note-ons is  64 , and the velocity for note-offs is  0 .

In right-middle inlet: The number is stored as the indicator of whether outgoing messages should be note-ons or note-offs. If the number is not 0, [xnoteout](https://docs.cycling74.com/reference/xnoteout) will send out a note-on message. If the number is  0 , [xnoteout](https://docs.cycling74.com/reference/xnoteout) will send out a note-off message with a release velocity. If no number has been received yet, it is initially  1  (note-on).

In right inlet: The number is stored as the channel for the MIDI message sent out by [xnoteout](https://docs.cycling74.com/reference/xnoteout). Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

Arguments:

- input
  [int]

### (inlet1)

Inlet numbering starts at 0. Second inlet: Integer is stored as the velocity for either a note-on or a note-off message. If no number has been received yet, the velocity for note-ons is  64 , and the velocity for note-offs is  0 .

Arguments:

- velocity
  [int]

### (inlet2)

Inlet numbering starts at 0. Third inlet: The number is stored as the indicator of whether outgoing messages should be note-ons or note-offs. If the number is not 0, [xnoteout](https://docs.cycling74.com/reference/xnoteout) will send out a note-on message. If the number is  0 , [xnoteout](https://docs.cycling74.com/reference/xnoteout) will send out a note-off message with a release velocity. If no number has been received yet, it is initially  1  (note-on).

Arguments:

- note-flag
  [int]

### (inlet3)

Inlet numbering starts at 0. Fourth inlet: The number is stored as the channel for the MIDI message sent out by [xnoteout](https://docs.cycling74.com/reference/xnoteout). Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

Arguments:

- channel
  [int]

### list

The first number is the pitch value, the second number is the velocity, the third number is the note-on/note-off indicator (non-zero for note-on, 0 for note-off), and the fourth number is the channel. The numbers are stored by [xnoteout](https://docs.cycling74.com/reference/xnoteout), and a MIDI note-on or note-off message is sent out.

Arguments:

- pitch
  [int]
- velocity
  [int]
- note-flag
  [int]
- channel
  [int]

## Output

### int

When a pitch value is received, a complete MIDI note-on or note-off message is sent out the outlet, byte-by-byte. Whereas a note-on with a velocity of 0 is most commonly used to indicate a note-off, [xnoteout](https://docs.cycling74.com/reference/xnoteout) sends out the MIDI note-off command and uses the specified velocity as a release velocity.

## See Also

| Name | Description |
| --- | --- |
| [noteout](https://docs.cycling74.com/reference/noteout) | Transmit MIDI note messages |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [xnotein](https://docs.cycling74.com/reference/xnotein) | Interpret MIDI note messages with release velocity |
