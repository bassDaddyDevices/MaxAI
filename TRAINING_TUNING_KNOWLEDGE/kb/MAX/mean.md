---
type: max
name: "mean"
summary: "Calculate a running average"
signal: false
url: "https://docs.cycling74.com/reference/mean/"
package: "Max"
see_also: ["accum", "anal", "bag", "histo", "prob"]
---
# mean

Calculate a running average

## Description

Calculates the mean (average) of all the numbers it has received and outputs it.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out the previous output (the stored average value).

### int

The number is added to the sum of all numbers received up to that point, and the mean is sent out.

Arguments:

- input
  [int]

### float

The number is added to the sum of all numbers received up to that point, and the mean is sent out.

Arguments:

- input
  [float]

### list

The numbers in the list are added together, the sum is divided by the number of items in the list, and the mean is sent out. All previously received numbers are cleared from memory.

Arguments:

- input
  [list]

### clear

Resets the stored and calculated contents of the object to zero.

## Output

### float

Out left outlet: The mean (average) value of all numbers received up to that point, or of all the numbers received together in a list.

Out right outlet: How many numbers have been included in the averaging process.

### int

Out left outlet: The mean (average) value of all numbers received up to that point, or of all the numbers received together in a list.

Out right outlet: How many numbers have been included in the averaging process.

## See Also

| Name | Description |
| --- | --- |
| [accum](https://docs.cycling74.com/reference/accum) | Store, add to, and multiply a number |
| [anal](https://docs.cycling74.com/reference/anal) | Make a histogram of number pairs |
| [bag](https://docs.cycling74.com/reference/bag) | Store a collection of numbers |
| [histo](https://docs.cycling74.com/reference/histo) | Create a histogram of numbers received |
| [prob](https://docs.cycling74.com/reference/prob) | Create a weighted transition table |
