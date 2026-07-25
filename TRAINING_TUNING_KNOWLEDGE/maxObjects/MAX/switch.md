---
type: max
name: "switch"
summary: "Accept messages from a specific inlet"
signal: false
url: "https://docs.cycling74.com/reference/switch/"
package: "Max"
see_also: ["crosspatch", "forward", "funnel", "gate", "ggate", "gswitch", "receive", "router", "send"]
---
# switch

Accept messages from a specific inlet

## Arguments

### inlets[int] optional

Specifies the number of inlets, in addition to the leftmost inlet. If there is no argument, there are two additional inlets.

### initial[int] optional

An optional second argument can be used to specify which inlet is initially open. The default is 0 (i.e., none).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out the number of the open inlet, or  0  if all inlets are closed.

### int

In left inlet: The number specifies an open inlet for receiving subsequent messages to be sent out the outlet. All inlets other than the designated open one are closed. If the number is 0, all inlets are closed.

Arguments:

- inlet
  [int]

### float

In left inlet: Converted to  int .

Arguments:

- inlet
  [float]

### next

Sending the  next  message to the left inlet will close the current inlet and open the next one, wrapping accross all inlets. If currently closed (set to 0) or set to the rightmost inlet, inlet 1 will be opened.

## Output

### anything

If the number in the left inlet is less than 0, its absolute value is used to determine which inlet to open. (-1  opens inlet 1, -2  opens inlet 2, etc.) If the absolute value of the number is greater than the number of existing inlets, messages are received in the rightmost inlet.

## See Also

| Name | Description |
| --- | --- |
| [crosspatch](https://docs.cycling74.com/reference/crosspatch) | Patching Editor for Matrix Objects |
| [forward](https://docs.cycling74.com/reference/forward) | Send messages to specified receive objects |
| [funnel](https://docs.cycling74.com/reference/funnel) | Tag data with its inlet number |
| [gate](https://docs.cycling74.com/reference/gate) | Pass input to an outlet |
| [ggate](https://docs.cycling74.com/reference/gswitch2) | Send input to one of two outlets |
| [gswitch](https://docs.cycling74.com/reference/gswitch) | Select output from two inlets |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [router](https://docs.cycling74.com/reference/router) | Route messages to multiple locations |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
