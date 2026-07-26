---
type: cookbook
name: "Submatrices and masking"
summary: "This patch shows how to use a mask in the alpha channel to impose a non-rectangular image on top of another image."
chapter: "Jitter"
keywords: ["jit.matrix", "jit.pack", "jit.unpack", "jit.alphablend", "alpha blending"]
objects: ["jit.alphablend", "jit.matrix", "jit.pack", "jit.pwindow", "jit.qt.movie", "jit.unpack", "qmetro", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/alphamasksubmatrix.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/alphamasksubmatrix.png"
---

# Submatrices and masking

This patch shows how to use a mask in the alpha channel to impose a non-rectangular image on top of another image. For this patch to work, you will need to download the mask file called "mask.png" (which was made using the patch in "[Make an elliptical mask in Jitter](make-elliptical-mask-jitter.md)").

This example demonstrates the technique of alpha masking, and shows how to position a matrix at a specific location within another matrix. The **jit.alphablend** object expects an image matrix in each of its two inlets, and it uses the alpha channel in one of the two matrices to determine the opacity of that image when it's composited on top of the other. To set up the patch, click on the **message** box that says *importmovie mask.png* to load in the mask, and click on each of the **message** boxes that says *read* to load a movie into each of the **jit.qt.movie** objects. When you click on the **toggle**, it starts both of the movies and turns on the **qmetro**, which begins sending *bang* messages to the two **jit.qt.movie** objects and the **jit.matrix** object to send out their matrices. Neither of the movies has anything remarkable in its alpha channel, but for the movie on the left, we separate its individual planes with **jit.unpack**, and we insert the mask image in the alpha plane (plane 0), the leftmost inlet of **jit.pack**.

The recombined matrix from **jit.pack** then goes to a **jit.matrix** object that has particular attributes. The *usedstdim* attribute is turned on, which means, "Instead of filling the entire matrix, place the incoming matrix only in the destination dimenstions that are specified." The incoming matrix is thus placed in the smaller area defined by the *dstdimstart* and *dstdimend* attributes; *dstdimstart* specifies the left-top beginning corner coordinates of the submatrix area, and *dstdimend* specifies the right-bottom corner coordinates. The incoming "source" matrix is therefore adapted to fit only in that specified "destination" area, and the rest of the destination matrix (the 0 values that were already in the rest of the **jit.matrix** object) are left unchanged. In this way, the left movie occupies only the left-lower corner of the matrix.

The elliptical shape in the "mask.png" image, which is now in the alpha channel of that corner of the matrix, is used to determine the opacity of the left movie when it's placed on top of the right movie. Where the mask image has *0* values (or very low opacity values), the image is transparent, and where the mask has high values, we see the left image.

## Objects used

`jit.matrix` ×2, `jit.qt.movie` ×2, `jit.pwindow`, `jit.alphablend`, `jit.pack`, `jit.unpack`, `select`, `qmetro`

*Patch contains 23 boxes, 30 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/alphamasksubmatrix.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/alphamasksubmatrix.png`
