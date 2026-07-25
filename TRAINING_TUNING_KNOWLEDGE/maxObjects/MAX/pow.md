---
type: max
name: "pow"
summary: "Computes input to the nth power"
signal: false
url: "https://docs.cycling74.com/reference/pow/"
package: "Max"
see_also: ["expr", ">>", "<<"]
---
# pow

Computes input to the nth power

## Description

Raises the base value (set in the left inlet) to the power of the exponent (set in the right inlet).

## Arguments

### exponent[float or int] optional

Sets the exponent value. The default value is 0.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes [pow](https://docs.cycling74.com/reference/pow) to output the most recent value it has calculated.

### int

In left inlet: Sets the exponent.

In right inlet: Sets the base value.

Arguments:

- input
  [int]

### float

In left inlet: Sets the exponent.

In right inlet: Sets the base value.

Arguments:

- input
  [float]

### (inlet1)

Sets the exponent.

Arguments:

- exponent
  [float]

### list

A list consisting of the base-value followed by the exponent-value will cause [pow](https://docs.cycling74.com/reference/pow) to output the base-value raised to the power of the exponent.

Arguments:

- base
  [number]
- exponent
  [number]

## Output

### float

The base value (from the left inlet) raised to the exponent (from the right inlet).

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [>>](https://docs.cycling74.com/reference/shiftright) | Bit shift to the right |
| [<<](https://docs.cycling74.com/reference/shiftleft) | Bit shift to the left |
