---
type: max
name: "rtin"
summary: "Receive MIDI real time messages"
signal: false
url: "https://docs.cycling74.com/reference/rtin/"
package: "Max"
see_also: ["clocker", "metro", "midiin", "seq"]
---
# rtin

Receive MIDI real time messages

## Description

Receives and outputs MIDI real time messages transmitted from a specified MIDI input device.

## Arguments

### port[symbol] optional

Specifies the port (a-z) from which to receive incoming MIDI real time messages. If there is no argument, [rtin](https://docs.cycling74.com/reference/rtin) receives from port  a  (or the first input port listed in the  MIDI Setup  dialog.)

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

Double-clicking on an [rtin](https://docs.cycling74.com/reference/rtin) object shows a pop-up menu for choosing a MIDI port or device.

### (MIDI)

The [rtin](https://docs.cycling74.com/reference/rtin) object receives its input from a MIDI real-time message received from a MIDI input device.

### port

The word  port , followed by a letter  a-z  or the name of a MIDI input port or device, sets the port from which the object receives incoming MIDI messages. The word  port  is optional and may be omitted. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

Arguments:

- MIDI-port
  [symbol]

## Output

### int

MIDI real time messages (MIDI clock, start, stop, and continue) received from the specified port are sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [clocker](https://docs.cycling74.com/reference/clocker) | Report elapsed time, at regular intervals |
| [metro](https://docs.cycling74.com/reference/metro) | Output a bang message at regular intervals |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [seq](https://docs.cycling74.com/reference/seq) | Sequencer for recording and playing MIDI data |
