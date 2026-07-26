---
type: cookbook
name: "Avoid groove~ sync output initial jump"
summary: "To avoid an initial spike on the sync output of a groove~ object, make sure that its associated buffer~ is given a nonzero size."
chapter: "Max"
keywords: ["sig~", "groove~", "buffer~"]
objects: ["buffer~", "ezdac~", "groove~", "number~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AvoidGroove_InitialJump.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Avoidgrooveinitialjump.png"
---

# Avoid groove~ sync output initial jump

To avoid an initial spike on the sync output of a **groove~** object, make sure that its associated **buffer~** is given a nonzero size.

## Objects used

`sig~`, `ezdac~`, `number~`, `groove~`, `buffer~`

*Patch contains 6 boxes, 2 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AvoidGroove_InitialJump.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Avoidgrooveinitialjump.png`
