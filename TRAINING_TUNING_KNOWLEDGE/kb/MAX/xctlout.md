---
type: max
name: "xctlout"
summary: "Format 14-bit MIDI controller messages"
signal: false
url: "https://docs.cycling74.com/reference/xctlout/"
package: "Max"
see_also: ["midiout", "ctlout", "xctlin", "xbendout", "xnoteout", "nrpnout", "rpnout"]
---
# xctlout

Format 14-bit MIDI controller messages

## Description

Format 14-bit MIDI continuous controller messages to be transmitted using the [midiout](https://docs.cycling74.com/reference/midiout) object.

#### Discussion

A single 14-bit MIDI continuous controller message comprises two groups of bytes, one for the most significant byte of the value (MSB, on controller 0-95) and one for the least significant byte (LSB, on the MSB controller + 32).

## Arguments

### ctrllr-channel[list] optional

The initial argument is an initial high resolution controller number (in the range 0-95) to be used in control messages formatted by [xctlout](https://docs.cycling74.com/reference/xctlout). Controller numbers are automatically limited between 0 and 95. If there is no controller number specified, the initial controller number is 1.

Following the controller number argument is an initial value for the channel number with which to format control messages. If the channel argument is not present, [xctlout](https://docs.cycling74.com/reference/xctlout) initially formats control messages on channel 1. In order for this argument to be used, a controller number argument must precede it. The channel number is clipped to the range 1-16.

## Attributes

### lsbfirst[int]: 0

When enabled, the LSB group of bytes in the formatted continuous controller messages will be transmitted first, followed by the MSB group. This is required by some MIDI hardware.

### running[int]: 0

If running status is enabled, the status byte of the second (LSB) group of bytes in the formatted continuous controller messages will be eliminated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out a high resolution MIDI continuous controller message using the numbers currently stored in [xctlout](https://docs.cycling74.com/reference/xctlout)

### int

The number is a 14-bit continuous controller value to be formatted into a complete high resolution MIDI continuous controller message by [xctlout](https://docs.cycling74.com/reference/xctlout).

Arguments:

- input
  [int]

### (inlet1)

In middle inlet: The number is stored as the controller number of the control change messages transmitted by [xctlout](https://docs.cycling74.com/reference/xctlout). Controller numbers outside of the range 0-95 will be ignored.

Arguments:

- controller
  [int]

### (inlet2)

In right inlet: The number is stored as the MIDI channel for the continuous controller message sent out by [xctlout](https://docs.cycling74.com/reference/xctlout). Channel numbers will be clipped to stay within the 1-16 range.

Arguments:

- channel
  [int]

### float

The number is a 14-bit continuous controller value to be formatted into a complete high resolution MIDI continuous controller message by [xctlout](https://docs.cycling74.com/reference/xctlout).

Arguments:

- input
  [float]

### list

A pair of two 7-bit values (most significant byte (MSB) followed by least significant byte (LSB)) will be ORd together to form a single 14-bit continuous controller value. The 14-bit value will be formatted into a complete high resolution MIDI continuous controller message by [xctlout](https://docs.cycling74.com/reference/xctlout).

Arguments:

- msb
  [int]
- lsb
  [int]

## Output

### int

When a value is received in the left inlet, the complete high resolution MIDI continuous controller message is sent out the outlet, byte-by-byte.

## See Also

| Name | Description |
| --- | --- |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [ctlout](https://docs.cycling74.com/reference/ctlout) | Transmit MIDI controller messages |
| [xctlin](https://docs.cycling74.com/reference/xctlin) | Output received 14-bit MIDI control values |
| [xbendout](https://docs.cycling74.com/reference/xbendout) | Format extra precision MIDI pitch bend messages |
| [xnoteout](https://docs.cycling74.com/reference/xnoteout) | Format MIDI note messages with release velocity |
| [nrpnout](https://docs.cycling74.com/reference/nrpnout) | Format 14-bit MIDI NRPN messages |
| [rpnout](https://docs.cycling74.com/reference/rpnout) | Format 14-bit MIDI RPN messages |
