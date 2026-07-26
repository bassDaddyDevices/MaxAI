---
type: cookbook
name: "Countdown"
summary: "This example shows how to make a countdown progress indicator by progressively filling a circle."
chapter: "Max"
keywords: ["lcd", "line", "progress"]
objects: ["lcd", "line", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Countdown.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Countdown.PNG"
---

# Countdown

This example shows how to make a countdown progress indicator by progressively filling a circle. The circle is filled with an arc, with a radius coming from the position 12 o’clock (at time 0%). At time 25%, the first upper right quadrant is filled, and so on, until 12 o’clock (at time 100%), when the circle is filled. The circle is being drawn on an **lcd** object by sending the message *paintarc* followed by 6 arguments; the first four arguments are coordinates, and the last two are the starting angle and ending degrees. This in turn is being driven by a **line** object that is sending a stream of numbers between *0* and *360* across the duration set by the **number** box at the very top of the patch.

## Objects used

`t`, `line`, `lcd`

*Patch contains 10 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Countdown.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Countdown.PNG`
