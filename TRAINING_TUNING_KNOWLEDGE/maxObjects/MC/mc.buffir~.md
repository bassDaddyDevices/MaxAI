---
type: mc
name: "mc.buffir~"
summary: "buffer-based FIR filter (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.buffir~/"
package: "MC"
see_also: ["biquad~", "buffer~", "cascade~"]
---
# mc.buffir~

buffer-based FIR filter (multichannel)

## Description

Use [buffir~](https://docs.cycling74.com/reference/buffir~) object when you need a finite impulse response (FIR) filter that convolves an input signal with samples from an input buffer.

## Arguments

### buffer-name[symbol] optional

The name of a [buffer~](https://docs.cycling74.com/reference/buffer~) object which [buffir~](https://docs.cycling74.com/reference/buffir~) uses to filter the input signal.

### read-offset[int or float]samples optional

The offset, in samples, into the [buffer~](https://docs.cycling74.com/reference/buffer~) object before [buffir~](https://docs.cycling74.com/reference/buffir~) begins reading samples to construct the filter. The default is 0.

### read-duration[int or float]samples optional

The size, in samples, of the slice in the [buffer~](https://docs.cycling74.com/reference/buffer~) which [buffir~](https://docs.cycling74.com/reference/buffir~) will use for the filter. The default is 0, and the maximum is 4096.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In middle inlet: The offset into the filter [buffer~](https://docs.cycling74.com/reference/buffer~) from which [buffir~](https://docs.cycling74.com/reference/buffir~) begins to read, in samples.

In right inlet: The size (in samples) of the slice from the [buffer~](https://docs.cycling74.com/reference/buffer~) which is used to filter the input signal (the maximum is 4096).

Arguments:

- read-offset
  [int]

### float

In middle inlet: The offset into the filter [buffer~](https://docs.cycling74.com/reference/buffer~) from which [buffir~](https://docs.cycling74.com/reference/buffir~) begins to read, in samples.

In right inlet: The size (in samples) of the slice from the [buffer~](https://docs.cycling74.com/reference/buffer~) which is used to filter the input signal (the maximum is 4096).

Arguments:

- read-offset
  [float]

### clear

The word  clear  erases (zeroes) the current input history for the filter.

### (mouse)

Double-clicking on [buffir~](https://docs.cycling74.com/reference/buffir~) opens a display window where you can view the contents of the [buffir~](https://docs.cycling74.com/reference/buffir~) object.

### set

The word  set , followed by the name of a [buffer~](https://docs.cycling74.com/reference/buffer~) object, an int which specifies sample offset, and an optional int which specifies a number of samples, specifies the name of a [buffer~](https://docs.cycling74.com/reference/buffer~) object which [buffir~](https://docs.cycling74.com/reference/buffir~) uses to filter its input signal.

Arguments:

- buffer-name
  [symbol]
- read-offset
  [int]
- read-duration
  [int]

### signal

In left inlet: The signal to be convolved with samples from the [buffer~](https://docs.cycling74.com/reference/buffer~).

In middle inlet: The offset (in samples) into the filter [buffer~](https://docs.cycling74.com/reference/buffer~) from which the [buffir~](https://docs.cycling74.com/reference/buffir~) object begins to read.

In right inlet: The size of the slice from the filter [buffer~](https://docs.cycling74.com/reference/buffer~) which is used to filter the input signal, in samples. The maximum is 4096.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The filtered signal, based on a convolution of the input signal with samples in the [buffer~](https://docs.cycling74.com/reference/buffer~).

## See Also

| Name | Description |
| --- | --- |
| [biquad~](https://docs.cycling74.com/reference/biquad~) | Two-pole, two-zero filter |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [cascade~](https://docs.cycling74.com/reference/cascade~) | Cascaded series of biquad filters |
