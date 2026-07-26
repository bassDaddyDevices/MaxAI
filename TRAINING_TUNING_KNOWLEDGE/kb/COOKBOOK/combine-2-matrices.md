---
type: cookbook
name: "Combine 2 Matrices"
summary: "If you have a 3 plane matrix and a 4 plane matrix, and would like to combine these to create a 7 plane matrix, you would first unpack a multiple matrix into mul"
chapter: "Jitter"
keywords: ["jit.pack", "jit.unpack", "jit.matrix"]
objects: ["jit.matrix", "jit.pack", "jit.unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/combine2matrices.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0518 Combine2Matrices.png"
---

# Combine 2 Matrices

If you have a 3 plane matrix and a 4 plane matrix, and would like to combine these to create a 7 plane matrix, you would first unpack a multiple matrix into multiple single matrices using the **jit.unpack** object, and then combine again with the **jit.pack** object.

## Objects used

`jit.unpack` ×2, `jit.matrix` ×2, `jit.pack`

*Patch contains 5 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/combine2matrices.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0518 Combine2Matrices.png`
