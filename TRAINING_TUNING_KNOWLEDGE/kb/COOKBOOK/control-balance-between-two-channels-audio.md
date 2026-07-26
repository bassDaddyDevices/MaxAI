---
type: cookbook
name: "Control the balance between two channels of audio"
summary: "This abstraction allows you to adjust the balance between two channels of audio."
chapter: "MSP"
keywords: ["balance", "stereo", "amplitude"]
objects: ["!-~", "*~", "+~", "<~", ">~", "clip~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stereobalance.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stereobalance.png"
---

# Control the balance between two channels of audio

This abstraction allows you to adjust the balance between two channels of audio. The audio channels come in the first two inlets, and a control signal comes in the right inlet. When the control signal is 0, the two channels pass through unchanged. As the control signal approaches -1, the amplitude of the right channel is reduced (till completely silent at -1) while the left channel remains unchanged; as the control signal approaches 1, the amplitude of the left channel is reduced (till completely silent at 1) while the right channel remains unchanged.

## Objects used

`*~` ×4, `clip~`, `+~`, `!-~`, `<~`, `>~`

*Patch contains 24 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stereobalance.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stereobalance.png`
