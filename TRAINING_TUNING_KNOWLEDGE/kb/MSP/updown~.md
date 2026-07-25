---
type: msp
name: "updown~"
summary: "Trapezoidal Function Generator With Constant Attack and Release"
signal: true
url: "https://docs.cycling74.com/reference/updown~/"
package: "MSP"
see_also: ["phasor~", "trapezoid~", "kink~", "line~", "subdiv~", "zigzag~"]
---
# updown~

Trapezoidal Function Generator With Constant Attack and Release

## Description

The [updown~](https://docs.cycling74.com/reference/updown~) object is driven by a ramp from 0 - 1 or 1 - 0. It generates a trapezoidal function where the attack and release times are independent of the speed of the input ramp, unlike [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) where start and end times are specified as a proportion of the total input ramp cycle and thus will vary with the speed of the input ramp.

Note that the up phase of the [updown~](https://docs.cycling74.com/reference/updown~) object's output occurs after the reset of a phasor or a zero-to-non-zero transition, whether the input ramp moves up or down. The down phase of the output occurs in the time before a reset (or the end of the ramp) is expected to occur.

## Arguments

None.

## Attributes

### down[float]

Sets the time of the output ramp descending from the maximum value to 0 in milliseconds

### level[float]: 1.

Sets the maximum value of the trapezoidal function

### reset[float]: 0.5

Reset Difference Threshold

### up[float]

Sets the time of the output ramp ascending from 0 the maximum value in milliseconds

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

TEXT\_HERE

### signal

The [updown~](https://docs.cycling74.com/reference/updown~) object produces a trapezoidal output in response to a signal ramp from 0 - 1 or 1 - 0.

## See Also

| Name | Description |
| --- | --- |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) | Trapezoidal wavetable |
| [kink~](https://docs.cycling74.com/reference/kink~) | Distort a sawtooth waveform |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [subdiv~](https://docs.cycling74.com/reference/subdiv~) | Integer Subdivision of a Phasor |
| [zigzag~](https://docs.cycling74.com/reference/zigzag~) | Linked list function editor |
