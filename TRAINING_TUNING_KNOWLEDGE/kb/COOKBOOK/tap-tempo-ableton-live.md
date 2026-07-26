---
type: cookbook
name: "Tap Tempo for Ableton Live"
summary: "Following the “Tap Tempo(tap-tempo.md)” example, this is a translation of that patch it into a Max for Live device that controls the Live transport (using the mouse instead of the t key)."
chapter: "Max for Live"
keywords: ["timer", "split", "bucket", "expr", "live.object", "live.path"]
objects: ["!=", "bucket", "expr", "gate", "live.object", "live.path", "loadmess", "pack", "split", "t", "timer"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/TapTempoM4LDeviceContents.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/TapTempoM4LDeviceContents.PNG"
---

# Tap Tempo for Ableton Live

Following the “[Tap Tempo](tap-tempo.md)” example, this is a translation of that patch it into a Max for Live device that controls the Live transport (using the mouse instead of the t key). For the purpose of the example demonstration the code that would reside inside an amxd file is included here inside a Max patch, so you can just see in Max without having to load it into Live.

## Objects used

`live.object`, `live.path`, `loadmess`, `expr`, `pack`, `gate`, `t`, `!=`, `bucket`, `split`, `timer`

*Patch contains 20 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/TapTempoM4LDeviceContents.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/TapTempoM4LDeviceContents.PNG`
