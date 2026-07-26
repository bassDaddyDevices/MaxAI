---
type: cookbook
name: "Fade audio after a given time under a dB threshold"
summary: "The example demonstrates two methods."
chapter: "MSP"
keywords: ["rampsmooth~", "patcherargs", "Peakamp~", "delay", "fade"]
objects: ["*~", "0", "1", ">=", ">=~", "change", "curve~", "delay", "pass~", "patcherargs", "peakamp~", "rampsmooth~", "sel", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delayedAudioFade.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delayedAudioFade.png"
---

# Fade audio after a given time under a dB threshold

The example demonstrates two methods. This first one uses smoothing to create a ramp on and off instead of an instantaneous switch on and off. This second one waits a certain amount of time before it begins the release ramp, and if the input signal goes back above the threshold during that time it cancels the release (the default amplitude threshold being -40 dB).

## Objects used

`pass~` ×2, `*~` ×2, `rampsmooth~`, `>=~`, `unpack`, `patcherargs`, `curve~`, `1`, `0`, `delay`, `sel`, `change`, `peakamp~`, `>=`

*Patch contains 49 boxes, 33 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delayedAudioFade.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delayedAudioFade.png`
