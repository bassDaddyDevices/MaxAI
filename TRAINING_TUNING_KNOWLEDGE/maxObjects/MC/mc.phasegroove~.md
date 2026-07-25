---
type: mc
name: "mc.phasegroove~"
summary: "Control groove~ With phasor~ (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.phasegroove~/"
package: "MC"
see_also: ["buffer~", "groove~", "mcs.groove~", "phasor~", "ramp~"]
---
# mc.phasegroove~

Control groove~ With phasor~ (multichannel)

## Description

The [phasegroove~](https://docs.cycling74.com/reference/phasegroove~) object converts ramps between 0 and 1 into a sample-increment signal that you can use to control the [groove~](https://docs.cycling74.com/reference/groove~) object. [phasegroove~](https://docs.cycling74.com/reference/phasegroove~) must be connected to a [groove~](https://docs.cycling74.com/reference/groove~). Once connected, it knows about the [groove~](https://docs.cycling74.com/reference/groove~) object's loop points and the sample it is playing.

## Arguments

None.

## Attributes

### conflict[int]

Normally, [phasegroove~](https://docs.cycling74.com/reference/phasegroove~) uses a different algorithm to control [groove~](https://docs.cycling74.com/reference/groove~) when timestretching is enabled. However, by enabling the conflict attribute, [phasegroove~](https://docs.cycling74.com/reference/phasegroove~) uses the non-timestretching algorithm when timestretching is enabled, resulting in a stuttering effect.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Connect any object that sends a ramp such as a [phasor~](https://docs.cycling74.com/reference/phasor~) or [ramp~](https://docs.cycling74.com/reference/ramp~).

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
| [mcs.groove~](https://docs.cycling74.com/reference/mcs.groove~) | Variable-rate looping sample playback |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [ramp~](https://docs.cycling74.com/reference/ramp~) | Trigger a Single Ramp With an Audio Signal |
