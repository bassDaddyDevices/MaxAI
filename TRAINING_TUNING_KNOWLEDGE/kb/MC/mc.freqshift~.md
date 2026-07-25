---
type: mc
name: "mc.freqshift~"
summary: "Time-domain frequency shifter  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.freqshift~/"
package: "MC"
see_also: ["fbinshift~", "gizmo~", "hilbert~"]
---
# mc.freqshift~

Time-domain frequency shifter (multichannel)

## Description

[freqshift~](https://docs.cycling74.com/reference/freqshift~) is a time-domain frequency shifter (also known as a single-sideband ring modulator).

## Arguments

### frequency-shift[float]hz optional

A numerical argument will be used as the frequency shift in Hertz. The default is zero.

### frequency-shift[int]hz optional

A numerical argument will be used as the frequency shift in Hertz. The default is zero. .

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In right inlet: Converted to  float . A number value in the right inlet will be used as a frequency amount in Hertz by which the left input signal will be shifted.

Arguments:

- frequency-shift
  [int]

### float

In right inlet: a float in the right inlet will be used as a frequency amount in Hertz by which the left input signal will be shifted.

Arguments:

- frequency-shift
  [float]

### clear

Clears sample memory (in case the filter is blown up).

### resetphase

Resets the phase of the two cycles that modulate the sidebands of the incoming signal.

### signal

In left inlet: The signal present at the left inlet is frequency-shifted by the argument or value given in the right inlet.

In right inlet: a signal in the right inlet will be used as a frequency amount in Hertz by which the left input signal will be shifted.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The output is the frequency shifted signal.

## See Also

| Name | Description |
| --- | --- |
| [fbinshift~](https://docs.cycling74.com/reference/fbinshift~) | Frequency domain frequency shifter for pfft~ |
| [gizmo~](https://docs.cycling74.com/reference/gizmo~) | Frequency-domain pitch shifter for pfft~ |
| [hilbert~](https://docs.cycling74.com/reference/hilbert~) | Phase quadrature filter |
