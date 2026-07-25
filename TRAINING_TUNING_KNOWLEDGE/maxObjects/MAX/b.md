---
type: max
name: "b"
summary: "Output a bang from many outlets"
signal: false
url: "https://docs.cycling74.com/reference/b/"
package: "Max"
see_also: ["button", "jstrigger", "trigger"]
---
# b

Output a bang from many outlets

## Description

Outputs  bang  messages out of each outlet (in right-to-left order) when it receives any input. The number of outlets is determined by an argument.

## Arguments

### outlets[number] optional

Sets the number of outlets. The number of outlets can be any number between 1 and 40. Floats are converted to ints.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes a  bang  to be sent out all outlets in right-to-left order.

### int

Causes a  bang  to be sent out all outlets in right-to-left order.

Arguments:

- input
  [int]

### float

Causes a  bang  to be sent out all outlets in right-to-left order.

Arguments:

- input
  [float]

### anything

Causes a  bang  to be sent out all outlets in right-to-left order.

Arguments:

- input
  [list]

## Output

### bang

When a message is received in the inlet, a  bang  is sent out all outlets in right-to-left order.

## See Also

| Name | Description |
| --- | --- |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [jstrigger](https://docs.cycling74.com/reference/jstrigger) | Execute Javascript instructions sequentially |
| [trigger](https://docs.cycling74.com/reference/trigger) | Send input to many places |
