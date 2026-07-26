---
type: cookbook
name: "Linear and exponential"
summary: "This patch demonstrates the sound of linear and exponential changes in pitch and amplitude."
chapter: "MSP"
keywords: ["pitch", "frequency", "linear interpolation", "exponential", "logarithmic", "decibel", "line~", "phasor~"]
objects: ["*~", "+~", "dbtoa~", "ezdac~", "line~", "mtof~", "phasor~", "saw~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linear&exponential01.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linear&exponential01.png"
---

# Linear and exponential

This patch demonstrates the sound of linear and exponential changes in pitch and amplitude.

In the left side of the patch, clicking on the button causes a linear change in pitch (which is to say an exponential change in frequency) from low A (MIDI key number 33, 55 Hz fundamental, three ledger lines below the grand staff) to high A (MIDI key number 81, 880 Hz, the ledger line above the grand staff). At the same time, it effects an immediate 10 ms rise in amplitude to -6 dB followed by about an 8-second diminuendo to -18 dB, followed by a much more precipitous dropoff to complete silence in the next four seconds; all these changes are specified linearly in dB, so they cause exponential changes in absolute amplitude.

On the right side of the patch, a **phasor~** with a frequency of -1 Hz causes a linear downward ramp from 1 to 0 every second; that ramp is used to control amplitude (from 1 to 0) and frequency (from 1760 Hz to 220 Hz). Linear changes of frequency and amplitude cause a perceptual effect of logarithmic changes (inverse exponential change) in pitch and loudness.

## Objects used

`*~` ×3, `ezdac~` ×2, `saw~` ×2, `line~` ×2, `+~`, `phasor~`, `dbtoa~`, `mtof~`

*Patch contains 18 boxes, 21 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linear&exponential01.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linear&exponential01.png`
