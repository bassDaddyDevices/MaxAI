---
type: cookbook
name: "Switching and mixing audio"
summary: "As you get more involved in programming audio, it's likely that you'll want to have multiple sound possibilities available in your program, that you can switch on and off as needed."
chapter: "MSP"
keywords: ["delay", "inlet", "line~", "matrix~", "mute~", "pass", "pass~", "patcher", "pcontrol", "selector~", "subpatch"]
objects: ["!/", "*~", "+", "==", "b", "click~", "comb~", "cycle~", "dac~", "delay", "line~", "matrix~", "metro", "mtof", "mute~", "noise~", "pack", "pass~", "pcontrol", "random", "reson~", "select", "selector~", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/switchingandmixingaudio.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/switchingandmixingaudio.png"
---

# Switching and mixing audio

As you get more involved in programming audio, it's likely that you'll want to have multiple sound possibilities available in your program, that you can switch on and off as needed. You might want to take a look at MSP [Tutorial 5: Turning signals On and Off](http://www.cycling74.com/docs/max5/tutorials/msp-tut/mspchapter05.html) to learn about some basic ways of doing that. However*,* that chapter leaves out the following pretty crucial issue. In most cases you want to make sure the volume of the sound is 0 when you turn it on or off, in order to avoid clicks. So any time you turn a sound on or off, or disable a part of your program (to save on needless computation), or switch from one sound to another, you usually will want to do a quick fade-in or fade-out rather than an instantaneous switch on or off. There are lots of strategies and techniques you might use for that. This patch that shows a couple of useful tricks.

The **selector~** object is quick and handy, but usually is not appropriate for switching audio signals in real time. A quick cross-fade between the signals is what you really want. The **matrix~** object, which serves as a multi-channel mixer, is very handy for that purpose. The **pcontrol** and **mute~** objects provide two different ways of silencing and disabling audio in a subpatch. It's a good idea to disable subpatches that you're not listening to, in order to reduce needless computation in MSP, especially if you have a lot of audio processing going on. But you usually will want to fade the audio to 0 before disabling a subpatch. The bottom part of this example shows a way to do that, by encapsulating the fading and disabling in a subpatch, and encapsulating the actual audio processing in a sub-subpatch within that, which you can disable when it's not in use.

## Objects used

`cycle~` ×5, `dac~` ×4, `line~` ×3, `pass~` ×3, `metro` ×3, `+` ×3, `random` ×3, `mtof` ×3, `select` ×3, `pcontrol` ×2, `*~` ×2, `b` ×2, `pack`, `delay`, `!/`, `comb~`, `click~`, `==`, `mute~`, `reson~`, `noise~`, `umenu`, `matrix~`, `selector~`

*Patch contains 126 boxes, 97 connections, 4 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/switchingandmixingaudio.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/switchingandmixingaudio.png`
