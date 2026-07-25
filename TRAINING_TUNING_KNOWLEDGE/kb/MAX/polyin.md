---
type: max
name: "polyin"
summary: "Received MIDI poly pressure"
signal: false
url: "https://docs.cycling74.com/reference/polyin/"
package: "Max"
see_also: ["midiin", "polyout"]
---
# polyin

Received MIDI poly pressure

## Arguments

### port[symbol] optional

Specifies the port from which to receive incoming MIDI messages. If there is no argument, [polyin](https://docs.cycling74.com/reference/polyin) receives from all channels on all ports.

### device[symbol] optional

The name of a MIDI input device may be used as the first argument to specify the port. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

### port-channel[list] optional

A letter and number combination (separated by a space) indicates a port and a specific MIDI channel on which to receive polyphonic key pressure messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

### key-channel[list] optional

A number and number combination (separated by a space) indicates a specific key and a specific MIDI channel on which to receive the polyphonic key pressure message. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

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

Performs the same function as  port  but without need for the word, "port".

Arguments:

- MIDI-input-port (a through z)
  [list]

### (mouse)

Double-clicking on a [polyin](https://docs.cycling74.com/reference/polyin) object shows a pop-up menu for choosing a MIDI port or device.

### (MIDI)

The [polyin](https://docs.cycling74.com/reference/polyin) object receives its input from a MIDI poly pressure message received from a MIDI input device.

### port

The word  port , followed by a letter  a-z  or the name of a MIDI input port or device, sets the port from which the object receives incoming program change messages. The word  port  is optional and may be omitted. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

Arguments:

- port
  [symbol]

## Output

### int

Out left outlet: The number is the pressure value of the incoming polyphonic key pressure message.

Out 2nd outlet: The number is the pitch value (key number) of the incoming message.

If a specific channel number is included in the argument, there are only two outlets. If there is no channel number specified by the argument, [polyin](https://docs.cycling74.com/reference/polyin) will have a third outlet, on the right, which will output the channel number of the incoming note-on message.

## See Also

| Name | Description |
| --- | --- |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [polyout](https://docs.cycling74.com/reference/polyout) | Send MIDI poly pressure |
