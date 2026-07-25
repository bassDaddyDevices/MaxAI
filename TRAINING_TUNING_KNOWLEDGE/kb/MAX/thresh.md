---
type: max
name: "thresh"
summary: "Combine numbers, symbols and lists when received close together"
signal: false
url: "https://docs.cycling74.com/reference/thresh/"
package: "Max"
see_also: ["bondo", "buddy", "iter", "join", "pack", "quickthresh", "zl"]
---
# thresh

Combine numbers, symbols and lists when received close together

## Description

Collects items into a list if they appear within a certain specifiable amount of time. Each time an item arrives, the time is reset.

## Arguments

### threshold[int] optional

Sets an initial value for the threshold time. If no argument is present, the initial value is 10 milliseconds.

### threshold-time[float] optional

Converted to  int .

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Numbers, symbols and lists are combined into a list if received within a certain time of each other. When the time between incoming values is greater than the specified threshold, the list is sent out the outlet, and a new list is started.

Arguments:

- input
  [int]

### float

In left inlet: Numbers, symbols and lists are combined into a list if received within a certain time of each other. When the time between incoming values is greater than the specified threshold, the list is sent out the outlet, and a new list is started.

In right inlet: The number is stored as the time, in milliseconds, to wait before sending out the compiled list of numbers. If no new number is received in the left inlet within that time, the list is sent out and a new list is started.

Arguments:

- input
  [float]

### list

In left inlet: The entire list is appended to the list stored in [thresh](https://docs.cycling74.com/reference/thresh).

Arguments:

- input
  [list]

### anything

Numbers, symbols and lists are combined into a list if received within a certain time of each other. When the time between incoming values is greater than the specified threshold, the list is sent out the outlet, and a new list is started.

Arguments:

- input
  [list]

### symbol

Numbers, symbols and lists are combined into a list if received within a certain time of each other. When the time between incoming values is greater than the specified threshold, the list is sent out the outlet, and a new list is started.

Arguments:

- input
  [symbol]

## Output

### list

Each number or lists received in the left inlet is appended to a list stored by [thresh](https://docs.cycling74.com/reference/thresh). If a certain time passes without a new number being received, [thresh](https://docs.cycling74.com/reference/thresh) sends out the list and starts a new list.

## See Also

| Name | Description |
| --- | --- |
| [bondo](https://docs.cycling74.com/reference/bondo) | Synchronize a group of messages |
| [buddy](https://docs.cycling74.com/reference/buddy) | Synchronize arriving data |
| [iter](https://docs.cycling74.com/reference/iter) | Break a list into individual messages |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [quickthresh](https://docs.cycling74.com/reference/quickthresh) | Fast chord detection |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
