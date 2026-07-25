---
type: max
name: "bag"
summary: "Store a collection of numbers"
signal: false
url: "https://docs.cycling74.com/reference/bag/"
package: "Max"
see_also: ["coll", "funbuff", "offer"]
---
# bag

Store a collection of numbers

## Description

Stores and manages a collection of numbers. You can add to or delete an integer from a [bag](https://docs.cycling74.com/reference/bag) as well as report its contents. [bag](https://docs.cycling74.com/reference/bag) with any argument maintains multiple entries with the same item; otherwise it holds only one of each.

## Arguments

### duplicate-flag[symbol] optional

The presence of any symbol argument causes the [bag](https://docs.cycling74.com/reference/bag) to store duplicate values. If there is no argument, [bag](https://docs.cycling74.com/reference/bag) will store only one of each number at a time.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Causes [bag](https://docs.cycling74.com/reference/bag) to send all its collected numbers out the outlet.

### int

In left inlet: The number is either added to or deleted from the collection of numbers stored in the [bag](https://docs.cycling74.com/reference/bag) object, depending on the number in the right inlet.

In right inlet: The number is stored as an indicator of whether to include or delete the next number received in the left inlet. If non-zero, the number received in the left inlet is added to the [bag](https://docs.cycling74.com/reference/bag). If 0, the number is deleted from the collection.

No output is triggered by a number received in either inlet.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored as an indicator of whether to include or delete the next number received in the left inlet. If non-zero, the number received in the left inlet is added to the [bag](https://docs.cycling74.com/reference/bag). If 0, the number is deleted from the [bag](https://docs.cycling74.com/reference/bag).

No output is triggered by a number received in either inlet.

Arguments:

- function
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### clear

In left inlet: Deletes the entire contents of the [bag](https://docs.cycling74.com/reference/bag).

### cut

In left inlet: Sends out the oldest (earliest received) number stored in the [bag](https://docs.cycling74.com/reference/bag) object, and deletes it from the [bag](https://docs.cycling74.com/reference/bag).

### length

In left inlet: Reports how many numbers are currently stored in the [bag](https://docs.cycling74.com/reference/bag).

### send

In left inlet: The word  send , followed by the name of a [receive](https://docs.cycling74.com/reference/receive) object, sends the result of a  bang  message to all [receive](https://docs.cycling74.com/reference/receive) objects with that name, instead of out the [bag](https://docs.cycling74.com/reference/bag) object's outlet.

Arguments:

- receive-name
  [list]

### list

Any list composed of two numbers behaves as though the first list item was sent to the left inlet and the second list item was sent to the right inlet. If the second element of the list is a non-zero number, the number is added to the collection.

Arguments:

- input
  [int]
- function
  [int]

## Output

### int

When  bang  is received in the left inlet, all the numbers stored in [bag](https://docs.cycling74.com/reference/bag) are sent out one at a time, in reverse order from that in which they were stored.

When  cut  is received in the left inlet, the oldest stored number is sent out.

When  length  is received in the left inlet, the number of items in the [bag](https://docs.cycling74.com/reference/bag) object is sent out.

## See Also

| Name | Description |
| --- | --- |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [funbuff](https://docs.cycling74.com/reference/funbuff) | Store pairs of numbers |
| [offer](https://docs.cycling74.com/reference/offer) | Store one-time number pairs |
