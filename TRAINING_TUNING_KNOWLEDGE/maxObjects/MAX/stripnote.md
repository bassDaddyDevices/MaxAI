---
type: max
name: "stripnote"
summary: "Filter out note-off messages"
signal: false
url: "https://docs.cycling74.com/reference/stripnote/"
package: "Max"
see_also: ["makenote", "sustain"]
---
# stripnote

Filter out note-off messages

## Description

Only pass note-on messages: those having any velocity above 0.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The incoming number is treated as a pitch value. If the velocity value currently held by [stripnote](https://docs.cycling74.com/reference/stripnote) is not 0, then the velocity is sent out the right outlet and the pitch is sent out the left outlet.

Arguments:

- pitch
  [int]

### (inlet1)

In right inlet: The number is stored as a velocity to be paired with pitch numbers received in the left inlet.

Arguments:

- velocity
  [int]

### float

Converted to  int .

Arguments:

- pitch
  [float]

### (inlet1)

Converted to  int .

Arguments:

- velocity
  [float]

## Output

### int

Out left outlet: The pitch value received in the left inlet is sent out, provided the velocity is not 0.

Out right outlet: The velocity value of a note-on pair is sent out, provided it is not 0.

## See Also

| Name | Description |
| --- | --- |
| [makenote](https://docs.cycling74.com/reference/makenote) | Generate a note-on/note-off pair |
| [sustain](https://docs.cycling74.com/reference/sustain) | Hold note-off messages for release |
