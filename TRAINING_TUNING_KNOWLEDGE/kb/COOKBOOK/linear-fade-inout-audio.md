---
type: cookbook
name: "Linear fade-in/out of audio"
summary: "The line~ object is useful for providing a control signal."
chapter: "MSP"
keywords: ["closebang", "cycle~", "ezdac~", "line~", "loadbang", "pack", "volume", "*~"]
objects: ["*~", "0.", "closebang", "cycle~", "ezdac~", "line~", "loadbang"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linearaudiofade_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linearaudiofade_0.png"
---

# Linear fade-in/out of audio

The **line~** object is useful for providing a control signal. It interpolates linearly sample-by-sample to a new signal value over a specified period of time, then stays at that new value until it is instructed to change. It expects to receive a transition time in its right inlet (a ramp time), followed by a destination value in its left inlet. Alternatively, you can provide both values as a single two-item list. Its initial default value is 0. In this example, we use **line~** to provide a control signal (multiplier) to the **\*~** object in order to turn the amplitude of a sine wave up and down. When **line~** receives the message *1 1000* it progresses to 1 over the course of 1 second (1000 ms), and when it gets the message *0 1000* it ramps back down to 0 in one second.

## Objects used

`0.`, `line~`, `closebang`, `loadbang`, `ezdac~`, `*~`, `cycle~`

*Patch contains 18 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linearaudiofade_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linearaudiofade_0.png`
