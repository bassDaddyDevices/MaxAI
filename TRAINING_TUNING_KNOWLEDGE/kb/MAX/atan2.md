---
type: max
name: "atan2"
summary: "Two-variable arc-tangent function"
signal: false
url: "https://docs.cycling74.com/reference/atan2/"
package: "Max"
see_also: ["atan", "atanh", "tan"]
---
# atan2

Two-variable arc-tangent function

## Description

Use the [atan2](https://docs.cycling74.com/reference/atan2) object to calculate and output the arc-tangent of any two given numbers where the left input is the y value and the right input is the x value.

## Arguments

### x-value[number] optional

Sets the initial X value for the arc-tangent function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the arc-tangent of the numbers currently stored. If there is no argument, [atan2](https://docs.cycling74.com/reference/atan2) initially holds  0  for both input values.

### int

In left input: y value input to an arc-tangent function

Arguments:

- y-value
  [int]

### (inlet1)

In right input: x value input to an arc-tangent function

Arguments:

- x-value
  [int]

### float

In left input: y value input to an arc-tangent function

Arguments:

- y-value
  [float]

### (inlet1)

In right input: x value input to an arc-tangent function

Arguments:

- x-value
  [float]

## Output

### float

The arc-tangent of the input values (i.e. Arc-tangent (y/x)).

### int

The arc-tangent of the input values (i.e. Arc-tangent (y/x)).

## See Also

| Name | Description |
| --- | --- |
| [atan](https://docs.cycling74.com/reference/atan) | Arc-tangent function |
| [atanh](https://docs.cycling74.com/reference/atanh) | Hyperbolic arc-tangent function |
| [tan](https://docs.cycling74.com/reference/tan) | Tangent function |
