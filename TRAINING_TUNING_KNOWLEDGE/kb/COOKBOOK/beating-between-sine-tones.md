---
type: cookbook
name: "Beating between sine tones"
summary: "This example shows interference between two sine tones that have nearly the same frequency, causing a beating effect."
chapter: "MSP"
keywords: ["cycle~", "sinusoid", "frequency modulation"]
objects: ["*~", "+~", "cycle~", "dac~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinemodulation2.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinemodulation2.png"
---

# Beating between sine tones

This example shows interference between two sine tones that have nearly the same frequency, causing a beating effect. One sine tone is kept at a constant frequency, while the frequency of the other oscillator is continuously modulated up an down by up to 12 Hz, using the technique shown in “[Modulating oscillator](modulating-oscillator.md)”. The two sine tones are added together, and they interfere at a rate equal to the difference between their two frequencies, causing the sense of beating at that rate.

If you set the modulating oscillator’s frequency to 0, it will stop wherever it is, and the difference between the two tones will remain constant. If you set the modulating oscillator’s amplitude to 0, its effect will be nullified, and the two sine tones will be in unison at 440 Hz.

Note that the amplitude of each of the two tones is set to 0.5 so that the sum of the two amplitudes will never exceed 1, which would cause clipping.

## Objects used

`+~` ×5, `*~` ×3, `cycle~` ×3, `scope~` ×2, `dac~`

*Patch contains 34 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinemodulation2.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinemodulation2.png`
