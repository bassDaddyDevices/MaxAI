---
type: cookbook
name: "Convert between musical time and clock time"
summary: "The translate object performs conversions from one kind of time unit to any other, and is particularly useful when you need to convert from a tempo-relative tim"
chapter: "Max"
keywords: ["translate", "metro", "transport"]
objects: ["loadbang", "loadmess", "metro", "translate", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/translationoftimevalues.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/translationoftimevalues.png"
---

# Convert between musical time and clock time

The **translate** object performs conversions from one kind of time unit to any other, and is particularly useful when you need to convert from a tempo-relative time unit to a clock time unit (e.g., convert note values to milliseconds) or vice versa. In this example, try changing the bpm tempo of the **transport**, and you'll see that the **translate** object sends out updated information whenever the tempo changes.

"[The translate object updates its output when the tempo changes](translate-object-updates-its-output-when-tempo-changes.md)" gives additional explanation.

## Objects used

`metro` ×2, `loadmess`, `loadbang`, `translate`, `transport`

*Patch contains 24 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/translationoftimevalues.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/translationoftimevalues.png`
