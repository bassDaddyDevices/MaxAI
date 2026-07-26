---
type: cookbook
name: "Interpolation with line or line~"
summary: "The line~ object outputs a signal and interpolates sample-by-sample from wherever it currently is to wherever you tell it to go, in the amount of time you specify."
chapter: "MSP"
keywords: ["interpolation", "line", "line~", "linear"]
objects: ["capture", "capture~", "dac~", "line", "line~", "number~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/lineandline~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/lineandline_.png"
---

# Interpolation with line or line~

The **line~** object outputs a signal and interpolates sample-by-sample from wherever it currently is to wherever you tell it to go, in the amount of time you specify. So, if it is currently sending out a signal value of 0.5 and you tell it to go to 0.8 in 10 ms, it will start going to 0.8 and get there in 441 samples (assuming a sample rate of 44,100), sending out signal values like 0.50068, 0.50136, etc. till it arrives at 0.8, then it will stay there till it gets a new message.

The **line** object outputs individual control messages (not a signal) and gets to its destination in the specified time, sending out intermediate values along the way at whatever time interval you specify. So, if you tell it to go from 0.5 to 0.8 in 1000 ms at intervals ("grain") of a message every 50 ms, it will output intermediate messages such as 0.515, 0.53, etc. till it arrives at 0.8, then stop.

This patch illustrates the difference. The patch on the left turn on MSP, clears the **capture~** object, sets **line~** to 0.5, then tells it to go to 0.8 in 10 ms. The patch on the right clears the **capture** object, sets **line** to 0.5, then tells it to go to 0.8 in 1 second, outputting a number every 50 ms. Double-click on **capture~** and **capture** to see the results.

For smooth audio-rate control, use a signal. For discrete individual events, use messages.

## Objects used

`t` ×2, `dac~`, `number~`, `capture`, `line`, `capture~`, `line~`

*Patch contains 13 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/lineandline~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/lineandline_.png`
