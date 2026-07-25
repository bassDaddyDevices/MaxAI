---
type: max
name: "swap"
summary: "Swap position of two numbers"
signal: false
url: "https://docs.cycling74.com/reference/swap/"
package: "Max"
see_also: ["buddy", "fswap", "join", "pack", "unjoin", "unpack"]
---
# swap

Swap position of two numbers

## Description

Swaps the values of its inlets, preserving right-to-left ordering. The first outlet type is determined by its argument. The second outlet's type is always an int.

## Arguments

### initial[number] optional

Sets an initial value for the number which is to be sent out the left outlet. If there is no argument, the initial value is 0. If there is an int argument or no argument, an int is sent out the left outlet. (The number sent out the right outlet is always a int.)

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Swaps and sends out the numbers currently stored in [swap](https://docs.cycling74.com/reference/swap).

### int

The number is sent out the right outlet, then the number in the right inlet is sent out the left outlet.

Arguments:

- input
  [int]

### (inlet1)

The number is stored to be sent out the left outlet when a number is received in the left inlet.

Arguments:

- input
  [int]

### float

The numbers are converted to int, unless there is a float argument, in which case the number received in the right inlet is stored as a float.

Arguments:

- input
  [float]

### (inlet1)

The number is stored to be sent out the left outlet when a number is received in the left inlet.

Arguments:

- input
  [float]

### list

In left inlet: The numbers are stored in [swap](https://docs.cycling74.com/reference/swap). The first number is sent out the right outlet, then the second number is sent out the left outlet.

Arguments:

- left
  [number]
- right
  [number]

## Output

### float

If there is a float argument, the number sent out the left outlet is a float.

### int

When a number is received in the left inlet, the number in each inlet is sent out the opposite outlet.

## See Also

| Name | Description |
| --- | --- |
| [buddy](https://docs.cycling74.com/reference/buddy) | Synchronize arriving data |
| [fswap](https://docs.cycling74.com/reference/fswap) | Swap position of two numbers |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
