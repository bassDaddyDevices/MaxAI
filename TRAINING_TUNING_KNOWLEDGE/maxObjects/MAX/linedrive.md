---
type: max
name: "linedrive"
summary: "Scale numbers exponentially"
signal: false
url: "https://docs.cycling74.com/reference/linedrive/"
package: "Max"
see_also: ["expr", "scale"]
---
# linedrive

Scale numbers exponentially

## Description

Scales number from one range to another with an exponential curve. Both the input and output ranges are expressed as single arguments representing the maximum value. The minimum values are the negative values of the ranges (argument \* -1).

## Arguments

### input[number] optional

The first argument is the maximum input value. The range used is from (argument \* -1) to (argument).

### output[number] optional

The second argument is the maximum output value. The range used is from (argument \* -1) to (argument).

### curve[number] optional

The third argument specifies the nature of the scaling curve. The third argument must be greater than 1. The larger the value, the more steeply exponential the curve is. An appropriate value for this argument is 1.06.

### delay[int]ms optional

The fourth argument specifies a ramp time (slew rate). The [linedrive](https://docs.cycling74.com/reference/linedrive) object outputs a list consisting of the scaled output value followed by a ramp time in milliseconds which can be sent to a [line](https://docs.cycling74.com/reference/line) or [line~](https://docs.cycling74.com/reference/line~) object. The initial argument value can be modifed using the [linedrive](https://docs.cycling74.com/reference/linedrive) object's right inlet.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: The number is converted according to the following expression

y = b e^{-a log c} e^{x log c}

where x is the input, y is the output, a, b, and c are the three typed-in arguments, and e is the base of the natural logarithm (approximately 2.718282). The output is a two-item list containing y followed by the delay time most recently received in the right inlet.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: Sets the current delay time appended to the scaled output. A connected [line~](https://docs.cycling74.com/reference/line~) object will ramp to the new target value over this time interval.

Arguments:

- delay
  [int]

### float

In left inlet: The number is converted according to the following expression

y = b e^{-a log c} e^{x log c}

where x is the input, y is the output, a, b, and c are the three typed-in arguments, and e is the base of the natural logarithm (approximately 2.718282). The output is a two-item list containing y followed by the delay time most recently received in the right inlet.

Arguments:

- input-to-conversion
  [float]

## Output

### list

When an  int  or  float  is received in the left inlet, a  list  is sent out containing a scaled version of the input (see the formula above) and the current delay time.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [scale](https://docs.cycling74.com/reference/scale) | Map values to an output range |
