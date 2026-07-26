---
type: cookbook
name: "Convert MIDI data into coll format"
summary: "Here’s an example patch that takes MIDI pitch and velocity information, runs it through borax and stores time-tagged note information in a coll, which you can then look up and play later."
chapter: "Max"
keywords: ["coll", "nsub", "borax", "MIDI sequencer"]
objects: ["!=", "b", "borax", "clip", "coll", "gate", "pack", "r"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/convertDataFromMIDIformatToColl.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/convertDataFromMIDIformatToColl.png"
---

# Convert MIDI data into coll format

Here’s an example patch that takes MIDI pitch and velocity information, runs it through **borax** and stores time-tagged note information in a **coll**, which you can then look up and play later.

## Objects used

`pack` ×3, `r`, `clip`, `b`, `!=`, `gate`, `coll`, `borax`

*Patch contains 44 boxes, 37 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/convertDataFromMIDIformatToColl.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/convertDataFromMIDIformatToColl.png`
