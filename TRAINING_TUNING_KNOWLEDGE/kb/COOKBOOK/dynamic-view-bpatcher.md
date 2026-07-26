---
type: cookbook
name: "Dynamic view of bpatcher"
summary: "The bptatcher object allows you to show a view of a portion of a subpatch inside the main patch."
chapter: "Max"
keywords: ["bpatcher", "thispatcher", "script", "offset", "view"]
objects: ["dial", "thispatcher"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bpatcherDynamicView.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bpatcherDynamicView.png"
---

# Dynamic view of bpatcher

The **bptatcher** object allows you to show a view of a portion of a subpatch inside the main patch.

You can change the visible portion of the **bpatcher** with an *offset* message to a **thispatcher** object in the **bpatcher**'s subpatch, and you can change the size of your **bpatcher** with a *script size* message to a **thispatcher** object in the parent patch.

Here we use the *offset* message to choose which of two dials we want to see in the subpatch, and we also show how the *script size* message can allow us to see all, or only half, of the subpatch.

## Objects used

`thispatcher` ×2, `dial` ×2

*Patch contains 18 boxes, 9 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bpatcherDynamicView.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bpatcherDynamicView.png`
