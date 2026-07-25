---
type: max
name: "ctlout"
summary: "Transmit MIDI controller messages"
signal: false
url: "https://docs.cycling74.com/reference/ctlout/"
package: "Max"
see_also: ["bendout", "ctlin", "midiout", "noteout", "xbendout"]
---
# ctlout

Transmit MIDI controller messages

## Description

Transmits MIDI continuous controller values to a MIDI device.

## Arguments

### port[symbol] optional

Specifies the port (a-z) for transmitting MIDI control messages. If there is no argument, [ctlout](https://docs.cycling74.com/reference/ctlout) initially transmits out port a, on channel 1. When a port is specified by a letter argument, channel numbers greater than 16 received in the right inlet will be wrapped around to stay within the 1-16 range.

### device[symbol] optional

The name of a MIDI output device may be used as the first argument to specify the port. The name 'none' can be used to prevent the object from transmitting MIDI messages on any port.

### ctrllr-channel[list] optional

Following the (optional) port argument, the next argument is an initial value for the controller number to be used in control messages transmitted by [ctlout](https://docs.cycling74.com/reference/ctlout). Controller numbers are automatically limited between 0 and 127. If there is no controller number specified, the initial controller number is 1.

Following the controller number argument is an initial value for the channel number on which to transmit control messages. If the channel argument is not present, [ctlout](https://docs.cycling74.com/reference/ctlout) initially transmits control messages on channel 1. In order for this argument to be used, a controller number argument must precede it.

If a port has been specified with a letter argument, channel numbers greater than 16 will be wrapped around to stay within the 1-16 range. If no port argument is present, the channel number specifies both the port and the channel. The exact meaning of the channel number argument depends on the channel offset specified for each port in the MIDI Setup dialog.

## Attributes

### matchport[int]: 0

If the  port  argument doesn't match an existing port or device name, set the object's MIDI port to 'none'.

### name[symbol]

Set the object's MIDI port based on a device name. The attribute will attempt to do a case-sensitive partial string match based on the attribute's value.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: The number is used as the control value, and [ctlout](https://docs.cycling74.com/reference/ctlout) transmits a MIDI control change message. Numbers are limited between 0 and 127.

Arguments:

- input
  [int]

### (inlet1)

In middle inlet: The number is stored as the controller number of the control change messages transmitted by [ctlout](https://docs.cycling74.com/reference/ctlout). Numbers are limited between 0 and 127.

Arguments:

- controller
  [int]

### (inlet2)

In right inlet: The number is stored as the channel number on which to transmit the control messages.

Arguments:

- channel
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### anything

Performs the same function as  port .

Arguments:

- port
  [list]

### (mouse)

Double-clicking on a [ctlout](https://docs.cycling74.com/reference/ctlout) object shows a pop-up menu for choosing a MIDI port or device.

### port

In left inlet: The word  port , followed by a letter  a-z  or the name of a MIDI output port or device, specifies the port used to transmit MIDI control messages. The word  port  is optional and can be omitted. The name 'none' can be used to prevent the object from transmitting MIDI messages on any port.

Arguments:

- port
  [symbol]

## Output

### (MIDI)

There are no outlets. The output is a MIDI control message transmitted directly to the object's MIDI output port.

## See Also

| Name | Description |
| --- | --- |
| [bendout](https://docs.cycling74.com/reference/bendout) | Send MIDI pitch bend messages |
| [ctlin](https://docs.cycling74.com/reference/ctlin) | Output received MIDI control values |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [noteout](https://docs.cycling74.com/reference/noteout) | Transmit MIDI note messages |
| [xbendout](https://docs.cycling74.com/reference/xbendout) | Format extra precision MIDI pitch bend messages |
