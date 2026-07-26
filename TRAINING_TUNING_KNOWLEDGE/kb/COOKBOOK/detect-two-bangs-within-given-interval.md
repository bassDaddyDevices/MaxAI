---
type: cookbook
name: "Detect two bangs within a given interval"
summary: "This example demonstrates a way to detect if two events, coming from two different sources, occur within a given interval of time from each other."
chapter: "Max"
keywords: ["cpuclock", "abs"]
objects: ["-", "<=", "abs", "cpuclock", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detectmultiplebangswithinsetduration.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0625 Detect multiple bangs within set duration.png"
---

# Detect two bangs within a given interval

This example demonstrates a way to detect if two events, coming from two different sources, occur within a given interval of time from each other. We use the **cpuclock** object to detect the time at the moment each event occurs. The output of either **cpuclock** object in this example will trigger a subtraction calculation between the timings of the most recent event from each source. We calculate the absolute value of the difference between the time of occurrence of those two *bang* messages to determine the time interval, and then test that value to see if it is less than or equal to 1000 ms. If so, we use the result of that calculation to trigger another event.

## Objects used

`cpuclock` ×2, `sel`, `<=`, `abs`, `t`, `-`

*Patch contains 10 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detectmultiplebangswithinsetduration.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0625 Detect multiple bangs within set duration.png`
