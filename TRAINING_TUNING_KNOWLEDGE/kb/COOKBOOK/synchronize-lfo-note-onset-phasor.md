---
type: cookbook
name: "Synchronize an LFO to a note onset with phasor~"
summary: "To sync an LFO to the onset of a note, drive it with a phasor~ object."
chapter: "MSP"
keywords: ["ezdac~", "gain~", "message", "+~", "*~", "triangle~", "flonum", "phasor~", "selector~", ">=~", "mtof~", "cycle~"]
objects: ["*~", "+~", ">=~", "cycle~", "ezdac~", "gain~", "mtof~", "phasor~", "selector~", "triangle~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/retriggerOscillator.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/retriggerOscillator.png"
---

# Synchronize an LFO to a note onset with phasor~

To sync an LFO to the onset of a note, drive it with a **phasor**~ object. Send a phase value of "0" into the right inlet of **phasor~** when the note starts, as seen in this example.

## Objects used

`+~` ×5, `*~` ×4, `cycle~` ×2, `>=~`, `selector~`, `triangle~`, `ezdac~`, `gain~`, `mtof~`, `phasor~`

*Patch contains 28 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/retriggerOscillator.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/retriggerOscillator.png`
