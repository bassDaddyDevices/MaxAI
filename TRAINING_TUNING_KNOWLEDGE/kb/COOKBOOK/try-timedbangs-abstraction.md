---
type: cookbook
name: "Try the timedbangs abstraction"
summary: "This patch demonstrates the use of the abstraction presented in the example \"Abstraction to trigger a timed series of bangs(abstraction-trigger-timed-series-bangs.md)\"."
chapter: "Max"
keywords: ["bang", "timing"]
objects: ["makenote", "noteout", "timedbangs", "timer"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timedbangstest.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timedbangstest.PNG"
---

# Try the timedbangs abstraction

This patch demonstrates the use of the abstraction presented in the example "[Abstraction to trigger a timed series of bangs](abstraction-trigger-timed-series-bangs.md)".

If you click on the **button** immediately, the typed-in arguments will be used: 9 bangs 125 milliseconds apart. You can enter different numbers in the second and third inlets, or you can trigger a set of *bang*s immediately with a list in the first inlet.

## Objects used

`timer`, `timedbangs`, `noteout`, `makenote`

*Patch contains 20 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timedbangstest.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timedbangstest.PNG`
