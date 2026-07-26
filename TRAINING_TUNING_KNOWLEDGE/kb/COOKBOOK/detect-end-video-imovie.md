---
type: cookbook
name: "Detect end of video in imovie"
summary: "The imovie object displays a video within a single UI object in a Max patch."
chapter: "Max"
keywords: ["imovie", "grab", "select", "duration", "getduration", "gettime"]
objects: [">=", "change", "grab", "imovie", "metro", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/triggerVideoIMovie.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/triggerVideoIMovie.png"
---

# Detect end of video in imovie

The **imovie** object displays a video within a single UI object in a Max patch. To detect when the movie has ended, use the *getduration* message to determine the movie's duration, then use the *gettime* message to monitor the current time of the video as it plays. In this example, we use the **grab** object to get the duration once and store it in other objects (**select** and **>=**).

## Objects used

`select` ×2, `change`, `>=`, `grab`, `metro`, `imovie`

*Patch contains 24 boxes, 24 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/triggerVideoIMovie.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/triggerVideoIMovie.png`
