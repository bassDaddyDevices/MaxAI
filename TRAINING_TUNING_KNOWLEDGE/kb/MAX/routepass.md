---
type: max
name: "routepass"
summary: "Route a complete incoming message based on input matching"
signal: false
url: "https://docs.cycling74.com/reference/routepass/"
package: "Max"
see_also: ["bucket", "forward", "gate", "join", "pack", "receive", "select", "send", "sprintf", "route", "zl"]
---
# routepass

Route a complete incoming message based on input matching

## Description

Tries to match a message's first argument to the [route](https://docs.cycling74.com/reference/route) object's own arguments. Unlike the [route](https://docs.cycling74.com/reference/route) object, [routepass](https://docs.cycling74.com/reference/routepass) does not strip off the matched portion of the message. The rightmost outlet passes any message that matched no other choice, so you may gang [route](https://docs.cycling74.com/reference/route) objects to get more choices

## Arguments

### selectors[anything] optional

Arguments can be a mix of ints, floats, or symbols. The number of arguments determines the number of outlets, in addition to the rightmost outlet. Each argument assigns a name or a number to an outlet. If there is no argument, there is one other outlet, which is assigned the number  0 .

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sending a bang to the object will send a bang out any outlet that uses 'bang' as its argument. If bangs are not specified as arguments, a bant will be passed out the rightmost outlet.

### int

If the first integer value in the message is the same as one of the arguments of [routepass](https://docs.cycling74.com/reference/routepass), the entire message is sent out the outlet that corresponds to that argument. If the first integer value does not match any of the arguments, the entire message is passed out the rightmost outlet.

Arguments:

- input
  [int]

### float

If the first floating-point value in the message is the same as one of the arguments of [routepass](https://docs.cycling74.com/reference/routepass), the entire message is sent out the outlet that corresponds to that argument. If the first floating-point value does not match any of the arguments, the entire message is passed out the rightmost outlet.

Arguments:

- input
  [float]

### list

If the first item of the message is the same as one of the arguments of [routepass](https://docs.cycling74.com/reference/routepass), the entire message is sent out the outlet that corresponds to that argument. If the first item does not match any of the arguments, the entire message is passed out the rightmost outlet.

Arguments:

- input
  [list]

### anything

If the first item of the message is the same as one of the arguments of [routepass](https://docs.cycling74.com/reference/routepass), the entire message is sent out the outlet that corresponds to that argument. If the first item does not match any of the arguments, the entire message is passed out the rightmost outlet.

Arguments:

- input
  [list]

## Output

### anything

The first item of any message received in the inlet is compared with the arguments. If it matches one of the arguments, the full message is sent out the specified outlet. Otherwise, the message is passed out the rightmost outlet.

### bang

If the first item of a message matches one of the arguments, but the message has no additional items,  bang  is sent out the specified outlet.

## See Also

| Name | Description |
| --- | --- |
| [bucket](https://docs.cycling74.com/reference/bucket) | Pass numbers from outlet to outlet |
| [forward](https://docs.cycling74.com/reference/forward) | Send messages to specified receive objects |
| [gate](https://docs.cycling74.com/reference/gate) | Pass input to an outlet |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [select](https://docs.cycling74.com/reference/select) | Output bangs based on input matching |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
