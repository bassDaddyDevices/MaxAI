---
type: mc
name: "mc.targetlist"
summary: "Format messages based on inlet number for controlling MC objects"
signal: false
url: "https://docs.cycling74.com/reference/mc.targetlist/"
package: "MC"
see_also: ["MC Event Objects", "Processing Events from MC Objects", "MC Managed Polyphony", "mc.makelist", "mc.target", "mc.voiceallocator~", "mc.noteallocator~"]
---
# mc.targetlist

Format messages based on inlet number for controlling MC objects

## Description

The [mc.targetlist](https://docs.cycling74.com/reference/mc.targetlist) object simplifies creating the  setvalue  messages used to target specific instances within MC wrapper objects. The object maps the index of an inlet where a message was received to a voice index used in the resulting  setvalue  message.

## Arguments

### prepend[symbol] optional

A symbol argument, if present, sets a message to use in  setvalue  message output. For example, if the argument is  tree , the resulting message output for voice index 1 and an int with a value of 10 would be  setvalue 1 tree 10 .

### voice index[int] optional

You can specify one or more voice index values to be associated with each inlet. For example, if the arguments are 5 6 7 8, four inlets are created and the left inlet is associated with voice index 5, the next inlet with 6, and so on. If no numbers are supplied as arguments, two inlets are created. The left inlet is associated with voice index 1 and the right inlet with voice index 2.

### inlet count[int] optional

To specify a number of inlets without having to type in a voice index for each one, precede an inlet count value with  @chans .  @chans  and the inlet count must be the last typed-in arguments.

## Attributes

### listmode[int]: 0

When enabled, the listmode attribute produces individual  setvalue messages  for each element in the list, as if you had sent each list element separately to successive inlets. For example, with listmode disabled, a list  5 6 7 8  received in the left inlet of an [mc.targetlist](https://docs.cycling74.com/reference/mc.targetlist) object with four inlets would produce the message  setvalue 1 5 6 7 8 . With listmode enabled, the [mc.targetlist](https://docs.cycling74.com/reference/mc.targetlist) object would produce four separate messages:  setvalue 1 5 ,  setvalue 2 6 ,  setvalue 3 7 , and  setvalue 4 8 .

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In any inlet: The  bang  message is repeated to the left outlet, preceded by  setvalue  and the voice index associated with the inlet where the message was received.

### int

In any inlet: An number is repeated to the left outlet, preceded by  setvalue  and the voice index associated with the inlet where the number was received.

### float

In any inlet: An number is repeated to the left outlet, preceded by  setvalue  and the voice index associated with the inlet where the number was received.

### list

In any inlet: A list is repeated to the left outlet, preceded by  setvalue  and the voice index associated with the inlet where the list was received.

### anything

In any inlet: The message is repeated to the left outlet, preceded by  setvalue  and the voice index associated with the inlet where the message was received.

## See Also

| Name | Description |
| --- | --- |
| [MC Event Objects](https://docs.cycling74.com/userguide/mc/mc_events_newobjects) | MC Event Objects |
| [Processing Events from MC Objects](https://docs.cycling74.com/userguide/mc/mc_events_newfunctions) | Processing Events from MC Objects |
| [MC Managed Polyphony](https://docs.cycling74.com/userguide/mc/mc_poly_without_polytilde) | MC Managed Polyphony |
| [mc.makelist](https://docs.cycling74.com/reference/mc.makelist) | Create a list from non-signal output of MC objects |
| [mc.target](https://docs.cycling74.com/reference/mc.target) | Format messages to control MC objects |
| [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) | Manage voice numbers for events |
| [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) | Manage voice numbers for MIDI note events |
