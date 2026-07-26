---
type: cookbook
name: "Centering an image in jit.window"
summary: "This example shows you a way to center an image file in jit.window (or jit.world), while retaining the original dimensions of the image."
chapter: "Jitter"
keywords: ["jit.matrix", "jit.window", "jit.world", "image"]
objects: ["+", "-", ">>", "jit.matrix", "jit.window", "pack", "route", "sel", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/centergifjit.window_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/centergifjit.window.png"
---

# Centering an image in jit.window

This example shows you a way to center an image file in **jit.window** (or **jit.world**), while retaining the original dimensions of the image. 

The *importmovie* message to **jit.matrix** loads an image file into that matrix and adapts the dimensions of that **jit.matrix** to correspond to the size of the image. When the image has been loaded, **jit.matrix** sends an *importmovie* message out its right outlet with two arguments: the name of the file, and a *1* or a *0* indicating whether or not the file was loaded successfully. You can use **select** to look for  that "success" value of *1*, and use the *bang* from **select** to trigger other actions. Here, we use it to first trigger a *getdim* message to **jit.matrix**, isolate the x and y dimension values with **route *dim*** and **unpack** ,and store the x and y dimensions of the image in the right inlets of the - and + objects; then we send the *getdim* message to the lower **jit.matrix** object to get its dimensions.

To figure out how to center one matrix within a larger matrix, you need to calculate the difference in their x and y dimensions, divide those differences by 2, and then use the results to calculate the x and y offsets of the corners of the smaller matrix within the larger one. (Instead of a **/ *2*** object to divide by 2, here we used a **>> *1*** object to shift the binary representation of the number one bit to the right, which for integers has the same effect as dividing by 2.)

To place a matrix within another matrix (i.e. to place one matrix as a subset of another matrix in a specific location), turn on the *usedstdim* attribute of the second matrix, and specify the destination location for the incoming matrix using the *dstdimstart* and *dstdimend* attributes. To learn more about those attributes, see the Jitter Tutorial chapter titled "[Matrix Positioning](https://docs.cycling74.com/max8/tutorials/jitterchapter14)".

## Objects used

`-` ×4, `unpack` ×3, `route` ×3, `+` ×2, `>>` ×2, `jit.matrix` ×2, `pack`, `jit.window`, `t`, `sel`

*Patch contains 23 boxes, 33 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/centergifjit.window_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/centergifjit.window.png`
