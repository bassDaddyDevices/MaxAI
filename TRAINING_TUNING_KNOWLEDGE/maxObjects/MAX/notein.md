---
type: max
name: "notein"
summary: "Receive MIDI note messages"
signal: false
url: "https://docs.cycling74.com/reference/notein/"
package: "Max"
see_also: ["ctlin", "midiin", "noteout", "nslider", "rtin", "xbendin", "xnotein"]
---
# notein

Receive MIDI note messages

## Description

Receives its input from a MIDI note-on or note-off message sent by a MIDI input device.

## Arguments

### port[symbol] optional

Specifies the port (a-z) from which to receive incoming note messages. If there is no argument, [notein](https://docs.cycling74.com/reference/notein) receives from all channels on all ports.

### device[symbol] optional

The name of a MIDI input device may be used as the first argument to specify the port. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

### port-channel[list] optional

A letter and number combination (separated by a space) indicates a port and a specific MIDI channel on which to receive note messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

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

### anything

Performs the same function as  port  without the word, "port".

Arguments:

- port
  [list]

### (mouse)

Double-clicking on a [notein](https://docs.cycling74.com/reference/notein) object shows a pop-up menu for choosing a MIDI port or device.

### (MIDI)

The [notein](https://docs.cycling74.com/reference/notein) object receives its input from a MIDI note-on or note-off message received from a MIDI input device.

### port

The word  port , followed by a letter  a-z  or the name of a MIDI input port or device, sets the port from which the object receives incoming note messages. The word  port  is optional and may be omitted. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

Arguments:

- port
  [symbol]

## Output

### int

Out left outlet: The number is the pitch value of the incoming note message.

Out 2nd outlet: The number is the velocity of the incoming note-on message if non-zero, 0 for a note-off message. To receive release velocity, use [xnotein](https://docs.cycling74.com/reference/xnotein).

If a specific channel number is included in the argument, there are only two outlets. If there is no channel number specified by the argument, [notein](https://docs.cycling74.com/reference/notein) will have a third outlet, on the right, which will output the channel number of the incoming note message.

## See Also

| Name | Description |
| --- | --- |
| [ctlin](https://docs.cycling74.com/reference/ctlin) | Output received MIDI control values |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [noteout](https://docs.cycling74.com/reference/noteout) | Transmit MIDI note messages |
| [nslider](https://docs.cycling74.com/reference/nslider) | Output numbers from a notation display |
| [rtin](https://docs.cycling74.com/reference/rtin) | Receive MIDI real time messages |
| [xbendin](https://docs.cycling74.com/reference/xbendin) | Interpret extra precision MIDI pitch bend values |
| [xnotein](https://docs.cycling74.com/reference/xnotein) | Interpret MIDI note messages with release velocity |
