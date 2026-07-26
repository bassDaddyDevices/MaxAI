---
type: cookbook
name: "Ask if a number belongs to a set"
summary: "This abstraction, which I call “inlist”, checks to see if a given number belongs to a previously-collected set of numbers."
chapter: "Max"
keywords: ["abstraction", "bag", "inlist", "member"]
objects: ["0", "1", "bag", "i", "pack", "route", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/inlist.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/inlist.png"
---

# Ask if a number belongs to a set

This abstraction, which I call “inlist”, checks to see if a given number belongs to a previously-collected set of numbers. Numbers in the middle inlet are added to the set, and numbers in right inlet are deleted from the set. A *clear* message in the left inlet deletes the entire set. When a number comes in the left inlet, if it belongs to the set, a 1 will be sent out the outlet, meaning “yes, it’s in the list”; if it doesn’t belong to the set, a 0 will be sent out.

The **bag** object stores an unordered collection of numbers. Each time a number comes in the left inlet, we store it, then compare it with every number in the **bag**, storing any “yes” answer we may get. Then we send out the stored answer and reset the stored answer to “no”. (N.B. Technically, we really reset the stored answer before we send out the result, so that “inlist” will be all ready to go even if its output triggers more input in the parent patch. The answer actually gets to the final **t** object and is stored there for an instant while we reset the **i** object to 0.)

## Objects used

`pack` ×2, `t` ×2, `bag`, `1`, `sel`, `i`, `route`, `0`

*Patch contains 21 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/inlist.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/inlist.png`
