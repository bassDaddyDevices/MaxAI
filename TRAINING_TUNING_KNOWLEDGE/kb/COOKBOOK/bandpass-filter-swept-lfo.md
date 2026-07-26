---
type: cookbook
name: "Bandpass filter swept with a LFO"
summary: "This example demonstrates one of MSP's many filter objects—the resonant bandpass filter reson~—and demonstrates how a parameter of that filter—in this case its"
chapter: "MSP"
keywords: ["cycle~", "reson~", "filtering", "LFO"]
objects: ["*~", "+~", "cycle~", "ezdac~", "i", "loadbang", "reson~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bandpassfiltersweep2.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bandpassfiltersweep3.png"
---

# Bandpass filter swept with a LFO

This example demonstrates one of MSP's many filter objects—the resonant bandpass filter **reson~**—and demonstrates how a parameter of that filter—in this case its center frequency—can be easily modulated by a low-frequency control oscillator (**cycle~**). The range of **cycle~** is between 1 and -1, but that range can be amplified by multiplication, and can be offset by addition. In this case, it is initially set to sweep plus and minus 800 Hz around an offset of 1000 Hz, so the range of the center frequency will be between 200 Hz and 1800 Hz. The rate of the LFO is initially set to 0.5 Hz, so it completes one sweep every 2 seconds.

The **sfplay~** object is initialized to have eight preloaded cues, numbered 2 through 9, using the eight sound files that are supplied in the Max examples folder, and is set to loop on playback. The filter is initialized with a Q factor (bandwidth) of 50 and a gain of 3 (because the high Q factor will tend to reduce the overall volume of the sound). Turn on audio, and click the ‘go’ **button**. Try changing the various parameters, and listen to the effect on different sounds.

## Objects used

`reson~` ×2, `+~`, `*~`, `cycle~`, `ezdac~`, `i`, `loadbang`, `sfplay~`

*Patch contains 37 boxes, 35 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bandpassfiltersweep2.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bandpassfiltersweep3.png`
