---
type: max
name: "cartopol"
summary: "Convert cartesian to polar coordinates"
signal: false
url: "https://docs.cycling74.com/reference/cartopol/"
package: "Max"
see_also: ["atan2", "lcd", "poltocar", "pow"]
---
# cartopol

Convert cartesian to polar coordinates

## Description

Converts a cartesian-coordinate pair consisting of real and imaginary values into a polar-coordinate pair consisting of distance and angle values.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  will output the most recently stored coordinate pair conversion.

### int

Converted to float.

Arguments:

- coordinate
  [int]

### float

In left inlet: The x coordinate of a Cartesian pair to be converted into a polar coordinate pair consisting of distance and angle values. When used in an audio context, the value represents the real part of a frequency domain value to be converted into a polar coordinate pair consisting of amplitude and phase values.

In right inlet: The y coordinate of a Cartesian pair to be converted into a polar coordinate pair consisting of distance and angle values. When used in an audio context, the value represents the imaginary part of a frequency domain value to be converted into a polar coordinate pair consisting of amplitude and phase values.

Arguments:

- coordinate
  [float]

## Output

### float

Out left outlet: The distance portion of the polar coordinate pair. When used in an audio context, the value represents the magnitude (amplitude) of the frequency represented by the currently input.

Out right outlet: The angle portion of the polar coordinate pair. When used in an audio context, the value represents the phase, expressed in radians, of the frequency represented by the current input. If only the left outlet is connected, the phase computation is not performed.

## See Also

| Name | Description |
| --- | --- |
| [atan2](https://docs.cycling74.com/reference/atan2) | Two-variable arc-tangent function |
| [lcd](https://docs.cycling74.com/reference/lcd) | Display graphics (deprecated) |
| [poltocar](https://docs.cycling74.com/reference/poltocar) | Convert polar to cartesian coordinates |
| [pow](https://docs.cycling74.com/reference/pow) | Computes input to the nth power |
