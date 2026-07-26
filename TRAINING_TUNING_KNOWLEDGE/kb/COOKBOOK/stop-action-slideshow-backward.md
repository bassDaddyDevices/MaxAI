---
type: cookbook
name: "Stop-action slideshow (backward)"
summary: "Here's an example of algorithmic video editing in Jitter."
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.window"]
objects: ["!-", "%", "+", "/", "i", "jit.qt.movie", "jit.window", "pipe", "round", "route", "sel", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stopactionslideshow(backward).maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stopactionslideshow(backwards).png"
---

# Stop-action slideshow (backward)

Here's an example of algorithmic video editing in Jitter. The goal is to create a stop action slideshow of single frames of video, stepping through a video in 1-second increments. And just to make it a bit weirder and more challenging, we'll step through the movie backward, from end to beginning.

Some information we might need to know in order to do this properly is the frame rate (frames per second) of the video so that we know how many frames to move ahead or backward in order to move one second's worth of time. We might also want to know the total number of frames in the video, so we know where to begin and end. Finally, we need to make a decision about how quickly we want to step through the "slideshow". In this example, by default we step through it one second at a time, but we make this rate adjustable with a number box.

When you read in a movie (it should be at least several seconds long, since we're going to be leaping through it in 1-second increments) **jit.qt.movie** sends out a *read* message reporting whether it read the movie file successfully. If it did, we request information about the frames per second (fps) and number of frames (framecount), information that's contained in the movie file itself, and that **jit.qt.movie** can provide for us. We use that information to calculate the duration of the movie in seconds (framecount/fps), and to set the step size and limit of our stepping calculations.

The slideshow step calculator works like this. Starting at frame 0, use the **+** object to add one second's worth of frames to move ahead one second, use the **%** (modulo) object to keep the numbers within the range of total frames in the video (**%** is most useful for keeping numbers cycling within a given range), and then (because we actually want to be moving backward rather than forward) we subtract the frame number from the total number of frames in the **!-** object. (You could omit that object if you wanted your slideshow to move forward.) We send that resulting frame number to **jit.qt.movie** as part of a *frame* message to cause it to go to that frame, and then we send a *bang* right after that to cause it to send its matrix information to **jit.window**. Also, we send the original number (before the **!-** object) to a **pipe** object to delay it a certain number of milliseconds, then it goes right back into the **i** object at the top to start the process over. (This will go on endlessly until **pipe** receives a *stop* message that causes it to cancel its scheduled next output.)

## Objects used

`route` ×2, `/`, `round`, `jit.window`, `pipe`, `!-`, `%`, `+`, `i`, `sel`, `unpack`, `jit.qt.movie`

*Patch contains 36 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stopactionslideshow(backward).maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stopactionslideshow(backwards).png`
