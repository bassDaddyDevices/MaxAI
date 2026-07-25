---
type: msp
name: "what~"
summary: "Generate Impulses for a List of Audio Values"
signal: true
url: "https://docs.cycling74.com/reference/what~/"
package: "MSP"
see_also: ["click~", "edge~", "delta~", "phasor~", "sah~", "stash~", "where~"]
---
# what~

Generate Impulses for a List of Audio Values

## Description

The [what~](https://docs.cycling74.com/reference/what~) object generates an impulse -- a signal value of 1 for one sample -- when its input signal crosses a value threshold. The object accepts a list of threshold values and will generate impulses for all of them. Connect a [phasor~](https://docs.cycling74.com/reference/phasor~) to [what~](https://docs.cycling74.com/reference/what~) to create a repeating rhythm. For example, when sending in a list of  0 0.25 0.5 and 0.75 , [what~](https://docs.cycling74.com/reference/what~) will output an impulse four times for each [phasor~](https://docs.cycling74.com/reference/phasor~) ramp.

#### Discussion

The [what~](https://docs.cycling74.com/reference/what~) object is sample-accurate when Scheduler in Audio Interrupt is enabled. More details [here](https://docs.cycling74.com/userguide/sample_accurate_messages).

## Arguments

### values[list] optional

If one or more values are arguments to [what~](https://docs.cycling74.com/reference/what~) they define the initial list of values.

## Attributes

### matches[atom]

Sets the values to detect

### syncupdate[int]

When syncupdate is enabled, messages to change the values to detect do not take effect until the input phasor resets. A  *reset*  is defined as a direction reversal in the signal.

### triggermode[int]: 2

Determines how [what~](https://docs.cycling74.com/reference/what~) matches values in the signal input.

Possible values:

0 = 'Ascending'
(
Detect value in an ascending ramp
)
The previous sample must be less than or equal to the target and the current sample must be greater than the target.

1 = 'Descending'
(
Detect value in an descending ramp
)
The previous sample must be greater than or equal to the target and the current sample must be less than the target.

2 = 'Ascending or Descending'
(
Detect value in an asecending or descending ramp
)
The value is detected if either the ascending or descending condition is true. This mode is useful for detecting ramps in phasors with either positive and negative frequencies.

3 = 'Equals'
(
Detect exact value
)
The value is detected if it is exactly equal to the current sample. This mode is not recommend for phasor ramps since it is unlikely the ramp will output a sample exactly equal to any particular value.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

An  int  sets a single value to detect, replacing any existing values.

### float

An  float  sets a single value to detect, replacing any existing values.

### list

list  sets the new values to detect, replacing any existing values. A list message is alternative to setting the matches attribute. If syncupdate is enabled, the new values are not used until the input phasor resets.

### clear

The  clear  message removes all values that have been added to the what~ object. If syncupdate is enabled, the values are not cleared until the input phasor resets.

### signal

The input signal used for theshold analysis, usually a [phasor](https://docs.cycling74.com/reference/phasor), though any signal can be used.

## See Also

| Name | Description |
| --- | --- |
| [click~](https://docs.cycling74.com/reference/click~) | Create an impulse |
| [edge~](https://docs.cycling74.com/reference/edge~) | Detect logical signal transitions |
| [delta~](https://docs.cycling74.com/reference/delta~) | Signal of sample differences |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [sah~](https://docs.cycling74.com/reference/sah~) | Sample and hold a signal |
| [stash~](https://docs.cycling74.com/reference/stash~) | Store and Recall Audio Signal Values |
| [where~](https://docs.cycling74.com/reference/where~) | Report Elapsed and Remaining Time of a Phasor |
