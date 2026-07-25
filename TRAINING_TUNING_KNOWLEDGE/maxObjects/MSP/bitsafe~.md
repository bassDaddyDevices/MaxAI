---
type: msp
name: "bitsafe~"
summary: "Replace NaN and infinite signal values with 0"
signal: true
url: "https://docs.cycling74.com/reference/bitsafe~/"
package: "MSP"
see_also: ["bitshift~", "bitor~", "bitxor~", "bitnot~", "bitand~"]
---
# bitsafe~

Replace NaN and infinite signal values with 0

## Description

Use the [bitsafe~](https://docs.cycling74.com/reference/bitsafe~) object to detect NaN (not a number) and +/- infinity values in an incoming signal and replace those occurences with zero. This is useful in conjunction with the bitwise operators, or any other situation where these values are possible.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Input signals to [bitsafe~](https://docs.cycling74.com/reference/bitsafe~) will have infinite and NaN values replaced with 0 in the output signal.

## Output

### signal

The resulting floating-point signal which has 0 values where infinite or NaN values existed in the input.

## See Also

| Name | Description |
| --- | --- |
| [bitshift~](https://docs.cycling74.com/reference/bitshift~) | Bit shifting for floating point signals |
| [bitor~](https://docs.cycling74.com/reference/bitor~) | Bitwise or-operation of floating point signals |
| [bitxor~](https://docs.cycling74.com/reference/bitxor~) | Bitwise exclusive-or-operation of floating point signals |
| [bitnot~](https://docs.cycling74.com/reference/bitnot~) | Bitwise inversion of a floating point signal |
| [bitand~](https://docs.cycling74.com/reference/bitand~) | Bitwise and-operation of floating point signals |
