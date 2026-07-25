---
type: mc
name: "mc.phasewrap~"
summary: "Wrap a signal between π and -π  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.phasewrap~/"
package: "MC"
see_also: ["cartopol~", "pfft~", "pong~"]
---
# mc.phasewrap~

Wrap a signal between π and -π (multichannel)

## Description

[phasewrap~](https://docs.cycling74.com/reference/phasewrap~) takes any input signal and wrap it between π and -π values.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

The signal to be wrapped. If the input signal value exceeds π (3.14159), the output signal value is "wrapped" to a range whose lower bound is -π (-3.14159). Thus a signal of increasing value outputs a sawtooth waveform with -π and π as lower and upper values.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The wrapped input signal value.

## See Also

| Name | Description |
| --- | --- |
| [cartopol~](https://docs.cycling74.com/reference/cartopol~) | Signal Cartesian to Polar coordinate conversion |
| [pfft~](https://docs.cycling74.com/reference/pfft~) | Spectral processing manager for patchers |
| [pong~](https://docs.cycling74.com/reference/pong~) | Variable range signal folding |
