---
type: msp
name: "poly~"
summary: "Manage polyphony/DSP for patchers"
signal: true
url: "https://docs.cycling74.com/reference/poly~/"
package: "MSP"
see_also: ["in", "in~", "out", "out~", "mc.poly~", "mcs.poly~", "patcher", "thispoly~", "param"]
---
# poly~

Manage polyphony/DSP for patchers

## Description

Use the [poly~](https://docs.cycling74.com/reference/poly~) to encapsulate a patcher inside an object box, to specify the patcher filename and the number of instances you want to load as arguments to the [poly~](https://docs.cycling74.com/reference/poly~) object, and to control object processing and routing in the loaded patcher instances.

#### Discussion

The [poly~](https://docs.cycling74.com/reference/poly~) object directs signals and events (messages) received in its inlets to [in](https://docs.cycling74.com/reference/in) and [in~](https://docs.cycling74.com/reference/in~) objects inside patcher instances, and handles the output of signals or events from instances of the [poly~](https://docs.cycling74.com/reference/poly~) object using the [out](https://docs.cycling74.com/reference/out) and [out~](https://docs.cycling74.com/reference/out~) objects.

## Arguments

### patcher-name[symbol] optional

The first argument must specify the name of a patcher to be loaded which already exists and is in the Max search path. A subpatch window is not automatically opened for editing when a patcher argument is supplied for the [poly~](https://docs.cycling74.com/reference/poly~) object.

### number-of-instances[int] optional

The number of patcher instances corresponds to the number of available "voices" This number can be any number between 1 and 1023, and may be dynamically changed by using the  voices  message.

### 'up' and up-sampling-factor[symbol] optional

Use the  up  argument followed by a number which is a power of two to upsample local DSP processing on the currently loaded patcher (e.g.,  up 2  specifies 88200 Hz at a sampling rate of 44100 Hz). Upsampling may be dynamically changed by using the  up  message.

### 'down' and down-sampling factor[symbol] optional

Use the  down  argument followed by a number which is a power of two to downsample local DSP processing on the currently loaded patcher (e.g.,  down 2  specifies 22050 Hz at a sampling rate of 44100 Hz). Downsampling may be dynamically changed by using the  down  message.

### 'args' and list-of-argument-values[symbol] optional

Use the argument  args  followed by an argument value to initialize any pound-sign arguments in the loaded patcher (e.g.,  args #1 ). If used, the  args  argument must be the last argument word used; everything which appears after the word  args  will be treated as an argument value.

## Attributes

### args[20 atoms]

When using messages to specify arguments for a [poly~](https://docs.cycling74.com/reference/poly~) object's loaded patch, the patch must be reloaded by setting the  patchername  attribute for new arguments to take effect after initial load.

### filterparams[int]: 0 >= 9.0.0

When enabled, Parameters defined via classical Parameter objects, like [live.dial](https://docs.cycling74.com/reference/live.dial) or [number](https://docs.cycling74.com/reference/number) with parameter\_enable turned on, will not appear in the top-level patcher's Parameter list. Parameters defined via the [param](https://docs.cycling74.com/reference/param) object will always be published to the top-level.

Filtered parameters will appear in a [poly~](https://docs.cycling74.com/reference/poly~)-local Parameter list, similar to how Parameters appear inside of the [amxd~](https://docs.cycling74.com/reference/amxd~) object.

Possible values:

0 = 'Off'

1 = 'Filter non-'param' Parameters'
(
Filter non- [param](https://docs.cycling74.com/reference/param) Parameters
)
Only Parameters defined by [param](https://docs.cycling74.com/reference/param) objects will appear in the top-level patcher's Parameter Window.

### legacynotemode[int]: 0 >= 8.0.0

When set to 1, legacynotemode allows note and midinote messages to use the old (pre Max 8) voice assignment algorithm, which continues to play voice 1. When set to 0, note and midinote messages cycle through the least recently used voice.

### midimode[int]: 0 >= 7.2.0

When midimode is set to '1', all MIDI messages sent to [poly~](https://docs.cycling74.com/reference/poly~) will be sent to all voices. Note that this does not apply to  mpeevent  messages. In order to send all  mpeevent  messages to all voices, use a '-1' value for the voice argument, eg: 'mpeevent 1 1 2 210 117' (an aftertouch message to all voices).

### mpemode[int]: 0 >= 7.2.0

When this attribute is set to '1', [poly~](https://docs.cycling74.com/reference/poly~) will perform direct voice allocation based on the voice argument of an mpeevent message.

### parallel[int]

When this attribute is set to enable parallel processing, the [poly~](https://docs.cycling74.com/reference/poly~) object enables the use of multiple threads to run audio processing for all patcher instances. If disabled [poly~](https://docs.cycling74.com/reference/poly~) runs all patcher instances in the audio processing thread. The DSP chain must be restarted whenever the parallel attribute is changed. This attribute is disabled it when Max is hosted by the Live application.

 **Note:**  At this time, you cannot specify a single subpatcher on a different core. When enabled, this attribute splits up the number of voices between the number of processors available. It is primarily intended for patches that use a significant amount of CPU within multiple voices of the same [poly~](https://docs.cycling74.com/reference/poly~) object, and the multithreading overhead is primarily useful for larger signal vector sizes (at least 32 or greater). Other situations will not benefit. Using the default threadcount (which is equal to the number of physical cores) is best.

### patchername[32 symbols]

Alias:
patchernames

Sets the filename(s) of a patcher file or files loaded into the [poly~](https://docs.cycling74.com/reference/poly~) object. The [poly~](https://docs.cycling74.com/reference/poly~) object can load different patchers on different voices, specified as arguments to the patchername/patchernames attribute. If there is no voices argument to [poly~](https://docs.cycling74.com/reference/poly~), the total number of patchers specified by the typed-in patchername attribute will be the number of voices; if there is a voices argument, then patchers are repeated in a cycle up to the voice number. You cannot increase the number of voices in [poly~](https://docs.cycling74.com/reference/poly~) by supplying more filenames to the patchername attribute than there are voices. However, you can use the voices attribute to increase the number of voices before setting the value of patchername.

### replicate[int]: 1 >= 8.0.0

Replicate Inputs

### resampling[int]

Toggles the use of high-quality resampling filters. These filters are enabled by default.

### steal[int]

Voice stealing enable causes the [poly~](https://docs.cycling74.com/reference/poly~) object sends the data from the  note  or  midinote  messages to instances that are still marked "busy"; this can result in clicks depending on how the instances handle the interruption. Voice stealing is disabled by default.

### target[int]

The [poly~](https://docs.cycling74.com/reference/poly~) instance that will receive subsequent messages (other than messages specifically used by the [poly~](https://docs.cycling74.com/reference/poly~) object itself) arriving at the [poly~](https://docs.cycling74.com/reference/poly~) object's inlets - for example, The message  target 2  routes messages to the second instance. If the  target  message specifies a value greater than the current number of instances (copies) of the loaded patcher, the message will be sent to the highest numbered instance (e.g., sending the message  target 2  to a [poly~](https://docs.cycling74.com/reference/poly~) object containing only a single instance will send subsequent messages to the first instance). The message  target 0  sends input to  *all*  instances, and using any negative number value with the  target  message will disable input to all instances.

### voices[int]

Number of Voices

### vs[int]

Specifies the signal vector size for the [poly~](https://docs.cycling74.com/reference/poly~) object's loaded patch. The signal vector size will be set on the next compilation of the DSP chain. The  vs  message does not force a recompilation of the DSP chain.  vs 0  specifies no fixed vector size. The default is the current signal vector size.

### zone[int]: 0 >= 7.2.0

Use this attribute to set the MPE 'zone' that the [poly~](https://docs.cycling74.com/reference/poly~) will listen to. The default is '0' (ignore zones).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends a bang to the patcher loaded into the [poly](https://docs.cycling74.com/reference/poly) object. The result of the message is determined by the loaded patcher.

### int

Performs functions which are specific to the user-designed [poly~](https://docs.cycling74.com/reference/poly~) patcher itself.

Arguments:

- input
  [int]

### float

Performs functions which are specific to the user-designed [poly~](https://docs.cycling74.com/reference/poly~) patcher itself.

Arguments:

- input
  [float]

### list

To send a message to a [poly~](https://docs.cycling74.com/reference/poly~) instance that starts with one of the words used to control the [poly~](https://docs.cycling74.com/reference/poly~) object itself, begin the message with the word  list . For example, the message  list target 2  sent to the left inlet of [poly~](https://docs.cycling74.com/reference/poly~) will output  target 2  out the outlet of all [in 1](https://docs.cycling74.com/reference/in) objects, rather than changing the current target instance to the second patcher.

Arguments:

- message
  [list]

### anything

The number of inlets and outlets for [poly~](https://docs.cycling74.com/reference/poly~) is determined by the patcher that is loaded. The inlets for the patcher loaded by a [poly~](https://docs.cycling74.com/reference/poly~) object accept both signal and event connections.

The signals are routed inside of the loaded patcher by using the [in~](https://docs.cycling74.com/reference/in~) objects for signals or the [in](https://docs.cycling74.com/reference/in) object for events. The total number of inlets in a [poly~](https://docs.cycling74.com/reference/poly~) object is determined by the highest number of an [in~](https://docs.cycling74.com/reference/in~) or [in](https://docs.cycling74.com/reference/in) object in the loaded patcher (e.g., if there is an [in~](https://docs.cycling74.com/reference/in~) with argument 3 and an [in](https://docs.cycling74.com/reference/in) with argument 4, the [poly~](https://docs.cycling74.com/reference/poly~) object will have four inlets. All the inlets accept signal connections even though there may not be an [in~](https://docs.cycling74.com/reference/in~) object corresponding to each inlet.

Signal inputs are fed to all instances.

Arguments:

- message
  [list]

### (drag)

Loads a file when dragging a patch from the Max File Browser to a [poly~](https://docs.cycling74.com/reference/poly~) object.

### allnotesoff

Disables all playing notes by sending a message to each instance with a playing note consisting of the MIDI pitch most recently received via the  note  or  midinote  message followed by a zero velocity (note off message).

### assignpatcher

Use  assignpatcher  to load a named patcher into a numbered voice location, leaving patchers assigned to other voices unchanged. The  assignpatcher  message cannot be used increase the number of voices -- its first voice number argument must be between 1 and the current total voice count. Moreover,  assignpatcher  will only work once a patcher has been loaded into the first instance of the [poly~](https://docs.cycling74.com/reference/poly~) either via an argument or the patchername attribute.

After the  assignpatcher  message has been used the contents of the patchername attribute will be modified to contain named patchers for each current voice.

Arguments:

- instance-index
  [int]
- oatcher-name
  [symbol]

### busymap

Reports the voice busy state for the number specified as the argument out the specified message outlet of the [poly~](https://docs.cycling74.com/reference/poly~) object.

Arguments:

- message-outlet-number
  [int]

### bypass

Pass through incoming signals. The first argument specifies the voice, and the second argument specifies the state. To bypass all voices, send the message 'bypass 0 1'.

Arguments:

- voice
  [int]
- on/off
  [int]

### (mouse)

Double-clicking on the [poly~](https://docs.cycling74.com/reference/poly~) opens a display window where you can view the contents of a loaded patcher.

### down

Use the  down  message followed by a number which is a power of two to downsample local DSP processing on the currently loaded patcher (e.g.,  down 2  specifies 22050 Hz at a sampling rate of 44100 Hz). Downsampling is not dynamic. DSP must be restarted before the change can take effect. Although both  up  and  down  are permissible messages to the [poly~](https://docs.cycling74.com/reference/poly~) object, the  down  message takes precedence over  up .

Arguments:

- sampling-factor
  [int]

### exclude

Sending the word  exclude , followed by a voice number and a one, prevents a [poly~](https://docs.cycling74.com/reference/poly~) instance from being sent messages via note allocation when the [poly~](https://docs.cycling74.com/reference/poly~) receives a  note  or  midinote  message. By default, all voices are enabled for note allocation. The word  exclude , followed by a voice number and a zero re-enables the instance to receive messages when the [poly~](https://docs.cycling74.com/reference/poly~) receives a  note  or  midinote  message.

Arguments:

- voice-number
  [int]
- status
  [int]

### midievent

The word  midievent , followed by two to four numbers, sends a MIDI event to [poly~](https://docs.cycling74.com/reference/poly~). The first three number arguments are the bytes of the MIDI message. The fourth, optional, argument is a detune parameter used for MIDI note messages.  midievent  messages are intended to be used with the [polymidiin](https://docs.cycling74.com/reference/polymidiin) object.

Arguments:

- MIDI-message (2 to 4 numbers)
  [list]

### midinote

The  midinote  message is followed by two or more values. While note values are ordinarily two numbers that specify a MIDI note number and a velocity value, any numbers may be used for patches which work differently than the standard MIDI model.

If the second note value is not 0, the [poly~](https://docs.cycling74.com/reference/poly~) object routes the pitch velocity to the first available instance. If the velocity is 0 (i.e. a MIDI note-off message), the pitch velocity will be sent to the [poly~](https://docs.cycling74.com/reference/poly~) instance that generated the note. To determine which instance of the loaded patcher the  midinote  message will be sent to, send a  0  (non-busy) or  1  (busy) message to a [thispoly~](https://docs.cycling74.com/reference/thispoly~) object located in the loaded patcher.

Arguments:

- voice
  [int]
- note-values
  [list]

### mpeevent

The MPE event message is a list composed of the symbol  mpeevent , followed by 6 integers which specify the Zone First Channel, Zone Index, Voice Number, Channel Number, MIDI Message Number, and Data. This message can be sent to a patch encapsulated in a [poly~](https://docs.cycling74.com/reference/poly~) object using the [polymidiin](https://docs.cycling74.com/reference/polymidiin) object.

Arguments:

- message
  [list]

### mute

Turns off signal processing for the specified instance of of a patcher loaded by the [poly~](https://docs.cycling74.com/reference/poly~) object and sends a  bang  message to the [thispoly~](https://docs.cycling74.com/reference/thispoly~) object for the specified instance. Sending a  0  as the second argument turns the patcher instance on. The message  mute 0 1  mutes all instances, and  mute 0 0  turns on signal processing for all instances of the patcher. If all are muted using a  mute 0 1  message, individual instances cannot be unmuted until all are unmuted with a  mute 0 0  message.

Arguments:

- instance
  [int]
- on/off-flag
  [int]

### mutemap

Report voice mutes out of a specified [poly~](https://docs.cycling74.com/reference/poly~) message outlet

Arguments:

- outlet-number
  [int]

### note

The word  note , followed by a message, will send the data to the first [in](https://docs.cycling74.com/reference/in) object of the first instance of the patcher that has not marked itself "busy" by sending a  1  to a [thispoly~](https://docs.cycling74.com/reference/thispoly~) object inside the patcher instance.

Arguments:

- voice-allocated-data
  [list]

### notemessage

The  notemessage  message is used to send messages to each active voice (i.e. an individual instances of a subpatcher loaded by the [poly~](https://docs.cycling74.com/reference/poly~) object). The message is sent directly to the [poly~](https://docs.cycling74.com/reference/poly~) object by means of [in](https://docs.cycling74.com/reference/in) objects (When addressing a [poly~](https://docs.cycling74.com/reference/poly~) object, the first [in](https://docs.cycling74.com/reference/in) object in the subpatcher is reserved for  midinote  messages). Sequentially,  notemessage  messages follow a  note  message - the first argument of that message being taken as a pitch for the ID of subsequent  notemessage  messages. The  notemessage  messages can be of arbitrary length, and may be unpacked and routed inside the subpatcher. In situations where a note-off message that involves a time duration before its completion (e.g. by the use of an [adsr~](https://docs.cycling74.com/reference/adsr~) object),  notemessage  messages will be received for processing until the voice is turned off.

Note: The only way to turn a voice off properly when using a  notemessage  is to use a signal to a [thispoly~](https://docs.cycling74.com/reference/thispoly~) object in the subpatcher loaded by the [poly~](https://docs.cycling74.com/reference/poly~) object (if a signal is  *not*  connected to the [thispoly~](https://docs.cycling74.com/reference/thispoly~) object , the MIDI note-off message turns off the voice assignment immediately).

Arguments:

- message
  [list]

### open

The word  open , followed by a number, opens the specified instance of the patcher. You can view the activity of any instance of the patcher up to the number of voices (set by the  voices  message or by an argument to the [poly~](https://docs.cycling74.com/reference/poly~) object). With no arguments, the  open  message opens the instance that is currently the target (see the  target  message).

Arguments:

- instance-index
  [int]

### setvalue

The word  setvalue , followed by both an instance index (starting at 1) and any message, sends the message to an individual voice of within the MC wrapper.  setvalue 0 , followed by a message, sends the message to all voices. The  setvalue  message can be used in any inlet. The instance index specified by  setvalue  overrides the current value of the  target  attribute but leaves it unchanged after the message has been sent.

Arguments:

- instance-index
  [int]
- message
  [symbol]
- message arguments
  [list]

### threadcount

The word  threadcount , followed by a number, sets the number of threads used to divide [poly~](https://docs.cycling74.com/reference/poly~) instances' audio processing. The default is the number of processor cores available in your computer. Typically, the number of threads should be set to the number of processor cores in your computer for best performance. This can also be accomplished by sending the message  threadcount 0 . If a [poly~](https://docs.cycling74.com/reference/poly~) object has sixteen instances and the threadcount is 4, four of the [poly~](https://docs.cycling74.com/reference/poly~) instances will process audio in each of four threads.

Arguments:

- number of threads
  [int]

### up

Use the  up  message followed by a number which is a power of two to upsample local DSP processing on the currently loaded patcher (e.g.,  up 2  specifies 88200 Hz at a sampling rate of 44100 Hz). Upsampling is not dynamic. DSP must be restarted before the change can take effect. Although both  up  and  down  are permissible messages to the [poly~](https://docs.cycling74.com/reference/poly~) object, the  down  message takes precedence over  up .

Arguments:

- sampling-factor
  [int]

### wclose

Closes the window for the numbered instance specified by the argument. If no number argument is used,  wclose  will close the patcher window with the highest numbered index.

Arguments:

- instance-index
  [int]

## Output

### anything

The number of outlets of a [poly~](https://docs.cycling74.com/reference/poly~) object is determined by the sum of the highest argument numbers of the [out](https://docs.cycling74.com/reference/out) and [out~](https://docs.cycling74.com/reference/out~) objects in the loaded patcher. For instance, if there is an [out 3](https://docs.cycling74.com/reference/out) object and an [out~ 2](https://docs.cycling74.com/reference/out~) object, the [poly~](https://docs.cycling74.com/reference/poly~) object will have six outlets. The signal outputs corresponding to the [out~](https://docs.cycling74.com/reference/out~) objects are leftmost in the [poly~](https://docs.cycling74.com/reference/poly~) object, followed by the event outlets corresponding to the [out](https://docs.cycling74.com/reference/out) objects, followed by a voice number outlet.

Signals sent to the inlet of [out~](https://docs.cycling74.com/reference/out~) objects in each patcher instance are mixed if there is more than one instance and appear at the corresponding outlets of the [poly~](https://docs.cycling74.com/reference/poly~) object.

## See Also

| Name | Description |
| --- | --- |
| [in](https://docs.cycling74.com/reference/in) | Message input for a patcher loaded by poly~ or pfft~ |
| [in~](https://docs.cycling74.com/reference/in~) | Signal input for a patcher loaded by poly~ |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [out~](https://docs.cycling74.com/reference/out~) | Signal output for a patcher loaded by poly~ |
| [mc.poly~](https://docs.cycling74.com/reference/mc.poly~) | Manage polyphony/DSP for patchers |
| [mcs.poly~](https://docs.cycling74.com/reference/mcs.poly~) | Manage polyphony/DSP for patchers |
| [patcher](https://docs.cycling74.com/reference/patcher) | Create a subpatch within a patch |
| [thispoly~](https://docs.cycling74.com/reference/thispoly~) | Control poly~ voice allocation and muting |
| [param](https://docs.cycling74.com/reference/param) | Define a polyphonic-compatible parameter in poly~ |
