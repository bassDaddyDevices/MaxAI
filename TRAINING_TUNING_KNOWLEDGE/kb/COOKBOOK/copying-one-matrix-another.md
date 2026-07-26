---
type: cookbook
name: "Copying one matrix to another"
summary: "To set matrix “B” to have the contents of matrix “A”, you simply send “A” to “B”."
chapter: "Jitter"
keywords: ["Matrix", "jit_matrix", "thru", "jit.matrix"]
objects: ["jit.matrix", "jit.noise", "jit.op", "jit.pwindow", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/CopyMatrixtoAnother.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/copymatrixtoanother.png"
---

# Copying one matrix to another

To set matrix “B” to have the contents of matrix “A”, you simply send “A” to “B”. (More specifically, you cause matrix “A” to send a *jit\_matrix* message to matrix “B”.) The trick, though, is to suppress thruput on matrix “B” by setting its *@thru* attribute to *0* (it’s 1 by default), so that you can set and recall its contents independently.

So if matrix “A” is the one that has the most recent settings, and matrix “B” is the one that has the previous settings, you can bang matrix “B” to get it to send out the previous settings, compare those to the settings of matrix “A”, and then set the contents of matrix “B” to be those of matrix “A”. Note that matrix “B” has the attribute *@thru 0*.

## Objects used

`jit.pwindow` ×3, `jit.matrix` ×3, `jit.op` ×2, `t`, `jit.noise`

*Patch contains 18 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/CopyMatrixtoAnother.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/copymatrixtoanother.png`
