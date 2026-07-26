---
type: cookbook
name: "Drawing an image from a file into lcd"
summary: "For this example to work properly, you will also need to download the small image file gourmet.jpg."
chapter: "Max"
keywords: ["lcd", "pack", "pictslider", "!-"]
objects: ["!-", "lcd", "pack", "pictslider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/lcdimage.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/lcdimage.png"
---

# Drawing an image from a file into lcd

For this example to work properly, you will also need to download the small image file [gourmet.jpg](http://music.arts.uci.edu/dobrian/IAP2010/gourmet.jpg).

To draw a previously-saved image in **lcd**, you need to tell the **lcd** the name of the file you want to read in (which, of course, must be located in Max's search path) and you need to choose a name by which you want to refer to that image. You do this with the *readpict* message, in which you include your own (arbitrary) name and the name of the file. Once you have done that, you can draw that image using the *drawpict <imagename>* message, in which you can optionally include the desired x and y location offset as well as width and height specifications to resize the image.

## Objects used

`!-`, `pack`, `pictslider`, `lcd`

*Patch contains 25 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/lcdimage.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/lcdimage.png`
