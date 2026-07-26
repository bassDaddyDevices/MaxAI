---
type: cookbook
name: "Managing transpositions for sustained MIDI notes"
summary: "When transposing the pitch of sustained incoming MIDI notes, you need to be certain that the note-off message has the same transposition."
chapter: "Max"
keywords: ["MIDI", "gate", "table"]
objects: ["+", "gate", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sustainedMIDInote.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sustainedMIDInote_0.png"
---

# Managing transpositions for sustained MIDI notes

When transposing the pitch of sustained incoming MIDI notes, you need to be certain that the *note-off* message has the same transposition. Otherwise, any time more than one note is played, each subsequent note changes the transposition before the previous note receives its *note-off* message. To solve this you need to keep track of what transposition you give to each incoming note, as illustrated in this example.

## Objects used

`+`, `gate`, `table`

*Patch contains 16 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sustainedMIDInote.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sustainedMIDInote_0.png`
