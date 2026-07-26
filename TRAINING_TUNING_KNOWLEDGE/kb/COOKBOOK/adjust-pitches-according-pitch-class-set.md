---
type: cookbook
name: "Adjust pitches according to a pitch class set"
summary: "One potential use of the “inlist” abstraction(ask-if-number-belongs-set.md) is to compare incoming pitches to a pitch class set."
chapter: "Max"
keywords: ["inlist", "member", "pitch class"]
objects: ["%", "+", "if", "inlist", "loadbang", "notein", "stripnote", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/inlistdemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/inlistdemo.png"
---

# Adjust pitches according to a pitch class set

One potential use of [the “inlist” abstraction](ask-if-number-belongs-set.md) is to compare incoming pitches to a pitch class set. This patch uses a **%** 12 object to find the pitch class of an incoming pitch, then compares it with the members of a prescribed pitch class set. If it belongs to the pitch class set, it gets passed on unchanged; if it doesn’t belong to the pitch class set, it gets pushed up one semitone and tested again.

Note that this patch does point to a potential bug (a so-called “screw case”). If the pitch class set is null (the **bag** inside the inlist abstraction is empty), any incoming pitch would set this patch into an infinite loop and cause a stack overflow. However, we’re safe in this particular example because we have pre-loaded the pitch class set and there’s no way provided in the program to delete those numbers.

## Objects used

`+`, `t`, `if`, `stripnote`, `notein`, `loadbang`, `%`, `inlist`

*Patch contains 18 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/inlistdemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/inlistdemo.png`
