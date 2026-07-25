---
type: mc
name: "mc.midiplayer~"
summary: "Generate MIDI Events from Audio Signals"
signal: true
url: "https://docs.cycling74.com/reference/mc.midiplayer~/"
package: "MC"
see_also: ["phasor~", "vst~"]
---
# mc.midiplayer~

Generate MIDI Events from Audio Signals

## Description

The [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~) object generates  midievent  note-on and note-off messages from audio signals representing triggers, note numbers, and velocity values. Typically you'll connect [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~) to [vst~](https://docs.cycling74.com/reference/vst~) which allows sample-accurate MIDI events at audio rates (assuming the hosted plug-in supports it).

## Arguments

None.

## Attributes

### chanmod[int]

Each incoming audio channel to [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~) can only generate one MIDI event at a time. The chanmod attribute determines how multiple audio channels map to MIDI channels. The minimum value of chanmod is 1, which means all audio channels generate note events on MIDI channel 1. The maximum value of chanmod is 16, where [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~) uses all 16 available MIDI channels. When mpemode is enabled, the maximum value of chanmod is 15, since MPE uses channel 1 for global MIDI events.

### defaultdur[float]

When triggermode is set to Phasor, [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~) sends a note-on at the beginning of a phasor ramp and a note-off when the phasor resets. The defaultdur sets the point in the ramp that triggers the note-off event. For example, if defaultdur is set to 0.5, a note-off is sent when the input phasor reaches 0.5. To set a duration proportion for each channel, use the  setvalue  message with the  dur  selector. When defaultdur is changed, it does not override any channel-specific duration values set. To cause a channel to use the value of defaultdur for note durations, set its channel-specific dutation to zero.

### defaultnote[int]

Sets the note number to use for all future note events. It has the same effect as sending a number to the middle inlet of the object. This setting is ignored if a signal is connected to the middle (note number) inlet of [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~). To set a note number for each channel, send the  setvalue  message with a number argument to the middle inlet. When defaultnote is changed, it does not override any channel-specific note number values set. To cause a channel to use the value of defaultnote for note number, set its channel-specific note number to zero.

### defaultvelocity[int]

Sets the velocity to use for all future note-on events. It has the same effect as sending a number to the middle inlet of the object. This setting is ignored if a signal is connected to the right (velocity) inlet of [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~). To set a velocity value for each channel, send the  setvalue  message with a number argument to the right inlet. When defaultvelocity is changed, it does not override any channel-specific note number values set. To cause a channel to use the value of defaultvelocity for its velocity, set its channel-specific velocity to zero.

### mpemode[int]

When mpemode is enabled, note events are not sent on MIDI channel 1 and the chanmod attribute has a maximum value of 15.

### playzero[int]

When playzero is enabled, MIDI note events play even if the note number is zero. Disabling playzero is useful when using the same signal for triggering and assigning note numbers when triggermode is set to Edge or Change. Note: input  *velocity*  values of 0 disable note events irrespective of the setting of playzero.

### triggermode[int]

Determines how the input trigger signal (connected to the left inlet) generates note events

Possible values:

0 = 'Phasor'
(
Trigger notes based on phasor ramps
)
When triggermode is set to Phasor, the first rising sample value of the ramp triggers a note-on and the first descending (reset) sample triggers a note-off. If the duration proportion (via the  dur  message or defaaultdur attribute) is less than 1.0, the note-off will be triggered when the ramp value reaches the specified value.

1 = 'Edge'
(
Trigger notes based on logical sample value transitions
)
When triggermode is set to Edge, a note-on is triggered by a zero to non-zero transition in the input signal, and a note-off is triggered by a non-zero to zero transition.

2 = 'Change'
(
Trigger notes based on sample value changes
)
When triggermode is set to Change, a note-on is triggered whenever the sample value changes. If a note is already playing, the note-off for the playing event is sent first. If you don't want notes playing continuously, disabling the playzero attribute is useful, since a note number value of zero will trigger a note-off (if necessary) without playing another note.

### velcurve[float]

The velcurve attribute introduces a non-linearity into the velocity values of MIDI events. For a more traditional curve, use a negative value (the default is -0.75). A value of 0 means there is no non-linearity, and positive values introduce a less traditional non-linearity where lower input values rise more quickly relative to higher input values. The built-in non-linear function is based on a simple Bezier curve; for more options scaling the input before it arrives at the right inlet of [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~) refer to the Ease package.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

A number in the middle inlet sets a note number for future note events. A number in the right inlet sets a velocity value for future note events. This sets values globally for all MIDI channels. To set note numbers, velocities, or durations per channel, use the  setvalue  message. These values are ignored if a signal is connected to the corresponding inlet.

### float

See the  int  message.

### setvalue

The  setvalue  message assigns note numbers, velocities or durations for future note-events to individual challenge. A channel number always follows the word  setvalue . Following the channel number, if the  setvalue  message is sent to the middle inlet, a number sets the note number for the specified channel. If the  setvalue  message is sent to the right inlet, a number sets the velocity for the specified channel. In any inlet,  setvalue   *channel*   dur   *value*  assigns a duration proportion to the channel when the triggermode is set to Phasor. See the defaultdur attribute for more details.

### signal

If a signal is connected to the middle inlet, it sets the note number used when triggering a new note. If a signal is connected to the right inlet, it sets the velocity value used when triggering a new note-on.

## See Also

| Name | Description |
| --- | --- |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [vst~](https://docs.cycling74.com/reference/vst~) | Host VST, VST3 and Audio Unit plug-ins |
