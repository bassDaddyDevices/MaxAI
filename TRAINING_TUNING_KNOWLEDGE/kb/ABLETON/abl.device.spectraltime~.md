---
type: ableton
name: "abl.device.spectraltime~"
summary: "Spectral delay"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.spectraltime~/"
package: "Ableton DSP"
see_also: ["abl.device.spectralresonator~"]
---
# abl.device.spectraltime~

Spectral delay

## Description

Spectral freeze and delay effect

## Arguments

None.

## Attributes

### crossfade\_pct[float]

Alias:
crossfade

When freeze\_mode is 'retrigger', retrigger\_mode is 'sync', and fade is
'crossfade', controls the crossfade time as a percentage of interval. [0., 1.]

### delay\_mix[float]

Sets the delay dry/wet amount. [0., 1.]

### delay\_time[float]

Sets the delay time in seconds. [0.01, 3.]

### fade[int]

Sets the freeze fade type.

Possible values:

0 = 'Crossfade'
(
Crossfade
)
Allows the new freeze to fade in and the old one (or the dry signal) fades out.
Crossfade duration is controlled by crossfade\_pct.

1 = 'Envelope'
(
Envelope
)
Allows a new freeze to fade in and out based on fade\_in and fade\_out.
Up to eight simultaneous freezes can be stacked.

### fade\_in[float]

When freeze\_mode is 'retrigger', retrigger\_mode is onsets, and fade is
'crossfade', controls the crossfade time (in seconds). If fade is 'envelope' instead, controls
the fade in time. [0.002, 10.]

### fade\_out[float]

Sets the time over which a freeze will fade out. [0.02, 10.]

### feedback[float]

Sets the amount of output that is fed back to the delay input. [0., 1.]

### freeze[int]

Enables/disables the freezer effect. Re-enabling when in manual freeze mode will re-freeze the
audio.

### freeze\_mode[int]

Sets the main freeze mode.

Possible values:

0 = 'Manual'
(
Manual
)
Audio is frozen when freeze is 1

1 = 'Retrigger'
(
Retrigger
)
Audio can be frozen automatically on every onset or at regular intervals

### mask[float]

Limit the effect of tilt and spray. Negative values limit the effects on
lower frequencies, and positive values limit the effect on higher frequencies. [-1., 1.]

### mix[float]

Sets the dry/wet mix of the output signal.

### order[int]

Sets the processing order of the freezer and delay stages.

Possible values:

0 = 'Freeze -> Delay'

1 = 'Delay -> Freeze'

### pregain[float]

Sets the gain of the input signal in dB. [-70.6, 0.]

### resolution[int]

Sets the resolution the device uses to process the incoming signal. Lower resolutions reduce
the overall latency at the cost of accuracy and fidelity.

Possible values:

0 = 'Low'

1 = 'Mid'

2 = 'High'

3 = 'Ultra'

### retrig\_mode[int]

Sets the freeze retrigger mode.

Possible values:

0 = 'Onsets'

1 = 'Sync'

### sensitivity[float]

When freeze\_mode is 'retrigger' and retrigger\_mode is 'onsets', controls
sensitivity of onset detection. [0., 1.]

### shift[float]

Shift the frequency of the delayed signal. [-400., 400.]

### spray[float]

Distribute the delay times for different frequencies within a given time range. [0., 0.4]

### spread[float]

Sets the stereo width of tilt and spray. [0., 1.]

### tilt[float]

Skew the delay times for different frequencies. At positive values, high frequencies are
delayed more than low frequencies. At negative values, low frequencies are delayed more than high
frequencies. [-2., 2.]

### time\_sync\_interval[float]

When freeze\_mode is 'retrigger' and retrigger\_mode is 'sync', controls the
retrigger time (in seconds). [0.02, 10.]

### ins[symbol]

Declares additional inlets that can be used to control float-type attributes at either event or
signal rate. Any declared attributes already mapped to inlets will be ignored. This attribute can only
be set when the object is instantiated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Function depends on inlet

### reset

Reset

### signal

Function depends on inlet

## See Also

| Name | Description |
| --- | --- |
| [abl.device.spectralresonator~](https://docs.cycling74.com/reference/abl.device.spectralresonator~) | Spectral resonator |
