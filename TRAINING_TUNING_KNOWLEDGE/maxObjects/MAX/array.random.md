---
type: max
name: "array.random"
summary: "Generate a random array of a specified length"
signal: false
url: "https://docs.cycling74.com/reference/array.random/"
package: "Max"
see_also: ["array", "array.fill", "random", "urn"]
---
# array.random

Generate a random array of a specified length

## Description

Creates a new array object of a specified length, pre-filled with random numbers.

## Arguments

### length[int] optional

The length of the generated array.

### initial-range[list] optional

The range of random values to generate. If both values are integers, random integers will be generated, otherwise random floating-point numbers will be generated.

## Attributes

### mode[int]: 0

Fill Mode

Possible values:

0 = 'Repeat'

1 = 'Repeat Last'

2 = 'Repeat Zero'

3 = 'Interpolate (Linear)'

### range[atom]: 0 1

The range can be any two numerical values, including negative values. If the range contains a floating-point value, the object will generate floating-point output. Otherwise, it will generate integers.

A single value specifies a range between  0  and the supplied value (or  0 1  if the supplied value is also  0 ).

### seed[int]

A seed value for the random number generation. Reseeding the object with the same value will cause the same series of random numbers to be generated. A seed value of  0  will cause a new random seed to be generated.

### urn[int]: 0

When generating integers (only), generate all numbers in the specified range before repeating a number. For instance, with a range of  0 5  and a length of 10, a possible result would be  [ 3, 4, 0, 1, 2, 1, 3, 2, 0, 4 ] . Note that enabling urn does not automatically cause the object to generate integers -- an integer range also needs to be supplied.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received arrays and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

Arguments:

- value
  [int]

### (inlet1)

The length of the generated array.

Arguments:

- length
  [int]

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

Arguments:

- value
  [float]

### list

Convert an incoming list to an array, then process as described for the  array  message.

Arguments:

- list-value
  [list]

### anything

Convert an incoming list to an array, then process as described for the  array  message.

Arguments:

- list-value
  [list]

### array

A new array object will be created at the length specified by the object's first argument, or by a number received in the rightmost inlet. The object will then be filled with random values, as specified by the range and seed.

An incoming array will be used as a new range. As such, only the first two integer and floating-point numbers will be used -- all other data will be interpreted as  0 .

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

Arguments:

- dictionary-value
  [list]

### string

Wrap a string object in an array, then process as described for the  array  message.

Arguments:

- string-value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.fill](https://docs.cycling74.com/reference/array.fill) | Generate an array of a specified length |
| [random](https://docs.cycling74.com/reference/random) | Generate a random number |
| [urn](https://docs.cycling74.com/reference/urn) | Generate random numbers without duplicates |
