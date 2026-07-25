---
type: jitter
name: "jit.mo.fieldmask"
summary: "Field mask for 3 plane jit.mo streams"
signal: false
url: "https://docs.cycling74.com/reference/jit.mo.fieldmask/"
package: "jit.mo"
see_also: ["jit.mo.join", "jit.mo.func", "jit.mo.time", "jit.mo.field"]
---
# jit.mo.fieldmask

Field mask for 3 plane jit.mo streams

## Description

Field mask for 3 plane jit.mo streams. Calculates a mask value depending on distance from a defined spatial location. Can be used to perform arbitrary manipulations based on location

## Arguments

None.

## Attributes

### scale[float64]

Output multiplier (default = 1.0).

### location[float64]

Location value (default = 0. 0. 0.). Defines the center point of the field.

### falloff[float64]

Falloff value (default = 0.5). Determines the amount of falloff at the edge of the field, specified as a decimal fraction of the radius

### offset[float64]

Output offset (default = 0.0).

### radius[float64]

Radius value (default = 0.5). Radius defines the spherical area around the location affected by the field

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.mo.join](https://docs.cycling74.com/reference/jit.mo.join) | Combine jit.mo streams and output a multi-plane matrix |
| [jit.mo.func](https://docs.cycling74.com/reference/jit.mo.func) | Generate animated single dim matrices using a specified function |
| [jit.mo.time](https://docs.cycling74.com/reference/jit.mo.time) | Outputs float time values using specified mode for realtime animation |
| [jit.mo.field](https://docs.cycling74.com/reference/jit.mo.field) | Field manipulator for 3 plane jit.mo streams |
