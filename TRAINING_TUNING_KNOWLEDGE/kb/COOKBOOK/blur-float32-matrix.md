---
type: cookbook
name: "Blur a float32 matrix"
summary: "To blur an image in a Jitter matrix, one cheap and easy way is to downsample the image, then re-upsample it with interpolation."
chapter: "Jitter"
keywords: ["blur", "jit.convolve", "float32", "convolution"]
objects: ["jit.cellblock", "jit.convolve", "jit.matrix", "jit.noise", "jit.pwindow", "loadbang"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/blurfloat32matrix.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0558 Blur a float32 matrix.png"
---

# Blur a float32 matrix

To blur an image in a Jitter matrix, one cheap and easy way is to downsample the image, then re-upsample it with interpolation. Another common method, though a little more computationally expensive, is to use convolution, effectively replacing each pixel with a weighted combination of its surrounding pixels.This example shows how to blur a *float32* matrix using **jit.convolve**.

The right inlet of **jit.convolve** requires a (usually small) matrix containing scaling factors for all the surrounding pixels that one would like to use for each pixel of the matrix that comes in the left inlet. In this example we are telling **jit.convolve** to give each pixel of the incoming image a 20% (0.2) weighting for the original pixel, a 5% (0.05) weighting for the pixels above, below, and on either side of it, and a 15% (0.15) weighting for the pixels at each of its corners. Those surrounding pixels, and the origin pixel in the center, are scaled by those factors, added together, and put in place of the origin pixel in the outgoing matrix. You can see that the result of this convolution kernel and these weightings gives a blurring effect to the output, softening the edges between blocks of color. A more drastic blur could be achieved using a larger convolution matrix in the right inlet.

## Objects used

`jit.pwindow` ×2, `jit.matrix` ×2, `loadbang`, `jit.noise`, `jit.cellblock`, `jit.convolve`

*Patch contains 13 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/blurfloat32matrix.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0558 Blur a float32 matrix.png`
