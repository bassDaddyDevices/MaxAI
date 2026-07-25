---
type: msp
name: "plugphasor~"
summary: "Host-synchronized sawtooth wave"
signal: true
url: "https://docs.cycling74.com/reference/plugphasor~/"
package: "MSP"
see_also: ["plugsync~"]
---
# plugphasor~

Host-synchronized sawtooth wave

## Description

The [plugphasor~](https://docs.cycling74.com/reference/plugphasor~) object outputs an audio-rate sawtooth wave that is sample-synchronized to the beat of the Ableton Live sequencer. The waveform can be fed to other audio objects to lock audio processes to the audio of the host.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Output

### signal

The output of [plugphasor~](https://docs.cycling74.com/reference/plugphasor~) is analogous to [phasor~](https://docs.cycling74.com/reference/phasor~): it ramps from 0 to 1.0 over the period of a beat. If the current host environment does not support synchronization or the host's transport is stopped, the output of [plugphasor~](https://docs.cycling74.com/reference/plugphasor~) is a zero signal.

## See Also

| Name | Description |
| --- | --- |
| [plugsync~](https://docs.cycling74.com/reference/plugsync~) | Report host synchronization information |
