---
type: max
name: "anal"
summary: "Make a histogram of number pairs"
signal: false
url: "https://docs.cycling74.com/reference/anal/"
package: "Max"
see_also: ["histo", "prob"]
---
# anal

Make a histogram of number pairs

## Description

Reports how many times a number pair has been received.

#### Discussion

The output list is designed to serve as input to the [prob](https://docs.cycling74.com/reference/prob) object, to create a probability matrix of transitions from one number to another (known as a first-order Markov chain).

## Arguments

### input-limit[int] optional

Sets a maximum limit for the values that can be input into [anal](https://docs.cycling74.com/reference/anal). Input values are clipped between zero and this value. The default value, when no argument is present, is 128. By supplying an argument, you can change the maximum input value up to a maximum of 16384.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Reports how many times this number and the previously received number have occurred in immediate succession. (The first time a number is received, there has been no previous number, so nothing happens.)

Arguments:

- input
  [int]

### clear

Erases the memory of the [anal](https://docs.cycling74.com/reference/anal) object entirely, but retains the most recently received number to use as the next "previous" value.

### reset

Erases the most recently received number from the memory of the [anal](https://docs.cycling74.com/reference/anal) object. The next number to be received gets stored in its place, to serve as the next "previous" value (but nothing else happens).

## Output

### list

The first two numbers in the list are the two most recently received numbers, and the third number shows how many times that particular succession of two numbers has been received. This list of three numbers is designed to be used as input to the [prob](https://docs.cycling74.com/reference/prob) object, to create a probability matrix of transitions from one number to another (known as a first-order Markov chain).

## See Also

| Name | Description |
| --- | --- |
| [histo](https://docs.cycling74.com/reference/histo) | Create a histogram of numbers received |
| [prob](https://docs.cycling74.com/reference/prob) | Create a weighted transition table |
