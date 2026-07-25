---
type: max
name: "xbendout"
summary: "Format extra precision MIDI pitch bend messages"
signal: false
url: "https://docs.cycling74.com/reference/xbendout/"
package: "Max"
see_also: ["bendout", "midiout", "xbendin"]
---
# xbendout

Format extra precision MIDI pitch bend messages

## Description

Formats messages which occupy both bytes of the MIDI pitch bend message. [xbendout2](https://docs.cycling74.com/reference/xbendout) allows you to send the pitch bend data as two bytes from 0-127.

## Arguments

### xbendout2[symbol] optional

If the object is called [xbendout2](https://docs.cycling74.com/reference/xbendout), there will be three inlets. The most significant byte of the pitch bend message is received in the left inlet, and the least significant (extra precision) byte is received in the middle inlet.

### channel[int] optional

The number sets an initial value for the MIDI channel of the pitch bend messages. If there is no argument, the initial channel number is  1 .

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out a MIDI pitch bend message using the numbers currently stored in [xbendout](https://docs.cycling74.com/reference/xbendout).

### int

The number is a 14-bit pitch bend value to be formatted into a complete MIDI pitch bend message by [xbendout](https://docs.cycling74.com/reference/xbendout).

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored as the MIDI channel for the pitch bend message sent out by [xbendout](https://docs.cycling74.com/reference/xbendout). Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

Arguments:

- channel
  [int]

### (inlet2)

The number is stored as the MIDI channel for the pitch bend message sent out by [xbendout](https://docs.cycling74.com/reference/xbendout). Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

Arguments:

- channel
  [int]

### list

The first number is a 14-bit pitch bend value, and the second number is the channel. Both numbers are stored and are formatted into a MIDI pitch bend message which is sent out the outlet.

Arguments:

- value
  [int]
- channel
  [int]

## Output

### int

When a pitch bend value is received in the left inlet, the complete MIDI pitch bend message is sent out the outlet, byte-by-byte.

## See Also

| Name | Description |
| --- | --- |
| [bendout](https://docs.cycling74.com/reference/bendout) | Send MIDI pitch bend messages |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [xbendin](https://docs.cycling74.com/reference/xbendin) | Interpret extra precision MIDI pitch bend values |
