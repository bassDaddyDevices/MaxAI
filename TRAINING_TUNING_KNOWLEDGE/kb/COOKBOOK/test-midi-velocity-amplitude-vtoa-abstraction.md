---
type: cookbook
name: "Test MIDI velocity to amplitude (vtoa) abstraction"
summary: "This patch uses the vtoa abstraction (found here(use-midi-velocity-amplitude-envelope.md)) to convert MIDI velocity to amplitude which controls the volume of a saw~."
chapter: "MSP"
keywords: ["notein", "kslider", "vtoa", "mtof", "saw~"]
objects: ["*~", "dac~", "kslider", "loadmess", "mtof", "notein", "saw~", "scope~", "vtoa"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testvtoa.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testvtoa.png"
---

# Test MIDI velocity to amplitude (vtoa) abstraction

This patch uses the **vtoa** abstraction ([found here](use-midi-velocity-amplitude-envelope.md)) to convert MIDI velocity to amplitude which controls the volume of a **saw~**.

## Objects used

`scope~`, `vtoa`, `notein`, `dac~`, `loadmess`, `*~`, `kslider`, `saw~`, `mtof`

*Patch contains 13 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testvtoa.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testvtoa.png`
