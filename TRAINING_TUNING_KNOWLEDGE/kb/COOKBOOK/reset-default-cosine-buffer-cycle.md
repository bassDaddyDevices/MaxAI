---
type: cookbook
name: "Reset default cosine buffer for cycle~"
summary: "This example shows how to change and reset the wavetable that a cycle~ object is linked to."
chapter: "Max"
keywords: ["buffer~", "wavetable"]
objects: ["buffer~", "cycle~", "dac~", "loadbang", "scope~", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ResetDefaultCosineForCycle~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ResetDefaultCosineForCycle~.PNG"
---

# Reset default cosine buffer for cycle~

This example shows how to change and reset the wavetable that a **cycle~** object is linked to. Sending **cycle~** a message *set* followed by the buffer name can change its wavetable reference and the *set*message will reset the wavetable.

## Objects used

`sel`, `scope~`, `dac~`, `cycle~`, `loadbang`, `buffer~`

*Patch contains 11 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ResetDefaultCosineForCycle~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ResetDefaultCosineForCycle~.PNG`
