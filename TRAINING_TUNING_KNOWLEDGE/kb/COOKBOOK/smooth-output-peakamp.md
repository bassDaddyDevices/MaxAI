---
type: cookbook
name: "Smooth Output of Peakamp~"
summary: "The peakamp~ object can be used to take the amplitude of one signal and have it control the amplitude of another."
chapter: "Max"
keywords: ["Peakamp~", "line~", "envelopes", "amplitude", "envelope-follower", "dac~"]
objects: ["dac~", "line~", "number~", "pack", "peakamp~", "scope~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/SmoothPeakampOutput.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/smoothoutputofpeakamp.png"
---

# Smooth Output of Peakamp~

The **peakamp~** object can be used to take the amplitude of one signal and have it control the amplitude of another. **Peakamp~** takes a low-frequency sample of the peak amplitude of the signal, which is then smoothed by the **line~** object. This gives an intuitively much more accurate representation of the audio signal one is envelope-following than does smoothing the audio signal itself, which tends to smooth out — and thus lose — all the more interesting characteristics of the signal. Here’s an example that lets you compare. When using a signal with sharp sudden changes in amplitude (e.g. a snare drum) as the control signal, the sharp attack is greatly attenuated by smoothing the audio signal, but is retained by tracking the peak amplitude.

## Objects used

`scope~` ×2, `dac~`, `number~`, `line~`, `pack`, `peakamp~`, `sfplay~`

*Patch contains 13 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/SmoothPeakampOutput.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/smoothoutputofpeakamp.png`
