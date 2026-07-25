---
type: ableton
name: "live.adsr~"
summary: "ADSR envelope generator"
signal: true
url: "https://docs.cycling74.com/reference/live.adsr~/"
package: "maxforlive-elements"
see_also: ["live.adsrui", "adsr~"]
---
# live.adsr~

ADSR envelope generator

## Description

Use the live.adsr~ object to create sample-accurate Attack-Decay-Sustain-Release signal envelopes. Pair live.adsr~ with the live.adsrui object for graphical control over each of its stages.

## Arguments

### attack time[number] optional

The initial attack time of the envelope in milliseconds.

### decay time[number] optional

The initial decay time of the envelope in milliseconds.

### sustain[number] optional

The sustain of the envelope, as a factor of the amplitude. For example, a value of 0.5 means the sustain level will be half of the amplitude height.

### release time[number] optional

The initial release time of the envelope in milliseconds.

## Attributes

### decay\_slope[float64]

The shape of the decay envelope segment. Ranging from -1 to 1., positive and negative values create curves. A value of 0 is linear.

### release\_time[float64]

The length of time taken to arrive at the final value after the trigger is turned off (e.g. a MIDI noteoff message is received).

### decay\_time[float64]

The length of time taken between the peak value and the sustain level.

### attack\_slope[float64]

The shape of the attack envelope segment. Ranging from -1 to 1., positive and negative values create curves. A value of 0 is linear.

### attack\_time[float64]

The initial attack time of the envelope in milliseconds.

### sustain[float64]

The level reached at the end of the decay stage, as a factor of the amplitude. For example, a value of 0.5 means the sustain level will be half of the amplitude height. The value will remain at this level until triggered off (e.g. by a MIDI noteoff) unless it is in loop, sync, or beat mode.

### release\_slope[float64]

The shape of the release envelope segment. Ranging from -1 to 1., positive and negative values create curves. A value of 0 is linear.

### final[float64]

The value of the envelope at the end of the release stage.

### peak[float64]

The value at end of the attack stage, and the beginning of the decay stage.

### initial[float64]

The value the ADSR starts at.

### loop\_mode[long]

The envelope loop behavior. Modes include:

- none: No looping, just attack, decay, sustain, and release
- trigger: No looping and skip the sustain - a one-shot trigger. Trigger mode cannot be released early, i.e. releasing during attack will have no effect - the envelope will continue to play the decay and release.
- loop: Loop through attack, decay, and release - a looping trigger. Releases like a normal envelope, i.e. releasing during an attack will start the release stage before finishing.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### list

Sending a list to the leftmost inlet sets all ADSR envelope values simultaneously.

### float

A number sets the attribute associated with the inlet.

## See Also

| Name | Description |
| --- | --- |
| [live.adsrui](https://docs.cycling74.com/reference/live.adsrui) | ADSR User Interface |
| [adsr~](https://docs.cycling74.com/reference/adsr~) | ADSR envelope generator |
