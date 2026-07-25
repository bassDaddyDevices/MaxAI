---
type: msp
name: "phasor~"
summary: "Generate sawtooth signals"
signal: true
url: "https://docs.cycling74.com/reference/phasor~/"
package: "MSP"
see_also: ["2d.wave~", "cycle~", "kink~", "line~", "saw~", "subdiv~", "swing~", "sync~", "techno~", "transport", "trapezoid~", "triangle~", "updown~", "wave~"]
---
# phasor~

Generate sawtooth signals

## Description

Use the [phasor~](https://docs.cycling74.com/reference/phasor~) object to generate sawtooth waves suitable for sample-accurate control and timing tasks. For smoother sounding sawtooth generation, use the bandlimited [saw~](https://docs.cycling74.com/reference/saw~) object instead. The ramp rate can be set by frequency (Hz), or as an interval using the tempo-relative Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax.

## Arguments

### initial-frequency[list]time-value optional

Set the initial frequency in Hz, or as an interval using the tempo-relative Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax) syntax.

## Attributes

### frequency[Time Value]: 0 ms

Ramp rate or interval

### jitter[float]

The jitter attributes sets the range of random frequency variation on each phase reset. The frequency deviation above and below will be 1/100th of the value of jitter times the frequency. Example: if the current frequency is 440 and jitter is 1.0, [phasor~](https://docs.cycling74.com/reference/phasor~) will generate random frequencies between 439.56 and 440.44 Hz. jitter only applies when a signal is not connected to the frequency inlet and the lock attribute is disabled.

### limit[float]

The limit attribute sets an absolute amount by which the frequency can vary from its set value as a result of a non-zero jitter attribute. If jitter is reduced, the frequency may be changed gradually to bring it closer to the set value.

### lock[int]

When lock is set to 1, the [phasor~](https://docs.cycling74.com/reference/phasor~) is synchronized to the Max (or Max for Live) transport. When the transport is off, the [phasor~](https://docs.cycling74.com/reference/phasor~) will output a frequency of zero. For accurate timing, [Scheduler in Audio Interrupt](https://docs.cycling74.com/userguide/scheduler) must be enabled. The lock attribute will only accept frequencies specified using notevalues.

### phaseoffset[float]

The phaseoffset attribute sets the initial phase when audio is turned on as well as the phase assigned when [phasor~](https://docs.cycling74.com/reference/phasor~) receives the  reset  message. The phaseoffset is useful when decorrelating multiple instances within an [mc.phasor~](https://docs.cycling74.com/reference/mc.phasor~). If the phaseoffset attribute has never been set or the word phaseoffset is sent with no arguments, the initial phase will nor be changed when audio processing is started. When you set the phase with a  float  in the right inlet, it is an immediate change but it only happens once. The phaseoffset attribute makes it possible to set up repeatable phase relationships between multiple [phasor~](https://docs.cycling74.com/reference/phasor~) objects or when using [mc.phasor~](https://docs.cycling74.com/reference/mc.phasor~).

### syncupdate[int]

When syncupdate is set to 1, the [phasor~](https://docs.cycling74.com/reference/phasor~) frequency is only set at the end of its cycle, when the phase jumps to 0. In this mode, [phasor~](https://docs.cycling74.com/reference/phasor~) will not instantly change its slope when it receives a frequency change, but will instead wait until the phase resets. This can prevent typical pitch glitches when reading from a buffer.

### transport[symbol]: internal

This attribute names a time [transport](https://docs.cycling74.com/reference/transport). If frequency is specified using a 'relative' unit (for example: ticks, bars.beats.units, or notevalues), then the named [transport](https://docs.cycling74.com/reference/transport) is used to determine the frequency based on tempo, time-signature, and other related information. The default value is the global 'internal' transport.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

When syncupdate is set to 1  ***and***  there is no signal input connected to the left inlet, a bang in the left inlet will force the frequency to update immediately (instead of waiting for the phase cycle to end and jump back to 0).

### int

In left inlet: Set the frequency of the sawtooth waveform (Hz). If a signal is connected to this inlet, this message is ignored.

In right inlet: Set the phase of the waveform (from 0 to 1). Signal output continues from this phase.

Arguments:

- frequency
  [int]

### float

In left inlet: Set the frequency of the sawtooth waveform (Hz). If a signal is connected to this inlet, this message is ignored.

In right inlet: Set the phase of the waveform (from 0 to 1). Signal output continues from this phase.

Arguments:

- frequency
  [float]

### list

Set ramp interval in Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax.

Arguments:

- transport/time-settings
  [list]

### anything

Set ramp interval in Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax.

Arguments:

- transport/time-settings
  [list]

### reset

The  reset  message immediately sets the phase to the value of the phaseoffset attribute.

### signal

In left inlet: Set frequency in Hz

In right inlet: A signal connected to the right inlet can trigger a phase reset with a non-zero value. When a signal-triggered reset occurs, the phase will be set to the current value of the phaseoffset attribute.

## Output

### signal

Waveform that increases from 0 to 1 repeatedly at the specified frequency.

## See Also

| Name | Description |
| --- | --- |
| [2d.wave~](https://docs.cycling74.com/reference/2d.wave~) | Two-dimensional wavetable |
| [cycle~](https://docs.cycling74.com/reference/cycle~) | Sinusoidal oscillator |
| [kink~](https://docs.cycling74.com/reference/kink~) | Distort a sawtooth waveform |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [saw~](https://docs.cycling74.com/reference/saw~) | Antialiased sawtooth oscillator |
| [subdiv~](https://docs.cycling74.com/reference/subdiv~) | Integer Subdivision of a Phasor |
| [swing~](https://docs.cycling74.com/reference/swing~) | Subdivide a phasor into two unequal phasors |
| [sync~](https://docs.cycling74.com/reference/sync~) | Synchronize MSP with an external source |
| [techno~](https://docs.cycling74.com/reference/techno~) | Signal-driven step sequencer |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
| [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) | Trapezoidal wavetable |
| [triangle~](https://docs.cycling74.com/reference/triangle~) | Triangle/ramp wavetable |
| [updown~](https://docs.cycling74.com/reference/updown~) | Trapezoidal Function Generator With Constant Attack and Release |
| [wave~](https://docs.cycling74.com/reference/wave~) | Variable size wavetable |
