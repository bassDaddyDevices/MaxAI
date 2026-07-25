---
type: max
name: "seq"
summary: "Sequencer for recording and playing MIDI data"
signal: false
url: "https://docs.cycling74.com/reference/seq/"
package: "Max"
see_also: ["coll", "follow", "mtr"]
---
# seq

Sequencer for recording and playing MIDI data

## Description

[seq](https://docs.cycling74.com/reference/seq) is a sequencer of raw MIDI bytes. You can control the speed of playback (only at the time you start it), read and write from files, and record from live MIDI input. See also [midiparse](https://docs.cycling74.com/reference/midiparse) and [midiformat](https://docs.cycling74.com/reference/midiformat) which you may need to get to and from raw MIDI.

## Arguments

### filename[symbol] optional

Specifies the name of a file to be read into [seq](https://docs.cycling74.com/reference/seq) automatically when the patch is loaded.

## Attributes

### overridetempo[int]: 0

If enabled (default =  0  (disabled)), the value of the tempo attribute will override any tempo requested by the sequence. In this case, tempo attribute will not be updated when a new file is read, nor when tempo meta messages appear in the sequence data. The meta messages will continue to be output from the right outlet of the [seq](https://docs.cycling74.com/reference/seq) object in this case.

### sequencetempo[float] read-only

The unmodified tempo of the sequence. This is a read-only value for convenience purposes.

### tempo[float]: 120.

If the [seq](https://docs.cycling74.com/reference/seq) has read a MIDI file with tempo information, the tempo attribute will reflect the current tempo at the current playback time. If the file has no tempo information, the default tempo is 120. (120 BPM). The tempo attribute can be modified to change the playback speed, but will be overwritten by tempo changes present in the MIDI file, and will be overwritten when a new MIDI file is read.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Starts playing the sequence stored in [seq](https://docs.cycling74.com/reference/seq).

### int

When [seq](https://docs.cycling74.com/reference/seq) is recording, numbers received in its inlet are interpreted as bytes of MIDI messages (usually from [midiformat](https://docs.cycling74.com/reference/midiformat) or [midiin](https://docs.cycling74.com/reference/midiin)). MIDI channel messages and system exclusive messages can be recorded by [seq](https://docs.cycling74.com/reference/seq), but [seq](https://docs.cycling74.com/reference/seq) does not respond directly to MIDI real time messages such as start, stop, MIDI clock, etc.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### addeventdelay

The word  addeventdelay , followed by a number, adds to the  delay  onset time, in milliseconds, of the first event in the recorded sequence. All events in the sequence are shifted so that the first event occurs at the specified onset time.

Arguments:

- onset-time (milliseconds)
  [float]

### append

Starts recording at the end of the stored sequence, without erasing the existing sequence.

### clear

Clears the sequence currently stored in the [seq](https://docs.cycling74.com/reference/seq) object.

### delay

The word  delay , followed by a number, sets the onset time, in milliseconds, of the first event in the recorded sequence. All events in the sequence are shifted so that the first event occurs at the specified onset time.

Arguments:

- onset-time (milliseconds)
  [int]

### dump

Opens a standard Open Document dialog box, to select a saved sequence or standard MIDI file. The selected file is opened as text in a new Untitled text window, which can be edited and saved.

### hook

The word  hook , followed by a float, multiplies all the event times in the stored sequence by that number. For example, if the number is 2.0, all event times will be doubled, and the sequence will play back twice as slowly. Multiplications can even be performed while the sequence is playing.

Arguments:

- event-time-multiplier
  [float]

### print

Prints the first sixteen events of the recorded sequence in the Max Console.

### read

With no arguments,  read  calls up the standard Open Document dialog box, so that a previously recorded sequence can be read into [seq](https://docs.cycling74.com/reference/seq), replacing the current sequence. With a symbol as an argument,  read  searches for a file with the specified name to read into the [seq](https://docs.cycling74.com/reference/seq) object.

Note: The [seq](https://docs.cycling74.com/reference/seq) object reads and writes both single track (format 0) and multi-track (format 1) standard MIDI files. It can also read and write text files in which each line consists of a start time in milliseconds (the time elapsed since the beginning of the sequence) followed by the (space-separated) bytes of a MIDI message recorded at that start time. For example,

0 144 60 112;

1000 144 60 0;

1500 192 31;

1500 144 60 112;

2500 144 60 0;

plays the note middle C on channel 1 for one second, then half a second later changes to program number 31 and plays middle C again for one second.

Arguments:

- filename
  [symbol]

### record

Starts recording MIDI messages received in the inlet.

### start

The word  start  by itself has the same effect as  bang . The word  start , followed by a number, plays the stored sequence at a tempo determined by the number. The message  start 1024  indicates normal tempo. If the number is  512 , [seq](https://docs.cycling74.com/reference/seq) plays the sequence at half the original recorded speed,  start 2048  plays it back at twice the original speed, and so on.

The message  start -1  starts the sequencer, but rather than follow Max's millisecond clock, [seq](https://docs.cycling74.com/reference/seq) waits for a  tick  message to advance its clock. See the  tick  message.

Arguments:

- tempo-multiplier
  [int]

### stop

Stops the sequencer if it is recording or playing. A  stop  message need not be received when switching directly from playing to recording, or vice-versa.

### tick

After [seq](https://docs.cycling74.com/reference/seq) has received a  start -1  message, it waits for  tick  messages to advance its clock. In order to play the sequence at its original recorded tempo, [seq](https://docs.cycling74.com/reference/seq) must receive 48  tick  messages per second. This is equivalent to 24  tick  s per quarter note (the standard for a MIDI Clock message) at a tempo of 120MM. By using  tick  messages to advance the sequencer, you can vary the tempo of playback or synchronize [seq](https://docs.cycling74.com/reference/seq) with another timing source (such as incoming MIDI Clock messages).

### write

Calls up the standard Save As dialog box, so that a recorded sequence can be saved as a separate file. If you want to edit the sequence with the text editor, check the Save As Text option in the dialog box. With a symbol as an argument,  write  will write a file with the specified name. A non-zero int argument (as a single argument, or following a filename argument) will cause the [seq](https://docs.cycling74.com/reference/seq) object to write a multi-track standard MIDI file (format 1).

Arguments:

- filename
  [symbol]
- format
  [int]

## Output

### bang

Out middle outlet: Indicates that [seq](https://docs.cycling74.com/reference/seq) has finished playing the current sequence. (The  bang  is sent out immediately before the final event of the sequence is played.)

### int

Out left outlet: When  bang  or  start  is received in the inlet, the sequence stored in [seq](https://docs.cycling74.com/reference/seq) is sent out the outlet in the form of individual MIDI bytes, usually to be sent to [midiparse](https://docs.cycling74.com/reference/midiparse) or [midiout](https://docs.cycling74.com/reference/midiout).

### list

Out right outlet: If the current sequence loaded by [seq](https://docs.cycling74.com/reference/seq) contains MIDI meta messages, these are sent from the right outlet, prepended with the word  meta , followed by the name of the meta metssage and the data.

Known meta messages are:  sequencenumber ,  text ,  copyright ,  sequenceortrackname ,  instrumentname ,  lyric ,  marker ,  cuepoint ,  midichannelprefix ,  endoftrack ,  tempo ,  smpteoffset ,  timesignature ,  keysignature ,  sequencerspecific . Any other messages will be identified as  unknown . The text messages ( text ,  copyright ,  sequenceortrackname ,  instrumentname ,  lyric ,  marker ,  cuepoint ) are converted to symbols. The  tempo  meta message is displayed as a BPM value.

## See Also

| Name | Description |
| --- | --- |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [follow](https://docs.cycling74.com/reference/follow) | Compare a live performance to a recorded performance |
| [mtr](https://docs.cycling74.com/reference/mtr) | Record and sequence messages |
