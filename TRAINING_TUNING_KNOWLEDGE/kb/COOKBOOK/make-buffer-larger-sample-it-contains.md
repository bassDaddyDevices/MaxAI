---
type: cookbook
name: "Make a buffer larger than the sample it contains"
summary: "To load a sample into a buffer~ when the sample is shorter than the desired length of the buffer~, use the clear, size, and read messages."
chapter: "MSP"
keywords: ["buffer~", "clear"]
objects: ["buffer~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/BufferLongerThanSample.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bufferlongerthansamplesize.png"
---

# Make a buffer larger than the sample it contains

To load a sample into a **buffer~** when the sample is shorter than the desired length of the **buffer~**, use the *clear, size,* and *read* messages. You empty and resize the buffer to the size you want, then read in the sound file. For example, you would use this procedure if you wanted to load a three-second sample into a five-second **buffer~**. The sample will be placed in the first three seconds of buffer space, followed by two seconds of silence.

## Objects used

`buffer~`

*Patch contains 3 boxes, 1 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/BufferLongerThanSample.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bufferlongerthansamplesize.png`
