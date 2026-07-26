---
type: cookbook
name: "Checkerboard pattern with jit.gen"
summary: "This example shows a way to set the contents of a 2D Jitter matrix algorithmically in jit.gen."
chapter: "Jitter"
keywords: ["jit.matrix", "jit.gen"]
objects: ["%", "+", "==", "cell", "in", "jit.gen", "jit.matrix", "jit.pwindow", "out", "swiz"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/checkerboardpatterngen.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/checkerboardpatterngen.png"
---

# Checkerboard pattern with jit.gen

This example shows a way to set the contents of a 2D Jitter matrix algorithmically in **jit.gen**. The task in this case is to fill an empty matrix with a checkerboard pattern of alternating black and white squares, which is to say alternating *0* and *1* cells. Inside **jit.gen**, the cell numbers of both the x dimension and the y dimension are checked to determine whether the numbers are even. The modulo operation **% 2** is a good way to determine if a number is odd, because any odd number, when divided by 0, will yield a remainder of 1, whereas any even number will yield a remainder of 0. The formula in jit.gen says, in effect, if the cell number in both dimensions is even, or the cell number in both dimensions is odd, set the cell value to *1*, otherwise set the cell value to *0*.

For another way to complete this same task, see "[Checkerboard pattern in a matrix](checkerboard-pattern-matrix.md)".

## Objects used

`swiz` ×2, `%` ×2, `cell` ×2, `jit.matrix`, `jit.pwindow`, `jit.gen`, `==`, `+`, `in`, `out`

*Patch contains 14 boxes, 12 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/checkerboardpatterngen.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/checkerboardpatterngen.png`
