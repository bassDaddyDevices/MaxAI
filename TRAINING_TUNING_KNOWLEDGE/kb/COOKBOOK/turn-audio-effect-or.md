---
type: cookbook
name: "Turn an audio effect on or off"
summary: "This patch shows a way to use the the abgate~ abstraction from the example \"Routing a signal to one of two destinations(routing-signal-one-two-destinations.md)\""
chapter: "MSP"
keywords: ["bypass", "insert", "effect", "abgate~"]
objects: ["!-~", "*~", "+~", "abgate~", "dac~", "line~", "live.dial", "live.gain~", "loadmess", "pan~", "sfplay~", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/fxexample.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/fxexample.png"
---

# Turn an audio effect on or off

This patch shows a way to use the the **abgate~** abstraction from the example "[Routing a signal to one of two destinations](routing-signal-one-two-destinations.md)" to route a signal through an audio effect processor, equivalent to using an effect *insert* in a mixer or a DAW. In order for this example to work correctly, you'll need to have that abstraction, saved with the name **abgate~**, in the Max file search path.

By default, **abgate~** routes its input signal out its left outlet. So in this patch, the signal from **sfplay~** is passed directly through **abgate~** to the **+~** object (and a 0 amplitude signal is passed out the right outlet of **abgate~**). When you want to insert the delay effect, you simply send a '1' in the right inlet of **abgate~**, and the incoming signal will be routed out its right outlet to the **patcher delayer~**. The contents of the **patcher delayer~** shows a simple but effective example of how to implement delay with feedback. Like most good insert effects, this one includes the ability to control the "wet/dry" mix of the effect, so that you can still hear some of the original ("dry") input signal along with the effect. (Note, however, that this delay subpatch doesn't provide any protection against clicks if you change one of its parameters while sound is going through it.)

## Objects used

`+~` ×2, `*~` ×2, `loadmess`, `sfplay~`, `line~`, `pan~`, `dac~`, `live.gain~`, `live.dial`, `!-~`, `tapout~`, `tapin~`, `abgate~`

*Patch contains 54 boxes, 43 connections, 3 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/fxexample.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/fxexample.png`
