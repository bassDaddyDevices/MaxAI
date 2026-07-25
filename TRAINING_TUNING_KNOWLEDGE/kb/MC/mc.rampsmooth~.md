---
type: mc
name: "mc.rampsmooth~"
summary: "Smooth an incoming signal  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.rampsmooth~/"
package: "MC"
see_also: ["line~", "slide~"]
---
# mc.rampsmooth~

Smooth an incoming signal (multichannel)

## Description

Smooths an incoming signal across n samples. Each time an incoming value changes, it begins a linear ramp to reach this value.

## Arguments

### ramp-up-samples[int] optional

Number of samples for ramp-up

### ramp-down-samples[int] optional

Number of samples for ramp-down

## Attributes

### rampdown[int]: 1

Specifies the number of samples over which a signal will be smoothed when an incoming value less than the current value arrives.

### rampup[int]: 1

Specifies the number of samples over which a signal will be smoothed when an incoming value greater than the current value arrives.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In middle inlet: Use an  int  to set the ramp-up value.

In right inlet: Use an  int  to set the ramp-down value.

Arguments:

- ramp-up/down-value
  [int]

### float

In middle inlet: Use a  float  to set the ramp-up value.

In right inlet: Use a  float  to set the ramp-down value.

Arguments:

- ramp-up/down-value
  [float]

### ramp

Specifies the number of samples over which a signal will be smoothed. Each time an incoming value changes, the [rampsmooth~](https://docs.cycling74.com/reference/rampsmooth~) object begins a linear ramp of the specified number of samples to reach the new value. The default value is  0 .

Arguments:

- sample-count
  [int]

### signal

In left inlet: Each time an incoming value changes, the object begins a linear ramp over a specified number of samples to reach the new value.

In middle inlet: Use a signal to set the ramp-up value.

In right inlet: Use a signal to set the ramp-down value.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The smoothed signal is sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [slide~](https://docs.cycling74.com/reference/slide~) | Filter a signal logarithmically |
