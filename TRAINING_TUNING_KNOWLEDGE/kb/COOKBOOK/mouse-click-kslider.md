---
type: cookbook
name: "Mouse click kslider"
summary: "In this example, you can play notes by pressing the mouse on the kslider object, and when you release the mouse, the notes will be turned off."
chapter: "Max"
keywords: ["mousestate", "flush"]
objects: ["flush", "kslider", "loadmess", "mousestate", "noteout", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mouseclickkslider.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0586 Mouseclick kslider.png"
---

# Mouse click kslider

In this example, you can play notes by pressing the mouse on the **kslider** object, and when you release the mouse, the notes will be turned off. When the mouse button is released, that fact is reported by a *0* from the left outlet of the **mousestate** object. The **sel** object will detect that *0*, and will send a *bang* to the **flush** object. The **flush** object takes pitch and velocity values in its inlets, keeps track of which notes have not yet been turned off with a 0 velocity, and when it gets the message *bang* in its left inlet it sends out all currently held pitches accompanied by a velocity 0 to turn off all the notes. The initial *poll* message to **mousestate** turns on automatic reporting of all changes in the state or position of the mouse. (A *nopoll* message would be used to deactivate that automatic reporting.)

## Objects used

`noteout`, `flush`, `kslider`, `sel`, `loadmess`, `mousestate`

*Patch contains 6 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mouseclickkslider.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0586 Mouseclick kslider.png`
