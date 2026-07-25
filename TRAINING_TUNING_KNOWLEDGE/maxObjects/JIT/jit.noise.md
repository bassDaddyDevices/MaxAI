---
type: jitter
name: "jit.noise"
summary: "Generate white noise"
signal: false
url: "https://docs.cycling74.com/reference/jit.noise/"
package: "Jitter"
see_also: ["drunk", "jit.sprinkle", "random"]
---
# jit.noise

Generate white noise

## Description

[jit.noise](https://docs.cycling74.com/reference/jit.noise) generates matrices of random values.

## Matrix Operator

matrix inputs:0, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### seed[int]

Any non-zero value for the attribute will be used as the "seed" value for the random generator.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [drunk](https://docs.cycling74.com/reference/drunk) | Output random numbers within a step range |
| [jit.sprinkle](https://docs.cycling74.com/reference/jit.sprinkle) | Introduce spatial noise |
| [random](https://docs.cycling74.com/reference/random) | Generate a random number |
