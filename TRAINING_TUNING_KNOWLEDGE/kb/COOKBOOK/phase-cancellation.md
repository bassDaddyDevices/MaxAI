---
type: cookbook
name: "Phase cancellation"
summary: "When two sinusoidal waves have the same frequency, amplitude, and phase, they constructively interfere; the amplitude of their sum is twice the amplitude of each one alone."
chapter: "MSP"
keywords: ["cycle~", "scope~"]
objects: ["*~", "+~", "cycle~", "dac~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasecancellation.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasecanellation_1.png"
---

# Phase cancellation

When two sinusoidal waves have the same frequency, amplitude, and phase, they constructively interfere; the amplitude of their sum is twice the amplitude of each one alone. When they are exactly one half cycle out of phase, however, they completely interfere, and cancel each other out entirely; one always is positive when the other is negative, so their sum is always zero. When their phase relationship is somewhere in between those two extremes, the frequency of the sum will stay the same, but the amplitude and phase will change.

This patch allows you to explore that phenomenon by adding together two identical sinusoids and altering the phase offset of one of them. In Max, the right inlet of a **cycle~** object allows you to add a phase offset to the sinusoid produced by that object. The phase offset is specified as a fraction of a cycle of the wave, so a phase offset value of 0.5 in **cycle~** means a phase offset of 180 degrees (pi radians), exactly one half cycle. Try changing the phase offset value and see how the amplitude of the sum is affected. (Note that the sum is being multiplied by a constant value of 0.5, to keep the amplitude of the sum from exceeding the range of the oscilloscope.)

## Objects used

`cycle~` ×2, `dac~`, `*~`, `scope~`, `+~`

*Patch contains 9 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasecancellation.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasecanellation_1.png`
