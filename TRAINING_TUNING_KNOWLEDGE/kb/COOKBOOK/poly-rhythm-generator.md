---
type: cookbook
name: "Poly-rhythm generator"
summary: "To create a poly-rhythm generator, this example chooses a division and articulates every attack point of that division."
chapter: "Max"
keywords: ["counter", "flonum", "metro", "toggle", "comment", "sel", "noteout", "transport", "makenote"]
objects: ["counter", "makenote", "metro", "noteout", "sel", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/cyclicalPolyrhythm.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/cyclicalPolyrhythm.png"
---

# Poly-rhythm generator

To create a poly-rhythm generator, this example chooses a division and articulates every attack point of that division. Use a **metro** synched to the **transport** to specify the divisions (or the **tempo** object, if preferred), and then use a **counter** (or a **%** object with the output of **tempo**) to specify the articulation points.

## Objects used

`sel` ×3, `metro` ×3, `counter` ×2, `noteout`, `makenote`, `transport`

*Patch contains 23 boxes, 23 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/cyclicalPolyrhythm.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/cyclicalPolyrhythm.png`
