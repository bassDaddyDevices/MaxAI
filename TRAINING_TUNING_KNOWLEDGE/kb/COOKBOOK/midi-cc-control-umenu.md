---
type: cookbook
name: "MIDI cc to control umenu"
summary: "To get the values of only one particular continuous controller, use the ctlin object, or use the route object to parse the controller data coming out of midiparse."
chapter: "Max"
keywords: ["midiparse", "ctlin", "route", "scale", "MIDI"]
objects: ["*", "/", "change", "ctlin", "midiin", "midiparse", "route", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIcctocontrolumenu.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIcctocontrolumenu.png"
---

# MIDI cc to control umenu

To get the values of only one particular continuous controller, use the **ctlin** object, or use the **route** object to parse the controller data coming out of **midiparse**. To change one range of values into another, use simple math (usually one multiplication and one addition will be enough), or use the **scale** object.

## Objects used

`umenu`, `change`, `/`, `*`, `ctlin`, `route`, `midiparse`, `midiin`

*Patch contains 20 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIcctocontrolumenu.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIcctocontrolumenu.png`
