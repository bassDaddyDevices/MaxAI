---
type: cookbook
name: "Non-UI version of live.gain~"
summary: "The live.gain~ object is terrific for volume control of audio signals."
chapter: "MSP"
keywords: ["live.gain~", "volume"]
objects: ["*", "*~", ">", "dbtoa", "line~", "pack", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/gainsimple~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/gainsimple~.png"
---

# Non-UI version of live.gain~

The **live.gain~** object is terrific for volume control of audio signals. It allows you to attenuate the volume down to -70 dB (by default), at which point it turns the volume completely to 0. In addition to the user-interface fader that **live.gain~** provides, you can set the volume with a *float* message, in decibels, and it will quickly interpolate (in 10 ms by default) to the new volume to avoid clicks due to sudden changes.

If you don’t need the user interface capabilities of **live.gain~** because you’re only going to be controlling the volume with messages, and you want to save the (admittedly small) CPU load of drawing the volume of the signal, you can use this abstraction instead, which emulates what **live.gain~** is doing internally.

When the gain value comes in the right inlet, this patch converts the decibels to a linear amplitude value. It uses a little logic trick to turn the volume to 0 if the specified decibel is less than or equal to -70; it uses a **>** object to ascertain if the decibel volume is greater than -70, and multiplies the amplitude value by the 1 or 0 of the logical comparison. The amplitude is then combined with an interpolation time of 10 ms and sent to a **line~** object for a quick, smooth volume change.

## Objects used

`*~`, `*`, `t`, `>`, `dbtoa`, `pack`, `line~`

*Patch contains 13 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/gainsimple~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/gainsimple~.png`
