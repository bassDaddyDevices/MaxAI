---
type: cookbook
name: "Generating a simple 2-operator FM tone"
summary: "In order to enable and disable portions of an audio program easily, and to be able to reuse them multiple times, you will probably want to encapsulate an entire"
chapter: "MSP"
keywords: ["abstraction", "adsr~", "FM", "frequency modulation", "inlet", "outlet"]
objects: ["*~", "+~", "adsr~", "cycle~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/FMtone~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/FMtone~.png"
---

# Generating a simple 2-operator FM tone

In order to enable and disable portions of an audio program easily, and to be able to reuse them multiple times, you will probably want to encapsulate an entire audio-generating or audio-processing procedure inside a single patch with **inlet**s and **outlet**s so that it can be used as a subpatch object in some other patch. This patch shows an example of a simple 2-oscillator frequency modulation tone generator that could easily be used as a subpatch in some other patch.

The patch has two **inlet**s, for frequency and amplitude, which can receive either floats or MSP signals. The lower **cycle~** object is the carrier oscillator (the one we actually will hear) and the upper **cycle~** object is the modulating oscillator (the output of which will be used to modulate the frequency of the carrier oscillator).

The frequency value that comes in the left **inlet** is used to set the base frequency of the carrier oscillator (in the right inlet of the **+~** object), the frequency of the modulating oscillator (in the left inlet of the upper **cycle~** object) and as a factor in determining the depth (amplitude) of the modulation (in the right inlet of the **\*~** object).

The **adsr~** object outputs a signal that follows the shape of an ADSR envelope, which is useful for shaping the amplitude of another signal, or for controlling a parameter of another object (such as the cutoff frequency of a lowpass filter). As is standard for ADSR envelopes, the attack time, decay time, sustain level, and release time describe the shape of the envelope. In this example, the envelope will rise to full amplitude in 5 milliseconds, decay over 245 milliseconds to a sustain level that is 0.5 as great as its peak (attack) level, and then when the note is released the envelope will fade out in 250 milliseconds. The overall amplitude of the envelope will be scaled by whatever value comes in **adsr~**'s left inlet (i.e., whatever comes in the right **inlet** object in this patch). When **adsr~** receives a value of 0 in its left inlet, that triggers the release, sending the amplitude of the ADSR envelope to 0 in 250 milliseconds. A new nonzero value then retriggers the start of the envelope. Notice that the ADSR envelope is used to scale the amplitude of the output tone, and the same envelope is used (multiplied by a factor of 10) as the modulation index (modulation amplitude divided by modulation frequency). In this way, the tone will get brighter (have more, stronger upper partials) as it gets louder, and will become purer as it gets softer.

You can see that this patch expects to get both a frequency value and an amplitude value in its **inlet**s. The amplitude value will trigger the ADSR envelope and scale its overall amplitude. The frequency value will set the parameters of the carrier and modulator oscillators. These two values could arrive together at the start of a note, perhaps derived from the key and velocity values of a MIDI note-on message.

"[Polyphony with multiple copies of a MSP subpatch](polyphony-multiple-copies-msp-subpatch.md)" shows this patch being used as a subpatch in a larger patch. You will need to download this patch and save it with the name "FMtone~" in order for that example to work.

## Objects used

`*~` ×4, `cycle~` ×2, `adsr~`, `+~`

*Patch contains 20 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/FMtone~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/FMtone~.png`
