---
type: max
name: "fswap"
summary: "Swap position of two numbers"
signal: false
url: "https://docs.cycling74.com/reference/fswap/"
package: "Max"
see_also: ["join", "pack", "swap", "unjoin", "unpack"]
---
# fswap

Swap position of two numbers

## Description

Swaps the values of its inlets, preserving right-to-left ordering. The first outlet type is determined by its argument. The second outlet's type is always a float.

## Arguments

### initial[int or float] optional

Sets an initial value for the number which is to be sent out the left outlet. If there is no argument, the initial value is 0. If there is an int argument or no argument, an int is sent out the left outlet. (The number sent out the right outlet is always a float.)

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Swaps and sends out the numbers currently stored in [fswap](https://docs.cycling74.com/reference/fswap).

### int

If there is a float argument, the numbers are converted to float. If there is an int argument or no argument, the number received in the right inlet is stored as an int. See the  float  entry for more details.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored to be sent out the left outlet when a number is received in the left inlet.

Arguments:

- input
  [int]

### float

In left inlet: The number is sent out the right outlet, then the number in the right inlet is sent out the left outlet.

Arguments:

- input
  [float]

### (inlet1)

In right inlet: The number is stored to be sent out the left outlet when a number is received in the left inlet.

Arguments:

- input
  [float]

## Output

### float

The number sent out the right outlet is always a float. The number sent out the left outlet is a float only if there is a float argument.

### int

When a number is received in the left inlet, the number in each inlet is sent out the opposite outlet. If there is an int argument or no argument, an int is sent out the left outlet.

## See Also

| Name | Description |
| --- | --- |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [swap](https://docs.cycling74.com/reference/swap) | Swap position of two numbers |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
