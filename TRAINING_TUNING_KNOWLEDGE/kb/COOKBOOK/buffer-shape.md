---
type: cookbook
name: "Buffer shape"
summary: "The buffer~ object can hold any audio data—or, for that matter, any collection of floating-point numbers."
chapter: "MSP"
keywords: ["buffer~", "pow~", "cycle~", "phasor~"]
objects: ["*~", "buffer~", "cycle~", "ezdac~", "phasor~", "play~", "pow~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/buffershape.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bufferusedasashape1.png"
---

# Buffer shape

The **buffer~** object can hold any audio data—or, for that matter, any collection of floating-point numbers. Most often it's used for audio playback, but it can also store a curve of any desired shape, to be used as a control signal. In this example, it will be used to store a control signal that will influence the pitch of an oscillator. The *replace* message to **buffer~** will load in data from a sound file.

In this patch, some numbers have been provided as typed-in arguments, "hard-coded" constant values that, in a more sophisticated patch, would more likely be made adjustable. An important assumption is that the shape loaded into the **buffer~** will be 512 samples long, which, at a sampling rate of 44,100 Hz, has a duration of 11.61 milliseconds. So, the output of the **phasor~**, going from 0 to 1 with a rate of 0.05 Hz, when multiplied by 11.61, will instruct the **play~** object to read through the 512-sample **buffer~** once every 20 seconds. The output of **play~** will in turn be used as the exponent of the base 2—which, if the exponent ranges from -1 to 1, will cause the **pow~** object to output values that range from 0.5 to 2. That value will be multiplied by the base frequency of 440 Hz, causing the pitch of the **cycle~** to range from A 220 to A 880.

These numbers were chosen to make shape in the **buffer~** have a very specific pitch effect. Making the numbers variable would permit a greater diversity of effects; that would allow for different numbers of samples in the **buffer~**, a different read-through rate for the **phasor~**, different sampling rates, and different depths of pitch change. In a slightly different implementation, the **wave~** object could be used similarly to the way **play~** is used in this example.

A stored shape can be useful as a control signal, lending a certain motivic recognizability to the way sounds are shaped.

## Objects used

`*~` ×2, `scope~`, `cycle~`, `pow~`, `play~`, `phasor~`, `buffer~`, `ezdac~`

*Patch contains 10 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/buffershape.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bufferusedasashape1.png`
