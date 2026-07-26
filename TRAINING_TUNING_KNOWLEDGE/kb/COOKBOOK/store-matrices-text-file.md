---
type: cookbook
name: "Store matrices in a text file"
summary: "To store an array of integers, you will usually use the table object."
chapter: "Jitter"
keywords: ["array", "Matrix", "text. coll", "jit.matrix", "jit.spill", "jit.fprint", "jit.matrixset"]
objects: ["coll", "counter", "jit.matrix", "jit.noise", "jit.spill", "prepend", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/storematricesintextfile.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/storematricesintextfile.png"
---

# Store matrices in a text file

To store an array of integers, you will usually use the **table** object. To store an array of floating point values, you can use the **buffer~** object. Although the **buffer~** object is normally used for storing audio data, it can easily be used simply as an array of *float*s, accessed by the **peek~** object, which works even when MSP audio is not on.

Another good object for storing and accessing an array of *int* or *float* data is **jit.matrix**. If you define a matrix as having only one dimension, you can treat it as a simple array, just like **table** or **buffer~**. The real power of **jit.matrix**, of course, is that you can define it to contain a multi-dimensional array (up to 32 dimensions), and each cell of that array can contain up to 32 numbers (i.e., the matrix can be defined to have up to 32 *planes*). So, in **jit.matrix** you can store and access any amount of data organized in different dimensions.

If you want to convert a matrix into a (one-dimensional) list, the most appropriate object is **jit.spill**. If you want to save a matrix into a text file of numbers, you can use **jit.fprint**. If you want to store multiple matrices in an indexed data structure, effectively an array of matrices, you can use **jit.matrixset**.

If you wanted to save several matrices in a text file, each one as a list of numbers tagged with a unique index number, you could consider using the method shown in this example. The contents of the **jit.matrix** are spilled out as a single list, that list is given an index number and is stored in a **coll** object, and then you can *write* the contents of the coll as a plain text file.

This is not particularly a great idea for use within Max. The **jit.matrixset** object is a more efficient and useful way to store an indexed set of multiple matrices, and you can write that to a fairly compact .jxf file, which you can then read into Max later. However, if you need to export multiple matrices as plain text for use outside of Max—each one tagged with an index number followed by a comma, and terminated by a semicolon—this method works.

## Objects used

`prepend` ×2, `counter`, `t`, `coll`, `jit.noise`, `jit.spill`, `jit.matrix`

*Patch contains 12 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/storematricesintextfile.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/storematricesintextfile.png`
