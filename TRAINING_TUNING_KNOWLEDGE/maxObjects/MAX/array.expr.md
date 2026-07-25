---
type: max
name: "array.expr"
summary: "Evaluate a math expression for an array"
signal: false
url: "https://docs.cycling74.com/reference/array.expr/"
package: "Max"
see_also: ["array", "array.fill", "expr", "vexpr"]
---
# array.expr

Evaluate a math expression for an array

## Description

Performs mathematical calculations using C language-style mathematical operations. Operates on inputs that are arrays rather than collections of single values.

## Arguments

### expression[list] optional

The argument to the [vexpr](https://docs.cycling74.com/reference/vexpr) object is a mathematical expression composed of numbers, arithmetic operators such as [+](https://docs.cycling74.com/reference/plus) or [\*](https://docs.cycling74.com/reference/times), comparisons such as  <  or  > , C functions such as  min ()  or  pow () , names of [table](https://docs.cycling74.com/reference/table) objects, and changeable arguments ( $i ,  $f , and  $s ) for ints, floats, and symbols received in the inlets.

### constant[number] optional

Numbers can be used as constants in the mathematical expression.

### format[symbol] optional

Changeable arguments that specify data formats associated with an inlet are described using a combination of a data type ( $i  or  $f ) and an inlet number (example:  $i2 ). The argument will be replaced by numbers received in the specified inlet.

### table[symbol] optional

Changeable arguments that specify accessing data from a table are described using the argument  $s  and an inlet number which is replaced by the name of a [table](https://docs.cycling74.com/reference/table) to be accessed. The argument should be immediately followed by a number in brackets specifying an address in the [table](https://docs.cycling74.com/reference/table). (Examples:  $s2[7]  or  $s3[$i1] .)

### (other)[symbol] optional

The [vexpr](https://docs.cycling74.com/reference/vexpr) object understands the following arithmetic operators:  + , - ,  \* ,  / , %. Other operators are  ~  (one's complement),  ^  (bitwise exclusive or),  & ,  && ,  | ,  || , and !  (not).

Many C language math functions can be understood by [vexpr](https://docs.cycling74.com/reference/vexpr). A function must be followed immediately by parentheses containing any arguments necessary to the function. If the function requires a comma between arguments, the comma must be preceded by a backslash ( \ ) so that Max will not be confused by it. For example:  (pow ($i1\,2) + $f2) .

C language functions understood by [vexpr](https://docs.cycling74.com/reference/vexpr) are: abs, min, max, sin, cos, tan, asin, acos, atan, atan2, sinh, cosh, tanh, int (convert to integer), float (convert to float), pow, sqrt, fact (factorial), exp (power of e to x), log10 (log), ln or log (natural log), and random. Additional functions can be added by means of external code resources placed in Max's startup folder.

The [array.expr](https://docs.cycling74.com/reference/array.expr) also understands the special function  arrayidx()  (no arguments) which provides an int representing the current array index being processed.

## Attributes

### fillmode[int]: 0

The fillmode determines how to resize arrays which don't match the length of the array sent into the left inlet. Several options are available.

Possible values:

0 = 'Repeat'
(
Repeat elements
)
All elements of the array will be repeated to reach the required length. If the incoming left-inlet array has a length of 3, the array  [ 2 ]  would become  [ 2, 2, 2 ] ;  [ 2 1 ]  would become  [ 2 1 2 ] .

1 = 'Repeat Last'
(
Repeat the last element
)
The last element of the array will be repeated to reach the required length. If the incoming left-inlet array has a length of 3, the array  [ 2 ]  would become  [ 2, 2, 2 ] ;  [ 2, 1 ]  would become  [ 2, 1, 1 ] .

2 = 'Repeat Zero'
(
Repeat zero
)
The integer  0  will be repeated to reach the required length. If the incoming left-inlet array has a length of 3, the array  [ 2 ]  would become  [ 2, 0, 0 ] ;  [ 2, 1 ]  would become  [ 2, 1, 0 ] .

3 = 'Interpolate (Linear)'
(
Linear-interpolate
)
Linear interpolation will be performed on the array to reach the required length. If the incoming left-inlet array has a length of 3, the array  [ 1, 3 ]  would become  [ 1, 2, 3 ] ;  [ 5, 1 ]  would become  [ 5, 3, 1 ] . If all elements are  ints , the interpolation will be performed using integers; if any element is a  float , the interpolation will return floating-point numbers.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received arrays and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

Arguments:

- value
  [int]

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

Arguments:

- value
  [float]

### list

Convert an incoming list to an array, then process as described for the  array  message.

Arguments:

- list-value
  [list]

### anything

Convert an incoming list to an array, then process as described for the  array  message.

Arguments:

- list-value
  [list]

### array

The elements of each array are used individually, in order from left to right, to replace the changeable argument in a series of evaluations of the expression. When an array is received in the left inlet, the expression is first evaluated using the first element of each array, then using the second element of each array, etc. The series of results of these evaluations is then sent out as a array.

If the arrays are not of the same length, the fillmode will be used to determine how to handle the length discrepancy.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

Arguments:

- dictionary-value
  [list]

### string

Wrap a string object in an array, then process as described for the  array  message.

Arguments:

- string-value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.fill](https://docs.cycling74.com/reference/array.fill) | Generate an array of a specified length |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [vexpr](https://docs.cycling74.com/reference/vexpr) | Evaluate a math expression for a list |
