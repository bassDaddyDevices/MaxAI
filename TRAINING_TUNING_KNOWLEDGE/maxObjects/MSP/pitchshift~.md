---
type: msp
name: "pitchshift~"
summary: "Ztx-based real-time pitchshifting"
signal: true
url: "https://docs.cycling74.com/reference/pitchshift~/"
package: "MSP"
see_also: ["retune~"]
---
# pitchshift~

Ztx-based real-time pitchshifting

## Description

Use the [pitchshift~](https://docs.cycling74.com/reference/pitchshift~) object to load a perform pitch-shifting on an input signal.

## Arguments

### channels[int] optional

An optional argument can be used to specify the number of channels of the signal to be processed (default = 1).

## Attributes

### constantlatency[int]: 0

Constant Latency

### enabled[int]

Enable or disable pitchshifting.

### pitchshift[float]: 1.

Set the pitchshifting as a factor of the original pitch (i.e. 2.0 = doubling of pitch, .5 = halving of the original pitch, etc.).

### pitchshiftcent[int]: 0

Set the amount of pitchshift as positive or negative cent values (i.e. 100 = semitone up, -1200 = octave down). Cents may be specified as ints or floats.

### quality[symbol]

Pitch shifting output quality.

Possible values:

'basic'
(
Basic quality (the default)
)
'good'
(
Good quality
)
'better'
(
Better quality
)
'best'
(
Highest quality
)

### reportlatency[int]: 0

Enable/disable reporting latency, in samples, introduced by the [pitchshift~](https://docs.cycling74.com/reference/pitchshift~) object's calculations. Latency is output from the object's right-hand outlet in the form of a message in the form  latency [number-of-samples] .

### usecents[int]

Enable/disable the use of cent values in the second inlet of the [pitchshift~](https://docs.cycling74.com/reference/pitchshift~) object to specify pitch change.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### getlatency

The word  getlatency , followed by a zero or one, toggles reporting the latency, in samples, introduced by the [pitchshift~](https://docs.cycling74.com/reference/pitchshift~) object's calculations. Latency is output from the object's right-hand outlet in the form of a message in the form  latency [number-of-samples] .

### signal

The pitch of signal(s) in the left input(s) will be shifted. A signal in the rightmost inlet defines the shifting as a factor of the original pitch or in cents (when  usecents  is enabled).

## See Also

| Name | Description |
| --- | --- |
| [retune~](https://docs.cycling74.com/reference/retune~) | Ztx-based pitch detection and pitchshift |
