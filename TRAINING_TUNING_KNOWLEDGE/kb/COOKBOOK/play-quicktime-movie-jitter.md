---
type: cookbook
name: "Play a QuickTime movie with Jitter"
summary: "The jit.qt.movie object can open (read) a .mov file (or really any media file that QuickTime is capable of dealing with) and start playing it, loading its visua"
chapter: "Jitter"
keywords: ["metro", "QuickTime", "jit.qt.movie", "jit.window", "MOV file"]
objects: ["jit.qt.movie", "jit.window", "metro"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playmoviefile.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playamovie.png"
---

# Play a QuickTime movie with Jitter

The **jit.qt.movie** object can *open* (read) a .mov file (or really any media file that QuickTime is capable of dealing with) and start playing it, loading its visual content into its internal Jitter matrix. But that matrix is only made visible when you send it a *bang*, which causes it to send out a *jit\_matrix* message to **jit.window** telling it where in memory to look to get the data to be displayed. Thus, the playing of the movie (loading it in from the disk) and the displaying of it in **jit.window** are really two separate operations. [For playing movies without the use of the QuickTime engine, see also **jit.movie**.]

## Objects used

`jit.window`, `metro`, `jit.qt.movie`

*Patch contains 6 boxes, 4 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playmoviefile.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playamovie.png`
