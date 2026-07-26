---
type: cookbook
name: "Timed linear fade"
summary: "This patch shows how to make a fade-in or a fade-out using the line object (for numbers) or line~ (for a signal)."
chapter: "Max"
keywords: ["line", "line~", "togedge"]
objects: ["ezdac~", "line", "line~", "number~", "pack", "togedge"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timedlinearfade.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timedlinearfade.png"
---

# Timed linear fade

This patch shows how to make a fade-in or a fade-out using the **line** object (for numbers) or **line~** (for a signal). You provide the line (or line~) object with a two-item list signifying a destination value and an amount of time, in milliseconds, to get to the destination. If you wanted to fade the brightness of a video in Jitter, or the amplitude of a sound in MSP, you would specify the fade time (in this example you would do that using the **number** box above the right inlet of **pack**) then the number 1 for a fade-in or 0 for a fade-out. A **toggle** object is useful for this purpose, because it allows you to switch back and forth between 1 and 0.

When **line** or **line~** reaches its destination, it sends a *bang* out its right outlet. You can use this *bang* to trigger something else to happen next, or even to do something like re-trigger the **toggle** to fade back in the opposite direction. The **togedge** object will send a bang alternately out of one of its two outlets each time it receives a *bang*, similarly to the way a **toggle** triggers a *0* or a *1* alternately. In effect, it's like a combination (internally) of a **toggle** object, a **change** object, and a **sel 1 0** object. You can use this to trigger one action when the fade is completed in one direction, and a different action when the fade finishes in the other direction.

## Objects used

`pack` ×2, `togedge` ×2, `ezdac~`, `number~`, `line~`, `line`

*Patch contains 17 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timedlinearfade.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timedlinearfade.png`
