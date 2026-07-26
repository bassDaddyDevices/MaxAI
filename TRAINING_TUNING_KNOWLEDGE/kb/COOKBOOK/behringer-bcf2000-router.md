---
type: cookbook
name: "Behringer BCF2000 router"
summary: "To work properly, this patch requires the abstraction BCF2000.maxpat and the related graphic file \"BCF2000.jpg\"."
chapter: "Max"
keywords: ["Behringer BCF2000", "router", "control", "coll", "route"]
objects: ["BCF2000", "coll", "pack", "pcontrol", "r", "route", "swap", "textbutton"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/BCF2000router.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/BCF2000router.png"
---

# Behringer BCF2000 router

To work properly, this patch requires the abstraction [BCF2000.maxpat](http://music.arts.uci.edu/dobrian/maxcookbook/sites/default/files/BCF2000.maxpat) and the related graphic file "[BCF2000.jpg](http://music.arts.uci.edu/dobrian/maxcookbook/sites/default/files/BCF2000.jpg)".

This example shows how you can use the messages from the Behringer BCF2000 emulator, which is explained in the example "[Behringer BCF2000 emulator](behringer-bcf2000-emulator.md)" (or from an actual BCF2000 via the emulator patch), and route the vital data to named **receive** objects in another Max patch.

Double-click on the "BCF2000" **textbutton**, which will trigger an *open* message to a **pcontrol** object to open the **BCF2000** emulator subpatch. Move one of the **slider**s in the subpatch, and you'll see the MIDI information displayed not only in the subpatch, but also in the main patch. This information is going into the **coll** object, which uses the controller number to look up the name of a **receive** object, and then transmits the controller value to any **receive** objects with that name. Double-click on the **coll** object to see the names.

If you want to see how this is working, leave Presentation mode to see all the objects in the patch. You could use this scheme to route data from a hardware MIDI controller (or in this case the BCF2000 patch) to named **receive** objects, or (as is shown if you scoll down in the patch) if you prefer to use patch cords instead of receive objects, you could use **swap** and **pack** to combine the controller number and the control value as a two-item list, then use **route** objects to route the control value to a specific outlet.

## Objects used

`r` ×36, `route` ×6, `pack` ×2, `pcontrol`, `textbutton`, `coll`, `swap`, `BCF2000`

*Patch contains 111 boxes, 59 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/BCF2000router.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/BCF2000router.png`
