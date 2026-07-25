---
type: max
name: "offer"
summary: "Store one-time number pairs"
signal: false
url: "https://docs.cycling74.com/reference/offer/"
package: "Max"
see_also: ["coll", "funbuff", "table"]
---
# offer

Store one-time number pairs

## Description

Store two ints as an x, y pair, and access them by x value. When a pair is retrieved, it is deleted from the collection.

#### Discussion

[offer](https://docs.cycling74.com/reference/offer) was designed for use with algorithms that transform the pitch of an incoming note stream. By storing the original and transformed note together (the transformed may be sent in the right inlet, immediately followed by the original, or they can be sent as a list) when the pitch of the note-on is changed, the transformed pitch can be retrieved when the note-off is received.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  will cause [offer](https://docs.cycling74.com/reference/offer) to output every y-value received since the last  clear  message was received (or since the last initialization).

### int

In left inlet: The number specifies the x value of an x,y pair. If a y value has been received in the right inlet, the two numbers are stored together in [offer](https://docs.cycling74.com/reference/offer); otherwise, [offer](https://docs.cycling74.com/reference/offer) looks for an x value that matches the incoming number, sends out the corresponding y value, then deletes the stored pair. If there is no x value stored in [offer](https://docs.cycling74.com/reference/offer) that matches the number received, [offer](https://docs.cycling74.com/reference/offer) does nothing.

Arguments:

- x
  [int]

### (inlet1)

In right inlet: The number specifies a y value to be stored in [offer](https://docs.cycling74.com/reference/offer). The next x value (int) received in the left inlet causes the two numbers to be stored together as an x,y pair.

Arguments:

- y-value
  [int]

### clear

In left inlet: Deletes the entire contents of [offer](https://docs.cycling74.com/reference/offer).

## Output

### int

If the number received in the left inlet matches the x value of an x,y pair stored in [offer](https://docs.cycling74.com/reference/offer), the corresponding y value is sent out and the stored pair is deleted.

## See Also

| Name | Description |
| --- | --- |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [funbuff](https://docs.cycling74.com/reference/funbuff) | Store pairs of numbers |
| [table](https://docs.cycling74.com/reference/table) | Store and edit an array of numbers |
