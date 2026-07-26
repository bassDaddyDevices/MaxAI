---
type: cookbook
name: "Customize oscillator behavior"
summary: "The canonical way to get cyclic \"oscillator\" behavior is, for every sample number (n), take a step of a certain size (increment) at a certain rate of speed (sam"
chapter: "MSP"
keywords: ["expr", "uzi", "peek~", "buffer~", "counter"]
objects: ["!/", "%", "*", "buffer~", "counter", "deferlow", "expr", "loadbang", "metro", "peek~", "slider", "table", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simpleLFO.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simpleLFO.png"
---

# Customize oscillator behavior

The canonical way to get cyclic "oscillator" behavior is, for every sample number (n), take a step of a certain size (increment) at a certain rate of speed (sample rate) wrapping around to stay within a specific range (length) such that you complete a certain number of cycles (frequency). What you get is an index (x) that you can use to look up values in a table, or as input to an equation, to get a result (y). What should the step size (the increment) be? It’s determined by the formula “increment = n \* frequency \* length/sample rate”.

In this example patch, the **counter** object produces the sample number (n). This is triggered by the **metro** object, which is producing the desired number of bangs per second (the sample rate). We arbitrarily may choose a "length" of 1000 because it gives a reasonable degree of precision and makes the math simple.

Set a desired LFO rate (e.g., 0.25 for a cycle every four seconds) and sample rate (e.g. 20 samples per second). The **expr** object calculates a sine, but you could use any formula. As shown on the right side of the patch, **buffer**~ and **peek**~ may be used to create a lookup table of floats for a signal (This example is filled with one cycle of a sine wave on load, then used as a 1000-element lookup table.)

## Objects used

`*` ×4, `expr` ×3, `slider` ×2, `%` ×2, `peek~`, `deferlow`, `uzi`, `loadbang`, `buffer~`, `table`, `counter`, `!/`, `metro`

*Patch contains 43 boxes, 32 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simpleLFO.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simpleLFO.png`
