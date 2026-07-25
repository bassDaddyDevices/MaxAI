---
type: max
name: "bondo"
summary: "Synchronize a group of messages"
signal: false
url: "https://docs.cycling74.com/reference/bondo/"
package: "Max"
see_also: ["buddy", "join", "onebang", "pack", "thresh"]
---
# bondo

Synchronize a group of messages

## Description

Synchronizes and outputs a set of inputs when any input is received. It can also be set with a time interval value (in milliseconds) to wait before sending its output.

## Arguments

### inlets-outlets[int] optional

Specifies the number of inlets and outlets. The default number of inlets and outlets is 2.

### delay[int]ms optional

Specifies the number of milliseconds to delay when a message is received before sending messages out the outlets.

### list-flag[symbol] optional

Using the symbol "n" as an argument, [bondo](https://docs.cycling74.com/reference/bondo) is able to synchronize lists which arrive in different inlets.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Send all stored messages

### int

In any inlet: The input is stored in the location corresponding to that inlet, and causes anything previously stored to be sent out its corresponding outlet. If no message has yet been received in a particular inlet, 0 is sent out of the corresponding outlet.

Arguments:

- input
  [int]

### float

In any inlet: The input is stored in the location corresponding to that inlet, and causes anything previously stored to be sent out its corresponding outlet. If no message has yet been received in a particular inlet, 0 is sent out of the corresponding outlet.

Arguments:

- input
  [float]

### list

In any inlet: The elements of the list are parsed among the inlets. The first element in the list is sent out the outlet which corresponds to the inlet which received the list and each subsequent element in the list is sent out each subsequent outlet.

If the "n" argument was used, [bondo](https://docs.cycling74.com/reference/bondo) will store and output lists for each outlet in addition to single numbers.

Arguments:

- input
  [list]

### anything

In any inlet: The input is stored in the location corresponding to that inlet, and causes anything previously stored to be sent out its corresponding outlet. If no message has yet been received in a particular inlet, 0 is sent out of the corresponding outlet.

Arguments:

- input
  [list]

### set

In any inlet: The word  set , followed by any message, stores the input in the location corresponding to that inlet without triggering any output.

Arguments:

- input
  [list]

## Output

### any message

Anything stored in an inlet is sent out the corresponding outlet numbers. Output is immediate if triggered by a  bang . If output is triggered by a message, and a second argument has been typed in, output will be delayed by the number of milliseconds specified in the second argument.

## See Also

| Name | Description |
| --- | --- |
| [buddy](https://docs.cycling74.com/reference/buddy) | Synchronize arriving data |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [onebang](https://docs.cycling74.com/reference/onebang) | Gate bangs using a bang |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [thresh](https://docs.cycling74.com/reference/thresh) | Combine numbers, symbols and lists when received close together |
