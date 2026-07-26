---
type: cookbook
name: "Change hue rotation"
summary: "This examples shows how you can adjust the hue of an image by adjusting the value of hue angle of the object jit.hue."
chapter: "Jitter"
keywords: ["jit.hue", "jit.matrix", "jit.window"]
objects: ["*", "adc~", "b", "jit.hue", "jit.matrix", "jit.window", "line", "metro", "pack", "pow", "sel", "snapshot~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/changehuerotation.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/changehuerotation.png"
---

# Change hue rotation

This examples shows how you can adjust the hue of an image by adjusting the value of hue angle of the object **jit.hue**. The left side of the example sets the time in milliseconds to change the hue angle over a certain amount of time. The right hand side of the example uses the incoming sound level to alter the angle.

## Objects used

`*`, `pow`, `snapshot~`, `adc~`, `jit.hue`, `jit.window`, `b`, `pack`, `line`, `sel`, `metro`, `jit.matrix`

*Patch contains 36 boxes, 27 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/changehuerotation.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/changehuerotation.png`
