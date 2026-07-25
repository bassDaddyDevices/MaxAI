---
type: max
name: "touchin"
summary: "Receive MIDI aftertouch values"
signal: false
url: "https://docs.cycling74.com/reference/touchin/"
package: "Max"
see_also: ["touchout", "midiin"]
---
# touchin

Receive MIDI aftertouch values

## Description

Outputs from MIDI aftertouch (channel pressure) messages received from a MIDI input device.

## Arguments

### port[symbol] optional

Specifies the port (a-z) from which to receive incoming aftertouch messages. If there is no argument, [touchin](https://docs.cycling74.com/reference/touchin) receives on all channels from all ports.

### device[symbol] optional

The name of a MIDI input device may be used as the first argument to specify the port. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

### port-channel[list] optional

A letter and number combination (separated by a space) indicates a port and a specific MIDI channel on which to receive aftertouch messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

### channel[int] optional

A number alone can be used in place of a letter and number combination. The exact meaning of the channel number argument depends on the channel offset specified for each port in the  MIDI Setup  dialog.

## Attributes

### matchport[int]: 0

If the  port  argument doesn't match an existing port or device name, set the object's MIDI port to 'none'.

### name[symbol]

Set the object's MIDI port based on a device name. The attribute will attempt to do a case-sensitive partial string match based on the attribute's value.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Performs the same function as  port  without need for the word, "port".

Arguments:

- port
  [list]

### (mouse)

Double-clicking on a [polyin](https://docs.cycling74.com/reference/polyin) object shows a pop-up menu for choosing a MIDI port or device.

### (MIDI)

The [touchin](https://docs.cycling74.com/reference/touchin) object receives its input from a MIDI aftertouch message received from a MIDI input device.

### port

The word  port , followed by a letter  a-z  or the name of a MIDI input port or device, sets the port from which the object receives incoming pitch bend messages. The word  port  is optional and may be omitted. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

Arguments:

- port
  [symbol]

## Output

### int

If a specific channel number is included in the argument, there is only one outlet. The output is the incoming aftertouch value, from 0-127, on the specified channel and port.

If there is no channel number specified by the argument, [touchin](https://docs.cycling74.com/reference/touchin) will have a second outlet, on the right, which will output the channel number of the incoming aftertouch message.

## See Also

| Name | Description |
| --- | --- |
| [touchout](https://docs.cycling74.com/reference/touchout) | Transmit MIDI aftertouch messages |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
