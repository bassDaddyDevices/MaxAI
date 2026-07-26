---
type: cookbook
name: "ADSR filter envelope"
summary: "An ADSR envelope generator is a common tool for controlling the amplitude of a note, and in fact it can be used to control any parameter of a sound."
chapter: "MSP"
keywords: ["adsr~", "lores~", "kslider", "filter envelope", "envelope"]
objects: ["*", "*~", "-", "adsr~", "dbtoa", "ezdac~", "f", "kslider", "loadmess", "lores~", "mousestate", "mtof", "saw~", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sawsynth.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sawsynth.png"
---

# ADSR filter envelope

An ADSR envelope generator is a common tool for controlling the amplitude of a note, and in fact it can be used to control any parameter of a sound. In this example, one **adsr~** object controls the amplitude of a note while another **adsr~** controls the cutoff frequency of a lowpass filter on the sound. Both are triggered at the same moment, but they have slightly different parameters for independent envelope shapes.

When you click on the **kslider** keyboard, a velocity value is sent out the right outlet (depending on how high on the key you click) and a pitch value is sent out the left outlet. The velocity value is mapped to a decibel range from approximately -40 dB to -8 dB, converted to amplitude, and used as the peak amplitude of the **adsr~** object on the right. The pitch value is converted to frequency to control the fundamental frequency of a sawtooth oscillator, and it also triggers an **adsr~** to control the center frequency of the resonant lowpass filter object **lores~**.

The timings of the two **adsr~** objects are different, so we hear the effect of the envelope-controlled filter sweep. The attack of the amplitude envelope is only 5 milliseconds, whereas the filter cutoff frequency sweeps from 0 Hz to 5,000 Hz in 200 ms. The decay and release times of the filter envelope are slightly quicker than those of the amplitude envelope, so we hear those sweeps take place before the sound fades out. The result of the sweeping filter is a sort of wah effect, with the sound getting brighter as the filter sweeps upward, and getting darker as the filter sweeps downward. The resonance factor of the **lores~** is set quite high, so the effect of the filter sweep is very prominent. Envelope control of a filter is a good way to make the timbre of a sound change over time.

## Objects used

`adsr~` ×2, `-`, `t`, `loadmess`, `ezdac~`, `f`, `lores~`, `dbtoa`, `*~`, `mtof`, `sel`, `mousestate`, `*`, `kslider`, `saw~`

*Patch contains 24 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sawsynth.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sawsynth.png`
