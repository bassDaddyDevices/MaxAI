---
type: max
name: "iter"
summary: "Break a list into individual messages"
signal: false
url: "https://docs.cycling74.com/reference/iter/"
package: "Max"
see_also: ["cycle", "thresh", "unjoin", "unpack", "zl"]
---
# iter

Break a list into individual messages

## Description

Unpacks and outputs list contents one element at a time.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the number or list most recently received, in sequential order.

### int

The number is sent out the outlet.

Arguments:

- input
  [int]

### float

The number is sent out the outlet.

Arguments:

- input
  [float]

### list

The numbers in the list are sent out the outlet in sequential order.

Arguments:

- input
  [list]

### anything

See the  list  entry.

Arguments:

- input
  [list]

## Output

### int

The numbers received in the inlet are sent out one at a time.

## See Also

| Name | Description |
| --- | --- |
| [cycle](https://docs.cycling74.com/reference/cycle) | Round-robin messages to outlets |
| [thresh](https://docs.cycling74.com/reference/thresh) | Combine numbers, symbols and lists when received close together |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
