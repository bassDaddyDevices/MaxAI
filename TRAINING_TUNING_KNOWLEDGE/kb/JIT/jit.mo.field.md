---
type: jitter
name: "jit.mo.field"
summary: "Field manipulator for 3 plane jit.mo streams"
signal: false
url: "https://docs.cycling74.com/reference/jit.mo.field/"
package: "jit.mo"
see_also: ["jit.mo.join", "jit.mo.func", "jit.mo.time"]
---
# jit.mo.field

Field manipulator for 3 plane jit.mo streams

## Description

Field manipulator for 3 plane jit.mo streams. Deforms position output depending on distance from a defined spatial location. Can be used for sculpting effects and gravity-like animations.

## Arguments

None.

## Attributes

### location[float64]

Location value (default = 0. 0. 0.). Defines the center point of the field.

### falloff[float64]

Falloff value (default = 0.5). Determines the amount of falloff at the edge of the field, specified as a decimal fraction of the radius

### translate[float64]

Translation amount (default = 0. 0. 0.). Position offset for points within the field

### radius[float64]

Radius value (default = 0.5). Radius defines the spherical area around the location affected by the field

### rand\_amt[float64]

Random offset amount (default = 0. 0. 0.). Random position offsets applied based on field strength

### force[float64]

Force amount (default = 0.0). Repulsion (positive) or attraction (negative) to the location point

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### rand

Generate new random values for rand\_amt offset.

## See Also

| Name | Description |
| --- | --- |
| [jit.mo.join](https://docs.cycling74.com/reference/jit.mo.join) | Combine jit.mo streams and output a multi-plane matrix |
| [jit.mo.func](https://docs.cycling74.com/reference/jit.mo.func) | Generate animated single dim matrices using a specified function |
| [jit.mo.time](https://docs.cycling74.com/reference/jit.mo.time) | Outputs float time values using specified mode for realtime animation |
