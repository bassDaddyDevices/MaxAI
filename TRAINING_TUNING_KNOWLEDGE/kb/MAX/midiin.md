---
type: max
name: "midiin"
summary: "Output raw MIDI data"
signal: false
url: "https://docs.cycling74.com/reference/midiin/"
package: "Max"
see_also: ["xmidiin", "midiformat", "midiinfo", "midiparse", "mpeconfig", "mpeformat", "mpeparse", "noteout", "polymidiin", "sxformat", "xbendout", "xnoteout", "rtin", "sysexin", "xnotein", "xbendin"]
---
# midiin

Output raw MIDI data

## Description

Listens to a specified MIDI port and output the raw MIDI data received.

## Arguments

### port[symbol] optional

Specifies the port (a-z) from which to receive incoming MIDI messages. If there is no argument, [midiin](https://docs.cycling74.com/reference/midiin) receives from port  a  (or the first input port listed in the MIDI Setup dialog.)

### device[symbol] optional

The name of a MIDI input device may be used as the first argument to specify the port. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

## Attributes

### matchport[int]: 0

If the  port  argument doesn't match an existing port or device name, set the object's MIDI port to 'none'.

### name[symbol]

Set the object's MIDI port based on a device name. The attribute will attempt to do a case-sensitive partial string match based on the attribute's value.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Performs the same functions as  port .

Arguments:

- port
  [list]

### (mouse)

Double-clicking on a [midiin](https://docs.cycling74.com/reference/midiin) object shows a pop-up menu for choosing a MIDI port or device.

### (MIDI)

The [midiin](https://docs.cycling74.com/reference/midiin) object receives all MIDI messages from a MIDI input device.

### port

The word  port , followed by a letter  a -  z  or the name of a MIDI input port or device, sets the port from which the object receives incoming MIDI messages. The word  port  is optional and may be omitted. The name 'none' can be used to prevent the object from receiving MIDI messages from any port.

Arguments:

- port
  [symbol]

## Output

### int

All MIDI messages received from the specified port are sent out the outlet, byte-by-byte. Note that [midiin](https://docs.cycling74.com/reference/midiin) does not "clean up" any use of running status in the incoming MIDI stream.

## See Also

| Name | Description |
| --- | --- |
| [xmidiin](https://docs.cycling74.com/reference/xmidiin) | Output raw MIDI data |
| [midiformat](https://docs.cycling74.com/reference/midiformat) | Prepare data in the form of a MIDI message |
| [midiinfo](https://docs.cycling74.com/reference/midiinfo) | Fill a pop-up menu with MIDI device names |
| [midiformat](https://docs.cycling74.com/reference/midiformat) | Prepare data in the form of a MIDI message |
| [midiparse](https://docs.cycling74.com/reference/midiparse) | Interpret raw MIDI data |
| [mpeconfig](https://docs.cycling74.com/reference/mpeconfig) | Configure a MIDI device that supports Multidimensional Polyphonic Expression (MPE) messages |
| [mpeformat](https://docs.cycling74.com/reference/mpeformat) | Prepare data in the form of a Multidimensional Polyphonic Expression (MPE) MIDI message |
| [mpeparse](https://docs.cycling74.com/reference/mpeparse) | Interpret raw MPE MIDI data |
| [noteout](https://docs.cycling74.com/reference/noteout) | Transmit MIDI note messages |
| [polymidiin](https://docs.cycling74.com/reference/polymidiin) | Output Multidimensional Polyphonic Expression (MPE) MIDI data |
| [sxformat](https://docs.cycling74.com/reference/sxformat) | Prepare MIDI system exclusive messages |
| [xbendout](https://docs.cycling74.com/reference/xbendout) | Format extra precision MIDI pitch bend messages |
| [xnoteout](https://docs.cycling74.com/reference/xnoteout) | Format MIDI note messages with release velocity |
| [rtin](https://docs.cycling74.com/reference/rtin) | Receive MIDI real time messages |
| [sysexin](https://docs.cycling74.com/reference/sysexin) | Receive MIDI system exclusive messages |
| [xnotein](https://docs.cycling74.com/reference/xnotein) | Interpret MIDI note messages with release velocity |
| [xbendin](https://docs.cycling74.com/reference/xbendin) | Interpret extra precision MIDI pitch bend values |
