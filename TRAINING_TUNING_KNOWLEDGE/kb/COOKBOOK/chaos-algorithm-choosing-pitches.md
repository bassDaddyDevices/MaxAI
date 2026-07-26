---
type: cookbook
name: "Chaos algorithm for choosing pitches"
summary: "Mathematicians have observed that certain repeated iterative equations create interesting visual patterns when the results are graphed."
chapter: "Max"
keywords: ["chaos", "algorithmic composition", "expr"]
objects: ["*", "+", "expr", "f", "loadbang", "makenote", "metro", "noteout", "slider", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/chaosequation.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/chaosequation.png"
---

# Chaos algorithm for choosing pitches

Mathematicians have observed that certain repeated iterative equations create interesting visual patterns when the results are graphed. Those equations are a part of the study of "[chaos theory](https://en.wikipedia.org/wiki/Chaos_theory)". This patch uses one such equation, and outputs the results as MIDI pitch values, to make chaotic pitch patterns.

The equation used for this patch is x = rx(1-x), where the new result x on the left side of the equation is then used as the current value of x on the right side of the equation the next time the equation is solved. Depending on the value of r, the pattern created by repeated iterations of this equation might be chaotic—unpredictable but not totally random, containing some almost repetitive patterns—or it might oscillate cyclically around some small set of values to create a clearly repetitive pattern. Listen to the output using the supplied default r value of 3.8, then listen as you change the r value to something slightly different.

In this patch we use the expression *1000./$f1* in the **expr** object to convert notes per second to a millisecond interval to be used by the **metro**. This is equivalent to using a **!/ 1000.** object. The output of the equation is multiplied by 60 and offset by 36 to map the x value into a reasonable range of MIDI pitches.

## Objects used

`*` ×4, `t` ×2, `expr` ×2, `noteout`, `makenote`, `slider`, `f`, `metro`, `+`, `loadbang`

*Patch contains 37 boxes, 37 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/chaosequation.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/chaosequation.png`
