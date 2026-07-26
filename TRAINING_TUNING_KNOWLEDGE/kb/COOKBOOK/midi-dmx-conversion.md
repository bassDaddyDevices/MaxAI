---
type: cookbook
name: "MIDI-DMX conversion"
summary: "DMX data is encoded with “channel” information similarly to MIDI so that each receiving device can pay attention only to particular information."
chapter: "Max"
keywords: ["DMX", "MIDI", "ctlin", "<<"]
objects: ["*", "<<", "ctlin", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDI-DMX_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDI-DMX_0.png"
---

# MIDI-DMX conversion

DMX data is encoded with “channel” information similarly to MIDI so that each receiving device can pay attention only to particular information. Each channel can carry a value from 0-255. Note that it’s therefore easy to convert the standard MIDI range 0-127 to the DMX range 0-255 just by multiplying values by 2 (or by shifting the number one bit to the left).

## Objects used

`*`, `<<`, `slider`, `ctlin`

*Patch contains 16 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDI-DMX_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDI-DMX_0.png`
