---
type: cookbook
name: "Iterate through Polyphonic MIDI files as simultaneous chords with detonate"
summary: "Load a MIDI file into detonate, send it a “start” message, then send it “next” messages to output each note."
chapter: "Max"
keywords: ["detonate", "noteout", "makenote", "<", "sel"]
objects: ["b", "ctlout", "delay", "detonate", "expr", "makenote", "noteout", "random", "t", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detonateDemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/detonateDemo.png"
---

# Iterate through Polyphonic MIDI files as simultaneous chords with detonate

Load a MIDI file into **detonate**, send it a “start” message, then send it “next” messages to output each note. Notice that the leftmost outlet sends out the delta time (in ms) until the next note in the score; that value can be tested, and if it’s sufficiently small, say under 50 ms for example, that means that the next note is practically simultaneous with the current one. The example then sends an additional ‘next’ message.

## Objects used

`expr` ×5, `noteout`, `t`, `b`, `random`, `uzi`, `detonate`, `delay`, `makenote`, `ctlout`

*Patch contains 25 boxes, 31 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detonateDemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/detonateDemo.png`
