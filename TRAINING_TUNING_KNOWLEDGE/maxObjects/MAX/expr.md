---
type: max
name: "expr"
summary: "Evaluate a mathematical expression"
signal: false
url: "https://docs.cycling74.com/reference/expr/"
package: "Max"
see_also: ["if", "vexpr", "round"]
---
# expr

Evaluate a mathematical expression

## Description

Evaluate an expression using a C-like language. Variables and operators are used to create output values.

#### Discussion

Use the [expr](https://docs.cycling74.com/reference/expr) object to perform mathematical calculations using C language-style mathematical operations. The object evaluates expressions that use the "variables" $i1-$i9 (the first to ninth inlets, taken as integers), $f1-$f9 (the inlets as floats) and $s1-$s9 (the inlets as symbols), and/or constants of the same types. The operators are +, -, \*, /, &, |, &&, ||, !, ~, and ^, and you can also use a set of predefined mathematical and statistical functions. The list of functions in expr are as follows: min, max, int (convert to integer), float (convert to float), pow (power), sqrt (square root), exp (power of e to x), log10 (log), ln (natural log), log (nat. log), sin, cos, tan, asin (arcsin), acos, atan, atan2, sinh, cosh, tanh, fact (factorial), random, noise, round, floor, ceil, size (size of a table), sum (sum of table contents), Sum (sum with boundaries), avg (of table contents), Avg (avg with boundaries), store (store into a table).

## Arguments

### expression[list] optional

The argument to the [expr](https://docs.cycling74.com/reference/expr) object is a mathematical expression composed of numbers, arithmetic operators such as [+](https://docs.cycling74.com/reference/plus) or [\*](https://docs.cycling74.com/reference/times), comparisons such as  <  or  > , C functions such as  min ()  or  pow () , names of [table](https://docs.cycling74.com/reference/table) objects, and changeable arguments ( $i ,  $f , and  $s ) for ints, floats, and symbols received in the inlets.

### constant[number] optional

Numbers can be used as constants in the mathematical expression.

### inlet-format[symbol] optional

Changeable arguments that specify data formats associated with an inlet are described using a combination of a data type ( $i  or  $f ) and an inlet number (example:  $i2 ). The argument will be replaced by numbers received in the specified inlet.

### table-info[$s] optional

Changeable arguments that specify accessing data from a table are described using the argument  $s  and an inlet number which is replaced by the name of a [table](https://docs.cycling74.com/reference/table) to be accessed. The argument should be immediately followed by a number in brackets specifying an address in the [table](https://docs.cycling74.com/reference/table). (Examples:  $s2[7]  or  $s3[$i1] .)

### (other)[symbol] optional

The [expr](https://docs.cycling74.com/reference/expr) object understands the following arithmetic operators:  + , - ,  \* ,  / , %. Other operators are  ~  (one's complement),  ^  (bitwise exclusive or),  & ,  && ,  | ,  || , and !  (not).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Evaluates the expression using the values currently stored.

### int

The number received in each inlet will be stored in place of the  $i  or  $f  argument associated with it. (Example: The number in the second inlet from the left will be stored in place of the  $i2  and  $f2  arguments, wherever they appear.)

Arguments:

- input
  [int]

### (inlet1)

See the  int  listing.

Arguments:

- input
  [int]

### (inlet2)

See the  int  listing.

Arguments:

- input
  [int]

### (inlet3)

See the  int  listing.

Arguments:

- input
  [int]

### (inlet4)

See the  int  listing.

Arguments:

- input
  [int]

### (inlet5)

See the  int  listing.

Arguments:

- input
  [int]

### (inlet6)

See the  int  listing.

Arguments:

- input
  [int]

### (inlet7)

See the  int  listing.

Arguments:

- input
  [int]

### (inlet8)

See the  int  listing.

Arguments:

- input
  [int]

### (inlet9)

See the  int  listing.

Arguments:

- input
  [int]

### float

The number in each inlet will be stored in place of the  $f  or  $i  argument associated with it. The number will be truncated by a  $i  argument.

Arguments:

- input
  [float]

### (inlet1)

See the  float  listing.

Arguments:

- input
  [float]

### (inlet2)

See the  float  listing.

Arguments:

- input
  [float]

### (inlet3)

See the  float  listing.

Arguments:

- input
  [float]

### (inlet4)

See the  float  listing.

Arguments:

- input
  [float]

### (inlet5)

See the  float  listing.

Arguments:

- input
  [float]

### (inlet6)

See the  float  listing.

Arguments:

- input
  [float]

### (inlet7)

See the  float  listing.

Arguments:

- input
  [float]

### (inlet8)

See the  float  listing.

Arguments:

- input
  [float]

### (inlet9)

See the  float  listing.

Arguments:

- input
  [float]

### set

If the word  set  precedes the items of a list received in the left inlet, the list of numbers are treated as if each had come in a different inlet, replacing the stored value with the new value. However, the expression is not evaluated and nothing is sent out the outlet. If there are fewer numbers in the message than there are inlets, the stored value in each remaining inlet stays unchanged.

Arguments:

- input
  [list]

### sm1

See the  symbol  listing.

Arguments:

- table
  [list]

### sm2

See the  symbol  listing.

Arguments:

- table
  [list]

### sm3

See the  symbol  listing.

Arguments:

- table
  [list]

### sm4

See the  symbol  listing.

Arguments:

- table
  [list]

### sm5

See the  symbol  listing.

Arguments:

- table
  [list]

### sm6

See the  symbol  listing.

Arguments:

- table
  [list]

### sm7

See the  symbol  listing.

Arguments:

- table
  [list]

### sm8

See the  symbol  listing.

Arguments:

- table
  [list]

### sm9

See the  symbol  listing.

Arguments:

- table
  [list]

### symbol

The word  symbol , followed by the name of a [table](https://docs.cycling74.com/reference/table), will be stored in place of the  $s  argument associated with that inlet, for accessing values stored in the [table](https://docs.cycling74.com/reference/table) object.

Arguments:

- table
  [list]

### list

The items of a list received in the left inlet are treated as if each had come in a different inlet, and the expression is evaluated. If the list contains fewer items than there are inlets, the most recently received value in each remaining inlet is used. Any of the above messages in the left inlet will evaluate the expression and send out the result. If a value has never been received for each changeable argument, that value is considered 0 when the expression is evaluated. The number of inlets is determined by how many changeable arguments are typed in. The maximum number of inlets is 9.

Arguments:

- input
  [list]

## Output

### float

The output is the result of the evaluated expression.

### int

The output is the result of the evaluated expression.

## See Also

| Name | Description |
| --- | --- |
| [if](https://docs.cycling74.com/reference/if) | Conditional statement in if/then/else form |
| [vexpr](https://docs.cycling74.com/reference/vexpr) | Evaluate a math expression for a list |
| [round](https://docs.cycling74.com/reference/round) | Round to a value |
