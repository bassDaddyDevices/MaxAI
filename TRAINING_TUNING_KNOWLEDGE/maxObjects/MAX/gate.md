---
type: max
name: "gate"
summary: "Pass input to an outlet"
signal: false
url: "https://docs.cycling74.com/reference/gate/"
package: "Max"
see_also: ["ggate", "crosspatch", "gswitch", "route", "router", "send", "switch"]
---
# gate

Pass input to an outlet

## Arguments

### outlets[int] optional

Specifies the number of outlets. If there is no argument, there is only one outlet.

### initial-state[int] optional

Specifies which outlet is initially open. The default is 0 (none).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reports the current open outlet (0 if closed) out the left outlet.

### int

The number specifies an open outlet through which to pass all messages received in the right inlet. A number in the left inlet does not trigger any output.

Arguments:

- outlet-number
  [int]

### float

Converted to  int .

Arguments:

- outlet-number
  [float]

### next

Sending the  next  message to the left inlet will close the current outlet and open the next one, wrapping accross all outlets. If currently closed (set to 0) or set to the rightmost outlet, outlet 1 will be opened.

## Output

### anything

Messages received in the right inlet are passed out the outlet specified by the number in the left inlet. If the number in the left inlet is  0 , or if no outlet number has been received yet, all messages are ignored. If the number in the left inlet is less than 0, messages are sent out the leftmost outlet. If it is greater than the number of existing outlets, messages are sent out the rightmost outlet.

## See Also

| Name | Description |
| --- | --- |
| [ggate](https://docs.cycling74.com/reference/gswitch2) | Send input to one of two outlets |
| [crosspatch](https://docs.cycling74.com/reference/crosspatch) | Patching Editor for Matrix Objects |
| [gswitch](https://docs.cycling74.com/reference/gswitch) | Select output from two inlets |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [router](https://docs.cycling74.com/reference/router) | Route messages to multiple locations |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [switch](https://docs.cycling74.com/reference/switch) | Accept messages from a specific inlet |
