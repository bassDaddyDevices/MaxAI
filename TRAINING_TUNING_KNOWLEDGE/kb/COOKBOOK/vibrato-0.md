---
type: cookbook
name: "Vibrato"
summary: "In music the term vibrato (Italian for “vibrated”) means small repetitive fluctuations of pitch and loudness in a tone."
chapter: "MSP"
keywords: ["vibrato", "cycle~", "frequency modulation"]
objects: ["*~", "+~", "cycle~", "dac~", "live.gain~", "loadbang", "loadmess"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplevibrato.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplevibrato.png"
---

# Vibrato

In music the term *vibrato* (Italian for “vibrated”) means small repetitive fluctuations of pitch and loudness in a tone. Singers and instrumentalists use vibrato intentionally to add interest and expressivity to their sound.

In computer music the term vibrato refers to repetitive fluctuations of frequency (not amplitude), most commonly achieved by means of frequency modulation—using the output of a low-frequency oscillator to modulate (vary) the frequency of an audio-frequency oscillator. A separate term, *tremolo*, (derived from *tremolando*, Italian for “trembling”) is used for repetitive loudness changes due to amplitude modulation.

Thus, in computer music we make a distinction between vibration (frequency) and tremolo (amplitude), whereas in physical instruments the two are commonly combined and synchronized for expressive effect.

This example demonstrates and explains how to program the effect of vibrato by means of frequency modulation by an LFO.

## Objects used

`cycle~` ×2, `live.gain~`, `loadbang`, `+~`, `*~`, `dac~`, `loadmess`

*Patch contains 29 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplevibrato.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplevibrato.png`
