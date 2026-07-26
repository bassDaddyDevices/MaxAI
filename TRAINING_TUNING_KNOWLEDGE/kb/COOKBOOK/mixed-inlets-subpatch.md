---
type: cookbook
name: "Mixed inlets in a subpatch"
summary: "To create an inlet for a subpatch that accepts both signals and data, try using t signal."
chapter: "Max"
keywords: ["subpatch", "inlet", "trigger", "signal", "cycle~", "patcher"]
objects: ["*~", "+~", "cycle~", "ezdac~", "route", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MixedInlets.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mixedinletsinasubpatcher.png"
---

# Mixed inlets in a subpatch

To create an inlet for a subpatch that accepts both signals and data, try using **t signal**. See the patch example for this implementation within the subpatcher.

## Objects used

`*~` ×2, `cycle~` ×2, `+~`, `t`, `route`, `ezdac~`

*Patch contains 12 boxes, 10 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MixedInlets.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mixedinletsinasubpatcher.png`
