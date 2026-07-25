---
type: max
name: "router"
summary: "Route messages to multiple locations"
signal: false
url: "https://docs.cycling74.com/reference/router/"
package: "Max"
see_also: ["matrixctrl", "matrix"]
---
# router

Route messages to multiple locations

## Arguments

### inlets[int] optional

Sets the number of inlets

### outlets[int] optional

Sets the number of outlets

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  received in any but the leftmost inlet will be sent to all outlets that are connected to that inlet.

### int

An integer received in any but the leftmost inlet will be sent to all outlets that are connected to that inlet.

Arguments:

- input
  [int]

### float

floating-point number received in any but the leftmost inlet will be sent to all outlets that are connected to that inlet.

Arguments:

- input
  [float]

### list

A list of three numbers received in the left inlet is interpreted as specifying an inlet number, an outlet number, and a 0 or 1 specifying the state of a connection. A list in this form changes the inlet and outlet connections of the [router](https://docs.cycling74.com/reference/router) object.

A list received in any other inlet will be sent to all outlets that are connected to that inlet.

Arguments:

- inlet
  [int]
- outlet
  [int]
- state
  [int]

### anything

Any Max message received in any but the leftmost inlet will be sent to all outlets that are connected to that inlet.

Arguments:

- input
  [list]

### clear

Clears the state of the switching matrix, All inlets are disconnected from all outlets.

Arguments:

- arguments
  [list]

### connect

The word  connect , followed by two numbers that specify inlet and outlet numbers, connects an inlet to an outlet. Multiple inlets can be connected to multiple outlets, and vice versa.

Arguments:

- inlet
  [int]
- outlet
  [int]

### disconnect

The word  disconnect , followed by two numbers that specify inlet and outlet numbers, disconnects an inlet from an outlet.

Arguments:

- inlet
  [int]
- outlet
  [int]

### dump

Sends the state of the object's switching matrix out the right outlet as a series of single line lists in the form  inlet-number outlet-number state .

Arguments:

- arguments
  [list]

### patch

The word  patch , followed by two numbers that specify inlet and outlet numbers, connects an inlet to an outlet and disconnects all other inlets that are currently connected to that outlet

Arguments:

- inlet
  [int]
- outlet
  [int]

### print

Prints the state of the switching matrix in the Max Console.

Arguments:

- arguments
  [list]

## Output

### anything

Any message received in any but the leftmost inlet will be routed to the outlet to which the inlet is currently connected. The router objects passes messages only; it will not pass signals or Jitter matrices.

### list

Out right outlet: a series of single-line lists (one for each inlet) in the form  inlet-number outlet-number state  is sent out the right outlet of the router object in response to a  dump  message.

## See Also

| Name | Description |
| --- | --- |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [matrix](https://docs.cycling74.com/reference/matrix) | Event routing matrix |
