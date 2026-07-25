---
type: max
name: "accum"
summary: "Store, add to, and multiply a number"
signal: false
url: "https://docs.cycling74.com/reference/accum/"
package: "Max"
see_also: ["counter", "float", "int"]
---
# accum

Store, add to, and multiply a number

## Description

Stores a value (int or float), then adds or multiplies into it. If the argument is an integer, the multiplication is done in floating-point then converted to integer.

## Arguments

### initial[int or float] optional

Sets the initial value stored in [accum](https://docs.cycling74.com/reference/accum). An argument with a decimal point causes the value to be stored as a float.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Outputs the value currently stored in [accum](https://docs.cycling74.com/reference/accum).

### int

In left inlet: Replaces the value stored in [accum](https://docs.cycling74.com/reference/accum), and sends the new value out the outlet.

Arguments:

- input
  [int]

### (inlet1)

In middle inlet: The number is added to the stored value, without triggering output.

Arguments:

- input
  [int]

### (inlet2)

In right inlet: The stored value is multiplied by the input, without triggering output.

Arguments:

- input
  [float]

### float

In left and middle inlet: Converted to  int , unless [accum](https://docs.cycling74.com/reference/accum) has a float argument.

In right inlet: Multiplication is done with floats, even if the value is stored as an int.

Arguments:

- input
  [float]

### (inlet1)

In left inlet: The message  ft1 , followed by a number, adds the number to the stored value without triggering output.

Arguments:

- input
  [float]

### set

In left inlet: The word  set , followed by a number, sets the stored value to that number, without triggering output.

Arguments:

- input
  [int]

## Output

### float

Floats are output only if there is an argument with a decimal point.

### int

The value currently held by [accum](https://docs.cycling74.com/reference/accum).

## See Also

| Name | Description |
| --- | --- |
| [counter](https://docs.cycling74.com/reference/counter) | Keep count based on bang messages |
| [float](https://docs.cycling74.com/reference/float) | Store a decimal number |
| [int](https://docs.cycling74.com/reference/int) | Store an integer value |
