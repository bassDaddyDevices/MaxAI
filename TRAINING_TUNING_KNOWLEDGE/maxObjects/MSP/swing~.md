---
type: msp
name: "swing~"
summary: "Subdivide a phasor into two unequal phasors"
signal: true
url: "https://docs.cycling74.com/reference/swing~/"
package: "MSP"
see_also: ["phasor~", "kink~", "line~", "mc.snowphasor~", "subdiv~"]
---
# swing~

Subdivide a phasor into two unequal phasors

## Description

The [swing~](https://docs.cycling74.com/reference/swing~) object outputs two phasor signals in the space of one input phasor, with the ability to adjust the "swing" or proportion of the time of the input phasor given to the first of the two output phasors. If the swing is set to 0.5, both the first and second output phasors are equal. But if the swing is set to 0.75, the first phasor lasts for three fourths of the input and the second phasor lasts for one fourth of the time.

## Arguments

### swing[float] optional

The initial proportion of the total time taken up by the first phasor. If no argument is supplied the default is 0.5.

## Attributes

### swing[float]

Sets the swing proportion between 0.15 and 0.85

### syncupdate[int]

If syncupdate is enabled, changes to the swing proportion will only take effect when either the input or output resets.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to  float .

### float

Sets the swing proportion between 0.15 and 0.85

### signal

Drive the [swing~](https://docs.cycling74.com/reference/swing~) object with a signal that ramps from 0 to 1.

## See Also

| Name | Description |
| --- | --- |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [kink~](https://docs.cycling74.com/reference/kink~) | Distort a sawtooth waveform |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~) | Control a Population of Phasors |
| [subdiv~](https://docs.cycling74.com/reference/subdiv~) | Integer Subdivision of a Phasor |
