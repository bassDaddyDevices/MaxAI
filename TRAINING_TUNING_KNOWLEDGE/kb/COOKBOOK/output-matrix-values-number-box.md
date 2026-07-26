---
type: cookbook
name: "Output matrix values to a number box"
summary: "To output matrix values to a number box, use metro 1000 to bang a counter object, and use that output as the matrix coordinate for the getcell message."
chapter: "Max"
keywords: ["jit.matrix", "counter", "metro", "select", "getcell", "jit.noise"]
objects: ["counter", "jit.matrix", "jit.noise", "loadbang", "metro", "route", "zl"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/OutputMatrixValuesToNumbox.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/OutputMatrixtonumbox.png"
---

# Output matrix values to a number box

To output matrix values to a number box, use **metro 1000** to bang a **counter** object, and use that output as the matrix coordinate for the *getcell* message. Please note that the third outlet of **counter** does not send out a bang unless you tell it to (with a *carrybang* message). It sends out a 1 when the **counter** reaches its maximum, and a 0 on the next output. This causes a double trigger. Use a **select 1** object to convert the 1 into a *bang* (and ignore the 0), or use the *carrybang* message to **counter** to get a *bang* instead of the 1 and 0.

## Objects used

`zl`, `counter`, `metro`, `route`, `jit.matrix`, `loadbang`, `jit.noise`

*Patch contains 24 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/OutputMatrixValuesToNumbox.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/OutputMatrixtonumbox.png`
