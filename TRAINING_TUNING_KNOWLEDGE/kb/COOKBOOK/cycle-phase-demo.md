---
type: cookbook
name: "Cycle~ phase demo"
summary: "This patch allows you to see how the phase relationship between two sine waves will affect the shape of the waveform when the two are mixed together."
chapter: "MSP"
keywords: ["cycle~", "scope~", "phase offset"]
objects: ["*~", "+~", "cycle~", "dac~", "deferlow", "loadbang", "number~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/cyclePhaseDemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/cyclePhaseDemo.png"
---

# Cycle~ phase demo

This patch allows you to see how the phase relationship between two sine waves will affect the shape of the waveform when the two are mixed together. Initially, it shows a 4-Hz sinusoid and an 8-Hz sinusoid that are one-half cycle out of phase with each other. If you change the phase offset of one of the oscillators, you can see that the waves interfere differently, thus changing the shape of the waveform. However, as listeners we're not very sensitive to such changes in phase relationships, except in certain cases where waves cancel each other in extreme ways. So, usually a change in the phase relationship of two waves will not much change the way it sounds to us. You can try this out by changing the frequencies into the audible range, then changing the phase offset of one of them. (The **scope~** object will no longer show the waveform accurately at those higher frequencies, but you can at least hear the waves.) But if you set the waves to the exact same audible frequency, you will then be able to hear that changing their phase relationship does change the amplitude of their sum, depending on whether they're interfering constructively or destructively.

## Objects used

`number~` ×2, `*~` ×2, `cycle~` ×2, `deferlow`, `loadbang`, `dac~`, `scope~`, `+~`

*Patch contains 31 boxes, 33 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/cyclePhaseDemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/cyclePhaseDemo.png`
