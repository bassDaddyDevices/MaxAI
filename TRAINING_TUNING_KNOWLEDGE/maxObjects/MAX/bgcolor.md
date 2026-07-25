---
type: max
name: "bgcolor"
summary: "Set background color"
signal: false
url: "https://docs.cycling74.com/reference/bgcolor/"
package: "Max"
see_also: ["Dynamic Colors", "thispatcher"]
---
# bgcolor

Set background color

## Description

Set the background color of the patcher window. The [bgcolor](https://docs.cycling74.com/reference/bgcolor) object's functionality is equivalent to a  brgb  message sent to [thispatcher](https://docs.cycling74.com/reference/thispatcher).

## Arguments

### red[int] optional

A number in the range 0-255 sets the red value for the background color of the patcher.

### green[int] optional

A number in the range 0-255 sets the green value for the background color of the patcher.

### blue[int] optional

A number in the range 0-255 sets the blue value for the background color of the patcher.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  will reset the patcher's background to the RGB values most currently received by [bgcolor](https://docs.cycling74.com/reference/bgcolor).

### int

A number in the range 0-255 sets the red value of the patcher background color.

Arguments:

- red
  [int]

### (inlet1)

A number in the range 0-255 sets the green value of the patcher background color.

Arguments:

- green
  [int]

### (inlet2)

A number in the range 0-255 sets the blue value of the patcher background color.

Arguments:

- blue
  [int]

### list

A list of three numbers in the range 0-255 sets the background color of the patcher in RGB format.

Arguments:

- red
  [int]
- green
  [int]
- blue
  [int]

### set

The word  set  followed by a list of three numbers in the range 0-255 sets the background color of the patcher in RGB format.

Arguments:

- red
  [int]
- green
  [int]
- blue
  [int]

## Output

### (Visual)

The background color of the patcher is set.

## See Also

| Name | Description |
| --- | --- |
| [Dynamic Colors](https://docs.cycling74.com/userguide/dynamic_colors) | Dynamic Colors |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
