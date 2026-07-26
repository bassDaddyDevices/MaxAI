---
type: cookbook
name: "Six samples at six pitches at six tempi"
summary: "In order for this patch to work properly, you'll need to first download the attached .zip archive of six short soundfiles, uncompress it, and put the sound files in the Max search path."
chapter: "MSP"
keywords: ["poly~", "sflist~", "tempo", "transport", "algorithmic composition"]
objects: ["dac~", "live.gain~", "loadbang", "metro", "pack", "poly~", "sflist~", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/6strings6tempi.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/6strings6tempi.png"
---

# Six samples at six pitches at six tempi

In order for this patch to work properly, you'll need to first download the attached [.zip archive of six short soundfiles](http://music.arts.uci.edu/dobrian/maxcookbook/file/guitarstringszip), uncompress it, and put the sound files in the Max search path.

You'll also need to download the patch from the example [Subpatch for paying sound cues from **sflist~**](subpatch-playing-sound-cues-sflist.md). Save it with the name "playsamples.maxpat" in the Max file search path.

Once you have the six soundfiles and the "playsamples" subpatch in the Max file search path, this example patch will work.

This patch plays the six notes of an E major guitar chord at six different tempi, in the ratios 1:2:3:4:5:6. It uses 6 guitar samples (which you'll need to put in the Max file search path), a 6-voice **poly~** for playing samples (using the "playsamples" subpatch), and the **sflist~** object so that all 6 **sfplay~** objects in the **poly~** can access the 6 cues.

## Objects used

`pack` ×6, `metro` ×6, `loadbang` ×3, `transport`, `dac~`, `live.gain~`, `poly~`, `sflist~`

*Patch contains 36 boxes, 43 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/6strings6tempi.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/6strings6tempi.png`
