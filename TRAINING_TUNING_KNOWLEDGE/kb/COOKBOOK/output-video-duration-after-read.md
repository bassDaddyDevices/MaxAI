---
type: cookbook
name: "Output video duration after read"
summary: "This example shows how to automatically retrieve several information data regarding a loaded video on jit.qt.movie."
chapter: "Max"
keywords: ["jit.qt.movie", "route", "ctlin", "select"]
objects: ["*", "+", "/", "ctlin", "jit.qt.movie", "jit.window", "qmetro", "route", "select", "slider", "unpack", "zmap"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/OutputVideoDurationToNumbox.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/OutputVideoDurationToNumbox.PNG"
---

# Output video duration after read

This example shows how to automatically retrieve several information data regarding a loaded video on **jit.qt.movie**. In this case we are taking advance of the message *read filename 1* that is output on the second outlet after a successful file load, and using that to trigger several get messages which will also be output out the second outlet and then routed to their proper place using the **route** object. Additionally, we also implemented a way to quickly scrub through the file using a midi continuous controller via the **ctlin** object.

## Objects used

`select` ×2, `+`, `zmap`, `ctlin`, `slider`, `jit.window`, `*`, `/`, `unpack`, `route`, `qmetro`, `jit.qt.movie`

*Patch contains 38 boxes, 41 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/OutputVideoDurationToNumbox.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/OutputVideoDurationToNumbox.PNG`
