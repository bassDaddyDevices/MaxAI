---
type: cookbook
name: "Import movie captures into jit.matrix to create a photo booth effect"
summary: "How does one import multiple movie captures into a single matrix resembling a print from a photo booth?"
chapter: "Jitter"
keywords: ["jit.window", "jit.matrix"]
objects: ["jit.matrix", "jit.window", "loadbang"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/importMultipleJPGIntoMatrix.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/importMultipleJPGIntoMatrix.png"
---

# Import movie captures into jit.matrix to create a photo booth effect

How does one import multiple movie captures into a single matrix resembling a print from a photo booth? The trick is to use the *dstdimstart* and *dstdimend* attributes of **jit**.**matrix**. See [Jitter Tutorial 14 – Matrix Positioning](https://docs.cycling74.com/max7/tutorials/jitterchapter14). You can import a jpg file into a **jit**.**matrix** (let’s call that matrix "justone"), set the *dstdimstart* and *dstdimend* location of some larger **jit**.**matrix** (let’s call that one "alleight") to the place where you want to put the “justone” image, then send the “justone” matrix to the “alleight” **jit**.**matrix**; repeat for each of your eight files, then view the contents of “alleight.”

## Objects used

`jit.matrix` ×17, `loadbang`, `jit.window`

*Patch contains 29 boxes, 34 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/importMultipleJPGIntoMatrix.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/importMultipleJPGIntoMatrix.png`
