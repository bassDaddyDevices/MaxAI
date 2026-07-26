---
type: cookbook
name: "loadbang delay argument"
summary: "Upon patch initialization, one might be tempted to use multiple loadbang objects attached to delay objects in order to control the order of operations."
chapter: "Max"
keywords: ["loadbang", "pipe", "forward", "trigger", "bangbang", "uzi"]
objects: ["*", "b", "coll", "forward", "loadbang", "pipe", "print", "r", "sel", "t", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/loadbangdelayargument_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/loadbangdelayargument.png"
---

# loadbang delay argument

Upon patch initialization, one might be tempted to use multiple **loadbang** objects attached to **delay** objects in order to control the order of operations. A different approach, however, would be to use a single **loadbang** at the top level and use **send** or **forward** to send the messages you want, where you want, and in the order you want. That with all the objects such as **bangbang**, **trigger**, **delay**, **pipe**, **uzi**, etc., you can construct about any sort of ordering system you want.

## Objects used

`print` ×11, `r` ×6, `uzi` ×2, `t` ×2, `coll` ×2, `sel`, `*`, `pipe`, `forward`, `b`, `loadbang`

*Patch contains 32 boxes, 28 connections, 2 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/loadbangdelayargument_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/loadbangdelayargument.png`
