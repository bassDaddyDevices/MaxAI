---
type: cookbook
name: "Set minimum and maximum of two dials"
summary: "This example shows how you can have two dials be “aware” of each other’s value, to constrain their minimum and maximum output."
chapter: "Max"
keywords: ["minimum", "maximum", "dial", "live.dial", "clip"]
objects: ["clip", "live.dial"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/minmaxdials.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/minmaxdials.png"
---

# Set minimum and maximum of two dials

This example shows how you can have two dials be “aware” of each other’s value, to constrain their minimum and maximum output. If you want to have two dials (or any user interface objects) that show a minimum value and a maximum value, but don’t want the minimum to exceed the maximum, you can use the value of the Min dial to constrain the minimum of the Max dial, and use the value of the Max dial to contrain the maximum of the Min dial.

Inside the **p minmaxcontrol** subpatch, we use **clip** object to constrain each **live.dial**’s output, and the value from each dial resets the constraints of the other dial’s **clip** object, and also resets its own position to stay within its own constraints.

## Objects used

`clip` ×2, `live.dial` ×2

*Patch contains 15 boxes, 16 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/minmaxdials.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/minmaxdials.png`
