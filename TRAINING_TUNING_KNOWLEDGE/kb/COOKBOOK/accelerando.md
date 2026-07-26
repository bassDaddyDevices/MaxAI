---
type: cookbook
name: "Accelerando"
summary: "This example demonstrates accelerando by playing 7-note scale (diatonic) over five octaves while increasing the velocity from soft to loud (20 to 125), and also the rate from 2 to 22 notes per second."
chapter: "Max"
keywords: ["counter", "makenote", "metro", "noteout", "table", "velocity", "rate"]
objects: ["!/", "*", "+", "/", "counter", "makenote", "metro", "noteout", "select", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/accelerando.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/accelerando_0.png"
---

# Accelerando

This example demonstrates accelerando by playing 7-note scale (diatonic) over five octaves while increasing the velocity from soft to loud (20 to 125), and also the rate from 2 to 22 notes per second.

Note the importance of the right-to-left ordering of Max messages here. The rate of the **metro** is initialized first (also setting the duration of the first note) before the **metro** is started. The velocity values are produced next, so that they will have already been received by **makenote** when the pitch values arrive. After each note is played, a new rate is given to the **metro** (and a new duration to **makenote**) in preparation for the subsequent note. The **metro** stops after the last note is played.

## Objects used

`+` ×3, `/`, `*`, `select`, `table`, `noteout`, `makenote`, `!/`, `metro`, `counter`

*Patch contains 33 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/accelerando.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/accelerando_0.png`
