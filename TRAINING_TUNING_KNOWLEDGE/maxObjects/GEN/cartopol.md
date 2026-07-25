---
type: gen
name: "cartopol"
summary: "Convert Cartesian values to polar"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_cartopol/"
package: "Gen"
see_also: ["atan2", "hypot", "poltocar"]
---
# cartopol

Convert Cartesian values to polar

## Description

Convert Cartesian values to polar format. Angles are in radians.

## Constructors

- { arguments={x, y}, inlets={} }

- { arguments={x}, inlets={y} }

- { arguments={}, inlets={x, y} }

## Inlets

### x[float]

x-coordinate

### y[float]

y-coordinate

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [atan2](https://docs.cycling74.com/reference/gen_common_atan2) | The arctangent of the input coordinate |
| [hypot](https://docs.cycling74.com/reference/gen_common_hypot) | The hypoteneuse |
| [poltocar](https://docs.cycling74.com/reference/gen_common_poltocar) | Convert polar values to Cartesian |
