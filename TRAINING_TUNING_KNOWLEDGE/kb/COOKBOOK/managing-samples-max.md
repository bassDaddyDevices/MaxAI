---
type: cookbook
name: "Managing samples in Max"
summary: "This is an example of a patch loaded in a poly~ which uses midi values to load and transpose samples of guitar strings in a groove~."
chapter: "MSP"
keywords: ["stripnote", "split", "dbtoa", "line~", "expr", "groove~"]
objects: ["*", "*~", "-", "dbtoa", "expr", "groove~", "line~", "scale", "select", "sig~", "split", "stripnote", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/gtrvoice.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/gtrvoice.png"
---

# Managing samples in Max

This is an example of a patch loaded in a **poly~** which uses midi values to load and transpose samples of guitar strings in a **groove~**. This patch is used as an abstraction inside of the [Sampling Synthesizer in Max](sampling-synthesizer-max.md) patch which includes pitch bend and mod wheel functionality and contains the **buffer~** objects that the **groove~** in this patch refers to.

## Objects used

`t` ×8, `-` ×6, `split` ×6, `stripnote`, `*`, `*~`, `line~`, `select`, `dbtoa`, `scale`, `unpack`, `sig~`, `groove~`, `expr`

*Patch contains 49 boxes, 57 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/gtrvoice.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/gtrvoice.png`
