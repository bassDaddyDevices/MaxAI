---
type: cookbook
name: "Click resulting from amplitude change"
summary: "The amplitude of a sound is controlled by multiplying the sound wave by a certain factor."
chapter: "MSP"
keywords: ["*~", "scope~", "amplitude control"]
objects: ["*~", "cycle~", "ezdac~", "loadbang", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/toosimpleampcontrol.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/toosimpleampcontrol.png"
---

# Click resulting from amplitude change

The amplitude of a sound is controlled by multiplying the sound wave by a certain factor. A multiplier of 1 represents "unity gain", meaning no change. Multiplying by a factor between 0 and 1 reduces the amplitude of the sound. However, if the multiplier is changed very suddenly and significantly, it may create a sudden discontinuity in the waveform which will be heard as a high-frequency click.

This example allows you to see or hear how an audible click can result from an instantaneous change in amplitude. If, for example, the amplitude multiplier is 1, and then suddenly is changed to 0.2, the signal leaps instantaneously to 20% of its previous value. You can try this for yourself, either by using a very low-frequency sine wave to see the change, or by using an audible-frequency sine wave to hear the change. If you make a big change in the amplitude of the sine wave, you'll hear/see the discontinuity.

To solve that problem, it's necessary to interpolate sample-by-sample from the old amplitude value to the new value, over some small period of time, to create a slightly more gentle fade to the new amplitude factor. One way to do that is demonstrated in the example titled "[Simple amplitude control](simple-amplitude-control.md)".

## Objects used

`ezdac~`, `loadbang`, `scope~`, `*~`, `cycle~`

*Patch contains 13 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/toosimpleampcontrol.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/toosimpleampcontrol.png`
