---
type: cookbook
name: "sigmund~ for pitch tracking"
summary: "The sigmund~ object is a third-party object for pitch tracking designed by Miller Puckette and Ted Apel, available on their page of downloadable Max objects."
chapter: "MSP"
keywords: ["ducker~", "ezadc~", "histo", "int", "match", "round", "select", "sigmund~", "split", "table", "+"]
objects: ["+", "ducker~", "ezadc~", "histo", "i", "match", "round", "select", "sigmund~", "split", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sigmunddemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sigmunddemo.png"
---

# sigmund~ for pitch tracking

The **sigmund~** object is a third-party object for pitch tracking designed by Miller Puckette and Ted Apel, available on their [page of downloadable Max objects](http://vud.org/max/). You’ll need to have it installed for this example to work. Why is it called **sigmund~**? ‘Cause it’s your analyst, I assume! You might also want to have downloaded ducker~.maxpat from "[A useful noise gate (ducker) subpatch for rejecting unwanted sounds](useful-noise-gate-ducker-subpatch-rejecting-unwanted-sounds.md)", so you can try it out in conjunction with **sigmund~**.

To have **sigmund~** attempt to discern discrete notes rather than give a continuous pitch evaluation, use the ‘notes’ argument. Pitches are reported using MIDI-based numbering, but using float values to show fractions of semitones. In most cases, it works better to round those values rather than truncate them, for more accurate representation of the intended pitch.

## Objects used

`i`, `round`, `ducker~`, `table`, `histo`, `match`, `split`, `select`, `+`, `sigmund~`, `ezadc~`

*Patch contains 34 boxes, 17 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sigmunddemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sigmunddemo.png`
