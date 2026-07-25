---
type: msp
name: "sah~"
summary: "Sample and hold a signal"
signal: true
url: "https://docs.cycling74.com/reference/sah~/"
package: "MSP"
see_also: ["gate~", "phasor~", "stash~", "thresh~", "what~"]
---
# sah~

Sample and hold a signal

## Description

Use [sah~](https://docs.cycling74.com/reference/sah~) to capture ("sample") and output ("hold") a value from an input signal whenever a trigger signal satisfies a threshold value according to one of several trigger conditions. The default trigger mode (Ascending) requires the signal to go from being at or below the threshold value to above it. At the moment the trigger condition is satisfied, the input signal is sampled and "held" until the trigger condition is satisfied again, at which point the input is sampled again. Generally this allows one signal to be synchronized to the behavior of another.

## Arguments

### initial-trigger-value[number] optional

Initial trigger value

## Attributes

### duration[atom\_long]: 0

Alias:
dur

Normally the signal output of [sah~](https://docs.cycling74.com/reference/sah~) remains constant. With a non-zero value for duration any new non-zero value will remain constant for a specified number samples, after which it will be 0.

### thresh[float]: 0.

Sets the value of the trigger signal used to cause the input signal to be sampled and output.

### triggermode[int]: 0

Determines how [sah~](https://docs.cycling74.com/reference/sah~) analyzes the trigger signal to cause the input to be sampled and output. The classic (and default) triggermode is 0 (Ascending).

Possible values:

0 = 'Ascending'

Ascending mode detects the trigger signal passing from below to above the threshold value. Useful with increasing ramps (such as [phasor~](https://docs.cycling74.com/reference/phasor~) with a positive frequency).

1 = 'Descending'

Descending mode detects trigger signal passing from above to below the threshold value. Useful with decreating ramps (such as [phasor~](https://docs.cycling74.com/reference/phasor~) with a negative frequency).

2 = 'Ascending or Descending'

Ascending + Descending mode detects trigger signal passing from below to above the threshold value  *or*  passing from above to below the threshold value. This mode may produce unexpected results with a phasor but might be more appropriate for a continuous trigger input such as a sine wave.

3 = 'Equals'

Equals mode detects an exact value in the trigger signal value. This mode is not recommended for continuous functions that may never reach a specific value, but could be useful to detect impulses or other signals where a specific value is expected.

4 = 'Zero-to-Nonzero'

Zero-to-Nonzero mode detects a trigger signal that goes from a zero value to a non-zero value. This could be useful to detect the start of a ramp or incoming audio. The value of thresh is ignored in this mode.

5 = 'Nonzero-to-Zero'

Nonzero-to-zero mode detects a trigger signal that goes from a non-zero value to a zero value. This could be useful to detect a signal turning off. The value of thresh is ignored in this mode.

6 = 'Phase'

Phase mode treats the threshold value as a phase value using the same phase detection algorithm as the [what~](https://docs.cycling74.com/reference/what~) object. In Phase mode, [sah~](https://docs.cycling74.com/reference/sah~) detects resets in the output of the [phasor~](https://docs.cycling74.com/reference/phasor~) object and defines those as triggers for a threshold value of 0. Phase mode works with both positive and negative [phasor~](https://docs.cycling74.com/reference/phasor~) frequencies.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Set trigger threshold value

### signal

In left inlet: A signal to be sampled. When the trigger signal (in the right inlet) satisfies the current trigger condition, the signal in the left inlet is sampled and its value is sent out as a constant signal value.

In right inlet: The trigger signal.

## See Also

| Name | Description |
| --- | --- |
| [gate~](https://docs.cycling74.com/reference/gate~) | Route a signal to one of several outlets |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [stash~](https://docs.cycling74.com/reference/stash~) | Store and Recall Audio Signal Values |
| [thresh~](https://docs.cycling74.com/reference/thresh~) | Detect signal above a set level |
| [what~](https://docs.cycling74.com/reference/what~) | Generate Impulses for a List of Audio Values |
