---
type: cookbook
name: "Sequential or random access of a lookup table"
summary: "One of the nice features of an array is that you can store data in a particular order, then recall it in that order simply by incrementing an index counter."
chapter: "Max"
keywords: ["random", "table", "counter", "gswitch2"]
objects: ["counter", "gswitch2", "loadbang", "makenote", "metro", "noteout", "random", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/orderedandunordered.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/orderedandunordered.png"
---

# Sequential or random access of a lookup table

One of the nice features of an array is that you can store data in a particular order, then recall it in that order simply by incrementing an index counter. Or you can access the data randomly, which still restricts your outcome to members of that data set but ignores the original order.

This patch demonstrates that with a 16-value array of pitches and another 16-value array of velocities. When you turn on the **metro**, originally both arrays are read in order, and each contains a distinctive pattern. Try clicking on the **gSwitch2** objects to switch one or both of them over to random access of the **table**, to hear the effect of randomizing one musical parameter or both.

## Objects used

`random` ×2, `gswitch2` ×2, `counter` ×2, `table` ×2, `noteout`, `loadbang`, `makenote`, `metro`

*Patch contains 18 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/orderedandunordered.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/orderedandunordered.png`
