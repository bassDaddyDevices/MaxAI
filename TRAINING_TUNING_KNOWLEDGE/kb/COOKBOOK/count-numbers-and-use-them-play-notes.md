---
type: cookbook
name: "Count numbers and use them to play notes"
summary: "This patch shows several of the most basic and useful Max objects."
chapter: "Max"
keywords: ["metro", "counter", "noteout", "makenote"]
objects: ["+", "counter", "makenote", "metro", "noteout", "pgmout"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/countnumbersplaynotes.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/usingcountertomakenotes.png"
---

# Count numbers and use them to play notes

This patch shows several of the most basic and useful Max objects.

A **metro** object (a scheduler of timed, repeated triggering messages) to trigger a **counter** (which keeps track of, and reports how many events it has received), and then uses the numbers from the **counter** to play notes on a MIDI synthesizer.

## Objects used

`pgmout`, `noteout`, `makenote`, `+`, `counter`, `metro`

*Patch contains 37 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/countnumbersplaynotes.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/usingcountertomakenotes.png`
