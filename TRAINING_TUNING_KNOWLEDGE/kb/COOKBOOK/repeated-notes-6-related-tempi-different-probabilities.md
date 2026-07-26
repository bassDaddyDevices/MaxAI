---
type: cookbook
name: "Repeated notes at 6 related tempi, with different probabilities"
summary: "This example (taken from Tutorial 37 in the original Max tutorials) demonstrates one way the passpct program, from the example \"Pass a certain percentage of ban"
chapter: "Max"
keywords: ["probability", "preset", "polyrhythm", "algorithmic composition"]
objects: ["PassPct", "makenote", "metro", "noteout", "preset"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/probabilityat6tempi_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/probabilityat6tempi_0.png"
---

# Repeated notes at 6 related tempi, with different probabilities

This example (taken from Tutorial 37 in the original Max tutorials) demonstrates one way the **passpct** program, from the example "[Pass a certain percentage of bangs](pass-certain-percentage-bangs.md)", could be used. In order for this patch to work properly, you'll need to download that patch, [passpct.maxpat](http://music.arts.uci.edu/dobrian/maxcookbook/sites/default/files/passpct.maxpat), and store it in the Max file search path.

This program has six **metro** objects set to six harmonically-related tempi. The *bang* messages from those **metro**s are filtered probabilistically by the **passpct** objects, and will thus trigger note messages with the specified likelihoods.

A **preset** object stores "snapshots" of the state of the user interface objects in the patch (in this case, the **toggle**s and **number** boxes). By clicking on the different preset buttons (or by sending the desired preset number to the **preset** object) one can recall a previously-stored snapshot. Try clicking on the preset buttons (in any order, ending with preset 16) to perform a simple interactive algorithmic composition.

## Objects used

`metro` ×6, `PassPct` ×6, `makenote`, `noteout`, `preset`

*Patch contains 34 boxes, 32 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/probabilityat6tempi_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/probabilityat6tempi_0.png`
