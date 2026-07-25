---
type: msp
name: "omx.comp~"
summary: "OctiMax Compressor"
signal: true
url: "https://docs.cycling74.com/reference/omx.comp~/"
package: "MSP"
see_also: ["omx.4band~", "omx.5band~", "omx.peaklim~"]
---
# omx.comp~

OctiMax Compressor

## Description

[omx.comp~](https://docs.cycling74.com/reference/omx.comp~) is a fully-featured signal compressor with limiting, gating, sidechain, and dual-band options.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### agcEnabled

The word  agcEnabled , followed by a 1 or 0, enables or disables the compressor.

Arguments:

- compression-enable-flag
  [int]

### agcThreshold

The word  agcThreshold , followed by a number, sets the compressor threshold (in dB below full scale). This is the main compression threshold. Any signal above the threshold will be reduced, and any signal below the threshold will be amplified, according to the range and ratio parameters.

Arguments:

- compression-threshold
  [float]

### attack

The word  attack , followed by a number, sets the rate at which the compressor is engaged when the signal level exceeds the agcThreshold. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- attack-rate
  [int]

### bypass

The word  bypass  followed by a non-zero number will output the dry unchanged input signal straight out the outlet without any processing; followed by a 0, will output the signal effected by [omx.comp~](https://docs.cycling74.com/reference/omx.comp~).

Arguments:

- bypass-flag
  [int]

### channelCoupling

The word  channelCoupling , followed by a number, sets the gain control source as follows: 0 = stereo, 1 = left, 2 = right. In stereo mode, the gain control signal is derived from whichever channel is loudest, unlike in left or right mode where the gain control signal will only be derived from the selected channel. This can be used for "keying" or "ducking" effects, where the energy of one sound modulates the level of another.

Arguments:

- keying-source (0, 1, or 2)
  [int]

### choosePreset

The word  choosePreset , followed by a number in the range 0-4, selects a preset for the [omx.comp~](https://docs.cycling74.com/reference/omx.comp~) object. These presets are to be considered "starting points" and should be tweaked for your particular purpose or desired sound. The preset options are:

0: Guitar

1: Bass

2: Vocal

3: Drums

4: Program Material - An attempt at smooth "gain riding" of mixed program material as well as can be done with a non-multiband processor.

Arguments:

- preset-number
  [int]

### delay

The word  delay , followed by a number, sets the sidechain delay time (in milliseconds). This emulates the attack characteristics of vintage "opto" compressors, and similar effects. The delay is applied to the control signal only, and hence may result in large peaks at transients.

Arguments:

- delay-time
  [int]

### dualBandEnabled

The word  dualBandEnabled , followed by a 1 or 0, turns dual band mode on or off. In dual band, a crossover filter around 200hz splits the audio into two bands, which are compressed separately. This can reduce bass pumping and other artifacts of wide-band compression.

Arguments:

- crossover-enable-flag
  [int]

### freezeLevel

The word  freezeLevel , followed by a number, sets the freeze threshold (in dB below full scale). When the signal is below this threshold, the compressor release action will be suppressed, and the gain will remain constant. In normal operation, release action takes place when the signal is below the compression threshold, increasing the gain until the signal returns to its full-scale, uncompressed level. If there is no usable signal present, this can have the effect of simply amplifying the noise floor. Release gate and freeze can suppress gain recovery to avoid this condition.

Arguments:

- release-action-threshold
  [float]

### gatingLevel

The word  gatingLevel , followed by a number, sets the release gate threshold (in dB below full scale). When the signal is below this threshold, the release time of the compressor will be slowed by a factor of 3. See  freezeLevel .

Arguments:

- release-gate-threshold
  [float]

### limEnabled

The word  limEnabled , followed by a 1 or 0 turns the peak-limiter on or off.

Arguments:

- peak-limiter-flag
  [int]

### limMode

The word  limMode , followed by a number, sets the limiter response mode as follows: 0 = punchy, 1 = smooth. Punchy response yields extremely short attack and release times, useful for transparent limiting, or to create loudness. However, if over-used, intermodulation distortion may result. Smooth response uses longer attack and release times. The result is still a fast look-ahead limiter, but with less intermodulation distortion and less punch.

Arguments:

- response-mode-flag
  [int]

### meterData

The word  meterData  will cause output (by instantaneous command as opposed to metering-interval described by the  meterRate  message) of values which describe the current state of various internal gain levels of the compressor, and can be used to drive GUI objects to provide visual feedback. [omx.comp~](https://docs.cycling74.com/reference/omx.comp~) sends a list of six integers, describing compressor gain (left, right), noise gate gain (left, right), and limiter gain (left, right).

### meterRate

The word  meterRate , followed by a number, specifies the interval (in milliseconds) at which the meter data described above will be sent.

Arguments:

- data-output-interval
  [int]

### meters

The word  meters , followed by a 1 or 0, turns the metering output on or off. When metering is on, a list of values will be sent from the rightmost outlet at a rate specified by the  meterRate  message. These values describe the current state of various internal gain levels of the compressor, and can be used to drive GUI objects to provide visual feedback. [omx.comp~](https://docs.cycling74.com/reference/omx.comp~) sends a list of six integers, describing compressor gain (left, right), noise gate gain (left, right), and limiter gain (left, right).

Arguments:

- metering-enable-flag
  [int]

### ngEnabled

The word  ngEnabled , followed by a 1 or 0, turns the noise gate on or off. A noise gate is effective for reducing background hiss when no other signal is present. Here, it's implemented as a downward expander with a ratio of 2:1.

Arguments:

- noise-gate-flag
  [int]

### ngThreshold

The word  ngThreshold , followed by a number, sets the threshold level (in dB below full scale) at which the noise gate will be engaged.

Arguments:

- noise-gate-threshold
  [float]

### progressiveRelease

The word  ProgressiveRelease , followed by a number from 0-100, activates Progressive Release, which causes the compressor to release faster during heavy gain reduction. This means that the audio will sound more compressed when the input signal is louder. This can be used to create an illusion of dynamics. It is especially useful with the ratio set to Infinite:1, which could sound over-compressed without this option.

Arguments:

- release
  [int]

### range

The word  range , followed by a number, sets the maximum amount of gain amplification allowed in dB. This limits the gain that is applied when the signal is below the compression threshold. Note that this limiting takes place before the ratio is applied. For example, if the range is set to 24 dB, and the ratio is 2:1, the most gain amplification you can get (after the ratio is applied) is in fact 12 dB.

Arguments:

- maximum-gain-amplification
  [float]

### ratio

The word  ratio , followed by a number, sets the numerator of the compressor gain reduction ratio, from 1:1 to Infinite:1.

Arguments:

- gain-reduction-ratio-numerator
  [int]

### release

The word  release , followed by a number, sets the rate at which the compressor releases its gain adjustment when the signal level no longer exceeds the agcThreshold. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release. This rate can be modified by the release gate and freeze thresholds.

Arguments:

- release-rate
  [int]

### saveSettings

The word  saveSettings  causes all parameter values to be sent out the third outlet.

### sidechainFilterEnabled

The word  sidechainFilterEnabled , followed by a 1 or 0, enables or disables an attenuation filter in the upper midrange that makes the compressor less sensitive to vocal signals, and generally produces a more gentle response. This filter is only applied internally, to the control signal. Note that it may cause more output overshoots, where the signal output level exceeds 0dB.

Arguments:

- keying-attenuation-flag
  [int]

### signal

Audio input, the signal or pair of signals to be compressed.

### smoothGain

The word  smoothGain , followed by a number from 0-100, activates gain smoothing. This applies a low-pass filter to the control signal, and is useful both to prevent artifacts (gain fluttering) from high attack/release rates, and to intentionally make the compressor sluggish, adding extra "snap" to transients.

Arguments:

- smoothing
  [int]

## Output

### list

Out right outlet: when metering is turned on (via the  meters  message), a list will be output describing various internal levels. See meters, above.

### signal

Out leftmost two outlets: the input signals (if present), with dynamics processing applied.

## See Also

| Name | Description |
| --- | --- |
| [omx.4band~](https://docs.cycling74.com/reference/omx.4band~) | OctiMax 4-band Compressor |
| [omx.5band~](https://docs.cycling74.com/reference/omx.5band~) | OctiMax 5-band Compressor |
| [omx.peaklim~](https://docs.cycling74.com/reference/omx.peaklim~) | OctiMax Peak Limiter |
