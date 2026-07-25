---
type: max
name: "rpnout"
summary: "Format 14-bit MIDI RPN messages"
signal: false
url: "https://docs.cycling74.com/reference/rpnout/"
package: "Max"
see_also: ["midiout", "ctlout", "nrpnin", "xctlout", "xbendout", "xnoteout", "rpnin", "rpnout"]
---
# rpnout

Format 14-bit MIDI NRPN messages

## Description

Format 14-bit MIDI Non-Registered Parameter Number messages to be transmitted using the [midiout](https://docs.cycling74.com/reference/midiout) object.

#### Discussion

A Non-Registered Parameter message comprises several groups of bytes to specify a 14-bit parameter number (2 groups for the for the most significant byte of the parameter number (MSB) and one for the least significant byte of the parameter number (LSB)), a 14-bit value (2 groups for the MSB and LSB of the value) or a 7-bit delta value (1 group), followed by a Null Function (2 groups) to terminate changes to the parameter.

## Arguments

### parameter-channel[list] optional

The initial argument is an initial non-registered parameter number (in the range 0-16383) to be used in parameter changes messages formatted by [nrpnout](https://docs.cycling74.com/reference/nrpnout). Non-registered parameter numbers are automatically limited between 0 and 16383. The parameter number can also be expressed as a symbol formatted 'MSB:LSB' (for instance, '1:0' would specify parameter 128). If there is no controller number specified, the initial controller number is 0.

Following the controller number argument is an initial value for the channel number with which to format control messages. If the channel argument is not present, [nrpnout](https://docs.cycling74.com/reference/nrpnout) initially formats control messages on channel 1. In order for this argument to be used, a controller number argument must precede it. The channel number is clipped to the range 1-16.

## Attributes

### hires[int]: 1

When enabled, [nrpnout](https://docs.cycling74.com/reference/nrpnout) formats high resolution, 14-bit NRPN messages for the provided input. If you know that the parameter you are working with only responds to 7-bit values using the MSB, set hires to  0  to avoid inaccurate output from the object. If the parameter you are working with responds to 'high resolution' 7-bit values using an MSB of 0 and a value in the LSB, this setting will have no effect.

### running[int]: 0

If running status is enabled, the status byte of all but the first group of bytes in the formatted NRPN messages will be eliminated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out a non-registered parameter message using the numbers currently stored in [nrpnout](https://docs.cycling74.com/reference/nrpnout)

### int

The number is a 14-bit non-registered parameter value to be formatted into a complete MIDI non-registered parameter number message by [nrpnout](https://docs.cycling74.com/reference/nrpnout).

Arguments:

- input
  [int]

### (inlet1)

In middle-left inlet: The delta will be formatted into a complete MIDI non-registered parameter number message by [nrpnout](https://docs.cycling74.com/reference/nrpnout). Deltas outside of the range -127-127 will be ignored.

Arguments:

- delta
  [int]

### (inlet2)

In middle-right inlet: The number is stored as the non-registered parameter number of the messages transmitted by [nrpnout](https://docs.cycling74.com/reference/nrpnout). Parameter numbers outside of the range 0-16383 will be ignored.

Arguments:

- parameter
  [int]

### (inlet3)

In right inlet: The number is stored as the MIDI channel for the continuous controller message sent out by [nrpnout](https://docs.cycling74.com/reference/nrpnout). Channel numbers will be clipped to stay within the 1-16 range.

Arguments:

- channel
  [int]

### list

A pair of two 7-bit values, most significant byte (MSB) followed by least significant byte (LSB). The 7-bit MSB will be bitshifted and ORd with the 7-bit LSB to specify a 14-bit non-registered parameter value. The 14-bit value will be formatted into a complete MIDI non-registered parameter number message by [nrpnout](https://docs.cycling74.com/reference/nrpnout).

Arguments:

- msb
  [int]
- lsb
  [int]

### set

An argument between  0  and  16383  ((1 << 14) - 1) will be stored as the non-registered parameter number of the messages transmitted by [nrpnout](https://docs.cycling74.com/reference/nrpnout).

The  set  message also accepts an argument list comprising most signficant byte (MSB) followed by least significant byte (LSB). The 7-bit MSB will be bitshifted and ORd with the 7-bit LSB to specify a 14-bit parameter number. For instance,  set 1 0  would specify non-registered parameter number 128.

The parameter number argument can also be expressed as a symbol formatted 'MSB:LSB'. For instance,  set 1:0  would specify non-registered parameter number 128.

Non-registered parameter numbers outside of the range 0-16383 will be ignored.

Arguments:

- parameter
  [list]

## Output

### int

When a value is received in the left inlet or 2nd inlet (value or delta), the complete MIDI NRPN message is sent out the outlet, byte-by-byte.

## See Also

| Name | Description |
| --- | --- |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [ctlout](https://docs.cycling74.com/reference/ctlout) | Transmit MIDI controller messages |
| [nrpnin](https://docs.cycling74.com/reference/nrpnin) | Output received NRPN values |
| [xctlout](https://docs.cycling74.com/reference/xctlout) | Format 14-bit MIDI controller messages |
| [xbendout](https://docs.cycling74.com/reference/xbendout) | Format extra precision MIDI pitch bend messages |
| [xnoteout](https://docs.cycling74.com/reference/xnoteout) | Format MIDI note messages with release velocity |
| [rpnin](https://docs.cycling74.com/reference/rpnin) | Output received RPN values |
| [rpnout](https://docs.cycling74.com/reference/rpnout) | Format 14-bit MIDI RPN messages |
