---
type: cookbook
name: "Sigmoid vs Sinusoid acceleration control"
summary: "You can calculate the desired acceleration/deceleration curve using expr."
chapter: "Max"
keywords: ["expr", "sigmoid", "sinusoid", "acceleration", "deceleration", "line", "sigmund"]
objects: ["1.", "==", "b", "del", "expr", "line", "pack", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/0470 SigmundvsSinusoidAccelerationControl.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sigmundvssinusoidaccelerationcontrol.png"
---

# Sigmoid vs Sinusoid acceleration control

You can calculate the desired acceleration/deceleration curve using **expr**. The smoothest acceleration/deceleration is exhibited by simple harmonic motion (like the swinging of a pendulum), which would be a sinusoidal curve rather than a sigmoid curve (and a sigmoid is theoretically asymptotic, i.e. never truly reaches its goal). You can calculate either with **expr**. Here’s an example comparing the two.

## Objects used

`slider` ×2, `expr` ×2, `==`, `1.`, `pack`, `del`, `b`, `line`

*Patch contains 18 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/0470 SigmundvsSinusoidAccelerationControl.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sigmundvssinusoidaccelerationcontrol.png`
