---
type: cookbook
name: "Use MIDI velocity for amplitude envelope"
summary: "This patch converts MIDI velocity values to create an amplitude envelope to control a \\~."
chapter: "MSP"
keywords: ["select", "line~", "dbtoa"]
objects: ["*~", "dbtoa", "line~", "scale", "select", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/vtoa.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/vtoa.png"
---

# Use MIDI velocity for amplitude envelope

This patch converts MIDI velocity values to create an amplitude envelope to control a **\*~**. The [Test MIDI velocity to amplitude (vtoa) abstraction](test-midi-velocity-amplitude-vtoa-abstraction.md) patch shows how this abstraction can be used.

## Objects used

`*~`, `dbtoa`, `scale`, `t`, `select`, `line~`

*Patch contains 17 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/vtoa.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/vtoa.png`
