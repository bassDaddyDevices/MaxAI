---
type: mc
name: "mc.hilbert~"
summary: "Phase quadrature filter  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.hilbert~/"
package: "MC"
see_also: ["fbinshift~", "freqshift~", "gizmo~"]
---
# mc.hilbert~

Phase quadrature filter (multichannel)

## Description

[hilbert~](https://docs.cycling74.com/reference/hilbert~) is a 6th order hilbert transformer with a minimum of error.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear

Clears the object's sample-memory in case of a blow-up.

### signal

In left inlet: The signal that will be hilbert-transformed. The Hilbert transform, or phase quadrature, produces signals that are 90 degrees out of phase with each other.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

Out left outlet: The "real" part of the hilbert-transformed signal. It will be 90 degrees out of phase from the "imaginary" part.

Out right outlet: The "imaginary" part of the hilbert-transformed signal. It will be 90 degrees out of phase from the "real" part.

## See Also

| Name | Description |
| --- | --- |
| [fbinshift~](https://docs.cycling74.com/reference/fbinshift~) | Frequency domain frequency shifter for pfft~ |
| [freqshift~](https://docs.cycling74.com/reference/freqshift~) | Time-domain frequency shifter |
| [gizmo~](https://docs.cycling74.com/reference/gizmo~) | Frequency-domain pitch shifter for pfft~ |
