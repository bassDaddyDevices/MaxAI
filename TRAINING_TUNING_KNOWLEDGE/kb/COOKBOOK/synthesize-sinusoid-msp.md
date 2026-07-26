---
type: cookbook
name: "Synthesize a sinusoid in MSP"
summary: "Synthesizing a sinusoid in MSP is a fairly trivial matter, because the cycle~ object does most of the work for you."
chapter: "Max"
keywords: ["closebang", "dac~", "deferlow", "gain~", "loadbang", "prepend", "providepath", "AIFF file"]
objects: ["*~", "cycle~", "ezdac~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinusoid.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinusoid.png"
---

# Synthesize a sinusoid in MSP

Synthesizing a sinusoid in MSP is a fairly trivial matter, because the **cycle~** object does most of the work for you. It produces a full-amplitude waveform at the requested frequency ƒ and with the requested phase offset φ.

Technically, it’s not really calculating a sinusoid sample-by-sample. It fills a wavetable (an array) with one cycle of the cosine waveform, and then reads through it over and over, changing its increment per sample according to what’s needed to produce the desired frequency, based on the wavetable length and the sampling rate.

Amplification—turning the amplitude A up or down—is achieved by multiplication of the full-amplitude wave. Amplification greater than 1 (or less than -1) will cause clipping of the wave.

## Objects used

`ezdac~`, `*~`, `cycle~`

*Patch contains 11 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinusoid.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinusoid.png`
