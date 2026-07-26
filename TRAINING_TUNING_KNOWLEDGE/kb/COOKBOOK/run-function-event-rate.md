---
type: cookbook
name: "Run Function at Event Rate"
summary: "This example shows how to run a function at event rate."
chapter: "Max"
keywords: ["function", "metro", "counter", "/", "!/"]
objects: ["!/", "/", "counter", "function", "loadbang", "metro", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/RunFunctionAtEventRate_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/RunFunctionAtEventRate.png"
---

# Run Function at Event Rate

This example shows how to run a **function** at event rate. For this effect we are using only a combination of Max objects: a **loadbang** sets the duration and number of steps to step through the **function** –– these are sent to both **counter**, **/** and **!/** objects to work out the appropriate math ––, a **toggle** resets the **counter** and start/stop the **metro**, the **metro** drives the **counter**, the **counter** output if scaled by the **/** object, and the resulting float (between *0* and *1.*) drives the **function**.

## Objects used

`t` ×2, `/`, `sel`, `!/`, `metro`, `loadbang`, `counter`, `function`

*Patch contains 28 boxes, 23 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/RunFunctionAtEventRate_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/RunFunctionAtEventRate.png`
