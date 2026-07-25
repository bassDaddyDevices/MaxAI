---
type: gen
name: "rate"
summary: "Time-scale the output of a phasor"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_rate/"
package: "Gen"
see_also: ["phasor", "triangle"]
---
# rate

Time-scale the output of a phasor

## Description

The rate operator time-scales an input phase (such as from a phasor) by a multiplier. Multipliers less than 1 create several ramps per phase cycle.

## Constructors

- { arguments={multiplier}, inlets={phase} }

- { arguments={}, inlets={phase, multiplier} }

## Inlets

### phase[float]

phase to be scaled (0 to 1)

### multiplier[float]

multiplier to scale phase by

## Attributes

### sync[enum]: off write-only

If sync is set to lock, the output phase will be recalculated whenever the input multiplier changes to maintain a smooth ramp. If the sync is set to cycle, this recalculation is deferred until the next cycle of the input phasor.

Possible values:

0 = 'lock'

1 = 'off'

2 = 'cycle'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [phasor](https://docs.cycling74.com/reference/gen_dsp_phasor) | Sawtooth wave generator |
| [triangle](https://docs.cycling74.com/reference/gen_dsp_triangle) | Triangle/ramp wavetable |
