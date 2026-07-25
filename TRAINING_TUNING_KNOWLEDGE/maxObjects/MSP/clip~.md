---
type: msp
name: "clip~"
summary: "Limit signal amplitude"
signal: true
url: "https://docs.cycling74.com/reference/clip~/"
package: "MSP"
see_also: ["<~", ">~", "trunc~"]
---
# clip~

Limit signal amplitude

## Description

Use the [clip~](https://docs.cycling74.com/reference/clip~) to constrain input signals between two specified values.

## Arguments

### minimum[float] optional

Initial minimum limit for the range of the output signal. If no argument is supplied, the minimum limit is initially set to  0 . If a signal is connected to the middle inlet, the corresponding argument is ignored.

### maximum[float] optional

Initial maximum limit for the range of the output signal. If no argument is supplied, the maximum limit is initially set to  0 . If a signal is connected to the middle inlet, the corresponding argument is ignored.

## Attributes

### mode[int]

When the mode attribute is non-zero, [clip~](https://docs.cycling74.com/reference/clip~) outputs 0 for values above its maximum or below its minimum to 0. When mode is disabled, [clip~](https://docs.cycling74.com/reference/clip~) constrains its input between its minimum and maximum.

Possible values:

0 = 'Clip'
(
Clip input outside minimum and maxmimum
)
1 = 'Zero'
(
Zero input outside minimum and maxmimum
)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The middle and right inlets can receive a  float  or  int  instead of a signal to set the minimum and/or maximum.

Arguments:

- minimum/maximum
  [int]

### float

The middle and right inlets can receive a  float  or  int  instead of a signal to set the minimum and/or maximum.

Arguments:

- minimum/maximum
  [float]

### signal

In left inlet: Any signal, which will be restricted within the minimum and maximum limits received in the middle and right inlets.

In middle inlet: Minimum limit for the range of the output signal.

In right inlet: Maximum limit for the range of the output signal.

## Output

### signal

The input signal is sent out, limited within the specified range. Any value in the input signal that exceeds the minimum or maximum limit is set equal to that limit.

## See Also

| Name | Description |
| --- | --- |
| [<~](https://docs.cycling74.com/reference/lessthan~) | Is less than, comparison of two signals |
| [>~](https://docs.cycling74.com/reference/greaterthan~) | Is greater than, comparison of two signals |
| [trunc~](https://docs.cycling74.com/reference/trunc~) | Truncate fractional signal values |
