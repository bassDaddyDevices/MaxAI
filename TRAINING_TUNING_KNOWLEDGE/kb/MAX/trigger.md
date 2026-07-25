---
type: max
name: "trigger"
summary: "Send input to many places"
signal: false
url: "https://docs.cycling74.com/reference/trigger/"
package: "Max"
see_also: ["bangbang", "jstrigger", "message"]
---
# trigger

Send input to many places

## Description

Outputs any input received in order from right to left and formatted according to the object-argument specified.

#### Discussion

[trigger](https://docs.cycling74.com/reference/trigger) can also be instantiated with the simple name of "t".

## Arguments

### formats[symbol] optional

The number of arguments determines the number of outlets. Each outlet sends out either int, float,  bang , list, or symbol, as identified by symbol arguments (i, f, b, l, or s). If there are no arguments, there are two outlets, both of which send an int.

### constant[anything] optional

When an int, float, or symbol is specified, the value is output as a constant.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes either a  bang , an integer  0 , a float  0. , a list  0 , or an empty symbol to be sent out of each outlet.

### int

The number is sent out each outlet in the form designated by the typed-in arguments: either an int, a float, a list, a symbol (although empty), or a  bang .

Arguments:

- input
  [int]

### float

The number is sent out each outlet in the form designated by the typed-in arguments: either an int, a float, a list, a symbol (although empty), or a  bang .

Arguments:

- input
  [float]

### list

The list is sent out any outlet with the letter  l  assigned to it. Out other outlets, the list is converted and sent out as integer  0 , float  0. , the empty symbol "", or  bang .

Arguments:

- input
  [list]

### anything

Anything can be output according to the format specified (same as  list  but interpreted as a symbol).

Arguments:

- input
  [list]

## Output

### bang

Anything received in the inlet will be converted to  bang  before being sent out a  b  outlet.

### float

A number received in the inlet is sent out each outlet, in order from right to left. The number will be converted to int, float, list, symbol, or  bang  before being sent out, depending on the argument that corresponds to each outlet. A symbol, list, or  bang  received in the inlet will be converted to integer  0  by an  i  outlet, and to float  0.  by an  f  argument.

### int

A number received in the inlet is sent out each outlet, in order from right to left. The number will be converted to int, float, list, symbol, or  bang  before being sent out, depending on the argument that corresponds to each outlet. A symbol, list, or  bang  received in the inlet will be converted to integer  0  by an  i  outlet, and to float  0.  by an  f  argument.

### list

A list received in the inlet will be sent out unchanged by an  l  outlet. Anything else will be converted to the single-item list  0  before being sent out.

### symbol

A symbol received in the inlet will be sent out unchanged by an  s  outlet. Anything else will be converted to the null symbol "" before being sent out. Note: The only object that recognizes this null symbol is [print](https://docs.cycling74.com/reference/print), which valiantly prints the empty message in the Max Console. Other objects will either ignore this null symbol or print an error message in the Max Console.

## See Also

| Name | Description |
| --- | --- |
| [bangbang](https://docs.cycling74.com/reference/bangbang) | Output a bang from many outlets |
| [jstrigger](https://docs.cycling74.com/reference/jstrigger) | Execute Javascript instructions sequentially |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
