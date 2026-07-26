---
type: cookbook
name: "Determine the length of a buffer~"
summary: "This example shows how to retrieve the total duration in ms of a loaded file in a buffer~, using the info~ object."
chapter: "MSP"
keywords: ["buffer~", "info~"]
objects: ["buffer~", "info~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/DetermineBufferLength.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/DetermineBufferLength.PNG"
---

# Determine the length of a buffer~

This example shows how to retrieve the total duration in ms of a loaded file in a **buffer~**, using the **info~** object. In fact, because the **buffer~** object sends a *bang* out its right outlet whenever it loads in a sound file, you could use that *bang* to trigger **info~**, thus automatically obtaining the duration of any sound file you import.

## Objects used

`info~`, `buffer~`

*Patch contains 5 boxes, 3 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/DetermineBufferLength.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/DetermineBufferLength.PNG`
