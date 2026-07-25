---
type: mc
name: "mc.round~"
summary: "Round an input signal value  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.round~/"
package: "MC"
see_also: ["rampsmooth~", "slide~", "trunc~", "round"]
---
# mc.round~

Round an input signal value (multichannel)

## Description

Use the [round~](https://docs.cycling74.com/reference/round~) object to round a signal input to an integer multiple.

#### Discussion

You can set the object's 'nearest' attribute to determine whether or not it rounds to the absolute nearest integer multiple, or the nearest integer multiple between the value and zero (for positive numbers this will round down). By default this is on.

## Arguments

### int or float[number] optional

Sets the value to which the input signal will be rounded. The default value is 0. (no modification).

## Attributes

### nearest[int]

When set to 1 (the default), the [round~](https://docs.cycling74.com/reference/round~) object will round to the nearest multiple of the specified signal value.

Note: This attribute does not set the rounding step (which is set using [round~](https://docs.cycling74.com/reference/round~) object's right inlet), It specifies that rounding to the nearest signal value will occur. Here are some examples:

With the rounding interval set to 3 and the  nearest  attribute set to 1:

an input signal value of 5.8 will return 6

an input signal value of 3.7 will return 3

an input signal value of -1 will return 0

an input signal value of -2.7 will return -3

With the rounding interval set to 3 and the  nearest  attribute set to 0:

an input signal value of 5.8 will return 3

an input signal value of 3.7 will return 3

an input signal value of -1 will return 0

an input signal value of -2.7 will return 0

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In right inlet: an  int  will cause the input to be rounded to the nearest multiple of the specified number. If a signal is attached to the inlet,  int  messages are ignored.

Arguments:

- rounding-multiple-specifier
  [int]

### float

In right inlet: a  float  will cause the input to be rounded to the nearest multiple of the specified number. If a signal is attached to the inlet,  float  messages are ignored.

Arguments:

- rounding-multiple-specifier
  [float]

### signal

In left inlet: A signal whose values will be rounded.

In right inlet: A signal whose value is used for rounding. Signal values received in the left inlet will be rounded to either the absolute nearest integer multiple or the nearest integer multiple between the value received in this inlet or 0 (see the  nearest  message for more information).

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The rounded input signal.

## See Also

| Name | Description |
| --- | --- |
| [rampsmooth~](https://docs.cycling74.com/reference/rampsmooth~) | Smooth an incoming signal |
| [slide~](https://docs.cycling74.com/reference/slide~) | Filter a signal logarithmically |
| [trunc~](https://docs.cycling74.com/reference/trunc~) | Truncate fractional signal values |
| [round](https://docs.cycling74.com/reference/round) | Round to a value |
