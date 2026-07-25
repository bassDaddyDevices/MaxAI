---
type: max
name: "xctlin"
summary: "Output received 14-bit MIDI control values"
signal: false
url: "https://docs.cycling74.com/reference/xctlin/"
package: "Max"
see_also: ["midiin", "ctlin", "xctlout", "xbendin", "xnotein", "nrpnin", "rpnin"]
---
# xctlin

Output received 14-bit MIDI control values

## Description

Output the value from a specific 14-bit controller pair and MIDI channel.

## Arguments

### ctrllr-channel[list] optional

The initial argument is a single high resolution controller number (in the range 0-95) to be recognized by [xctlin](https://docs.cycling74.com/reference/xctlin). If there is no controller number, or if the argument is a negative number, [xctlin](https://docs.cycling74.com/reference/xctlin) recognizes all high resolution controller numbers. If a single controller number is specified in the argument, the outlet which normally sends the controller number is unnecessary, and is not created.

Following the controller number argument is a single channel number on which to receive control messages. If the channel argument is not present, [xctlin](https://docs.cycling74.com/reference/xctlin) receives control messages on all channels. In order for this argument to be used, a controller number argument must precede it. To specify a channel number without specifying a controller number, use -1  for the controller number. The channel number is clipped to the range 1-16.

## Attributes

### lsbfirst[int]: 0

When enabled, the LSB group of bytes in the incoming continuous controller messages will be parsed first, followed by the MSB group. This ordering is unusual, but is required by some MIDI hardware.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The numbers are individual bytes of a MIDI message stream, received from an object such as [midiin](https://docs.cycling74.com/reference/midiin).

Arguments:

- input
  [int]

### list

The numbers are bytes of a MIDI message stream, received from an object such as [midiin](https://docs.cycling74.com/reference/midiin).

Arguments:

- input
  [list]

### set

The message  set  without any arguments, or with an argument of -1 , will cause [xctlin](https://docs.cycling74.com/reference/xctlin) to output incoming 14-bit MIDI continuous controller messages from any high resolution controller. An argument between  0  and  95  (the MIDI high resolution controller numbers) will cause [xctlin](https://docs.cycling74.com/reference/xctlin) to only output incoming 14-bit MIDI continuous controller messages from the controller specified.

Arguments:

- controller
  [int]

## Output

### int

Out left outlet: The number is the value of an incoming MIDI control change message as a single 14-bit value.

If a specific controller number is not specified as an argument, the controller number is sent out the 2nd outlet.

If a specific channel number is not included in the argument, the channel number is sent out an additional, right, outlet.

## See Also

| Name | Description |
| --- | --- |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [ctlin](https://docs.cycling74.com/reference/ctlin) | Output received MIDI control values |
| [xctlout](https://docs.cycling74.com/reference/xctlout) | Format 14-bit MIDI controller messages |
| [xbendin](https://docs.cycling74.com/reference/xbendin) | Interpret extra precision MIDI pitch bend values |
| [xnotein](https://docs.cycling74.com/reference/xnotein) | Interpret MIDI note messages with release velocity |
| [nrpnin](https://docs.cycling74.com/reference/nrpnin) | Output received NRPN values |
| [rpnin](https://docs.cycling74.com/reference/rpnin) | Output received RPN values |
