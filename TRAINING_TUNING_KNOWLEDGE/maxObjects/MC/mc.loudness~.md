---
type: mc
name: "mc.loudness~"
summary: "Report loudness of a signal (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.loudness~/"
package: "MC"
see_also: ["meter~", "levelmeter~", "snapshot~", "mcs.loudness~", "average~", "avg~", "peakamp~"]
---
# mc.loudness~

Report loudness of a signal (multichannel)

## Description

The [loudness~](https://docs.cycling74.com/reference/loudness~) object reports the loudness of a signal according to the EBU R 128 standard. Momentary, short term, and integrated loudness measures are reported in LUFS (loudness units referenced to full scale). Additionally, the signal's loudness range is reported in loudness units, while sample peak true peak values are reported in dB. You can use these measurements to normalize audio signals for various broadcast and streaming platforms.

## Arguments

### channelcount[int] optional

If present, a number specifies the number of input signal inlets. The default is a single input signal inlet. When multiple input signals are used, the loudness calculations will be integrated across all signals.

## Attributes

### channel[int]: -1

The channel attribute allows you to select a specific input signal for peak measurement. The default value of 0 reports the highest sample peak among all input signals, a non-zero value reports the sample peak in a specific input signal.

### inputs[int]: 1

The number of signal input channels. The inputs attribute can only be set as a typed-in argument.

### interval[float]: 0.

When the interval attribute is non-zero, the [loudness~](https://docs.cycling74.com/reference/loudness~) object reports loudness values automatically at a specified interval in milliseconds. Measurements for momentary and short-term loudness are taken over a sliding window, so they may change more frequently than the interval measured (400 ms for momentary and 3 seconds for short-term). When the interval is 0, automatic reporting is disabled and a  bang  or  int  message is required to report the loudness.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reports all loudness and peak values

### int

A value of 0 reports the highest sample peak among all input signals, a non-zero value reports the sample peak in a specific input signal.

### float

Converted to  int

### reset

The  reset  message resets the integrated loudness and peak value calculations. You may wish to do this at the beginning of playing back an audio program for which you want a global loudness measurement. These calculations are also reset when restarting audio.

### signal

Signal to be measured

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
| [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) | RMS level meter |
| [snapshot~](https://docs.cycling74.com/reference/snapshot~) | Convert signal values to numbers |
| [mcs.loudness~](https://docs.cycling74.com/reference/mcs.loudness~) |  |
| [average~](https://docs.cycling74.com/reference/average~) | Multi-mode signal average |
| [avg~](https://docs.cycling74.com/reference/avg~) | Signal average |
| [peakamp~](https://docs.cycling74.com/reference/peakamp~) | Report the maximum amplitude of a signal |
