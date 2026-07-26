---
type: cookbook
name: "Using Jitter to store numerical data"
summary: "Storage of large quantities of numerical data is exactly what Jitter is for."
chapter: "Jitter"
keywords: ["jitter", "uzi", "jit.matrix", "jit.spill"]
objects: ["!/", "30", "counter", "jit.matrix", "jit.spill", "loadbang", "metro", "pack", "random", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jitterfornumericaldata.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/jitterfornumericaldata.png"
---

# Using Jitter to store numerical data

Storage of large quantities of numerical data is exactly what Jitter is for. You might commonly think of the data in Jitter matrices as representing pixels of a video image, but in fact you can use the **jit.matrix** object to store any large sets of (multi-dimensional arrays of) numbers, which can be used for any purpose.

Here’s an example of storing and playing back one minute’s worth of 18 xyz coordinates (for GL objects in 3D space, for example) at 30 fps. For simplicity, this example uses the **random** object to generate the numbers, but that could be replaced by any algorithm you want.

When you turn on the **toggle** labeled "record", the **counter** and **uzi** objects generate *setcell* messages to store a number in each plane of each cell of the jit.matrix object. This will generate 18 sets of 3 numbers for each of 1800 frames, presumably to be rendered in GL (not pictured here). The righthand part of the patch shows how you could read back those stored numbers. The **jit.spill** objects are included here just to show how you could parse and output the coordinates.

## Objects used

`jit.matrix` ×3, `jit.spill` ×3, `counter` ×2, `metro` ×2, `uzi` ×2, `pack`, `random`, `!/`, `30`, `loadbang`

*Patch contains 35 boxes, 31 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jitterfornumericaldata.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/jitterfornumericaldata.png`
