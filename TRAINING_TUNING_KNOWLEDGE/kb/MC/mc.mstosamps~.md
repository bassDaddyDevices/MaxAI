---
type: mc
name: "mc.mstosamps~"
summary: "Convert milliseconds to samples  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.mstosamps~/"
package: "MC"
see_also: ["dspstate~", "sampstoms~"]
---
# mc.mstosamps~

Convert milliseconds to samples (multichannel)

## Description

Use the [mstosamps~](https://docs.cycling74.com/reference/mstosamps~) object to convert an incoming signal carrying a millisecond value and output a signal which converts those millisecond values to a number of samples (at the current sampling rate).

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Millisecond values received in the inlet are converted to a number of samples at the current sampling rate and sent out the object's right outlet. The output might contain a fractional number of samples. For example, at 44.1 kHz sampling rate, 3.2 milliseconds is 141.12 samples.

Arguments:

- millisecond-value
  [int]

### float

Millisecond values received in the inlet are converted to a number of samples at the current sampling rate and sent out the object's right outlet. The output might contain a fractional number of samples. For example, at 44.1 kHz sampling rate, 3.2 milliseconds is 141.12 samples.

Arguments:

- millisecond-value
  [float]

### list

TEXT\_HERE

### signal

Incoming millisecond values in the signal are converted to a number of samples at the current sampling rate and output as a signal out the [mstosamps~](https://docs.cycling74.com/reference/mstosamps~) object's left outlet. The output may contain a fractional number of samples.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### float

Out right outlet: The number of samples corresponding to the millisecond value received as a  float  or  int  in the inlet.

### signal

Out left outlet: The number of samples corresponding to the millisecond values in the input signal.

## See Also

| Name | Description |
| --- | --- |
| [dspstate~](https://docs.cycling74.com/reference/dspstate~) | Report current DSP settings |
| [sampstoms~](https://docs.cycling74.com/reference/sampstoms~) | Convert time from samples to milliseconds |
