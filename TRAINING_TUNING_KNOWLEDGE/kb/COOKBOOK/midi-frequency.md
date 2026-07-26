---
type: cookbook
name: "MIDI to Frequency"
summary: "Incoming MIDI control values (0 to 127) from a ctlin object can be scaled with the scale object to cover any desired pitch range (in terms of MIDI pitch number)"
chapter: "Max"
keywords: ["MIDI", "mtof", "ctlin", "scale"]
objects: ["ctlin", "filtergraph~", "mtof", "rslider", "scale", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDItoFrequency.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDItoFrequency.png"
---

# MIDI to Frequency

Incoming MIDI control values (0 to 127) from a **ctlin** object can be scaled with the **scale** object to cover any desired pitch range (in terms of MIDI pitch number), and that pitch range can then be converted to frequency in Hertz with the **mtof** MIDI to frequency object.

## Objects used

`mtof`, `rslider`, `scale`, `slider`, `ctlin`, `filtergraph~`

*Patch contains 17 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDItoFrequency.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDItoFrequency.png`
