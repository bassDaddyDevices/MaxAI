---
type: cookbook
name: "Simple subtitles in a video"
summary: "For this example to work properly, you will also need to download the small text file subtitles.txt."
chapter: "Jitter"
keywords: ["jit.lcd", "jit.op", "jit.qt.movie", "jit.window", "loadbang", "prepend", "qmetro", "select", "text", "trigger"]
objects: ["jit.lcd", "jit.op", "jit.qt.movie", "jit.window", "loadbang", "prepend", "qmetro", "select", "t", "text"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/subtitledemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/subtitledemo.png"
---

# Simple subtitles in a video

For this example to work properly, you will also need to download the small text file [subtitles.txt](http://music.arts.uci.edu/dobrian/IAP2010/subtitles.txt).

Because of the ease with which one can draw text in **lcd**, using the **jit.lcd** object is a very easy way to include subtitles, credits, or any other sort of text in a video displayed in Jitter. The text can be drawn with a simple *write* message, and the contrast between the text and the background can be used to mask the text and non-text portions of the matrix.

There are various ways one could do the compositing (for example, using **jit.chromakey** or **jit.alphablend**), but this example shows a very efficient and straightforward way to composite text and image with a simple addition operation. The background color is made black (RGB values "0 0 0" and the foreground color is made white (RGB values "255 255 255"). The text is thus written in white on a black background. When that matrix is added to an image, all of the cells with values of "0" leave the video image unchanged, and all the cells with values of "255" push those pixels to their full white value.

The text in this case is supplied by reading lines of text from a text file with the **text** object. The **text** object prepends the word "set" before its output (with the intention that you will use the text to set the contents of another object such as **message box**), so you need to either strip off the word "set" with a **route '**set' object, or, as we've done here, first set the contents of a **message box** and then *bang* it to send it out. To draw the text in **jit.lcd** you then just need to prepend the word "write" before the text.

Note that for each new line of text, we need to clear the lcd (filling all its cells with 0), move the pen to the desired location, write the text, then send out the contents of the matrix. That matrix will then be added to each frame of video coming from the **jit.qt.movie** object.

## Objects used

`t` ×2, `text`, `jit.window`, `loadbang`, `prepend`, `jit.op`, `select`, `jit.qt.movie`, `qmetro`, `jit.lcd`

*Patch contains 22 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/subtitledemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/subtitledemo.png`
