---
type: cookbook
name: "Basics of drawing in the lcd object"
summary: "Onscreen drawing of lines, shapes, text, and stored images is done using drawing commands derived from Apple's QuickDraw/Quartz systems for creating 2D graphics."
chapter: "Max"
keywords: ["lcd", "jit.lcd", "2D graphics", "draw"]
objects: ["+", "lcd", "pack", "pak"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/lcdbasicmessages.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/lcdbasicmessages1.png"
---

# Basics of drawing in the lcd object

Onscreen drawing of lines, shapes, text, and stored images is done using drawing commands derived from Apple's QuickDraw/Quartz systems for creating 2D graphics. The **lcd** object understands many such commands, and can serve as a 2D drawing surface (and/or animation stage) within a Max patch. Note that almost everything that can be drawn in the **lcd** object can also be drawn into a Jitter matrix with the **jit.lcd** object. Once the drawing exists in a Jitter matrix, it can be mixed or composited with other video images and can be displayed in a separate window (or fullscreen) with **jit.window** or **jit.world**.

This patch demonstrates a few basic drawing commands. The drawing location is always specified as x,y coordinates relative to the top-left corner of the **lcd**. So, for example, to begin drawing at a point 100 pixels to the right of, and 120 pixels down from, the top-left corner of the object, you would specify a location "100 120". Colors are almost always specified as three numbers from 0-255, which are "RGB" values expressing the relative intensities of light in the three primary light colors red, green, and blue. In this example, you can see that bright green is described by "0 255 0" (maximum green, but no red or blue), and dark red is described by "128 8 8" (medium amount of red, but almost no green or blue).

The message *frgb* is used to specify a default foreground color for the **lcd**, which is the color that will be used whenever no color is specified for a drawing command. (The message *brgb* is used to specify a background color for the stage, which will be used whenever the stage is erased with a *clear* message.) There are so many possible command messages that it's impractical to try to discuss them all in examples. You need to read the documentation and experiment in order to understand all of the capabilities of **lcd** and **jit.lcd**.

## Objects used

`pak`, `+`, `pack`, `lcd`

*Patch contains 35 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/lcdbasicmessages.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/lcdbasicmessages1.png`
