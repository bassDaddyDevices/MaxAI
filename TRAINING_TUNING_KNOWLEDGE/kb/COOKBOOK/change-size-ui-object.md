---
type: cookbook
name: "Change size of a UI object"
summary: "This example shows how you can change the length of a ui object (a slider object in this case) with the patching\\rect message."
chapter: "Max"
keywords: ["slider", "message", "scale", "argument"]
objects: ["scale", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AutomaticallyScaleui.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/AutomaticallyScaleui.PNG"
---

# Change size of a UI object

This example shows how you can change the length of a ui object (a **slider** object in this case) with the *patching\_rect* message. You can use a **scale** object to get the range of width values you want, and control it with a single float, and then use the ‘$1’ argument in a **message** box to insert the width value into the *patching\_rect* message.

## Objects used

`scale`, `slider`

*Patch contains 4 boxes, 3 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AutomaticallyScaleui.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/AutomaticallyScaleui.PNG`
