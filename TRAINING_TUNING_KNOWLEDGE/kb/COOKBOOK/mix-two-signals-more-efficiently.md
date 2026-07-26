---
type: cookbook
name: "Mix two signals (more efficiently)"
summary: "This demonstrates a linear interpolation formula for achieving a weighted balance of two signals."
chapter: "MSP"
keywords: ["linear interpolation", "mixing", "crossfade", "balance"]
objects: ["!-~", "*~", "+~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mix2~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mix2~.png"
---

# Mix two signals (more efficiently)

This demonstrates a linear interpolation formula for achieving a weighted balance of two signals. It has the exact same effect as [A useful subpatch for mixing and balancing two sounds](useful-subpatch-mixing-and-balancing-two-sounds.md), but uses a more efficient formula, requiring one fewer multiplication per sample.

We want a blend (mix) of two sounds, and we specify the balance between the two as a value from 0 to 1, where a balance value of 0 means we get only the first sound, a balance value of 1 means we get only the second sound, and 0.5 means we get an equal mix of the two sounds.

The way we calculate this is

*y[n] = x**1**[n]+balance(x**2**[n]-x**1**[n])*

where *x1* and *x2* are the two signal values and *balance* is the weighting value described above.

The two audio signals come in the first two inlets, and the balance value comes in the right inlet. The argument '#1' will be replaced by whatever is typed in as the object’s first argument when it’s created in the parent patch. This patch subtracts the sound coming in the first inlet from the sound coming in the second inlet, multiplies the result by *balance* and adds that result to the first sound.

A linear signal from 0 to 1 or from 1 to 0 coming in the right inlet will make a smooth linear crossfade between the two audio signals.

## Objects used

`!-~`, `+~`, `*~`

*Patch contains 13 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mix2~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mix2~.png`
