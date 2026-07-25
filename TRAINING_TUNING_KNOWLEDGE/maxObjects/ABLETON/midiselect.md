---
type: ableton
name: "midiselect"
summary: "Select and interpret raw MIDI data"
signal: false
url: "https://docs.cycling74.com/reference/midiselect/"
package: "Max for Live"
see_also: ["midiparse", "borax", "midiformat", "midiin", "midiinfo"]
---
# midiselect

Select and interpret raw MIDI data

## Description

[midiselect](https://docs.cycling74.com/reference/midiselect) receives raw MIDI bytes and separates the input stream. MIDI data to be selected for output is set using object attributes. There is a separate data outlet associated with each MIDI data selection attribute. Any input data which is unselected will be sent out the object's eighth outlet.

#### Discussion

Note: Due to the nature of the MIDI coding, use of the  ch  attribute is cumulative:  *at least one*  channel needs to be specified; otherwise, all raw MIDI data will be sent out the 8th outlet.

## Arguments

None.

## Attributes

### bend[int]: 0

When then  bend  attribute is set to 1,  Pitch Bend  information is sent out the 6th outlet, otherwise the  Pitch Bend  is sent out the 8th outlet as  raw MIDI Data .

### ch[16 atoms]

The  ch  attribute allows you to specify which MIDI input  channels  will be selected. While you can choose input from all channels by instantiating the [midiselect](https://docs.cycling74.com/reference/midiselect) object the the argument  @ch all , you can also select specific channels (e.g., the argument  @ch 1 3 5  will only select MIDI information on the first, third and fifth channels).

### ctl[128 atoms]

The  ctl  attribute allows you to specify which MIDI  controller  messages will be selected. By default, no  controlers  are selected. You can select specific controlers to be filtered (e.g., the argument  @ctl 7 9 64  will select the controler 7 (Volume), 9 (Pan), 64 (Sustain Pedal)). To select all controllers, use the argument  @ctl all . To select no controllers (the default), use  @ctl none .

### hires[int]: 0 >= 8.1.6

An integer in the range 0 - 2 sets the range used for pitch bend messages by the [midiparse](https://docs.cycling74.com/reference/midiparse) object.

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

### note[128 atoms]

The  note  attribute allows you to specify which MIDI  note  messages will be selected. By default, no  notes  are selected. You can select specific notes to be filtered (e.g.,  @note 60 64 67  will select the C4, E4, G4 notes). To select all notes, use the argument  @note all . To select no notes (the default), use  @note none .

### pgm[int]: 0

When then  pgm  attribute is set to 1,  Program Change  information is sent out the 4th outlet. Otherwise, the  Program Change  is sent out the 8th outlet as  raw MIDI Data .

### poly[128 atoms]

The poly attribute allows you to specify which MIDI  poly pressure  will be selected. By default, no  poly pressure  is selected. You can select specific notes to be filtered (e.g.,  @poly 60 64 67  will select the C4, E4, G4 notes). To select all the notes, use the argument  @poly all . To select no notes (the default) use  @poly none .

### touch[int]: 0

When then  touch  attribute is set to 1,  After touch  data is sent out the 5th outlet. Otherwise, the  Aftertouch  is sent out the 8th outlet as  raw MIDI Data .

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Clears the [midiselect](https://docs.cycling74.com/reference/midiselect) object's memory of any partial MIDI messages received up to that point.

### int

Numbers received in the inlet (usually from a [seq](https://docs.cycling74.com/reference/seq) or [midiin](https://docs.cycling74.com/reference/midiin) object) are treated as bytes of a MIDI message. The status byte and the filtering attributes determine the outlet which will be used to output the data bytes.

Arguments:

- byte
  [list]

### float

Floating-point numbers received in the inlet are converted to integer values and treated as bytes of a MIDI message. The status byte and the filtering attributes determine the outlet which will be used to output the data bytes.

Arguments:

- byte
  [float]

## Output

### int

Out 4th outlet: The number is the program change.

Out 5th outlet: The number is the aftertouch (channel pressure) value.

Out 6th outlet: The number is the pitch bend value.

Out 7th outlet: The number is the MIDI channel number.

### list

Out leftmost outlet: A note-on message. The first number is a pitch value and the second number is the velocity value.

Out 2nd outlet: A polyphonic key pressure message. The first number is an aftertouch (pressure) value and the second number is the pitch value (key number).

Out 3rd outlet: A control message. The first number is a control value and the second number is the controller number.

## See Also

| Name | Description |
| --- | --- |
| [midiparse](https://docs.cycling74.com/reference/midiparse) | Interpret raw MIDI data |
| [borax](https://docs.cycling74.com/reference/borax) | Report note-on and note-off information |
| [midiformat](https://docs.cycling74.com/reference/midiformat) | Prepare data in the form of a MIDI message |
| [midiin](https://docs.cycling74.com/reference/midiin) | Output raw MIDI data |
| [midiinfo](https://docs.cycling74.com/reference/midiinfo) | Fill a pop-up menu with MIDI device names |
