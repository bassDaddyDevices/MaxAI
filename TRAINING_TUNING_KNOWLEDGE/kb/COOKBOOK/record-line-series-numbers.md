---
type: cookbook
name: "Record line~ as a series of numbers"
summary: "To record the output of a line~ as a series of numbers, a buffer~ can be used to capture the entirety of its output."
chapter: "MSP"
keywords: ["buffer~", "record~", "play~"]
objects: ["buffer~", "dac~", "line~", "play~", "record~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/recordLine_.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/recordLine_.png"
---

# Record line~ as a series of numbers

To record the output of a **line~** as a series of numbers, a **buffer~** can be used to capture the entirety of its output. To record the output, connect the **line~** to a **record~** with the same name as the **buffer~**. The buffer can then be played back by creating a **play~** object with the same name as the **buffer~** and sending it a *start* message.

## Objects used

`play~`, `dac~`, `line~`, `record~`, `buffer~`

*Patch contains 11 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/recordLine_.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/recordLine_.png`
