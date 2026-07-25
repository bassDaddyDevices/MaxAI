---
type: max
name: "bendout"
summary: "Send MIDI pitch bend messages"
signal: false
url: "https://docs.cycling74.com/reference/bendout/"
package: "Max"
see_also: ["bendin", "midiout", "xbendout", "xbendin"]
---
# bendout

Send MIDI pitch bend messages

## Description

Transmits MIDI pitchbend values to a MIDI device.

## Arguments

### port[symbol] optional

Specifies the port for transmitting MIDI pitch bend messages. Channel numbers greater than 16 received in the right inlet will be wrapped around to stay within the 1-16 range. If there is no argument, [bendout](https://docs.cycling74.com/reference/bendout) initially transmits out port  a , on MIDI channel 1.

### port-and-channel[list] optional

and  int  A letter and number combination (separated by a space) indicates a port and a specific MIDI channel on which to transmit pitch bend messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

### midi-device[symbol] optional

The name of a MIDI output device may be used as the first argument to specify the port. The name 'none' can be used to prevent the object from transmitting MIDI messages on any port.

### channel[int] optional

A number alone can be used in place of a letter and number combination. The exact meaning of the channel number argument depends on the channel offset specified for each port in the MIDI Setup dialog.

## Attributes

### matchport[int]: 0

If the  port  argument doesn't match an existing port or device name, set the object's MIDI port to 'none'.

### name[symbol]

Set the object's MIDI port based on a device name. The attribute will attempt to do a case-sensitive partial string match based on the attribute's value.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: The number is transmitted as a MIDI pitch bend value on the specified channel and port. Numbers are limited between 0 and 127.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored as the channel number on which to transmit the pitch bend messages.

Arguments:

- MIDI-channel
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### anything

See the  port  message

Arguments:

- MIDI-port
  [list]

### (mouse)

Double-clicking on a [bendout](https://docs.cycling74.com/reference/bendout) object shows a pop-up menu for choosing a MIDI port or device.

### port

In left inlet: The word  port , followed by a letter  a-z  or the name of a MIDI output port or device, specifies the port used to transmit MIDI messages. The word  port  is optional and may be omitted. The name 'none' can be used to prevent the object from transmitting MIDI messages on any port.

Arguments:

- MIDI-port
  [symbol]

## Output

### (MIDI)

There are no outlets. The output is a MIDI pitch bend message transmitted directly to the object's MIDI output port.

## See Also

| Name | Description |
| --- | --- |
| [bendin](https://docs.cycling74.com/reference/bendin) | Output MIDI pitch bend values |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [xbendout](https://docs.cycling74.com/reference/xbendout) | Format extra precision MIDI pitch bend messages |
| [xbendin](https://docs.cycling74.com/reference/xbendin) | Interpret extra precision MIDI pitch bend values |
