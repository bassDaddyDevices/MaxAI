---
type: cookbook
name: "Look up chords in an array"
summary: "The coll object allows one to store an indexed collection of messages of any type."
chapter: "Max"
keywords: ["coll", "iter"]
objects: ["coll", "flush", "iter", "metro", "noteout", "pack", "random", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/collforchords.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/collforchords.png"
---

# Look up chords in an array

The **coll** object allows one to store an indexed collection of messages of any type. In this example, each stored message is a list of five numbers that will be used as pitches of a chord. (Double-click on the **coll** to view its contents.) The chords are chosen at random, but they have been composed such that they all have a valid function in C minor, and because they are all five-note jazz chords voiced in a similar manner and range, stylistically any one of the twelve chords sounds reasonable following any other.

The **iter** object breaks up each list into five separate *int* messages, each of which is packed together with the number 100 as a two-item list, and that list is passed to **noteout** as pitch and velocity information.

This patch demonstrates an effective way to provide note-off messages for MIDI notes. Pitch and velocity pairs can be passed through the **flush** object, and **flush** will memorize all pairs that are note-ons––that is, pairs in which the velocity is nonzero; then, when **flush** receives a *bang*, it outputs note-offs for each note-on that it has in memory that has not yet been followed by a note-off. In this patch, each time a *list* comes out of the **coll**, it triggers a *bang* to turn off the held notes of the previous chord before playing the next chord.

## Objects used

`noteout`, `sel`, `metro`, `random`, `pack`, `t`, `flush`, `iter`, `coll`

*Patch contains 18 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/collforchords.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/collforchords.png`
