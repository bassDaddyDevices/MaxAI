---
type: max
name: "detonate"
summary: "Play a score of note events"
signal: false
url: "https://docs.cycling74.com/reference/detonate/"
package: "Max"
see_also: ["follow", "seq"]
---
# detonate

Play a score of note events

## Description

Provides score playback managed using Max messages. The score may be loaded from a MIDI file, or generated using Max functions. The score is not limited to MIDI notes and values; any information can be stored and played back with [detonate](https://docs.cycling74.com/reference/detonate).

#### Discussion

When [detonate](https://docs.cycling74.com/reference/detonate) receives a  start  message or a  startat  message in the left inlet, it sends out the delta time of its starting note event (or of the note after the found note, in the case of  startat ). After that, each time [detonate](https://docs.cycling74.com/reference/detonate) receives a  next  message, it sends out all the other note data for that event, and the delta time of the next event, progressing through the score. Thus, the numbers coming out the left outlet can be used to control the playback rhythm, by delaying for the specified time and then triggering the  next  message.

When [detonate](https://docs.cycling74.com/reference/detonate) receives an  nth  message (or receives a number, while stopped) in the left inlet, it uses that information as an index number (starting at index number 0 for the first note event) and sends out all note data for the indexed event. Instead of sending the note's delta time out the left outlet, however, it sends the start time of the note--the total time since the beginning of the score.

After [detonate](https://docs.cycling74.com/reference/detonate) has received a  follow  or  followat  message in the left inlet, if a number is received in the 2nd inlet that matches the pitch of the current note in the score (or one of the two notes immediately after it), all the data for the matched note is sent out, except for the delta time.

## Arguments

### label[symbol] optional

Supplies a name for the object. Any [detonate](https://docs.cycling74.com/reference/detonate) objects with the same name argument will share the same event data.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Performs the same function as  next .

### int

After a  record  message has been received, all numbers received are treated as parameters of a note event.

In left inlet: The delta time (delay), in milliseconds, since the previous recorded event. This denotes the "inter-onset interval --the time between the beginnings of notes--which effectively determines the rhythm in which the events are recorded. This need not necessarily be the true time in which they occur; [detonate](https://docs.cycling74.com/reference/detonate) believes any (non-negative) delta time it receives.

When [detonate](https://docs.cycling74.com/reference/detonate) receives a number in the left inlet while recording, it treats the number as the inter-onset interval (the time elapsed since the previous event), combines it with the numbers most recently received in the other inlets, and records them together as a note event. As with most Max objects, the numbers received in the other inlets are stored for use in subsequent note events triggered by the receipt of a number in the leftmost inlet.

When [detonate](https://docs.cycling74.com/reference/detonate) has received a  follow  message, a subsequent number in the 2nd inlet is treated as the key number (pitch) of a note. If the number is the same as the pitch of the current note in the score (or a nearby note), the information recorded for that note--except for the delta time--is sent out.

When [detonate](https://docs.cycling74.com/reference/detonate) is neither recording nor following, a number in the left inlet has the same effect as the  nth  message.

Arguments:

- parameter
  [int]

### (inlet1)

In 2nd inlet: The number is treated as the key number (pitch) of the note. If no key number has ever been received,  60  is used by default.

Arguments:

- pitch
  [int]

### (inlet2)

In 3rd inlet: The velocity of the note. If the velocity is 0--indicating a note-off-- the event will be treated as the end of an earlier note-on the same key, and will determine the duration of that earlier note. If no velocity number has ever been received, it is  64  by default.

Arguments:

- velocity
  [int]

### (inlet3)

In 4th inlet: In lieu of a note-off message, a note duration can be supplied as part of the note-on event. If no duration value has ever been received, and no note-off event is received to end the note, a duration of  10  milliseconds is used by default.

Arguments:

- duration
  [int]

### (inlet4)

In 5th inlet: The MIDI channel of the note. If no channel has ever been specified, notes are recorded on channel 1.

Arguments:

- channel
  [int]

### (inlet5)

In 6th inlet: The number of a track on which to record the note event. Overdub recording is not possible with [detonate](https://docs.cycling74.com/reference/detonate), but each recorded note can be tagged with a track number for storing separate tracks of notes internally. If no track number has ever been received, notes are recorded on track 1.

Arguments:

- track
  [int]

### (inlet6)

In 7th inlet: An "extra" number, which can be used for any purpose, attached to the note event. This number can be used to provide an additional event parameter, or to serve as a control value in sync with the note. If no number has ever been received in this inlet, it is recorded as  0  by default.

Arguments:

- extra
  [int]

### (inlet7)

In right inlet: A second "extra" number.

Arguments:

- extra-2
  [int]

### float

Converted to  int .

Arguments:

- parameter
  [float]

### list

The first number in the list is used as the delta time, and the other numbers are treated as if they had been received in the other inlets, respectively from left to right.

Arguments:

- event-values
  [list]

### clear

Erases the contents of [detonate](https://docs.cycling74.com/reference/detonate).

### (mouse)

Double-clicking on the [detonate](https://docs.cycling74.com/reference/detonate) object in a locked patcher opens a graphical editing window for editing the stored [detonate](https://docs.cycling74.com/reference/detonate) data.

### delay

The message  delay  followed by a number will move the entire sequence of recorded note values over with the first note of the sequence beginning at the specified number.

Arguments:

- offset
  [int]

### export

Same as  write .

Arguments:

- time
  [int]
- file-format
  [int]

### follow

Causes [detonate](https://docs.cycling74.com/reference/detonate) to behave like a score reader, comparing incoming pitch information to the events stored in its score. When a key number is received in the 2nd (pitch) inlet, and it is the same as the pitch of the current note in the score, [detonate](https://docs.cycling74.com/reference/detonate) sends out the information recorded for that event--except for the delta time--and then moves ahead to the next note event.

Arguments:

- pitch
  [int]

### followat

The word  followat , followed by a pitch, a velocity, and a MIDI channel number, causes [detonate](https://docs.cycling74.com/reference/detonate) to look for a note event with those attributes in its stored score. If such a note is found, [detonate](https://docs.cycling74.com/reference/detonate) commences score-following from the next event onward. If not, it simply prints  detonate: note not found  in the Max Console.

Arguments:

- pitch
  [int]
- velocity
  [int]
- channel
  [int]

### import

Same as  read .

Arguments:

- filename
  [list]

### mute

Permits the selective muting of note events that meet specific criteria. The word  mute  must be followed by an event parameter number, a parameter value, and a value of  1  or  0  signifying "mute" or "unmute".

Arguments:

- event-parameter
  [int]
- parameter-value
  [int]
- mute-flag
  [int]

### next

Once playback of the score has been started with a  start  message,  next  sends out the event information (except the delta time) for the current note in the score, then sends out the delta time for the next note. That delta time can in turn be used as a delay time before sending another  next  message to detonate. When  next  is received on the last note of the score, there is no note following that one, so a unique value of -1  is sent out the left outlet to signal the end of the score. If a  next  message is received while the score is not being played back, [detonate](https://docs.cycling74.com/reference/detonate) simply prints the message  not playing  in the Max Console.

### nth

The word  nth , followed by a number, sends out the note information of the event in the score indicated by the number. (Events are numbered beginning with 0.) In place of the delta time for the event, the (cumulative) starting time of the event is sent out the left outlet.

Arguments:

- event
  [int]

### open

See the  (mouse)  message.

### params

The word  params , followed by three numbers, modifies the score-following behavior of [detonate](https://docs.cycling74.com/reference/detonate) for cases when the received pitch does not match the pitch of the current note in the score. The first number tells [detonate](https://docs.cycling74.com/reference/detonate) how many errors to tolerate before moving ahead in the score. The second number tells how many milliseconds to move ahead in the score when too many errors have occurred. The third number, if non-zero, tells [detonate](https://docs.cycling74.com/reference/detonate) to treat a received pitch that is an octave too high or too low as if it were a match. For example, the message  params 3 1000 1  means to allow three successive errors (with octave displacements considered to be a match) before moving ahead one second in the score and resuming. By default, [detonate](https://docs.cycling74.com/reference/detonate) allows 2 errors before moving ahead 200 milliseconds, and does not consider octave pitch displacements to be a match for the stored note.

Arguments:

- tolerance
  [int]
- advance
  [int]
- octave-match
  [int]

### read

The word  read  by itself opens a dialog for loading in a standard MIDI file as contents of the [detonate](https://docs.cycling74.com/reference/detonate) score. If  read  is followed by the name of a MIDI file in Max's search path, that file is read in directly without opening a dialog box. The  read  message can also be followed by a number which--if non-zero--causes the time values in the file to be interpreted as milliseconds rather than as bars, beats and ticks at a certain tempo. If the number is 0 or not present, the times are read as bars and beats.

Arguments:

- filename
  [list]

### record

In left inlet: Begins recording numbers coming in the inlets, treating them as parameters of note events to be recorded. The onset of an event is recorded each time a number is received in the left inlet.

### restore

Same as  record .

### setparam

The message  setparam  followed by nine list elements will set the parameters of the object much like entering the information into the object's inspector. The first element in the list is a number and signifies which parameter to edit. The remaining elements are the desired settings listed, from left to right, as the "parameter name", the "display mode", the "minimum value", the "maximum value", the "default value", the "graph interval", the "default scaling", and the "Display MIDI note number" flag.

Arguments:

- parameter
  [number]
- name
  [symbol]
- display-mode
  [int]
- minimum
  [int]
- maximum
  [int]
- default
  [int]
- interval
  [int]
- scaling
  [int]
- note-number
  [int]

### start

Begins playing back the score, by simply sending out the first delta time. Once playback of the score has been started,  next  messages can be used to send out the next event information.

### startat

The word  startat , followed by a pitch, a velocity, and a MIDI channel number, causes [detonate](https://docs.cycling74.com/reference/detonate) to look for a note event with those attributes in its stored score. If such a note is found, [detonate](https://docs.cycling74.com/reference/detonate) sends out the delta time of the next event, and a subsequent  next  message will refer to that next event. If no such note is found, [detonate](https://docs.cycling74.com/reference/detonate) simply prints  detonate: note not found  in the Max Console.

Arguments:

- pitch
  [int]
- velocity
  [int]
- channel
  [int]

### stop

Stops [detonate](https://docs.cycling74.com/reference/detonate) from recording, playing, or following. It is not necessary to stop detonate before switching directly between  record ,  start , and  follow .

### unmute

The word  unmute , followed by an event parameter number and a parameter value, undoes an earlier  mute  of the same criterion. For example,  unmute 4 10  has the same meaning as  mute 4 10 0 .

Arguments:

- parameter
  [int]
- value
  [int]

### unmuteall

Undoes the effects of all previous  mute  messages.

### wclose

Closes a previously opened editing window.

### write

Opens a dialog for saving the contents of [detonate](https://docs.cycling74.com/reference/detonate) as a standard MIDI file. The word  write  may optionally be followed by up to two numbers. If the first number is non-zero, the file will be saved with time represented in milliseconds rather than as bars, beats, and ticks in a certain tempo. If the number is 0 or not present, the file is saved as beats. The second number indicates the MIDI file format: 0 (all notes on a single track) o multi-track format, using the track parameter to separate the notes). The contents of [detonate](https://docs.cycling74.com/reference/detonate) are also saved as part of the patch, when the patch is saved.

Arguments:

- filename
  [symbol]
- time
  [int]
- file-format
  [int]

### writemax

The message  writemax  followed by a symbol, saves the patch as a Max text file named after the symbol.

Arguments:

- filename
  [symbol]

## Output

### int

Out left outlet: When a  start ,  startat , or subsequent  next  message is received in the left inlet, the delta time of the next note event is sent out. When the last event in the score is played by a  next  message, there is no note following that one, so a unique delta time of -1  is sent out to signal that the last note has been played.

When an  nth  message is received in the left inlet (or an  int  if [detonate](https://docs.cycling74.com/reference/detonate) is stopped), the starting time of the specified note is sent out.

Out 2nd outlet: In response to an  nth  message, or an  int  while [detonate](https://docs.cycling74.com/reference/detonate) is stopped, or a  next  message while playing back, or a matched pitch while following, the pitch of the note is sent out.

Out 3rd outlet: The velocity of the note.

Out 4th outlet: The duration of the note.

Out 5th outlet: The MIDI channel of the note.

Out 6th outlet: The track number of the note.

Out 7th outlet: An extra value associated with the note.

Out right outlet: A second extra value associated with the note.

## See Also

| Name | Description |
| --- | --- |
| [follow](https://docs.cycling74.com/reference/follow) | Compare a live performance to a recorded performance |
| [seq](https://docs.cycling74.com/reference/seq) | Sequencer for recording and playing MIDI data |
