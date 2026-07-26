---
type: cookbook
name: "Video crossfade"
summary: "The concepts of mixing and crossfading, and the mathematics of how to accomplish them, are discussed and demonstrated in Mixing and crossfading(mixing-and-crossfading.md)."
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.window", "jit.xfade", "key", "line", "loadbang", "metro", "pack", "select"]
objects: ["jit.qt.movie", "jit.window", "jit.xfade", "key", "line", "loadbang", "metro", "pack", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ABvideoxfade_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/abvideoxfade.png"
---

# Video crossfade

The concepts of *mixing* and *crossfading*, and the mathematics of how to accomplish them, are discussed and demonstrated in [Mixing and crossfading](mixing-and-crossfading.md).

This post demonstrates how to crossfade between two images or two videos using the **jit.xfade** object. The **jit.xfade** object implements the same sort of arithmetic discussed in an [other](useful-subpatch-mixing-and-balancing-two-sounds.md) [examples](mix-two-signals-more-efficiently.md) about audio mixing, and it applies the concept to the contents of two Jitter matrices. In its two inlets it expects to receive Jitter matrices, and it uses its ‘xfade’ attribute to scale and add those two matrices. (That is, every value in every cell of the matrices is scaled by some factor, then the two matrices are added, cell-by-cell.) The right matrix is multiplied by the ‘xfade’ value, and the left matrix is multiplied by 1 minus the ‘xfade’ value.

So, for example, when the ‘xfade’ value is 0, the output will be only the left matrix (scaled by 1-0, while the right matrix is scaled by 0) , and when the ‘xfade’ value is 1, its output will be only the right matrix (scaled by 1, while the left matrix is scaled by 1-1 which equals 0). When the ‘xfade’ value is 0.5, the output will be an equal mix of the two matrices, each multiplied by 0.5 (thus halving the brightness of each one) before they’re added together. When the ‘xfade’ value is 0.1, the cells of the right matrix will be multiplied by that value and the cells of the left matrix will be multiplied by 0.9; when the two matrices are added together, the left matrix will be 9 times as bright as the right matrix.

This patch uses the **line** object to interpolate from 0 to 1, or from 1 to 0, in a specified amount of time.

## Objects used

`jit.qt.movie` ×2, `jit.xfade`, `line`, `pack`, `loadbang`, `sel`, `jit.window`, `key`, `metro`

*Patch contains 29 boxes, 21 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ABvideoxfade_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/abvideoxfade.png`
