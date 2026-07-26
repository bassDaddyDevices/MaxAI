---
type: cookbook
name: "A/B video switcher"
summary: "This is a slightly more refined A/B video switcher patch than the simple one shown in \"Simplest A/B video switcher(simplest-possible-ab-video-switcher.md)\"."
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.movie", "switch video"]
objects: ["==", "jit.qt.movie", "jit.window", "key", "loadbang", "qmetro", "sel", "select", "textbutton"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ABvideoswitcher.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ABvideoswitcher.png"
---

# A/B video switcher

This is a slightly more refined A/B video switcher patch than the simple one shown in "[Simplest A/B video switcher](simplest-possible-ab-video-switcher.md)". It has a more sophisticated user interface when viewed in Presentation mode. It will try to open two video files called "A.mov" and "B.mov", and it also provides buttons for the user to open any other videos to use as the A and B rolls.

Another possibly significant difference is that in this example we stop the movie that is not being viewed, and then when we switch back to that movie we restart it from the place it left off. In the previous example both movies were running all the time. If you need for the two movies always to be synchronized, you can either leave them both running as in that other example, or, whenever you stop one **jit.qt.movie** [or **jit.movie**, or **jit.movie~**] object, you can get its current 'time' attribute value and use that value to set the 'time' attribute of the other **jit.qt.movie** object when you start that one. (That's not demonstrated in this example.)

## Objects used

`select` ×4, `textbutton` ×3, `key` ×2, `qmetro` ×2, `jit.qt.movie` ×2, `sel`, `loadbang`, `jit.window`, `==`

*Patch contains 46 boxes, 47 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ABvideoswitcher.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ABvideoswitcher.png`
