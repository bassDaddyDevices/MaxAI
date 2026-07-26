---
type: cookbook
name: "Stitch MOV frames"
summary: "Q: I would like to stitch the frames of a MOV and create one big frame in another matrix by stitching all of the frames one after another vertically so I can save it as one bmp."
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.matrix", "route", "uzi"]
objects: ["*", "+", "jit.matrix", "jit.qt.movie", "route", "sel", "t", "unpack", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stitchmovframes_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stitchmovframes.png"
---

# Stitch MOV frames

Q: I would like to stitch the frames of a MOV and create one big frame in another matrix by stitching all of the frames one after another vertically so I can save it as one bmp. Basically, I would like to create a concatenated film strip image like you can do with ImageMagick or Image Stitcher. I can’t figure it out. Its for a 16×16 movie (not more than 2000 frames).

A: This should work. (To learn about the dimension messages to **jit.matrix**, such as ‘usedstdim’, see [Jitter Tutorial 14 Matrix Positioning](https://docs.cycling74.com/max7/tutorials/jitterchapter14).)

## Objects used

`t` ×2, `*` ×2, `route` ×2, `+`, `uzi`, `sel`, `unpack`, `jit.qt.movie`, `jit.matrix`

*Patch contains 21 boxes, 23 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stitchmovframes_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stitchmovframes.png`
