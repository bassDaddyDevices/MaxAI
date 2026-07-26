---
type: cookbook
name: "Attributes of jit.qt.movie"
summary: "The jit.qt.movie object (or jit.movie, or jit.movie~), for playing videos, has a great many attributes and understands a great many messages."
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.movie", "route", "attribute"]
objects: ["*", "+", "/", "ctlin", "jit.qt.movie", "jit.window", "qmetro", "route", "select", "slider", "unpack", "zmap"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jitmovieattributes.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/jitmovieattributes.png"
---

# Attributes of jit.qt.movie

The **jit.qt.movie** object (or **jit.movie**, or **jit.movie~**), for playing videos, has a great many [attributes](http://www.cycling74.com/docs/max5/tutorials/jit-tut/jitterwhatareattributes.html) and understands a great many messages. You can set some of its attributes with messages, such as its playback rate (with a *rate* message) or its audio volume (with a *vol* message). Some of its attributes are traits of the loaded movie file, and can’t be altered (at least not without altering the contents of the movie file itself), such as its duration (the *duration* attribute). This patch shows how you can query **jit.qt.movie** for the state of its attributes, use that information to derive other information, and then use messages to tell **jit.qt.movie** what to do, such as using a *frame* message to tell **jit.qt.movie** what frame of the video to go to.

## Objects used

`select` ×2, `+`, `zmap`, `ctlin`, `slider`, `jit.window`, `*`, `/`, `unpack`, `route`, `qmetro`, `jit.qt.movie`

*Patch contains 39 boxes, 41 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jitmovieattributes.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/jitmovieattributes.png`
