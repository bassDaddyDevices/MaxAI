---
type: cookbook
name: "Upsampling & downsampling video using Jitter"
summary: "Techniques called upsampling and downsampling can be used to get a “mosaic-like effect.” This effect is achieved by reducing the resolution – via changing the f"
chapter: "Jitter"
keywords: ["expr", "jit.qt.movie", "jit.matrix", "jit.pwindow"]
objects: ["!/", "expr", "jit.fpsgui", "jit.matrix", "jit.pwindow", "jit.qt.movie", "loadbang", "metro", "pack", "prepend", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Downsampling&Upsampling.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Downsampling&Upsampling.png"
---

# Upsampling & downsampling video using Jitter

Techniques called upsampling and downsampling can be used to get a “mosaic-like effect.” This effect is achieved by reducing the resolution – via changing the frames-per-second and pixel size – as shown in the example. The dimensions of the movie are defined by the **jit.qt.movie** object which is then altered by the **jit.matrix** object depending on the pixel size defined by the user in the **number** object labeled “pixel size.” The frames-per-second are determined by the **metro** object of which the time interval is set using the **number** object labeld “fps.”

More information on this subject and can be found in [Jitter Tutorial 14: Matrix Positioning](https://docs.cycling74.com/max5/tutorials/jit-tut/jitterchapter14.html) on the Cycling 74 website.

## Objects used

`expr` ×2, `jit.fpsgui`, `jit.pwindow`, `jit.matrix`, `jit.qt.movie`, `prepend`, `pack`, `metro`, `select`, `!/`, `loadbang`

*Patch contains 27 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Downsampling&Upsampling.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Downsampling&Upsampling.png`
