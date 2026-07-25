---
type: max
name: "follow"
summary: "Compare a live performance to a recorded performance"
signal: false
url: "https://docs.cycling74.com/reference/follow/"
package: "Max"
see_also: ["seq", "detonate"]
---
# follow

Compare a live performance to a recorded performance

## Description

[follow](https://docs.cycling74.com/reference/follow) records pitches, or you can give it a MIDI file, in which case it looks at the file's note-ons and ignores other events. When it is "following" it outputs the index of the last note matched.

## Arguments

### filename[symbol] optional

The argument is the name of a file containing a previously recorded sequence, to be read into [follow](https://docs.cycling74.com/reference/follow) automatically when the patch is loaded.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Starts playing back the sequence stored in [follow](https://docs.cycling74.com/reference/follow).

### int

When [follow](https://docs.cycling74.com/reference/follow) is recording, the numbers received in its inlet are recorded as a sequence. The numbers may be bytes of MIDI messages (from [midiformat](https://docs.cycling74.com/reference/midiformat) or [midiin](https://docs.cycling74.com/reference/midiin)), exactly as with the [seq](https://docs.cycling74.com/reference/seq) object. However, [follow](https://docs.cycling74.com/reference/follow) differs from [seq](https://docs.cycling74.com/reference/seq) in its ability to record individual integers; with [follow](https://docs.cycling74.com/reference/follow) you can record notes as a single pitch value. Whether the performance is recorded as complete MIDI messages or just as note-on pitches, [follow](https://docs.cycling74.com/reference/follow) can effectively step through the note-on pitch numbers later, when following a performance.

Arguments:

- input
  [int]

### (inlet1)

When [follow](https://docs.cycling74.com/reference/follow) is following, numbers received in its inlet are compared to the numbers recorded in the sequence. When a number is received that matches the number in the sequence, [follow](https://docs.cycling74.com/reference/follow) sends out the index of that number.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### append

Starts recording at the end of the stored sequence, without erasing the existing sequence.

### delay

The word  delay , followed by a number, sets the onset time, in milliseconds, of the first event in the recorded sequence.

Arguments:

- onset-time (milliseconds)
  [int]

### dump

Calls up the standard Open Document dialog box, so that a previously recorded sequence or standard MIDI file can be opened as text and displayed in a new Untitled text window. This in fact has no direct effect on the [follow](https://docs.cycling74.com/reference/follow) object, but does allow you to view or edit a sequence, save your changes in a file, then load the new file into [follow](https://docs.cycling74.com/reference/follow) with a  read  message.

### follow

The  follow  message is the main feature that distinguishes [follow](https://docs.cycling74.com/reference/follow) from [seq](https://docs.cycling74.com/reference/seq). In effect, [follow](https://docs.cycling74.com/reference/follow) is like a score reader, comparing a live performance with the one previously stored.

The word  follow , and a number, causes [follow](https://docs.cycling74.com/reference/follow) to begin comparing incoming numbers to its own stored numbers, beginning at the specified index (the specified event in its own stored sequence). When [follow](https://docs.cycling74.com/reference/follow) is following, and a number is received that matches the number recorded in [follow](https://docs.cycling74.com/reference/follow), it sends out the index of that number.

The [follow](https://docs.cycling74.com/reference/follow) object is a forgiving score reader, and will try to follow along even if the incoming numbers do not exactly match the recorded sequence. If a number arrives that does not match the next number, or either of the two subsequent numbers in the sequence, [follow](https://docs.cycling74.com/reference/follow) does nothing. If a number arrives that matches a number up to two notes ahead in the sequence, [follow](https://docs.cycling74.com/reference/follow) assumes that the performer simply missed a note or two, and jumps ahead to the matched number.

Arguments:

- index
  [int]

### next

Causes [follow](https://docs.cycling74.com/reference/follow) to send out the index and the stored number it is currently trying to match, and move on to the next number.

### print

Prints the first few events of the recorded sequence in the Max Console.

### read

The word  read  with no arguments puts up a standard Open Document dialog box for choosing a sequence file to load into [follow](https://docs.cycling74.com/reference/follow). If  read  is followed by a symbol filename argument, the named file is located and loaded into [follow](https://docs.cycling74.com/reference/follow).

Arguments:

- filename
  [list]

### record

Starts recording integers received in the inlet.

### start

The word  start  by itself has the same effect as  bang . The word  start , followed by a number, plays the stored sequence at a tempo determined by the number. The message  start 1024  indicates normal tempo. If the number is  512 , [follow](https://docs.cycling74.com/reference/follow) plays the sequence at half the original recorded speed,  start 2048  plays it back at twice the original speed, and so on.

Arguments:

- tempo
  [int]

### stop

Stops [follow](https://docs.cycling74.com/reference/follow) from recording, playing, or following. A  stop  message need not be received before switching directly from recording to playing, following to recording, etc.

### write

Opens a standard Save As dialog box to save the [follow](https://docs.cycling74.com/reference/follow) sequence as a file.

Arguments:

- filename
  [list]

## Output

### int

Out left outlet: When [follow](https://docs.cycling74.com/reference/follow) is following, and the number received in the inlet matches the next number in the stored sequence (or one of the two numbers after that), the index of the matched number is sent out. The index of the next number is also sent out when a  next  message is received.

Out right outlet: When [follow](https://docs.cycling74.com/reference/follow) receives a  bang  or a  start  message, the recorded numbers are played back. When [follow](https://docs.cycling74.com/reference/follow) is following, and a  next  message is received, the next number in the recorded sequence is sent out.

## See Also

| Name | Description |
| --- | --- |
| [seq](https://docs.cycling74.com/reference/seq) | Sequencer for recording and playing MIDI data |
| [detonate](https://docs.cycling74.com/reference/detonate) | Play a score of note events |
