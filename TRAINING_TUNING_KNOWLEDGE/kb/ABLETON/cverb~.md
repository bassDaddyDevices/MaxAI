---
type: ableton
name: "cverb~"
summary: "A simple monaural reverberator"
signal: true
url: "https://docs.cycling74.com/reference/cverb~/"
package: "Max for Live"
see_also: ["tapin~", "tapout~", "allpass~"]
---
# cverb~

A simple monaural reverberator

## Description

[cverb~](https://docs.cycling74.com/reference/cverb~) provides monaural reverberation for an input signal.

## Arguments

### reverb-time[int]ms optional

Sets the reverb time in milliseconds.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

In right inlet: A floating point value in the right inlet is used to set the reverberation time in milliseconds.

Arguments:

- reverb-time
  [float]

### clear

Clears the memory of the reverb (which may produce a click in the output).

### signal

In left inlet: Audio input to the reverberator.

In right inlet: A signal value may be used to set the reverberation time in milliseconds.

## See Also

| Name | Description |
| --- | --- |
| [tapin~](https://docs.cycling74.com/reference/tapin~) | Input to a delay line |
| [tapout~](https://docs.cycling74.com/reference/tapout~) | Output from a delay line |
| [allpass~](https://docs.cycling74.com/reference/allpass~) | Apply an allpass filter effect |
