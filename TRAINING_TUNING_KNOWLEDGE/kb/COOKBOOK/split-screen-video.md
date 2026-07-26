---
type: cookbook
name: "Split screen video"
summary: "The easiest way to cut a two-dimensional matrix into equal-sized rectangular segments is with jit.scissors."
chapter: "Jitter"
keywords: ["jit.scissors", "jit.glue", "split"]
objects: ["jit.glue", "jit.qt.movie", "jit.scissors", "jit.window", "loadbang", "qmetro", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/splitscreenexample.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/splitscreenexample1.PNG"
---

# Split screen video

The easiest way to cut a two-dimensional matrix into equal-sized rectangular segments is with **jit.scissors**. You initialize the **jit.scissors** object's *rows* and/or *columns* attribute, and the object will be created with enough outlets to send each segment out a separate outlet. (For example, **jit.scissors *@rows 3 @columns 4*** will result in the incoming matrix being split into 12 segments.) The **jit.glue** object does the reverse of **jit.scissors**; you specify the number of *rows* and *columns* you want in the output matrix, the object will be created with the appropriate number of inlets, and **jit.glue** connects the separate matrices coming in each inlet, outputting them as a single combined matrix.

In this example, we show how these objects can be used to make a split-screen video. It uses two hypothetical videos named "left.mov" and "right.mov", uses **jit.scissors** to get the left half of the left movie and the right half of the right movie, then uses **jit.glue** to glue them back together.

## Objects used

`jit.scissors` ×2, `jit.qt.movie` ×2, `jit.glue`, `jit.window`, `loadbang`, `select`, `qmetro`

*Patch contains 15 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/splitscreenexample.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/splitscreenexample1.PNG`
