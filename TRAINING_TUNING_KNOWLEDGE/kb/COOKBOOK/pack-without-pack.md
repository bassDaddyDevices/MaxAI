---
type: cookbook
name: "Pack without Pack"
summary: "Int, float, and list are all (normally hidden) message selectors that are assumed whenever Max encounters a message that consists of (respectively) a single int"
chapter: "Max"
keywords: ["pack", "int", "float", "list"]
objects: ["3.14", "4", "4.", "f", "float", "i", "int", "list", "pack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/PackWithoutPack.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/packwithoutpack.png"
---

# Pack without Pack

**Int**, **float**, and **list** are all (normally hidden) message selectors that are assumed whenever Max encounters a message that consists of (respectively) a single **int**, a single **float**, or a multi-item message that starts with a number. Similarly, typing a single **int**, a single **float**, or any multi-item **list** that starts with a number directly into an object box assumes an object of type int (or i), float (or f), or list (or **pack**).

## Objects used

`list` ×2, `3.14`, `f`, `pack`, `float`, `4`, `i`, `int`, `4.`

*Patch contains 12 boxes, 0 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/PackWithoutPack.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/packwithoutpack.png`
