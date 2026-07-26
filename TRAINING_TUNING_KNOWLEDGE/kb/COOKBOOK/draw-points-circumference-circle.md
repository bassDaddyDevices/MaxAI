---
type: cookbook
name: "Draw Points on the Circumference of a Circle"
summary: "This example shows how to draw a circumference with the lcd object, and how to draw N evenly spaced dots along that same circumferece."
chapter: "Max"
keywords: ["lcd", "cos", "sin", "expr"]
objects: ["!-", "*", "+", "-", "/", "cos", "expr", "lcd", "loadbang", "pack", "pak", "sin", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/drawpointsoncircumferenceofacircle.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Draw Points on the Circumference of a Circle_0.png"
---

# Draw Points on the Circumference of a Circle

This example shows how to draw a circumference with the **lcd** object, and how to draw N evenly spaced dots along that same circumferece. Knowing the center and radius of the circle, the number of possible dot locations, and the index number of the particular dot, you can calculate the location of the dot using cosine and sine functions. Give this example a try pushing the **button** on the top left to “draw a circle”, and the **number** box next to it to “draw the points” –– please note that this has the ‘mousefilter’ attribute enabled (which you can access on the inspector window), so you can only send one value at a time with the mouse or keyboard keys. After you get familiar with these and the *clear* **message** box, take a look at all the parameters that you can control using the other **number** boxes to the right.

## Objects used

`+` ×5, `-` ×4, `*` ×3, `unpack` ×2, `pack` ×2, `expr` ×2, `loadbang`, `t`, `!-`, `sin`, `cos`, `/`, `lcd`, `pak`

*Patch contains 58 boxes, 64 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/drawpointsoncircumferenceofacircle.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Draw Points on the Circumference of a Circle_0.png`
