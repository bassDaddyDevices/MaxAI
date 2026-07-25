---
type: max
name: "pgmout"
summary: "Send MIDI program changes"
signal: false
url: "https://docs.cycling74.com/reference/pgmout/"
package: "Max"
see_also: ["midiout", "pgmin"]
---
# pgmout

Send MIDI program changes

## Arguments

### port[symbol] optional

Specifies the port for transmitting MIDI program change messages. When a letter argument is present, channel numbers greater than 16 received in the right inlet will be wrapped around to stay within the 1-16 range. If there is no argument, [pgmout](https://docs.cycling74.com/reference/pgmout) initially transmits out port a, on MIDI channel 1.

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

### zerobased[int]: 0

When enabled, output program change values from  0  to  127 . By default, [pgmout](https://docs.cycling74.com/reference/pgmout) outputs values from 1-128.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: The number has 1 subtracted from it and then is transmitted as a program change value on the specified channel and port. Numbers are limited between 1 and 128, and are sent out as program changes 0 to 127.

Arguments:

- input
  [int]

### (inlet1)

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

Double-clicking on a [pgmout](https://docs.cycling74.com/reference/pgmout) object shows a pop-up menu for choosing a MIDI port or device.

### port

The word  port , followed by a letter  a -  z  or the name of a MIDI output port or device, specifies the port used to transmit the MIDI messages. The word  port  is optional and may be omitted. The name 'none' can be used to prevent the object from transmitting MIDI messages on any port.

Arguments:

- port
  [symbol]

### list

In left inlet: The first number is the program number +1, and the second number is the channel of a MIDI program change message transmitted on the specified channel and port.

Arguments:

- input
  [list]

## Output

### (MIDI)

There are no outlets. The output is a MIDI program change message transmitted directly to the object's MIDI output port.

## See Also

| Name | Description |
| --- | --- |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [pgmin](https://docs.cycling74.com/reference/pgmin) | Receive MIDI program changes |
