---
type: cookbook
name: "Abstraction for flanging"
summary: "This patch can be used as an abstraction for flanging a sound."
objects: ["*", "*~", "+~", "/", "adstatus", "clip", "cycle~", "delay~", "line~", "loadbang", "prepend", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/flange~_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/flange~.png"
---

# Abstraction for flanging

This patch can be used as an abstraction for flanging a sound. It expects to receive values in its inlets to control delay time (limited from 0 to 10 ms), flanging depth (ranging from none at all up to plus-minus the current delay time), and flanging rate in Hertz. It creates a delay buffer of 20 ms in order to accommodate the maximum delay time plus the maximum flanging depth. The delay time at each moment will be a combination of the selected delay and the modulating LFO, translated into samples. You can try out this abstraction in the example that shows an [interface for a flanger](http://interface-flanger).

One feature that's commonly included in flanging algorithms, but that is not implemented in this abstraction, is feedback of the flanged signal back into the input of the delay line. The **delay~** object does not allow such feedback. To obtain delay with feedback in Max, one needs to use the objects **tapin~** and **tapout~** instead of **delay~**.

## Objects used

`t` ×3, `*` ×3, `line~` ×2, `clip` ×2, `*~`, `cycle~`, `+~`, `prepend`, `/`, `loadbang`, `adstatus`, `delay~`

*Patch contains 33 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/flange~_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/flange~.png`
