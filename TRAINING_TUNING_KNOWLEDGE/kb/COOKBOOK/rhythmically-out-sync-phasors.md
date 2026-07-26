---
type: cookbook
name: "Rhythmically out-of-sync phasors"
summary: "Two low-frequency phasor~ objects with slightly different frequencies can create a rhythmic pattern determined by the ratio of the periodicities of the two LFOs."
chapter: "MSP"
keywords: ["phasor~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "phasor~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/rhythmicallyoutofsyncphasors.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/rhythmicallyoutofsyncphasors_.png"
---

# Rhythmically out-of-sync phasors

Two low-frequency **phasor~** objects with slightly different frequencies can create a rhythmic pattern determined by the ratio of the periodicities of the two LFOs. As an example, this patch uses two **phasor~** objects with a frequency ratio of 4.5:4, which, when added together, create a 9:8 rhythmic ratio that repeats every two seconds. That pattern is scaled and offset and used to provide frequency information to a **cycle~** object, which is being used as the carrier oscillator. The result is a jagged glissando with a particular pattern and rhythm. If the frequencies of the two **phasor~**objects are changed to a different ratio relationship, a different pattern will result.

## Objects used

`*~` ×3, `+~` ×2, `phasor~` ×2, `scope~`, `ezdac~`, `cycle~`

*Patch contains 22 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/rhythmicallyoutofsyncphasors.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/rhythmicallyoutofsyncphasors_.png`
