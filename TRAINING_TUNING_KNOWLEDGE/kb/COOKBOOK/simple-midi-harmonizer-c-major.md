---
type: cookbook
name: "Simple MIDI harmonizer in C major"
summary: "One way to analyze MIDI note information is to use the modulo(modulo-operator.md) operator to determine a note’s pitch class (C, C#, D, etc., regardless of what octave it occurs in)."
chapter: "MIDI"
keywords: ["MIDI", "%", "pitch class", "harmonize", "iter"]
objects: ["%", "coll", "iter", "kslider", "makenote", "notein", "noteout", "stripnote"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/harmonizepitchesinCmajor.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/harmonizepitchesinCmajor.png"
---

# Simple MIDI harmonizer in C major

One way to analyze MIDI note information is to use the [modulo](modulo-operator.md) operator to determine a note’s pitch class (C, C#, D, etc., regardless of what octave it occurs in).

Post-tonal theorists use the numbers 0 to 11 to refer to the chromatic scale of pitch classes C to B; because MIDI uses multiples of 12 as the basis for the note C (…36, 48, 60, 72,…), it’s a simple matter to obtain a note’s pitch class using the **%** object with a modulus argument of *12*.

This patch uses that information to look up an appropriate chord to accompany any note of the C major scale. The **coll** object contains a set of three-note chords to be played in instantaneous response to those notes. The chords come out of the **coll** object as a *list*, and are separated into three individual *int* messages by the **iter** object.

Of course, this is unchanging one-to-one pitch-to-chord relationship is not a very sophisticated method of harmonization. Can you think of one that better suits your own harmonic tastes?

## Objects used

`kslider`, `noteout`, `makenote`, `iter`, `coll`, `%`, `stripnote`, `notein`

*Patch contains 11 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/harmonizepitchesinCmajor.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/harmonizepitchesinCmajor.png`
