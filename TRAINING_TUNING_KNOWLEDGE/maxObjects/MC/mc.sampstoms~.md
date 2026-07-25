---
type: mc
name: "mc.sampstoms~"
summary: "Convert time from samples to milliseconds  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.sampstoms~/"
package: "MC"
see_also: ["dspstate~", "mstosamps~", "translate"]
---
# mc.sampstoms~

Convert time from samples to milliseconds (multichannel)

## Description

Use the [sampstoms~](https://docs.cycling74.com/reference/sampstoms~) object to convert an incoming signal carrying a time value in samples and output a signal which converts that number of samples to a number of milliseconds (at the current sampling rate).

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

A value representing a number of samples received in the inlet is converted to milliseconds at the current sampling rate and sent out the object's right outlet. The input may contain a fractional number of samples. For example, at 44.1 kHz sampling rate, 322.45 samples is 7.31 milliseconds. (A  float  or  int  input triggers output even when audio is off.)

Arguments:

- sample-value
  [int]

### float

A value representing a number of samples received in the inlet is converted to milliseconds at the current sampling rate and sent out the object's right outlet. The input may contain a fractional number of samples. For example, at 44.1 kHz sampling rate, 322.45 samples is 7.31 milliseconds. (A  float  or  int  input triggers output even when audio is off.)

Arguments:

- sample-value
  [float]

### list

TEXT\_HERE

### signal

Values in the signal represent a number of samples, and are converted to milliseconds at the current sampling rate to output as a signal out the left outlet. The input may contain a fractional number of samples.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### float

Out right outlet: A number of milliseconds corresponding to a number of samples received in the inlet.

### signal

Out left outlet: A  signal  consisting of the number of milliseconds corresponding to values representing a number of samples in the input  signal .

## See Also

| Name | Description |
| --- | --- |
| [dspstate~](https://docs.cycling74.com/reference/dspstate~) | Report current DSP settings |
| [mstosamps~](https://docs.cycling74.com/reference/mstosamps~) | Convert milliseconds to samples |
| [translate](https://docs.cycling74.com/reference/translate) | Convert between different time formats |
