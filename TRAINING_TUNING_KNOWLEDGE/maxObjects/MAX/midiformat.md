---
type: max
name: "midiformat"
summary: "Prepare data in the form of a MIDI message"
signal: false
url: "https://docs.cycling74.com/reference/midiformat/"
package: "Max"
see_also: ["borax", "midiin", "midiinfo", "midiparse", "midiselect", "mpeconfig", "mpeformat", "mpeparse", "noteout", "polymidiin", "sxformat", "xbendout", "xnoteout"]
---
# midiformat

Prepare data in the form of a MIDI message

## Description

Numbers received in the inlets are used as data for MIDI messages. The data is formatted into a complete MIDI message (with the status byte determined by the inlet) and sent out the outlet as individual bytes.

## Arguments

### initial-MIDI-channel-number[int] optional

Sets an initial value for the channel number of the MIDI messages. Numbers greater than 16 are wrapped around to stay between 1 and 16. If there is no argument, the channel number is initially set to  1 .

### initial-MIDI-channel-number[float] optional

Converted to  int .

## Attributes

### hires[int]: 0 >= 7.2.0

The hires attribute is used to support high-resolution pitch bend scaling. When the attribute is set to 0, the pitch bend inlet will accept integer values in the standard MIDI range of 0 to 127. When the attribute is set to 1, it accepts float values in the audio signal range of -1 to 1. When the attribute is set to 2, it accepts integer values in the range of -8192 to 8191 (standard 14-bit MIDI high resolution pitch bend range).

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

### int

Function depends on inlet. See inlet entries,  in1   in2   in3   in4   in5   in6   in7 , for descriptions.

Arguments:

- value
  [int]

### (inlet1)

In leftmost inlet: The first number is a pitch value and the second number is a velocity value, to be formatted into a note-on message.

Arguments:

- pitch-value and velocity
  [list]

### (inlet2)

In 2nd inlet: The first number is an aftertouch (pressure) value and the second number is a pitch value (key number), to be formatted into a polyphonic key pressure message.

Arguments:

- aftertouch and pitch-value
  [list]

### (inlet3)

In 3rd inlet: The first number is a controller number and the second number is a control value, to be formatted into a control message.

Arguments:

- control-value and controller-number
  [list]

### (inlet4)

In 4th inlet: The value is formatted into a program change message.

Arguments:

- program-change-value
  [int]

### (inlet5)

In 5th inlet: The value is formatted into an aftertouch (channel pressure) message.

Arguments:

- aftertouch
  [int]

### (inlet7)

In rightmost inlet: The number is stored as the channel number of the MIDI messages. The actual value of the status byte is dependent on the channel. Numbers greater than 16 are wrapped around to stay between 1 and 16.

Arguments:

- MIDI-channel-number
  [int]

### float

Function depends on inlet. See inlet entries,  in1   in2   in3   in4   in5   in6   in7 , for descriptions.

Arguments:

- value
  [float]

### list

Function depends on inlet. See inlet entries,  in1   in2   in3   in4   in5   in6   in7 , for descriptions.

Arguments:

- value
  [int]

## Output

### int

Out left outlet: MIDI messages are sent out as individual bytes, for recording by the [seq](https://docs.cycling74.com/reference/seq) object or for transmission by the [midiout](https://docs.cycling74.com/reference/midiout) object.

### list

Out right outlet: A formatted  midievent  message for use with the [vst~](https://docs.cycling74.com/reference/vst~) object.

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
