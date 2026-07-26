---
type: cookbook
name: "Write subtitles onto a video"
summary: "One way to combine text and video is to write text in jit.lcd as demonstrated in the example “Draw shapes and text(draw-shapes-and-text.md)“, then composite that matrix with a video matrix."
chapter: "Jitter"
keywords: ["coll", "counter", "jit.lcd", "jit.movie", "jit.window", "jit.+", "loadbang", "prepend", "qmetro", "select", "trigger"]
objects: ["coll", "counter", "jit.+", "jit.lcd", "jit.movie", "jit.window", "loadbang", "prepend", "qmetro", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/writesubtitles.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/writesubtitles.png"
---

# Write subtitles onto a video

One way to combine text and video is to write text in **jit.lcd** as demonstrated in the example “[Draw shapes and text](draw-shapes-and-text.md)“, then composite that matrix with a video matrix. In this example we’ll write white text on a black background in **jit.lcd** and simply add that matrix to a video matrix.

On the left side of the patch I load in a small test video that comes with Max, which I happen to know has dimensions 320×240, no audio, and a frame rate of 15 fps. When you turn on the toggle labeled “Start/Stop”, it starts the video and begins triggering output 15 times per second.

The right side of the patch will use a **counter** to look up lines of text in the **coll**, and will use that text as the content of a ‘write’ message to **jit.lcd**. The **loadbang** object initially sets the foreground color (pen color) of **jit.lcd** to white and the background color to black, and sets the desired font type and size. It also bangs the fourth inlet of the **counter**, causing it to send out its minimum value, which is 0. If you double-click on the **coll** object, you’ll see that it contains four lines of text, numbered 1 through 4, but the **coll** contains nothing at index 0, so nothing will get sent out of the **coll** in response to an input of 0. So the initial bang to the fourth inlet of **counter** causes no ‘write’ message to be sent to **jit.lcd**, but it gets the **counter** ready to request the first line of text when it receives a ‘bang’ in its left inlet. Thus, when you start the movie (if you haven’t yet clicked on the “Draw” **button**) you’ll see no subtitle because no matrix has yet arrived in the right inlet of **jit.+**.

Then, each time you click on the “Draw” button, you erase the contents of the **jit.lcd** with a ‘clear’ message, move the cursor to the desired location, trigger the next line of text to be written, and trigger **jit.lcd** to output its matrix, which gets stored in the right inlet of **jit.+**. The next time a frame of video arrives in the left inlet of **jit.+**, it gets added, pixel-by-pixel, to a matrix that is all black except for some white lettering. Wherever the matrix in the right inlet is black, its cell values are all 0, so the video is unchanged. Wherever the matrix in the right inlet is white, its cell values are all 255, so the output matrix shows maximum brightness (white) at those pixels.

Each of the first four times you click the “Draw” **button**, you get a new line of text as a subtitle. The fifth time you click, the **counter** returns to 0, so the matrix gets cleared without a new ‘write’ message being sent, and you get no subtitle.

## Objects used

`jit.+`, `sel`, `qmetro`, `jit.movie`, `prepend`, `counter`, `coll`, `loadbang`, `t`, `jit.window`, `jit.lcd`

*Patch contains 22 boxes, 23 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/writesubtitles.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/writesubtitles.png`
