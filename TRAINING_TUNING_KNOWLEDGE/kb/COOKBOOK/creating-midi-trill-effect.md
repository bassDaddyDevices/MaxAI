---
type: cookbook
name: "Creating a MIDI trill effect"
summary: "This example shows how to create a MIDI “trill” effect, with a randomized rhythm, triggered when a particular incoming MIDI value is detected or when a specifie"
chapter: "Max"
keywords: ["stripnote", "peakamp~ select", "change"]
objects: ["<", ">", "change", "ezadc~", "makenote", "metro", "notein", "noteout", "peakamp~", "random", "select", "stripnote"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/triggertrill.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/triggertrill.png"
---

# Creating a MIDI trill effect

This example shows how to create a MIDI “trill” effect, with a randomized rhythm, triggered when a particular incoming MIDI value is detected or when a specified audio amplitude threshold has been reached.

## Objects used

`select` ×2, `ezadc~`, `change`, `>`, `peakamp~`, `stripnote`, `notein`, `<`, `noteout`, `makenote`, `metro`, `random`

*Patch contains 27 boxes, 24 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/triggertrill.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/triggertrill.png`
