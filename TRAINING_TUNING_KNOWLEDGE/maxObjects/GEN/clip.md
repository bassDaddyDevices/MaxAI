---
type: gen
name: "clip"
summary: "Clamp values in a specified range"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_clip/"
package: "Gen"
see_also: ["clip", "fold", "max", "min", "scale", "wrap"]
---
# clip

Clamp values in a specified range

## Description

Clamps the input value between specified min and max. Ranges are inclusive (both min and max values may be output)

## Constructors

- { arguments={input, min, max}, inlets={} }

- { arguments={min, max}, inlets={input} }

- { arguments={max}, inlets={input, min} }

- { arguments={}, inlets={input, min, max} }

## Inlets

### input[float]

input to clamp

### min[float]

lower bound

### max[float]

upper bound

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [clip](https://docs.cycling74.com/reference/gen_common_clip) | Clamp values in a specified range |
| [fold](https://docs.cycling74.com/reference/gen_common_fold) | Fold input to a range within a low and high output value |
| [max](https://docs.cycling74.com/reference/gen_common_max) | The maximum of the inputs |
| [min](https://docs.cycling74.com/reference/gen_common_min) | The minimum of the inputs |
| [scale](https://docs.cycling74.com/reference/gen_common_scale) | Map an input range of values to an output range |
| [wrap](https://docs.cycling74.com/reference/gen_common_wrap) | Wrap input to a range within a low and high output value |
