---
type: mc
name: "mc.seq~"
summary: "Signal-driven event sequencer  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.seq~/"
package: "MC"
see_also: ["phasor~", "techno~"]
---
# mc.seq~

Signal-driven event sequencer (multichannel)

## Description

The [seq~](https://docs.cycling74.com/reference/seq~) object is an event sequencer that is driven by a signal input. [seq~](https://docs.cycling74.com/reference/seq~) can be used to create looping sequences of control data that are synchronized to a [phasor~](https://docs.cycling74.com/reference/phasor~).

#### Discussion

It is optimized for continuous ramp input, but any signal passing through any range of values will work. Sequence events can be recorded in real-time or inserted with the  add  message. [seq~](https://docs.cycling74.com/reference/seq~) can contain any number of sequences, but only one at a time is active for playback and recording.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes information about the [seq~](https://docs.cycling74.com/reference/seq~) object's current sequence number, mode of operation (record, overdub, play) and total number of current events to be printed in the Max window.

### int

Same as  anything .

Arguments:

- input
  [int]

### float

Same as  anything .

Arguments:

- input
  [float]

### list

Same as  anything .

Arguments:

- input
  [list]

### anything

The [seq~](https://docs.cycling74.com/reference/seq~) object is used to record and play back messages. All events received in the inlet are stored according to the current value of the input signal. Any message can be sequenced except for commands to the [seq~](https://docs.cycling74.com/reference/seq~) object itself. The example shows a simple way to work around this limitation.

Note: [seq~](https://docs.cycling74.com/reference/seq~) can be used to sequence MIDI data if the MIDI input stream is converted into lists of MIDI events. This conversion is necessary to avoid outputting a corrupted MIDI stream which would occur if only the raw int messages of a MIDI stream were sequenced individually and the [seq~](https://docs.cycling74.com/reference/seq~) object were not doing a simple forward linear playback.

Arguments:

- input
  [list]

### add

The word  add , followed by an int, a float and a message, inserts a Max event specified by the message at the time specified by the float for the sequence number specified by the int. (e.g.,  add 2 0.5 honk  will insert the message  honk  to be played at the halfway point of sequence 2.)

Arguments:

- sequence-name (symbol), start time (float), optional end time (float) and Max-Event (message)
  [list]

### clear

The word  clear , followed by the name of a sequence, erases the sequence. The message  clear all  erases all current sequences.

### delete

The word  delete , followed by an symbol that specifies a sequence name, a float and a message, deletes a Max event or events specified by the message at the time specified by the float for the sequence name specified by the symbol. An additional end time may also be specified. Here are some examples:

 delete mysequence 5. : delete all the events at time 5 in mysequence.

 delete mysequence 6.5 8. : delete all the events between time 6.5 and 8 in mysequence.

 delete mysequence -1. 99. explosion : delete only the event explosion wherever it occurs.

Arguments:

- sequence-number (int), time (float), and Max-Event (message)
  [list]

### dump

Causes the contents of the current stored event sequence to be sent out the middle outlet. The word  dump , followed by a number, outputs only the sequence designated by the number.

Arguments:

- sequence-number (int)
  [int]

### erase

Synonym for  clear .

### offset

The word  offset  followed by a number will offset the numbering of sequences by the specified number.

Arguments:

- number-to-offset-sequence-numbering
  [int]

### overdub

The word  overdub , followed by 1, causes [seq~](https://docs.cycling74.com/reference/seq~) to begin Max event recording of the current sequence (set by the  seqnum  message) in "overdub" mode. Recording begins at the current point of the loop and wraps around at the point where the input signal reaches 1, continuing to record as the signal passes its original value. The message  overdub 0  turns off overdub mode.

Arguments:

- overdub-enable-flag (0 or 1)
  [int]

### play

The word  play , followed by 1, causes [seq~](https://docs.cycling74.com/reference/seq~) to begin Max event playback of the current sequence (set by the  seqnum  message) at the point of the loop specified by the current value of the signal input.  play 0  turns off playback. By default, playback is off.

Arguments:

- playback-enable-flag (0 or 1)
  [int]

### read

Reads a text file containing Max event sequences created using the [seq~](https://docs.cycling74.com/reference/seq~) object's  write  message into the memory of the. [seq~](https://docs.cycling74.com/reference/seq~) object. If no symbol argument appears after the word  read , a standard open file dialog is opened showing available text files. The word  read , followed by a symbol, reads the file whose filename corresponds to the symbol into the [seq~](https://docs.cycling74.com/reference/seq~) object's memory without opening the dialog box.

Arguments:

- filename
  [symbol]

### record

The word  record , followed by 1, causes [seq~](https://docs.cycling74.com/reference/seq~) to begin recording events into the current sequence (set by the  seqnum  message) at the point of the loop specified by the current value of the signal input.  record 0  turns off recording. Recording is off by default.

Arguments:

- playback-enable-flag (0 or 1)
  [int]

### seq

Performs the same function as  seqnum .

Arguments:

- sequence (int or symbol)
  [int]

### seqnum

The word  seqnum , followed by a number or symbol, sets the current Max event sequence being recorded or played back.

Arguments:

- sequence (int or symbol)
  [int]

### signal

An input signal whose output is between 0. and 1.0 (usually the output of a [phasor~](https://docs.cycling74.com/reference/phasor~)) is used to drive the event sequencer.

### symbol

Same as  anything .

Arguments:

- input
  [symbol]

### write

Saves the contents of all current Max event sequences into a text file. A standard file dialog is opened for naming the file. The word  write , followed by a symbol, saves the file, using the symbol as the filename, in the same folder as the patch containing the [seq~](https://docs.cycling74.com/reference/seq~) object. If the patch has not yet been saved, the [seq~](https://docs.cycling74.com/reference/seq~) file is saved in the same folder as the Max application.

Arguments:

- filename
  [symbol]

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### any message

Out left outlet: When playback is enabled with the  play 1  message, the [seq~](https://docs.cycling74.com/reference/seq~) object outputs all events recorded at the time specified by the input signal.

### list

Out right outlet: The dump message will cause the [seq~](https://docs.cycling74.com/reference/seq~) object to output the contents of a specified sequence to be output in the form of a list consisting of an int which specifies the sequence number, a float which specifies the signal value associated with that point in time, and the int, float, symbol or list to be output at that time.

## See Also

| Name | Description |
| --- | --- |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [techno~](https://docs.cycling74.com/reference/techno~) | Signal-driven step sequencer |
