---
type: gen
name: "qrot"
summary: "Rotate a vector by a quaternion"
signal: false
url: "https://docs.cycling74.com/reference/gen_jit_qrot/"
package: "Gen"
see_also: ["qconj", "qmul", "rotor"]
---
# qrot

Rotate a vector by a quaternion

## Description

Rotate a vector by a quaternion. The equation of the rotation is q\*v\*q^-1.

## Constructors

- { arguments={}, inlets={quaternion, vector} }

## Inlets

### quaternion[float]

Quaternion describing a rotation

### vector[float]

vector to be rotated

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [qconj](https://docs.cycling74.com/reference/gen_jit_qconj) | Get the conjugate of a quaternion. |
| [qmul](https://docs.cycling74.com/reference/gen_jit_qmul) | Multiply quaternion inputs |
| [rotor](https://docs.cycling74.com/reference/gen_jit_rotor) | Return a quaternion that can rotate the first input into the second |
