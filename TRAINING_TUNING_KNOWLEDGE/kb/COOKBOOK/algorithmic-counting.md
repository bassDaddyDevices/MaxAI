---
type: cookbook
name: "Algorithmic counting"
summary: "This patch demonstrates an application of modular arithmetic to wrap a series of numbers around within a defined range."
chapter: "Max"
keywords: ["metro", "counter", "%", "modulo"]
objects: ["%", "*", "+", "counter", "metro"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AlgorithmicCounting.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/algorithmiccounting.png"
---

# Algorithmic counting

This patch demonstrates an application of modular arithmetic to wrap a series of numbers around within a defined range. The algorithm produces a series of expanding steps: 0, 1, 3, 6, 10, 15, 21, etc. The difference between each number and its predecessor in the series increases with each step—1-0=1, then 3-1=2, 6-3=3, 10-6=4, and so on. We do this by incrementing a **counter** and adding its output to the previous output of the **+** object. So that the series doesn't expand endlessly, we use the **%** object to constrain the numbers within a given range, and then we use an additional offset (another **+** object) to push the range up or down.

## Objects used

`+` ×3, `*`, `metro`, `counter`, `%`

*Patch contains 23 boxes, 17 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AlgorithmicCounting.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/algorithmiccounting.png`
