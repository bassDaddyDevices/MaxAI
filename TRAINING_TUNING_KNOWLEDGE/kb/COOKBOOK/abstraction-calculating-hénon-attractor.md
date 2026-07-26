---
type: cookbook
name: "Abstraction for calculating the Hénon attractor"
summary: "The \"Hénon attractor\" (or \"Hénon map\") is an iterative function that produces a particular chaotic pattern of behavior, which can be visualized or sonified."
chapter: "Max"
keywords: ["Henon", "chaos", "iterative", "algorithmic"]
objects: ["*", "+", "-", "f", "patcherargs", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/henon.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/henon.png"
---

# Abstraction for calculating the Hénon attractor

The "Hénon attractor" (or "[Hénon map](https://en.wikipedia.org/wiki/H%C3%A9non_map)") is an iterative function that produces a particular chaotic pattern of behavior, which can be visualized or sonified. An iterative function is a formula that uses its own output as an input variable in its own subsequent calculation. In the case of the Hénon map, the function outputs two values, *x* and *y*, which can be considered as the coordinates of a point in two-dimensional Cartesian space. Those two output values are then stored to be used as the *x* and *y* variables the next time the function is calculated. The output points, when plotted as a series of points on a graph, display a distinctive shape. The function has two additional variables, *a* and *b*, which are parameters that influence the pattern of output, but the aggregate of all the output points invariably conforms to the basic Hénon shape.

This abstraction calculates the *x* and *y* values for one such point each time it receives a *bang* (or any message) in its left inlet. You can see and hear one possible visualization/sonification of the Hénon attractor in a related example called "Using the Hénon attractor".

## Objects used

`*` ×3, `t` ×2, `f` ×2, `unpack`, `patcherargs`, `+`, `-`

*Patch contains 36 boxes, 29 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/henon.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/henon.png`
