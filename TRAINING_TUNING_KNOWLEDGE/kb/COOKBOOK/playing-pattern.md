---
type: cookbook
name: "Playing a pattern"
summary: "These patches use timed counting—in both cases using a metro object and a counter—to step through a series of MIDI notes."
chapter: "Max"
keywords: ["metro", "counter", "select", "makenote", "noteout", "pgmout", "coll"]
objects: ["coll", "counter", "makenote", "metro", "noteout", "pgmout", "select", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playingapattern.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playingapattern.png"
---

# Playing a pattern

These patches use timed counting—in both cases using a **metro** object and a **counter**—to step through a series of MIDI notes.

The example on the left sets the **counter** to count from 60 to 72, incrementing the count each time a *bang* is received from the **metro**. The numbers coming out of the **counter**are used directly as pitch values, to play a chromatic scale from middle C up to the C an octave above that. A **select** object is used to detect when the count has arrived at 72, and that triggers a message of 0 to the **toggle** to turn off the **metro**.

The example on the right uses the numbers 0 to 7 from a **counter** to look up pitch and velocity values that are stored in a **coll** (collection) object. Double-click the **coll** object to see its contents. Each line of the **coll** begins with an 'index' number (followed by a comma) that will be used to look up a message, then the message that will be sent out, then a semicolon to end the line. When an index number is received in the inlet of **coll**, the associated message will be sent out. Because the messages go to a **makenote** object, the numbers will be interpreted as the pitch and velocity values of a constructed MIDI note-on message. The messages in the **coll** form a pattern, playing a two-octave arpeggiation of a Cmaj7 chord, with diminishing velocities (i.e. a diminuendo). Because there is no automated stopping condition, the **counter** will proceed incessantly in a loop from 0 to 7 until the **metro** is stopped.

## Objects used

`select` ×3, `makenote` ×2, `noteout` ×2, `t` ×2, `counter` ×2, `metro` ×2, `coll`, `pgmout`

*Patch contains 29 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playingapattern.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playingapattern.png`
