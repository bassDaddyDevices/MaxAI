---
type: cookbook
name: "Conversion between pitch and frequency"
summary: "The objects mtof and ftom provide easy conversion between MIDI pitch numbers and their equivalent equal-tempered frequency values."
chapter: "Max"
keywords: ["expr", "ftom", "mtof", "pow", "pitch", "frequency"]
objects: ["*", "-", "/", "expr", "ftom", "mtof", "pow", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mtoftom.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mtoftom.png"
---

# Conversion between pitch and frequency

The objects **mtof** and **ftom** provide easy conversion between MIDI pitch numbers and their equivalent equal-tempered frequency values. The purpose of this patch is just to show the conversion formulae that those objects use.

The number of semitones of pitch difference from the base pitch of A above middle C is divided by 12 and used as a power of 2 by which to multiply the base frequency of 440 Hz. Thus, each semitone up from A is an additional twelfth root of two multiplication of the base frequency; each semitone downward is a negative twelfth root of two factor.

The **expr** object allows you to type in any mathematical expression, including some math functions not be found in other objects—e.g., log(), atan(), etc.—using a syntax that’s very similar to C programming language.

## Objects used

`-` ×2, `t` ×2, `expr` ×2, `ftom`, `*`, `pow`, `/`, `mtof`

*Patch contains 23 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mtoftom.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mtoftom.png`
