---
type: mc
name: "mc.evolve~"
summary: "Generate a periodic multichannel function from breakpoint ranges"
signal: true
url: "https://docs.cycling74.com/reference/mc.evolve~/"
package: "MC"
see_also: ["MC Function Generators", "multirange", "mc.gradient~", "mc.range~"]
---
# mc.evolve~

Generate a periodic multichannel function from breakpoint ranges

## Description

The [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~) object accepts breakpoints consisting of ranges where both the domain and range go from 0 to 1. It maps this set of ranges across the space of a multichannel output signal, where the first channel in the output signal outputs the low end of the range and the last channel outputs the high end. Connect a [phasor~](https://docs.cycling74.com/reference/phasor~) or another time-varying signal to [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~) to drive the output.

## Arguments

### chans[int] optional

Sets the number of channels in the output multichannel signal.

## Attributes

### chans[int]: 4

The number of output channels can be reduced from the value specified by the object's argument; in this case extra outputs will be zero and the output range will be spread over a smaller number of channels.

### inclusive[int]: 1

Determines how endpoint values are taken into account when calculating values for each output channel.

Possible values:

0 = 'Neither'
(
Ignore Endpoints
)
Use neither the low or high endpoint values when calculating mc channel values.

1 = 'Both'
(
Use Endpoints
)
Use the low enpoint value for the first channel and high endpoint value as the last channel when calculating mc channel values.

2 = 'Low Only'
(
Use Low
)
Uses the low endpoint value for the first channel and calculates all other channel values accordingly.

3 = 'High Only'
(
Use High
)
Uses the high endpoint value for the last channel and calculates all other channel values accordingly.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to float

Arguments:

- function index
  [int]

### float

When [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~) receive a float (0-1), it outputs a list out its right outlet containing its output range at the given location.

Arguments:

- function index
  [float]

### list

A list message adds a new breakpoint to the function stored by [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~). Up to 3 values can be used to specify the x (input) postion, upper y (output) value, and lower y (output) value. If the list contains two values, it creates a breakpoint with a fixed y value at the x postion. An optional 3rd value specifies the lower y value range.

Arguments:

- x-value
  [number]
- y1-value
  [number]
- y2-value
  [number]

### chanval

When [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~) receives a  chanval  message it will send the value of its output for a given channel index (1 - N) and input value (0-1). This value is a point within the output range at the given input position.

Arguments:

- channel
  [int]
- index
  [float]

### clear

The  clear  message with no arguments clears all breakpoints in the current function. An optional index argument can be used to specify a breakpoint to clear. Breakpoints indices are ordered based on their x-position, with position 0 representing the 0.0 x position. The [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~) object always maintains a breakpoint at both the 0. and 1. positions.

Arguments:

- breakpoint\_index
  [int]

### printfunction

Sending the  printfunction  message to [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~) prints each breakpoint in the current function on its own line to the console. Breakpoints are multi-element lists in the form  x: (float) y: (float1) (float2) .

### signal

Use a [phasor~](https://docs.cycling74.com/reference/phasor~) or other time-varying signal with a 0-1 range to drive the multichannel output of [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~).

## See Also

| Name | Description |
| --- | --- |
| [MC Function Generators](https://docs.cycling74.com/userguide/mc/mc_function_generators) | MC Function Generators |
| [multirange](https://docs.cycling74.com/reference/multirange) | Graphical function breakpoint editor |
| [mc.gradient~](https://docs.cycling74.com/reference/mc.gradient~) | Generate a time-varying function over the space of a multichannel signal |
| [mc.range~](https://docs.cycling74.com/reference/mc.range~) | Generate a multichannel signal with a range of constant values |
