---
type: cookbook
name: "Using Metro with Transport"
summary: "When using a tempo-relative timing unit (such as ticks) for metro, rather than the tempo-independent ms, the metro becomes linked to the transport."
chapter: "Max"
keywords: ["metro", "transport"]
objects: ["0", "metro", "sel", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/UsingMetroWithTransport.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/UsingMetroWithTransport.PNG"
---

# Using Metro with Transport

When using a tempo-relative timing unit (such as ticks) for **metro**, rather than the tempo-independent ms, the **metro** becomes linked to the **transport**. In such cases, the **transport** has to be running for the metro to work. This example shows 2 tempo-relative **metro** objects.

## Objects used

`metro` ×2, `0`, `sel`, `transport`

*Patch contains 9 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/UsingMetroWithTransport.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/UsingMetroWithTransport.PNG`
