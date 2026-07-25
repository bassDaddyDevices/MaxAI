---
type: max
name: "shiftleft"
summary: "Bit shift to the left"
signal: false
url: "https://docs.cycling74.com/reference/shiftleft/"
package: "Max"
see_also: ["\\*", ">>"]
---
# shiftleft

Bit shift to the left

## Description

Shifts all bit values to the left. This has the effect of multiplying a number by a power of two, but is less expensive in computer time.

## Arguments

### initial-value[int] optional

Sets an initial value for the number of bits by which to shift leftward.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Performs the bit-shift with the numbers currently stored. If there is no argument, [<<](https://docs.cycling74.com/reference/shiftleft) initially holds  0  as the number of bits by which to shift.

### int

In left inlet: All bits of the number, in binary form, are shifted to the left by a certain number of bits. The resulting number is sent out the outlet.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored as the number of bits to left-shift the number in the left inlet.

Arguments:

- amount-of-bitshift
  [int]

### float

See the  int  listing.

Arguments:

- input
  [float]

### set

Sets input to the object without causing output ( bang  will output it).

Arguments:

- set-input
  [int]

### list

In left inlet: The first number is bit-shifted to the left by the number of bits specified by the second number.

Arguments:

- input
  [int]
- shift-amount
  [int]

## Output

### int

The number in the left inlet is bit-shifted to the left by a certain number of bits. The number of bits by which to shift is specified by the number in the right inlet. The output is the resulting bit-shifted number.

## See Also

| Name | Description |
| --- | --- |
| [\*](https://docs.cycling74.com/reference/times) | Multiply two numbers |
| [>>](https://docs.cycling74.com/reference/shiftright) | Bit shift to the right |
