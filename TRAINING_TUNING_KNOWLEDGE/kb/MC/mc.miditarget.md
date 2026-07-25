---
type: mc
name: "mc.miditarget"
summary: "Map MIDI / MPE Channels to MC Channels"
signal: false
url: "https://docs.cycling74.com/reference/mc.miditarget/"
package: "MC"
see_also: ["midiparse", "vst~", "sfizz~", "mc.midiplayer~"]
---
# mc.miditarget

Map MIDI / MPE Channels to MC Channels

## Description

The [mc.miditarget](https://docs.cycling74.com/reference/mc.miditarget) object lets you use the channel number of incoming MIDI data (in the form of  midievent  messages produced by the [midiparse](https://docs.cycling74.com/reference/midiparse) object) to target individual instances of objects inside the MC wrapper. Normally MIDI channel 1 is mapped to MC channel 1, but [mc.miditarget](https://docs.cycling74.com/reference/mc.miditarget) also has an MPE mode that maps MPE global MIDI channel 1 to MC channel 0 (targeting all instances) and MIDI channel 2 to MC channel 1. Objects that can work with messages from [mc.miditarget](https://docs.cycling74.com/reference/mc.miditarget) include [mc.vst~](https://docs.cycling74.com/reference/mc.vst~) and [mc.sfizz~](https://docs.cycling74.com/reference/mc.sfizz~).

## Arguments

None.

## Attributes

### mpemode[int]: 0

The mpemode attribute determines the channel mapping behavior of [mc.miditarget](https://docs.cycling74.com/reference/mc.miditarget). The MPE specification uses MIDI channel 1 for events that affect all notes; channels 2 - 16 are used for note events and per-note after touch, pitch bend, and control changes.

When mpemode is enabled, MIDI messages on channels 2 - 16 are mapped to MC channels 1 - 15. MIDI messages on channel 1 will be mapped to MC channel 0, which targets all instances inside an object using the MC wrapper. When mpemode is disabled, MIDI messages on channel 1 are mapped to MC channel 1, MIDI channel 2 is mapped to MC channel 2, and so on.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### midievent

When [mc.miditarget](https://docs.cycling74.com/reference/mc.miditarget) receives a message starting with  midievent  followed by a list of numbers specifying a MIDI message, the message is repeated to the outlet precedeed by  setvalue  and a channel index number obtained from the MIDI channel of the MIDI message.

## See Also

| Name | Description |
| --- | --- |
| [midiparse](https://docs.cycling74.com/reference/midiparse) | Interpret raw MIDI data |
| [vst~](https://docs.cycling74.com/reference/vst~) | Host VST, VST3 and Audio Unit plug-ins |
| [sfizz~](https://docs.cycling74.com/reference/sfizz~) | Sfz format sample player |
| [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~) | Generate MIDI Events from Audio Signals |
