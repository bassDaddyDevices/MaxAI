---
type: cookbook
name: "LCD Drawing Demo 1"
summary: "Coordinates in lcd refer to the upper-left corner of a pixel."
chapter: "Max"
keywords: ["lcd", "jit.lcd"]
objects: ["lcd"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/LCDDrawingDemo1.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/LCDdrawingdemo1.png"
---

# LCD Drawing Demo 1

Coordinates in **lcd** refer to the upper-left corner of a pixel. "0 0" refers to the upper-left corner of the **lcd**, and also refers to the upper-left corner of cell 0 0 in a **jit.lcd**. In a default-sized **lcd** with dimensions 128×128, the coordinate “128 128” refers to the upper left corner of the pixel that is just beyond the lower right corner of the **lcd**, i.e., just beyond the edge of the **lcd** (and beyond the matrix of a **jit.lcd**). The coordinate also refers to the upper-left corner of the pen position for purposes of messages such as *moveto* and *lineto*.

The example shows this. Note that there is a two-pixel space between the ends of the line and the edge of the **lcd**, because coordinate “122 122” plus the 4 4 width of the pen takes it to 126 126, two pixels shy of the edge.

Two slightly complicating factors: 1) the border takes away one pixel of drawing space on each edge, 2) the pen’s brush style is a circle rather than a square, so it has the desired width in its middle but not on its corners.

## Objects used

`lcd`

*Patch contains 6 boxes, 3 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/LCDDrawingDemo1.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/LCDdrawingdemo1.png`
