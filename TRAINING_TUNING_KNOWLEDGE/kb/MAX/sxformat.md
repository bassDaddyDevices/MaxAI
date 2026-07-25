---
type: max
name: "sxformat"
summary: "Prepare MIDI system exclusive messages"
signal: false
url: "https://docs.cycling74.com/reference/sxformat/"
package: "Max"
see_also: ["expr", "midiout", "sysexin"]
---
# sxformat

Prepare MIDI system exclusive messages

## Description

Accepts, as arguments, a list of numbers which are sent out sequentially. In addition, you may use one or more "expr"-style statements, which start with the word "is", which will be evaluated with the result being sent out. "is" statements need to be separated by slashes.

#### Discussion

The format of [sxformat](https://docs.cycling74.com/reference/sxformat) arguments is similar to statements in a "lib" object script.

## Arguments

### SysEx[list] optional

Obligatory. The arguments are a list of numbers which represent the values of individual bytes of a MIDI system exclusive message. The first number should be  240  (or  0xF0 ), the system exclusive status byte and the last number should be  247  (or  0xF7 ), the end byte. There can be any number of values for data bytes in between.

Arguments for data bytes can also be in the form of a mathematical expression (like the expressions in [expr](https://docs.cycling74.com/reference/expr) and [if](https://docs.cycling74.com/reference/if) objects) to be evaluated before numbers are sent out the outlet. The expressions can contain changeable arguments in the form  $i , followed immediately by an inlet number (for example,  $i2 ). The changeable arguments are replaced by numbers received in the specified inlet. Expressions used in place of numbers should be preceded by the word  is , and should be separated from other arguments with a slash (/) on either side of the expression (see example).

If the value of an evaluated expression is less than 0, no number is sent out in place of that expression. This allows you to send variable-length system exclusive messages.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out the bytes of the formatted message, using the most recently received numbers.

### int

In left inlet: The number replaces any $  i1  arguments in the object box, and the entire list of arguments is evaluated and sent out the outlet, one-by-one.

Arguments:

- input
  [int]

### (inlet1)

In any other inlet besides left: The number is stored in place of the  $i  argument that corresponds to that inlet, until a number is received in the left inlet.

Arguments:

- input
  [int]

### (inlet2)

In any other inlet besides left: The number is stored in place of the  $i  argument that corresponds to that inlet, until a number is received in the left inlet.

Arguments:

- input
  [int]

### (inlet3)

In any other inlet besides left: The number is stored in place of the  $i  argument that corresponds to that inlet, until a number is received in the left inlet.

Arguments:

- input
  [int]

### (inlet4)

In any other inlet besides left: The number is stored in place of the  $i  argument that corresponds to that inlet, until a number is received in the left inlet.

Arguments:

- input
  [int]

### (inlet5)

In any other inlet besides left: The number is stored in place of the  $i  argument that corresponds to that inlet, until a number is received in the left inlet.

Arguments:

- input
  [int]

### (inlet6)

In any other inlet besides left: The number is stored in place of the  $i  argument that corresponds to that inlet, until a number is received in the left inlet.

Arguments:

- input
  [int]

### (inlet7)

In any other inlet besides left: The number is stored in place of the  $i  argument that corresponds to that inlet, until a number is received in the left inlet.

Arguments:

- input
  [int]

### (inlet8)

In any other inlet besides left: The number is stored in place of the  $i  argument that corresponds to that inlet, until a number is received in the left inlet.

Arguments:

- input
  [int]

### (inlet9)

In any other inlet besides left: The number is stored in place of the  $i  argument that corresponds to that inlet, until a number is received in the left inlet.

Arguments:

- input
  [int]

### list

In left inlet: The numbers in the list are used to replace the corresponding $i arguments in the object box, then the list of arguments is evaluated and the numbers are sent out one-by-one.

Arguments:

- input
  [list]

## Output

### int

When a number is received in the left inlet, any expressions in the argument are evaluated and the numbers in the list are sent out one at a time, as bytes of a MIDI system exclusive message, for transmission by [midiout](https://docs.cycling74.com/reference/midiout).

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [midiout](https://docs.cycling74.com/reference/midiout) | Transmit raw MIDI data |
| [sysexin](https://docs.cycling74.com/reference/sysexin) | Receive MIDI system exclusive messages |
