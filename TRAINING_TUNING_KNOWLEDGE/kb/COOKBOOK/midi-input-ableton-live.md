---
type: cookbook
name: "MIDI Input in Ableton Live"
summary: "This example shows how to listen to a specific MIDI CC in Max for Live."
chapter: "Max for Live"
keywords: ["ctlin", "midiin", "midiselect"]
objects: ["ctlin", "midiin", "midiselect", "select", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIInputOuputDemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIInputOuputDemo.PNG"
---

# MIDI Input in Ableton Live

This example shows how to listen to a specific MIDI CC in Max for Live. Implementing MIDI reception for Max for Live is a little different from implementing it for straight ol’ Max. Instead of using, for example, the **ctlin** object, we need to use **midiin**, and then use **midiselect** to look for exactly what we want. Also, we need to make sure our plug-in is in a Live MIDI track, and that the MIDI monitoring is set to IN.

## Objects used

`select` ×2, `ctlin`, `unpack`, `midiselect`, `midiin`

*Patch contains 8 boxes, 4 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIInputOuputDemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIInputOuputDemo.PNG`
