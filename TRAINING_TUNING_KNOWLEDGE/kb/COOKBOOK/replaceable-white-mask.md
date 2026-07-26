---
type: cookbook
name: "Replaceable white mask"
summary: "If you have a video that you first want it masked by a white background, and uncover the video as lines are drawn into it, you can use a jit.lcd with a white ba"
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.op", "jit.lcd", "masking"]
objects: ["jit.lcd", "jit.op", "jit.pwindow", "jit.qt.movie", "loadbang", "pack", "qmetro", "random", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/replaceablewhitemask_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/replaceablewhitemask.png"
---

# Replaceable white mask

If you have a video that you first want it masked by a white background, and uncover the video as lines are drawn into it, you can use a **jit.lcd** with a white background, draw into it with black lines, and add that to your video. All the pixels that are white (255 255 255) in your **jit.lcd** matrix will be white in the summed output, and all the pixels that are black (0 0 0) in the **jit.lcd** will not affect the video.

## Objects used

`random` ×4, `loadbang` ×2, `qmetro` ×2, `pack` ×2, `jit.pwindow`, `jit.op`, `jit.qt.movie`, `select`, `jit.lcd`

*Patch contains 24 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/replaceablewhitemask_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/replaceablewhitemask.png`
