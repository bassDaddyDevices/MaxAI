---
type: cookbook
name: "Initialize a multislider with a sine function"
summary: "Question: How does one fill a multislider of 512 sliders (range -1."
chapter: "Max"
keywords: ["uzi", "multislider", "expr", "zl"]
objects: ["expr", "loadbang", "multislider", "uzi", "zl"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinewaveToMultislider.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinewaveToMultislider.png"
---

# Initialize a multislider with a sine function

Question: How does one fill a **multislider** of 512 sliders (range -1. to 1.) with a sine wave?

Answer: The 512 numbers produced by **uzi** go from 0 to 511 (0 to almost 512). Inside the **expr** object those numbers are multiplied by 6.283185 which is pi times 2, then divided by 512. The result is to give a series of 512 numbers that go from 0 to (almost) 2π. Imagine those numbers as the changing angle in radians as a point travels around the circumference of a unit circle. Take the sine of those numbers and you get one cycle of a sine wave of amplitude 1.

## Objects used

`multislider`, `zl`, `expr`, `loadbang`, `uzi`

*Patch contains 5 boxes, 4 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinewaveToMultislider.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinewaveToMultislider.png`
