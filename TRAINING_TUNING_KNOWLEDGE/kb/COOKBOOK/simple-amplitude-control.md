---
type: cookbook
name: "Simple amplitude control"
summary: "When you're changing the amplitude of a sound, if the amplitude is changed very suddenly and significantly, it may create a sudden discontinuity in the waveform"
chapter: "MSP"
keywords: ["amplitude control", "line~", "fade", "control signal"]
objects: ["*~", "cycle~", "ezdac~", "line~", "loadbang", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simpleampcontrol.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simpleampcontrol.png"
---

# Simple amplitude control

When you're changing the amplitude of a sound, if the amplitude is changed very suddenly and significantly, it may create a sudden discontinuity in the waveform which will be heard as a high-frequency click. (That phenomenon is demonstrated in the example "[Click resulting from amplitude change](click-resulting-amplitude-change.md)".) To avoid that problem, it's necessary to interpolate sample-by-sample from the old amplitude value to the new value, over some small period of time, to create a slightly more gentle fade to the new amplitude factor. This patch shows one way to accomplish that.

The **line~** object is very useful as a control signal. It generates a constant signal value, and can change smoothly in a straight line from its current value to a new value over a specified period of time. Once it arrives at its destination value, it stays there until told to go to a new value. It expects a transition time in milliseconds in its right inlet, followed by a destination value in the left inlet. The destination value and transition time can also be specified as a *list* in the left inlet. For example, if **line~** is currently outputting a constant value of 0.1, and it gets the message *0.9 250*, it will transition linearly from 0.1 to 0.9 over 1/4 of a second (11,025 samples if the sampling rate is 44,100 Hz), outputting the appropriate intermediate values for each sample, creating a smooth fade.

It's recommended always to do such an interpolation when changing the amplitude of a sound, to avoid clicks. A few objects, such as **live.gain~**, have this sort of linear interpolation built in, and will fade quickly to whatever new amplitude value is received.

## Objects used

`ezdac~`, `line~`, `loadbang`, `scope~`, `*~`, `cycle~`

*Patch contains 15 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simpleampcontrol.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simpleampcontrol.png`
