---
type: gen
name: "poltocar"
summary: "Convert polar values to Cartesian"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_poltocar/"
package: "Gen"
see_also: ["atan2", "cartopol", "hypot"]
---
# poltocar

Convert polar values to Cartesian

## Description

Convert polar values to Cartesian format. Angles are in radians.

## Constructors

- { arguments={r, theta}, inlets={} }

- { arguments={r}, inlets={theta} }

- { arguments={}, inlets={r, theta} }

## Inlets

### r[float]

polar radius

### theta[float]

polar angle

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [atan2](https://docs.cycling74.com/reference/gen_common_atan2) | The arctangent of the input coordinate |
| [cartopol](https://docs.cycling74.com/reference/gen_common_cartopol) | Convert Cartesian values to polar |
| [hypot](https://docs.cycling74.com/reference/gen_common_hypot) | The hypoteneuse |
