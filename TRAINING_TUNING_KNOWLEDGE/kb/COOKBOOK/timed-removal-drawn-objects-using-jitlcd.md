---
type: cookbook
name: "Timed removal of drawn objects using jit.lcd"
summary: "The simplest way to remove objects after a set duration using jit.lcd – because jit.lcd doesn’t support sprites – is to keep track of the individual drawing components and then redraw the whole stage."
chapter: "Jitter"
keywords: ["coll", "jit.lcd", "counter", "jit.pwindow"]
objects: ["+", "coll", "counter", "jit.lcd", "jit.pwindow", "pack", "pipe", "prepend", "random", "route", "t", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jit.lcdTimedRemovalOfDrawnObjects.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/jit.lcdTimedRemovalOfDrawnObjects.png"
---

# Timed removal of drawn objects using jit.lcd

The simplest way to remove objects after a set duration using **jit.lcd** – because **jit.lcd** doesn’t support sprites – is to keep track of the individual drawing components and then redraw the whole stage. The example does so by storing the *paintoval* messages in a **coll** then sending the output of the **coll** to the **jit.lcd**. Each line of the **coll** is given an index using the **counter** and **prepend** objects. The **pipe** delays the value from the **counter** by 10 seconds and then clears the **jit.lcd**, removes the line with the index specified by the **counter**, and then dumps the contents of the **coll** back into the **jit.lcd**.

## Objects used

`random` ×7, `prepend` ×4, `t` ×2, `+` ×2, `jit.pwindow`, `pipe`, `coll`, `counter`, `pack`, `route`, `uzi`, `jit.lcd`

*Patch contains 33 boxes, 45 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jit.lcdTimedRemovalOfDrawnObjects.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/jit.lcdTimedRemovalOfDrawnObjects.png`
