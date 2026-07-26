---
type: cookbook
name: "Slow OSC messages"
summary: "To slow the flow of OSC messages, store the most recent value for each parameter using the combine object, but only send it out as an OSC message at the desired rate."
chapter: "Max"
keywords: ["counter", "metro", "toggle", "udpsend", "message", "print", "number", "combine", "comment"]
objects: ["combine", "counter", "metro", "print", "udpsend"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/filterDuplicateOSCMessagesBeforeSending.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/filterDuplicateOSCMessagesBeforeSending.png"
---

# Slow OSC messages

To slow the flow of OSC messages, store the most recent value for each parameter using the **combine** object, but only send it out as an OSC message at the desired rate.

## Objects used

`metro` ×2, `print`, `counter`, `combine`, `udpsend`

*Patch contains 14 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/filterDuplicateOSCMessagesBeforeSending.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/filterDuplicateOSCMessagesBeforeSending.png`
