---
type: gen
name: "rotor"
summary: "Return a quaternion that can rotate the first input into the second"
signal: false
url: "https://docs.cycling74.com/reference/gen_jit_rotor/"
package: "Gen"
see_also: ["qconj", "qmul", "qrot"]
---
# rotor

Return a quaternion that can rotate the first input into the second

## Description

Return a quaternion that can rotate the first input into the second.

## Constructors

- { arguments={value2}, inlets={value1} }

- { arguments={}, inlets={value1, value2} }

## Inlets

### value1[float]

input value 1

### value2[float]

input value 2

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [qconj](https://docs.cycling74.com/reference/gen_jit_qconj) | Get the conjugate of a quaternion. |
| [qmul](https://docs.cycling74.com/reference/gen_jit_qmul) | Multiply quaternion inputs |
| [qrot](https://docs.cycling74.com/reference/gen_jit_qrot) | Rotate a vector by a quaternion |
