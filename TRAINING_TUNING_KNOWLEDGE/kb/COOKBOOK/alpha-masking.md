---
type: cookbook
name: "Alpha masking"
summary: "A video matrix, such as comes out of jit.movie, has four planes of data, representing alpha, red, green, and blue."
chapter: "Jitter"
keywords: ["jit.movie", "jit.op", "jit.alphablend", "jit.window", "jit.matrix"]
objects: ["jit.alphablend", "jit.matrix", "jit.movie", "jit.op", "jit.window", "loadbang", "metro", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/alphamasking.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/alphamasking.png"
---

# Alpha masking

A video matrix, such as comes out of **jit.movie**, has four planes of data, representing alpha, red, green, and blue. The alpha channel contains information about the opacity of the other three planes—a factor that can be used when mixing/compositing with another image. Normally the values in the alpha channel are all set to 1., meaning full opacity. However, if some values in the alpha channel are 0., the image will be transparent in those pixels, allowing another image to show through.

The **jit.alphablend** object uses the alpha channel of one image (the 4-plane matrix coming in one of its inlets) to determine the opacity of each of that image's pixels, and composites that image with the image coming in its other inlet. This patch uses two of the example videos provided with Max to demonstrate.

The two example movie files, "oh.mov" and "dishes.mov", are read into two **jit.movie** objects, and the display of those videos is triggered by *bang* messages from the **metro** (or **qmetro**) object. The video "oh,mov" has a blue background, so for this example we can simplistically use the color blue to determine which pixels we want to make transparent. The **jit.matrix** object's *planemap* attribute allows us to specify how input planes should be used in the output. In this case, we have specified that plane 3, the blue plane, should also be used in place of plane 0, the alpha plane. In effect, wherever blue appears strongly in the input image will be used to determine transparency when we composite the image with another video. We pass that through **jit.op** and use the < operator to turn all alpha values that are less than 0.8 to 1., and turn all alpha values that are greater than or equal to 0.8 to 0., while passing the other three planes through unchanged. Now we have an alpha plane that consists only of values 1 or 0. The **jit.alphablend** object then uses those values to determine the mix between the two video matrices. (Note that the matrix in the right inlet must come in first, since the matrix in the left inlet triggers the mixing calculation.)

## Objects used

`jit.movie` ×2, `jit.op`, `jit.matrix`, `jit.alphablend`, `jit.window`, `loadbang`, `select`, `metro`

*Patch contains 19 boxes, 21 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/alphamasking.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/alphamasking.png`
