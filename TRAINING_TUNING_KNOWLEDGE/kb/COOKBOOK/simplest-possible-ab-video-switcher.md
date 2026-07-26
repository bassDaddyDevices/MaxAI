---
type: cookbook
name: "Simplest possible A/B video switcher"
summary: "This is the simplest possible way to switch between two videos."
chapter: "Jitter"
keywords: ["gswitch2", "jit.qt.movie", "jit.window"]
objects: ["gswitch2", "jit.qt.movie", "jit.window", "loadbang", "qmetro"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplestABswitcher.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplestABswitcher.png"
---

# Simplest possible A/B video switcher

This is the simplest possible way to switch between two videos. When the patch is opened we read in a couple of example video clips (which reside with the Max application folder, so they should normally be in the file search path). Because the default state of the 'autostart' attribute in **jit.qt.movie** is 1, the movies start playing immediately. Because the default state of the 'loop' attribute in **jit.qt.movie** is 1, the movies will loop continually. Click on the toggle to start the **qmetro**; the bangs from the **qmetro** will go out one outlet of the **ggate** (the outlet being pointed to by the graphic), and will thus go to one of the two **jit.qt.movie** objects and display that movie. Click on the **ggate** to toggle its output to the other outlet; now the bangs from the **qmetro** are routed to the other **jit.qt.movie** object, so we see that movie instead. (Note: You can also send a *bang* in the left inet of **ggate** to toggle it back and forth, or you can send it the messages *0* and *1* to specify left or right outlet.)

If you don't know the difference between a **metro** object and a **qmetro** object, you can read about it in this page on ["Event Priority in Max (Scheduler vs. Queue)"](https://cycling74.com/articles/event-priority-in-max-scheduler-vs-queue/). In short, **qmetro** is exactly like metro except that it runs at a lower level of priority in Max's scheduler; when Max's "Overdrive" option is checked, Max will prioritize timing events triggered by **metro** over those triggered by qmetro. Since the precise timing of a video frame's appearance is less crucial than the precise timing of an audio or musical event (we don't notice usually when a frame of video appears a fraction of a second late or even occasionally is missing altogether, but we do notice when audio drops out or when a musical event is late), it makes sense to trigger video display with the low-priority scheduler most of the time.

## Objects used

`jit.qt.movie` ×2, `loadbang`, `jit.window`, `gswitch2`, `qmetro`

*Patch contains 9 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplestABswitcher.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplestABswitcher.png`
