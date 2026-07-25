---
type: msp
name: "bitshift~"
summary: "Bit shifting for floating point signals"
signal: true
url: "https://docs.cycling74.com/reference/bitshift~/"
package: "MSP"
see_also: ["bitand~", "bitor~", "bitxor~", "bitnot~"]
---
# bitshift~

Bit shifting for floating point signals

## Description

Use the [bitshift~](https://docs.cycling74.com/reference/bitshift~) object to perform bitwise operations on a floating point signal as bits or as an integer.

#### Discussion

Note that if you are converting the floats to ints and back that single precision floating point values only retain 24 bits of integer resolution. The floating point bits from left to right are <1 sign bit> <8 exponent bits> <23 mantissa bits>. Positive shift values correspond to left shifting that number of bits, negative shift values correspond to right shifting that number of bits.

## Arguments

### number-of-bits/direction-of-shift[int] optional

Sets the number of bits to be shifted on the incoming floating-point signal. Positive shift values correspond to left shifting that number of bits, negative shift values correspond to right shifting that number of bits.

### operational-mode[int] optional

Specifies whether the floating-point signal or floating-point value will be processed as a raw 32-bit floating-point value or converted to an integer value for bit shifting. The modes of operation are listed below.

0: Treat floating-point signal input as a raw 32-bit value (default).

1: Convert the floating-point signal input to an integer value.

## Attributes

### mode[int]

Specifies whether the floating-point signal or floating-point value will be processed as a raw 32-bit floating-point value or converted to an integer value for bit inversion. The modes of operation are listed below.

0 - Treat floating-point signal input as a raw 32-bit value (default).

1 - Convert the floating-point signal input to an integer value.

Note: If you convert the floating-point signal input to an int and then convert it back, the resulting floating-point value will retain only 24 bits of integer resolution.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Sets the operational mode of the [bitshift~](https://docs.cycling74.com/reference/bitshift~) object as described by the  mode  message.

Arguments:

- operational-mode
  [int]

### float

Performs the same function as  int .

Arguments:

- operational-mode (0 or 1)
  [float]

### shift

In left inlet: The word  shift , followed by a positive or negative number, specifies the number of bits to be shifted on the incoming floating-point signal. Positive number values correspond to left shifting that number of bits (i.e., Left shifting a number n places is the same as dividing it by 2n). Negative numbers correspond to right shifting that number of bits (i.e., Right shifting a number n places is the same as dividing it by 2n).

Arguments:

- number-of-bits/direction-of-shift
  [int]

### signal

The [bitshift~](https://docs.cycling74.com/reference/bitshift~) object performs bit shifting on a floating-point signal as either raw 32-bit data or as an integer value.

Floating-point signal bit values are expressed in the following form: <1 sign bit> <8 exponent bits> <23 mantissa bits>

## Output

### signal

The resulting bit shifted floating-point signal.

## See Also

| Name | Description |
| --- | --- |
| [bitand~](https://docs.cycling74.com/reference/bitand~) | Bitwise and-operation of floating point signals |
| [bitor~](https://docs.cycling74.com/reference/bitor~) | Bitwise or-operation of floating point signals |
| [bitxor~](https://docs.cycling74.com/reference/bitxor~) | Bitwise exclusive-or-operation of floating point signals |
| [bitnot~](https://docs.cycling74.com/reference/bitnot~) | Bitwise inversion of a floating point signal |
