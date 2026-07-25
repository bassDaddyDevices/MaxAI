---
type: max
name: "substitute"
summary: "Substitute symbols within a message"
signal: false
url: "https://docs.cycling74.com/reference/substitute/"
package: "Max"
see_also: ["route", "sprintf", "zl"]
---
# substitute

Substitute symbols within a message

## Description

Matches messages to its own arguments; whenever it finds a match, will make the appropriate substitution.

## Arguments

### match[anything] optional

The first number or symbol specifies the match, which identifies what should be replaced in an incoming message. The default match value is 0.

### replacement[anything] optional

The second number or symbol specifies the replacement for the match. The default replacement value is 0.

### mode[anything] optional

Any third number or symbol sets the "replace first message only" mode of the [substitute](https://docs.cycling74.com/reference/substitute) object. Only the first instance of the specified match will be replaced.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Same as  anything .

### int

Same as  anything .

Arguments:

- input
  [int]

### float

Same as  anything .

Arguments:

- input
  [float]

### list

Same as  anything .

Arguments:

- input
  [list]

### anything

In left inlet: The input is echoed to the output, but if the message received contains an element matching the match symbol or number, the element is replaced by the replacement symbol or number when the message is repeated to the output.

In right inlet: The [substitute](https://docs.cycling74.com/reference/substitute) object accepts a message of two numbers or symbols in its right inlet. The first number or symbol specifies the match, which identifies what should be replaced in an incoming message.

Arguments:

- input
  [list]

### set

In left inlet: Same as  anything .
In right inlet: Same as  anything , except that the word set is ignored.

Arguments:

- input
  [list]

## Output

### anything

Out left outlet: The input message is echoed to the output with elements matching the match symbol or number replaced by the replacement number or symbol.

### bang

Out right outlet: If no substitution occurred when sending out the incoming message, the original input message is passed out the rightmost outlet.

## See Also

| Name | Description |
| --- | --- |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
