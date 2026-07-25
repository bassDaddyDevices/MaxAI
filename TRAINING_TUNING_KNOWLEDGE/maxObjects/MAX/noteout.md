---
type: max
name: "noteout"
summary: "Transmit MIDI note messages"
signal: false
url: "https://docs.cycling74.com/reference/noteout/"
package: "Max"
see_also: ["ctlout", "midiout", "notein", "nslider", "xbendout", "xnoteout"]
---
# noteout

Transmit MIDI note messages

## Description

Transmits note-on and note-off messages to a MIDI device.

## Arguments

### port[symbol] optional

Specifies the port (a-z) for transmitting MIDI note messages. Channel numbers greater than 16 received in the right inlet will be wrapped around to stay within the 1-16 range. If there is no argument, [noteout](https://docs.cycling74.com/reference/noteout) initially transmits out port  a , on MIDI channel 1.

### port-channel[list] optional

A letter and number combination (separated by a space) indicates a port and a specific MIDI channel on which to transmit note messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

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

In left inlet: The number is the pitch value of a MIDI note message transmitted on the specified channel and port. Numbers are limited between 0 and 127.

Arguments:

- input
  [int]

### (inlet1)

In middle inlet: The number is stored as the velocity of a note message, to be used with pitch values received in the left inlet. Numbers are limited between 0 and 127. 0 is considered a note-off message, 1-127 are note-on messages.

Arguments:

- velocity
  [int]

### (inlet2)

In right inlet: The number is stored as the channel number on which to transmit the note-on messages.

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

Double-clicking on a [noteout](https://docs.cycling74.com/reference/noteout) object shows a pop-up menu for choosing a MIDI port or device.

### port

In left inlet: The word  port , followed by a letter  a-z  or the name of a MIDI output port or device, specifies the port used to transmit the MIDI messages. The word  port  is optional and may be omitted. The name 'none' can be used to prevent the object from transmitting MIDI messages on any port.

Arguments:

- port
  [symbol]

## Output

### (MIDI)

There are no outlets. The output is a MIDI note-on message transmitted directly to the object's MIDI output port.

## See Also

| Name | Description |
| --- | --- |
| [ctlout](https://docs.cycling74.com/reference/ctlout) | Transmit MIDI controller messages |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [notein](https://docs.cycling74.com/reference/notein) | Receive MIDI note messages |
| [nslider](https://docs.cycling74.com/reference/nslider) | Output numbers from a notation display |
| [xbendout](https://docs.cycling74.com/reference/xbendout) | Format extra precision MIDI pitch bend messages |
| [xnoteout](https://docs.cycling74.com/reference/xnoteout) | Format MIDI note messages with release velocity |
