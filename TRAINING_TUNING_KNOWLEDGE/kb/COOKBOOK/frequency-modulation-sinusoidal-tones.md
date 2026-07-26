---
type: cookbook
name: "Frequency modulation of sinusoidal tones"
summary: "Frequency modulation is the use of one oscillator—usually but not obligatorily at a sub-audio frequency—to modify the frequency of a sound."
chapter: "MSP"
keywords: ["cycle~", "*~", "+~"]
objects: ["*~", "+~", "cycle~", "ezdac~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/frequencymodulationofsinusoidaltones.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/frequencymodulationofsinusoidaltones.png"
---

# Frequency modulation of sinusoidal tones

Frequency modulation is the use of one oscillator—usually but not obligatorily at a sub-audio frequency—to modify the frequency of a sound. The modulating oscillator is added to a main frequency value to create a frequency that fluctuates up and down from the central value. The result, at low modulation rates, is called "vibrato".

In this example, the upper oscillator, known as the modulator, is multiplied by 13 and offset (by addition) by 440, so that it goes from 427 to 453. That value is used to control the frequency of the other oscillator (known as the carrier) up and down around the central value of 440, creating a 6 Hz frequency vibrato. Even though the frequency of the carrier oscillator is almost never exactly 440 Hz, the fluctuation is both small enough and rapid enough (+ or - about an equal-tempered quarter tone, six times per second) that we hear the central frequency as determining the pitch of the tone.

When the modulation rate is increased into the audio range, the frequency modulation creates sum and difference tones above and below the carrier frequency in multiples of the modulation rate, while also leaving the carrier tone. If you set the modulation rate to 110 Hz, for example, and increase the modulation depth, you'll get not only the carrier frequency of 440 Hz, but also 330 Hz, 550 Hz, 220 Hz, 660 Hz, 110 Hz, 770 Hz, etc., resulting in a rich complex tone with a fundamental frequency of 110 Hz.

Play around with different values for rate and depth of vibrato to get different effects. If you want, you can watch [this video](https://youtu.be/cmGO1dFRzls), which does that for you and explains how this example works.

## Objects used

`*~` ×2, `cycle~` ×2, `+~`, `ezdac~`

*Patch contains 25 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/frequencymodulationofsinusoidaltones.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/frequencymodulationofsinusoidaltones.png`
