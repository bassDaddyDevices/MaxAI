---
type: cookbook
name: "Output bang if two bangs are received at the same time"
summary: "This patch will output a bang if it receives a bang in both of its inputs simultaneously."
chapter: "Max"
keywords: ["deferlow", "trigger", "integer", "select"]
objects: ["0", "b", "deferlow", "i", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/outputBangIf2BangsReceived.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/outputBangIf2BangsReceived.png"
---

# Output bang if two bangs are received at the same time

This patch will output a *bang* if it receives a bang in both of its inputs simultaneously. A *bang* received by the right inlet will store a *1* in the **integer** object via the cold inlet. If the left inlet receives a bang before the end of the low priority queue, then a *1* will be outputted by the **integer** object to the **select** resulting in a *bang* from its left outlet. Otherwise, the **deferlow** object will *bang* the **0** into the **integer** object causing it to output a *0*.

## Objects used

`0`, `deferlow`, `sel`, `i`, `b`, `t`

*Patch contains 12 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/outputBangIf2BangsReceived.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/outputBangIf2BangsReceived.png`
