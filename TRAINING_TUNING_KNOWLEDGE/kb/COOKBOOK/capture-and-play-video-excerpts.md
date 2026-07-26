---
type: cookbook
name: "Capture and play video excerpts"
summary: "This patch shows a way to capture and play back excerpts of live video."
chapter: "Jitter"
keywords: ["jit.matrixset", "jit.grab", "decide", "random", "record"]
objects: ["*", "+", "b", "counter", "decide", "gate", "jit.grab", "jit.matrixset", "jit.window", "loadbang", "prepend", "qmetro", "random", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/5secRecentClips.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/recentvideoclips.png"
---

# Capture and play video excerpts

This patch shows a way to capture and play back excerpts of live video. It uses **jit.matrixset** as a circular buffer to hold selected frames of live video from **jit.grab**, and it uses the **decide** and **random** objects to make arbitrary decisions regarding when to record and which excerpt to play back.

The task we have set is: Every five seconds, arbitrarily decide whether to record the next 5-second excerpt of live video, and at the same time also arbitrarily decide which of the five most recently captured excerpts to play back.

The **jit.matrixset** object allocates memory in which to store and recall matrices, in this case frames of video. The **jit.matrixset** in this patch has been initialized to set aside memory for 750 frames of 640x480 video. (At 30 frames per second, 5 seconds is 150 frames, so five such excerpts will total 750 frames.) The **counter** at the top responds to the **qmetro** and counts repeatedly through the 150 numbers 0-149. At the beginning of each cycle, it uses the **decide** object to decide whether or not to open two **gate** objects that will let the numbers from the **counter** through to specify an index number in **jit.matrixset** and will let the frames of video from **jit.grab** be stored. If **decide** sends out *0*, the **gate**s are closed and nothing happens; if **decide** sends out *1*, the **gate**s are opened and 150 frames of video are stored in **jit.matrixset**. (Note that the lower **counter** and the **\* 150** object create an index offset within the **jit.matrixset** in multiples of 150—0, 150, 300, 450, or 600— to fill up different regions of the 750 total frames.)

At the same time, at the beginning of each 5-second cycle, the **random** object is triggered and randomly chooses one of those 150-frame offsets from which to output frames of video from **jit.matrixset**, with the *outputmatrix* message.

## Objects used

`sel` ×3, `prepend` ×2, `+` ×2, `*` ×2, `t` ×2, `gate` ×2, `counter` ×2, `jit.window`, `b`, `loadbang`, `jit.grab`, `random`, `decide`, `jit.matrixset`, `qmetro`

*Patch contains 26 boxes, 33 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/5secRecentClips.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/recentvideoclips.png`
