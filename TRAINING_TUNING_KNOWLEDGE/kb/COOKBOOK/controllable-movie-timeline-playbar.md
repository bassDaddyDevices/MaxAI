---
type: cookbook
name: "Controllable movie timeline playbar"
summary: "You can easily jump to different parts of the movie using the readymade object called playbar."
chapter: "Jitter"
keywords: ["jit.movie", "playbar", "jit.qt.movie"]
objects: ["*", "jit.pwindow", "jit.qt.movie", "metro", "playbar", "prepend", "route"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/controllablemovieplaybar.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0462 ControllableMovieTimelineBar.png"
---

# Controllable movie timeline playbar

You can easily jump to different parts of the movie using the readymade object called **playbar**. 

Using the slider of **playbar** object, you can adjust the position of the movie, and obtain the position number from its output with a **route** object. The position number is then multiplied by the duration of the movie file to jump to the specified position.

## Objects used

`route` ×2, `prepend`, `*`, `jit.pwindow`, `metro`, `jit.qt.movie`, `playbar`

*Patch contains 11 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/controllablemovieplaybar.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0462 ControllableMovieTimelineBar.png`
