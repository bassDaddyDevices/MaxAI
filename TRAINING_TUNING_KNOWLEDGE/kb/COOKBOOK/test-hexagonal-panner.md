---
type: cookbook
name: "Test hexagonal panner"
summary: "This patch requires the abstraction for hexagonal radial panningto be saved in the Max file search path with the name \"hexagonalradialpanner~\"."
chapter: "Max"
keywords: ["phasor~", "clip~", "number~", "round~"]
objects: ["*~", "+~", "adstatus", "cycle~", "dac~", "hexagonalradialpanner~", "live.gain~", "live.toggle", "number~", "phasor~", "prepend"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testhexapanner.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testhexapanner.png"
---

# Test hexagonal panner

This patch requires the [abstraction for hexagonal radial panning](http://music.arts.uci.edu/dobrian/maxcookbook/abstraction-hexagonal-constant-intensity-panning)to be saved in the Max file search path with the name "hexagonalradialpanner~". It demonstrates the 6-channel panner, and shows how the sound can be moved around the space in a repeating circle by using a **phasor~** to supply the panning angle.

An annoying chirping sound, synthesized in the **patcher *chirp*** subpatch will be panned clockwise in a circle, at whatever rate is specified by the **phasor~** object. (Most likely you'll want the rate to be less than 1 Hz. It should be 1 divided by the number of seconds you want for one revolution around the space. A negative rate will pan the sound in a counter-clockwise circle.)

You can experiment to hear the effect of the "spread" value, from 0 to 1, to diffuse the sound over an increasing spatial range (i.e., give it a less focused directionality). The default spread of 0 will use just two of the six speakers at any given moment. A spread of 0 to 0.5 will inreasingly use the four nearest speakers, and a spread of 0.5 to 1 will use all six speakers.

## Objects used

`number~` ×2, `phasor~` ×2, `*~` ×2, `prepend`, `adstatus`, `dac~`, `live.toggle`, `live.gain~`, `hexagonalradialpanner~`, `cycle~`, `+~`

*Patch contains 29 boxes, 23 connections, 2 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testhexapanner.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testhexapanner.png`
