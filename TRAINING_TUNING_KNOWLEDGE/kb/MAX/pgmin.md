---
type: max
name: "pgmin"
summary: "Receive MIDI program changes"
signal: false
url: "https://docs.cycling74.com/reference/pgmin/"
package: "Max"
see_also: ["midiin", "pgmout"]
---
# pgmin

Receive MIDI program changes

## Arguments

### port[symbol] optional

Specifies the port (a-z) from which to receive incoming program change messages. If there is no argument, [pgmin](https://docs.cycling74.com/reference/pgmin) receives from all channels on all ports.

### device[symbol] optional

The name of a MIDI input device may be used as the first argument to specify the port. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

### port-channel[list] optional

A letter (a-z) and number combination (separated by a space) indicates a port and a specific MIDI channel on which to receive program change messages. Channel numbers greater than 16 will be wrapped around to stay within the 1-16 range.

### channel[int] optional

A number alone can be used in place of a letter and number combination. The exact meaning of the channel number argument depends on the channel offset specified for each port in the MIDI Setup dialog.

## Attributes

### matchport[int]: 0

If the  port  argument doesn't match an existing port or device name, set the object's MIDI port to 'none'.

### name[symbol]

Set the object's MIDI port based on a device name. The attribute will attempt to do a case-sensitive partial string match based on the attribute's value.

### zerobased[int]: 0

When enabled, use program change values from  0  to  127 . By default, [pgmin](https://docs.cycling74.com/reference/pgmin) accepts values from 1-128.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Performs the same function as  port  but without need for the word, "port".

Arguments:

- port
  [list]

### (mouse)

Double-clicking on a [pgmin](https://docs.cycling74.com/reference/pgmin) object shows a pop-up menu for choosing a MIDI port or device.

### (MIDI)

The [pgmin](https://docs.cycling74.com/reference/pgmin) object receives its input from a MIDI program message received from a MIDI input device.

### port

The word  port , followed by a letter  a-z  or the name of a MIDI input port or device, sets the port from which the object receives incoming program change messages. The word  port  is optional and may be omitted. The name 'all' can be used to enable the reception of MIDI messages from any port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

Arguments:

- port
  [symbol]

## Output

### int

If a specific channel number is included in the argument, there is only one outlet. The output is the incoming program number on the specified channel and port. Note: The [pgmin](https://docs.cycling74.com/reference/pgmin) object always adds 1 to the incoming program number. Thus, an incoming program change value of 32 will come out the outlet of [pgmin](https://docs.cycling74.com/reference/pgmin) as 33.

If there is no channel number specified by the argument, [pgmin](https://docs.cycling74.com/reference/pgmin) will have a second outlet, on the right, which will output the channel number of the incoming program change message.

## See Also

| Name | Description |
| --- | --- |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [pgmout](https://docs.cycling74.com/reference/pgmout) | Send MIDI program changes |
