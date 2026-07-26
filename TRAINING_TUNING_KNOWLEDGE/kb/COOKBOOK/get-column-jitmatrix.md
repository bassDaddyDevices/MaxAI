---
type: cookbook
name: "Get column from jit.matrix"
summary: "If you want to isolate a particular subset of a matrix—such as a single column, or a single row, or really any rectangular portion of the matrix—a handy object for that purpose is jit.submatrix."
chapter: "Jitter"
keywords: ["jit.matrix", "jit.submatrix", "jit.spill"]
objects: ["jit.matrix", "jit.pwindow", "jit.spill", "jit.submatrix", "loadbang", "print", "t", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/columnfromjit.matrix.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0634 Get column from jit.matrix.png"
---

# Get column from jit.matrix

If you want to isolate a particular subset of a matrix—such as a single column, or a single row, or really any rectangular portion of the matrix—a handy object for that purpose is **jit.submatrix**.

The arguments of the *dim* attribute of **jit.submatrix** specify the dimensions its output, and likewise the dimensions of the portion it will isolate within its input matrix. The arguments of the *offset* attribute additionally specify the offset of that submatrix from the top-left corner of the input matrix. Thus, in this example, the input matrix has dimensions *64 48*, and the output matrix will have dimensions *1 48*, the same height as the input matrix but having a width of only 1, isolating a single column of the input matrix. The **message** box generates an *offset* message, allowing us to specify which of the 64 columns of input we want to use for the output. (The vertical offset is always 0.) The **number** box is where we specify the horizontal offset. That number goes first to the **message** box to generate the *offset* message, then a *bang* triggers the input matrix. The input matrix is shown in the horizontal **jit.pwindow**, and the 1-column output matrix is shown in the vertical **jit.pwindow**.

The patch also demonstrates the **jit.spill** object, which prints out the contents of a matrix as a *list* message. The typed-in attributes specify which plane to access and the desired length of the output list. In this case, there's only one plane in the input matrix, and only 48 values contained in it, so **jit.spill** outputs the entire matrix as a single *list*, which is printed in the Max console window.

Note that the **jit.matrix** object loads in the first frame of a video file with the *importmovie* message, and its arguments modify the format of that frame by reducing its size to 64x48 and converting its data type from *char* to *float32*. The small size of the matrix is more manageable for this example, and the use of *float32* causes the values to be printed as 0. and 1. instead of the *char* values 0 and 255. The dimensions and data type of the imported image have adapted to the specifications of the **jit.matrix**'s arguments.

And, if we wanted to print out all 64 columns of the matrix at once, we could use the **uzi** object to generate numbers 0 to 63 and feed them to the **message** box to generate 64 consecutive *offset* messages (instantaneously) to **jit.submatrix**.

## Objects used

`jit.pwindow` ×2, `loadbang`, `print`, `t`, `jit.spill`, `uzi`, `jit.matrix`, `jit.submatrix`

*Patch contains 13 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/columnfromjit.matrix.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0634 Get column from jit.matrix.png`
