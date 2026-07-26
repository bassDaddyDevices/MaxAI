---
type: cookbook
name: "patcherargs output"
summary: "This example is intends to clarify a situation where the difference between integers and symbols might be less than obvious."
chapter: "Max"
keywords: ["patcherags", "route"]
objects: ["patcherargs", "print", "route", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/patcherargsOutput.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/patcherargsOutput.PNG"
---

# patcherargs output

This example is intends to clarify a situation where the difference between integers and symbols might be less than obvious. First of all, attribute names are symbols, not integers. Thus, they come out of **patcherargs** as symbols, not as integers. In this example, the **route** object tries to compare the symbol ‘-1’ with the number ‘-1’ and the test fails. Give it a try with some of the objects in this patch and note where they’re coming out.

## Objects used

`print` ×4, `unpack` ×2, `route` ×2, `patcherargs`

*Patch contains 16 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/patcherargsOutput.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/patcherargsOutput.PNG`
