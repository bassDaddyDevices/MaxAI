---
type: mc
name: "mc.average~"
summary: "Multi-mode signal average  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.average~/"
package: "MC"
see_also: ["avg~", "meter~"]
---
# mc.average~

Multi-mode signal average (multichannel)

## Description

Use the [average~](https://docs.cycling74.com/reference/average~) to perform  bipolar ,  absolute , or  rms  averaging on any input signal.

## Arguments

### max-averaging-interval[int]samples optional

Sets the maximum averaging interval in samples. The default value is 100.

### averaging-mode[symbol] optional

Sets the averaging mode, as defined in the "Messages" section. The default is  bipolar .

## Attributes

### mode[symbol] >= 8.0.0

Sets the averaging mode for the input signal.

Possible values:

'bipolar'
(
Average input
)
Sets bipolar averaging mode (default). In bipolar mode, the sample values are averaged.

'absolute'
(
Average the absolute value of input
)
Sets absolute averaging mode. This mode averages the absolute value of the incoming samples.

'rms'
(
Root mean square input
)
Sets root mean square (RMS) averaging mode. This mode computes the square root of the average of the sample values squared.

The RMS mode of the [average~](https://docs.cycling74.com/reference/average~) object is more CPU-intensive than the bipolar and absolute modes. While RMS values are often used to measure signal levels, the absolute mode often works as well as the RMS mode in many level-detection tasks.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Sets the interval in samples used for each of the three modes of signal averaging. The default value is  100 .

Arguments:

- averaging-sample-interval
  [int]

### absolute

Sets absolute averaging mode. This mode averages the absolute value of the incoming samples.

### bipolar

Sets bipolar averaging mode (default). In bipolar mode, the sample values are averaged.

### rms

Sets root mean square (RMS) averaging mode. This mode computes the square root of the average of the sample values squared.

The RMS mode of the [average~](https://docs.cycling74.com/reference/average~) object is more CPU-intensive than the bipolar and absolute modes.While RMS values are often used to measure signal levels, the absolute mode often works as well as the RMS mode in many level-detection tasks.

### signal

The signal to be averaged.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The running average value of the input signal averaged over the specified number of samples.

## See Also

| Name | Description |
| --- | --- |
| [avg~](https://docs.cycling74.com/reference/avg~) | Signal average |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
