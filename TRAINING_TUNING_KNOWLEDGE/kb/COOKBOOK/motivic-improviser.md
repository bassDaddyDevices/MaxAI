---
type: cookbook
name: "Motivic \"improviser\""
summary: "This patch enacts a particular type of improvisational behavior, playing a partial statement of a stored motivic phrase."
chapter: "Max"
keywords: ["counter", "coll", "random"]
objects: ["+", "coll", "counter", "delay", "makenote", "metro", "noteout", "random", "select", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/partofamotive.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/partofamotive.png"
---

# Motivic "improviser"

This patch enacts a particular type of improvisational behavior, playing a partial statement of a stored motivic phrase. The phrase is stored in a **coll** (collection) object, as an ordered array of lists, with each list containing three numbers: pitch, velocity, and duration for a MIDI note message. Each time a message comes in the inlet, the patch chooses a transposition of the motive at random, chooses a number of notes to play, and starts a **metro** to begin counting through the numbered items in the **coll**. When the patch has played the chosen number of notes (based on the numbers coming out of the **counter**), the **select** object stops the **metro** and, after waiting for the last note to finish, sends out a *bang* to indicate that its phrase is done.

From a musical standpoint, the stored motive is planned in such a way to work well with this kind of treatment. Notice that some indices in the **coll** are missing, which creates a distinctive and recognizable syncopated rhythm (or some part of it) each time the motive is played. The pitches are chosen to create an atonal disjunct phrase, focusing on intervals of a perfect fifth or tritone, and using 11 different pitches in the 14-note phrase. Thus, each time the improviser plays something, it has the distinctive rhythm, pitch contour, and atonality of the stored phrase, but always at a different transposition and truncated by a different amount.

This particular abstraction, a patch meant to be used inside another patch, has a straightforward communication protocol: any message in its inlet gets converted to *bang* and starts the process, and when the process is done, it sends a *bang* out its outlet to indicate completion. This abstraction is used inside another example, titled "[Choose from among multiple processes](choose-among-multiple-processes.md)".

## Objects used

`+` ×3, `random` ×2, `unpack`, `delay`, `select`, `noteout`, `makenote`, `coll`, `counter`, `metro`

*Patch contains 26 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/partofamotive.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/partofamotive.png`
