---
type: max
name: "mousefilter"
summary: "Gate messages with the mouse"
signal: false
url: "https://docs.cycling74.com/reference/mousefilter/"
package: "Max"
see_also: ["mousestate"]
---
# mousefilter

Gate messages with the mouse

## Description

Allows messages to pass only when the mouse button is up (un-clicked).

#### Discussion

This object is useful when the slider's output initiates a time-consuming process which would otherwise destroy the "feel" of the user interface.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

If the mouse button is up, the  bang  is sent out the outlet. Otherwise, the  bang  is ignored.

### int

If the mouse button is up, the number is sent out the outlet. Otherwise, the number is ignored.

Arguments:

- input
  [int]

### float

If the mouse button is up, the number is sent out the outlet. Otherwise, the number is ignored.

Arguments:

- input
  [float]

### list

If the mouse button is up, the list is sent out the outlet. Otherwise, the list is ignored.

Arguments:

- input
  [list]

### anything

Performs the same as  list .

Arguments:

- input
  [list]

## Output

### int

The number received in the inlet is sent out only if the mouse button is up.

## See Also

| Name | Description |
| --- | --- |
| [mousestate](https://docs.cycling74.com/reference/mousestate) | Report the mouse information |
