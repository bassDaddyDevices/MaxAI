---
type: cookbook
name: "A timepoint is a point in musical time"
summary: "A timepoint is a point in musical time."
chapter: "Max"
keywords: ["timepoint", "transport"]
objects: ["+", "b", "coll", "counter", "makenote", "noteout", "sel", "t", "timepoint", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timepoints.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timepoints.png"
---

# A timepoint is a point in musical time

A timepoint is a point in musical time.

When you’re using tempo-relative timing in Max, the **timepoint** object will automatically report when a specific moment in musical time has been reached by the transport.

You can use as many **timepoint** objects as you’d like. This example, however, shows a way that you can save many timepoints in a **coll** object, use the output of the **coll** to set a timepoint, and use the output of the **timepoint** object to signal when that timepoint has been reach and *also* to read the next timepoint from the **coll** and set up the **timepoint** object itself for the next timepoint it should report.

## Objects used

`sel` ×2, `b` ×2, `noteout`, `makenote`, `+`, `t`, `coll`, `counter`, `transport`, `timepoint`

*Patch contains 22 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timepoints.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timepoints.png`
