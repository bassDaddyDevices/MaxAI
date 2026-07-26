---
type: cookbook
name: "Linear interpolation to a new value"
summary: "The rampsmooth~ object is useful for smoothing MSP signals, a sort of lowpass filter, especially appropriate for smoothing out overly sudden changes in control signals."
chapter: "MSP"
keywords: ["rampsmooth~", "line", "interpolation", "smoothing"]
objects: ["-", "<", "b", "capture~", "change", "click~", "delay", "f", "gswitch2", "line", "pack", "rampsmooth~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ramptonewvalues.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ramptonewvalues_0.png"
---

# Linear interpolation to a new value

The **rampsmooth~** object is useful for smoothing MSP signals, a sort of lowpass filter, especially appropriate for smoothing out overly sudden changes in control signals. The left part of this patch demonstrates the fact that internally **rampsmooth~** is just doing linear interpolation. Whenever the input signal changes, **rampsmooth~** heads toward that value from wherever it currently is, using the specified number of samples (depending on whether it has to increase or decrease) to get there. For example, if the input signal is a 1 followed by all 0s, a **rampsmooth~** *0 64* object will go to 1 in 0 samples (i.e., immediately) and then will go to 0 over the next 64 samples in increments of 1/64 (0.15625).

If you wanted to do something similar for numerical values in Max, such as MIDI controller values, you could build something similar to that, either with **line** (if you want to specify your ramp as an amount of time to get to the destination) or with **bline** (if you want to specify your ramp as a number of steps to get to the destination). Here, in the right part of the patch, is how to do it with **line**.

The ramp-up and ramp-down times are specified as arguments or via the second and third inlets, just as with **rampsmooth~**, but in milliseconds rather than samples. When a number comes in the left inlet, if it’s different from the previous number (as detected by the **change** object) it will be tested to see whether it is greater than or less than the previous number, and it will be combined with the appropriate transition time and sent to the **line** object.

## Objects used

`pack` ×2, `line`, `gswitch2`, `<`, `-`, `f`, `t`, `change`, `capture~`, `delay`, `b`, `click~`, `rampsmooth~`

*Patch contains 28 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ramptonewvalues.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ramptonewvalues_0.png`
