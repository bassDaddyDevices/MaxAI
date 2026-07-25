---
type: msp
name: "omx.peaklim~"
summary: "OctiMax Peak Limiter"
signal: true
url: "https://docs.cycling74.com/reference/omx.peaklim~/"
package: "MSP"
see_also: ["omx.4band~", "omx.5band~", "omx.comp~"]
---
# omx.peaklim~

OctiMax Peak Limiter

## Description

[omx.peaklim~](https://docs.cycling74.com/reference/omx.peaklim~) is a peak-limiter which allows for the specified control of signal amplitude.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bypass

The word  bypass  followed by a non-zero number will output the dry unchanged input signal straight out the outlet without any processing; followed by a 0, will output the signal effected by [omx.peaklim~](https://docs.cycling74.com/reference/omx.peaklim~).

Arguments:

- bypass-flag
  [int]

### ingain

The word  ingain , followed by a number 0-100, sets the gain (-24 to +24 dB) applied to the signal before limiting.

Arguments:

- pre-limiter-gain
  [float]

### meterData

When metering is on, the word  meterData  will cause a list of two values to be sent from the rightmost outlet at a rate specified by the  meterRate message . These values describe the gain reduction in dB currently applied to the two input signals.

### meterRate

The word  meterRate , followed by a number, specifies the interval (in milliseconds) at which the meter data described above will be sent.

Arguments:

- data-output-interval
  [int]

### meters

The word  meters , followed by a 1 or 0, turns the metering output on or off. Whe N metering is on, a list of two values will be sent from the rightmost outlet at a rate specified by the  meterRate message . These values describe the gain reduction in dB currently applied to the two input signals.

Arguments:

- metering-flag
  [int]

### mode

The word  mode , followed by a number, sets the limiter response mode as follows: 0 = punchy, 1 = smooth. Punchy response yields extremely short attack and release times, useful for transparent limiting, or to create loudness. However, if over-used, intermodulation distortion may result. Smooth response uses longer attack and release times. The result is still a fast look-ahead limiter, but with less intermodulation distortion and less punch.

Arguments:

- response-mode-flag
  [int]

### outgain

The word  outgain , followed by a number (0-100), sets the gain (-24 to +24 dB) applied to the signal after limiting.

Arguments:

- post-limiter-gain
  [float]

### saveSettings

The word  saveSettings  causes all parameter values to be sent out the third outlet.

### signal

Audio input, the signal or pair of signals to be compressed.

### threshold

The word  threshold , followed by a number (0-100), sets the limiter threshold (-24 to +24 dB below full scale). When the input signal level exceeds this threshold, it will be attenuated as necessary to keep the level below the threshold.

Arguments:

- limiter-threshold
  [float]

## Output

### list

Out third outlet: parameter values in response to  saveSettings  message.

Out fourth outlet: meter data. When metering is turned on, lists of values will be output that describe various internal levels. See the description of the  meters  message.

### signal

Out leftmost two outlets: the input signals (if present), with dynamics processing applied.

## See Also

| Name | Description |
| --- | --- |
| [omx.4band~](https://docs.cycling74.com/reference/omx.4band~) | OctiMax 4-band Compressor |
| [omx.5band~](https://docs.cycling74.com/reference/omx.5band~) | OctiMax 5-band Compressor |
| [omx.comp~](https://docs.cycling74.com/reference/omx.comp~) | OctiMax Compressor |
