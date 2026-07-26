---
type: cookbook
name: "Oscillator bank with Glissandi"
summary: "Each cycle~ starts at 800 Hz and ramps to a note in the harmonic spectrum with a fundamental frequency of 100 Hz over 45 seconds after a delay of 5 seconds."
chapter: "MSP"
keywords: ["line~", "cycle~", "curve~", "dac~"]
objects: ["*~", "+~", "curve~", "cycle~", "dac~", "line~", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/oscillators16.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/oscillators16.png"
---

# Oscillator bank with Glissandi

Each **cycle~** starts at 800 Hz and ramps to a note in the harmonic spectrum with a fundamental frequency of 100 Hz over 45 seconds after a delay of 5 seconds. The **curve~** controls the amplitude of all of the **cycle~**objects.

## Objects used

`line~` ×16, `cycle~` ×16, `+~` ×15, `select`, `dac~`, `curve~`, `*~`

*Patch contains 74 boxes, 93 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/oscillators16.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/oscillators16.png`
