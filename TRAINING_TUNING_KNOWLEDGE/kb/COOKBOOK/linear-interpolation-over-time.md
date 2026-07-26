---
type: cookbook
name: "Linear interpolation over time"
summary: "The line object sends out a periodic series of numbers that progress to some new value over a certain amount of time."
chapter: "Max"
keywords: ["jit.matrix", "jit.op", "kslider", "line", "linear interpolation", "loadbang", "makenote", "notein", "noteout", "pack", "stripnote", "trigger"]
objects: ["jit.matrix", "jit.op", "jit.pwindow", "kslider", "line", "loadbang", "makenote", "notein", "noteout", "pack", "stripnote", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/interpolation1.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/interpolation1.png"
---

# Linear interpolation over time

The **line** object sends out a periodic series of numbers that progress to some new value over a certain amount of time. The input to **line** is a destination value (where it should eventually arrive), a transition time (how long it should take to get there), and a time interval between outputs (how often it should send out intermediate values along the way). The left part of this patch shows the use of **line** to generate integers that are used as pitches. (The integers could just as well be used as indices in a **table** to look up a non-linear series of numbers.) The right part of the patch uses **line** to generate floats from 0 to 1 that are uses as a multiplier to control the brightness of an image in a Jitter matrix. The **pack** object takes in several numbers (three in this case) and sends them out together as a single list, which **line** interprets as ‘destination value,’ ‘transition time,’ and ‘output interval.’ Each output of **line** first goes to the right inlet of the **jit.op** object (to be used as the multiplier) and then sends a *bang* to the **jit.matrix** object to send out its *jit\_matrix*.

## Objects used

`line` ×2, `loadbang`, `t`, `pack`, `jit.op`, `jit.pwindow`, `jit.matrix`, `stripnote`, `notein`, `kslider`, `noteout`, `makenote`

*Patch contains 29 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/interpolation1.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/interpolation1.png`
