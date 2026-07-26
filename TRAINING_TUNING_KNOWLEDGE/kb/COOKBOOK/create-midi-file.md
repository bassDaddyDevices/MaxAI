---
type: cookbook
name: "Create MIDI File"
summary: "This is an example that generates a sixteenth-note rhythm, formats the information as MIDI note messages with midiformat, and stores them in a seq object, which"
chapter: "Max"
keywords: ["counter", "coll", "makenote", "seq", "midiformat"]
objects: ["!/", "*", "75", "b", "coll", "counter", "delay", "loadmess", "makenote", "midiformat", "noteout", "pack", "seq"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/createmidifile.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0624 Create MIDI File.png"
---

# Create MIDI File

This is an example that generates a sixteenth-note rhythm, formats the information as MIDI note messages with **midiformat**, and stores them in a **seq** object, which can be saved as a MIDI file with the *write* message.

## Objects used

`b` ×2, `pack`, `midiformat`, `seq`, `loadmess`, `75`, `noteout`, `delay`, `makenote`, `*`, `!/`, `counter`, `coll`

*Patch contains 41 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/createmidifile.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0624 Create MIDI File.png`
