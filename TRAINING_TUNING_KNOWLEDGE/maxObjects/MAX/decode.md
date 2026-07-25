---
type: max
name: "decode"
summary: "Send 1 or 0 out a specific outlet"
signal: false
url: "https://docs.cycling74.com/reference/decode/"
package: "Max"
see_also: ["bucket", "gate", "toggle"]
---
# decode

Send 1 or 0 out a specific outlet

## Description

Provides hierarchical switching. The right inlet turns all outlets off, switch, while the middle inlet turns all outlets on. The right inlet overrides the middle inlet, and the middle inlet overrides numnbers sent to the left inlet that turn individual outlets on or off.

## Arguments

### outlets[int] optional

Sets the number of outlets. The default is one outlet.

### outlets[float] optional

Converted to  int .

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The message  bang  causes [decode](https://docs.cycling74.com/reference/decode) to output its current state.

### int

In left inlet: An index (starting with 0 for the left outlet) that specifies an outlet out to turn on, turning off all other outlets.

Arguments:

- outlet
  [int]

### (inlet1)

In middle inlet: If a 1 was last received in the right inlet, any number received in the middle outlet will send a 0 out all outlets. Otherwise, a number greater than 0 received in the middle inlet sends a 1 out all outlets. If 0 is received in the middle inlet, decode sends a 1 out the last outlet decoded by a number received in the left inlet, and 0 out all other outlets.

Arguments:

- secondary
  [int]

### (inlet2)

In right inlet: Any positive number other than 0 sends a 0 out all outlets. When [decode](https://docs.cycling74.com/reference/decode) receives a 0 in its right inlet, it outputs 0 or 1 out its outlets based on the values last received in the middle and left inlets.

Arguments:

- primary
  [int]

## Output

### int

When an outlet is enabled, a  1  is sent out that outlet. When an outlet is disabled, a  0  is sent out that outlet. The left outlet is initially enabled.

## See Also

| Name | Description |
| --- | --- |
| [bucket](https://docs.cycling74.com/reference/bucket) | Pass numbers from outlet to outlet |
| [gate](https://docs.cycling74.com/reference/gate) | Pass input to an outlet |
| [toggle](https://docs.cycling74.com/reference/toggle) | Switch between off and on (0 and 1) |
