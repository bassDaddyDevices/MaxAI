---
type: mc
name: "mc.noteallocator~"
summary: "Manage voice numbers for MIDI note events"
signal: true
url: "https://docs.cycling74.com/reference/mc.noteallocator~/"
package: "MC"
see_also: ["MC Managed Polyphony", "MC Polyphony", "mc.voiceallocator~"]
---
# mc.noteallocator~

Manage voice numbers for MIDI note events

## Description

The [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) object assigns voice numbers for MIDI and MPE note events using an optional multichannel signal to determine voice busy state. It also maintains a voice busy map used by other MC objects to avoid unnecessary processing for channels that are not actively playing notes.

## Arguments

### voice count[int] optional

If present, a number argument sets the maximum voice count. You can change the voice count during the lifetime of the object by setting the voices attribute.

## Attributes

### direct[int]: 0

Set Busy Map With Signal Input

### hires[int]: 3

The hires attribute is used to support high-resolution pitch bend scaling. When the attribute is set to 0, [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) will accept and output pitch bend integer values in the standard MIDI range of 0 to 127. When the attribute is set to 1, it accepts high resolution MIDI data and outputs float values in the range of -1 to 1. When the attribute is set to 2, it accepts high resolution MIDI data and outputs integer values in the range of -8192 to 8191 (standard 14-bit MIDI high resolution pitch bend range). When the attribute is set to 3 (default), it accepts high resolution MIDI data and outputs integer values in the range of 0 to 16383 (unsigned 14-bit MIDI high resolution pitch bend range).

Possible values:

0 = 'Off (0-127)'

1 = 'Float (-1 to 1)'

2 = '14-bit Fixed (-8192 to 8191)'

3 = '14-bit Fixed (0 to 16383)'

### mpemode[int]: 0

When mpemode is enabled, [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) outputs the voice number contained in  mpeevent  messages instead of allocating a voice number based on its internal busy state. When using MPE mode, the source of incoming MPE messages (such as a keyboard or other device) assumes responsibility for the details of voice allocation. MPE mode is disabled by default.

### name[symbol]:

The name attribute assigns a global name to the object's busy map. By default, [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) 's busy map does not have a name and is available only to MC objects within the same patcher. A named busy map is accessible to all MC objects (in any patcher) that refer to it using the busymapname attribute.

### steal[int]: 1

When steal is enabled, [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) will re-allocate ("steal") a busy voice if it runs out of non-busy voices. The stolen voice number used will be the one least recently allocated. When steal is disabled, [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) will not produce any output if all voices are busy. Output resumes only when a voice becomes free, either via the input multichannel audio signal or an incoming MIDI note-off event.

### voices[int]: 0

The voices attribute sets the maximum voice number [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) will allocate and output. When voices is 0 (the default), the active voice count is determined by the number of channels in the connected multichannel signal. If there is no connected signal, [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) defaults to 15 voices.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### midievent

When [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) receieves a  midievent  message (from a [midiparse](https://docs.cycling74.com/reference/midiparse) object) in its inlet, it allocates and outputs a voice number out its right outlet, then sends the MIDI note, controller, aftertouch, or pitch bend values in the  midievent  message out the designated outlets.

Arguments:

- MIDI
  [list]

### mpeevent

When [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) receieves an  mpeevent  message (from an [mpeparse](https://docs.cycling74.com/reference/mpeparse) object) in its inlet, it allocates and outputs a voice number out its right outlet, then sends the MIDI note, controller, aftertouch, or pitch bend values in the  mpeevent  message out the designated outlets.

Arguments:

- MPE
  [list]

### signal

Connect an optional multichannel signal to prevent [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) from reallocating a voice until its audio level goes to zero.

## See Also

| Name | Description |
| --- | --- |
| [MC Managed Polyphony](https://docs.cycling74.com/userguide/mc/mc_poly_without_polytilde) | MC Managed Polyphony |
| [MC Polyphony](https://docs.cycling74.com/userguide/mc/mc_polyphony) | MC Polyphony |
| [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) | Manage voice numbers for events |
