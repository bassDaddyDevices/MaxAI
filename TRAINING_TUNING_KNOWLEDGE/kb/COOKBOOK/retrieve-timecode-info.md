---
type: cookbook
name: "Retrieve Timecode Info"
summary: "In order to retrieve timecode information from a movie, you can send the message ‘gettimecodeinfo’ and ‘gettimecode’ to query the state of those attributes."
chapter: "Jitter"
keywords: ["jit.qt.movie", "gettimecode", "gettimecodeinfo", "timecode"]
objects: ["jit.qt.movie", "print", "qmetro", "route", "sel", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/retrievetimecodeinfo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0514 Retrieve Timecode Info.png"
---

# Retrieve Timecode Info

In order to retrieve timecode information from a movie, you can send the message ‘gettimecodeinfo’ and ‘gettimecode’ to query the state of those attributes. The values come out of the right outlet as ‘timecodeinfo’ and ‘timecode’ messages.

‘timecode’ and ‘timecodeinfo’ are gettable attributes (but are not settable).

## Objects used

`sel`, `unpack`, `print`, `route`, `qmetro`, `jit.qt.movie`

*Patch contains 12 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/retrievetimecodeinfo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0514 Retrieve Timecode Info.png`
