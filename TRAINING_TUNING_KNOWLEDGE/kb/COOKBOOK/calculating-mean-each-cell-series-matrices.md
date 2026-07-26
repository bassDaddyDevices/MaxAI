---
type: cookbook
name: "Calculating the mean of each cell of a series of matrices"
summary: "To calculate the mean value of each cell of a series of Jitter matrices, you can keep the running sums in a matrix, and then divide by the number of instances received."
chapter: "Jitter"
keywords: ["mean", "jit.matrix"]
objects: ["!/", "*", "b", "counter", "expr", "jit.*", "jit.+", "jit.matrix", "jit.pwindow", "loadbang", "pack", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/meanofeachcell.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/meanofeachcell.png"
---

# Calculating the mean of each cell of a series of matrices

To calculate the mean value of each cell of a series of Jitter matrices, you can keep the running sums in a matrix, and then divide by the number of instances received. That is, use **jit.+** to keep the sum of all matrices received, use a **counter** to keep track of how many matrices you’ve received, and use **jit./** to divide by that number (or **jit.\*** to multiply by one over that number). In this example, a subpatch generates fake input data, and the rest of the patch shows the procedure for calculating the mean. Each **jit.matrix** object has been given a name, to show you what is being held in each one.

## Objects used

`jit.matrix` ×4, `expr` ×2, `uzi` ×2, `*`, `pack`, `b`, `loadbang`, `jit.pwindow`, `jit.*`, `!/`, `counter`, `jit.+`

*Patch contains 31 boxes, 34 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/meanofeachcell.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/meanofeachcell.png`
