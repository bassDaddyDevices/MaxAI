---
type: mc
name: "mc.index~"
summary: "Read from a (multichannel)  buffer~  with no interpolation"
signal: true
url: "https://docs.cycling74.com/reference/mc.index~/"
package: "MC"
see_also: ["buffer~", "buffir~", "count~", "fft~"]
---
# mc.index~

Read from a (multichannel) [buffer~](https://docs.cycling74.com/reference/buffer~) with no interpolation

## Description

Use [index~](https://docs.cycling74.com/reference/index~) to read from a [buffer~](https://docs.cycling74.com/reference/buffer~) object at a signal-driven sample index with no interpolation on the output.

#### Discussion

Since the [index~](https://docs.cycling74.com/reference/index~) object does no interpolation, it is less useful for general sample playback tasks than [play~](https://docs.cycling74.com/reference/play~), [groove~](https://docs.cycling74.com/reference/groove~) etc. However, it may be more accurate and efficient for special circumstances of using a [buffer~](https://docs.cycling74.com/reference/buffer~) as data storage such as for FFT windowing. Unlike [peek~](https://docs.cycling74.com/reference/peek~), the [buffer~](https://docs.cycling74.com/reference/buffer~) index to read is specified as a signal.

## Arguments

### buffer-name[symbol] optional

Buffer name

### buffer-channel-to-index[int] optional

Buffer channel to read

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In right inlet: Specify the channel to read

Arguments:

- buffer-channel
  [int]

### float

In right inlet: Converted to  int

Arguments:

- buffer-channel
  [int]

### (mouse)

Double-click to view the [buffer~](https://docs.cycling74.com/reference/buffer~) contents

### set

Set name of the [buffer~](https://docs.cycling74.com/reference/buffer~) to read

Arguments:

- buffer-name
  [symbol]

### signal

Set sample index

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

Out left outlet: Samples from the buffer at the sample indices specified by the input. No interpolation is performed if the input sample index is not an integer.

Out right outlet: A signal containing the current buffer channel. This signal can be connected to the right inlet of [poke~](https://docs.cycling74.com/reference/poke~) to guarantee that [index~](https://docs.cycling74.com/reference/index~) will produce output before [poke~](https://docs.cycling74.com/reference/poke~) consumes it. This technique is known as  *order forcing* .

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [count~](https://docs.cycling74.com/reference/count~) | Count samples elapsed |
| [fft~](https://docs.cycling74.com/reference/fft~) | Fast Fourier transform |
