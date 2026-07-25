---
type: msp
name: "ioscbank~"
summary: "Interpolating oscillator bank"
signal: true
url: "https://docs.cycling74.com/reference/ioscbank~/"
package: "MSP"
see_also: ["oscbank~"]
---
# ioscbank~

Interpolating oscillator bank

## Description

[ioscbank~](https://docs.cycling74.com/reference/ioscbank~) is an interpolated oscillator bank with signal inputs to set oscillator frequency and magnitude.

## Arguments

### number-of-oscillators[int] optional

The number of oscillators.

### frequency-smoothing-factor[int]samples optional

The number of samples across which frequency smoothing is done.

### amplitude-smoothing-factor[int]samples optional

The number of samples across which amplitude smoothing is done.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Sets the frequency of the oscillator whose index is currently referenced to the current floating-point value of the signal. The default value is 0.

In 2nd inlet: Sets the magnitude (amplitude) of the oscillator whose index is currently referenced.

In 4th inlet: Sets the index of the oscillator currently being referenced.

Arguments:

- inlet-specific-parameter-settings
  [int]

### float

In left inlet: Sets the frequency of the oscillator whose index is currently referenced to the current floating-point value of the signal. The default value is 0.

In 2nd inlet: Sets the magnitude (amplitude) of the oscillator whose index is currently referenced.

In 3rd inlet: If  framesync  is enabled using the  framesync 1  message, a value in the range 0-1.0 sets the phase of the oscillator currently being referenced.

In 4th inlet: Sets the index of the oscillator currently being referenced.

Arguments:

- inlet-specific-parameter-settings
  [float]

### clear

The word  clear  sets the frequency of all oscillators to zero and zeros all amplitudes.

### copybuf

In left inlet: The word  copybuf , followed by a symbol that specifies a buffer, copies 4096 samples from the buffer into the [ioscbank~](https://docs.cycling74.com/reference/ioscbank~) object's internal wavetable. An optional second integer argument specifies the position in the buffer at which samples are loaded (offset).

Arguments:

- buffer-object-name
  [symbol]
- offset (samples)
  [int]

### framesync

The word  framesync , followed by a non-zero number, enables frame synchronous operation. When frame synchronous operation is enabled, a given index's values will only change or begin their interpolated ramps to the next value when the index input signal is 0 (or once per n sample frame). Otherwise, a given index's values will change or begin their interpolated ramps to the next value when the index input signal is equal to that index. The default is off.

Arguments:

- behavioral-flag (0 or nonzero)
  [int]

### freqsmooth

The word  freqsmooth , followed by a number, sets the number of samples across which frequency smoothing is done. The default is  1  (no smoothing).

Arguments:

- frequency-smoothing-factor (samples)
  [int]

### magsmooth

The word  magsmooth , followed by a number, sets the number of samples across which magnitude (amplitude) smoothing is done on an oscillator. The default is  0  (no amplitude smoothing).

Arguments:

- amplitude-smoothing-factor (samples)
  [int]

### set

The word  set , followed by pairs of floating-point values, sets the frequency and amplitude of an oscillator in the oscillator bank. A list of n pairs will set the first n oscillators in the [ioscbank~](https://docs.cycling74.com/reference/ioscbank~) object and zero the amplitude of all others.

Arguments:

- frequency
  [float]
- amplitude
  [float]

### signal

In left inlet: Sets the frequency of the oscillator whose index is currently referenced to the current floating-point value of the signal. The default value is 0.

In 2nd inlet: Sets the magnitude (amplitude) of the oscillator whose index is currently referenced.

In 3rd inlet: If  framesync  is enabled using the  framesync 1  message, a signal in the range 0-1.0 sets the phase of the oscillator currently being referenced.

In 4th inlet: Sets the index of the oscillator currently being referenced.

### silence

The word  silence  zeros the amplitude of all the oscillators.

### size

The word  size , followed by a number, sets the number of oscillators. The default is 64. The maximum number of oscillators is set by the argument first argument to the object.

Arguments:

- number-of-oscillators
  [int]

## Output

### signal

A waveform consisting of the sum of the specified frequencies and amplitudes.

## See Also

| Name | Description |
| --- | --- |
| [oscbank~](https://docs.cycling74.com/reference/oscbank~) | Non-interpolating oscillator bank |
