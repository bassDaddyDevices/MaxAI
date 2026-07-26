---
type: cookbook
name: "Color bit depth in Jitter"
summary: "A Jitter matrix in which the cells represent colored pixels—such as a video—normally has four planes of 8-bit (char) data, representing the values of the alpha,"
chapter: "Jitter"
keywords: ["jit.op", "jit.cellblock", "color"]
objects: ["jit.cellblock", "jit.noise", "jit.op", "jit.pwindow"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jitterbitdepth.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/jitterbitdepth.png"
---

# Color bit depth in Jitter

A Jitter matrix in which the cells represent colored pixels—such as a video—normally has four planes of 8-bit (*char*) data, representing the values of the alpha, red, green, and blue components of the color. If you wanted to reduce the bit depth of that color information to fewer than 8 bits, which would reduce the total number of colors in the image, a simple way to do that is to shift all the bits to the right (so that the least significant bits are lost), then shift them back. That's equivalent to doing an integer division by a power of two, then multiplying by a power of two.

In this example, we use **jit.noise** to generate a 4x3 matrix of color information (4 planes of type *char*), then we use **jit.op** to shift the numbers 6 bits to the right (equivalent to an integer division by 64, which is 2 to the 6th power). That reduces all the numbers to only two bits, representing numbers from 0 to 3. When we then shift those numbers 6 bits to the left (equivalent to multiplying by 64), we get the four numbers 0, 64, 128, and 192. This procedure reduces the total number of possible colors in the image from 16,777,216 (256 times 256 time 256) to 64 (4 times 4 times 4).

In general a rightward bit-shift is a computationally efficient way to perform an integer division by a power of two, and a leftward bit-shift is the same as multiplying by a power of two. When you shift the bits of an unsigned integer (or *char*), some bits will be lost, reducing the bit precision of the number. Reducing the bit depth is an efficient way to degrade an image (or a sound).

## Objects used

`jit.cellblock` ×2, `jit.pwindow` ×2, `jit.op` ×2, `jit.noise`

*Patch contains 10 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/jitterbitdepth.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/jitterbitdepth.png`
