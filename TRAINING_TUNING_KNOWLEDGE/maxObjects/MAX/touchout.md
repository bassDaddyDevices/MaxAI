---
type: max
name: "touchout"
summary: "Transmit MIDI aftertouch messages"
signal: false
url: "https://docs.cycling74.com/reference/touchout/"
package: "Max"
see_also: ["touchin", "midiout"]
---
# touchout

Transmit MIDI aftertouch messages

## Description

Transmits MIDI aftertouch values to a MIDI device.

## Arguments

### port[symbol] optional

Specifies the port (a-z) for transmitting MIDI aftertouch messages. Channel numbers greater than 16 received in the right inlet will be wrapped around to stay within the 1-16 range. If there is no argument, [touchout](https://docs.cycling74.com/reference/touchout) initially transmits out port  a , on MIDI channel 1.

### port-channel[list] optional

A letter and number combination (separated by a space) indicates a port and a specific MIDI channel on which to transmit aftertouch messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

### device[symbol] optional

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

In left inlet: The number is transmitted as an aftertouch value on the specified channel and port. Numbers are limited between 0 and 127.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored as the channel number on which to transmit the aftertouch messages.

Arguments:

- channel
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### anything

Performs the same function as  port  without need for the word, "port".

Arguments:

- port
  [list]

### (mouse)

Double-clicking on a [touchout](https://docs.cycling74.com/reference/touchout) object shows a pop-up menu for choosing a MIDI port or device.

### port

The word  port , followed by a letter  a-z  or the name of a MIDI input port or device, sets the port from which the object receives incoming pitch bend messages. The word  port  is optional and may be omitted. The name 'none' can be used to prevent the object from transmitting MIDI messages on any port.

Arguments:

- port
  [symbol]

## Output

### (MIDI)

There are no outlets. The output is a MIDI aftertouch message transmitted directly to the object's MIDI output port.

## See Also

| Name | Description |
| --- | --- |
| [touchin](https://docs.cycling74.com/reference/touchin) | Receive MIDI aftertouch values |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
