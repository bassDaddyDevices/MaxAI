---
type: cookbook
name: "Using alpha masking with jit.lcd content overlay"
summary: "One way to superimpose 2D graphics over a video is to draw into a jit.lcd object and then use alpha masking to overlay the jit.lcd contents on top of the video image."
chapter: "Jitter"
keywords: ["jit.alphablend", "jit.op", "jit.unpack", "paintoval", "prepend", "random", "jit.pack", "jit.lcd", "jit.window"]
objects: ["+", "-", "if", "jit.alphablend", "jit.lcd", "jit.op", "jit.pack", "jit.qt.movie", "jit.unpack", "jit.window", "key", "metro", "pack", "prepend", "random", "route", "select", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/graphicsoverlay.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/graphicsoverlay.png"
---

# Using alpha masking with jit.lcd content overlay

One way to superimpose 2D graphics over a video is to draw into a **jit.lcd** object and then use alpha masking to overlay the **jit.lcd** contents on top of the video image.

The **jit.alphablend** object uses the alpha channel (plane 0 values) of a 4-plane matrix to determine the opacity of that matrix, then combines it with another matrix, using the alpha channel values to determine the mix of the two matrices. For example, if a given pixel has an alpha (plane 0) value of 1, it will be considered fully opaque and will completely occlude the corresponding pixel in the other matrix; an alpha value of 0 means fully transparent, and the pixel of the other matrix will show through; an alpha value of 0.75 (or char 191) means that the two matrices will be mixed 75% + 25%.

In this case, we want to draw a graphic in **jit.lcd**, then use the nonzero pixels of that image to create an 1/0 opacity/tranparency "mask" to use as the alpha channel with which to mix the graphic and the underlying video. This process is shown at the bottom of the patch. Using **jit.op**, we add together planes 1, 2, and 3 (the R, G, and B planes) of the graphic coming from **jit.lcd**, then test each pixel to see if the sum is non-zero. The non-zero pixels (the pixels where something has been drawn) are used as the opaque mask in plane 0, and combined with the unaltered planes 1, 2, and 3 in **jit.pack**. The resulting matrix is sent into the left inlet of jit.alphablend, where it's blended with the video, using the mask in its plane 0.

This patch also demonstrates how the location of the mouse in the **jit.window** can be used to draw shapes in **jit.lcd**. The mouse coordinates are reported in the *mouse* messages from **jit.window**. If the mouse button is down, the third argument of the *mouse* message will be *1*, so we use that argument in the **if** object to determine whether to draw a dot in **jit.lcd**. If so, we use **random** to randomly choose values for the RBG colors of the dot, we do some math to specify the four corners of the drawing region, and we use **prepend** to put the word *paintoval* before the four coordinate values and the three color values. The full *paintoval* message draws a dot with the specified radius, and it is followed by a *bang* to send out the contents of **jit.lcd**, and that matrix goes to **jit.alphablend** to be combined with the video.

## Objects used

`t` ×3, `jit.op` ×3, `random` ×3, `select` ×2, `+` ×2, `-` ×2, `jit.pack`, `metro`, `jit.qt.movie`, `jit.alphablend`, `jit.unpack`, `key`, `jit.lcd`, `pack`, `prepend`, `unpack`, `if`, `route`, `jit.window`

*Patch contains 41 boxes, 52 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/graphicsoverlay.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/graphicsoverlay.png`
