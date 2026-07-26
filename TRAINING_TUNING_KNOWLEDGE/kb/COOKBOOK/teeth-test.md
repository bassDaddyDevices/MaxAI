---
type: cookbook
name: "teeth~ test"
summary: "If gain is set to 1, a teeth~ object with ‘feedforward gain’ and ‘feedback gain’ arguments set to 0 is bypassed/transparent, which can be used as a dry/wet control."
chapter: "Max"
keywords: ["teeth~", "capture~", "noise~"]
objects: ["capture~", "ezdac~", "noise~", "teeth~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/teeth_TestPatch.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/teethtest.png"
---

# teeth~ test

If gain is set to 1, a **teeth~** object with ‘feedforward gain’ and ‘feedback gain’ arguments set to 0 is bypassed/transparent, which can be used as a dry/wet control. This can be confirmed by reading the details tab of the help file, which shows the formula used by **teeth~**, or by making a simple test patch like this one to test the hypothesis yourself.

## Objects used

`capture~` ×2, `ezdac~`, `noise~`, `teeth~`

*Patch contains 8 boxes, 5 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/teeth_TestPatch.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/teethtest.png`
