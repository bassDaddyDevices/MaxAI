---
type: cookbook
name: "Checkerboard pattern in a matrix"
summary: "This example shows a way to set the contents of a 2D Jitter matrix."
chapter: "Jitter"
keywords: ["uzi", "&", "setcell", "jit.matrix"]
objects: ["&", "*", "+", "jit.matrix", "jit.pwindow", "pack", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/checkerboardpatterninamatrix.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/checkerboardpatterninamatrix.png"
---

# Checkerboard pattern in a matrix

This example shows a way to set the contents of a 2D Jitter matrix. The task in this case is to fill the matrix with a checkerboard pattern of alternating black and white squares, which is to say alternating *0* and *1* cells. The example uses two **uzi** ojbects as a way of instantaneously stepping through each cell of the matrix; one **uzi** steps through the rows (the y dimension) of the matrix, and for each row the other **uzi** steps through the columns (the x dimension).The **& 1** object is a good way of determining whether a number is odd, since any odd integer will have its least significant bit set, which is to say it will cause a *1* to come out of the **& 1** object. So, every cell number that is odd-numbered in one dimension but not the other will result in the cell being set to 255 (white). The calculated cell value is packed together in a list along with the x cell number and the y cell number in **pack**, and then a **message** box is used to make a well-formed *setcell* message, *setcell <x#> <y#> val <value>*, to go to the **jit.matrix** object containing an 8x8 matrix.

For another way to complete this same task, see "[Checkerboard pattern with jit.gen](checkerboard-pattern-jitgen.md)".

## Objects used

`&` ×3, `uzi` ×2, `jit.matrix`, `*`, `jit.pwindow`, `pack`, `+`

*Patch contains 12 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/checkerboardpatterninamatrix.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/checkerboardpatterninamatrix.png`
