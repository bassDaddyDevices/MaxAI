---
type: cookbook
name: "Play a QuickTime movie"
summary: "This shows a simple way to play a QuickTime movie using Jitter."
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.window", "metro", "MOV file"]
objects: ["jit.qt.movie", "jit.window", "metro", "route", "select", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playamovie_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playamovie_0.png"
---

# Play a QuickTime movie

This shows a simple way to play a QuickTime movie using Jitter. When the **jit.qt.movie** object receives a *read* message, it opens a dialog box allowing you to select a movie file. As soon as you select a movie and click OK, **jit.qt.movie** begins to retrieve frames of video from that file and place them in memory, at the frames-per-second rate specified in the movie file itself. (It also begins playing the audio soundtrack of the video.) But for you to see the video, you need to create a window in which to display it, and you need to tell that window what to display. The**jit.window** object creates a window, with whatever name you give it in the first argument, at the location you specify in the next four arguments (the pixel offset coordinates of the left, top, right, and bottom edges of your window). Then, each time **jit.qt.movie** receives a *bang* it sends out information about the location of the image in memory, which the **jit.window** will refer to and draw. Because we expect that a video might have a frame rate as high as 30 frames per second, we use a **metro** to send a *bang* 30 times per second, i.e., every 33.333 ms. So,**jit.qt.movie** takes care of grabbing each frame of the video and putting it in memory, **metro** triggers it 30 times per second to convey that memory location to **jit.window**, and **jit.window** refers to that memory location and draws its contents.

## Objects used

`jit.window`, `select`, `unpack`, `route`, `jit.qt.movie`, `metro`

*Patch contains 37 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playamovie_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playamovie_0.png`
