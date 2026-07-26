---
type: cookbook
name: "Change color with RGB values"
summary: "Any desired color is produced by blending three primary colors of light: red, green and blue, each with its own intensity."
chapter: "Jitter"
keywords: ["jit.fill", "plane", "RGB"]
objects: ["jit.fill", "jit.matrix", "jit.pwindow", "multislider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/trycolors_1.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/trycolors_1.png"
---

# Change color with RGB values

Any desired color is produced by blending three primary colors of light: red, green and blue, each with its own intensity. The 4 planes of the matrix in the **jit.matrix** object are considered the alpha, red, green, blue, planes of the color of each pixel. The planes are numbered starting from 0: alpha=0, red=1, green=2, blue=3. Normally the data in a 4-plane image matrix is of type *char*, representing numbers from 0 to 255. 

With the **jit.fill** object, you can choose a plane you want to set to specific value, using the *plane* attribute, then send a value you want to use to fill that plane of a connected **jit.matrix** object. Changing the value changes the intensity of the color in that plane. Experiment with changing the values in the different planes.

You can read about the topic of how colors are represented in a matrix in "[What is a matrix?](https://docs.cycling74.com/max7/tutorials/jitterchapter00a_whatisamatrix)”  and "[Tutorial 5: ARGB color](https://docs.cycling74.com/max7/tutorials/jitterchapter05)".

## Objects used

`jit.pwindow`, `multislider`, `jit.fill`, `jit.matrix`

*Patch contains 7 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/trycolors_1.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/trycolors_1.png`
