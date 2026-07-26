---
type: cookbook
name: "Read MIDI pitches from a lookup table"
summary: "To store any series of integer numbers as an array, the table object is most convenient."
chapter: "Max"
keywords: ["MIDI", "table", "counter", "makenote"]
objects: ["!/", "*", "counter", "loadbang", "makenote", "metro", "noteout", "pgmout", "t", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/readMIDIpitchesfromatable_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/readMIDIpitchesfromtable.png"
---

# Read MIDI pitches from a lookup table

To store any series of integer numbers as an array, the **table** object is most convenient. You can look up the stored numbers by referring to their index location within the **table**. Thus, you can read through the numbers in the array, in order, using a **counter** object.

The **makenote** object allows you to easily attach a velocity and a duration to a pitch number. It keeps track of the pitches it has received, and the desired duration of each note, and sends out the same pitch with a velocity of 0 after the specified time interval.

For a smooth, linearly-changing sense of tempo, it's better to refer to the ‘rate’ of events rather than the time interval in milliseconds. (Why is that?) So this patch lets you set and/or modify the note rate, and then converts that into milliseconds for the **metro** object. Note that it also sends the time interval to the right inlet of **makenote** so that the note durations are appropriate for the tempo at which the notes are being generated.

## Objects used

`table`, `counter`, `loadbang`, `t`, `*`, `!/`, `metro`, `makenote`, `pgmout`, `noteout`

*Patch contains 44 boxes, 28 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/readMIDIpitchesfromatable_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/readMIDIpitchesfromtable.png`
