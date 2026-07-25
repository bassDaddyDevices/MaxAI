---
type: gen
name: "refract"
summary: "Refract a vector"
signal: false
url: "https://docs.cycling74.com/reference/gen_jit_refract/"
package: "Gen"
see_also: ["faceforward", "reflect"]
---
# refract

Refract a vector

## Description

Refract a vector through a surface defined by a normal and a refraction index

## Constructors

- { arguments={}, inlets={vector, normal, index} }

## Inlets

### vector[float]

vector to refract

### normal[float]

normal specifying refraction

### index[float]

refraction index

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [faceforward](https://docs.cycling74.com/reference/gen_jit_faceforward) | Return a vector pointing in the same direction as another |
| [reflect](https://docs.cycling74.com/reference/gen_jit_reflect) | Reflect a vector |
