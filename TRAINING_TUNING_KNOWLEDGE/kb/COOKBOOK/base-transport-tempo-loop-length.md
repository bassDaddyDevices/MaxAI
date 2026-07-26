---
type: cookbook
name: "Base transport tempo on loop length"
summary: "To coordinate the tempo of the transport object with the length of a recorded audio loop, get the duration of the loop in milliseconds, divide it by the number"
chapter: "MSP"
keywords: ["buffer~", "transport", "tempo", "info~"]
objects: ["!/", "/", "buffer~", "info~", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/affecttransportwithgroove.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/affecttransportwithgroove.png"
---

# Base transport tempo on loop length

To coordinate the tempo of the **transport** object with the length of a recorded audio loop, get the duration of the loop in milliseconds, divide it by the number of beats, and divide the result in 60,000 (ms per minute) to calculate the tempo of the transport in beats per minute.

## Objects used

`transport`, `!/`, `/`, `info~`, `buffer~`

*Patch contains 10 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/affecttransportwithgroove.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/affecttransportwithgroove.png`
