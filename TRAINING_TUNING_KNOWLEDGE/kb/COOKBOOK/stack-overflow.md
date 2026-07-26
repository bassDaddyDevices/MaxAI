---
type: cookbook
name: "Stack overflow"
summary: "Recursion, feedback loops, and unlimited untimed (as fast as possible) loops are not feasible in Max."
chapter: "Max"
keywords: ["int", "metro", "uzi", "+"]
objects: ["+", "i", "metro", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stackoverflowdemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stackoverflowdemo.png"
---

# Stack overflow

Recursion, feedback loops, and unlimited untimed (as fast as possible) loops are not feasible in Max. In effect, you’d be asking Max to do an unlimited number of things all at the same time. Its scheduler (its internal “to-do” list) would get filled and it would be unable to do anything more. In computer lingo, its “stack” (its inbox of tasks to do) would overflow.

To avoid stack overflow, make sure that you explicitly schedule repeated events to have a specific time, either with a timing object such as **metro**, or with the special object **uzi**, which can perform a (finite!) number of things as fast as possible and manages the scheduling for you.

## Objects used

`+` ×2, `i` ×2, `uzi`, `metro`

*Patch contains 18 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stackoverflowdemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stackoverflowdemo.png`
