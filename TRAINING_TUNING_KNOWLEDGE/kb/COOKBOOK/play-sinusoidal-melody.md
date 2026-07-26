---
type: cookbook
name: "Play a sinusoidal melody"
summary: "How would you go about playing a melody (or arpeggio) that has a sinusoidal shape?"
chapter: "Max"
keywords: ["sine", "buffer~", "peek~", "MIDI"]
objects: ["!/", "%", "*", "+", "b", "buffer~", "f", "kslider", "loadbang", "makenote", "metro", "noteout", "peek~", "prepend", "round", "t", "table", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinenotes.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinenotes.png"
---

# Play a sinusoidal melody

How would you go about playing a melody (or arpeggio) that has a sinusoidal shape? Using a steadily increasing number, you can step repeatedly through a sine function stored in a lookup table, and then scale and offset the result to be in the desired pitch range. So, the parameters you’d need to decide on are the rate at which you want to step through the sine function, the number of notes you want per cycle, the amplitude of the sine (in semitones), the center pitch (offset), the scale you want to map the results to, and a key transposition at the end.

In this patch we use the **buffer~** object as a lookup table containing 512 samples of a sine function. Although **buffer~** is ostensibly an MSP object, with **peek~** you can treat it simply as an array of floats, and MSP doesn't even need to be on. A lookup table of 512 samples of one cycle of a sine wave is sufficient resolution for MIDI note purposes, and by reading through it you get sinusoidally-changing values between -1 and 1. We use the *tempo* attribute of **transport** to set the rate for a **metro** banging every 16th note. The number of notes per cycle is used to determine the increment through the sine function.

The amplitude of the sinusoid is scaled to determine the pitch range, and the shape Is then offset to determine the center pitch. We use a lookup table of pitches that belong to a particular scale (in this case we can choose between chromatic, a major scale with blue notes added, or a harmonic minor scale), and then add a final offset to transpose the scale.

## Objects used

`table` ×4, `+` ×3, `*` ×2, `f` ×2, `kslider`, `prepend`, `transport`, `metro`, `loadbang`, `noteout`, `makenote`, `round`, `peek~`, `buffer~`, `%`, `t`, `!/`, `b`

*Patch contains 49 boxes, 43 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinenotes.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinenotes.png`
