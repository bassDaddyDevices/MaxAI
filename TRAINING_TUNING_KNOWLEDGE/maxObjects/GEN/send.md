---
type: gen
name: "send"
summary: "Send values to a named receive."
signal: false
url: "https://docs.cycling74.com/reference/gen_common_send/"
package: "Gen"
see_also: ["receive"]
---
# send

Send values to a named receive.

## Description

Send values to a named receive. The send/receive pairs are only visible to each other within the same gen patcher. They will not send across gen patchers or sub-patchers.

## Constructors

- { arguments={name}, inlets={value} }

## Inlets

### value[float]

value to send

## Attributes

### name[string]: write-only

Name to receive from

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [receive](https://docs.cycling74.com/reference/gen_common_receive) | Receive values from a named send. |
