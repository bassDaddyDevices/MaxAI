---
type: max
name: "sysexin"
summary: "Receive MIDI system exclusive messages"
signal: false
url: "https://docs.cycling74.com/reference/sysexin/"
package: "Max"
see_also: ["midiin", "sxformat"]
---
# sysexin

Receive MIDI system exclusive messages

## Description

Receives MIDI system exclusive messages from a MIDI input device. It takes an optional argument for port selection. If a MIDI system exclusive message is received, [sysexin](https://docs.cycling74.com/reference/sysexin) outputs raw MIDI as integers.

## Arguments

### port[symbol] optional

Specifies the port (a-z) from which to receive incoming MIDI system exclusive messages. If there is no argument, [sysexin](https://docs.cycling74.com/reference/sysexin) receives from port  a  (or the first input port listed in the MIDI Setup dialog.)

### device[symbol] optional

The name of a MIDI input device may be used as the first argument to specify the port. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

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

- port
  [list]

### (mouse)

Double-clicking on a [sysexin](https://docs.cycling74.com/reference/sysexin) object shows a pop-up menu for choosing a MIDI port or device.

### (MIDI)

The [sysexin](https://docs.cycling74.com/reference/sysexin) object receives its input from a MIDI sysex message received from a MIDI input device.

### port

The word  port , followed by a letter  a-z  or the name of a MIDI input port or device, sets the port from which the object receives incoming MIDI messages. The word  port  is optional and may be omitted. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

Arguments:

- port
  [symbol]

## Output

### int

MIDI system exclusive messages received from the specified port are sent out the outlet, byte-by-byte.

## See Also

| Name | Description |
| --- | --- |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [sxformat](https://docs.cycling74.com/reference/sxformat) | Prepare MIDI system exclusive messages |
