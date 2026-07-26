---
type: cookbook
name: "Create a stop motion effect using jit.qt.movie"
summary: "To create a stop motion effect, calculate the ratio of the movie’s framerate to your desired (stopframe) framerate."
chapter: "Jitter"
keywords: ["jit.qt.movie", "stop motion", "frame", "float"]
objects: ["!/", "*", "+", "/", "4.", "counter", "jit.pwindow", "jit.qt.movie", "loadbang", "metro", "route", "sel", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stopMotionJump.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stopMotionJump.png"
---

# Create a stop motion effect using jit.qt.movie

To create a stop motion effect, calculate the ratio of the movie’s framerate to your desired (stopframe) framerate. Use that value to calculate a **metro** interval. Then move ahead the desired number of frames with each bang of the **metro**. In order to avoid any errors caused by using *int* instead of *float*, calculate and store the current frame number as a *float* (outside of the **jit.qt.movie** object). Finally, send a *frame* message to **jit.qt.movie**.

## Objects used

`t` ×2, `route` ×2, `jit.pwindow`, `!/`, `*`, `+`, `counter`, `metro`, `4.`, `loadbang`, `/`, `sel`, `unpack`, `jit.qt.movie`

*Patch contains 28 boxes, 28 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stopMotionJump.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stopMotionJump.png`
