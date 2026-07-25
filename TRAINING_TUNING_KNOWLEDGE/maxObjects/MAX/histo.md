---
type: max
name: "histo"
summary: "Create a histogram of numbers received"
signal: false
url: "https://docs.cycling74.com/reference/histo/"
package: "Max"
see_also: ["anal", "itable", "prob", "table"]
---
# histo

Create a histogram of numbers received

## Description

Records and outputs histogram data of the numbers it receives.

## Arguments

### size[int] optional

[histo](https://docs.cycling74.com/reference/histo) takes an optional argument to set the size of the histogram. The default size is 128 (0-127).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Using the number most recently received in the left inlet, [histo](https://docs.cycling74.com/reference/histo) reports out the right outlet how many times that number has been received, and sends the number itself out the left outlet. If no number has been previously received in the left inlet,  0  is sent out both outlets.

### int

In left inlet: [histo](https://docs.cycling74.com/reference/histo) keeps count of how many times it has received a number between 0 and 127 in the left inlet. When a number is received, [histo](https://docs.cycling74.com/reference/histo) includes it in the count, sends the number of times that number has been received out the right outlet, and passes the number itself out the left outlet. Numbers outside the range 0-127 are ignored.

Arguments:

- count
  [int]

### (inlet1)

In right inlet: Has the same effect as a number in the left inlet, except that the number is not counted by [histo](https://docs.cycling74.com/reference/histo).

Arguments:

- count
  [int]

### clear

Erases the memory of [histo](https://docs.cycling74.com/reference/histo), to begin a new histogram.

## Output

### int

Out left outlet: The number received in the inlet.

Out right outlet: The count of the number of times that number has been received.

## See Also

| Name | Description |
| --- | --- |
| [anal](https://docs.cycling74.com/reference/anal) | Make a histogram of number pairs |
| [itable](https://docs.cycling74.com/reference/itable) | Data table editor |
| [prob](https://docs.cycling74.com/reference/prob) | Create a weighted transition table |
| [table](https://docs.cycling74.com/reference/table) | Store and edit an array of numbers |
