---
type: mc
name: "mc.stash~"
summary: "Store and Recall Audio Signal Values (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.stash~/"
package: "MC"
---
# mc.stash~

Store and Recall Audio Signal Values (multichannel)

## Description

Use the [stash~](https://docs.cycling74.com/reference/stash~) object to store and recall a buffer of signal values. In one mode, [stash~](https://docs.cycling74.com/reference/stash~) can perform sample-and-hold operations on an input signal but unlike the [sah~](https://docs.cycling74.com/reference/sah~), [stash~](https://docs.cycling74.com/reference/stash~) reads from a buffer rather than holds a single sample. [stash~](https://docs.cycling74.com/reference/stash~) can be a simple interpolating lookup table or audio-rate step sequencer.

## Arguments

### sample-thresh[float] optional

If present, a  float  sets the initial threshold value for writing a signal value into the buffer (samplelevel).

### advance-thresh[float] optional

If a second  float  argument is present, it sets the initial threshold value for advancing to the next value in the buffer (advancelevel).

## Attributes

### advancelevel[float]

Sets the signal value that will trigger advancing the output to the next value in the buffer. The advancelevel value applies when the advancetriggermode attribute is set to Ascending, Descending, or Ascending or Descending).

### advancetriggermode[int]: 0

Determines how a signal connected to the third inlet is interpreted for changing the signal output of [stash~](https://docs.cycling74.com/reference/stash~) when it is advancing to the next value in the buffer when mode is set to 0 ( Next ).

Possible values:

0 = 'Ascending'
(
Detect value in an ascending ramp
)
The output advances when the previous sample of the input is less than or equal to the advancelevel and the current sample is greater than the advancelevel.

1 = 'Descending'
(
Detect value in an descending ramp
)
The output advances when the previous sample of the input is greater than or equal to the advancelevel and the current sample is less than the advancelevel.

2 = 'Ascending or Descending'
(
Detect value in an asecending or descending ramp
)
The output advances if either the ascending or descending condition is true. This mode is useful for detecting ramps in phasors with either positive and negative frequencies.

3 = 'Equals'
(
Detect exact value
)
The output advances if the input is exactly equal to the current sample. This mode is not recommend for phasor ramps since it is unlikely the ramp will output a sample exactly equal to any particular value. The value of advancelevel does not apply in this mode.

4 = 'Zero-to-Nonzero'
(
Detect zero to non-zero transition
)
The output advances if the previous sample is zero and the current sample is non-zero. The value of advancelevel does not apply in this mode.

5 = 'Nonzero-to-Zero'
(
Detect non-zero to zero transition
)
The output advances if the previous sample is non-zero and the current sample is zero. The value of advancelevel does not apply in this mode.

6 = 'Phase'

Phase mode treats the value of advancelevel as a phase value using the same phase detection algorithm as the [what~](https://docs.cycling74.com/reference/what~) object. In Phase mode, [stash~](https://docs.cycling74.com/reference/stash~) detects resets in the output of the [phasor~](https://docs.cycling74.com/reference/phasor~) object and defines those as triggers for a threshold value of 0. Phase mode works with both positive and negative [phasor~](https://docs.cycling74.com/reference/phasor~) frequencies.

### dir[int]

Sets the direction in which [stash](https://docs.cycling74.com/reference/stash) advances through its buffer when mode is set to 0 ( Next ).

Possible values:

0 = 'Forward'
(
Loop forwards
)
The current index is incremented by 1 and reset to 0 when it reaches the current buffer size.

1 = 'Reverse'
(
Loop backwards
)
The current index is decremented by a1 nd reset to the buffer size - 1 after it reaches 0.

2 = 'Random'
(
Choose index randomly with repetitions allowed
)
The index into the buffer will be chosen randomly, and the same index value can be chosen multiple times (similar to the Max [random](https://docs.cycling74.com/reference/random) object).

3 = 'Urn'
(
Choose index randomly without repetitions
)
The index into the buffer will be chosen randomly, but the same value cannot be chosen multiple times before all values are chosen (similar to the Max [urn](https://docs.cycling74.com/reference/urn) object).

### duration[atom\_long]: 0

Alias:
dur

When the duration attribute is a non-zero value, the output signal remains at its new value for that number of samples, then resets to 0. Set duration to 1 to generate impulses. When duration is 0, the output value is held constant.

### extend[int]

The extend attribute controls how [stash~](https://docs.cycling74.com/reference/stash~) responds when an input index value (either signal or float) is less than zero or greater than the buffer size.

Possible values:

0 = 'Zero'
(
Output zero
)
When extend is Zero (0), a zero signal is output when the index is outside the buffer's bounds.

1 = 'Extend'
(
Output lowest or highest values
)
When extend is set to Extend (1), [stash~](https://docs.cycling74.com/reference/stash~) outputs the value at index 0 is output when the input index less than zero. It outputs the value at the highest buffer index is when the input index is greater than the buffer size.

2 = 'Wrap'
(
Wrap index
)
When extend is set to Wrap (2), [stash~](https://docs.cycling74.com/reference/stash~) performs a modulo operation on the input index. Example: if the buffer size is 128 and the input is 130, the value at index 2 (130 mod 128) will be output.

3 = 'Ignore'
(
Don't change output
)
When extend is set to Ignore (3), any input index outside the buffer size is ignored and does not change the output.

### interp[int]

Determines the interpretation of non-integer index values from signals or the index attribute.

Possible values:

0 = 'None'
(
Truncate index value
)
The value is the integer part of the index

1 = 'Linear'
(
Linear interpolation
)
The value is produced by interpolating between the integer part of the index and the value above it.

2 = 'Round'
(
Rounding
)
The value is rounded to the nearest intger to produce the index

### maxsize[int]

Sets the maximum buffer size. Note that maxsize can only be changed when the [stash~](https://docs.cycling74.com/reference/stash~) object is created as a typed-in argument. The default buffer size is 1000.

### mode[int]

Alias:
advancemode

Sets how the signal connected to the third inlet determines the buffer index of the output value.

Possible values:

0 = 'Next'
(
Advance to the next value
)
Changes in the signal (as defined by the advancetriggermode attribute) change the index according to the advance direction (dir attribute).

1 = 'Index'
(
Output the value at the specified index
)
In Index mode, [stash](https://docs.cycling74.com/reference/stash) uses the signal value in the third inlet as a lookup table index -- with interpolation (if interp is set to 1 ( *Linear* ).

2 = 'Normalized Index'
(
Output the value at a normalized index
)
In Normalized Index mode, [stash](https://docs.cycling74.com/reference/stash) uses the current size of the buffer to calculate the signal value (which must be between 0 and 1). For example, if the size is 2, values below 0.5 will output the value at index 0 and values 0.5 and larger will output the value at index 1.

### samplelevel[float]

Sets the signal value that will trigger sampling the signal connected to the left input. The samplelevel value applies when the sampletriggermode attribute is set to Ascending, Descending, or Ascending or Descending).

### sampletriggermode[int]: 0

Determines how a signal connected to the second inlet is interpreted for capturing the value of a signal connected to the left inlet. The sampletriggermode applies when the writemode is set to Next.

Possible values:

0 = 'Ascending'
(
Detect value in an ascending ramp
)
The left signal input is captured when the previous sample of f the signal connected to the second inlet is less than or equal to the samplelevel and the current sample is greater than the samplelevel.

1 = 'Descending'
(
Detect value in an descending ramp
)
The left signal input is captured when the previous sample of the signal connected to the second inlet is greater than or equal to the samplelevel and the current sample is less than the samplelevel.

2 = 'Ascending or Descending'
(
Detect value in an asecending or descending ramp
)
The left signal input is captured if either the ascending or descending condition is true. This mode is useful for detecting ramps in phasors with either positive and negative frequencies.

3 = 'Equals'
(
Detect exact value
)
The left signal input is captured if the signal connected to the second inlet is exactly equal to the current sample. This mode is not recommend for phasor ramps since it is unlikely the ramp will output a sample exactly equal to any particular value. The value of samplelevel does not apply in this mode.

4 = 'Zero-to-Nonzero'
(
Detect zero to non-zero transition
)
The left signal input is captured if the previous sample of the signal connected to the second inlet is zero and the current sample is non-zero. The value of samplelevel does not apply in this mode.

5 = 'Nonzero-to-Zero'
(
Detect non-zero to zero transition
)
The output advances if the previous sample of the signal connected to the second inlet is non-zero and the current sample is zero. The value of samplelevel does not apply in this mode.

6 = 'Phase'

Phase mode treats the value of samplelevel as a phase value using the same phase detection algorithm as the [what~](https://docs.cycling74.com/reference/what~) object. In Phase mode, [stash~](https://docs.cycling74.com/reference/stash~) detects resets in the output of the [phasor~](https://docs.cycling74.com/reference/phasor~) object and defines those as triggers for a threshold value of 0. Phase mode works with both positive and negative [phasor~](https://docs.cycling74.com/reference/phasor~) frequencies.

### size[int]

Sets the buffer size, which can range from 1 to the value of maxsize. Note: a  list  received in the left inlet sets the size to the size of the list.

### writemode[int]

The writemode attribute controls how the signal connected to the left inlet is captured (sampled). There are two aspects to capturing a signal: when it happens, and where the sample goes once it is captured. Logically, if you want to continue capturing to the same index, you need another signal that changes, because the index signal is not changing so it cannot provide triggering information.

Possible values:

0 = 'Next'
(
Advance to the next index using second inlet
)
When writemode is set to 0 (Next), the write index signal in the right inlet is ignored. Changes in the signal in the second inlet cause samples in the left inlet to be captured. The specific changes that cause a sample to be captured are set by the sampletriggermode attribute.

1 = 'Index'
(
Set buffer index for signal capture
)
When writemode is set to 1 (Index), the index signal in the right inlet determines the location where the sample will be written. Changes in the sample trigger signal connected to the second inlet cause samples in the left inlet to be captured to that location.

2 = 'Normalized Index'
(
Set normalized buffer index for signal capture
)
When writemode is set to 2 (Normalized Index), the index signal in the right inlet is expected to range from 0 to 1. This value is multiplied by the current buffer size to set the location where the sample will be written. Changes in the sample trigger signal connected to the second inlet cause samples in the left inlet to be captured to that location.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: the  bang  message does nothing.

In second inlet: if there is a signal connected to the left inlet and there is  *not*  a signal connected to the second inlet, a  bang  in the second inlet causes the first sample of the next signal vector to be captured according to the current writemode.
In third inlet: if there is not a signal connected to the third inlet, a  bang  advances the output.

In right inlet: advances the index used for writing samples either for a  float  in the left inlet or when there isn't a signal connected to the right inlet.

### int

Converted to  float

### float

In left inlet: the value is written to the buffer at the current write index.

In second inlet: sets the threshold value for capturing signals connected to the left inlet (samplelevel).

In third inlet: sets the threshold value for a signal connected to the third inlet to advance the output (advancelevel).

In right inlet: if a signal is  *not*  connected to this inlet, sets the current index for writing into the buffer for signal capture. A number in the right inlet also sets the index used to store a  float  sent to the left inlet.

### list

list  received in the left inlet sets the contents of the buffer and sets its size to the length of the list. The maximum length of the list that will be used is set by the maxsize attribute.

### signal

In left inlet: signal values are captured to the buffer

In second inlet: used to trigger capturing values from the signal connected to the left inlet

In third inlet: depending on the setting of the mode attribute, a connected signal triggers advancing to the next item in the output buffer or is used as an index into the buffer to determine the output.

In right inlet: sets the write index used when capturing signal values.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).
