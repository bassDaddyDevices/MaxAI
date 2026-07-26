---
type: cookbook
name: "Dealing with the \"symbol\" output of coll"
summary: "Any message that consists of a single word is a message of type symbol (as opposed to int or float or list or some other word followed by other items)."
chapter: "Max"
keywords: ["symbol", "route", "coll"]
objects: ["coll", "route"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/symbolInColl.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/symbolInColl.png"
---

# Dealing with the "symbol" output of coll

Any message that consists of a single word is a message of type *symbol* (as opposed to *int* or *float* or *list* or some other word followed by other items). The **coll** object explicitly puts the word *symbol* ahead of its output if the output is a single word. The advantage of that is that you can detect single-word outputs as being different from all other outputs, by using a **route *symbol*** object. The disadvantage is that if you don’t want to do that, you have that annoying word "symbol" there where you weren’t expecting it. Fortunately, the solution for that is also to use a **route *symbol*** object, and connect both of that object’s outlets to the same destination inlet, as shown here.

## Objects used

`route`, `coll`

*Patch contains 12 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/symbolInColl.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/symbolInColl.png`
