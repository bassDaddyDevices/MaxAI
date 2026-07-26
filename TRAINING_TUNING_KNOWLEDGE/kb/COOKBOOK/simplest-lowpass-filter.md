---
type: cookbook
name: "The simplest lowpass filter"
summary: "Almost all digital filters involve mixing a sound with one or more delayed versions of itself, usually to cause interference and thus change the amplitude at certain frequencies."
chapter: "MSP"
keywords: ["spectroscope~", "delay~", "filters"]
objects: ["*~", "+~", "dac~", "delay~", "noise~", "selector~", "spectroscope~", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplelpf.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplelpf.png"
---

# The simplest lowpass filter

Almost all digital filters involve mixing a sound with one or more delayed versions of itself, usually to cause interference and thus change the amplitude at certain frequencies. The very simplest imaginable example is to delay a sound by exactly one sample, and then take the average of the current sample and the previous (delayed) sample. The result of this averaging process is that the signal is smoothed slightly, reducing the high frequencies: a lowpass filter. A much better lowpass effect can be achieved with a more complicated filter, but this example shows that a delay of one sample, averaging every sample and the previous sample, reduces the amplitude of the highest frequencies, especially those that approach the Nyquist frequency.

## Objects used

`spectroscope~` ×2, `*~` ×2, `selector~`, `umenu`, `dac~`, `+~`, `delay~`, `noise~`

*Patch contains 12 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplelpf.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplelpf.png`
