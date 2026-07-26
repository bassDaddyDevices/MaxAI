---
type: cookbook
name: "Synchronize MIDI note duration to a transport with translate"
summary: "This exmaple demonstrates how to synchronize MIDI note length with a tempo determined by the transportobject."
chapter: "Max"
keywords: ["message", "loadmess", "makenote", "translate", "flonum", "transport", "umenu", "number"]
objects: ["loadmess", "makenote", "translate", "transport", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/syncMIDINoteDurationToTempo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/syncMIDINoteDurationToTempo.png"
---

# Synchronize MIDI note duration to a transport with translate

This exmaple demonstrates how to synchronize MIDI note length with a tempo determined by the **transport**object. The **translate** object has a "transport" attribute which allows control through the **transport** object.

## Objects used

`loadmess` ×2, `makenote`, `transport`, `umenu`, `translate`

*Patch contains 9 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/syncMIDINoteDurationToTempo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/syncMIDINoteDurationToTempo.png`
