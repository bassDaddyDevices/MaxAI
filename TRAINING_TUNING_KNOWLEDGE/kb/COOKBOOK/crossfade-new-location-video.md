---
type: cookbook
name: "Crossfade to new location in a video"
summary: "To jump immediately to a new location in a movie, you can send the frame message to jit.movie (or jit.qt.movie)."
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.movie", "jit.xfade", "crossfade"]
objects: ["!-", "+", "delay", "gate", "i", "jit.qt.movie", "jit.window", "jit.xfade", "key", "line", "loadbang", "pack", "qmetro", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jumpframewithcrossfade.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0148 Crossfade to new location in a video.png"
---

# Crossfade to new location in a video

To jump immediately to a new location in a movie, you can send the *frame* message to **jit.movie** (or **jit.qt.movie**). To crossfade to a new location, instead of a jump cut, you need to be playing the video twice, and crossfade from the current video to the second video, after which you can stop playing the first video. To do that again, you can just reverse the process: start the first video at the new location, crossfade back to the first video, and stop playing the second one. In this example we use **jit.xfade** to do the crossfade, and we use a **toggle** to switch back and forth between the two videos so that we're only seeing one at a time.

To try it out, choose a crossfade time—say, 2000 milliseconds (two seconds)—then choose a frame to go to. (The example video *blading.mov*, which comes with Max, is exactly twelve seconds long with a frame rate of 15 fps; so, frame numbers up to 180 will work.) When you click on the **button** to trigger the crossfade, it flips the state of the **toggle** from *0* to *1*. That, in turn, causes the **select** object to send a *bang* to start the video that's not currently showing (the **jit.qt.movie** object on the right), sends a message from **pack** to the **line** object to make the crossfade to that video with progressive *xfade* messages to **jit.xfade**, and opens the correct outlet of the **gate** object to direct the *frame* message to the video were crossfading to. When the crossfade is completed, the *bang* from the **select** object, which has been delayed that amount of time in the **delay** object, is used to stop the video that we no longer see (the **jit.qt.movie** object on the left). The next time we click the **button**, the toggle flips its state to *0*, and the process is reversed.

You can probably imagine a situtation using a longer video, where you might want to do several such crossfades to new locations interactively at specific moments. The frame destinations and fade times could be stored in a **coll** object, and you could step through those stored fades with a **counter**.

## Objects used

`delay` ×2, `sel` ×2, `jit.qt.movie` ×2, `gate`, `+`, `i`, `pack`, `key`, `jit.window`, `!-`, `line`, `loadbang`, `qmetro`, `jit.xfade`

*Patch contains 48 boxes, 52 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jumpframewithcrossfade.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0148 Crossfade to new location in a video.png`
