---
type: cookbook
name: "A/B audio crossfade"
summary: "This patch shows how to crossfade between two sounds."
chapter: "MSP"
keywords: ["key", "line~", "sig~", "crossfade"]
objects: ["*~", "+~", "-~", "dac~", "key", "line~", "loadbang", "pack", "sel", "sfplay~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/abaudioxfade1.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/abaudioxfade1.png"
---

# A/B audio crossfade

This patch shows how to crossfade between two sounds. Initially, two different sound files are loaded into two different **sfplay~** objects. When you click the **toggle** marked "start/stop", both sound files will play, but you'll only hear the one on the left because its amplitude is being multiplied by a constant signal value of 1 from the **sig~ 1** object, while the one on the right is being multiplied by a signal value of 0 from the **line~** object.

The upper left part of the patch shows how you can crossfade from one sound to the other by having the **line~** object go from 0 to 1 (or from 1 to 0) over a given amount of time. The **line~** object's value will be used as the multiplier for the sound on the right, and 1 minus its value will be used as the multiplier for the sound on the left. The "a" and "b" keys from the computer keyboard will trigger a 0 or a 1, respectively, and **line~** will go to the new value in the specified amount of time.

To see this crossfader implemented as a **mix~** abstraction that you can easily use in any patch, take a look at "[A useful subpatch for mixing and balancing two sounds](useful-subpatch-mixing-and-balancing-two-sounds.md)".

## Objects used

`*~` ×2, `sfplay~` ×2, `dac~`, `+~`, `line~`, `pack`, `-~`, `sig~`, `sel`, `key`, `loadbang`

*Patch contains 33 boxes, 32 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/abaudioxfade1.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/abaudioxfade1.png`
