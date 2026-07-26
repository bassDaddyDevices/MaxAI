---
type: cookbook
name: "Pitch tracking with sigmund~"
summary: "The sigmund~ object is not a standard Max object; it’s a “third-party” object for Macintosh by Miller Puckette that you you can download and install on your com"
chapter: "MSP"
keywords: ["pitch tracking", "sigmund~"]
objects: ["ezadc~", "f", "round", "scale", "sigmund~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pitchtracking.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pitchtracking.png"
---

# Pitch tracking with sigmund~

The **sigmund~** object is not a standard Max object; it’s a “third-party” object for Macintosh by Miller Puckette that you you can [download](http://vud.org/max/) and install on your computer so that it behaves just like any standard MSP object.

This patch shows **sigmund~** in its most basic usage: to detect the pitch and amplitude of specific notes of an input sound.

Note that it reports the pitch as a quasi-MIDI key number value, but it includes a fractional part (which does not exist in true MIDI) for greater specificity of pitch evaluation. It’s wise, therefore, to **round** that value to the nearest integer if you want to detect a particular played pitch and/or you want to use that pitch as a MIDI key number. The amplitude is reported in (positive) decibels above a minimum threshold. Here we use **scale** to recast that amplitude as a MIDI velocity.

## Objects used

`scale`, `round`, `f`, `t`, `ezadc~`, `sigmund~`

*Patch contains 10 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pitchtracking.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pitchtracking.png`
