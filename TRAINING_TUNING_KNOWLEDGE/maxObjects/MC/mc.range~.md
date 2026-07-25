---
type: mc
name: "mc.range~"
summary: "Generate a multichannel signal with a range of constant values"
signal: true
url: "https://docs.cycling74.com/reference/mc.range~/"
package: "MC"
see_also: ["MC Function Generators", "mc.list~", "mc.evolve~", "mc.gradient~", "multirange"]
---
# mc.range~

Generate a multichannel signal with a range of constant values

## Description

The [mc.range~](https://docs.cycling74.com/reference/mc.range~) object generates a multichannel signal filled with constant values distributed across a defined range.

## Arguments

### size[int] optional

Sets the number of channels in the multichannel output.

## Attributes

### chans[int]

The chans attribute sets the channel count of the output multichannel signal, determining the number of channels that will be used to define the range. If chans is modified while the audio is on, extra channels are set to zero. After audio is restarted, the output channel count will be set to the value of chans.

### exp[float]: 0.

Permits exponential scaling of the range; the value is the exponent of a power function applied to the position (between 0 - 1) of each element within the range.

### hi[float]

Sets the high value used when calculating channel output values. Actual values relative to the lo and hi attributes are determined based on the inclusive attribute setting.

### inclusive[int]

Determines how endpoint values are used when calculating values for each output channel.

Possible values:

0 = 'Neither'
(
Ignore Endpoints
)
Uses neither the low or high endpoint values when calculating mc channel values. For example, 5 channels with a lo of 0.0 and a lo of 1.0 will generate signal values of 0.17, 0.33, 0.5, 0.67, and 0.83.

1 = 'Both'
(
Use Endpoints
)
Uses the low enpoint value for the first channel and high endpoint value as the last channel when calculating mc channel values. For example, 5 channels with a lo of 0.0 and a lo of 1.0 will generate signal values of 0.0, 0.25, 0.5, 0.75, and 1.0.

2 = 'Low Only'
(
Use Low
)
Uses the low endpoint value for the first channel and calculates all other channel values accordingly. For example, 5 channels with a lo of 0.0 and a lo of 1.0 will generate signal values of 0.0, 0.2, 0.4, 0.6, and 0.8.

3 = 'High Only'
(
Use High
)
Uses the high endpoint value for the last channel and calculates all other channel values accordingly. For example, 5 channels with a lo of 0.0 and a lo of 1.0 will generate signal values of 0.2, 0.4, 0.6, 0.8, and 1.0.

### lo[float]

Sets the low value used when calculating channel output values. Actual values relative to the lo and hi attributes are determined based on the inclusive attribute setting.

### reflection[float]: 1.

The reflection attribute sets a relative location within the range where the output reaches its high value and then returns to the low value. By default, the value of reflection is 1 which has no effect on the output range. If reflection is set to a value between 0 and 1, the output reaches the high value somewhere in the middle of the output channel space, returning to the low value for the last channel in the output multichannel signal. As reflection moves toward zero, the output begins to resemble an inverted range and when reflection is set to 0, the output is completely inverted.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The  bang  message causes the current range values to be sent as a series of  setvalue  messages out the right outlet. For example, for a range of three values from 0 to 1, [mc.range~](https://docs.cycling74.com/reference/mc.range~) will output  setvalue 1 0 ,  setvalue 2 0.5 , and  setvalue 3 1.0 . Following the output from the right outlet, a list of all range values is sent out the middle outlet.

### signal

If a multichannel signal is connected to the left inlet, the values of the first two channels determine the output range, overriding the values of the lo and hi attributes.

## See Also

| Name | Description |
| --- | --- |
| [MC Function Generators](https://docs.cycling74.com/userguide/mc/mc_function_generators) | MC Function Generators |
| [mc.list~](https://docs.cycling74.com/reference/mc.list~) | Create a multichannel signal from a list of values |
| [mc.evolve~](https://docs.cycling74.com/reference/mc.evolve~) | Generate a periodic multichannel function from breakpoint ranges |
| [mc.gradient~](https://docs.cycling74.com/reference/mc.gradient~) | Generate a time-varying function over the space of a multichannel signal |
| [multirange](https://docs.cycling74.com/reference/multirange) | Graphical function breakpoint editor |
