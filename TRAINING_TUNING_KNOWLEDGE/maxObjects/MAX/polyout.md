---
type: max
name: "polyout"
summary: "Send MIDI poly pressure"
signal: false
url: "https://docs.cycling74.com/reference/polyout/"
package: "Max"
see_also: ["midiout", "polyin"]
---
# polyout

Send MIDI poly pressure

## Arguments

### port[symbol] optional

Specifies the port for transmitting MIDI program change messages. When a letter argument is present, channel numbers greater than 16 received in the right inlet will be wrapped around to stay within the 1-16 range. If there is no argument, [polyout](https://docs.cycling74.com/reference/polyout) initially transmits out port a, on MIDI channel 1.

### port-channel[list] optional

A letter and number combination (separated by a space) indicates a port and a specific MIDI channel on which to transmit program change messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

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

In left inlet: The number has 1 subtracted from it and then is transmitted as a poly pressure value on the specified channel and port. Numbers are limited between 1 and 128, and are sent out as poly pressure values of 0 to 127.

Arguments:

- input
  [int]

### (inlet1)

In middle inlet: The number is stored as the key number, to be used with pressure values received in the left inlet. Numbers are limited between 0 and 127.

Arguments:

- key
  [int]

### (inlet2)

In right inlet: The number is stored as the channel number on which to transmit the program change messages.

Arguments:

- channel
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### anything

Performs the same function as  port  but without need for the word, "port".

Arguments:

- port
  [list]

### (mouse)

Double-clicking on a [polyout](https://docs.cycling74.com/reference/polyout) object shows a pop-up menu for choosing a MIDI port or device.

### port

The word  port , followed by a letter  a -  z  or the name of a MIDI output port or device, specifies the port used to transmit the MIDI messages. The word  port  is optional and may be omitted. The name 'none' can be used to prevent the object from transmitting MIDI messages on any port.

Arguments:

- port
  [symbol]

### list

In left inlet: The first number is the pressure value, the second number is the key number, and the third number is the channel, of a transmitted MIDI polyphonic key pressure message.

Arguments:

- value
  [int]
- key
  [int]
- channel
  [int]

## Output

### (MIDI)

There are no outlets. The output is a MIDI polyphonic key pressure message transmitted directly to the object's MIDI output port.

## See Also

| Name | Description |
| --- | --- |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [polyin](https://docs.cycling74.com/reference/polyin) | Received MIDI poly pressure |
