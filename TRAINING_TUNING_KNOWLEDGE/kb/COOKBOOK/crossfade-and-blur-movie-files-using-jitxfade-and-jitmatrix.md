---
type: cookbook
name: "Crossfade and blur movie files using jit.xfade and jit.matrix"
summary: "This example shows a couple of different Jitter techniques."
chapter: "Jitter"
keywords: ["ctlin", "jit.xfade", "jit.matrix", "jit.window"]
objects: ["/", "ctlin", "jit.fpsgui", "jit.matrix", "jit.qt.movie", "jit.window", "jit.xfade", "prepend", "qmetro", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/xfadeandblur.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/xfadeandblur.png"
---

# Crossfade and blur movie files using jit.xfade and jit.matrix

This example shows a couple of different Jitter techniques. It shows how you can very simply use a MIDI control value to alter a Jitter attribute. In this case, the MIDI values from a modulation wheel (continuous controller 1), which range from 0 to 127, are divided by 127.0 to provide an *xfade* value from 0. to 1. to the **jit.xfade** object, to crossfade between two movie files. Below that is demonstrated a computationally inexpensive way to create a blur effect by downsampling the number of pixels in the image with **jit.matrix**, and then upsampling in the **jit.window** object, using interpolation between cells of the **jit.matrix** to create the blur effect.

## Objects used

`jit.qt.movie` ×2, `jit.window`, `qmetro`, `select`, `jit.xfade`, `prepend`, `ctlin`, `/`, `jit.fpsgui`, `jit.matrix`

*Patch contains 26 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/xfadeandblur.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/xfadeandblur.png`
