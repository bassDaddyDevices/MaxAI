---
type: cookbook
name: "Choosing one of two signals"
summary: "This patch is similar to the abgate~ abstraction for \"Routing a signal to one of two destinations(routing-signal-one-two-destinations.md)\" with a fade from one to the other."
chapter: "MSP"
keywords: ["switch", "bypass", "control"]
objects: ["!-~", "!=", "*~", "+~", "f", "line~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/abswitch~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/abswitch~.png"
---

# Choosing one of two signals

This patch is similar to the **abgate~** abstraction for "[Routing a signal to one of two destinations](routing-signal-one-two-destinations.md)" with a fade from one to the other. However, instead of routing one input signal to one of two outlets, this abstraction permits you to choose one of two input signals to send out its lone outlet.

You can effectively use this as an object in place of **selector~ 2**, to avoid clicks when selecting between one or the other of two input signals. Just download the patch and save it with the name **abswitch~**. The fade time and the initial A/B setting of the object can be typed in as arguments when you create the object, and they will replace the #1 and #2 arguments in this subpatch. If you don't type in the second argument, the object will output the signal that's coming in the left inlet by default. You should always type in a first argument for the fade time, otherwise the fade time would be 0 and the object would cause a click whenever you switch between inlets.

## Objects used

`!-~`, `+~`, `*~`, `!=`, `t`, `line~`, `f`

*Patch contains 22 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/abswitch~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/abswitch~.png`
