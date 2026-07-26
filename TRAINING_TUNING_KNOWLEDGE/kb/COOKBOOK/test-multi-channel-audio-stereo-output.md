---
type: cookbook
name: "Test multi-channel audio with stereo output"
summary: "In the I/O Mappings window within the Audio Status… window you can map the outputs numbered 3-16 to play through outputs 1 or 2 of your available stereo output"
chapter: "MSP"
keywords: ["gain~", "dac~", "noise~", "toggle", "number", "gate~"]
objects: ["dac~", "gain~", "gate~", "noise~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testingMultichannelAudio.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testingMultichannelAudio.png"
---

# Test multi-channel audio with stereo output

In the I/O Mappings window within the Audio Status… window you can map the outputs numbered 3-16 to play through outputs 1 or 2 of your available stereo output device (say, Built-In Audio, for example). This allows for testing patches on hardware that has less than the desired number of channels.

## Objects used

`gain~`, `noise~`, `gate~`, `dac~`

*Patch contains 6 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testingMultichannelAudio.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testingMultichannelAudio.png`
