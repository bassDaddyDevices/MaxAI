---
type: mc
name: "mc.slide~"
summary: "Filter a signal logarithmically  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.slide~/"
package: "MC"
see_also: ["rampsmooth~"]
---
# mc.slide~

Filter a signal logarithmically (multichannel)

## Description

Use the [slide~](https://docs.cycling74.com/reference/slide~) object for envelope following and lowpass filtering.

#### Discussion

The [slide~](https://docs.cycling74.com/reference/slide~) object filters an input signal logarithmically between changes in signal value. The formula is y (n) = y (n-1) + ((x (n) - y (n-1))/slide).

## Arguments

### slide-up[float] optional

Specifies the slide up value. The default is 1. (Also accepts integers for these arguments as well as the associated messages which address these parameter settings.)

### slide-down[float] optional

A second argument specifies the slide down value. The default is 1. (Also accepts integers for these arguments as well as the associated messages which address these parameter settings.)

## Attributes

### slidedown[float]

Alias:
slide\_down

The slidedown attribute specifies the slide-down value to be used when an incoming value is less than the current value.

### slideup[float]

Alias:
slide\_up

The slideup attribute specifies the slide-up value to be used when an incoming value is greater than the current value.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In middle inlet: Use an  int  to set the slide-up value.

In right inlet: Use an  int  to set the slide-down value.

Arguments:

- slide-up/down-value
  [int]

### float

In middle inlet: Use a  float  to set the slide-up value.

In right inlet: Use a  float  to set the slide-down value.

Arguments:

- slide-up/down-value
  [float]

### reset

Sets the current output sample value to 0 (the next incoming value will smoothly transition from that 0).

### signal

In left inlet: A signal to be filtered. Whenever a new value is received, [slide~](https://docs.cycling74.com/reference/slide~) filters the input signal logarithmically between changes in signal value using the formula:

y (n) = y (n-1) + ((x (n) - y (n-1))/slide)

A given sample output from [slide~](https://docs.cycling74.com/reference/slide~) is equal to the last sample's value plus the difference between the last sample's value and the input divided by the slide value. Given a slide value of 1, the output will therefore always equal the input. Given a slide value of 10, the output will only change 1/10th as quickly as the input. This can be particularly useful for lowpass filtering or envelope following.

In middle inlet: Use a signal to set the slide-up value.

In right inlet: Use a signal to set the slide-down value.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The filtered signal.

## See Also

| Name | Description |
| --- | --- |
| [rampsmooth~](https://docs.cycling74.com/reference/rampsmooth~) | Smooth an incoming signal |
