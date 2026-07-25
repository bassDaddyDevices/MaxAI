---
type: max
name: "mtr"
summary: "Record and sequence messages"
signal: false
url: "https://docs.cycling74.com/reference/mtr/"
package: "Max"
see_also: ["multislider", "seq", "rslider", "slider"]
---
# mtr

Record and sequence messages

## Description

Records messages and provides sequenced playback.

#### Discussion

[mtr](https://docs.cycling74.com/reference/mtr) acts as a multi-track recorder for any kind of message. The leftmost inlet of [mtr](https://docs.cycling74.com/reference/mtr) is a control inlet for all tracks. You can send the same messages to individual tracks as well. Each track records what comes into its inlet, and plays it back through the outlet directly below the inlet.

Time is measured in [mtr](https://docs.cycling74.com/reference/mtr) in two different ways, depending on whether the sync attribute is enabled or disabled. When sync is off, time units are in milliseconds. When sync is on, time units are in ticks. The remainder of this document will refer to "time", with the understanding that the type of time units depends on the sync setting.

## Arguments

### tracks[int] optional

Specifies the number of tracks in [mtr](https://docs.cycling74.com/reference/mtr). The number of tracks determines the number of inlets and outlets in addition to the leftmost inlet and outlet. Up to 128 tracks are possible. If there is no argument, there will only be one track.

## Attributes

### autostart[int]

Sets whether mtr plays all tracks when the transport is started. Default is 0 (off). This attribute can only be set globally, and does not apply to individual tracks.

### autostarttime[Time Value]: 0 ticks

Sets the autostarttime for mtr. If the autostart attribute is enabled, [mtr](https://docs.cycling74.com/reference/mtr) will play all tracks automatically at the time specified with this attribute. autostarttime can only be set globally, and does not apply to individual tracks.

### bindto[atom]

Bind individual UI objects to tracks without patch cords using pattr scripting names. If you assign a scripting name to a UI object, you can use that same name to set bindings to [mtr](https://docs.cycling74.com/reference/mtr). The typed in arguments for @bindto should be the track number followed by the scripting name of the desired object.

### embed[int]

When embed is set to 1, any recorded data is saved with the patcher. Note that recording, changing, or clearing data does not cause the patcher to be dirtied. This attribute can only be set globally, and does not apply to individual tracks.

### length[float]

Sets the length of all tracks in time units. This defines when the track will stop or loop. If the length is shorter than the original recorded length, events after the specified time are not played but are still present in the track. This attribute can be set via the inspector, attrui, as a typed-in argument, or as a message to the left inlet. When set this way, length is considered a global attribute and will overwrite any previously set track-specific length values.

If sent as a message to any non-left inlet, it sets the length of the track in time units that corresponds to the inlet. If a length value is subsequently set globally (see above), all track-specific values are overwritten.

### loop[int]

Turns looping off/on for all tracks. This attribute can be set via the inspector, attrui, as a typed-in argument, or as a message to the left inlet. When set this way, loop is considered a global attribute and will overwrite any previously set track-specific loop values.

If sent as a message to any non-left inlet, it sets the looping state of the track that corresponds to the inlet. If the loop value is subsequently set globally (see above), all track-specific values are overwritten.

### mode[int]

Enables automation playback mode, which when starting or restarting a track will play the last event before the selection (if a selection start point is non-zero). The default value is 0 (off). This attribute can be set via the inspector, attrui, as a typed-in argument, or as a message to the left inlet. When set this way, mode is considered a global attribute and will overwrite any track-specific settings that were previously specified.

If sent as a message to any non-left inlet, it enables/disables automation playback mode for the track that corresponds to the inlet. If the mode attribute is subsequently set globally (see above), all track-specific settings are overwritten.

### nextmode[int]

Sets how the  next  message behaves. When nextmode is set to 0, a  next  message after the last event will produce an event with a delta time of -1. When nextmode is set to 1 (loop mode), a  next  message after the last event will immediately loop back to the first event. This attribute can only be set globally, and does not apply to individual tracks.

Possible values:

0 = 'end'

1 = 'loop'

### quantize[Time Value]: 0 ticks

Sets playback quantization. This does not change the actual events in tracks, only how they are played. This attribute can only be set globally, and does not apply to individual tracks.

### selection[2 floats]

Sets the playback selection of all tracks. The selection is made in normalized units based on the length of the track, either defined via the length attribute, or if length is 0, the total recorded time. For example, "selection 0.25 0.75" will play the middle section of a track. When sending a  play  message to a track, it will start at the selection point, not the beginning. Playback is (subtly) affected by the mode attribute.

This attribute can be set via the inspector, attrui, as a typed-in argument, or as a message to the left inlet. When set this way, selection is considered a global attribute and will overwrite any previously set track-specific selection values.

If sent as a message to any non-left inlet, it sets the playback selection of the track that corresponds to the inlet. If the selection attribute is subsequently set globally (see above), all track-specific values are overwritten.

### speed[float]

Sets the global multiplier to be applied to the speed of all tracks, where 1.0 is the original speed. This allows you to have individual tracks running at different trackspeed s, and then apply a global speed change. This attribute can only be set globally, and does not apply to individual tracks.

### sync[int]

When sync is enabled, [mtr](https://docs.cycling74.com/reference/mtr) syncs to a named transport (“internal” is the default). When sync is off, time units are in milliseconds. When sync is on, time units are in ticks. This attribute can only be set globally, and does not apply to individual tracks.

### trackspeed[float]

Sets the speed of all tracks, with 1.0 being the originally recorded speed. The actual track speed is a combination of the mtr's speed attribute, the trackspeed, and the  timescale . This attribute can be set via the inspector, attrui, as a typed-in argument, or as a message to the left inlet. When set this way, trackspeed is considered a global attribute and will overwrite any previously set track-specific trackspeed values.

If sent as a message to any non-left inlet, it sets the speed of the track that corresponds to the inlet. If a trackspeed value is subsequently set globally (see above), all track-specific values are overwritten.

### transport[symbol]: internal

Sets the transport name. The default setting is "internal", which is the global transport. This attribute can only be set globally, and does not apply to individual tracks.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Just like the  info  message, sending a  bang  to the left inlet of [mtr](https://docs.cycling74.com/reference/mtr), results in a dictionary being sent out the left outlet with information about the current state of the object. Both global and track specific informtion is included in the dictionary. An entry that begins with "global\_" is the global setting for the specified attribute. If the same attribute has a track specific setting, that value will be listed under the track information.

### int

In any inlet other than the left inlet: If the track is currently being recorded, numbers received in that track's inlet are combined with a delta time (the amount of time elapsed since the previous event) and stored in [mtr](https://docs.cycling74.com/reference/mtr).

Arguments:

- input
  [int]

### float

In any inlet other than the left inlet: If the track is currently being recorded, numbers received in that track's inlet are combined with a delta time (the amount of time elapsed since the previous event) and stored in [mtr](https://docs.cycling74.com/reference/mtr).

Arguments:

- input
  [float]

### list

In any inlet other than the left inlet: If the track is currently being recorded, lists received in that track's inlet are stored in [mtr](https://docs.cycling74.com/reference/mtr), preceded by the delta time (the amount of time elapsed since the previous event). The maximum allowed length for a list is 4096 items.

Arguments:

- input
  [list]

### anything

In any inlet other than the left inlet: If the track is currently being recorded, symbols received in that track's inlet are stored in [mtr](https://docs.cycling74.com/reference/mtr), preceded by the delta time (the amount of time elapsed since the previous event).

Although [mtr](https://docs.cycling74.com/reference/mtr) can record individual bytes of MIDI messages received from [midiin](https://docs.cycling74.com/reference/midiin), it stores each byte with a separate delta time, and does not format the MIDI messages the way [seq](https://docs.cycling74.com/reference/seq) does. If you want to record complete MIDI messages and edit them later, [seq](https://docs.cycling74.com/reference/seq) is better suited for the task. On the other hand, [mtr](https://docs.cycling74.com/reference/mtr) is perfectly suited for recording sequences of numbers, lists, or symbols from virtually any object in Max: specialized MIDI objects such as [notein](https://docs.cycling74.com/reference/notein) or [pgmin](https://docs.cycling74.com/reference/pgmin), user interface objects such as [number box](https://docs.cycling74.com/reference/number), [slider](https://docs.cycling74.com/reference/slider), and [dial](https://docs.cycling74.com/reference/dial), or any other object.

In order for a file to be read into [mtr](https://docs.cycling74.com/reference/mtr) for playback, it must be in the proper format. An [mtr](https://docs.cycling74.com/reference/mtr) multi-track sequence can even be typed in a text file, provided it adheres to the format. The contents of the different tracks are listed in order in an [mtr](https://docs.cycling74.com/reference/mtr) file, and the format of each track is as follows. Note that a semicolon (; ) ends each line.

Line 1:  track <track number>;  (Track in which to store subsequent data)

Line 2, etc.:  <delta time> <message>;

 Last line:  end;  (End of this track's data)

Arguments:

- input
  [list]

### addevent

The word  addevent  followed by a list, absolute time and data, adds an event to a track at a specific time. For example, the message "addevent 1000 1" will add the event 1 at time 1000. This message can be sent while a track is recording, playing, or stopped. The message will only work in track-specific inlets, and cannot be sent to the left inlet.

Arguments:

- absolute time-data
  [list]

### clear

In left inlet: Erases the contents of [mtr](https://docs.cycling74.com/reference/mtr). The word  clear , followed by one or more track numbers, clears those tracks.

In other inlets: Erases the track that corresponds to the inlet.

Arguments:

- tracks
  [list]

### cleareventat

The word  cleareventat  followed by a list, absolute time and matching criteria, clears all events that exactly match the criteria at the specific time. Unlike  deleteeventat ,  cleareventat  does not delete the time occupied by the event. For example, if events are at time 1000, 2000, and 3000, and the event at 2000 is cleared, the next event remains at time 3000. This message can be sent while a track is recording, playing, or stopped. The message will only work in track-specific inlets, and cannot be sent to the left inlet.

Arguments:

- absolute time-matching criteria
  [list]

### definelengthandstop

In left inlet: Stops recording and sets the track’s length to the current recording time. The  stop  message, by contrast, does not set the track’s length; the total recorded length (available in the info dictionary) is defined by both messages and consists of the time between the start of the recording and the time of the final event recorded before  stop  or  definelengthandstop  is received. The word  definelengthandstop , followed by one or more tracks, stops and sets the length for those tracks.

In other inlets: Stops and sets the length of the track that corresponds to the inlet.

Arguments:

- tracks
  [list]

### delay

In left inlet: The word  delay , followed by a number, sets the first delta time value of each track to that number, so that all tracks begin playing back that amount of time after the  play  message is received.

In other inlets: Sets the initial delta time of the track that corresponds to the inlet.

Arguments:

- delay-time
  [int]

### deleteeventat

The word  deleteeventat  followed by a list, absolute time and matching criteria, deletes all events that exactly match the criteria at the specific time. The time occupied by the event is also deleted. "deleteeventat 1000" will delete all events at absolute time 1000 in the track. The message "deleteeventat 1000 3" will delete an event at absolute time 1000 containing 3. The event "3 4 5" will not be deleted because it does not match exactly. This message can be sent while a track is recording, playing, or stopped. The message will only work in track-specific inlets, and cannot be sent to the left inlet.

Arguments:

- absolute time-matching criteria
  [list]

### dictionary

The message  dictionary , followed by a name, will load that specific dictionary into [mtr](https://docs.cycling74.com/reference/mtr), including all events from each track sequence.

Arguments:

- dictionary name
  [symbol]

### dump

The message  dump , when sent to any inlet of [mtr](https://docs.cycling74.com/reference/mtr), sends a dictionary out the left outlet of [mtr](https://docs.cycling74.com/reference/mtr). Unlike the dictionary sent out from the  info  or  bang  messages, this dictionary contains individual events from each track sequence.

### first

In left inlet: The word  first , followed by a number, causes [mtr](https://docs.cycling74.com/reference/mtr) to wait that amount of time after a  play  message is received before playing back. Unlike  delay ,  first  does not alter the delta time value of the first event in a track, it just waits a certain time (in addition to the first delta time) before playing back from the beginning.

Arguments:

- wait-time
  [int]

### info

Just like  bang , sending the  info  message to the left inlet of [mtr](https://docs.cycling74.com/reference/mtr), results in a dictionary being sent out the left outlet with information about the current state of the object. Both global and track specific informtion is included in the dictionary. An entry that begins with "global\_" is the global setting for the specified attribute. If the same attribute has a track specific setting, that value will be listed under the track information.

### mute

In left inlet: Causes [mtr](https://docs.cycling74.com/reference/mtr) to stop producing output, while still continuing to "play" (still moving forward in the sequence). The word  mute , followed by one or more tracks, mutes those tracks.

In other inlets: Mutes the track that corresponds to the inlet.

Arguments:

- tracks
  [list]

### next

In left inlet: Causes each track to output only the next message in its recorded sequence. When a  next  message is received, the track number, delta time, and absolute time of each message being output are sent out the leftmost outlet as a list. The word  next , followed by one or more track numbers, outputs the next message stored in those tracks.

In other inlets: Outputs the next message stored on the track that corresponds to the inlet.

Arguments:

- tracks
  [list]

### play

In left inlet: Plays back all messages recorded earlier, sending them out the corresponding outlets in the same rhythm and at the same speed they were recorded. The word  play , followed by one or more track numbers, begins playing those tracks.

In other inlets: Plays back all messages on the track that corresponds to the inlet. When the  play  message is sent to specific track inlets you can give it two optional arguments: number of iterations and timescale. 100 is the original timescale. The message "play 3 200" will play the track three times, at twice the speed.

Arguments:

- tracks
  [list]

### playat

In left inlet: Starts playback of all messages at a specific point, which is specified in a normalized range from 0-1, where 0 is the beginning and 1 is the end. Messages are sent out the corresponding outlets in the same rhythm and at the same speed they were recorded.

In other inlets: Starts playback of all messages on the track that corresponds to the inlet. Playback stars at a specific point, which is specified in a normalized range from 0-1.

Arguments:

- position
  [float]

### playatms

In left inlet: Starts playback of all messages at a specific point, which is specified in milliseconds. Messages are sent out the corresponding outlets in the same rhythm and at the same speed they were recorded.

In other inlets: Starts playback of all messages on the track that corresponds to the inlet. Playback stars at a specific point, which is specified in milliseconds.

Arguments:

- milliseconds
  [float]

### read

In left inlet: Calls up the standard Open Document dialog box, so that a previously saved file can be read into [mtr](https://docs.cycling74.com/reference/mtr). Only .txt, .pat, and .json files can be loaded.

In other inlets: Opens a file containing only the track that corresponds to the inlet.

Arguments:

- filename
  [symbol]

### record

In left inlet: Begins recording all messages received in the other inlets. The word  record , followed by one or more track numbers, begins recording those tracks.

In other inlets: Begins recording messages on the track that corresponds to the inlet.

Arguments:

- tracks
  [list]

### rewind

In left inlet: Resets [mtr](https://docs.cycling74.com/reference/mtr) to the beginning of its recorded sequence. This command is used to return to the beginning of the sequence when stepping through messages with  next . To return to the beginning of a sequence while playing or recording, just repeat the  play  or  record  message. When [mtr](https://docs.cycling74.com/reference/mtr) is playing or recording, a  stop  message should precede a  rewind  message. The word  rewind , followed by one or more track numbers, returns to the beginning of those tracks.

In other inlets: Returns the pointer to the beginning of the track that corresponds to the inlet.

Arguments:

- tracks
  [list]

### stop

In left inlet: Stops [mtr](https://docs.cycling74.com/reference/mtr) when it is recording or playing. The word  stop , followed by one or more track numbers, stops those tracks.

In other inlets: Stops the track that corresponds to the inlet.

Arguments:

- tracks
  [list]

### timescale

In left inlet: Sets the timescale for all tracks. 100 is the original timescale, whereas 200 would be twice as fast. This message can be set while a track is playing. Please note that when a track is played again, the timescale is reset to 100. For this reason, use of this message is strongly discouraged in favor of the trackspeed attribute, which does not reset.

In other inlets: Sets the timescale for the track that corresponds to the inlet.

Arguments:

- timescale
  [float]

### touch

Turn touch automation recording off/on for the track that corresponds to the inlet. Sending the message "touch 1" to a specific inlet while a track is playing, overwrites the existing recording with new data received in the track’s inlet. Timing is unaffected. Sending the message "touch 0" to a specific inlet ends the touch automation recording, and any events from that point on in the track play as usual. The  touch  message only works when a track is already playing.

This message is for individual track inlets. To enable/disable touch automation recording on multiple tracks at once, use the  touchenable  and  touchdisable  messages, which are sent to the left inlet of [mtr](https://docs.cycling74.com/reference/mtr).

Arguments:

- off/on
  [int]

### touchdisable

In left inlet: Turns touch automation recording off for the specified tracks. Sending the message "touchdisable 2 3" ends touch automation recording on tracks 2 and 3. Any events from that point on in the tracks play as usual. This message is used in conjunction with the  touchenable  message. Timing is unaffected. The  touchdisable  message only works when a track is already playing.

Arguments:

- tracks
  [list]

### touchenable

In left inlet: Turns touch automation recording on for the specified tracks. Sending the message "touchenable 2 3" while a track is playing, overwrites the existing recording for tracks 2 and 3 with new data received in the tracks' inlets. Use the message  touchdisable  to stop touch automation recording. Timing is unaffected. The  touchenable  message only works when a track is already playing.

Arguments:

- tracks
  [list]

### unmute

In left inlet: Undoes any previously received  mute  messages. The word  unmute , followed by one or more track numbers, unmutes those tracks.

In other inlets: Unmutes the track that corresponds to the inlet.

Arguments:

- tracks
  [list]

### write

In left inlet: Calls up the standard Save As dialog box, allowing the contents of [mtr](https://docs.cycling74.com/reference/mtr) to be saved as a separate file. If the specified filename (given as an argument) ends in .json, a JSON format file is saved.

In other inlets: Writes a file containing only the track that corresponds to the inlet.

Arguments:

- filename
  [symbol]

### writejson

In left inlet: Calls up the standard Save As dialog box, allowing the contents of [mtr](https://docs.cycling74.com/reference/mtr) to be saved as a separate file, in JSON format. Unlike the  write  message,  writejson  writes times as floats, preserving the timing of events precisely.

In other inlets: Writes a file, in JSON format, containing only the track that corresponds to the inlet.

Arguments:

- filename
  [symbol]

## Output

### anything

Out all track outlets: When a  play  message is received in the leftmost inlet, the messages stored in each track are sent out the outlet of that track, in the same rhythm and at the same speed they were recorded. A  play  message received in the inlet of an individual track plays that particular track.

When a  next  message is received in the leftmost inlet, the next message in each track is sent out its corresponding outlet. The word  next , received in the inlet of an individual track, sends out the next message in that track.

### list

Out left outlet: Whenever a value is sent out in response to a  next  message, the track number, delta time, and absolute-time of that value are sent out the left outlet as a three-item list.

## See Also

| Name | Description |
| --- | --- |
| [multislider](https://docs.cycling74.com/reference/multislider) | Display data as sliders or a scrolling display |
| [seq](https://docs.cycling74.com/reference/seq) | Sequencer for recording and playing MIDI data |
| [rslider](https://docs.cycling74.com/reference/rslider) | Display or change a range of numbers |
| [slider](https://docs.cycling74.com/reference/slider) | Move a slider to output values |
