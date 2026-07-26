---
type: cookbook
name: "Table lookup"
summary: "The table object is what's commonly called a \"lookup table\" or an \"array\"."
chapter: "Max"
keywords: ["table", "lookup"]
objects: ["change", "ctlin", "line", "makenote", "noteout", "scale", "slider", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playCminor.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playCminor.png"
---

# Table lookup

The **table** object is what's commonly called a "lookup table" or an "array". You can store an ordered array of numbers, and then look up those numbers by referring to their "index" number (also sometimes called the "address") in the array. In **table**, the index numbers start from 0, and each location in the array can hold an integer. In the **table**'s Inspector, you can set it to save its contents as part of the patch, so that the stored numbers will always be there the next time you open the patch. When **table** receives an index number in its left inlet, it sends out the number that is stored at that index location.

In this patch, we use a **table** to store all the MIDI pitch numbers of the C harmonic minor scale from 36 to 96, and we use another **table** to store a shape––a drawn curve. (You can double click on the **table** objects to see their contents displayed graphically.)

To make a lookup table filled with a specific ordered set of integers, the **table** object is the best choice, and one way to fill it is to read in a text file that begins with the word "table" followed by a space separated list of the desired numbers. This example patch requires that you download the text file [Charmonicminor.txt](http://music.arts.uci.edu/dobrian/Music215/S13/MaxPatches/Charmonicminor.txt) and save it with the correct name somewhere in the Max file [search path](https://docs.cycling74.com/max7/vignettes/search_path).

You can use a lookup table to describe some curve or shape that's not easily calculated mathematically, anything from a harmonic minor scale to a curve you draw freehand. The **table** object on the right has had a curve drawn into its graphic window, and its ‘embed’ attribute has been set on, which has the same effect as choosing "Save Data With Patcher" in the object's Inspector.

## Objects used

`table` ×2, `slider`, `line`, `change`, `scale`, `ctlin`, `makenote`, `noteout`

*Patch contains 16 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playCminor.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playCminor.png`
