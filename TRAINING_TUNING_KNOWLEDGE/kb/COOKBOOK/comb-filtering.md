---
type: cookbook
name: "Comb filtering"
summary: "Because of the phase cancellation effect caused when a sound is mixed with a delayed copy of itself, the resonance or attenuation (strengthening or weakening) o"
chapter: "MSP"
keywords: ["comb~", "click~", "translate"]
objects: ["!-~", "!/", "*~", "+~", "click~", "comb~", "ezdac~", "key", "live.dial", "loadmess", "sel", "sfplay~", "translate"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/combclick~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0282 Comb filtering.png"
---

# Comb filtering

Because of the [phase cancellation effect caused when a sound is mixed with a delayed copy of itself](http://music.arts.uci.edu/dobrian/maxcookbook/phase-cancellation-due-delay), the resonance or attenuation (strengthening or weakening) of the frequencies caused by that delay is heavily dependent on the delay time. If a sinusoidal component of a sound is delayed by exactly one cycle (i.e., one period, i.e. one over the frequency) or any whole number of cycles, and mixed with the original sound, that component will be reinforced; conversely, if a component is delayed by one-half period, it will be cancelled. So if a sound is delayed by 1 millisecond—1/1000 of a second—and mixed with the original, then all whole-number multiples of 1000 Hz will be reinforced in that sound, and all the frequencies directly between those (e.g. 1500 Hz, 2500 Hz, etc.) will be suppressed. This regular harmonic pattern of resonance and attenuation is known as *comb filtering*. Comb filtering is achieved with a single delay, timed to resonate a particular frequency. The resonated fundamental, and all of its harmonic multiples, will be equal to one over the delay time (i.e., the inverse of the delay period). So a delay of 1/440 of a second (2.273 milliseconds) mixed with the original will reinforce the pitch A at 440 Hz and its harmonics and will suppress the intermediate frequencies, especially those directly between harmonics such as 660 Hz, 1100 Hz, etc.

This patch allows you to experiment with comb filtering, using the **comb~** object. The resonating and attenuating effect is even more pronounced when the output of the comb filter is fed back into its own input, a capability that **comb~** provides internally. This patch is initialized to very heavily impose comb filtering at 1000 Hz, due to its very high initial feedback coefficient. (So beware when you turn audio on and trigger an impulse into it.)

You can experiment with feeding an impulse or a sound file into **comb~** with different delay times and with different settings for the feedforward (input delay) and feedback (output re-delay) coefficients (multipliers).

## Objects used

`sel` ×2, `translate`, `!/`, `sfplay~`, `loadmess`, `comb~`, `key`, `click~`, `!-~`, `+~`, `*~`, `ezdac~`, `live.dial`

*Patch contains 47 boxes, 36 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/combclick~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0282 Comb filtering.png`
