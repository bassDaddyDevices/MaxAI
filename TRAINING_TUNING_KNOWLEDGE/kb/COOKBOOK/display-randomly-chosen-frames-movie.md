---
type: cookbook
name: "Display randomly chosen frames of a movie"
summary: "When you open a movie file in jit.movie with a read message, the exact amount of time that that operation will take is unknowable, but jit.movie will send a rea"
chapter: "Jitter"
keywords: ["jit.movie", "random", "framecount", "read"]
objects: ["b", "jit.movie", "jit.world", "qmetro", "random", "route", "sel", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/framebyframe.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/framebyframe_0.png"
---

# Display randomly chosen frames of a movie

When you open a movie file in **jit.movie** with a *read* message, the exact amount of time that that operation will take is unknowable, but **jit.movie** will send a *read* message out of its right outlet when the file-opening operation has been completed. When you read in a file, you should generally wait for that message to come out before proceeding. In that message, the word *read* is followed by the name of the file, followed by a success indicator, 1 or 0. So, you can use **route** to direct the arguments of any *read* message to an **unpack** object, and use **sel** to look for the success indicator. If the file-opening operation was successful, **sel** will send out a *bang*, which you can then use to trigger other operations, such as requesting information about the movie.

This patch uses that *bang* to get information about the number of frames in the movie, and in turn uses that information to set the maximum value for a **random** object that will be used to choose random frames of the movie. A **metro** object regularly bangs **jit.movie** to send out its current frame, chooses a new random frame to go to, and then bangs **jit.world** to display the frame that was just sent out.

## Objects used

`b` ×2, `random`, `sel`, `unpack`, `route`, `qmetro`, `jit.movie`, `jit.world`

*Patch contains 14 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/framebyframe.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/framebyframe_0.png`
