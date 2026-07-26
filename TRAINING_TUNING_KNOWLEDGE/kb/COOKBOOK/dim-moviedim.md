---
type: cookbook
name: "Dim of moviedim"
summary: "Whenever a movie is read into jit.qt.movie, it sends out a read message that reports whether the movie was read in successfully."
chapter: "Jitter"
keywords: ["jit.qt.movie", "moviedim", "movie", "dim", "video"]
objects: ["jit.qt.movie", "jit.window", "prepend", "qmetro", "route", "sel", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/dimofmoviedim.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/dimofmoviedim.png"
---

# Dim of moviedim

Whenever a movie is read into **jit.qt.movie**, it sends out a read message that reports whether the movie was read in successfully. You can use that information to trigger a *getmoviedim* message to **jit.qt.movie**, and use the **moviedim** to set the dim of **jit.qt.movie** and all other objects that need to know that information.

## Objects used

`prepend` ×2, `sel` ×2, `qmetro`, `jit.window`, `unpack`, `route`, `jit.qt.movie`

*Patch contains 18 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/dimofmoviedim.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/dimofmoviedim.png`
