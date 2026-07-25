---
type: msp
name: "plugsync~"
summary: "Report host synchronization information"
signal: true
url: "https://docs.cycling74.com/reference/plugsync~/"
package: "MSP"
see_also: ["plugphasor~"]
---
# plugsync~

Report host synchronization information

## Description

The [plugsync~](https://docs.cycling74.com/reference/plugsync~) object provides information about the current state of Ableton Live host applicaiton.

#### Discussion

Sample count information is available in any host; even Max. The validity of the other information output by the object is dependent upon what synchronization capabilities the host implements; the value from the flags (9th) outlet tells you what information is valid. Output from [plugsync~](https://docs.cycling74.com/reference/plugsync~) is continuous when the scheduler is running.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  message may be used to manually poll the [plugsync~](https://docs.cycling74.com/reference/plugsync~) object that cause it to output timing information.

## Output

### float

Out 4nd outlet: The current beat fraction, from 0 to 1.0. If the host does not support synchronization, the output is 0. If the host does not support synchronization, there is no output from this outlet.

### float

Out 6th outlet: The current tempo in samples per beat. This number can be converted to beats per minute using the following formula: (sampling-rate / samples-per-beat) \* 60. If the host does not support synchronization, there is no output from this outlet.

### float

Out 7th outlet: The current number of beats, expressed in 1 PPQ. This number will contain a fractional part between beats. If the host does not support synchronization, there is no output from this outlet.

### int

Out left outlet:  1  if the host's transport is currently running;  0  if it is stopped or paused.

### int

Out 2nd outlet: The current bar count in the host sequence, starting at 1 for the first bar. If the host does not support synchronization, there is no output from this outlet.

### int

Out 3rd outlet: The current beat count in the host sequence, starting at 1 for the first beat. If the host does not support synchronization, there is no output from this outlet.

### int

Out 8th outlet: The current sample count, as defined by the host.

### int

Out 9th outlet: A number representing the validity of the other information coming from [plugsync~](https://docs.cycling74.com/reference/plugsync~). Mask with the following values to determine if the information from [plugsync~](https://docs.cycling74.com/reference/plugsync~) will be valid.

Sample Count Valid - 1 (always true)

Beats Valid - 2 (2nd, 3rd, 4th, and 7th outlets valid)

Time Signature Valid - 4 (5th outlet valid)

Tempo Valid - 8 (6th outlet valid)

Transport Valid - 16 (left outlet valid)

### list

Out 5th outlet: The current time signature as a list containing numerator followed by denominator. For instance, 3/4 time would be output as the list  3 4 . If the host does not support time signature information, there is no output from this outlet.

## See Also

| Name | Description |
| --- | --- |
| [plugphasor~](https://docs.cycling74.com/reference/plugphasor~) | Host-synchronized sawtooth wave |
