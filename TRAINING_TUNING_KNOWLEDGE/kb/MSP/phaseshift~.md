---
type: msp
name: "phaseshift~"
summary: "Distort the phase of a signal"
signal: true
url: "https://docs.cycling74.com/reference/phaseshift~/"
package: "MSP"
see_also: ["allpass~", "comb~"]
---
# phaseshift~

Distort the phase of a signal

## Description

The [phaseshift~](https://docs.cycling74.com/reference/phaseshift~) object is a 2nd-order allpass filter.

#### Discussion

The [phaseshift~](https://docs.cycling74.com/reference/phaseshift~) object provides a nonlinear delay time as a function of input frequency, emulating the phase shift elements found in analog phase shifter effects. Cascade several [phaseshift~](https://docs.cycling74.com/reference/phaseshift~) objects to create a more dramatic effect. Since phase shifting by itself is inaudible in most circumstances, usually you'll want to mix the output of [phaseshift~](https://docs.cycling74.com/reference/phaseshift~) with its input signal, so that frequency cancellations occur as the delayed signal is added to the original signal.

## Arguments

### frequency[number] optional

Center frequency of the phase transition band

### q[number] optional

Q (bandwidth) of the phase transition band

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Middle inlet: frequency at which signals will be shifted by 180 degrees

Right inlet: "Q" factor (steepness with which the phase shifts from 0 to 360 degrees)

Arguments:

- frequency/Q
  [float]

### clear

Reset filter state to zero internal feedback

### signal

Left inlet: the signal to be shifted in phase

Middle inlet: frequency at which signals will be shifted by 180 degrees

Right inlet: "Q" factor (steepness with which the phase shifts from 0 to 360 degrees)

## Output

### signal

The input signal, its the frequency components or harmonics shifted in phase from zero to 360 degrees, dependent upon their frequency and the values of the object's frequency and Q parameters.

## See Also

| Name | Description |
| --- | --- |
| [allpass~](https://docs.cycling74.com/reference/allpass~) | Apply an allpass filter effect |
| [comb~](https://docs.cycling74.com/reference/comb~) | Apply a comb filter effect |
