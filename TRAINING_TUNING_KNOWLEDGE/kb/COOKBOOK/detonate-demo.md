---
type: cookbook
name: "detonate demo"
summary: "For producing a score out of time and then saving as a standard MIDI file, detonate is the best way to go, and it can save in either format 0 or format 1."
chapter: "Max"
keywords: ["detonate", "expr", "makenote", "noteout", "ctlout"]
objects: ["b", "ctlout", "delay", "detonate", "expr", "makenote", "noteout", "random", "t", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detonatedemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/detonatedemo.PNG"
---

# detonate demo

For producing a score out of time and then saving as a standard MIDI file, **detonate** is the best way to go, and it can save in either format 0 or format 1. Admittedly, you could save a format 0 MIDI file with **text** and **seq** by writing the text file, reading it back into **seq**, then writing that as MIDI, and it could all happen in a few milliseconds.

With **detonate**, however, one might need to only be on the lookout for timing problems due to the fact that detonate requires *delta* times from the preceding event, rather than start times calculated from the beginning of the sequence. If you’re using the latter, then your note spacing will just get wider and wider, and could get awfully slow awfully quickly. Just for fun, here’s an excerpted detonate example from the old school Max Tutorial.

## Objects used

`expr` ×5, `noteout`, `t`, `b`, `random`, `uzi`, `detonate`, `delay`, `makenote`, `ctlout`

*Patch contains 25 boxes, 31 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detonatedemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/detonatedemo.PNG`
