---
type: mc
name: "mc.gradient~"
summary: "Generate a time-varying function over the space of a multichannel signal"
signal: true
url: "https://docs.cycling74.com/reference/mc.gradient~/"
package: "MC"
see_also: ["MC", "cycle~", "function", "line~", "mc.cycle~", "mc.evolve~", "mc.line~", "mc.phasor~", "phasor~"]
---
# mc.gradient~

Generate a time-varying function over the space of a multichannel signal

## Description

Add breakpoints to the [mc.gradient~](https://docs.cycling74.com/reference/mc.gradient~) to specify a function where both the domain and range go from 0 to 1. The output range is mapped across the space of a multichannel signal. Connect a [phasor~](https://docs.cycling74.com/reference/phasor~) or another time-varying single- or multichannel signal to the [mc.gradient~](https://docs.cycling74.com/reference/mc.gradient~) object to drive its output.

## Arguments

### chans[int] optional

Change the number of channels in the output multichannel signal. The output channel count will not change until the audio is restarted. The default value of the chans attribute is 0 meaning the object's argument determines the number of output channels.

## Attributes

### chans[int]: 4

Sets the number of channels in the multichannel output signal

### mode[int]: 0

Determines the direction of oscillation over the functions domain. Options are up, down, and up/down. Currently only up mode is supported.

Possible values:

0 = 'up'
(
Values Increase
)
Oscillation values in the Y-range increase over the functions domain.

1 = 'down'
(
Values Decrease
)
Oscillation values in the Y-range decrease over the functions domain (not currently supported).

2 = 'up down'
(
Palindrome Mode
)
Oscillation values in the Y-range move up then down over the functions domain (not currently supported).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to float

Arguments:

- function-values
  [int]

### float

Return the function values for each channel at the specified x-position in the range 0.0 - 1.0.

Arguments:

- function-values
  [float]

### list

The  list  message adds a new breakpoint. Up to 4 values can be used to specify the x postion, upper y value, lower y value, and phase offset of the breakpoint. If the list contains two values, it creates a breakpoint with a fixed y value at the x postion. An optional third value specifies the lower y value range and a fourth value can be used to specify the phase value (default 0.). If the supplied x value matches an existing breakpoint, that breakpoint will be modified.

Arguments:

- x-value
  [number]
- y1-value
  [number]
- y2-value
  [number]
- phase
  [number]

### chanval

Returns the value of the output function for a given channel and input position.

Arguments:

- channel
  [int]
- x-position
  [float]

### clear

The  clear  message removes all breakpoints in the current function, restoring it to the default state.

### printfunction

The  printfunction  message prints the current function to the console.

### signal

A single channel signal controls all breakpoints. A multichannel signal maps each channel to a separate breakpoint as they are ordered from left to right, wrapping if the number of input channels is greater than the number of breakpoints.

## See Also

| Name | Description |
| --- | --- |
| [MC](https://docs.cycling74.com/userguide/mc) | MC |
| [cycle~](https://docs.cycling74.com/reference/cycle~) | Sinusoidal oscillator |
| [function](https://docs.cycling74.com/reference/function) | Breakpoint function editor |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [mc.cycle~](https://docs.cycling74.com/reference/mc.cycle~) | Sinusoidal oscillator (multichannel) |
| [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~) | Generate a periodic multichannel function from breakpoint ranges |
| [mc.line~](https://docs.cycling74.com/reference/mc.line~) | Linear signal ramp generator (multichannel) |
| [mc.phasor~](https://docs.cycling74.com/reference/mc.phasor~) | Generate sawtooth signals (multichannel) |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
