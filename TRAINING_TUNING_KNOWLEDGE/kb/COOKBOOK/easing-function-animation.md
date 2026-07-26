---
type: cookbook
name: "Easing function for animation"
summary: "Simple linear motion in 2D animation is achieved by interpolating between two points and successively drawing an object at each intermediate point, as demonstra"
chapter: "Max"
keywords: ["function", "line", "jit.lcd", "jit.window"]
objects: ["*", "+", "-", "function", "gswitch2", "i", "jit.lcd", "jit.window", "line", "loadmess", "pack", "prepend", "qmetro", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/easingfunction.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/easingfunction.png"
---

# Easing function for animation

Simple linear motion in 2D animation is achieved by interpolating between two points and successively drawing an object at each intermediate point, as demonstrated in the example on [Animating 2D graphics](animating-2d-graphics.md). However, in the real world objects move with different sorts of curved trajectories, and they also accelerate and decelerate, which you can think of as a curved trajectory of velocity in time.

The art of making animated objects seem to move naturally—called *easing*—is a topic that has been studied in depth. It requires using mathematics that are more complicated than simple linear interpolation. You can find many [examples of different easing functions](http://gizma.com/easing/), for simulating various sorts of smooth movement.

This example uses a [curved transfer function, stored in a **function** object](curve-transfer-function.md), to give the impression of acceleration and deceleration to a 2D animated object. In this function there are two curved segments: one for the first half of the trajectory to simulate acceleration, and a complementary curve in the second half of the trajectory to simulate deceleration.

You can compare linear motion to (one particular type of) eased motion, and you can try different easing curves in the transfer function. A **ggate** object routes the output of the **line** object, either directly to the math objects for no acceleration/deceleration, or to the transfer function to simulate acceleration/deceleration.

## Objects used

`*` ×2, `pack` ×2, `+` ×2, `i`, `function`, `t`, `prepend`, `-`, `gswitch2`, `line`, `loadmess`, `jit.window`, `jit.lcd`, `qmetro`

*Patch contains 30 boxes, 28 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/easingfunction.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/easingfunction.png`
