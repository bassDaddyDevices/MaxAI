---
type: cookbook
name: "RGB color"
summary: "One way to describe a color is in terms of the intensity of three components: red, green, and blue."
chapter: "Jitter"
keywords: ["jit.matrix", "jit.pwindow"]
objects: ["jit.matrix", "jit.pwindow"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/trycolors.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/trycolors.png"
---

# RGB color

One way to describe a color is in terms of the intensity of three components: red, green, and blue. This descriptive form is known as RGB color space. (It’s called a *color space* because you can think of each of the three color components as representing a dimension in a 3D space. By that reckoning, each unique color exists as a point in that 3D space, identifiable by its three spatial coordinates, which are correlated to the intensity of each component.)

In a Jitter matrix that contains an image in RGB format, there are four planes of information representing alpha (opacity), red, green, and blue. Each cell of the matrix represents a pixel of the image, and contains four numbers. The color of the pixel is determined by the intensity of the three colors—the numbers in planes 1, 2, and 3 (the alpha value is in plane 0).

If you’re not used to thinking of colors in RGB space, you may need a little practice. This patch lets you specify a value for each of the three color components (on a scale from 0 to 255) and see the color that results from the combination of those three components. The *setcell* message to **jit.matrix** specifies a cell location within the matrix, the plane you want to affect, and the value you want to put in that plane of that cell. The matrix in this example is only a single cell, since all we want to do is see the color of one pixel. The message box constructs the *setcell* message and then bangs the **jit.matrix** object to display the color.

Try different values of red, green, and blue to get used to how they combine to produce different colors.

## Objects used

`jit.pwindow`, `jit.matrix`

*Patch contains 14 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/trycolors.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/trycolors.png`
