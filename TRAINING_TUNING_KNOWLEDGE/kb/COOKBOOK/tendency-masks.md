---
type: cookbook
name: "Tendency Masks"
summary: "This example shows how to use the function object for making tendency masks with breakpoint line segment functions (à la Koenig and as explained by Rowe) using"
chapter: "Max"
keywords: ["line", "metro", "patcher", "function", "line~", "mtof", "cycle~", "dac~"]
objects: ["*", "*~", "+", "-", "0", "1", "cycle~", "dac~", "function", "i", "line", "line~", "metro", "mtof", "random", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tendencyMasks.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tendencyMasks.png"
---

# Tendency Masks

This example shows how to use the function object for making tendency masks with breakpoint line segment functions (à la Koenig and as explained by Rowe) using a **line** object to progress through the functions that describe the minimum and maximum of the function’s range.

The **function** objects (with y ranging from 0 to 1) describes the minimum and maximum of the random range, and the **line** object steps through those functions (i.e., provides x values from 0 to 1000) in 15 seconds (or whatever number of milliseconds you specify with the number box). The random numbers generated in the **subpatch** ‘randomfloat’ are mapped into that range, then mapped into the range of pitches (in this case I chose the range of the piano, MIDI notes 21 to 108), then converted to frequency for the **cycle~** object. (Notice that this works even when the maximum function dips below the minimum function.)

## Objects used

`*` ×3, `+` ×2, `-` ×2, `i` ×2, `function` ×2, `1`, `dac~`, `0`, `line~`, `*~`, `cycle~`, `metro`, `random`, `t`, `mtof`, `line`

*Patch contains 32 boxes, 37 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tendencyMasks.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tendencyMasks.png`
