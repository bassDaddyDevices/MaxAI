---
type: cookbook
name: "Drawing with sprites in lcd"
summary: "For this example to work properly, you will also need to download the small image file \"guitariste.jpg\"."
chapter: "Max"
keywords: ["lcd", "loadbang", "pack", "pak", "pictslider"]
objects: ["lcd", "loadbang", "pack", "pak", "pictslider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/lcdsprites_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/drawsprites.png"
---

# Drawing with sprites in lcd

For this example to work properly, you will also need to download the small image file "guitariste.jpg".

In order to manage the drawing and redrawing of multiple items that might be moving independently in complex ways, **lcd** uses the animation concept of "sprites". A sprite is a specified drawing (which really could be of any degree of complexity) that is treated as an independent object. When the sprite is called by name, a single command can draw the sprite at a desired location and also take care of re-drawing the stage in the area that the sprite used to occupy.

In **lcd**, the message *recordsprite* allows you to start describing a sprite. Subsequent drawing messages describe the sprite. Then the message *closesprite <spritename>* stops recording the description and stores the description with the associated sprite name. After that, you can draw a unique instance of that sprite with the message *drawsprite* (with optional x and y offset to specify its location).

Although it's not visible to you, in the Inspector for the **pictslider** object, the output ranges have been set to correspond to the range of values that are appropriate for the **lcd** object. The minimum and maximum for the y value output range have been exchanged so that the direction of the y values coming out of **pictslider** correspond to the direction in which **lcd** expects them.

The order in which sprites are drawn onscreen (which will determine their front-to-back ordering and thus their occlusion characteristics) is initially determined by the order in which the sprites were recorded. However, you can send sprites to the front or back of that ordering with the messages *frontsprite <spritename>* and *backsprite <spritename>*. Experiment with the *frontsprite*and *backsprite* messages in the example patch to see their effect on the drawing order of the sprites.

Note that sprites are not implemented in **jit.lcd**. That's primarily because in Jitter the drawing commands all take place offscreen in the **jit.lcd** object's matrix, and are only displayed when the object sends out its matrix to a **jit.window** or **jit.pwindow**. So the expectation is that you, the programmer, will send the proper messages to draw the entire image the way you want it to be seen, and then send a *bang* to output the *jit\_matrix* message. All of that must happen for each frame you wish to display.

## Objects used

`pak` ×2, `pictslider`, `pack`, `loadbang`, `lcd`

*Patch contains 29 boxes, 23 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/lcdsprites_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/drawsprites.png`
