---
type: cookbook
name: "Make an elliptical mask in Jitter"
summary: "Video masking is a technique that allows you to focus an effect on some parts of an image, while leaving other parts uneffected."
chapter: "Jitter"
keywords: ["mask", "jit.matrix"]
objects: ["*", "-", "expr", "jit.matrix", "jit.pwindow", "loadmess", "pack", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/makeanellipticalmaskinjitter.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/makeanellipticalmaskinjitter.png"
---

# Make an elliptical mask in Jitter

Video masking is a technique that allows you to focus an effect on some parts of an image, while leaving other parts uneffected. It's particularly effective when used in the alpha channel of a video, causing some parts of the image to be transparent while other parts remain opaque, allowing for one image to be composited on top of another. The "mask" is a shape, often simply a 1-plane black-and-white or grayscale image, that can be used in the alpha plane to designate which parts of an image should be transparent.

This patch shows how you can make an elliptical mask, using a mathematical formula, with a given amount of blending at the edges of the ellipse. When used for compositing in the alpha channel, the white parts of the ellipse (the high opacity values) will be opaque, the black parts (the zero values) will be transparent, and the gray parts will be partially transparent. Try varying the exponentiality value in the **number** box to achieve different blends at the edges. When you have the mask you want, click on the **message** box that says *exportimage mask* to save the image to a file with the name "mask.png", which you can then use to composite an elliptical image on top of another image, as demonstrated in the example titled "[Submatrices and masking](submatrices-and-masking.md)".

## Objects used

`expr` ×3, `*` ×2, `-` ×2, `uzi` ×2, `loadmess`, `jit.pwindow`, `pack`, `jit.matrix`

*Patch contains 17 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/makeanellipticalmaskinjitter.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/makeanellipticalmaskinjitter.png`
