---
type: cookbook
name: "Get the mean of many numbers"
summary: "The mean object provides the average (mean) value of a list of numbers."
chapter: "Max"
keywords: ["mean", "average", "gate"]
objects: ["*", "delay", "f", "gate", "mean", "metro", "random", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/getmeanofmanynumbers.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/getmeanofmanynumbers_0.png"
---

# Get the mean of many numbers

The **mean** object provides the average (mean) value of a list of numbers. Or, as it gets individual numbers it continually sends out the running average. If you want to know the average value of a stream of data during a certain period of time, clear the **mean** object’s memory, start directing the data stream to it (e.g., open a gate), capture its output into a variable (but don’t do anything with the output yet), then at the end of the period of time close the **gate** and get the value that’s in the variable.

This example demonstrates that technique. It uses a simulation of a stream of data (as might be coming from a continuous controller or a voltage source), and shows how to capture the average value of that stream over a period of 15 seconds.

## Objects used

`t` ×2, `f`, `mean`, `*`, `random`, `metro`, `gate`, `delay`

*Patch contains 23 boxes, 17 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/getmeanofmanynumbers.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/getmeanofmanynumbers_0.png`
