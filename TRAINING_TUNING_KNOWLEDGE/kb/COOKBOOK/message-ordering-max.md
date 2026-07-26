---
type: cookbook
name: "Message ordering in Max"
summary: "Even though Max is graphical, object-based, and event-driven (responds to user events like mouse clicks, key strokes, MIDI data, etc.), it's still sequential."
chapter: "Max"
keywords: ["bangbang", "print", "trigger"]
objects: ["bangbang", "print", "trigger"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/messageorder_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/messageorder.png"
---

# Message ordering in Max

Even though Max is graphical, object-based, and event-driven (responds to user events like mouse clicks, key strokes, MIDI data, etc.), it's still sequential. Every message is sent (or scheduled to be sent) at a specific time, and nothing happens truly simultaneously. Therefore, it's important to be conscious of the precise order in which things occur. Study the example above to be sure you understand the way that Max orders messages.

## Objects used

`print` ×9, `trigger`, `bangbang`

*Patch contains 31 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/messageorder_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/messageorder.png`
