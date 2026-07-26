---
type: cookbook
name: "text to video"
summary: "This example shows a simple way of putting text into video, with the lines of text stored in a coll object."
chapter: "Max"
keywords: ["coll", "jit.qt.movie", "jit.lcd", "jit.op"]
objects: ["coll", "counter", "jit.lcd", "jit.op", "jit.qt.movie", "jit.window", "metro", "prepend", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/texttovideo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/texttovideo.PNG"
---

# text to video

This example shows a simple way of putting text into video, with the lines of text stored in a **coll** object. After loading the video sending a *read* message to **jit.qt.movie**, you can load each line by clicking the **button** in the middle of the patch.

You could do the same thing reading lines of text from a text file using the **text** object. In OpenGL, the objects **jit.gl.text2D** and **jit.gl.text3D** are the ones you’ll want.

## Objects used

`jit.op` ×2, `counter`, `coll`, `prepend`, `t`, `jit.lcd`, `jit.window`, `metro`, `sel`, `jit.qt.movie`

*Patch contains 25 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/texttovideo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/texttovideo.PNG`
