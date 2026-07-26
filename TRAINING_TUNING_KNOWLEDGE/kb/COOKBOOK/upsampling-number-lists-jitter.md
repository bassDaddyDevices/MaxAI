---
type: cookbook
name: "Upsampling number lists with Jitter"
summary: "The term \"upsample\" is used in digital audio and video to mean increasing the sampling resolution of a sound or an image."
chapter: "Jitter"
keywords: ["jit.matrix", "zl", "jit.fill", "jit.spill"]
objects: ["*", "+", "-", "jit.fill", "jit.matrix", "jit.spill", "print", "t", "zl"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/upsamplealistofnumbers_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/upsampleListOfNumbers.png"
---

# Upsampling number lists with Jitter

The term "upsample" is used in digital audio and video to mean increasing the sampling resolution of a sound or an image. More generally the term can be used to mean increasing the size of a set of numbers by some factor, keeping the original numbers and using interpolation to determine the values of the new intermediate numbers.

This patch demonstrates a way to use Jitter to upsample a list of numbers by taking advantage of the *interp* attribute of the **j****it.matrix**object. (Many other Jitter objects have this same interpolation capability.)

Two objects that enable the conversion of a list to a matrix and vice versa are **jit.fill** and **jit.spill**. When **jit.fill** receives a *list* of numbers, it places those numbers in the named matrix at the specified location (in this case cell 0 of plane 0), and sends a *bang* out its outlet when done. On the other end, when **jit.spill** receives a *jit\_matrix*, it outputs those numbers as a *list*, the length of which is specified by its *listlength* attribute.

Because we may not know the length of the incoming list of numbers, we use **zl *len*** to find the length. We use that number to set the *dim* attribute of the **jit.matrix *mylist*** object, and we also multiply it by the upsampling factor to determine the output list length. (That last part is not exactly true. We actually subtract 1 from the length of the incoming list, multiply that by the upsampling factor, then add 1 to that to determine the output list length. That results in us having the desired number of intermediate values, while beginning and ending on the same values as the original list.)

The *bang* from **jit.fill** triggers the output of **jit.matrix *mylist***, and the next **jit.matrix** object—which now has a larger dimension, and which has its *interp* attribute turned on—upsamples that matrix with linear interpolation.

## Objects used

`jit.matrix` ×2, `t`, `-`, `+`, `print`, `jit.spill`, `jit.fill`, `*`, `zl`

*Patch contains 17 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/upsamplealistofnumbers_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/upsampleListOfNumbers.png`
