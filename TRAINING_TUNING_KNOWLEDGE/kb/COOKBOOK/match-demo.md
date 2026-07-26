---
type: cookbook
name: "Match demo"
summary: "Every number that comes in the left inlet of the match object—whether individually or as part of a list—gets used, in order, for the list-matching comparison."
chapter: "Max"
keywords: ["print", "message", "match", "trigger"]
objects: ["match", "print", "trigger"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/matchDemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/matchDemo.png"
---

# Match demo

Every number that comes in the left inlet of the **match** object—whether individually or as part of a list—gets used, in order, for the list-matching comparison. So, if it is looking for the list "1 1" and you send in lists "0 1", "1 1", "1 2", and "1 3" in that order, it’s as if match had received "1 0 1 1 1 2 1 3", and in that message it can find two matches for "1 1": at the 3rd and 4th items, and at the 4th and 5th items.

## Objects used

`trigger`, `print`, `match`

*Patch contains 11 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/matchDemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/matchDemo.png`
