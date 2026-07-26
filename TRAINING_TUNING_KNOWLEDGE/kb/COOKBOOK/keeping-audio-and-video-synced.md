---
type: cookbook
name: "Keeping audio and video synced"
summary: "This example shows how you can always keep your video and audio in sync even when you pause the video."
chapter: "Max"
keywords: ["jit.qt.movie", "groove~"]
objects: ["*", "/", "groove~", "jit.qt.movie", "route", "sig~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AudioVideoSynced.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/AudioVideoSynced.PNG"
---

# Keeping audio and video synced

This example shows how you can always keep your video and audio in sync even when you pause the video. The trick relies on sending a *gettime* message to **jit.qt.movie** in order to have the exact time at which the (for example) **groove~** object should start the audio file.

## Objects used

`sig~`, `t`, `groove~`, `*`, `/`, `jit.qt.movie`, `route`

*Patch contains 8 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AudioVideoSynced.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/AudioVideoSynced.PNG`
