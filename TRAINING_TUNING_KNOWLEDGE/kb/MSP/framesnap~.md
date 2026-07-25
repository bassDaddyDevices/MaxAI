---
type: msp
name: "framesnap~"
summary: "Output an FFT frame or signal vector as a list"
signal: true
url: "https://docs.cycling74.com/reference/framesnap~/"
package: "MSP"
see_also: ["cartopol", "cartopol~", "fft~", "fftin~", "fftinfo~", "fftout~", "frame~", "frameaccum~", "framedelta~", "ifft~", "in", "out", "poltocar", "poltocar~", "vectral~"]
---
# framesnap~

Output an FFT frame or signal vector as a list

## Description

The [framesnap~](https://docs.cycling74.com/reference/framesnap~) object is similar to [snapshot~](https://docs.cycling74.com/reference/snapshot~) but outputs a list with the contents of a signal vector convenient for capturing an FFT frame when used inside a [pfft~](https://docs.cycling74.com/reference/pfft~) object.

## Arguments

### interval[int] optional

An optional number argument sets the internal sampling interval in milliseconds. If the argument is 0 or not present, [framesnap~](https://docs.cycling74.com/reference/framesnap~) will not generate output automatically. In this case, you will need to send a  bang  message to output a frame of signal data.

## Attributes

### active[int]

Enables/disables output of the [framesnap~](https://docs.cycling74.com/reference/framesnap~) object.

### interval[Time Value]: 0 ms

Sets the output interval. The interval can be specified in any Max time format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  message produces a list containing the contents of the current signal vector.

### int

See  float  message below.

Arguments:

- report
  [int]

### float

(In left inlet) Sending a non-zero number to the left inlet starts the object's automatic reporting of signal values. A zero received in the left inlet stops automatic reporting.

(In right inlet) A number sent to the right inlet of the [framesnap~](https://docs.cycling74.com/reference/framesnap~) object sets the internal sampling interval in milliseconds. If the interval is set to 0, [framesnap~](https://docs.cycling74.com/reference/framesnap~) will not generate output automatically. In this case, you will need to send a  bang  message to output a frame of signal data.

Arguments:

- report
  [float]

### list

Any message that conforms to the Max time format ( ms ,  hh:mm:ss ,  ticks bars.beats.units ,  notevalues ,  hz , or  samples ) can be used to specify the internal sampling interval used by the [framesnap~](https://docs.cycling74.com/reference/framesnap~) object.

Arguments:

- time
  [list]

### anything

Any message that conforms to a Max time format message (e.g.  ms ,  hh:mm:ss ,  ticks bars.beats.units ,  notevalues ,  hz , or  samples ,) can be used to specify the internal sampling interval used by the [framesnap~](https://docs.cycling74.com/reference/framesnap~) object.

Arguments:

- time
  [list]

### sampleinterval

The word  sampleinterval , followed by an integer, sets the internal sampling interval in milliseconds.

Arguments:

- time
  [int]

### signal

A signal connected to the [framesnap~](https://docs.cycling74.com/reference/framesnap~) object's left inlet will used to output a list when the object receives a  bang  or its internal sample interval clock fires.

### start

The message  start  starts the [framesnap~](https://docs.cycling74.com/reference/framesnap~) object's automatic output if the sample interval is non-zero. If the sample output is zero, the  start  message is equivalent to the  bang  message, causing a single signal vector output.

### stop

The message  stop  stops the [framesnap~](https://docs.cycling74.com/reference/framesnap~) object from automatic output if its sample interval is non-zero.

## See Also

| Name | Description |
| --- | --- |
| [cartopol](https://docs.cycling74.com/reference/cartopol) | Convert cartesian to polar coordinates |
| [cartopol~](https://docs.cycling74.com/reference/cartopol~) | Signal Cartesian to Polar coordinate conversion |
| [fft~](https://docs.cycling74.com/reference/fft~) | Fast Fourier transform |
| [fftin~](https://docs.cycling74.com/reference/fftin~) | Input for a patcher loaded by pfft~ |
| [fftinfo~](https://docs.cycling74.com/reference/fftinfo~) | Report information about a patcher loaded by pfft~ |
| [fftout~](https://docs.cycling74.com/reference/fftout~) | Output for a patcher loaded by pfft~ |
| [frame~](https://docs.cycling74.com/reference/frame~) | Output a list as an FFT frame or a signal vector |
| [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) | Compute "running phase" of successive phase deviation frames |
| [framedelta~](https://docs.cycling74.com/reference/framedelta~) | Compute phase deviation between successive FFT frames |
| [ifft~](https://docs.cycling74.com/reference/ifft~) | Inverse fast Fourier transform |
| [in](https://docs.cycling74.com/reference/in) | Message input for a patcher loaded by poly~ or pfft~ |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [poltocar](https://docs.cycling74.com/reference/poltocar) | Convert polar to cartesian coordinates |
| [poltocar~](https://docs.cycling74.com/reference/poltocar~) | Signal Polar to Cartesian coordinate conversion |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
