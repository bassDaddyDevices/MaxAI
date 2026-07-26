---
type: cookbook
name: "Sync MIDI Notes with Ableton"
summary: "This example shows how to delay incoming midi notes by a specified note duration."
chapter: "Max for Live"
keywords: ["pipe", "live.menu"]
objects: ["live.menu", "notein", "noteout", "pipe", "prepend"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/SyncMIDINotesWithAbleton.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/SyncMIDINotesWithAbleton_0.PNG"
---

# Sync MIDI Notes with Ableton

This example shows how to delay incoming midi notes by a specified note duration. In order to achieve this we are introducing a **pipe** object in the middle of the **notein** and **noteout** objects that can be found by default on a max for live midi device. Furthermore, we need to define **pipe**’s ‘delaytime’ attribute to ‘0 ticks’ and set the ‘quantize’ attribute to the desired note duration. This last attribute can also be changed via the **live.menu** object.

## Objects used

`prepend`, `live.menu`, `pipe`, `noteout`, `notein`

*Patch contains 8 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/SyncMIDINotesWithAbleton.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/SyncMIDINotesWithAbleton_0.PNG`
