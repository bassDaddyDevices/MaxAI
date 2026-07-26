---
type: cookbook
name: "Adjust brightness and contrast on a 1-plane char matrix"
summary: "Brightness and contrast are explained briefly in Jitter Tutorial 7: Image Level Adjustment."
chapter: "Jitter"
keywords: ["jit.op", "jit.3m", "jit.expr", "brightness", "contrast"]
objects: ["/", "jit.3m", "jit.expr", "jit.matrix", "jit.noise", "jit.op", "jit.pwindow", "loadbang", "loadmess", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/brightnessContrast1VideoPlane.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/brightnessContrastVideoPlane.png"
---

# Adjust brightness and contrast on a 1-plane char matrix

Brightness and contrast are explained briefly in [Jitter Tutorial 7: Image Level Adjustment](https://docs.cycling74.com/max7/tutorials/jitterchapter07). The common Jitter object for adjusting brightness, contrast, and saturation of an image is **jit.brcosa**. You might wonder, though, what math is used to adjust brightness and contrast. Brightness is just multiplication, so you could simply use the **jit.op** object with *@op \** as the argument (or the equivalent **jit.\***). Contrast is a little more complicated and there are various ways to calculate it, but the most common way is to move all values toward or away from the mean value. This example show a few ways to do that with a 1-plane char matrix.

## Objects used

`jit.matrix` ×3, `jit.pwindow` ×3, `jit.op` ×3, `jit.3m` ×2, `loadmess`, `/`, `jit.expr`, `t`, `loadbang`, `jit.noise`

*Patch contains 23 boxes, 23 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/brightnessContrast1VideoPlane.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/brightnessContrastVideoPlane.png`
