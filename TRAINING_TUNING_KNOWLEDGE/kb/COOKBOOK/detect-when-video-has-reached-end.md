---
type: cookbook
name: "Detect when a video has reached the end"
summary: "A jit.movie or jit.qt.movie object doesn't automatically provide a notification when it reaches the end of a video."
chapter: "Jitter"
keywords: ["video", "jit.qt.movie", "jit.movie", "duration", "getduration"]
objects: [">=", "jit.pwindow", "jit.qt.movie", "qmetro", "route", "sel", "select", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/videochainreaction.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/videochainreaction.png"
---

# Detect when a video has reached the end

A **jit.movie** or **jit.qt.movie** object doesn't automatically provide a notification when it reaches the end of a video. However, it's easy enough to obtain such a notification by checking to see when the video's current time becomes equal to its total duration. When the movie is first read into **jit.qt.movie**, you can use the resulting *read* message that comes out of its right outlet to trigger a *getduration* message to **jit.qt.movie** to get the movie’s duration (in timescale units) out of the right outlet. Then, you can send regular *gettime* messages to **jit.qt.movie** to get the current time (in timescale units), and compare it to the duration with a **>=** object. You can use this technique to create a chain reaction of videos, with one playing immediately after another ends.

## Objects used

`route` ×3, `t` ×2, `jit.pwindow`, `select`, `qmetro`, `>=`, `sel`, `unpack`, `jit.qt.movie`

*Patch contains 21 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/videochainreaction.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/videochainreaction.png`
