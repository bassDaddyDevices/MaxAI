---
type: cookbook
name: "Timed ouput of list elements"
summary: "This patch is one method of outputting a list of integers individually spread out over time."
chapter: "Max"
keywords: ["iter", "accum", "pipe"]
objects: ["accum", "i", "iter", "pipe", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timedOutputListElements1.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timedOutputListElements1.png"
---

# Timed ouput of list elements

This patch is one method of outputting a list of integers individually spread out over time. The **iter** object outputs each integer in the list one at a time. The **trigger** ‘b i’ sends the integer to the **pipe** which adds the specified time interval to the current value in the **accum** which changes the delay time of the next object sent to **pipe**. The patch could be easily adapted to work for floats as well.

## Objects used

`t` ×3, `iter`, `pipe`, `accum`, `i`

*Patch contains 15 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timedOutputListElements1.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timedOutputListElements1.png`
