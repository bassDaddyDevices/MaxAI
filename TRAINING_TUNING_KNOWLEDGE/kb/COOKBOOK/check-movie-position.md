---
type: cookbook
name: "Check movie position"
summary: "This example shows you how to how you can retrieve some attributes of jit.qt.movie object, and how you could use the position of the movie in milliseconds to cause an effect."
chapter: "Jitter"
keywords: ["jit.qt.movie", "route", "jit.window", "gettime", "unpack"]
objects: [">=", "jit.fpsgui", "jit.qt.movie", "jit.window", "metro", "onebang", "prepend", "route", "sel", "select", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/checkmovieposition.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/checkmovieposition.png"
---

# Check movie position

This example shows you how to how you can retrieve some attributes of **jit.qt.movie** object, and how you could use the position of the movie in milliseconds to cause an effect. 

When the movie file is loaded by clicking the *read* message and the **metro** starts, the object **jit.qt.movie** receives the name of the movie file and a success flag 1, which are reported from the right outlet of **jit.qt.movie**, and sent to the **unpack** object. The **unpack** object then turns on the toggle to send the messages *getfps, gettimescale* and *getduration* to the **jit.qt.movie**. The values of those attributes are reported from the right outlet of **jit.qt.movie,** displayed via **route**. The attribute time is the position of the movie which is reported every time metro sends a *bang*. In this example, the time is compared with the duration to see if the movie reaches the end, and a *bang* is sent by the **onebang** object when the time reaches the duration of the movie.

## Objects used

`sel` ×2, `onebang`, `>=`, `jit.fpsgui`, `select`, `prepend`, `unpack`, `route`, `jit.window`, `metro`, `jit.qt.movie`

*Patch contains 35 boxes, 35 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/checkmovieposition.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/checkmovieposition.png`
