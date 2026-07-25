---
type: max
name: "slide"
summary: "Smooth values logarithmically"
signal: false
url: "https://docs.cycling74.com/reference/slide/"
package: "Max"
see_also: ["expr"]
---
# slide

Smooth values logarithmically

## Description

Filters an input value logarithmically between changes. It's particularly useful for envelope following and lowpass filtering to smooth a stream of continuous data.

#### Discussion

The formula is y (n) = y (n-1) + ((x (n) - y (n-1))/slide).

## Arguments

### slide-up[float] optional

Specifies the slide up value. The default is 1.

### slide-down-value[float] optional

A second argument specifies the slide down value. The default is 1.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Performs the same function as  float  using the last input value.

### int

Converted to  float .

Arguments:

- input
  [int]

### float

In left inlet: An input value to be filtered. When a new value is received, object filters an input value logarithmically between changes using the formula

y (n) = y (n-1) + ((x (n) - y (n-1))/slide)

A given sample output from [slide](https://docs.cycling74.com/reference/slide) is equal to the last value plus the difference between the last value and the input divided by the slide value. Given a slide value of 1, the output will therefore always equal the input. Given a slide value of 10, the output will only change 1/10th as quickly as the input. This can be particularly useful for lowpass filtering or envelope following.

Arguments:

- input
  [float]

### (inlet1)

In middle inlet: Specifies the slide up value to be used when an incoming value is greater than the current value.

Arguments:

- input
  [float]

### (inlet2)

In right inlet: Specifies the slide down value to be used when an incoming value is less than the current value.

Arguments:

- input
  [float]

### reset

Resets the current output sample to 0.

### set

The word  set  followed by a number will set the current input value to the given number without causing output ( bang  can be used to cause successive output).

Arguments:

- input
  [int]

## Output

### float

The filtered input value.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
