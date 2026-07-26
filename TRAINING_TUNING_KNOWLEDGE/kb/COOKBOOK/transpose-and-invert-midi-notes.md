---
type: cookbook
name: "Transpose and invert MIDI notes"
summary: "This patch demonstrates a couple of very simple sorts of transformations that could be imposed on incoming MIDI pitch values before sending them on to a synthesizer."
chapter: "Max"
keywords: ["invert", "MIDI", "!-", "pgmout"]
objects: ["!-", "+", "notein", "noteout", "pgmout"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/transpose+invert.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/transpose+invert2.png"
---

# Transpose and invert MIDI notes

This patch demonstrates a couple of very simple sorts of transformations that could be imposed on incoming MIDI pitch values before sending them on to a synthesizer. One is transposition, achieved by adding a certain number of semitones to the MIDI pitch value (and sending it out with the same velocity values as were in the incoming note messages). Another is inversion, which is achieved by choosing an axis of transposition, doubling that, and subtracting the pitch from it; so if we want to invert the incoming notes around the pitch axis 64.5 (the crack between E and F that is right at the center of the piano), we subtract the pitch from 129. The **!-** object means "subtract the left input from the right input", as opposed to the **-** object which means "subtract the right input from the left input".

The transposition is sent to a synthesizer on MIDI channel 1, and the inversion is sent to a synth on MIDI channel 2. You can change the timbre (i.e., the patch number) on each of those MIDI channels by sending a program change message to the pgmout objects.

## Objects used

`pgmout` ×2, `noteout` ×2, `!-`, `+`, `notein`

*Patch contains 12 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/transpose+invert.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/transpose+invert2.png`
