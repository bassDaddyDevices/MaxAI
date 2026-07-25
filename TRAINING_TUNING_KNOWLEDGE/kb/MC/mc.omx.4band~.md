---
type: mc
name: "mc.omx.4band~"
summary: "OctiMax 4-band Compressor  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.omx.4band~/"
package: "MC"
see_also: ["omx.5band~", "omx.comp~", "omx.peaklim~"]
---
# mc.omx.4band~

OctiMax 4-band Compressor (multichannel)

## Description

[omx.4band~](https://docs.cycling74.com/reference/omx.4band~) delivers the signal-processing power of Octimax in a 4-band compressor.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bypass

The word  bypass  followed by a non-zero number will output the dry unchanged input signal straight out the outlet without any processing; followed by a 0, will output the signal effected by [omx.4band~](https://docs.cycling74.com/reference/omx.4band~).

Arguments:

- bypass-flag
  [int]

### choosePreset

The word  choosePreset , followed by a number in the range 0-2, selects a preset for the [omx.4band~](https://docs.cycling74.com/reference/omx.4band~) object. These presets are to be considered "starting points" and should be tweaked for your particular purpose or desired sound. The preset options are:

0: Standard - Appropriate for anything, all genres of music, movies, television viewing, etc.

1; Pop - Great for any modern genre including rock, country, trance.

2; Movies - Similar to standard but optimized for dynamic movie soundtracks.

Arguments:

- preset-number
  [int]

### gating\_threshold

The word  gating\_threshold , followed by a number, sets the release gate threshold (in dB below full scale). When the signal is below this threshold, the release time of the compressor will be slowed by a factor of 3.

Arguments:

- release-gate-threshold
  [float]

### inagc\_b1\_atk

The word  inagc\_b1\_atk , followed by a number, sets the attack rate for the input compressor. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- attack-rate-coefficient
  [int]

### inagc\_b1\_rel

The word  inagc\_b1\_rel , followed by a number, sets the release rate for the input compressor. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- release-rate-coefficient
  [int]

### inagc\_range

The word  inagc\_range , followed by a number, sets the maximum amount of gain in dB applied by the input compressor . The compression ratio is fixed at infinity:1.

Arguments:

- maximum-dB
  [int]

### lim\_drive

The word  lim\_drive , followed by a number, sets the overall gain in dB before peak limiting is applied.

Arguments:

- pre-peak-limiting-gain
  [float]

### mbagc\_b1\_atk

The word  mbagc\_b1\_atk , followed by a number, sets the attack rate for band 1. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- b1attack-rate-coefficient
  [int]

### mbagc\_b1\_drv

The word  mbagc\_b1\_drv , followed by a number, sets the gain in dB applied to band 1 before compression. Increasing the drive for a particular band applies more compression to those frequencies.

Arguments:

- b1drive-rate-coefficient
  [int]

### mbagc\_b1\_rel

The word  mbagc\_b1\_rel , followed by a number, sets the release rate for band 1. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- b2release-rate-coefficient
  [int]

### mbagc\_b2\_atk

The word  mbagc\_b2\_atk , followed by a number, sets the attack rate for band 2. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- b2attack-rate-coefficient
  [int]

### mbagc\_b2\_drv

The word  mbagc\_b2\_drv , followed by a number, sets the gain in dB applied to band 2 before compression. Increasing the drive for a particular band applies more compression to those frequencies.

Arguments:

- b2drive-rate-coefficient
  [int]

### mbagc\_b2\_rel

The word  mbagc\_b2\_rel , followed by a number, sets the release rate for band 2. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- b2release-rate-coefficient
  [int]

### mbagc\_b3\_atk

The word  mbagc\_b3\_atk , followed by a number, sets the attack rate for band 3. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- b3attack-rate-coefficient
  [int]

### mbagc\_b3\_drv

The word  mbagc\_b3\_drv , followed by a number, sets the gain in dB applied to band 3 before compression. Increasing the drive for a particular band applies more compression to those frequencies.

Arguments:

- b3drive-rate-coefficient
  [int]

### mbagc\_b3\_rel

The word  mbagc\_b3\_rel , followed by a number, sets the release rate for band 3. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- b3release-rate-coefficient
  [int]

### mbagc\_b4\_atk

The word  mbagc\_b4\_atk , followed by a number, sets the attack rate for band 4. The attack rate determines how quickly the compressor applies gain reduction. The value range is 0-150 on a logarithmic scale, with larger values indicating faster attack.

Arguments:

- b4attack-rate-coefficient
  [int]

### mbagc\_b4\_drv

The word  mbagc\_b4\_drv , followed by a number, sets the gain in dB applied to band 4 before compression. Increasing the drive for a particular band applies more compression to those frequencies.

Arguments:

- b4drive-rate-coefficient
  [int]

### mbagc\_b4\_rel

The word  mbagc\_b4\_rel , followed by a number, sets the release rate for band 4. The release rate determines how quickly the compressor returns to unity gain. The value range is 0-150 on a logarithmic scale, with larger values indicating faster release.

Arguments:

- b4release-rate-coefficient
  [int]

### mbagc\_range

The word  mbagc\_range , followed by a number, sets the maximum amount of gain in dB applied by the multiband compressor. This affects all four frequency bands. The compression ratio is fixed at infinity:1.

Arguments:

- maximum-dB
  [float]

### meterData

The word  meterData  will cause output (by instantaneous command as opposed to metering-interval described by the  meterRate  message) of values which describe the current state of various internal levels of the compressor, and can be used to drive GUI objects to provide visual feedback.

### meterRate

The word  meterRate , followed by a number, specifies the interval (in milliseconds) at which the meter data described above will be sent.

Arguments:

- output-interval
  [int]

### meters

The word  meters , followed by a 1 or 0, turns the metering output on or off. When metering is on, a list of values will be sent from the rightmost outlet at a rate specified by the  meterRate  message. These values describe the current state of various internal levels of the compressor, and can be used to drive GUI objects to provide visual feedback.

Arguments:

- metering-output-flag
  [int]

### ngenabled

The word  ngenabled , followed by a 1 or 0, turns the noise gate on or off. A noise gate is effective for reducing background hiss when no other signal is present. [omx.4band~](https://docs.cycling74.com/reference/omx.4band~) features two noise gates: one that operates on the entire signal, and one that only affects higher frequencies, such as hiss.

Arguments:

- noise-gate-enable-flag
  [int]

### ngthresh1

The word  ngthresh1 , followed by a number, sets the threshold level (in dB below full scale) at which the overall noise gate will be engaged.

Arguments:

- noise-gate-threshold
  [float]

### ngthresh2

The word  ngthresh2 , followed by a number, sets the threshold level (in dB below full scale) at which a noise gate will be applied to the treble frequencies only.

Arguments:

- treble-noise-gate-threshold
  [float]

### noisegate

The word  noisegate  followed by a number which specifies a value in dB, sets the noisegate threshold.

Arguments:

- dB value
  [int]

### outmix1

The word  outmix1 , followed by a number, sets the gain in dB applied to band 1 after compression.

Arguments:

- output-gain
  [float]

### outmix2

The word  outmix2 , followed by a number, sets the gain in dB applied to band 2 after compression.

Arguments:

- output-gain
  [float]

### outmix3

The word  outmix3 , followed by a number, sets the gain in dB applied to band 3 after compression.

Arguments:

- output-gain
  [float]

### outmix4

The word  outmix4 , followed by a number, sets the gain in dB applied to band 4 after compression.

Arguments:

- output-gain
  [float]

### saveSettings

The word  saveSettings  causes all parameter values to be sent out the third outlet.

### signal

Audio input, the signal or pair of signals to be compressed.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### list

Out third outlet: parameter values in response to  saveSettings  message.

Out fourth outlet: meter data. When metering is turned on, lists of values will be output that describe various internal levels. See the description of the  meters  message.

### signal

Out leftmost two outlets: the input signals (if present), with dynamics processing applied.

## See Also

| Name | Description |
| --- | --- |
| [omx.5band~](https://docs.cycling74.com/reference/omx.5band~) | OctiMax 5-band Compressor |
| [omx.comp~](https://docs.cycling74.com/reference/omx.comp~) | OctiMax Compressor |
| [omx.peaklim~](https://docs.cycling74.com/reference/omx.peaklim~) | OctiMax Peak Limiter |
