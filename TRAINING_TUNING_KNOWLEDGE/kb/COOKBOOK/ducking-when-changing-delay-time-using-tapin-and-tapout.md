---
type: cookbook
name: "Ducking when changing delay time using tapin~ and tapout~"
summary: "One possible solution to the problem of clicks occurring when delay time is changed is to fade the amplitude of the delayed sound to 0 just before changing the"
chapter: "MSP"
keywords: ["line~", "pipe", "tapin~", "tapout~", "delay"]
objects: ["*~", "+~", "ezdac~", "gain~", "line~", "pack", "pipe", "sfplay~", "t", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaychangewithducking_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaychangewithducking_0.png"
---

# Ducking when changing delay time using tapin~ and tapout~

One possible solution to the problem of clicks occurring when delay time is changed is to fade the amplitude of the delayed sound to 0 just before changing the delay time, then fade back up immediately after the change. This does avoid clicks, but causes an audible momentary break or dip in the sound. This shows one way you could implement such momentary "ducking" of the amplitude. (The same idea using the **delay~** object can be found in the Ducking when changing delay time example on this site.)

## Objects used

`t` ×2, `gain~` ×2, `sfplay~`, `tapout~`, `tapin~`, `pipe`, `line~`, `pack`, `*~`, `+~`, `ezdac~`

*Patch contains 20 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaychangewithducking_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaychangewithducking_0.png`
