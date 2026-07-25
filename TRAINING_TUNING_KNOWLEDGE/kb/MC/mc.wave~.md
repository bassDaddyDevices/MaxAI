---
type: mc
name: "mc.wave~"
summary: "Variable size wavetable (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.wave~/"
package: "MC"
see_also: ["2d.wave~", "buffer~", "buffir~", "groove~", "phasor~", "play~", "sync~"]
---
# mc.wave~

Variable size wavetable (multichannel)

## Description

[wave~](https://docs.cycling74.com/reference/wave~) reads from a portion of a [buffer~](https://docs.cycling74.com/reference/buffer~) to produce a repeating waveform, given a signal input that goes between 0 and 1 (for example, using a [phasor~](https://docs.cycling74.com/reference/phasor~)) to define the position in the buffer. When the [wave~](https://docs.cycling74.com/reference/wave~) object is instantiated as [mcs.wave~](https://docs.cycling74.com/reference/mcs.wave~) its outputs are combined into a single multichannel output but otherwise it functions identically to [wave~](https://docs.cycling74.com/reference/wave~).

## Arguments

### buffer-name[symbol] optional

Obligatory. Names the [buffer~](https://docs.cycling74.com/reference/buffer~) object whose sample memory is used by [wave~](https://docs.cycling74.com/reference/wave~) for its stored waveform. Note that if the underlying data in a [buffer~](https://docs.cycling74.com/reference/buffer~) changes, the signal output of [wave~](https://docs.cycling74.com/reference/wave~) will change, since it does not copy the sample data in a [buffer~](https://docs.cycling74.com/reference/buffer~). [wave~](https://docs.cycling74.com/reference/wave~) always uses the first channel of a multi-channel [buffer~](https://docs.cycling74.com/reference/buffer~).

### start-point[number]ms optional

After the [buffer~](https://docs.cycling74.com/reference/buffer~) name argument, you can type in a value for the start and end points of the waveform as millisecond offset from the beginning of a [buffer~](https://docs.cycling74.com/reference/buffer~) object's sample memory. By default, the start point is 0. If you want to set a non-zero start point but retain the sample end as the waveform end point, use only a single typed-in argument after the [buffer~](https://docs.cycling74.com/reference/buffer~) name. The [wave~](https://docs.cycling74.com/reference/wave~) object uses the [buffer~](https://docs.cycling74.com/reference/buffer~) sampling rate to determine loop points. If a  signal  is connected to the start point (middle) inlet, the initial waveform start point argument is ignored.

### end-point[number]ms optional

After the start point argument, you can type in a value for the end point of the waveform, as a millisecond offsets from the beginning of a [buffer~](https://docs.cycling74.com/reference/buffer~) object's sample memory. By default, the end point is the end of the sample. If a  signal  is connected to the end point (right) inlet, the initial waveform end point is ignored.

### number-of-output-channels[int] optional

Sets the number of output channels, which determines the number of outlets that the [wave~](https://docs.cycling74.com/reference/wave~) object will have. If the [buffer~](https://docs.cycling74.com/reference/buffer~) object being played by [wave~](https://docs.cycling74.com/reference/wave~) has more channels than the number of outputs of [wave~](https://docs.cycling74.com/reference/wave~), the extra channels are not played. If the [buffer~](https://docs.cycling74.com/reference/buffer~) object has fewer channels, the extra [wave~](https://docs.cycling74.com/reference/wave~) signal outputs are 0.

## Attributes

### interp[int]

The interpolation modes are:

 Value -  Description

 0 - No interpolation. Wavetable interpolation is disabled using the interp 0 message.

 1 - High-quality linear interpolation (default)

 2 - Low-quality linear interpolation. This mode uses the interpolation method found in MSP 1.x versions of the [wave~](https://docs.cycling74.com/reference/wave~) object. While this mode is faster than mode 1, it cannot play [buffer~](https://docs.cycling74.com/reference/buffer~) objects of arbitrary length and produces more interpolation artifacts.

 3 - Cosine interpolation

 4 - Cubic interpolation

 5 - Spline interpolation

 6 - Hermite interpolation

Possible values:

0 = 'None'
(
No interpolation
)
1 = 'Linear'

2 = 'Low-Quality'

3 = 'Cosine'
(
Cosine interpolation
)
4 = 'Cubic'
(
Cubic interpolation
)
5 = 'Spline'
(
Spline interpolation
)
6 = 'Hermite'
(
Hermite interpolation
)

### interp\_bias[float]

Set the bias parameter for Hermite interpolation

### interp\_tension[float]

Set the tension parameter for Hermite interpolation

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In middle or right inlets: Numbers can be used instead of signal objects to control the start and end points of the waveform, provided a  signal  is not connected to the inlet that receives the number. The [wave~](https://docs.cycling74.com/reference/wave~) object uses the [buffer~](https://docs.cycling74.com/reference/buffer~) sampling rate to determine loop points.

Arguments:

- start/end-point
  [int]

### float

In middle or right inlets: Numbers can be used instead of signal objects to control the start and end points of the waveform, provided a  signal  is not connected to the inlet that receives the number. The [wave~](https://docs.cycling74.com/reference/wave~) object uses the [buffer~](https://docs.cycling74.com/reference/buffer~) sampling rate to determine loop points.

Arguments:

- start/end-point
  [float]

### list

A list message sent to the left inlet with two values will set the start and end points of the waveform in milliseconds. The first value determines the start point and the second value determines the endpoint.

Arguments:

- start/end-point
  [list]

### (mouse)

Double-clicking on the [wave~](https://docs.cycling74.com/reference/wave~) object will open a window that displays the audio file loaded in the buffer associated with the object.

### set

The word  set , followed by a  symbol , sets the [buffer~](https://docs.cycling74.com/reference/buffer~) used by [wave~](https://docs.cycling74.com/reference/wave~) for its stored waveform. The  symbol  can optionally be followed by two values setting new waveform start and end points. If the values are not present, the default start and end points (the start and end of the sample) are used. If signal objects are connected to the start and/or end point inlets, the start and/or end point values are ignored.

Arguments:

- buffer-name
  [symbol]
- start-point (millisecond-offset)
  [float]
- end-point (millisecond-offset)
  [float]

### signal

In left inlet: Input signal values progressing from 0 to 1 are used to scan a specified range of samples in a [buffer~](https://docs.cycling74.com/reference/buffer~) object. The output of a [phasor~](https://docs.cycling74.com/reference/phasor~) can be used to control [wave~](https://docs.cycling74.com/reference/wave~) as an oscillator, treating the range of samples in the [buffer~](https://docs.cycling74.com/reference/buffer~) as a repeating waveform. However, note that when changing the frequency of a [phasor~](https://docs.cycling74.com/reference/phasor~) connected to the left inlet of [wave~](https://docs.cycling74.com/reference/wave~), the perceived pitch of the signal coming out of [wave~](https://docs.cycling74.com/reference/wave~) may not correspond exactly to the frequency of [phasor~](https://docs.cycling74.com/reference/phasor~) itself if the stored waveform contains multiple or partial repetitions of a waveform. You can invert the [phasor~](https://docs.cycling74.com/reference/phasor~) to play the waveform backwards.

In middle inlet: The start of the waveform as a millisecond offset from the beginning of a [buffer~](https://docs.cycling74.com/reference/buffer~) object's sample memory.

In right inlet: The end of the waveform as a millisecond offset from the beginning of a [buffer~](https://docs.cycling74.com/reference/buffer~) object's sample memory.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The portion of the [buffer~](https://docs.cycling74.com/reference/buffer~) specified by the [wave~](https://docs.cycling74.com/reference/wave~) object's start and end points is scanned by signal values ranging from 0 to 1 in the [wave~](https://docs.cycling74.com/reference/wave~) object's inlet, and the corresponding sample value from the [buffer~](https://docs.cycling74.com/reference/buffer~) is sent out the [wave~](https://docs.cycling74.com/reference/wave~) object's outlet. If the signal received in wave's inlet is a repeating signal such as a sawtooth wave from a [phasor~](https://docs.cycling74.com/reference/phasor~), the resulting output will be a waveform (excerpted from the [buffer~](https://docs.cycling74.com/reference/buffer~)) repeating at the frequency corresponding to the repetition of the input signal.

## See Also

| Name | Description |
| --- | --- |
| [2d.wave~](https://docs.cycling74.com/reference/2d.wave~) | Two-dimensional wavetable |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [play~](https://docs.cycling74.com/reference/play~) | Position-based sample playback |
| [sync~](https://docs.cycling74.com/reference/sync~) | Synchronize MSP with an external source |
