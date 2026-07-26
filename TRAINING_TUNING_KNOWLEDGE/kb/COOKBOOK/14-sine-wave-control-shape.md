---
type: cookbook
name: "1/4 of a sine wave as a control shape"
summary: "The cycle~ object uses a lookup table of 512 values that make the shape of a single cycle of a cosine wave, and it reads through those repeatedly at whatever ra"
chapter: "MSP"
keywords: ["cosine", "cycle~", "control signal", "reson~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "line~", "live.gain~", "mtof~", "noise~", "reson~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/quartersinusoidal.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/quartersinusoidal.png"
---

# 1/4 of a sine wave as a control shape

The **cycle~** object uses a lookup table of 512 values that make the shape of a single cycle of a cosine wave, and it reads through those repeatedly at whatever rate is specified in its left (frequency) inlet. You can also set the **cycle~**to 0 Hz (its default frequency) and select a point in the cosine waveform with a value (either a signal or a float) from 0 to 1 in the right (phase offset) inlet. Thus, you can get a sinusoidal shaped signal (or any part of one) any time you want by sending the appropriate lookup values in the right inlet of **cycle~**.

This patch shows an example of using one fourth of a sinusoid to make a control shape. The **line~** object sends a signal that goes linearly from 0.25 to 0.5 in 10 seconds. Since that signal is used as the lookup index in the cosine wavetable, **cycle~** sends out a signal that goes from 0 to -1 in the shape of the second fourth of the wavetable. That 0 to -1 signal is scaled into the pitch range 96 to 72 (in MIDI-style values), resulting in a 2-octave change in the center frequency of the resonant bandpass filter (**reson~**) with a slowing curve easing it into the arrival pitch.

## Objects used

`cycle~`, `ezdac~`, `live.gain~`, `noise~`, `reson~`, `mtof~`, `+~`, `*~`, `line~`

*Patch contains 11 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/quartersinusoidal.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/quartersinusoidal.png`
