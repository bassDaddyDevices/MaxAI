---
type: cookbook
name: "Draw shapes and text"
summary: "The jit.lcd object understands a variety of command messages for drawing simple things such as lines, geometric shapes, text, and pictures any place in a matrix."
chapter: "Jitter"
keywords: ["jit.lcd", "jit.window", "loadmess", "pak", "prepend", "trigger"]
objects: ["jit.lcd", "jit.window", "loadmess", "pak", "prepend", "t", "trigger"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/draw2D.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/draw2D.png"
---

# Draw shapes and text

The **jit.lcd** object understands a variety of command messages for drawing simple things such as lines, geometric shapes, text, and pictures any place in a matrix. You can think of the matrix in **jit.lcd** as a canvas on which you can draw, write, or paint using messages. You choose a color “pen” you want to use, you move the cursor to the location where you want to draw something, then you draw it. This patch demonstrates a few of the many drawing messages you can send to **jit.lcd**.

The message *frgb* sets the pen color using three arguments for intensity of red, green, and blue. For example ‘*frgb 255 255 0*′ mixes full intensity red and green to get yellow, and ‘*frgb 128 0 128*′ mixes red and blue to get purple. Initially, the pen color is black (0 0 0) by default. By default the background color used for every undrawn pixel is white (255 255 255), but you can change the background color with the *brgb* message (not shown in this patch). For example, ‘*brgb 192 192 192*′ would make the background light gray.

In the example patch, we use the **pak** object to collect the three color arguments as a list, and then we use the **prepend** object to put the word ‘frgb’ before the list to construct a complete message for **jit.lcd**. The **pak** object is similar to the **pack** object, but a message in *any* of **pak**'s inlets triggers output, whereas only a message in the left inlet of **pack** triggers output. Since we’re using **pak**, a new *frgb* message will be triggered whenever you change any of the three color arguments.

The *paintoval* message paints a filled oval using the pen color specified by the most recent *frgb* message. You specify the location of the oval in the four arguments of the *paintoval* message, which designate the left, top, right, and bottom coordinates of the rectangle that bounds the oval you want to paint. In this example the bounding rectangle’s left-top corner is at coordinate 140, 100 (140 pixels from the left edge and 100 pixels from the top edge) and its right-bottom corner is at 180 140, resulting in a circle with diameter of 40 pixels.

To draw lines or write text, you first have to move the cursor to the desired drawing location with a *moveto* message, then give the drawing command. The normal thing to do is to send all the drawing messages that are needed to draw whatever you want to draw, then use a *bang* to send out the completed matrix. The upper left portion of the patch shows how a number of messages can be triggered instantaneously (in rapid succession) to do all the different steps in making the drawing.

Whenever you change one of the number boxes marked “horiz.” or “vert.” to change the location of the written text, **pak** object combines both coordinates into a single two-item list, and the **trigger** object (which can be abbreviated as **t**) then causes five things to happen: it clears the matrix in **jit.lcd** (fills it with the background color), paints the oval, moves the cursor to the specified coordinates, writes the text “Hello!” there, then sends the matrix to .**jit.window** to be displayed.

## Objects used

`prepend` ×2, `pak` ×2, `t`, `loadmess`, `trigger`, `jit.lcd`, `jit.window`

*Patch contains 24 boxes, 21 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/draw2D.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/draw2D.png`
