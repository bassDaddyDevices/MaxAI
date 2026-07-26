---
type: cookbook
name: "Plot a randomly generated envelope curve with a list of (x, y) pairs"
summary: "The function object is designed to control the line~ object (or curve~ object) to make envelopes."
chapter: "Max"
keywords: ["function", "zl iter"]
objects: ["function", "t", "zl"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/randomlyGeneratedEnvelopeCurve.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/randomlygeneratedenvelope.png"
---

# Plot a randomly generated envelope curve with a list of (x, y) pairs

The **function** object is designed to control the **line~** object (or **curve~** object) to make envelopes. To send a function *n* number of (x, y) pairs, and plot the resulting shape, break up the list with the **zl** object and send them into the **function** object.

## Objects used

`t`, `zl`, `function`

*Patch contains 6 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/randomlyGeneratedEnvelopeCurve.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/randomlygeneratedenvelope.png`
