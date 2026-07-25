---
type: max
name: "numkey"
summary: "Interpret numbers typed on the keyboard"
signal: false
url: "https://docs.cycling74.com/reference/numkey/"
package: "Max"
see_also: ["key", "keyup", "number"]
---
# numkey

Interpret numbers typed on the keyboard

## Arguments

### format[float] optional

A float argument causes [numkey](https://docs.cycling74.com/reference/numkey) to understand the decimal point and the fractional part of a number, and send out floats instead of ints. (The argument does not, however, set an initial value for [numkey](https://docs.cycling74.com/reference/numkey). The initial value is always 0.)

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the number currently stored in [numkey](https://docs.cycling74.com/reference/numkey) out the left outlet, and resets the stored number to  0 .

### int

The number is an ASCII value received from a [key](https://docs.cycling74.com/reference/key) or [keyup](https://docs.cycling74.com/reference/keyup) object. When digits are typed on the computer keyboard, [numkey](https://docs.cycling74.com/reference/numkey) recognizes the ASCII values and interprets them as the numbers being typed.

The keys recognized by [numkey](https://docs.cycling74.com/reference/numkey) are the digits 0-9, the Delete (Backspace) key, decimal point (period), Return, and Enter. Digits are combined as a single number and stored in [numkey](https://docs.cycling74.com/reference/numkey).

Arguments:

- ASCII
  [int]

### clear

Reset the stored number to 0

## Output

### float

When there is a float argument, [numkey](https://docs.cycling74.com/reference/numkey) understands decimal points and fractional parts of a number, and sends out floats instead of ints.

### int

When digits are typed on the computer keyboard, and the ASCII value (from [key](https://docs.cycling74.com/reference/key) or [keyup](https://docs.cycling74.com/reference/keyup)) is received in the inlet, the digits are combined as a single number and stored in [numkey](https://docs.cycling74.com/reference/numkey). The stored number is sent out the right outlet each time a new digit is typed. The Delete key on Macintosh or Backspace key on Windows erases the most recently typed digit, and sends the stored number out the right outlet. The period key acts as a decimal point and causes [numkey](https://docs.cycling74.com/reference/numkey) not to store subsequent digits until a new number is started (unless there is a float argument). Typing the Return or Enter keys on Macintosh or the Enter key on Windows sends the stored number out the left outlet and resets the number stored in [numkey](https://docs.cycling74.com/reference/numkey) to  0 , so that a new number can be typed in.

## See Also

| Name | Description |
| --- | --- |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |
| [number](https://docs.cycling74.com/reference/number) | Display and output numbers, lists, and messages |
