---
type: cookbook
name: "Switching Video"
summary: "You can switch between multiple videos without starting from the beginning of each clip after each every switch by acquiring the time the clip was stopped as the next starting point."
chapter: "Jitter"
keywords: ["jit.movie", "jit.window", "qmetro", "route"]
objects: ["gate", "i", "jit.qt.movie", "jit.window", "qmetro", "route", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/switchingvideo_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/switchingvideo.png"
---

# Switching Video

You can switch between multiple videos without starting from the beginning of each clip after each every switch by acquiring the time the clip was stopped as the next starting point. 

This example allows you to load three movie clips. Of the three loaded videos, you can select one at a time to start playing, switch to another movie, switch back to the one before to play from where you left off. Every time you choose a movie, it sends *start* message to the selected movie, and send *stop* message to other movies. When *stop* message is received, the time position of the movie is retrieved from the output of **jit.gt.movie**, which is then used as the next starting point.

## Objects used

`sel` ×6, `route` ×3, `i` ×3, `jit.qt.movie` ×3, `gate` ×2, `jit.window`, `t`, `qmetro`

*Patch contains 33 boxes, 46 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/switchingvideo_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/switchingvideo.png`
