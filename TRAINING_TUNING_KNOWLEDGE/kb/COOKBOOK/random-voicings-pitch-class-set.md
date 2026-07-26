---
type: cookbook
name: "Random voicings of a pitch class set"
summary: "A chord can be described as a pitch class set."
chapter: "Max"
keywords: ["MIDI", "iter", "random", "makenote"]
objects: ["*", "+", "iter", "makenote", "noteout", "random", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/randomrevoicings.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/randomrevoicings.png"
---

# Random voicings of a pitch class set

A chord can be described as a pitch class set. For example, a C dominant ninth chord is the pitch class set {0,2,4,7,10}. Depending on the octave transposition of each of those five pitch classes, many voicings of the chord are possible. This patch take applies a transposition of four, five, six, or seven octaves to each of the five pitch classes to create a random voicing of the chord.

First the list is broken up into five individual messages by the **iter** object. Then for each of those numbers, the **trigger** object (**t**) first sends out a bang to choose a transposition of 48, 60, 72, or 84, then sends out the pitch class to be added to that transposition. The five pitches are played practically simultaneously with a velocity of 100, and 1 second later **makenote** sends out a note-off for all five notes.

## Objects used

`+` ×2, `noteout`, `makenote`, `*`, `random`, `t`, `iter`

*Patch contains 19 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/randomrevoicings.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/randomrevoicings.png`
