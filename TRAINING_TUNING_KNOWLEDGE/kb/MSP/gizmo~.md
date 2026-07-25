---
type: msp
name: "gizmo~"
summary: "Frequency-domain pitch shifter for pfft~"
signal: true
url: "https://docs.cycling74.com/reference/gizmo~/"
package: "MSP"
see_also: ["fbinshift~", "freqshift~", "hilbert~", "pitchshift~", "retune~"]
---
# gizmo~

Frequency-domain pitch shifter for pfft~

## Description

The [gizmo~](https://docs.cycling74.com/reference/gizmo~) object implements a frequency-domain pitch shifter. It works by analyzing the frequency bins of an FFT'd signal, finding the peaks in the spectrum, and shifting them along the frequency axis to transpose the sound.

#### Discussion

The [gizmo~](https://docs.cycling74.com/reference/gizmo~) object must be used inside a [pfft~](https://docs.cycling74.com/reference/pfft~) with an overlap of 4 or more -- using an overlap of 2 will produce quite audible amplitude modulation. When used outside a [pfft~](https://docs.cycling74.com/reference/pfft~) it does nothing.

## Arguments

### default-pitch-scalar[float or int] optional

A numerical argument will be used as the default pitch shift scalar. The default is 1.0 (no pitch scaling).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clip

In left inlet: The word  clip , followed by a zero or one, disables or enables the clipping of clips any out-of-range peaks caused by transposition rather than of folding them over. The default is off (equivalent to the message  clip 0 , so the [gizmo~](https://docs.cycling74.com/reference/gizmo~) object behaves like a time-domain transposer. Clipping may be turned off to avoid unwanted aliasing, and its use will probably depend on the sound being transposed and the range of transposition.

Arguments:

- frequency-clipping-flag (0 or nonzero)
  [int]

### freqshift

In left inlet: The word  freqshift  followed by a numerical value representing a positive or negative frequency in Hertz will be used as a frequency offet for the scaled amplitude peaks in the frequency spectrum. This corresponds to a frequency-shift of the transposed signal (see the [freqshift~](https://docs.cycling74.com/reference/freqshift~) or [fbinshift~](https://docs.cycling74.com/reference/fbinshift~) objects for additional information).

Arguments:

- frequency-shift
  [float]

### signal

In left inlet: The signal present at the left inlet is the real part of a frequencydomain signal coming from a [fftin~](https://docs.cycling74.com/reference/fftin~) object inside a [pfft~](https://docs.cycling74.com/reference/pfft~).

In middle inlet: The signal input to the middle inlet is the imaginary part of a frequency-domain signal coming from a [fftin~](https://docs.cycling74.com/reference/fftin~) object inside a [pfft~](https://docs.cycling74.com/reference/pfft~). Both real and imaginary inputs must be connected for [gizmo~](https://docs.cycling74.com/reference/gizmo~) to work.

## Output

### signal

The output is the pitch-shifted complex signal. The left outlet is the real component, and the right outlet is the imaginary component. These may be connected to the real and imaginary inputs of a [fftout~](https://docs.cycling74.com/reference/fftout~) object inside a [pfft~](https://docs.cycling74.com/reference/pfft~).

## See Also

| Name | Description |
| --- | --- |
| [fbinshift~](https://docs.cycling74.com/reference/fbinshift~) | Frequency domain frequency shifter for pfft~ |
| [freqshift~](https://docs.cycling74.com/reference/freqshift~) | Time-domain frequency shifter |
| [hilbert~](https://docs.cycling74.com/reference/hilbert~) | Phase quadrature filter |
| [pitchshift~](https://docs.cycling74.com/reference/pitchshift~) | Ztx-based real-time pitchshifting |
| [retune~](https://docs.cycling74.com/reference/retune~) | Ztx-based pitch detection and pitchshift |
