---
type: max
name: "midiparse"
summary: "Interpret raw MIDI data"
signal: false
url: "https://docs.cycling74.com/reference/midiparse/"
package: "Max"
see_also: ["borax", "midiin", "midiinfo", "midiparse", "midiselect", "mpeconfig", "mpeformat", "mpeparse", "noteout", "polymidiin", "sxformat", "xbendout", "xnoteout"]
---
# midiparse

Interpret raw MIDI data

## Description

Separates raw MIDI bytes into standard message types. This object works particularly well formatting the output of the  midiin  and  seq  objects.

## Arguments

None.

## Attributes

### hires[int]: 0 >= 7.2.0

The hires attribute is used to support high-resolution pitch bend scaling. When the attribute is set to 0 (default), [midiparse](https://docs.cycling74.com/reference/midiparse) will accept and output pitch bend integer values in the standard MIDI range of 0 to 127. When the attribute is set to 1, it accepts high resolution MIDI data and outputs float values in the range of -1 to 1. When the attribute is set to 2, it accepts high resolution MIDI data and outputs integer values in the range of -8192 to 8191 (standard 14-bit MIDI high resolution pitch bend range).

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

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Clears the [midiparse](https://docs.cycling74.com/reference/midiparse) object's memory of any partial MIDI message received up to that point.

### int

Numbers received in the inlet are treated as bytes of a MIDI message (usually from a [seq](https://docs.cycling74.com/reference/seq) or [midiin](https://docs.cycling74.com/reference/midiin) object). The status byte determines the outlet which will be used to output the data bytes.

Arguments:

- byte
  [int]

### float

Converted to  int .

Arguments:

- byte
  [float]

## Output

### int

Out 4th outlet: The number is a program change.

Out 5th outlet: The number is an aftertouch (channel pressure) value.

Out 6th outlet: The number is a pitch bend value.

Out 7th outlet: The number is the MIDI channel number.

### list

Out leftmost outlet: A note-on message. The first number is a pitch value and the second number is a velocity value.

Out 2nd outlet: A polyphonic key pressure message. The first number is a key (note) number and the second number is an aftertouch (pressure) value.

Out 3rd outlet: A control message. The first number is the controller number and the second number is the controller value.

### list

Out rightmost outlet: A formatted  midievent  message for use with the [vst~](https://docs.cycling74.com/reference/vst~) object.

## See Also

| Name | Description |
| --- | --- |
| [borax](https://docs.cycling74.com/reference/borax) | Report note-on and note-off information |
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
