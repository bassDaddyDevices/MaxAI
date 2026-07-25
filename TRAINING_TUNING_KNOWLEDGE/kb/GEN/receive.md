---
type: gen
name: "receive"
summary: "Receive values from a named send."
signal: false
url: "https://docs.cycling74.com/reference/gen_common_receive/"
package: "Gen"
see_also: ["send"]
---
# receive

Receive values from a named send.

## Description

Receive values from a named send. The send/receive pairs are only visible to each other within the same gen patcher. They will not send across gen patchers or sub-patchers.

## Constructors

- { arguments={name}, inlets={} }

## Inlets

## Attributes

### name[string]: write-only

Name to send to

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [send](https://docs.cycling74.com/reference/gen_common_send) | Send values to a named receive. |
