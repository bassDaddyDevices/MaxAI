---
type: cookbook
name: "Routing a signal to one of two destinations"
summary: "This patch is quite similar to the onoff~ abstraction for \"Turning a signal on or off(turning-signal-or.md)\" with a fade-in or fade-out."
chapter: "MSP"
keywords: ["gate~", "bypass", "control"]
objects: ["!-~", "!=", "*~", "f", "line~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/abgate~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/abgate~.png"
---

# Routing a signal to one of two destinations

This patch is quite similar to the **onoff~** abstraction for "[Turning a signal on or off](turning-signal-or.md)" with a fade-in or fade-out. Instead of just turning the signal on or off, though, this abstraction routes a signal to one of two outlets (with a fade from one to the other), which you can think of as destination A or destination B, based on whether the number in the right inlet is zero or non-zero.

You can effectively use this as an object in place of **gate~ 2**, to avoid clicks when routing a signal out one or the other of two outlets. Just download the patch and save it with the name **abgate~**. The fade time and the initial A/B setting of the object can be typed in as arguments when you create the object, and they will replace the #1 and #2 arguments in this subpatch. If you don't type in the second argument, the object will route the incoming signal to the left outlet by default (the amplitude of the right outlet will be 0). You should always type in a first argument for the fade time, otherwise the fade time would be 0 and the object would cause a click whenever you switch between outlets.

## Objects used

`*~` ×2, `!=`, `t`, `!-~`, `line~`, `f`

*Patch contains 23 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/abgate~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/abgate~.png`
