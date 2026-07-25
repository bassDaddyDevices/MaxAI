---
type: max
name: "buddy"
summary: "Synchronize arriving data"
signal: false
url: "https://docs.cycling74.com/reference/buddy/"
package: "Max"
see_also: ["bondo", "onebang", "join", "pack", "swap", "thresh", "unjoin", "unpack"]
---
# buddy

Synchronize arriving data

## Description

Outputs incoming data after something has been received in all inlets.

## Arguments

### inlets[int] optional

Sets the number of inlets and outlets. If there is no argument, there are two inlets and two outlets.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In any inlet: Same as sending the number  0 .

### int

In any inlet: When data has been received in all its inlets, [buddy](https://docs.cycling74.com/reference/buddy) sends the received messages out their corresponding outlets, then waits until data has arrived again in all inlets.

Arguments:

- input
  [int]

### float

In any inlet: When data has been received in all its inlets, [buddy](https://docs.cycling74.com/reference/buddy) sends the received messages out their corresponding outlets, then waits until data has arrived again in all inlets.

Arguments:

- input
  [float]

### list

In any inlet: When data has been received in all its inlets, [buddy](https://docs.cycling74.com/reference/buddy) sends the received messages out their corresponding outlets, then waits until data has arrived again in all inlets.

Arguments:

- input
  [list]

### anything

In any inlet: When data has been received in all its inlets, [buddy](https://docs.cycling74.com/reference/buddy) sends the received messages out their corresponding outlets, then waits until data has arrived again in all inlets.

Arguments:

- input
  [list]

### clear

In left inlet: Deletes all values stored in the inlets.

## Output

### any message

When a data has arrived in each inlet, it is sent out the outlets, in order from right to left.

## See Also

| Name | Description |
| --- | --- |
| [bondo](https://docs.cycling74.com/reference/bondo) | Synchronize a group of messages |
| [onebang](https://docs.cycling74.com/reference/onebang) | Gate bangs using a bang |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [swap](https://docs.cycling74.com/reference/swap) | Swap position of two numbers |
| [thresh](https://docs.cycling74.com/reference/thresh) | Combine numbers, symbols and lists when received close together |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
