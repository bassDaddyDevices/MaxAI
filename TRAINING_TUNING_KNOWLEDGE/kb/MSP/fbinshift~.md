---
type: msp
name: "fbinshift~"
summary: "Frequency domain frequency shifter for pfft~"
signal: true
url: "https://docs.cycling74.com/reference/fbinshift~/"
package: "MSP"
see_also: ["freqshift~", "gizmo~", "hilbert~"]
---
# fbinshift~

Frequency domain frequency shifter for pfft~

## Description

The [fbinshift~](https://docs.cycling74.com/reference/fbinshift~) object implements a frequency-domain frequency shifter that can be used inside a patch loaded by a [pfft~](https://docs.cycling74.com/reference/pfft~) object.

#### Discussion

The [fbinshift~](https://docs.cycling74.com/reference/fbinshift~) object works by shifting the frequency bins of an FFT'd signal (hence its name - a shortened form of "frequency-bin shifter"). All the frequencies of the complex input signal are shifted by the Hertz value speified. Positive Hertz values shift upward, whereas negative values shift downward. The [fbinshift~](https://docs.cycling74.com/reference/fbinshift~) object must be used inside a [pfft~](https://docs.cycling74.com/reference/pfft~); outside a [pfft~](https://docs.cycling74.com/reference/pfft~) it does nothing.

## Arguments

### frequency-shift[float]hz optional

A numerical argument will be used as the frequency shift in Hertz. The default is zero.

### frequency-shift[int]hz optional

Integer inputs are converted to floating-point values and used as the frequency shift in Hertz. The default is zero.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

In left inlet: The signal present at the left inlet is the real part of a frequency-domain signal coming from a [fftin~](https://docs.cycling74.com/reference/fftin~) object inside a [pfft~](https://docs.cycling74.com/reference/pfft~).

In middle inlet: The signal input to the middle inlet is the imaginary part of a frequency-domain signal coming from a [fftin~](https://docs.cycling74.com/reference/fftin~) object inside a [pfft~](https://docs.cycling74.com/reference/pfft~). Both real and imaginary inputs must be connected for the [fbinshift~](https://docs.cycling74.com/reference/fbinshift~) to work.

## Output

### signal

The output is the frequency shifted complex signal. The left outlet is the real component, and the right outlet is the imaginary component. These may be connected to the real and imaginary inputs of a [fftout~](https://docs.cycling74.com/reference/fftout~) object inside a [pfft~](https://docs.cycling74.com/reference/pfft~).

## See Also

| Name | Description |
| --- | --- |
| [freqshift~](https://docs.cycling74.com/reference/freqshift~) | Time-domain frequency shifter |
| [gizmo~](https://docs.cycling74.com/reference/gizmo~) | Frequency-domain pitch shifter for pfft~ |
| [hilbert~](https://docs.cycling74.com/reference/hilbert~) | Phase quadrature filter |
