---
type: cookbook
name: "Demonstration of multiple crossfading delay times referring to the same remote tapin~ object"
summary: "This patch requires the tapoutxfade~ abstraction in the example \"Abstraction for crossfading delay times of a remote tapin~ object(abstraction-crossfading-delay-times-remote-tapin-object.md)\"."
chapter: "MSP"
keywords: ["coll", "tapin~", "tapoutxfade~"]
objects: ["+~", "coll", "dac~", "sfplay~", "tapin~", "tapoutxfade~", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tapoutxfade~demo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tapoutxfade~demo.png"
---

# Demonstration of multiple crossfading delay times referring to the same remote tapin~ object

This patch requires the **tapoutxfade~** abstraction in the example "[Abstraction for crossfading delay times of a remote tapin~ object](abstraction-crossfading-delay-times-remote-tapin-object.md)". When audio is turned on, the **tapin~** object sends out the *tapconnect* message to the three subpatches, thus associating their internal **tapout~** objects with the same **tapin~**.

## Objects used

`tapoutxfade~` ×3, `+~` ×2, `unpack`, `coll`, `tapin~`, `dac~`, `sfplay~`

*Patch contains 31 boxes, 29 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tapoutxfade~demo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tapoutxfade~demo.png`
