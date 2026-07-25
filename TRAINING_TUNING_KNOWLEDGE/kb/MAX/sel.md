---
type: max
name: "sel"
summary: "Output bangs based on input matching"
signal: false
url: "https://docs.cycling74.com/reference/sel/"
package: "Max"
see_also: ["if", "match", "route", "=="]
---
# sel

Output bangs based on input matching

## Description

Selectively outputs a  bang  in response to any input which matches its arguments and will output non-matching messages out its right-most outlet.

## Arguments

### selectors[anything] optional

The arguments can be a mix of ints, floats, or symbols. The number of arguments determines the number of outlets in addition to the rightmost outlet. If there is no argument, there is only one other outlet, which is assigned the integer number  0 .

### inlet[int] optional

If there is a single int argument (or if there are no arguments) a second inlet is created on the right. Numbers received in that inlet are stored in place of the argument. If there is more than one argument, or if the only argument is not an  int , the right inlet is not created.

## Attributes

### fuzzy[atom]: 0.

When matchfloat is set to 1, the fuzzy attribute allows for fuzzy floating-point comparison. This can be useful when sending a float to [select](https://docs.cycling74.com/reference/select) via a [dial](https://docs.cycling74.com/reference/dial) object, or other similar objects, where a long floating point number is sent. For example, if the number 0.49999999 is sent to [select](https://docs.cycling74.com/reference/select) with an argument of 0.5, turning matchfloat on and setting fuzzy to 0.01 will cause the two floats to register as a match.

### matchfloat[int]: 0 >= 8.3.0

Alias:
exact

When matchfloat is set to 1, the [select](https://docs.cycling74.com/reference/select) object performs float comparison. In this mode, the fuzzy attribute can be used to match floats within a specified distance of the given float  selector . When matchfloat is set to 0, floats are ignored. The old exact attribute is now an alias of matchfloat.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Performs the same function as  anything . The  bang  message matches a 'bang' symbol in the arguments.

### int

Performs the same function as  anything .

Note: If an int is listed multiple times as an argument, a  bang  message will be sent out the leftmost outlet only.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: Replaces the value of the argument. The right inlet exists only if there is a single int argument.

Arguments:

- value
  [int]

### float

Performs the same function as  anything .

Note: If a float is listed multiple times as an argument, a  bang  message will be sent out the leftmost outlet only.

Arguments:

- input
  [float]

### list

Performs the same function as  anything .

Arguments:

- input
  [list]

### anything

All input will be selectively output either as a  bang  from one of its corresponding outlets if the first element in the list matches the object argument(s) or as it is out the object's right-most outlet.

Arguments:

- input
  [list]

### symbol

Performs the same function as  anything .

Arguments:

- input
  [symbol]

## Output

### anything

If the number or symbol received in the left inlet does not match any of the arguments, it is passed out the rightmost outlet.

### bang

If the number or symbol received in the left inlet is the same as one of the arguments, a  bang  is sent out the outlet that corresponds to that argument.

## See Also

| Name | Description |
| --- | --- |
| [if](https://docs.cycling74.com/reference/if) | Conditional statement in if/then/else form |
| [match](https://docs.cycling74.com/reference/match) | Watch for a message match, then output the message |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [==](https://docs.cycling74.com/reference/equals) | Compare numbers for equal-to condition |
