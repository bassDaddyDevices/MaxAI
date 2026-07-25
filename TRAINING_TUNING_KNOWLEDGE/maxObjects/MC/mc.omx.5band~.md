---
type: mc
name: "mc.omx.5band~"
summary: "OctiMax 5-band Compressor  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.omx.5band~/"
package: "MC"
see_also: ["omx.4band~", "omx.comp~", "omx.peaklim~"]
---
# mc.omx.5band~

OctiMax 5-band Compressor (multichannel)

## Description

[omx.5band~](https://docs.cycling74.com/reference/omx.5band~) delivers the signal-processing power of Octimax in a 5-band compressor.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bands\_enum

The word  bands\_enum , followed by a zero or one, sets the number of bands. The option are:

0: 4-band

1: 5-band

Arguments:

- 0/1
  [int]

### bassenhancement

The word  bassenhancement  followed by a non-zero number will enable the specialized enhancement of low frequencies by the multiband compressor; followed by 0, causes no low frequency enhancement to be applied.

Arguments:

- low-frequency-emphasis-flag
  [int]

### bassenhancement\_mixlevel

The word  bassenhancement\_mixlevel , followed by a number, sets the amount of low-frequency enhancement added into the audio signal before output.

Arguments:

- low-frequency-enhancement-level
  [int]

### bypass

The word  bypass  followed by a non-zero number will output the dry unchanged input signal straight out the outlet without any processing; followed by a 0, will output the signal effected by [omx.5band~](https://docs.cycling74.com/reference/omx.5band~).

Arguments:

- bypass-flag
  [int]

### choosePreset

The word  choosePreset , followed by a number in the range 0-2, selects a preset for the [omx.4band~](https://docs.cycling74.com/reference/omx.4band~) object. These presets are to be considered "starting points" and should be tweaked for your particular purpose or desired sound. The preset options are:

0: Universal - Provides a general boost to the sound, with a 3-to-1 compression and no limiting. Bass enhancement is switched in for a bit of warmth.

1; Pop - Sets a 50:1 compression with hard driven limiting in the lowest two bands. The gives a solid bottom to the sound.

2: Hit Radio - Is a compromise between the Universal and Pop settings. You will note that the times are all about the same, with appropriately slower attack and release in the low bands.

3: FM Radio - Differs from the Pop and Hit radio settings primarily in the high end, which is compressed a bit tighter.

Arguments:

- preset-number
  [int]

### freeze\_threshold

The word  freeze\_threshold , followed by a number, sets the freeze threshold (in dB below full scale). When the input signal drops below the freeze threshold, release will seize completely. Along with the gating threshold, this threshold is useful to prevent background hiss amplification.

Arguments:

- freeze threshold
  [float]

### gating\_threshold

The word  gating\_threshold , followed by a number, sets the release gate threshold (in dB below full scale). When the signal is below this threshold, the release time of the compressor will be slowed by a factor of 3.

Arguments:

- release-gate-threshold
  [float]

### inagc\_atk

The word  inagc\_atk , followed by a number, sets the attack rate for the input compressor. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- input-compressor-attack-rate
  [int]

### inagc\_progressive

The word  inagc\_progressive , followed by a 1 or 0, enables or disables the Progressive Release mode, which causes the input compressor to release faster during heavy gain reduction.

Arguments:

- progressive-release-mode-flag
  [int]

### inagc\_range

The word  inagc\_range , followed by a number, sets the maximum amount of gain in dB applied by the input compressor .

Arguments:

- maximum-input-compressor-gain
  [float]

### inagc\_ratio

The word  inagc\_ratio , followed by a number, sets the numerator of the compressor gain reduction ratio, from 1:1 to Infinite:1.

Arguments:

- compressor-gain-reduction-ratio-numerator
  [int]

### inagc\_rel

The word  inagc\_rel , followed by a number, sets the release rate for the input compressor. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- input-compressor-release-rate
  [int]

### inagc\_threshold

The word inagc\_threshold, followed by a number, sets the compression threshold level (in dB below full scale) for the input compressor.

Arguments:

- compression-threshold-level
  [float]

### inf\_ratio\_above\_threshold\_1

The word  inf\_ratio\_above\_threshold\_1 , followed by a zero or one, disables/enables Infinite ratio above threshold (sometimes called "soft clipping") for band 1. If enabled, the ratio in that band will be Infinite:1 any time there is gain reduction (i.e. the input signal is above the threshold), no matter what the Multiband Ratio is set to.

Arguments:

- 0/1
  [int]

### inf\_ratio\_above\_threshold\_2

The word  inf\_ratio\_above\_threshold\_2 , followed by a zero or one, disables/enables Infinite ratio above threshold (sometimes called "soft clipping") for band 2. If enabled, the ratio in that band will be Infinite:1 any time there is gain reduction (i.e. the input signal is above the threshold), no matter what the Multiband Ratio is set to.

Arguments:

- 0/1
  [int]

### inf\_ratio\_above\_threshold\_3

The word  inf\_ratio\_above\_threshold\_3 , followed by a zero or one, disables/enables Infinite ratio above threshold (sometimes called "soft clipping") for band 3. If enabled, the ratio in that band will be Infinite:1 any time there is gain reduction (i.e. the input signal is above the threshold), no matter what the Multiband Ratio is set to.

Arguments:

- 0/1
  [int]

### inf\_ratio\_above\_threshold\_4

The word  inf\_ratio\_above\_threshold\_4 , followed by a zero or one, disables/enables Infinite ratio above threshold (sometimes called "soft clipping") for band 4. If enabled, the ratio in that band will be Infinite:1 any time there is gain reduction (i.e. the input signal is above the threshold), no matter what the Multiband Ratio is set to.

Arguments:

- 0/1
  [int]

### inf\_ratio\_above\_threshold\_5

The word  inf\_ratio\_above\_threshold\_5 , followed by a zero or one, disables/enables Infinite ratio above threshold (sometimes called "soft clipping") for band 5. If enabled, the ratio in that band will be Infinite:1 any time there is gain reduction (i.e. the input signal is above the threshold), no matter what the Multiband Ratio is set to.

Arguments:

- 0/1
  [int]

### lim\_drive

The word  lim\_drive , followed by a number, sets the overall gain in dB before peak limiting is applied.

Arguments:

- pre-peak-limiter-gain
  [float]

### lim\_smoothrelease

The word  lim\_smoothrelease , followed by a number, sets the limiter response mode as follows:

0: Punchy. Punchy response yields extremely short attack and release times, useful for transparent limiting, or to create loudness. However, if over-used, intermodulation distortion may result.

1: Smooth. Smooth release uses longer attack and release times. The result is still a fast look-ahead limiter, but with less intermodulation distortion and less punch.

Arguments:

- limiter-response-flag
  [int]

### mbagc\_b1\_atk

The word  mbagc\_b1\_atk , followed by a number, sets the attack rate for band 1. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- attack-rate
  [int]

### mbagc\_b1\_drv

The word  mbagc\_b1\_drv , followed by a number, sets the gain in dB applied to band 1 before compression. Increasing the drive for a particular band applies more compression to those frequencies.

Arguments:

- pre-compressor-gain
  [float]

### mbagc\_b1\_rel

The word  mbagc\_b1\_rel , followed by a number, sets the release rate for band 1. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- attack-rate
  [int]

### mbagc\_b1\_threshold

The word  mbagc\_b1\_threshold , followed by a number, sets the compression threshold level (in dB below full scale) for band 1. A frequency band will be compressed if its signal level exceeds the threshold.

Arguments:

- compression-threshold
  [float]

### mbagc\_b2\_atk

The word  mbagc\_b2\_atk , followed by a number, sets the attack rate for band 2. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- attack-rate
  [int]

### mbagc\_b2\_drv

The word  mbagc\_b2\_drv , followed by a number, sets the gain in dB applied to band 2 before compression. Increasing the drive for a particular band applies more compression to those frequencies.

Arguments:

- pre-compressor-gain
  [float]

### mbagc\_b2\_rel

The word  mbagc\_b2\_rel , followed by a number, sets the release rate for band 2. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- attack-rate
  [int]

### mbagc\_b2\_threshold

The word  mbagc\_b2\_threshold , followed by a number, sets the compression threshold level (in dB below full scale) for band 2. A frequency band will be compressed if its signal level exceeds the threshold.

Arguments:

- compression-threshold
  [float]

### mbagc\_b3\_atk

The word  mbagc\_b3\_atk , followed by a number, sets the attack rate for band 3. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- attack-rate
  [int]

### mbagc\_b3\_drv

The word  mbagc\_b3\_drv , followed by a number, sets the gain in dB applied to band 3 before compression. Increasing the drive for a particular band applies more compression to those frequencies.

Arguments:

- pre-compressor-gain
  [float]

### mbagc\_b3\_rel

The word  mbagc\_b3\_rel , followed by a number, sets the release rate for band 3. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- attack-rate
  [int]

### mbagc\_b3\_threshold

The word  mbagc\_b3\_threshold , followed by a number, sets the compression threshold level (in dB below full scale) for band 3. A frequency band will be compressed if its signal level exceeds the threshold.

Arguments:

- compression-threshold
  [float]

### mbagc\_b4\_atk

The word  mbagc\_b4\_atk , followed by a number, sets the attack rate for band 4. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- attack-rate
  [int]

### mbagc\_b4\_drv

The word  mbagc\_b4\_drv , followed by a number, sets the gain in dB applied to band 4 before compression. Increasing the drive for a particular band applies more compression to those frequencies.

Arguments:

- pre-compressor-gain
  [float]

### mbagc\_b4\_rel

The word  mbagc\_b4\_rel , followed by a number, sets the release rate for band 4. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- attack-rate
  [int]

### mbagc\_b4\_threshold

The word  mbagc\_b4\_threshold , followed by a number, sets the compression threshold level (in dB below full scale) for band 4. A frequency band will be compressed if its signal level exceeds the threshold.

Arguments:

- compression-threshold
  [float]

### mbagc\_b5\_atk

The word  mbagc\_b5\_atk , followed by a number, sets the attack rate for band 5. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- attack-rate
  [int]

### mbagc\_b5\_drv

The word  mbagc\_b5\_drv , followed by a number, sets the gain in dB applied to band 5 before compression. Increasing the drive for a particular band applies more compression to those frequencies.

Arguments:

- pre-compressor-gain
  [float]

### mbagc\_b5\_rel

The word  mbagc\_b5\_rel , followed by a number, sets the release rate for band 5. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- attack-rate
  [int]

### mbagc\_b5\_threshold

The word  mbagc\_b5\_threshold , followed by a number, sets the compression threshold level (in dB below full scale) for band 5. A frequency band will be compressed if its signal level exceeds the threshold.

Arguments:

- compression-threshold
  [float]

### mbagc\_progressive

The word  mbagc\_progressive , followed by a 1 or 0, enables or disables the Progressive Release mode, which causes the multi-band compressor to release faster during heavy gain reduction.

Arguments:

- progressive-release-mode-flag
  [int]

### mbclip\_b1\_threshold

The word  mbclip\_b1\_threshold , followed by a number, sets the bass clipping threshold level (in dB below full scale).

Arguments:

- clipping-threshold
  [int]

### mblim\_b1\_threshold

The word  mblim\_b1\_threshold , followed by a number, sets the threshold signal level in dB for the peak limiter of band 1.

Arguments:

- peak-limiter-threshold
  [float]

### mblim\_b2\_threshold

The word  mblim\_b2\_threshold , followed by a number, sets the threshold signal level in dB for the peak limiter of band 2.

Arguments:

- peak-limiter-threshold
  [float]

### mblim\_b3\_threshold

The word  mblim\_b3\_threshold , followed by a number, sets the threshold signal level in dB for the peak limiter of band 3.

Arguments:

- peak-limiter-threshold
  [float]

### mblim\_b4\_threshold

The word  mblim\_b4\_threshold , followed by a number, sets the threshold signal level in dB for the peak limiter of band 4.

Arguments:

- peak-limiter-threshold
  [float]

### mblim\_b5\_threshold

The word  mblim\_b5\_threshold , followed by a number, sets the threshold signal level in dB for the peak limiter of band 5.

Arguments:

- peak-limiter-threshold
  [float]

### mbrange

The word  mbrange , followed by a number, sets the maximum amount of gain in dB applied by the multiband compressor. This limits the gain that is applied when the signal is below the compression threshold. Note that this limiting takes place before the ratio is applied. For example, if the range is set to 24 dB, and the ratio is 2:1, the most gain amplification you can get (after the ratio is applied) is in fact 12 dB.

Arguments:

- maximum-compressor-gain
  [float]

### mbratio

The word  mbratio , followed by a number, sets the numerator of the compressor gain reduction ratio, from 1:1 to Infinite:1.

Arguments:

- compressor-gain-reduction-ratio-numerator
  [int]

### meterData

The word  meterData  will cause output (by instantaneous command as opposed to metering-interval described by the  meterRate  message) of values which describe the current state of various internal levels of the compressor, and can be used to drive GUI objects to provide visual feedback.

### meterRate

The word  meterRate , followed by a number, specifies the interval (in milliseconds) at which the meter data described above will be sent.

Arguments:

- data-output-interval
  [int]

### meters

The word  meters , followed by a 1 or 0, turns the metering output on or off. When metering is on, a list of values will be sent from the rightmost outlet at a rate specified by the  meterRate  message. These values describe the current state of various internal levels of the compressor, and can be used to drive GUI objects to provide visual feedback.

Arguments:

- metering-output-flag
  [int]

### multiband\_limiters

The word  multiband\_limiters , followed by a 1 or 0, enables or disables the peak limiting function, which limits the signal level of each frequency band independently, so it does not exceed the threshold set for that band.

Arguments:

- peak-limiting-flag
  [int]

### ng\_enabled\_maxch

The word  ng\_enabled\_maxch , followed by a 1 or 0, enables or disables noise gating for the multi-band compressor. The noise gating itself has multiple bands, separate from the compressor, allowing independent control via the  ngthresh  messages.

Arguments:

- noise-gate-enable-flag
  [int]

### ngenabled

The word  ngenabled , followed by a 1 or 0, turns the noise gate on or off. A noise gate is effective for reducing background hiss when no other signal is present. [omx.4band~](https://docs.cycling74.com/reference/omx.4band~) features two noise gates: one that operates on the entire signal, and one that only affects higher frequencies, such as hiss.

Arguments:

- noise-gate-enable-flag
  [int]

### ngthresh1

The word  ngthresh1 , followed by a number that specifies a threshold level (expressed as dB below full scale), sets the threshold level at which the noise gate for band 1 will be engaged.

Arguments:

- threshold-level
  [float]

### ngthresh2

The word  ngthresh2 , followed by a number that specifies a threshold level (expressed as dB below full scale), sets the threshold level at which the noise gate for band 2 will be engaged.

Arguments:

- threshold-level
  [float]

### ngthresh3

The word  ngthresh3 , followed by a number that specifies a threshold level (expressed as dB below full scale), sets the threshold level at which the noise gate for band 3 will be engaged.

Arguments:

- threshold-level
  [float]

### ngthresh4

The word  ngthresh4 , followed by a number that specifies a threshold level (expressed as dB below full scale), sets the threshold level at which the noise gate for band 4 will be engaged.

Arguments:

- threshold-level
  [float]

### ngthresh5

The word  ngthresh5 , followed by a number that specifies a threshold level (expressed as dB below full scale), sets the threshold level at which the noise gate for band 5 will be engaged.

Arguments:

- threshold-level
  [float]

### outlevel\_lf

The word  outlevel\_lf , followed by a number, sets the left channel output level in dB for the [omx.5band~](https://docs.cycling74.com/reference/omx.5band~) object.

Arguments:

- level
  [float]

### outlevel\_rf

The word  outlevel\_rf , followed by a number, sets the right channel output level in dB for the [omx.5band~](https://docs.cycling74.com/reference/omx.5band~) object.

Arguments:

- level
  [float]

### outmix1

The word  outmix1 , followed by a number, sets the gain in dB applied to band 1 after compression.

Arguments:

- post-compression-gain
  [float]

### outmix2

The word  outmix2 , followed by a number, sets the gain in dB applied to band 2 after compression.

Arguments:

- post-compression-gain
  [float]

### outmix3

The word  outmix3 , followed by a number, sets the gain in dB applied to band 3 after compression.

Arguments:

- post-compression-gain
  [float]

### outmix4

The word  outmix4 , followed by a number, sets the gain in dB applied to band 4 after compression.

Arguments:

- post-compression-gain
  [float]

### outmix5

The word  outmix5 , followed by a number, sets the gain in dB applied to band 5 after compression.

Arguments:

- post-compression-gain
  [float]

### output\_level

The word  output\_level , followed by a number, sets the output level. This setting is used for attenuating the output, but clipping will never occur even if you set it to gain. The gain for each channel will take both this control and the controls on the Global Settings page into account, but the gain for each channel will be clamped below 0 to prevent clipping.

Arguments:

- output level
  [int]

### saveSettings

The word  saveSettings  causes all parameter values to be sent out the third outlet.

### signal

Audio input, the signal or pair of signals to be compressed.

### spatial\_desired

The spatial enhancer separates the channels of mixes that are nearly (but not quite) mono by subtracting a bit of left from the right signal and vice versa, but only when the two are nearly the same. The word  spatial\_desired , followed by a number, sets the difference between the side signal and the combined (mono) signal,

Arguments:

- difference-between-signals (0-100)
  [int]

### spatial\_enabled

The word  spatial\_enabled , followed by a zero or one, disables/enables spatial enhancement.

Arguments:

- 0/1
  [int]

### spatial\_maximum

The spatial enhancer separates the channels of mixes that are nearly (but not quite) mono by subtracting a bit of left from the right signal and vice versa, but only when the two are nearly the same. The word  spatial\_maximum , followed by a number, sets the maximum gain on the two difference signals.

Arguments:

- maximum-gain
  [int]

### spatial\_speed

The spatial enhancer separates the channels of mixes that are nearly (but not quite) mono by subtracting a bit of left from the right signal and vice versa, but only when the two are nearly the same. The word  spatial\_speed , followed by a number, sets the speed of response to changes in separation.

Arguments:

- response speed
  [int]

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### list

Out third outlet: parameter values in response to  saveSettings  messages.

Out fourth outlet: meter data. When metering is turned on, lists of values will be output that describe various internal levels. See the description of the  meters  message.

### signal

Out leftmost two outlets: the input signals (if present), with dynamics processing applied.

## See Also

| Name | Description |
| --- | --- |
| [omx.4band~](https://docs.cycling74.com/reference/omx.4band~) | OctiMax 4-band Compressor |
| [omx.comp~](https://docs.cycling74.com/reference/omx.comp~) | OctiMax Compressor |
| [omx.peaklim~](https://docs.cycling74.com/reference/omx.peaklim~) | OctiMax Peak Limiter |
