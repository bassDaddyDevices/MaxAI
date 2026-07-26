---
type: cookbook
name: "Tap Tempo"
summary: "This example shows a super simple tap tempo implementation."
chapter: "Max"
keywords: ["transport", "timer", "split", "bucket", "expr", "metro"]
objects: ["!=", "96", "bucket", "expr", "gate", "key", "makenote", "metro", "noteout", "pack", "select", "split", "t", "timer", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/TapTempo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/TapTempo.PNG"
---

# Tap Tempo

This example shows a super simple tap tempo implementation. The patch alters the **transport** tempo based on the rate at which you tap the “t” key. This method simply takes the average of the most recent three time intervals between the most recent four taps. So once you tap four times, it will set the **transport** tempo to your tempo, and if you keep tapping it responds to your changes but takes a couple beats to move gradually to your new tempo.

For more on this tap tempo implementation, see "[Tap Tempo for Ableton Live](tap-tempo-ableton-live.md)".

## Objects used

`noteout`, `makenote`, `96`, `metro`, `transport`, `expr`, `pack`, `gate`, `t`, `!=`, `bucket`, `split`, `timer`, `select`, `key`

*Patch contains 25 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/TapTempo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/TapTempo.PNG`
