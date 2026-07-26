---
type: cookbook
name: "Abstraction for mixing or crossfading two audio signals"
summary: "This patch is functionally identical to the mix~ abstraction in \"A useful subpatch for mixing and balancing two sounds(useful-subpatch-mixing-and-balancing-two-"
chapter: "MSP"
keywords: ["crossfade", "mix", "balance", "abstraction", "argument"]
objects: ["*~", "+~", "-~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/xfade~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/xfade~.PNG"
---

# Abstraction for mixing or crossfading two audio signals

This patch is functionally identical to the **mix~** abstraction in "[A useful subpatch for mixing and balancing two sounds](useful-subpatch-mixing-and-balancing-two-sounds.md)"; you can read its explanation there. It's repeated here in order to focus on the topic of initialization: setting up the initial state of your program the way you want it. This patch demonstrates the use of a ‘#’ argument in an object box to designate a value that can be specified in the parent patch when this patch is used as an abstraction (an object in some other patch). When this patch is used as an object in another patch by typing its filename into an object box, whatever is typed in as the first argument in that object box will be used in place of the ‘#1’, wherever it appears in this patch. (Subsequent arguments in the parent patch could be accessed with ‘#2’, ‘#3’, etc.) If nothing is typed in as an argument in the parent patch, the ‘#’ arguments will be replaced by the integer value 0.

In this example, the ‘#1’ argument means that the initial crossfade value (to specify the balance between the audio signals coming in the first two inlets) can be typed into the object box in the parent patch. Notice that if the user does not type in any argument, the default behavior of this patch will be to send out only the audio signal of the left inlet, because the crossfade value will be 0 by default, resulting in a multiplier of 1 for audio signal 1 and a multiplier of 0 for audio signal 2.

[You can read a thorough explanation of the ‘#’ argument in an [excerpt from the Max 4 manual regarding the changeable arguments $ and #](http://music.arts.uci.edu/dobrian/Music215W11/Arguments.pdf).]

An important thing to notice in this abstraction is that it has been constructed in such a way that the crossfade value coming in the rightmost inlet can be provided either as a float or as a control signal. If a person just wants to set a static crossfade value, a float is sufficient. It can be typed in as an argument and/or provided in the right inlet. For a dynamically changing value, though, a control signal is better. If, in the parent patch, a MSP signal is connected to the rightmost inlet of this patch, then any typed-in argument (and any float in the right inlet) will be ignored by the right inlets of the **-~** and **\*~** objects in this patch.

## Objects used

`*~` ×2, `+~`, `sig~`, `-~`

*Patch contains 14 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/xfade~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/xfade~.PNG`
