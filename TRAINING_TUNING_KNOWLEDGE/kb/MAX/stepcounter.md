---
type: max
name: "stepcounter"
summary: "Count messages in a sequence"
signal: false
url: "https://docs.cycling74.com/reference/stepcounter/"
package: "Max"
see_also: ["metro", "counter", "stepcounter~"]
---
# stepcounter

Count messages in a sequence

## Description

The [stepcounter](https://docs.cycling74.com/reference/stepcounter) object uses messages to advance through a sequence of count values. The output producted by [stepcounter](https://docs.cycling74.com/reference/stepcounter) can be used to generate a sequence of durations from a [metro](https://docs.cycling74.com/reference/metro).

## Arguments

None.

## Attributes

### seq[atom]

A list of one or more integer values representing a sequence of counter values. For example  2 1 3  will count to 2, then 1, then 3. The current maximum sequence size is 1024.

### startmode[int]: 1

When startmode is set to 1, [stepcounter](https://docs.cycling74.com/reference/stepcounter) outputs  bang  out its left outlet when it receives a message in its inlet after starting or receiving the  reset  message. When startmode is 0, [stepcounter](https://docs.cycling74.com/reference/stepcounter) waits until the first count value has been reached before sending a  bang  out its left outlet.

### syncupdate[int]: 0

The syncupdate attribute determines how changes in the sequence (via changing the seq attribute).

Possible values:

0 = 'Off'
(
Sequence updates immediately
)
1 = 'After Step'
(
Sequence updates after the counter advances to the next step
)
2 = 'After Sequence'
(
Sequence updates after the current sequence completes
)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

When [stepcounter](https://docs.cycling74.com/reference/stepcounter) has a sequence of count values, any message will advance the current count. If the count for the current step is reached, a  bang  will be sent out the left outlet and the new count value will be the next step in the sequence.

### int

See the  bang  method

### float

See the  bang  method

### anything

See the  bang  method

### reset

The  reset  message will reset the current count and step values to zero.

## See Also

| Name | Description |
| --- | --- |
| [metro](https://docs.cycling74.com/reference/metro) | Output a bang message at regular intervals |
| [counter](https://docs.cycling74.com/reference/counter) | Keep count based on bang messages |
| [stepcounter~](https://docs.cycling74.com/reference/stepcounter~) | Count signal jumps in a sequence |
