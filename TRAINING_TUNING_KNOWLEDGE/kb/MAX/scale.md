---
type: max
name: "scale"
summary: "Map values to an output range"
signal: false
url: "https://docs.cycling74.com/reference/scale/"
package: "Max"
see_also: ["expr", "linedrive", "zmap", "scale~", "clip", "clip~"]
---
# scale

Map values to an output range

## Description

The scale object maps an input range of float or integer values to an output range. The output range can be larger or smaller than the input range, can be inverted and can change numeric type. If specified, the mapping can also be exponential. Please note that unanticipated results can occur when using integer arguments, as output values are truncated rather than rounded. For precise output values, use float arguments.

## Arguments

### input-low[number] optional

Sets the low end of the expected input range. Incoming values are not clipped to this range; rather, the input range is used to determine the value mapping formula.

### input-high[number] optional

Sets the high end of the expected input range. Incoming values are not clipped to this range; rather, the input range is used to determine the value mapping formula.

### output-low[number] optional

This sets the low end of the output range, and will be the lowest output value if the input value stays with its expected range.

### output-high[number] optional

This sets the high end of the output range, and will be the highest output value if the input value stays with its expected range.

### exponential[float] optional

This optional fifth argument specifies the nature of the scaling curve. This argument must be a floating-point number greater than 1., with larger values leading to steeper exponential curves.

In
classic
mode a typical value for this argument is 1.06. The object does its actual scaling after the exponential calculation, and the number is converted according to the following expression:

(out\_high-out\_low >= 0) ? (out\_low + (out\_high-out\_low) \* ( (out\_high - out\_low) \* exp(-1\*(in\_high-in\_low)\*log(power)) \* exp(x\*log(power)) )) : (-1) \* ( out\_low + (out\_high-out\_low) \* ( (out\_high - out\_low) \* exp(-1\*(in\_high-in\_low)\*log(power)) \* exp(x\*log(power)) ) )

In non-
classic
(modern) mode the value for the scaling curve must be higher than 0. and is converted according to the following expression:

((x-in\_low)/(in\_high-in\_low) == 0) ? out\_low : (((x-in\_low)/(in\_high-in\_low)) > 0) ? (out\_low + (out\_high-out\_low) \* ((x-in\_low)/(in\_high-in\_low))^exp) : ( out\_low + (out\_high-out\_low) \* -((((-x+in\_low)/(in\_high-in\_low)))^(exp)))

Note that prior to Max 6.0.4 the exponent was inverted. Thus, if you gave it an exponent of 2 the object behaved like it had an exponent of 0.5, and if you gave it an exponent of 0.5 it behaved like it had an exponent of 2. Patches from versions prior to 6.0.4 may require updating to work properly.

## Attributes

### classic[int]

Classic mode uses exponential function that is backward compatible with old IRCAM patchers.

Possible values:

0 = 'Off'

When classic is 0, [scale~](https://docs.cycling74.com/reference/scale~) applies an exponential (power) function after scaling the input to be between 0 and 1, then scales the resulting output.

1 = 'On'

When classic is 1, [scale~](https://docs.cycling74.com/reference/scale~) is compatible with legacy IRCAM "linedrive" scaling. This mode is not recommended for new work.

2 = 'Off + Inverse'

When classic is 2, [scale~](https://docs.cycling74.com/reference/scale~) operates similarly to classic 0, except that when the output range inverts the value -- in other words, when the first output value is greater than the second output value -- the exponential is also inverted so that the scaling curve retains the shape produced by the non-inverted output range.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Perform the scaling operation on the most recently received input value. If the range values have been changed, the scaling will be based on the new range.

### int

The scaling function is performed on the incoming value. If any of the range types are floating point, the value is converted into a  float  for the calculation.

Arguments:

- input
  [int]

### float

In left inlet: The scaling function is performed on the incoming value. If the input range type is integer, the value is converted into an  int  for the calculation.

In second inlet: Sets the low end of the input range.

In third inlet: Sets the high end of the input range.

In fourth inlet: Sets the low end of the output range.

In fifth inlet: Sets the high end of the output range.

In sixth inlet: Sets the scaling curve value as described in the object arguments section.

Arguments:

- input
  [float]

### list

A list of numbers sent to the left inlet will trigger the output of a list with the results of scaling operation perforned on each item.

Arguments:

- input
  [list]

## Output

### float

When scale receives a value in its leftmost inlet, that value is scaled to the indicated output range of values.

### int

If only four arguments are provided and all four are of type  int , scale will output scaled values as integers. Otherwise output is floating-point.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [linedrive](https://docs.cycling74.com/reference/linedrive) | Scale numbers exponentially |
| [zmap](https://docs.cycling74.com/reference/zmap) | Maps input range of values to output range |
| [scale~](https://docs.cycling74.com/reference/scale~) | Map an input range of signal values to an output range |
| [clip](https://docs.cycling74.com/reference/clip) | Limit numbers to a range |
| [clip~](https://docs.cycling74.com/reference/clip~) | Limit signal amplitude |
