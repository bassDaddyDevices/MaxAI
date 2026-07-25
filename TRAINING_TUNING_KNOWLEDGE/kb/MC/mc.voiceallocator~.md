---
type: mc
name: "mc.voiceallocator~"
summary: "Manage voice numbers for events"
signal: true
url: "https://docs.cycling74.com/reference/mc.voiceallocator~/"
package: "MC"
see_also: ["MC Managed Polyphony", "MC Polyphony", "mc.noteallocator~"]
---
# mc.voiceallocator~

Manage voice numbers for events

## Description

The [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) object assigns voice numbers to incoming messages using an optional multichannel signal to determine voice busy state. It also maintains a voice busy map used by other MC objects to avoid unnecessary processing for channels that are not actively producing audio in response to events.

## Arguments

### voice count[int] optional

An optional argument can set a maximum number of voice numbers the [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) object will use. If no argument is supplied, the default voice count is 0, meaning that [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) will set its maximum voice count by the number of channels in a connected multichannel input. If there is no connected multichannel input, the default voice count is 16.

## Attributes

### initialbusystate[int]: 1

Sets the initial busy state. The default value is 1. Set this to zero to avoid high CPU usage before sending events when audio is turned on.

### name[symbol]

The name attribute assigns a global name to the object's busy map. By default, [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) 's busy map does not have a name and is available only to MC objects within the same patcher. A named busy map is accessible to all MC objects (in any patcher) that refer to it using the busymapname attribute.

### steal[int]

When set to 1, the steal attribute allows messages to pass through mc.voiceallocator~ and are assigned to voice numbers when all voices have been allocated. When set to 0, messages are not passed through and are not assigned to voice numbers if all voices are already allocated.

### voices[int]

The voices attribute sets the maximum voice number [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) will allocate and output. When voices is 0 (the default), the active voice count is determined by the number of channels in the connected multichannel signal. If there is no connected signal, [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) defaults to 16 voices.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The  bang  message is repeated to the left outlet preceded by a new voice number sent out the right outlet.

### int

The number is repeated to the left outlet preceded by a new voice number sent out the right outlet.

### float

The number is repeated to the left outlet preceded by a new voice number sent out the right outlet.

### list

The list is repeated to the left outlet preceded by a new voice number sent out the right outlet.

### anything

The message is repeated to the left outlet preceded by a new voice number sent out the right outlet.

### endevent

The word  endevent , followed by an event name defined by the  event  message, releases the voice associated with the event. The entire  endevent  message is repeated to the left outlet.

Arguments:

- event name
  [list]

### event

The word  event , followed by an event name and a message, sends the entire  event  message out the left outlet preceded by a newly allocated voice number. The name can later be used with the  endevent  message to release the voice that became associated with the event.

Arguments:

- event-name
  [list]

### holdevent

The word  holdevent , followed by an event name and a message, sends the entire  holdevent  message out the left outlet preceded by a newly allocated voice number. The name can later be used with the  endevent  message to release the voice that became associated with the event. Unlike the  event  message,  holdevent  explicitly holds the named event until connected audio reaches zero.

Arguments:

- event-name
  [list]

### printbusymap

Prints the current state of the [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) busy map to the Max Console as a list.

### release

The word  release , followed by a voice number, releases that voice number (sets to a non-busy state). Without an argument,  release  sets all voices to a non-busy state.

Arguments:

- voice number
  [list]

### releaseevent

The word  releaseevent , followed by an event name defined by an  event  message, releases the voice number associated with the named event but unlike  endevent , does not produce a message out the left outlet.

Arguments:

- event-name
  [list]

### signal

Connect an optional multichannel signal to prevent [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) from reallocating a voice until the corresponding channel's signal level goes to zero.

## See Also

| Name | Description |
| --- | --- |
| [MC Managed Polyphony](https://docs.cycling74.com/userguide/mc/mc_poly_without_polytilde) | MC Managed Polyphony |
| [MC Polyphony](https://docs.cycling74.com/userguide/mc/mc_polyphony) | MC Polyphony |
| [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) | Manage voice numbers for MIDI note events |
