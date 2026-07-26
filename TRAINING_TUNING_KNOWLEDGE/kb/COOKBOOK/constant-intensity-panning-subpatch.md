---
type: cookbook
name: "Constant-intensity panning subpatch"
summary: "This pan~ subpatch takes one signal in the left inlet, and sends it out each of two outlets."
chapter: "MSP"
keywords: ["abstraction", "panning", "intensity", "cycle~", "cosine", "stereo"]
objects: ["*~", "+~", "cycle~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pan~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pan~.png"
---

# Constant-intensity panning subpatch

This **pan~** subpatch takes one signal in the left inlet, and sends it out each of two outlets. The amplitude gain for each outlet is determined by a panning value supplied in the right inlet. This value can be supplied as a typed-in argument in the main patch, as a float value, or as a control signal.

In order to change the panning without changing the over-all intensity of the sound, we need to use gain values for the two channels which, when squared, will add up to 1. (The reason why this is so is explained in most computer audio textbooks such as Moore's *Elements of Computer Music*, Roads's *The Computer Music Tutorial*, or Dodge and Jerse's *Computer Music*. In short, the perceived intensity of two sounds is proportional to the sum of the squares of their amplitudes.) Because of a trigonometric identity, values that will add up to 1 when squared can be found at corresponding locations on the first 1/4 cycle of a cosine and sine wave. So rather than do two square root calculations for every audio sample, it's computationally more efficient to "look up" the value by using the panning value as the phase offset on a 0 Hz **cycle~** object.

This patch is useful any time you want to do simple constant-intensity panning of a single sound source to two different channels. Download it and save it with the name "pan~" and it will work as a subpatch in other patches.

## Objects used

`*~` ×3, `cycle~` ×2, `+~`, `sig~`

*Patch contains 16 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pan~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pan~.png`
