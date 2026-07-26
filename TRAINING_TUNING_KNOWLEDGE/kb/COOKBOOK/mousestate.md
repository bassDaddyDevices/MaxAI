---
type: cookbook
name: "Mousestate"
summary: "In this example, the horizontal location of the mouse in the screen is used to determine whether to send a bang or not."
chapter: "Max"
keywords: ["screensize", "mousestate", "unpack", "change"]
objects: ["!-", "+", "/", ">=", "change", "gswitch2", "loadbang", "mousestate", "screensize", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mousestate.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0627 Mousestate.png"
---

# Mousestate

In this example, the horizontal location of the mouse in the screen is used to determine whether to send a *bang* or not. The mouse moving from one side of the screen, passing the mid point to the other side of the screen, causes a *bang* to be sent to the **gswitch2** object.

## Objects used

`gswitch2`, `change`, `mousestate`, `>=`, `+`, `/`, `!-`, `unpack`, `loadbang`, `screensize`

*Patch contains 13 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mousestate.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0627 Mousestate.png`
