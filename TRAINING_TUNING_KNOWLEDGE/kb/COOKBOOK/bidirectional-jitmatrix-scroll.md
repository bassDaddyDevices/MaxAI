---
type: cookbook
name: "Bidirectional jit.matrix scroll"
summary: "This example demonstrates how one can make a scrolling display of an array of data using Jitter."
chapter: "Jitter"
keywords: ["jit.matrix", "jit.rota", "scroll"]
objects: ["decide", "i", "jit.matrix", "jit.pwindow", "jit.rota", "pack", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/matrixScroll.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/matrixScroll.png"
---

# Bidirectional jit.matrix scroll

This example demonstrates how one can make a scrolling display of an array of data using Jitter. Each time we add a number to the array, we'll scroll the display to the right. (Or, by clicking on the **toggle**, you can cause the scrolling to go to the left.)

We use the **jit.matrix** object to store and display a one-dimensional matrix (i.e., an array) of numbers. To simplify this demonstration, the numbers that we add to the array will only be either 0 or 1, chosen by a **decide** object each time you click the **button**. But the numbers could come from anywhere.

Each time a new number is added to the array (that is, each time you click the **button**), we set the *offset\_x* attribute of **jit.rota** to 1 so that it will offset its received matrix by one cell, then we place the number in the 0th location in the "scrollme" matrix. (Note that the two **jit.matrix scrollme** objects refer to the same memory location, named "scrollme".) The number is placed in cell 0 of the matrix using the *setcell* message to the upper **jit.matrix** object, then the *bang* triggers the output of that matrix, which goes to the **jit.rota** object, which puts the offset version of the matrix back into itself using the lower **jit.matrix** object, which then passes the resulting matrix on to the **jit.pwindow** to display the contents. The new number is now in cell 1, and cell 0 is empty, awaiting the next new number.

It's easy to switch the direction of the scrolling. Instead of putting the new number in the 0th cell of the matrix, you could put it in the last cell of the matrix (the 99th cell in this example), and change the *offset\_x* attribute of **jit.rota** to -1 instead of 1. We use a **toggle** to allow you to switch easily between rightward scrolling and leftward scrolling.

## Objects used

`jit.matrix` ×2, `i`, `sel`, `jit.pwindow`, `pack`, `jit.rota`, `decide`

*Patch contains 16 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/matrixScroll.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/matrixScroll.png`
