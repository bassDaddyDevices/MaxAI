---
type: max
name: "midiout"
summary: "Transmit raw MIDI data"
signal: false
url: "https://docs.cycling74.com/reference/midiout/"
package: "Max"
see_also: ["midiformat", "midiin", "midiinfo", "midiparse", "midiselect", "mpeconfig", "mpeformat", "mpeparse", "noteout", "polymidiin", "sxformat", "xbendout", "xnoteout"]
---
# midiout

Transmit raw MIDI data

## Description

Transmits raw MIDI data to a specified port.

## Arguments

### port[symbol] optional

Specifies the port (a-z) for transmitting MIDI data. If there is no argument, [midiout](https://docs.cycling74.com/reference/midiout) transmits out port  a  (or the first output port listed in the MIDI Setup dialog.)

### device[symbol] optional

The name of a MIDI output device may be used as the first argument to specify the port. The name 'none' can be used to prevent the object from transmitting MIDI messages on any port.

## Attributes

### matchport[int]: 0

If the  port  argument doesn't match an existing port or device name, set the object's MIDI port to 'none'.

### name[symbol]

Set the object's MIDI port based on a device name. The attribute will attempt to do a case-sensitive partial string match based on the attribute's value.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The number is transmitted as a byte of a MIDI message to the specified port.

Arguments:

- byte
  [int]

### float

Converted to  int .

Arguments:

- message
  [float]

### list

The numbers are transmitted sequentially as individual bytes of a MIDI message to the specified port.

Arguments:

- bytes
  [list]

### anything

Performs the same function as  port .

Arguments:

- port
  [list]

### (mouse)

Double-clicking on a [midiout](https://docs.cycling74.com/reference/midiout) object shows a pop-up menu for choosing a MIDI port or device.

### port

The word  port , followed by a letter  a-z  or the name of a MIDI output port or device, specifies the port used to transmit the MIDI messages. The word  port  is optional and may be omitted. The name 'none' can be used to prevent the object from transmitting MIDI messages on any port.

Arguments:

- port
  [symbol]

## Output

### (MIDI)

There are no outlets. The output is a byte of a MIDI message transmitted directly to the object's MIDI output port.

## See Also

| Name | Description |
| --- | --- |
| [midiformat](https://docs.cycling74.com/reference/midiformat) | Prepare data in the form of a MIDI message |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [midiinfo](https://docs.cycling74.com/reference/midiinfo) | Fill a pop-up menu with MIDI device names |
| [midiparse](https://docs.cycling74.com/reference/midiparse) | Interpret raw MIDI data |
| [midiselect](https://docs.cycling74.com/reference/midiselect) | Select and interpret raw MIDI data |
| [mpeconfig](https://docs.cycling74.com/reference/mpeconfig) | Configure a MIDI device that supports Multidimensional Polyphonic Expression (MPE) messages |
| [mpeformat](https://docs.cycling74.com/reference/mpeformat) | Prepare data in the form of a Multidimensional Polyphonic Expression (MPE) MIDI message |
| [mpeparse](https://docs.cycling74.com/reference/mpeparse) | Interpret raw MPE MIDI data |
| [noteout](https://docs.cycling74.com/reference/noteout) | Transmit MIDI note messages |
| [polymidiin](https://docs.cycling74.com/reference/polymidiin) | Output Multidimensional Polyphonic Expression (MPE) MIDI data |
| [sxformat](https://docs.cycling74.com/reference/sxformat) | Prepare MIDI system exclusive messages |
| [xbendout](https://docs.cycling74.com/reference/xbendout) | Format extra precision MIDI pitch bend messages |
| [xnoteout](https://docs.cycling74.com/reference/xnoteout) | Format MIDI note messages with release velocity |
