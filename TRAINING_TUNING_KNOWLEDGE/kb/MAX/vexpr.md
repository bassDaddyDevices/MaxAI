---
type: max
name: "vexpr"
summary: "Evaluate a math expression for a list"
signal: false
url: "https://docs.cycling74.com/reference/vexpr/"
package: "Max"
see_also: ["expr", "round"]
---
# vexpr

Evaluate a math expression for a list

## Description

Performs mathematical calculations using C language-style mathematical operations. Operates on inputs that are lists rather than collections of single values.

#### Discussion

Like its companion [expr](https://docs.cycling74.com/reference/expr) object, the [vexpr](https://docs.cycling74.com/reference/vexpr) object evaluates expressions that use the "variables" $i1-$i9 (the first to ninth inlets, taken as integers), $f1-$f9 (the inlets as floats) and $s1-$s9 (the inlets as symbols), and/or constants of the same types. The [vexpr](https://docs.cycling74.com/reference/vexpr) object also has a scalar mode of operation that lets you use the object's inlet value as a single-item list for evaluation with all items in an input list.

## Arguments

### expression[list] optional

The argument to the [vexpr](https://docs.cycling74.com/reference/vexpr) object is a mathematical expression composed of numbers, arithmetic operators such as [+](https://docs.cycling74.com/reference/plus) or [\*](https://docs.cycling74.com/reference/times), comparisons such as  <  or  > , C functions such as  min ()  or  pow () , names of [table](https://docs.cycling74.com/reference/table) objects, and changeable arguments ( $i ,  $f , and  $s ) for ints, floats, and symbols received in the inlets.

### constant[number] optional

Numbers can be used as constants in the mathematical expression.

### format[symbol] optional

Changeable arguments that specify data formats associated with an inlet are described using a combination of a data type ( $i  or  $f ) and an inlet number (example:  $i2 ). The argument will be replaced by numbers or symbols received in the specified inlet.

### table[symbol] optional

Changeable arguments that specify accessing data from a table are described using the argument  $s  and an inlet number which is replaced by the name of a [table](https://docs.cycling74.com/reference/table) to be accessed. The argument should be immediately followed by a number in brackets specifying an address in the [table](https://docs.cycling74.com/reference/table). (Examples:  $s2[7]  or  $s3[$i1] .)

### (other)[symbol] optional

The [vexpr](https://docs.cycling74.com/reference/vexpr) object understands the following arithmetic operators:  + , - ,  \* ,  / , %. Other operators are  ~  (one's complement),  ^  (bitwise exclusive or),  & ,  && ,  | ,  || , and !  (not).

Many C language math functions can be understood by [vexpr](https://docs.cycling74.com/reference/vexpr). A function must be followed immediately by parentheses containing any arguments necessary to the function. If the function requires a comma between arguments, the comma must be preceded by a backslash ( \ ) so that Max will not be confused by it. For example:  (pow ($i1\,2) + $f2) .

C language functions understood by [vexpr](https://docs.cycling74.com/reference/vexpr) are: abs, min, max, sin, cos, tan, asin, acos, atan, atan2, sinh, cosh, tanh, int (convert to integer), float (convert to float), pow, sqrt, fact (factorial), exp (power of e to x), log10 (log), ln or log (natural log), and random. Additional functions can be added by means of external code resources placed in Max's startup folder.

## Attributes

### maxsize[int]

Set the maximum list length for all modes of operation for the [vexpr](https://docs.cycling74.com/reference/vexpr) object. The default list length is 256, and the maximum list length limit is 32,767.

### scalarmode[int]

The word  scalarmode , followed by a non-zero number, sets the scalar mode of operation. In scalar mode, sending a list of length 1 (i.e., a single value) will cause that value to be applied to each element of the other list. The message  scalarmode 0  disables scalar mode.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Evaluates the expression and sends out the results, using the most recently received lists of numbers / symbols.

### int

An int or float received in any inlet is treated as a single-item  list .

Arguments:

- number
  [int]

### float

An int or float received in any inlet is treated as a single-item  list .

Arguments:

- number
  [float]

### list

The items of each list are used individually, in order from left to right, to replace the changeable argument in a series of evaluations of the expression. When a list is received in the left inlet, the expression is first evaluated using the first item of each list, then using the second item of each list, etc. The series of results of these evaluations is then sent out as a list.

Arguments:

- values
  [list]

### anything

The items of each list are used individually, in order from left to right, to replace the changeable argument in a series of evaluations of the expression. When a list is received in the left inlet, the expression is first evaluated using the first item of each list, then using the second item of each list, etc. The series of results of these evaluations is then sent out as a list.

Arguments:

- values
  [list]

## Output

### float

If the input in one of the inlets was a single number rather than a list, and the expression is evaluated as a float value, then a single result is sent out as a float rather than a list.

### int

If the input in one of the inlets was a single number rather than a list, and the expression is evaluated as an integer value, then a single result is sent out as an int rather than a list.

### list

When a list is received in the left inlet, [vexpr](https://docs.cycling74.com/reference/vexpr) uses the first item of the lists it has received in each of its different inlets, puts those items in place of the changeable arguments in the expression, and evaluates the expression. It then does the same with the second item in each list, and so on until it has used the last item of the shortest list. It then sends out all of the different results as a single list.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [round](https://docs.cycling74.com/reference/round) | Round to a value |
