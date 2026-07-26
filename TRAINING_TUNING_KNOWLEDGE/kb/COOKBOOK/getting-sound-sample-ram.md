---
type: cookbook
name: "Getting a sound sample from RAM"
summary: "The buffer~ object holds audio data in RAM as an array of 32-bit floating point numbers (floats)."
chapter: "MSP"
keywords: ["count~", "buffer~", "index~", "sampling", "RAM"]
objects: ["buffer~", "count~", "dac~", "index~", "loadbang"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/getsamplefromRAM.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/getsamplefromRAM.png"
---

# Getting a sound sample from RAM

The **buffer~** object holds audio data in RAM as an array of 32-bit floating point numbers (floats). The fact that the sound is loaded into RAM, rather than read continuously off the hard drive as the **sfplay~** object does, means that it can be accessed quickly and in various ways, for diverse audio effects (including normal playback).

Every **buffer~** must have a unique name as its first argument; other objects can access the contents of the **buffer~** just by referring to that name. The next (optional) arguments are the size of the buffer (stated in terms of the number of milliseconds of sound to be held there) and the number of channels (1 for mono, 2 for stereo). If those optional arguments are present, they will be used to limit the amount of sound that can be stored in that **buffer~** when you load sound into the **buffer~** from a file with the *read* message. If those arguments are absent, when you load in a sound from a file with the *read* message the **buffer~** will be resized to hold the entire file. The *replace* message is like *read* except that it will always resize the **buffer~** regardless of the arguments.

The most basic way to use a buffer is simply to access each individual sample by incrementing through the array indices at the sample rate. To do that, the best objects to use are **count~**, which puts out a signal that increments by one for each sample, and **index~**, which refers to the **buffer~**'s contents by the sample index received from **count~** and sends that out its outlet. This is good for basic playback with no speed change, or for when you want to access a particular sample within the **buffer~**.

When **count~** receives a *bang*, it begins outputting an incrementing signal, starting from 0 by default. You can cause it to start counting from some other starting sample number by sending a number in its left inlet. (You can also cause it to count in a loop by giving it both a starting and ending number. It will count from the starting number up to one less than the ending number, then will loop back to the starting number.)

## Objects used

`index~` ×2, `loadbang`, `dac~`, `count~`, `buffer~`

*Patch contains 21 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/getsamplefromRAM.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/getsamplefromRAM.png`
