---
type: cookbook
name: "Tremolo effect on a sound file"
summary: "This example shows how to impose a tremolo effect on a playing sound file."
chapter: "MSP"
keywords: ["cycle~", "line~", "amplitude modulation", "tremolo"]
objects: ["*~", "+~", "/", "ctlin", "cycle~", "dial", "ezdac~", "line~", "pack", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tremolo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tremolo_0.png"
---

# Tremolo effect on a sound file

This example shows how to impose a tremolo effect on a playing sound file.

We use a low-frequency oscillator (LFO) with a sinusoidal shape—a **cycle~** object—to modulate the amplitude of the signal. For the overall loudness of the signal, we choose an appropriate amplitude—in this case 0.5, -6 dB—and we use the LFO to offset that amplitude up and down around the central value by some lesser amount. In this example, we use a MIDI controller message from a device's modulation wheel to determine the depth of the modulation; we scale the MIDI values, which go from 0 to 127, into the desired range of 0 to 0.499, and we use the **line~** object to smooth out changes, so as to avoid clicks. The output of the LFO is then simply added to the center amplitude of 0.5. You can change the rate of modulation—the frequency of the LFO—using the floating-point **number** box.

## Objects used

`*~` ×2, `dial`, `ctlin`, `pack`, `/`, `cycle~`, `line~`, `+~`, `ezdac~`, `sfplay~`

*Patch contains 27 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tremolo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tremolo_0.png`
