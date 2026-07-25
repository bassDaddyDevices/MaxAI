---
type: max
name: "bendin"
summary: "Output MIDI pitch bend values"
signal: false
url: "https://docs.cycling74.com/reference/bendin/"
package: "Max"
see_also: ["bendout", "ctlin", "midiin", "notein", "rtin", "xbendout", "xbendin"]
---
# bendin

Output MIDI pitch bend values

## Description

Outputs pitch bend values received from a MIDI device. The MIDI port and channel can be chosen with messages or by double-clicking on the object.

## Arguments

### port[symbol] optional

Specifies the port from which to receive incoming pitch bend messages. If there is no argument, [bendin](https://docs.cycling74.com/reference/bendin) receives from all channels on all ports.

### midi-device[symbol] optional

The name of a MIDI input device may be used as the first argument to specify the port. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

### port-and-channel[symbol] optional

A letter and number combination (separated by a space) indicates a port and a specific MIDI channel on which to receive pitch bend messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

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

See the  port  message

Arguments:

- arguments
  [list]

### (mouse)

Double-clicking on a [bendin](https://docs.cycling74.com/reference/bendin) object shows a pop-up menu for choosing a MIDI port or device.

### (MIDI)

The [bendin](https://docs.cycling74.com/reference/bendin) object receives its input from a MIDI pitch bend message received from a MIDI input device.

### port

The word  port , followed by a letter  a-z  or the name of an MIDI port or device, sets the port from which the object receives incoming pitch bend messages. The word  port  is optional and may be omitted. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

Arguments:

- MIDI-port
  [symbol]

## Output

### int

If a specific channel number is included in the argument, there is only one outlet. The output is the incoming pitch bend value from 0-127 (the most significant byte of the MIDI pitch bend message) on the specified channel and port.

If there is no channel number specified by the argument, [bendin](https://docs.cycling74.com/reference/bendin) will have a second outlet, on the right, which will output the channel number of the incoming pitch bend message.

## See Also

| Name | Description |
| --- | --- |
| [bendout](https://docs.cycling74.com/reference/bendout) | Send MIDI pitch bend messages |
| [ctlin](https://docs.cycling74.com/reference/ctlin) | Output received MIDI control values |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [notein](https://docs.cycling74.com/reference/notein) | Receive MIDI note messages |
| [rtin](https://docs.cycling74.com/reference/rtin) | Receive MIDI real time messages |
| [xbendout](https://docs.cycling74.com/reference/xbendout) | Format extra precision MIDI pitch bend messages |
| [xbendin](https://docs.cycling74.com/reference/xbendin) | Interpret extra precision MIDI pitch bend values |
