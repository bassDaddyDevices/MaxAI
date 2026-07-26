---
type: cookbook
name: "Converting notes per second to ms and using the Tempo object"
summary: "This example shows how to convert a value expressing “notes per second” into \"milliseconds per note\", which is a more useful value for the metro object."
chapter: "Max"
keywords: ["loadbang", "metro", "makenote", "noteout", "tempo", "table"]
objects: ["!/", "loadbang", "makenote", "metro", "noteout", "table", "tempo"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/notespeed.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/notespeed.png"
---

# Converting notes per second to ms and using the Tempo object

This example shows how to convert a value expressing “notes per second” into "milliseconds per note", which is a more useful value for the **metro** object.  The right side of the patch shows how to use the **tempo** object to specify tempo in bpm, and to specify the division of the whole note at which to output numbers indicating which division of the measure it's on.

## Objects used

`makenote` ×3, `noteout` ×2, `table` ×2, `tempo` ×2, `!/` ×2, `loadbang`, `metro`

*Patch contains 36 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/notespeed.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/notespeed.png`
