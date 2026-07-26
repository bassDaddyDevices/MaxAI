---
type: cookbook
name: "Create a go board in Max"
summary: "This patch demonstrates how to create a 19x19 matrix that functions as a sort of \"go\" board, in which each mouse click alternates between placing a white or black square in a cell of the matrix."
chapter: "Max"
keywords: ["jit.matrix", "go", "jit.pwindow", "Matrix"]
objects: ["*", "/", "==", "gate", "if", "jit.matrix", "jit.pwindow", "loadbang", "pack", "route", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/goboard.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/goboard01.png"
---

# Create a go board in Max

This patch demonstrates how to create a 19x19 matrix that functions as a sort of "go" board, in which each mouse click alternates between placing a white or black square in a cell of the matrix. It's meant to demonstrate how a matrix can be used to store a multidimensional array of states or conditions.

## Objects used

`pack` ×2, `/` ×2, `*`, `t`, `if`, `==`, `gate`, `loadbang`, `unpack`, `route`, `jit.matrix`, `jit.pwindow`

*Patch contains 23 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/goboard.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/goboard01.png`
