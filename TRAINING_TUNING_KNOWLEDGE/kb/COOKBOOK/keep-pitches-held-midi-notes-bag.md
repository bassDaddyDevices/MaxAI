---
type: cookbook
name: "Keep pitches of held MIDI notes in a bag"
summary: "The bag object stores an unordered collection of integers."
chapter: "Max"
keywords: ["bag", "MIDI", "note"]
objects: ["bag", "notein", "print"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bagtocapturepitches_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bagtocapturepitches1.png"
---

# Keep pitches of held MIDI notes in a bag

The **bag** object stores an unordered collection of integers. You can put numbers into the **bag** or remove them, and you can query what’s in the **bag** using the *bang* message. You put a number into the bag by providing the number along with a 1 (or any non-zero number), and you remove it by specifying the number along with a 0. Because a 0 or a non-zero number in the right inlet indicates whether to remove or include the number coming in the left inlet, **bag** is well suited for holding MIDI pitch values, with the note velocity meaning “include” for note-on messages and “remove” for note-off messages. So, **bag** can be useful for keeping track of what MIDI pitches are currently on.

## Objects used

`print` ×2, `bag` ×2, `notein`

*Patch contains 19 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bagtocapturepitches_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bagtocapturepitches1.png`
