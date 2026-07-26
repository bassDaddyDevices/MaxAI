---
type: cookbook
name: "Moving video using x y coordinates"
summary: "This example shows how to change the size and rotation position of an image or video displayed using Jitter."
chapter: "Jitter"
keywords: ["qmetro", "if", "then", "counter", "line", "pak", "expr", "jit.qt.movie", "jit.gl.videoplane", "jit.gl.render", "jit.window"]
objects: ["*", "b", "counter", "expr", "if", "jit.fpsgui", "jit.gl.render", "jit.gl.videoplane", "jit.qt.movie", "jit.window", "line", "pak", "qmetro", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/moveVideoXYCoordinates.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/moveVideoXYCoordinates_0.png"
---

# Moving video using x y coordinates

This example shows how to change the size and rotation position of an image or video displayed using Jitter. The x-y orientation of the image is manipulated via the *rotate* message sent to **jit.gl.videoplane** and the size of the image is altered via the *camera* message sent to **jit.gl.render**.

## Objects used

`pak` ×4, `jit.window`, `expr`, `line`, `sel`, `if`, `*`, `counter`, `jit.fpsgui`, `b`, `jit.gl.render`, `jit.gl.videoplane`, `qmetro`, `jit.qt.movie`

*Patch contains 45 boxes, 46 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/moveVideoXYCoordinates.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/moveVideoXYCoordinates_0.png`
