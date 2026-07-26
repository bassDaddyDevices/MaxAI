---
type: cookbook
name: "Score following with the follow object"
summary: "This patch is based on an example in the Max 2.0 Tutorial, chapter 35."
chapter: "Max"
keywords: ["seq", "follow", "coll"]
objects: ["38", "42", "coll", "delay", "follow", "makenote", "midiout", "notein", "noteout", "sel", "seq", "split", "stripnote", "timer"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/followexample_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/followexample_0.png"
---

# Score following with the follow object

This patch is based on an example in the Max 2.0 Tutorial, chapter 35. It demonstrates score following using the **follow** object. For it to work properly, in addition to saving the patch itself, you will need to save these two text files, using the same file names as are shown here—[bourree-sc.txt](http://music.arts.uci.edu/dobrian/Music215S12/MaxPatches/bourree-sc.txt) and [bourree-coll.txt](http://music.arts.uci.edu/dobrian/Music215S12/MaxPatches/bourree-coll.txt)—in the Max file search path.

The patch is explained in these [pages extracted from the original Max Tutorial](http://music.arts.uci.edu/dobrian/Music215S12/MaxPatches/followtutorial.pdf). Note that I have changed what was a **funbuff** object in the original file into a **coll** object for this example. That made the patcher "silencer" referred to in the text unnecessary, so you don't see it in this example patch.

Read in the score file of the Bach bourree melody and listen to it. Then click on the *follow 0* **message box** above the **follow** object; that causes the **follow** object to start following you from the beginning of the score. Play the melody on your MIDI keyboard, and Max will play the left hand accompaniment. [N.B. The **seq** and **follow** objects can read any MIDI file that is in "format 0" (i.e., with all data on a single 'track').]

## Objects used

`timer` ×2, `delay` ×2, `split` ×2, `seq`, `midiout`, `coll`, `noteout`, `makenote`, `42`, `sel`, `38`, `notein`, `stripnote`, `follow`

*Patch contains 32 boxes, 35 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/followexample_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/followexample_0.png`
