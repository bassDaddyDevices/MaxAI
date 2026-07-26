---
type: cookbook
name: "Crossfade video and audio"
summary: "You can make a crossfade between two videos or betwen two sounds by multiplying the amplitude of one of them by values going progressively from 1 to 0 while you"
chapter: "Jitter"
keywords: ["slider", "jit.qt.movie", "jit.movie", "jit.xfade", "volume", "crossfade"]
objects: ["!-", "jit.qt.movie", "jit.window", "jit.xfade", "loadbang", "qmetro", "select", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/crossfadevideoandaudio.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0147 Crossfade video and audio.png"
---

# Crossfade video and audio

You can make a crossfade between two videos or betwen two sounds by multiplying the amplitude of one of them by values going progressively from 1 to 0 while you multiply the other by values going progressively from 0 to 1. In this example, we use a **slider** object that outputs values from 0 to 1 to control the volume of two movie soundtracks, using the *vol* attribute of **jit.qt.movie** (or **jit.movie**). Notice that initially the *vol* attribute for the movie on the left is set to 1 and the volume of movie on the right is set to 0. As you move the **slider**, for the movie on the left the value is subtracted from 1 with the **!-** object, so that the volume of that movie goes from 1 to 0 while the volume of the movie on the right goes from 0 to 1. When the slider is right in the middle, both volumes will be at 0.5. Thus, the **slider** controls the balance of the sound of the two movies, and can be used to fade from one to the other.

The **jit.xfade** object works similarly for blending or crossfading video matrices. As the *xfade* attribute goes from 0 to 1, the output matrix fades from the left input matrix to the right input matrix. Internally, **jit.xfade** is working the same way as described in the preceding paragraph. The brightness of the left input matrix goes from 1 to 0 as the brightness of the right input matrix goes from 0 to 1. The right matrix is multiplied by the *xfade* value while the left matrix is multiplied by 1 minus the *xfade* value; then the two matrices are added together and the resulting matrix is sent out the left outlet.

## Objects used

`jit.qt.movie` ×2, `slider`, `!-`, `select`, `qmetro`, `jit.window`, `jit.xfade`, `loadbang`

*Patch contains 18 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/crossfadevideoandaudio.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0147 Crossfade video and audio.png`
