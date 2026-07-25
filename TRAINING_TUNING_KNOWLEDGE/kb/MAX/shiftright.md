---
type: max
name: "shiftright"
summary: "Bit shift to the right"
signal: false
url: "https://docs.cycling74.com/reference/shiftright/"
package: "Max"
see_also: ["!/", "<<"]
---
# shiftright

Bit shift to the right

## Description

Shifts all bit values to the right. This has the effect of dividing a number by a power of two, but is less expensive in computer resources.

## Arguments

### initial-value[int] optional

Sets an initial value for the number of bits by which to shift rightward.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Performs the bit-shift with the numbers currently stored. If there is no argument, [>>](https://docs.cycling74.com/reference/shiftright) initially holds  0  as the number of bits by which to shift.

### int

In left inlet: All bits of the number, in binary form, are shifted to the right by a certain number of bits. The resulting number is sent out the outlet.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored as the number of bits to right-shift the number in the left inlet.

Arguments:

- shift-amount
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

In left inlet: The first number is bit-shifted to the right by the number of bits specified by the second number.

Arguments:

- input
  [int]
- shift-amount
  [int]

## Output

### int

The number in the left inlet is bit-shifted to the right by a certain number of bits. The number of bits by which to shift is specified by the number in the right inlet. The output is the resulting bit-shifted number.

## See Also

| Name | Description |
| --- | --- |
| [!/](https://docs.cycling74.com/reference/rdiv) | Divide input from a number |
| [<<](https://docs.cycling74.com/reference/shiftleft) | Bit shift to the left |
