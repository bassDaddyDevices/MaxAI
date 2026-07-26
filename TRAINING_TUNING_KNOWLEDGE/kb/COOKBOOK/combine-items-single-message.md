---
type: cookbook
name: "Combine items into a single message"
summary: "Unlike the join and pack objects, which combine their inputs into a single space-separated list, the combine object concatenates its inputs into a single item with no space in between."
chapter: "Max"
keywords: ["combine", "tosymbol"]
objects: ["combine", "print", "tosymbol"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/combineitems.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/combineitems.png"
---

# Combine items into a single message

Unlike the **join** and **pack** objects, which combine their inputs into a single space-separated list, the **combine** object concatenates its inputs into a single item with no space in between. This example shows how you can use **combine** to join things with no space. If one of the inputs already contains spaces, and you want to retain those spaces in the output, you would need to convert the input to a *symbol* first, using the **tosymbol** object.

## Objects used

`print` ×2, `combine` ×2, `tosymbol`

*Patch contains 9 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/combineitems.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/combineitems.png`
