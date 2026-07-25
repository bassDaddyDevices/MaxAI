---
type: gen
name: "fold"
summary: "Fold input to a range within a low and high output value"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_fold/"
package: "Gen"
see_also: ["clamp", "scale", "wrap"]
---
# fold

Fold input to a range within a low and high output value

## Description

Low and high values can be specified by arguments or by inlets. The default range is 0..1.

## Constructors

- { arguments={input, min, max}, inlets={} }

- { arguments={min, max}, inlets={input} }

- { arguments={max}, inlets={input, min} }

- { arguments={}, inlets={input, min, max} }

## Inlets

### input[float]

input to fold

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
| [clamp](https://docs.cycling74.com/reference/gen_common_clamp) | Clamp values in a specified range |
| [scale](https://docs.cycling74.com/reference/gen_common_scale) | Map an input range of values to an output range |
| [wrap](https://docs.cycling74.com/reference/gen_common_wrap) | Wrap input to a range within a low and high output value |
