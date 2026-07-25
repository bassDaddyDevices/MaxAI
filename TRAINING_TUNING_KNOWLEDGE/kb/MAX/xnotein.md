---
type: max
name: "xnotein"
summary: "Interpret MIDI note messages with release velocity"
signal: false
url: "https://docs.cycling74.com/reference/xnotein/"
package: "Max"
see_also: ["notein", "midiin", "xnoteout"]
---
# xnotein

Interpret MIDI note messages with release velocity

## Arguments

### channel[int] optional

Specifies a channel number on which to look for incoming MIDI note-on and note-off messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range. If there is no argument, [xnotein](https://docs.cycling74.com/reference/xnotein) recognizes note-on and note-off messages on all MIDI channels, and the channel number of the message is sent out the rightmost outlet.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The numbers are individual bytes of a MIDI stream from [midiin](https://docs.cycling74.com/reference/midiin). Whereas a note-on with a velocity of 0 is most commonly used to indicate a note-off, [xnotein](https://docs.cycling74.com/reference/xnotein) also recognizes the MIDI note-off command, and outputs its release velocity.

Arguments:

- input
  [int]

## Output

### int

Out left outlet: The pitch value of the incoming note-on or note-off message.

Out 2nd outlet: The key-down or key-up velocity of a note-on or a note-off message.

Out 3rd outlet: The number is the indicator of whether the incoming MIDI message is a note-on or a note-off. If the incoming message is a note-on, the output is  1 . If the incoming message is a note-off--or a note-on with a velocity of 0--the output is  0 .

If no channel number is specified as an argument, [xnotein](https://docs.cycling74.com/reference/xnotein) has a 4th outlet on the right. The channel number of incoming messages is sent out the rightmost outlet.

## See Also

| Name | Description |
| --- | --- |
| [notein](https://docs.cycling74.com/reference/notein) | Receive MIDI note messages |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [xnoteout](https://docs.cycling74.com/reference/xnoteout) | Format MIDI note messages with release velocity |
