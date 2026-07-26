---
type: cookbook
name: "Inaccuracy in very large float values"
summary: "Floating-point numbers are necessary for representing fractional numbers, and they're useful for numbers that might range from very small (e.g., 0.000396) to ve"
chapter: "Max"
keywords: ["number", "float", "integer"]
objects: [">", "loadbang"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/floatinaccuracy.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/floatinaccuracy.png"
---

# Inaccuracy in very large float values

Floating-point numbers are necessary for representing fractional numbers, and they're useful for numbers that might range from very small (e.g., 0.000396) to very large, but it's important to bear in mind that they can't possibly represent every possible real number. So there are certain situations in which they misrepresent values. In most cases, that error is so small that it's negligible for real-world musical purposes, but in rare cases it might actually be noticeable, so it's worth at least being aware that [floating-point arithmetic](https://en.wikipedia.org/wiki/Floating-point_arithmetic) does have its inherent problems. This patch shows one such example, in which it misrepresents an extremely large number slightly, and if that number is then converted back to an *int* it will be grossly misrepresented.

## Objects used

`>` ×2, `loadbang`

*Patch contains 8 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/floatinaccuracy.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/floatinaccuracy.png`
