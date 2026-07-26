---
type: cookbook
name: "Chromatic scale"
summary: "In this example, one octave of chromatic scale is played from the middle C."
chapter: "Max"
keywords: ["MIDI", "counter", "makenote", "noteout"]
objects: ["+", "counter", "makenote", "metro", "noteout", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/chromaticscale.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/chromaticscale.png"
---

# Chromatic scale

In this example, one octave of chromatic scale is played from the middle C. 

Each time the **metro** object sends a *bang*, the **counter** rolls to report numbers from 0 to 12 that are then added to the number 60, being the pitch C4. These numbers are used as a value to determine the pitch in **makenote**, and its *note-on* and *note-off* messages together with velocity are sent to a MIDI device via **noteout**.

## Objects used

`noteout`, `makenote`, `+`, `select`, `counter`, `metro`

*Patch contains 18 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/chromaticscale.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/chromaticscale.png`
