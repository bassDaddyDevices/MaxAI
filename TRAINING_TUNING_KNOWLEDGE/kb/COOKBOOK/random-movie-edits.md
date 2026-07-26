---
type: cookbook
name: "Random movie edits"
summary: "This is a program for random editing of a video by periodically leaping to randomly-chosen times in the video and playing from there."
chapter: "Jitter"
keywords: ["random", "jit.qt.movie", "jit.window", "movie"]
objects: ["!/", "*", "-", "jit.qt.movie", "jit.window", "loadmess", "metro", "qmetro", "random", "route", "select", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/randommovieedits_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/random_movie_edits.png"
---

# Random movie edits

This is a program for random editing of a video by periodically leaping to randomly-chosen times in the video and playing from there. The **jit.qt.movie** object here has its attributes initialized such that: a) it will adapt the dimensions of its matrix based on the dimensions of the movie that is read in, b) it will not automatically start, c) it will not loop, and d) it will only send out new frames of video without repeating a frame. When a movie is read in, a *read* message comes out the right outlet of **jit.qt.movie**; if the read was successful (the flag at the end of the *read* message is *1*) it will trigger queries for attributes of the movie, namely its time units, duration, frames per second, and dimensions. The results of those queries are used to set the size of the display window (using *moviedim*), the rate of the frame-displaying metronome (using *fps*), and the range to use for the random time choices (using *duration* and *timescale*). The random range is set as follows: the timescale of the movie (QuickTime time units per second) is multiplied by the interval between edits (in seconds) and subtracted from the total duration. That ensures that each random edit will start at a time in in the movie that will allow the edit to play without hitting the end of the movie. When the **toggle** is turned on the random location choosing **metro** is turned on to choose the first edit location, the movie is started, and the display **qmetro** is started. A new randomly-chosen *time* message will be sent to the **jit.qt.movie** object at the specified rate.

## Objects used

`route` ×3, `!/` ×2, `t` ×2, `select` ×2, `*` ×2, `jit.window`, `loadmess`, `-`, `metro`, `qmetro`, `random`, `unpack`, `jit.qt.movie`

*Patch contains 35 boxes, 39 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/randommovieedits_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/random_movie_edits.png`
