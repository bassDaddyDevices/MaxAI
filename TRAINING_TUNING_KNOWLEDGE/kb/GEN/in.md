---
type: gen
name: "in"
summary: "Gen patcher input"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_in/"
package: "Gen"
see_also: ["out"]
---
# in

Gen patcher input

## Description

Defines an input for a gen patcher.

## Constructors

- { arguments={index, comment}, inlets={} }

- { arguments={index}, inlets={} }

- { arguments={}, inlets={} }

## Inlets

## Attributes

### comment[string]: write-only

Specify a comment/label for the input

### index[int]: 1 write-only

Inlet index number

### max[vector]: write-only

Specify maximum value for parameter. Incoming values out of range will be clamped

### min[vector]: write-only

Specify minimum value for parameter. Incoming values out of range will be clamped

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [out](https://docs.cycling74.com/reference/gen_common_out) | Send output from a gen patcher |
