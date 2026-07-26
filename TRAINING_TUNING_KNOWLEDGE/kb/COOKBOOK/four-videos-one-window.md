---
type: cookbook
name: "Four videos in one window"
summary: "To show four videos at once in four quadrants of the screen (i.e., four quadrants of a window), one way is to use the videos as textures on four different jit.g"
chapter: "Jitter"
keywords: ["jit.gl.videoplane", "OpenGL"]
objects: ["jit.gl.render", "jit.gl.videoplane", "jit.movie", "jit.window", "qmetro", "select", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/fourvideoquadrants_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/fourvideoquadrants_0.png"
---

# Four videos in one window

To show four videos at once in four quadrants of the screen (i.e., four quadrants of a window), one way is to use the videos as textures on four different **jit.gl.videoplane** objects that are positioned appropriately in GL space.

## Objects used

`jit.gl.videoplane` ×4, `select`, `jit.movie`, `t`, `qmetro`, `jit.gl.render`, `jit.window`

*Patch contains 15 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/fourvideoquadrants_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/fourvideoquadrants_0.png`
