---
type: cookbook
name: "Theremin using mouse position"
summary: "This example shows how to create a “theremin” where the mouse position controls pitch and amplitude of a cycle~ with the x and y position respectively."
chapter: "MSP"
keywords: ["loadbang", "metro", "screensize", "mousestate", "expr", "pack", "line~", "dbtoa", "delay", "cycle~", "dac~"]
objects: ["*~", "cycle~", "dac~", "dbtoa", "delay", "expr", "line~", "loadbang", "metro", "mousestate", "pack", "screensize"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/instatheremin.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/instatheremin.png"
---

# Theremin using mouse position

This example shows how to create a “theremin” where the mouse position controls pitch and amplitude of a **cycle~** with the x and y position respectively.

## Objects used

`expr` ×4, `line~` ×2, `pack` ×2, `delay`, `dac~`, `*~`, `dbtoa`, `metro`, `loadbang`, `screensize`, `mousestate`, `cycle~`

*Patch contains 21 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/instatheremin.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/instatheremin.png`
