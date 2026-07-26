---
type: cookbook
name: "Zoom a video in or out"
summary: "The jit.rota object can zoom an image in or out, along the x dimension, the y dimension, or both."
chapter: "Jitter"
keywords: ["jit.rota", "zoom"]
objects: ["*", "-", "i", "jit.matrix", "jit.pwindow", "jit.rota", "loadbang", "route", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/zoomavideo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/zoom a video in or out.png"
---

# Zoom a video in or out

The **jit.rota** object can zoom an image in or out, along the x dimension, the y dimension, or both. It can also be used to shift an image along the x dimension, the y dimension, or both. In this example, we use both zooming and shifting.

The patch shows a way to zoom in on a video while keeping it centered in a fixed-size window. When the patch is opened, the *importmovie* message is used to load a still image into a **jit.matrix** object. (The still image allows you to see the zooming clearly, but you could easily replace the still image with a video in a **jit.movie** object.) As soon as the image or video is loaded, you can use a *dim* message to obtain its dimensions.

The *zoom\_x* and *zoom\_y* messages to **jit.rota** specify a zoom factor along the two axes of the 2D matrix. However, once the zoom of the image has been changed, it will no longer be centered in the outgoing matrix. So, to keep it centered, you need to offset the matrix by the appropriate amount. The number of pixels for the *offset\_x* and *offset\_y* messages to **jit.rota** are calculated by dividing the x and y dimensions of the matrix by the zoom factors of each dimension, then offsetting by half that number to keep the image centered.

## Objects used

`*` ×4, `-` ×2, `t` ×2, `i` ×2, `jit.pwindow`, `loadbang`, `unpack`, `route`, `jit.matrix`, `jit.rota`

*Patch contains 28 boxes, 39 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/zoomavideo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/zoom a video in or out.png`
