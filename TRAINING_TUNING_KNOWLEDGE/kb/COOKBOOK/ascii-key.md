---
type: cookbook
name: "ASCII key"
summary: "The key object tracks and outputs the ASCII values of the keys you press on the computer keyboard."
chapter: "Max"
keywords: ["key", "ASCII", "select"]
objects: ["*", "int", "key", "makenote", "metro", "noteout", "random", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ASCIIkey.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ASCIIkey.png"
---

# ASCII key

The **key** object tracks and outputs the ASCII values of the keys you press on the computer keyboard. You can then use those ASCII values to trigger other objects as shown in the example above. In the example, the 'c' key is used to trigger the note middle C (MIDI key number 60), and the 'r' key is used to turn on a stream of randomly-chosen notes C across the entire MIDI range (every multiple of 12 from 0 to 120) at a rate of ten notes per second.

## Objects used

`select` ×2, `*`, `random`, `metro`, `noteout`, `makenote`, `int`, `key`

*Patch contains 18 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ASCIIkey.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ASCIIkey.png`
