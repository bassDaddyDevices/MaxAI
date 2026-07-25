---
type: msp
name: "bitxor~"
summary: "Bitwise exclusive-or-operation of floating point signals"
signal: true
url: "https://docs.cycling74.com/reference/bitxor~/"
package: "MSP"
see_also: ["bitshift~", "bitand~", "bitor~", "bitnot~"]
---
# bitxor~

Bitwise exclusive-or-operation of floating point signals

## Description

Use the [bitxor~](https://docs.cycling74.com/reference/bitxor~) object to perform a bitwise "exclusive or" operation on two incoming floating-point signals as either raw 32-bit data or as integer values. The bits of both incoming signals are compared, and the corresponding output bit will be set to 1 if the two bit values are different, and 0 if the two values are the same. The output is a floating-point signal composed of the resulting bit pattern.

## Arguments

### bitmask[int] optional

Sets the bitmask to be used by the [bitxor~](https://docs.cycling74.com/reference/bitxor~) object. The default is  0 . An integer value can be used as a bitmask regardless of the mode; the binary representation of this integer is the bitmask.

### operational-mode[int] optional

Specifies whether the floating-point signal or floating-point value will be processed as a raw 32-bit floating-point value or converted to an integer value for bit inversion. The modes of operation are listed below.

0: Treat floating-point signal input as a raw 32-bit value (default).

1: Convert the floating-point signal input to an integer value.

## Attributes

### mode[int]

Specifies whether the floating-point signal or floating-point value will be processed as a raw 32-bit floating-point value or converted to an integer value for bit inversion. The modes of operation are listed below.

0: Treat floating-point signal input as a raw 32-bit value (default).

1: Convert the floating-point signal input to an integer value.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In right inlet: An integer value can be used as a bitmask when supplied to the right inlet of the [bitxor~](https://docs.cycling74.com/reference/bitxor~) object, provided that the proper mode is set.

Arguments:

- bitmask
  [int]

### bits

In left inlet: The word  bits , followed by a list containing 32 ones or zeros, specifies a bitmask to be used by [bitxor~](https://docs.cycling74.com/reference/bitxor~). Alternately, a bitmask value can be set by using an int value in the right inlet.

Arguments:

- bitmask (32 ones or zeros)
  [list]

### signal

In left inlet: The floating-point signal is compared, in binary form, with the floating-point signal in the right inlet. The signal can be treated as either a floating-point signal or as an integer.

In right inlet: The floating-point signal to be compared with the signal in the left inlet. The signal can be treated as either a floating-point signal or as an integer.

The raw floating-point signal bit values are expressed in the following form:

<1 sign bit> <8 exponent bits> <23 mantissa bits>

## Output

### signal

The two floating-point signals or ints received in the inlets are compared, one bit at a time. A  1  is output if the two bit values are different,  0  if they are the same. The output is a floating-point signal composed of the resulting bit pattern.

## See Also

| Name | Description |
| --- | --- |
| [bitshift~](https://docs.cycling74.com/reference/bitshift~) | Bit shifting for floating point signals |
| [bitand~](https://docs.cycling74.com/reference/bitand~) | Bitwise and-operation of floating point signals |
| [bitor~](https://docs.cycling74.com/reference/bitor~) | Bitwise or-operation of floating point signals |
| [bitnot~](https://docs.cycling74.com/reference/bitnot~) | Bitwise inversion of a floating point signal |
