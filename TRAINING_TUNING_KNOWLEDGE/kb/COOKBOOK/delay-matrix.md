---
type: cookbook
name: "Delay a matrix"
summary: "This patch demonstrates a way to create a video delay effect using jit.matrixset."
chapter: "Jitter"
keywords: ["jit.matrixset", "jit.qt.movie", "jit.op"]
objects: ["!-", "%", "+", "b", "counter", "jit.matrixset", "jit.op", "jit.pwindow", "jit.qt.movie", "metro"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaymatrix.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaymatrix.png"
---

# Delay a matrix

This patch demonstrates a way to create a video delay effect using **jit.matrixset**. The **jit.matrixset** object is essentially an array of Jitter matrices. One of the things you can do with such an array is store a set of past frames of a video to recall later. Here we use the array as a circular buffer of the most recent 30 video frames to come out of j**it.qt.movie**.

The *index* message to **jit.matrixset** indicates the location in the array where we want to store a matrix. The next *jit\_matrix* to come in the inlet will be stored at that location. The *outputmatrix* message causes *jit.matrixset* to output the matrix that is stored at a particular index. So, to create the desired delay effect, we need to continually store each frame of video in a subsequent index of the array, from 0 to 29, wrapping around to the beginning when we reach the end of the array, and we need to output the matrix that is some number of frames in the past. Each frame of video from **jit.qt.movie** triggers the **counter** go to the next index (with an *index* message) and also cause the output of a past matrix (with the *outputmatrix* message), then the current video frame gets stored in **jit.matrixset** at the specified index.

As with audio delay, one of the effective uses of video delay is to composite the delayed frame with the current frame. In this example we do a simple subtraction of the delayed frame from the current frame, using **jit.op**. As you'll see, a very short delay of one or two frames causes an interference effect, whereas a longer delay causes more of a discrete "echo" in which the two images are less correlated.

## Objects used

`jit.pwindow` ×3, `metro`, `b`, `!-`, `%`, `+`, `counter`, `jit.op`, `jit.qt.movie`, `jit.matrixset`

*Patch contains 30 boxes, 31 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaymatrix.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaymatrix.png`
