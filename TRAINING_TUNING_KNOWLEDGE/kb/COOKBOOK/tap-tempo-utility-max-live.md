---
type: cookbook
name: "Tap tempo utility in Max for Live"
summary: "This patch is, in many ways, identical to the patch shown in \"Tap to teach tempo to Max(tap-teach-tempo-max.md)\", but in this instance it's implemented in a way"
chapter: "Max for Live"
keywords: ["bucket", "expr", "live.path", "live.object"]
objects: ["!=", "bucket", "expr", "gate", "live.object", "live.path", "loadmess", "pack", "split", "t", "timer"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/taptempo4live.amxd_.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/taptempo4live.amxd_.png"
---

# Tap tempo utility in Max for Live

This patch is, in many ways, identical to the patch shown in "[Tap to teach tempo to Max](tap-teach-tempo-max.md)", but in this instance it's implemented in a way that will work as a device in Max for Live. Instead of setting the *tempo* attribute of the Max **transport** object, we're setting the *tempo* property of the **live\_set** object in the [Live Object Model](https://docs.cycling74.com/max8/vignettes/live_object_model). The **loadmess** object (which could just as well be a **live.thisdevice** object in Max for Live), queries the ID of the live\_set and passes it to the **live.object** object. Thus, a *set tempo* message to that **live.object** will be addressing the *tempo* property of the current Song (live\_set).

Note: In this patch we use the **button** object to tap the tempo. If you use **live.button** instead, the patch will work the same way, but with the difference that you can map the **live.button** to be triggered by a keystroke or a MIDI message.

## Objects used

`live.object`, `live.path`, `loadmess`, `expr`, `pack`, `gate`, `t`, `!=`, `bucket`, `split`, `timer`

*Patch contains 20 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/taptempo4live.amxd_.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/taptempo4live.amxd_.png`
