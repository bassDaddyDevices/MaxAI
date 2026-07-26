---
type: cookbook
name: "Detect when a movie has been read successfully"
summary: "Did you know that the jit.movie (or jit.qt.movie) object will report when it has completed a read operation?"
chapter: "Jitter"
keywords: ["jit.movie", "route", "read", "unpack"]
objects: ["jit.movie", "jit.window", "loadbang", "metro", "route", "sel", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detectmovieread.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/detectmovieread.png"
---

# Detect when a movie has been read successfully

Did you know that the **jit.movie** (or **jit.qt.movie**) object will report when it has completed a *read* operation? You can show that report to the user as visual feedback, and/or you can use that report to trigger other events in your program, such as querying for information about the movie that is being read.

When **jit.movie** receives a *read* message it opens the specified movie file and reads in the first frame of video (followed by successive frames if the *autostart* attribute is on). It also sends out a *read* message of its own out its right outlet, reporting the name of the file and a “flag” (a *1* or a *0*) telling whether the read operation was successful. A typical output message might look like ‘*read dishes.mov 1*′. By looking for that success flag in the outgoing *read* message (using a **select *1*** object), you can confirm that the operation was successful, and can trigger other things to happen.

The **route** object in this patch looks for the selector *read* and sends the rest of the message (the filename and the success flag) out its left outlet, the **unpack** object separates the symbol (the filename) from the integer (the flag), and the **sel 1** object sends a *bang* if the file opened successfully.

The example patches “[Movie attributes](movie-attributes.md)” and “[Attributes of jit.qt.movie](attributes-jitqtmovie.md)” show how to use that *bang* to query the **jit.movie** object for other useful information contained in the movie’s attributes, such as its duration, its frame rate, etc.

## Objects used

`jit.window`, `sel`, `unpack`, `loadbang`, `route`, `jit.movie`, `metro`

*Patch contains 16 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detectmovieread.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/detectmovieread.png`
