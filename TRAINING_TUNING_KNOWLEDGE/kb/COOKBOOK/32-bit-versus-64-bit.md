---
type: cookbook
name: "32-bit versus 64-bit"
summary: "64-bit precision is useful for when you need, well, more precision."
chapter: "Jitter"
keywords: ["64-bit", "precision"]
objects: ["+", "/", "jit.matrix", "jit.op", "jit.print"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/32vs64BitDemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/32vs64BitDemo.png"
---

# 32-bit versus 64-bit

64-bit precision is useful for when you need, well, more precision. This is important when you’re dealing with extremely small or extremely large numbers. You can’t necessarily create those numbers as a Max message, but they can be the result of math inside Max objects, and that’s where errors can occur. Here’s an example that shows how the Max messages *int* and *float* (32-bit) can fail to deal with very large numbers correctly, while the *float64* data type in Jitter should deal with them correctly.

## Objects used

`jit.print` ×6, `jit.op` ×6, `jit.matrix` ×6, `/` ×2, `+` ×2

*Patch contains 31 boxes, 31 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/32vs64BitDemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/32vs64BitDemo.png`
