---
type: max
name: "rpnin"
summary: "Output received RPN values"
signal: false
url: "https://docs.cycling74.com/reference/rpnin/"
package: "Max"
see_also: ["midiin", "ctlin", "nrpnout", "xctlin", "xbendin", "xnotein", "rpnin", "rpnout"]
---
# rpnin

Output received NRPN values

## Description

Output the value from a specific Non-Registered Parameter Number (NRPN) and MIDI channel.

#### Discussion

A Non-Registered Parameter message comprises several groups of bytes to specify a 14-bit parameter number (2 groups for the for the most significant byte of the parameter number (MSB) and one for the least significant byte of the parameter number (LSB)), a 14-bit value (2 groups for the MSB and LSB of the value) or a 7-bit delta value (1 group), optionally followed by a Null Function (2 groups) to terminate changes to the parameter.

## Arguments

### param-channel[list] optional

The initial argument is a single non-registered parameter number (in the range 0-16383) to be recognized by [nrpnin](https://docs.cycling74.com/reference/nrpnin). The parameter number can also be expressed as a symbol formatted 'MSB:LSB' (for instance, '1:0' would specify parameter 128). If there is no parameter number, or if the argument is a negative number, [nrpnin](https://docs.cycling74.com/reference/nrpnin) recognizes all non-registered parameter numbers. If a single parameter number is specified in the argument, the outlet which normally sends the parameter number is unnecessary, and is not created.

Following the controller number argument is a single channel number on which to receive parameter messages. If the channel argument is not present, [nrpnin](https://docs.cycling74.com/reference/nrpnin) receives parameter messages on all channels. In order for this argument to be used, a parameter number argument must precede it. To specify a channel number without specifying a parameter number, use -1  for the parameter number. The channel number is clipped to the range 1-16.

## Attributes

### hires[int]: 1

When enabled, [nrpnin](https://docs.cycling74.com/reference/nrpnin) expects high resolution, 14-bit values from the non-registered parameter. If you know that the parameter you are monitoring only transmits 7-bit values using the MSB, set hires to  0  to avoid inaccurate output from the object. If the parameter you are monitoring transmits 'high resolution' 7-bit values using an MSB of 0 and a value in the LSB, this setting will have no effect.

### permissive[int]: 0

Permit missing MSB when setting parameter number

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

The message  set  without any arguments, or with an argument of -1 , will cause [nrpnin](https://docs.cycling74.com/reference/nrpnin) to output incoming 14-bit MIDI non-registered parameter messages from any non-registered parameter. An argument between  0  and  16383  ((1 << 14) - 1) will cause [nrpnin](https://docs.cycling74.com/reference/nrpnin) to only output incoming 14-bit MIDI non-registered parameter messages from the parameter specified.

The  set  message also accepts an argument list comprising most signficant byte (MSB) followed by least significant byte (LSB). The 7-bit MSB will be bitshifted and ORd with the 7-bit LSB to specify a 14-bit parameter number. For instance,  set 1 0  would specify non-registered parameter number 128.

The parameter number argument can also be expressed as a symbol formatted 'MSB:LSB'. For instance,  set 1:0  would specify non-registered parameter number 128.

Arguments:

- parameter
  [int]

## Output

### int

Out left outlet: The number is the value (if specified) of an incoming MIDI NRPN message as a single 14-bit value. For any NRPN message, either value or delta will be specified, but not both.

Out 2nd outlet: The number is the delta (if specified) of an incoming MIDI NRPN message as a single 7-bit value. For any NRPN message, either value or delta will be specified, but not both.

If a specific parameter number is not specified as an argument, the parameter number is sent out the 2nd outlet as a single 14-bit value.

If a specific channel number is not included in the argument, the channel number is sent out an additional, right, outlet.

## See Also

| Name | Description |
| --- | --- |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [ctlin](https://docs.cycling74.com/reference/ctlin) | Output received MIDI control values |
| [nrpnout](https://docs.cycling74.com/reference/nrpnout) | Format 14-bit MIDI NRPN messages |
| [xctlin](https://docs.cycling74.com/reference/xctlin) | Output received 14-bit MIDI control values |
| [xbendin](https://docs.cycling74.com/reference/xbendin) | Interpret extra precision MIDI pitch bend values |
| [xnotein](https://docs.cycling74.com/reference/xnotein) | Interpret MIDI note messages with release velocity |
| [rpnin](https://docs.cycling74.com/reference/rpnin) | Output received RPN values |
| [rpnout](https://docs.cycling74.com/reference/rpnout) | Format 14-bit MIDI RPN messages |
