---
type: max
name: "ctlin"
summary: "Output received MIDI control values"
signal: false
url: "https://docs.cycling74.com/reference/ctlin/"
package: "Max"
see_also: ["bendin", "ctlout", "midiin", "notein", "rtin", "xbendin"]
---
# ctlin

Output received MIDI control values

## Description

Output the value from a specific controller number and MIDI channel.

## Arguments

### port[symbol] optional

Specifies the port (a-z) from which to receive incoming control messages. If there is no letter present as an argument, [ctlin](https://docs.cycling74.com/reference/ctlin) can receive from all ports.

### device[symbol] optional

The name of a MIDI input device may be used as the first argument to specify the port. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

### ctrllr-channel[list] optional

Following the (optional) port argument, the next argument is a single controller number to be recognized by [ctlin](https://docs.cycling74.com/reference/ctlin). If there is no controller number, or if the argument is a negative number, [ctlin](https://docs.cycling74.com/reference/ctlin) recognizes all controller numbers. If a single controller number is specified in the argument, the outlet which normally sends the controller number is unnecessary, and is not created.

Following the controller number argument is a single channel number on which to receive control messages. If the channel argument is not present, [ctlin](https://docs.cycling74.com/reference/ctlin) receives control messages on all channels. In order for this argument to be used, a controller number argument must precede it. To specify a channel number without specifying a controller number, use -1  for the controller number.

If a single channel number is specified as an argument, the outlet which normally sends the channel number is unnecessary, and is not created. If a port has been specified with a letter argument, channel numbers greater than 16 will be wrapped around to stay within the 1-16 range. If no port argument is present, a channel number can be used in place of a letter and number combination. The exact meaning of the channel number argument depends on the channel offset specified for each port in the MIDI Setup dialog.

## Attributes

### matchport[int]: 0

If the  port  argument doesn't match an existing port or device name, set the object's MIDI port to 'none'.

### name[symbol]

Set the object's MIDI port based on a device name. The attribute will attempt to do a case-sensitive partial string match based on the attribute's value.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Performs the same function as  port .

Arguments:

- port
  [list]

### (mouse)

Double-clicking on a [ctlin](https://docs.cycling74.com/reference/ctlin) object shows a pop-up menu for choosing a MIDI port or device.

### (MIDI)

[ctlin](https://docs.cycling74.com/reference/ctlin) receives its input from a MIDI control change message received from a MIDI input device.

### port

The word  port , followed by a letter  a -  z  or the name of a MIDI input port or device, sets the port from which the object receives incoming control messages. The word  port  is optional and may be omitted. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

Arguments:

- port
  [symbol]

### set

The word  set , followed by a number from 0 to 127, specifies a single controller number to be paid attention to by the [ctlin](https://docs.cycling74.com/reference/ctlin) object. If the [ctlin](https://docs.cycling74.com/reference/ctlin) object was created with no argument,  set  with an argument of -1  will cause the object to listen for all controller numbers (otherwise,  set -1  will be ignored).

Arguments:

- controller
  [int]

## Output

### int

Out left outlet: The number is the control value of an incoming MIDI control change message.

If a specific controller number is not specified as an argument, the controller number is sent out the 2nd outlet.

If a specific channel number is not included in the argument, the channel number is sent out an additional, right, outlet.

## See Also

| Name | Description |
| --- | --- |
| [bendin](https://docs.cycling74.com/reference/bendin) | Output MIDI pitch bend values |
| [ctlout](https://docs.cycling74.com/reference/ctlout) | Transmit MIDI controller messages |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [notein](https://docs.cycling74.com/reference/notein) | Receive MIDI note messages |
| [rtin](https://docs.cycling74.com/reference/rtin) | Receive MIDI real time messages |
| [xbendin](https://docs.cycling74.com/reference/xbendin) | Interpret extra precision MIDI pitch bend values |
