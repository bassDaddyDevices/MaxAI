---
type: msp
name: "zerox~"
summary: "Detect zero crossings"
signal: true
url: "https://docs.cycling74.com/reference/zerox~/"
package: "MSP"
see_also: ["change~", "edge~", "spike~"]
---
# zerox~

Detect zero crossings

## Description

[zerox~](https://docs.cycling74.com/reference/zerox~) functions as a zero-crossing counter or transient detector.

## Arguments

### click-volume[float] optional

Sets the output volume for the click sent out the right outlet. Volume values are in the range 0.0-1.0. The default value is 1.0.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### set

In left inlet: The word  set , followed by a floating-point number in the range 0.0-1.0, sets the volume of the click (impulse) sent out the right outlet. The default value is 1.0.

Arguments:

- output-volume (0.0 through 1.0)
  [float]

### signal

In left inlet: A signal to be analyzed.

## Output

### signal

Out left outlet: A signal whose value corresponds to the number of zero-crossings per signal vector which were detected during the period of the last signal vector.

Out right outlet: A click (impulse) whose volume is set by argument or by the  set  message is sent out the right outlet whenever a zero-crossing is detected.

## See Also

| Name | Description |
| --- | --- |
| [change~](https://docs.cycling74.com/reference/change~) | Report signal direction |
| [edge~](https://docs.cycling74.com/reference/edge~) | Detect logical signal transitions |
| [spike~](https://docs.cycling74.com/reference/spike~) | Report intervals of zero to non-zero transitions |
