---
type: max
name: "mpeparse"
summary: "Interpret raw MPE MIDI data"
signal: false
url: "https://docs.cycling74.com/reference/mpeparse/"
package: "Max"
see_also: ["midiin", "midiformat", "midiparse", "mpeconfig", "mpeformat", "polymidiin"]
---
# mpeparse

Interpret raw MPE MIDI data

## Description

Separates raw Multidimensional Polyphonic Expression (MPE) MIDI bytes into standard message types.

## Arguments

None.

## Attributes

### hires[int]: 0

The hires attribute is used to support high-resolution pitch bend scaling. When the attribute is set to 0, [mpeparse](https://docs.cycling74.com/reference/mpeparse) will accept and output pitch bend integer values in the standard MIDI range of 0 to 127. When the attribute is set to 1, it accepts high resolution MIDI data and outputs float values in the range of -1 to 1. When the attribute is set to 2, it accepts high resolution MIDI data and outputs integer values in the range of -8192 to 8191 (standard 14-bit MIDI high resolution pitch bend range).

Possible values:

0 = 'Off (0-127)'
(
Standard 8-bit MIDI pitch bend range (default)
)
1 = 'Float (-1 to 1)'
(
Uses pitch bend messages in the audio signal range
)
2 = '14-bit Fixed (-8192 to 8191)'
(
Standard 14-bit MIDI high resolution pitch bend range
)

### index[int]: 0

Set mpeparse to output only on the specified voice number (from 1 to 15).

### strict[int]: 0

Enforce MPE Scope

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Clears the [mpeparse](https://docs.cycling74.com/reference/mpeparse) object's memory of any partial MPE MIDI message received up to that point.

### int

Numbers received in the inlet are treated as bytes of a MIDI message (usually from a [midiin](https://docs.cycling74.com/reference/midiin) or [polymidiin](https://docs.cycling74.com/reference/polymidiin) object). The status byte determines the outlet which will be used to output the data bytes.

Arguments:

- byte
  [int]

### float

Converted to  int .

Arguments:

- byte
  [float]

### mpeevent

The word 'mpeevent' followed by 6 integers, which specify the Zone First Channel, Zone Index, Voice Number, Channel Number, MIDI Message Number, and Data.

Arguments:

- MPE-messages
  [list]

## Output

### int

Out 4th outlet: The number is a program change.

Out 5th outlet: The number is an aftertouch (channel pressure) value.

Out 6th outlet: The number is a pitch bend value.

Out 7th outlet: The number is the voice number (-1 if global).

Out 8th outlet: The number is the Zone First Channel.

Out 9th outlet: The number is the Zone Index (-1 if global).

### list

Out leftmost outlet: A note-on/note-off message. The first number is a pitch value and the second number is a velocity value.

Out 2nd outlet: A polyphonic key pressure message. The first number is an aftertouch (pressure) value and the second number is a pitch value (key number).

Out 3rd outlet: A control message. The first number is a control value and the second number is a controller number.

### list

Out rightmost outlet: The MPE Event Message. The MPE event message is a list composed of the symbol  mpeevent , followed by 6 integers which specify the Zone First Channel, Zone Index, Voice Number, Channel Number, MIDI Message Number, and Data. This message can be sent to a patch encapsulated in a [poly~](https://docs.cycling74.com/reference/poly~) object using the [polymidiin](https://docs.cycling74.com/reference/polymidiin) object.

## See Also

| Name | Description |
| --- | --- |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [midiformat](https://docs.cycling74.com/reference/midiformat) | Prepare data in the form of a MIDI message |
| [midiparse](https://docs.cycling74.com/reference/midiparse) | Interpret raw MIDI data |
| [mpeconfig](https://docs.cycling74.com/reference/mpeconfig) | Configure a MIDI device that supports Multidimensional Polyphonic Expression (MPE) messages |
| [mpeformat](https://docs.cycling74.com/reference/mpeformat) | Prepare data in the form of a Multidimensional Polyphonic Expression (MPE) MIDI message |
| [polymidiin](https://docs.cycling74.com/reference/polymidiin) | Output Multidimensional Polyphonic Expression (MPE) MIDI data |
