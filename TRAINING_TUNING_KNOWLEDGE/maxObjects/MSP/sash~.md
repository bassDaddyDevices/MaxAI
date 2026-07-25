---
type: msp
name: "sash~"
summary: "Sample and Hold with Memory"
signal: true
url: "https://docs.cycling74.com/reference/sash~/"
package: "MSP"
see_also: ["gate~", "phasor~", "sah~", "subdiv~", "thresh~"]
---
# sash~

Sample and Hold with Memory

## Description

The [sash~](https://docs.cycling74.com/reference/sash~) object performs sample-and-hold operations on an input signal but unlike the [sah~](https://docs.cycling74.com/reference/sah~) includes a buffer (the extra "s" in [sash~](https://docs.cycling74.com/reference/sash~) is for "storage") that can holds samples of the input. Sample capture and sample output are triggered independently of each other, and [sash~](https://docs.cycling74.com/reference/sash~) includes a variety of methods for selecting the output sample from the memory buffer.

## Arguments

None.

## Attributes

### advancelevel[float]

Sets the level of the signal connected to the right inlet that will cause the next value in the memory buffer to be used. The next index into the buffer is chosen according to the dir attribute.

### dir[int]

Determines how the next memory buffer index is chosen when the advance trigger signal exceeds the advance level.

Possible values:

0 = 'Forward'
(
Increment forward
)
1 = 'Reverse'
(
Increment backward
)
2 = 'Random'
(
Choose index randomly with replacement
)
3 = 'Urn'
(
Choose index randomly without replacement
)

### maxsize[int]

Sets the maximum possible value of the size attribute. The default is 1000 samples. Note that maxsize can only be changed as a typed-in argument.

### mode[int]

Determines the interpretation of the advance trigger signal

Possible values:

0 = 'Level'
(
Signal exceeds a threshold level
)
1 = 'Index'
(
Integer value of the advance trigger signal
)
2 = 'Subdivision'
(
Phasor subdivision of the advance trigger signal
)
When the mode attribute is set to Subdivision, the index into the memory buffer is determined by dividing 1 into the current value of the size attribute. For example, if the size is 2, advance trigger signal values below 0.5 will play the first memory buffer sample (index 0), and advance trigger signal values above 0.5 will play the second memory buffer sample (index 1).

### samplelevel[float]

Sets the level of the signal connected to the middle inlet that will cause the next value in the left inlet to be sampled and recorded into the memory buffer.

### size[int]

Sets the current size of the memory buffer used for recording and output. The size must be greater than 0 and less than or equal to the maxsize attribute.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to float

### float

A float in the middle inlet sets the sample trigger level. A float in the right set the level for advancing to the next output value from the memory buffer.

### list

A list of values is assigned to the memory buffer. This is useful when there is no signal connected to the sample trigger (middle) inlet. The size of the list can not be larger than the buffer size (maxsize attribute), and the new output size is set to the number of items in the list.

### signal

A signal in the left inlet is sampled, triggered by the value of the signal in the middle inlet. The signal connected to the right inlet triggers [sash~](https://docs.cycling74.com/reference/sash~) to advance to the next output sample from the memory buffer. This happens when sample exceeds the the advancelevel when the mode is set to Advance. When the mode is set to Index, the output sample changes when the integer value of the input changes. When the mode is set to Subdivision, the output sample changes when the input value, divided by the current size, reaches the next divisor.

## See Also

| Name | Description |
| --- | --- |
| [gate~](https://docs.cycling74.com/reference/gate~) | Route a signal to one of several outlets |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [sah~](https://docs.cycling74.com/reference/sah~) | Sample and hold a signal |
| [subdiv~](https://docs.cycling74.com/reference/subdiv~) | Integer Subdivision of a Phasor |
| [thresh~](https://docs.cycling74.com/reference/thresh~) | Detect signal above a set level |
