---
type: msp
name: "scale~"
summary: "Map an input range of signal values to an output range"
signal: true
url: "https://docs.cycling74.com/reference/scale~/"
package: "MSP"
see_also: ["scale", "clip", "clip~"]
---
# scale~

Map an input range of signal values to an output range

## Description

Use the [scale~](https://docs.cycling74.com/reference/scale~) object to map an input range of signal values to an output range. The ranges can be specified with hi and lo reversed for inverted mapping. If specified, the mapping can also be exponential.

## Arguments

### minimum-in-value[number] optional

The first argument is the minimum input value used in the scaling operation.

### maximum-in-value[number] optional

The second argument is the maximum input value used in the scaling operation.

### minimum-out-value[number] optional

The third argument is the minimum output value used in the scaling operation.

### maximum-out-value[number] optional

The fourth argument is the maximum output value used in the scaling operation.

### scaling-curve[float] optional

This optional fifth argument specifies the nature of the scaling curve. This argument must be a floating-point number greater than 1., with larger values leading to steeper exponential curves.

In
classic
mode a typical value for this argument is 1.06 and the number is converted according to the following expression:

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

### int >= 7.0.0

In second inlet: Sets the low input value.

In third inlet: Sets the high input value.

In fourth inlet: Sets the low output value.

In fifth inlet: Sets the high output value.

In sixth inlet: Sets the scaling curve value as described in the object arguments section.

Arguments:

- input
  [int]

### float

In second inlet: Sets the low input value.

In third inlet: Sets the high input value.

In fourth inlet: Sets the low output value.

In fifth inlet: Sets the high output value.

In sixth inlet: Sets the scaling curve value as described in the object arguments section.

Arguments:

- input
  [float]

### signal

In left inlet: The incoming signal values are scaled according to the mapping provided by the arguments or values received in the other inlets.

## See Also

| Name | Description |
| --- | --- |
| [scale](https://docs.cycling74.com/reference/scale) | Map values to an output range |
| [clip](https://docs.cycling74.com/reference/clip) | Limit numbers to a range |
| [clip~](https://docs.cycling74.com/reference/clip~) | Limit signal amplitude |
