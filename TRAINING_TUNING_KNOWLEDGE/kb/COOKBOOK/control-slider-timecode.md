---
type: cookbook
name: "Control Slider with Timecode"
summary: "If you want to drive a slider using the current time information from jit.qt.movie, you can send the ‘gettime’ message into jit.qt.movie to cause the ‘time’ mes"
chapter: "Jitter"
keywords: ["jitter", "jit.qt.movie", "qmetro", "route", "gettime"]
objects: ["/", "jit.pwindow", "jit.qt.movie", "loadbang", "qmetro", "route", "sel", "slider", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/controlsliderwithtimecode.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0520 Control Slider with Timecode.png"
---

# Control Slider with Timecode

If you want to drive a **slider** using the current time information from **jit.qt.movie**, you can send the ‘gettime’ message into **jit.qt.movie** to cause the ‘time’ message to come out, and use that to drive the slider.

## Objects used

`sel` ×2, `jit.pwindow`, `t`, `slider`, `qmetro`, `/`, `loadbang`, `unpack`, `route`, `jit.qt.movie`

*Patch contains 18 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/controlsliderwithtimecode.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0520 Control Slider with Timecode.png`
