---
type: max
name: "pong"
summary: "Range limiting"
signal: false
url: "https://docs.cycling74.com/reference/pong/"
package: "Max"
see_also: ["clip", "pong~"]
---
# pong

Range limiting

## Description

Use the [pong](https://docs.cycling74.com/reference/pong) object to clip, fold, or wrap its input within the range of a low value and a high value.

## Arguments

### low-value[float] optional

Default low range boundary

### high-value[float] optional

Default high range boundary

## Attributes

### mode[symbol]: none

Behaviour of limiting when input exceeds range. Options are clip, wrap, and fold.

Possible values:

'none'

'clip'

'wrap'

'fold'

### range[2 floats]

The range within which to keep values. Values outside of this range will be subject to a limiting algorithm chosen by the mode attribute.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to  float .

Arguments:

- input
  [int]

### float

In left inlet: All incoming float values which exceed the high or low value ranges specified by arguments to the [pong](https://docs.cycling74.com/reference/pong) object are either folded back into this range, wrapped, or clipped according to the mode of the [pong](https://docs.cycling74.com/reference/pong) object.

In center inlet: Sets the low range boundary for the [pong](https://docs.cycling74.com/reference/pong) object.

In right inlet: Sets the high range boundary for the [pong](https://docs.cycling74.com/reference/pong) object.

Arguments:

- input
  [float]

### list

In left inlet: Lists of numbers are processed together as per the  float  entry.

Arguments:

- input
  [float]

## See Also

| Name | Description |
| --- | --- |
| [clip](https://docs.cycling74.com/reference/clip) | Limit numbers to a range |
| [pong~](https://docs.cycling74.com/reference/pong~) | Variable range signal folding |
