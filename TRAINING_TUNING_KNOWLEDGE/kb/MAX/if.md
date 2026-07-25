---
type: max
name: "if"
summary: "Conditional statement in if/then/else form"
signal: false
url: "https://docs.cycling74.com/reference/if/"
package: "Max"
see_also: ["!=", "<", "<=", "==", ">", ">=", "expr", "select"]
---
# if

Conditional statement in if/then/else form

## Description

Evaluates input according to a conditional statement specified in an if-then-else form.

## Arguments

### if[symbol] optional

The arguments for the [if](https://docs.cycling74.com/reference/if) object start with a conditional statement that uses the same syntax as [expr](https://docs.cycling74.com/reference/expr). The word  then  follows the conditional statement, which is then followed by a message expression. After the message expression, there is an optional  else  and a second message expression.

[if](https://docs.cycling74.com/reference/if) evaluates the conditional expression, and if the result is non-zero, evaluates the message expression after the word  then . Otherwise, it evaluates the second message expression after the word  else  if an  else  message is provided.

### then, else[symbol] optional

Message expressions are similar to what you type into a [message](https://docs.cycling74.com/reference/message) box.

### $i1, $f1, $s1[symbol] optional

You use  $i1 ,  $f1 , or  $s1  instead of  $1  for replaceable arguments. The number of inlets is determined by how many different changeable arguments are typed in. The maximum number of inlets is 9.

### send[symbol] optional

No commas or semicolons are allowed. Messages can be sent to remote [receive](https://docs.cycling74.com/reference/receive) objects by preceding the message expression with [send](https://docs.cycling74.com/reference/send), followed by the name of the [receive](https://docs.cycling74.com/reference/receive) object.

### out2[symbol] optional

The keyword  out2  in a message expression creates a second, right outlet for the [if](https://docs.cycling74.com/reference/if) object. If  out2  precedes a message expression, the result of the expression is sent out the right outlet instead of the left outlet.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Evaluates the conditional statement using the values currently stored.

### int

The number in each inlet will be stored in place of the  $i  or  $f  argument associated with it, and the expression will be evaluated.

Arguments:

- input
  [int]

### (inlet1)

Replace the $i1 value

Arguments:

- input
  [int]

### (inlet2)

Replace the $i2 value

Arguments:

- input
  [int]

### (inlet3)

Replace the $i3 value

Arguments:

- input
  [int]

### (inlet4)

Replace the $i4 value

Arguments:

- input
  [int]

### (inlet5)

Replace the $i5 value

Arguments:

- input
  [int]

### (inlet6)

Replace the $i6 value

Arguments:

- input
  [int]

### (inlet7)

Replace the $i7 value

Arguments:

- input
  [int]

### (inlet8)

Replace the $i8 value

Arguments:

- input
  [int]

### (inlet9)

Replace the $i9 value

Arguments:

- input
  [int]

### float

The number in each inlet will be stored in place of the  $i  or  $f  argument associated with it, and the expression will be evaluated.

Arguments:

- input
  [float]

### (inlet1)

Replace the $f1 value

Arguments:

- input
  [float]

### (inlet2)

Replace the $f2 value

Arguments:

- input
  [float]

### (inlet3)

Replace the $f3 value

Arguments:

- input
  [float]

### (inlet4)

Replace the $f4 value

Arguments:

- input
  [float]

### (inlet5)

Replace the $f5 value

Arguments:

- input
  [float]

### (inlet6)

Replace the $f6 value

Arguments:

- input
  [float]

### (inlet7)

Replace the $f7 value

Arguments:

- input
  [float]

### (inlet8)

Replace the $f8 value

Arguments:

- input
  [float]

### (inlet9)

Replace the $f9 value

Arguments:

- input
  [float]

### set

The word  set , followed by one or more numbers, treats those numbers as if each had come in a different inlet, replacing the stored value with the new value, but the conditional statement is not evaluated and nothing is sent out the outlet. If there are fewer numbers in the message than there are inlets, the stored value in each remaining inlet is left unchanged.

Arguments:

- set-input
  [list]

### symbol

Symbols can only be received in the first inlet. If received in the first inlet, a symbol will be stored in place of the  $s  argument associated with it, and the expression will be evaluated, with the exception that you cannot do comparisons or use other operators with symbols. If the symbol shares the name of a [table](https://docs.cycling74.com/reference/table) object, you can specify a position in the table to be evaluated.

Arguments:

- input
  [symbol]

## Output

### anything

The message after the  then  or  else  portion of the arguments is sent out the outlet. If the word  out2  is present as an argument, there will be two outlets, and messages following  out2  will be sent out the right outlet. If the word  send  is present as an argument, the word that follows it is the name of a [receive](https://docs.cycling74.com/reference/receive) object, and the message that follows it will be sent to [receive](https://docs.cycling74.com/reference/receive) objects with that name.

## See Also

| Name | Description |
| --- | --- |
| [!=](https://docs.cycling74.com/reference/notequals) | Compare numbers for not-equal-to condition |
| [<](https://docs.cycling74.com/reference/lessthan) | Compare numbers for less than condition |
| [<=](https://docs.cycling74.com/reference/lessthaneq) | Compare numbers as less than or equal to |
| [==](https://docs.cycling74.com/reference/equals) | Compare numbers for equal-to condition |
| [>](https://docs.cycling74.com/reference/greaterthan) | Compare numbers for greater than condition |
| [>=](https://docs.cycling74.com/reference/greaterthaneq) | Compare numbers for greater than or equal to condition |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [select](https://docs.cycling74.com/reference/select) | Output bangs based on input matching |
