---
type: cookbook
name: "Abstraction for delay with quadraphonic panning"
summary: "This patch shows how you might combine several of the abstractions that are presented in other examples."
chapter: "MSP"
keywords: ["abstraction", "quadraphonic", "delay"]
objects: ["*~", "ampindB~", "in", "line~", "out~", "pack", "quadpan~", "tapoutxfade~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/quaddelay~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0211 quaddelay~.png"
---

# Abstraction for delay with quadraphonic panning

This patch shows how you might combine several of the abstractions that are presented in other examples. The two key abstractions here are **tapoutxfade~**and **quadpan~**. Those are not actual Max objects; they're both patches that have been saved with those names. They're explained in the examples "[Abstraction for crossfading delay times of a remote tapin~ object](http://music.arts.uci.edu/dobrian/maxcookbook/abstraction-crossfading-delay-times-remote-tapin-object)" and "[Quadraphonic panning based on radial angle](http://music.arts.uci.edu/dobrian/maxcookbook/quadraphonic-panning-based-radial-angle)", respectively. Another abstraction, **ampindB~**, is described in the example "[Amplitude control in decibels](http://music.arts.uci.edu/dobrian/maxcookbook/amplitude-control-decibels)". The **tapoutxfade~** abstraction provides a delayed version of a sound, the **ampindB~** abstraction provides an amplitude factor for that delayed sound, and the **quadpan~** abstraction pans the sound among four speakers.

The patch is designed to be used inside a **poly~** object. So, instead of the usual **inlet** and **outlet** objects, it uses **in** objects for input messages and **out~** objects for outgoing sound signals. The intention is that the left inlet of the **poly~** will be attached to a single **tapin~** object in order to receive a *tapconnect* message and thus refer to a particular ring buffer, as described in the example "[Abstraction for crossfading delay times of a remote tapin~ object](http://music.arts.uci.edu/dobrian/maxcookbook/abstraction-crossfading-delay-times-remote-tapin-object)". The remaining inlets provide information about delay time, amplitude, and panning position of each delayed sound, and transition times for those parameters.

When this abstraction is used within a **poly~** object, it can be duplicated many times, to create a texture of many different delays with independent amplitude and panning. A separate part of the program would be needed to manage all the input parameters for this patch. That is demonstrated in another example, "[Demonstration of multiple crossfading delay times referring to the same remote tapin~ object](http://music.arts.uci.edu/dobrian/maxcookbook/demonstration-multiple-crossfading-delay-times-referring-same-remote-tapin-object)".

See also, for comparison, the example "[Abstraction for delay with stereo panning](http://music.arts.uci.edu/dobrian/maxcookbook/abstraction-delay-stereo-panning)" and related examples.

## Objects used

`in` ×7, `out~` ×4, `line~`, `pack`, `*~`, `ampindB~`, `tapoutxfade~`, `quadpan~`

*Patch contains 31 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/quaddelay~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0211 quaddelay~.png`
