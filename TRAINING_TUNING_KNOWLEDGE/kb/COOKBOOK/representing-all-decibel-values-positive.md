---
type: cookbook
name: "Representing all decibel values as positive"
summary: "Is it possible to see decibel values that start at 0 dB so that the values are all positive?"
chapter: "Max"
keywords: ["flonum", "expr"]
objects: ["0.", "expr", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/positiveDecibels.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/positiveDecibels_0.png"
---

# Representing all decibel values as positive

Is it possible to see decibel values that start at 0 dB so that the values are all positive? Yes, you just need to decide what you want to use as your 0 dB reference amplitude. In digital audio, an amplitude of 1 is used as the 0 dB reference. In measuring real-world sound, the human threshold of hearing at 1 KHz (something like .0002 microbar) is usually used as the 0 dB reference value. Here’s an example using (roughly) the smallest obtainable nonzero amplitude in a 16-bit signal as the reference value, yielding a scale from about 0 to 90 dB.

## Objects used

`0.`, `sel`, `expr`

*Patch contains 5 boxes, 5 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/positiveDecibels.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/positiveDecibels_0.png`
