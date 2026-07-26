---
type: cookbook
name: "How the adsr~ object works"
summary: "The adsr~ object provides a signal in the shape of an ADSR envelope (attack, decay, sustain, release) commonly used in synthesizer design."
chapter: "MSP"
keywords: ["adsr~", "envelope", "amplitude envelope"]
objects: ["*~", "adsr~", "cycle~", "ezdac~", "live.gain~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/adsr~explained.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/adsr~explained.png"
---

# How the adsr~ object works

The **adsr~** object provides a signal in the shape of an ADSR envelope (attack, decay, sustain, release) commonly used in synthesizer design. You specify an attack time in ms (time to get from 0 amplitude to peak amplitude), a decay time in ms (time to settle to the sustain level), a sustain level (an amplitude factor, not a ms time), and a release time in ms (time to return to 0). Those values can all be supplied as initializing arguments, and/or as *float*s or signals in the second, third, fourth, and fifth inlets. (Although signals are allowed, it's more common to use *float* values.) When a non-zero value is received in the left inlet, that determines the peak amplitude of the attack; the attack and decay portions of the envelope are completed in the designated amounts of time, then the output signal stays at the sustain level until a *0* value is received in the left inlet, at which point the release portion of the envelope is enacted.

An ADSR envelope can be used to control any aspect of a sound—amplitude, filter cutoff frequency, modulation amount, etc. In this example, we use it to control the amplitude of a tone, by sending the output of **adsr~** to one of the inlets of **\*~**.

## Objects used

`ezdac~`, `live.gain~`, `adsr~`, `*~`, `scope~`, `cycle~`

*Patch contains 19 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/adsr~explained.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/adsr~explained.png`
