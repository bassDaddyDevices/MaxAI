---
type: max
name: "jstrigger"
summary: "Execute Javascript instructions sequentially"
signal: false
url: "https://docs.cycling74.com/reference/jstrigger/"
package: "Max"
see_also: ["bangbang", "js", "jsui"]
---
# jstrigger

Execute Javascript instructions sequentially

## Description

The [jstrigger](https://docs.cycling74.com/reference/jstrigger) object is similar to the [trigger](https://docs.cycling74.com/reference/trigger) object, except that typed-in arguments within parentheses are passed to the Javascript evaluator. For more information on the Max implementation of Javascript, refer to the Javascript in Max manual. For complete information about Javascript itself, consult a reference book such as Javascript: The Definitive Guide by David Flanagan, published by O'Reilly.

## Arguments

### sequential-Javascript-instructions[numbers, symbols, or expressions] optional

The arguments to the [jstrigger](https://docs.cycling74.com/reference/jstrigger) object may be either constants or expressions. Constants are numbers or symbols. For each constant, an outlet will be created, and the constant value will be sent out the corresponding outlet when the object receives a message in its left inlet. For example, [jstrigger](https://docs.cycling74.com/reference/jstrigger) with the arguments  ready set 74  would send  74  out the right outlet, followed by  set  out the middle outlet, followed by  ready  out the left outlet.

Expressions are Javascript expressions contained within parentheses. You can include more than one Javascript statement can be contained within the parentheses, but you must separate the statements by semicolons (;). A semicolon after the last statements is not required, and the word return is not required either. To return a list, you can either create an array object or place items in square brackets separated by commas. Javascript allows you to enter expressions between the commas. See the Examples section.

For each expression, an outlet will be created, and the value of the expression will be sent out the corresponding outlet when the [jstrigger](https://docs.cycling74.com/reference/jstrigger) object receives a message in its left inlet.

Note that any use of semicolons or commas in an object box require a preceding backslash (\) character, otherwise you will see the following error message in the Max Console and the object will not be created:

\* error: object box has comma or semicolon

In addition, it is strongly recommended to use single quotes (') rather than double quotes to define string literals. The use of double quotes can produce unexpected results in  **jstrigger**  when the object is saved and recreated in a patcher.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The most recently stored values for each argument are assigned to the a array. Then the expressions in the object are evaluated, right to left, and the value of each expression or constant is sent out the outlet corresponding to each expression.

### int

Contextual/User-specified according to Javascript arguments.

Arguments:

- input
  [int]

### float

Contextual/User-specified according to Javascript arguments.

Arguments:

- input
  [float]

### list

Contextual/User-specified according to Javascript arguments.

Arguments:

- input
  [list]

### anything

Contextual/User-specified according to Javascript arguments.

Arguments:

- input
  [list]

## Output

### anything

When the [jstrigger](https://docs.cycling74.com/reference/jstrigger) object receives a message in its inlet, the expressions are evaluated from right to left and their results are sent out the corresponding outlets from right to left.

## See Also

| Name | Description |
| --- | --- |
| [bangbang](https://docs.cycling74.com/reference/bangbang) | Output a bang from many outlets |
| [js](https://docs.cycling74.com/reference/js) | Execute Javascript (Legacy Engine) |
| [jsui](https://docs.cycling74.com/reference/jsui) | Javascript user interfaces and graphics (Legacy Engine) |
