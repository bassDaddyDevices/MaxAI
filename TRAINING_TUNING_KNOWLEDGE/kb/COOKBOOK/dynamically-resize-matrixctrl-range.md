---
type: cookbook
name: "Dynamically resize matrixctrl range"
summary: "Here’s a way to store all of matrixctrl’s settings in a jit.matrix, and recall them whenever the matrixctrl is resized by messages."
chapter: "Max"
keywords: ["matrixctrl", "jit.matrix"]
objects: ["b", "counter", "if", "jit.iter", "jit.matrix", "loadmess", "matrixctrl", "pack", "pak", "prepend", "sel", "unpack", "vexpr"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/DynamicallyResizeMatrixctrlRange.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/dynamicallyresizematrixctrl.png"
---

# Dynamically resize matrixctrl range

Here’s a way to store all of **matrixctrl**’s settings in a **jit.matrix**, and recall them whenever the **matrixctrl** is resized by messages. The maximum size is set at 32×32, but you can modify it to suit your needs.

## Objects used

`counter` ×2, `loadmess`, `prepend`, `unpack`, `if`, `b`, `vexpr`, `pak`, `pack`, `sel`, `jit.iter`, `jit.matrix`, `matrixctrl`

*Patch contains 33 boxes, 32 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/DynamicallyResizeMatrixctrlRange.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/dynamicallyresizematrixctrl.png`
