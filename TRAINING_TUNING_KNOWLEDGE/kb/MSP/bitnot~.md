---
type: msp
name: "bitnot~"
summary: "Bitwise inversion of a floating point signal"
signal: true
url: "https://docs.cycling74.com/reference/bitnot~/"
package: "MSP"
see_also: ["bitshift~", "bitor~", "bitxor~", "bitand~"]
---
# bitnot~

Bitwise inversion of a floating point signal

## Description

Use the [bitnot~](https://docs.cycling74.com/reference/bitnot~) object to perform a bitwise inversion on an incoming floating-point signal as either raw 32-bit data or as an integer value. All bit values of  1  are set to  0 , and vice versa.

## Arguments

### operational-mode[int] optional

Specifies whether the floating-point signal or floating-point value will be processed as a raw 32-bit floating-point value or converted to an integer value for bit inversion. The modes of operation are listed below.

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

Sets the operational mode of the [bitnot~](https://docs.cycling74.com/reference/bitnot~) object as described by the  mode  message.

Arguments:

- operational-mode
  [int]

### float

Sets the operational mode of the [bitnot~](https://docs.cycling74.com/reference/bitnot~) object as described by the  mode  message.

Arguments:

- operational-mode (0 or 1)
  [float]

### signal

The [bitnot~](https://docs.cycling74.com/reference/bitnot~) object can perform bit inversion on either a floating-point signal as bits, or as an integer.

Floating-point signal bit values are expressed in the following form:

<1 sign bit> <8 exponent bits> <23 mantissa bits>

## Output

### signal

The resulting bit inverted floating-point signal.

## See Also

| Name | Description |
| --- | --- |
| [bitshift~](https://docs.cycling74.com/reference/bitshift~) | Bit shifting for floating point signals |
| [bitor~](https://docs.cycling74.com/reference/bitor~) | Bitwise or-operation of floating point signals |
| [bitxor~](https://docs.cycling74.com/reference/bitxor~) | Bitwise exclusive-or-operation of floating point signals |
| [bitand~](https://docs.cycling74.com/reference/bitand~) | Bitwise and-operation of floating point signals |
