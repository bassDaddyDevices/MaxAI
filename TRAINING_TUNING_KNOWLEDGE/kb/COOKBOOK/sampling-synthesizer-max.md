---
type: cookbook
name: "Sampling synthesizer in Max"
summary: "This patch is an example of a sampling synthesizer in Max."
chapter: "MSP"
keywords: ["patcher", "kslider", "bendin", "ctlin"]
objects: ["*", "*~", "+~", "-", "/", "bendin", "buffer~", "ctlin", "cycle~", "dac~", "expr", "gtrvoice", "kslider", "live.gain~", "notein", "pack", "poly", "pow", "route", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/samplerforguitar.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/samplerforguitar.png"
---

# Sampling synthesizer in Max

This patch is an example of a sampling synthesizer in Max. The **kslider** may be used to control the patch if a MIDI controller is not available. The **gtrvoice** patch used inside of the **patcher guitar6strings** may be found in the example [Managing samples in Max](managing-samples-max.md). The guitar samples that are loaded into the buffer subpatch may be found in the file called [guitarstrings.zip](http://music.arts.uci.edu/dobrian/maxcookbook/sites/default/files/guitarstrings.zip).

## Objects used

`+~` ×6, `gtrvoice` ×6, `buffer~` ×6, `/` ×2, `*~` ×2, `pow`, `t`, `*`, `-`, `route`, `pack`, `poly`, `cycle~`, `expr`, `ctlin`, `dac~`, `live.gain~`, `bendin`, `kslider`, `notein`

*Patch contains 102 boxes, 75 connections, 5 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/samplerforguitar.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/samplerforguitar.png`
