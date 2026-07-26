---
type: cookbook
name: "Modulo operator: %"
summary: "The % object is the arithmetic operator “modulo” (a.k.a."
chapter: "Max"
keywords: ["mod", "modulo", "modulus", "%", "pitch class"]
objects: ["%", "/", "notein", "stripnote"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/modulus12.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/modulus12.png"
---

# Modulo operator: %

The **%** object is the arithmetic operator “modulo” (a.k.a. “mod”), used in [modular arithmetic](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic). Whereas the **/** object (“divided by”) divides the left input by the right input and outputs the quotient, the **%** object divides the left input by the right output and outputs the remainder. (The right input is referred to in this case as the modulus, rather than the divisor.)

The modulo operator is useful when you want a large range of numbers to wrap around, to stay within a smaller range. The most common musical use of the modulo operation is to determine the pitch class (C, C#, D, etc.) of a MIDI note number. There are twelve possible pitch classes, which music theorists often refer to using numbers 0 to 11. Therefore, you can obtain the pitch class of any MIDI pitch by passing it through a **% *12*** object.

## Objects used

`/`, `%`, `stripnote`, `notein`

*Patch contains 15 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/modulus12.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/modulus12.png`
