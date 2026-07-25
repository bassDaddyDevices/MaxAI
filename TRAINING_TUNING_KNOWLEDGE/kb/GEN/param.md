---
type: gen
name: "param"
summary: "An externally modifiable, named parameter"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_param/"
package: "Gen"
see_also: ["setparam"]
---
# param

An externally modifiable, named parameter

## Description

Named parameters can be modified from outside the gen patcher. The first argument specifies the name of the parameter, the second argument the initial value.

## Constructors

- { arguments={name, default}, inlets={} }

- { arguments={name}, inlets={} }

## Inlets

## Attributes

### default[vector]: 0 write-only

Parameter default value

### max[vector]: write-only

Specify maximum value for parameter. Incoming values out of range will be clamped

### min[vector]: write-only

Specify minimum value for parameter. Incoming values out of range will be clamped

### name[string]: write-only

Parameter name

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [setparam](https://docs.cycling74.com/reference/gen_common_setparam) | Set a subpatcher param |
