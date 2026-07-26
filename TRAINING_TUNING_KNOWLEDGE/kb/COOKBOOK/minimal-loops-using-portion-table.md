---
type: cookbook
name: "Minimal loops using a portion of a table"
summary: "This patch composes a melody in Minimal style, playing periodically-varying diatonic melodic loops of different lengths."
chapter: "Max"
keywords: ["metro", "counter", "random", "table", "algorithmic composition"]
objects: ["*", "+", "-", "b", "counter", "makenote", "metro", "noteout", "pgmout", "random", "t", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/minimalloopsusingtable.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/minimalloopsusingtable_0.png"
---

# Minimal loops using a portion of a table

This patch composes a melody in [Minimal style](https://en.wikipedia.org/wiki/Minimal_music), playing periodically-varying diatonic melodic loops of different lengths. A 16-stage sequence of velocity values is stored in one **table**, and a 32-stage sequence of pitch values is stored in another table. The velocity values are carefully chosen to produce a pattern that essentially reinforces a metric interpretation of sixteenth notes in 4/4 meter, with a strongly accented downbeat and moderately accented beats 2, 3, and 4, but with a few other accents that are slightly at odds with the 4/4 interpretation, giving a sense of syncopation. The pitch values are composed using only six different pitch classes (Ab, Bb, C, Db, Eb, F), spanning a two-and-a-half-octave range and with frequent small leaps.

The velocity values are always read in order, so that the impression of a syncopated 4/4 meter is maintained inflexibly. However, the melody is composed by looping different short segments of 3 to 8 values from the pitch table, changing every four measures. The pitch pattern of the melody therefore is frequently implying a different periodicity than the velocities, adding another layer of rhythmic complexity. And because of the frequent small melodic leaps in the pitch patterns combined with the rapid rate of performance, the listener tends to cognitively stream imagined counterpoint within the melody. The periodic changes in pitch pattern and register, combined with the rhythmic variety, keep the music engaging for quite a while.

The patch demonstrates the use of fast and slow **metro** objects for individual events and longer-term events, **counter** objects for cyclic repetition, **random** objects (for crude decision making), and **table** objects (for storing specific patterns of pitches and velocities) to make a minimal composer program that plays chosen patterns from within a stored melody.

## Objects used

`table` ×2, `b` ×2, `counter` ×2, `+` ×2, `random` ×2, `metro` ×2, `t`, `pgmout`, `noteout`, `*`, `makenote`, `-`

*Patch contains 49 boxes, 40 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/minimalloopsusingtable.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/minimalloopsusingtable_0.png`
