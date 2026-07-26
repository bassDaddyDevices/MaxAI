---
type: cookbook
name: "Irrationally out-of-sync phasors"
summary: "Two oscillators with a ratio of frequencies that's an irrational number will never have exactly the same phase relationship."
chapter: "MSP"
keywords: ["phasor~", "*~", "+~", "scope~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "phasor~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/irrationallyoutofsyncphasors.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/irrationallyoutofsyncphasors.png"
---

# Irrationally out-of-sync phasors

Two oscillators with a ratio of frequencies that's an irrational number will never have exactly the same phase relationship. So, **phasor~** objects that have an irrational frequency relationship, when combined, will create a rhythm that never exactly repeats. In this example, you can hear that the sum of the two **phasor~** objects with a constantly changing relationship will create a constantly changing rhythm.

## Objects used

`*~` ×3, `+~` ×2, `phasor~` ×2, `scope~`, `ezdac~`, `cycle~`

*Patch contains 22 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/irrationallyoutofsyncphasors.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/irrationallyoutofsyncphasors.png`
