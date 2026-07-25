---
type: max
name: "round"
summary: "Round to a value"
signal: false
url: "https://docs.cycling74.com/reference/round/"
package: "Max"
see_also: ["expr", "vexpr", "round~"]
---
# round

Round to a value

## Description

Calculates and outputs an integer multiple of any given number.

## Arguments

### multiple[number] optional

An argument can be used to specify the value to whose nearest multiple the rounding will be done.

## Attributes

### nearest[int]

When set to 1 (the default), the [round](https://docs.cycling74.com/reference/round) object will round to the nearest multiple of the specified number value.

Note: This attribute does not set the rounding step (which is set using [round](https://docs.cycling74.com/reference/round) object's right inlet), It specifies that rounding to the nearest number value will occur.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Value to be rounded, Number values received in the left inlet will be rounded to either the absolute nearest integer multiple or the nearest integer multiple between the value received in this inlet or 0 (see the  nearest  attribute for more information).

Arguments:

- input
  [int]

### float

Value to be rounded.

Arguments:

- input
  [float]

### list

Values to be rounded.

Arguments:

- input
  [list]

### anything

Values to be rounded.

Arguments:

- input
  [list]

## Output

### float

The nearest whole numbers of the input.

### list

List of the nearest whole numbers of the input list.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [vexpr](https://docs.cycling74.com/reference/vexpr) | Evaluate a math expression for a list |
| [round~](https://docs.cycling74.com/reference/round~) | Round an input signal value |
