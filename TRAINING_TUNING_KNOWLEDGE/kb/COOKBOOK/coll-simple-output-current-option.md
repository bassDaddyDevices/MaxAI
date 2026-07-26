---
type: cookbook
name: "coll simple 'output current' option"
summary: "When using coll, sending a bang or a next message will have it always output the following entry."
chapter: "Max"
keywords: ["coll", "prepend", "message"]
objects: ["coll", "prepend", "print"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/collsimpleoutputcurrentoption.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/collsimpleoutputcurrentoption.PNG"
---

# coll simple 'output current' option

When using **coll**, sending a *bang* or a *next* message will have it always output the following entry. This example shows how you can ask **coll** to output the most recent entry output. Storing, but not sending out, the integer coming out of **coll**’s second outlet in a **message box** via the **prepend set** we can then use a single **button** connected to that **message box** to consistently output the most recent **coll** entry.

## Objects used

`print`, `prepend`, `coll`

*Patch contains 9 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/collsimpleoutputcurrentoption.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/collsimpleoutputcurrentoption.PNG`
