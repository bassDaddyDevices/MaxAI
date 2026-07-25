---
type: max
name: "poltocar"
summary: "Convert polar to cartesian coordinates"
signal: false
url: "https://docs.cycling74.com/reference/poltocar/"
package: "Max"
see_also: ["cos", "cartopol", "lcd", "sin"]
---
# poltocar

Convert polar to cartesian coordinates

## Description

Converts a polar-coordinate pair consisting of distance and angle values into a cartesian-coordinate pair consisting of real and imaginary values.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes [poltocar](https://docs.cycling74.com/reference/poltocar) to output the very last conversion it has calculated.

### int

Converted to  float .

Arguments:

- coordinate
  [int]

### float

In left inlet: The distance portion of a polar coordinate pair to be converted into a Cartesian coordinate pair consisting of real and imaginary values. When used in an audio context, the value represents magnitude (amplitude) portion of a polar coordinate pair to be converted into a cartesian (real/imaginary) coordinate pair.

In right inlet: The angle portion of a polar coordinate pair to be converted into a Cartesian coordinate pair consisting of real and imaginary values. When used in an audio context, the value represents the phase portion of a polar coordinate pair to be converted into a cartesian (real/imaginary) coordinate pair.

Arguments:

- coordinate
  [float]

## Output

### float

Out left outlet: The real portion of a Cartesian coordinate pair.

Out right outlet: The imaginary portion of a Cartesian coordinate pair.

## See Also

| Name | Description |
| --- | --- |
| [cos](https://docs.cycling74.com/reference/cos) | Cosine function |
| [cartopol](https://docs.cycling74.com/reference/cartopol) | Convert cartesian to polar coordinates |
| [lcd](https://docs.cycling74.com/reference/lcd) | Display graphics (deprecated) |
| [sin](https://docs.cycling74.com/reference/sin) | Sine function |
