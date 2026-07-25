---
type: mc
name: "mc.input"
summary: "Format messages to control MC objects"
signal: false
url: "https://docs.cycling74.com/reference/mc.input/"
package: "MC"
see_also: ["MC Event Objects", "Processing Events from MC Objects", "MC Managed Polyphony", "mc.makelist", "mc.targetlist", "mc.voiceallocator~", "mc.noteallocator~"]
---
# mc.input

Format messages to control MC objects

## Description

The [mc.target](https://docs.cycling74.com/reference/mc.target) object simpifies creating the  setvalue  messages used to target specific instances within MC wrapper objects.

## Arguments

### prepend[symbol] optional

A symbol argument, if present, sets a message to use in  setvalue  message output. For example, if the argument is  tree , the resulting message output for voice index 1 and an int with a value of 10 would be  setvalue 1 tree 10 .

### initial voice[int] optional

An int argument, if present, sets the initial value of the voice index. By default the voice index is initially 0.  setvalue 0  tells the MC wrapper to send the message following the  0  to all instances.

## Attributes

### append[atomarray]

The append attribute can be set to one or more items to place at the end of the  setvalue  message produced by the object. By default nothing is appended.

### prepend[atomarray]

The prepend attribute can be set to one or more items to place at the beginning of the arguments to the  setvalue  message produced by the object (in other words,  setvalue  always comes first). By default nothing is prepended.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet:  bang  is repeated to the left outlet preceded by  setvalue  and the current voice index.

### int

In left inlet: The number is repeated to the left outlet preceded by  setvalue  and the current voice index.

In right inlet: Sets voice index (0 - 1024) to be used for subsequent  setvalue  messages triggered by messages received in the left inlet.

### float

In left inlet: The number is repeated to the left outlet preceded by  setvalue  and the current voice index.

In right inlet: Converted to  int . Sets the voice index (0 - 1024) to be used for subsequent  setvalue  messages triggered by messages received in the left inlet.

### list

In left inlet: The list is repeated to the left outlet preceded by  setvalue  and the current voice index.

### anything

In left inlet: The message is repeated to the left outlet preceded by  setvalue  and the current voice index.

### voice

In any inlet: the word  voice , followed by a number (0 - 1024), sets the voice index used for subsequent  setvalue  messages triggered by messages received in the left inlet.

Arguments:

- index
  [int]

## See Also

| Name | Description |
| --- | --- |
| [MC Event Objects](https://docs.cycling74.com/userguide/mc/mc_events_newobjects) | MC Event Objects |
| [Processing Events from MC Objects](https://docs.cycling74.com/userguide/mc/mc_events_newfunctions) | Processing Events from MC Objects |
| [MC Managed Polyphony](https://docs.cycling74.com/userguide/mc/mc_poly_without_polytilde) | MC Managed Polyphony |
| [mc.makelist](https://docs.cycling74.com/reference/mc.makelist) | Create a list from non-signal output of MC objects |
| [mc.targetlist](https://docs.cycling74.com/reference/mc.targetlist) | Format messages based on inlet number for controlling MC objects |
| [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) | Manage voice numbers for events |
| [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) | Manage voice numbers for MIDI note events |
