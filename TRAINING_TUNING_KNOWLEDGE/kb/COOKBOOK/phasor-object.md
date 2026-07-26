---
type: cookbook
name: "The phasor~ object"
summary: "The phasor~ object is one of the most valuable MSP signals to use as a control signal."
chapter: "MSP"
keywords: ["scope~", "phasor~"]
objects: ["ezdac~", "phasor~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasorview.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasorview.png"
---

# The phasor~ object

The **phasor~** object is one of the most valuable MSP signals to use as a control signal. (You wouldn't generally want to listen to it directly as audio because it's an ideal sawtooth wave and has energy at so many harmonics that it can easily create aliasing. If you want a sawtooth wave sound, it's better to use the **saw~** object, which limits its harmonics so as not to exceed the Nyquist frequency.) The **phasor~** outputs a signal that ramps cyclically from 0 to 1. It's actually more correct to say that **phasor~** ramps from 0 to *almost* 1, because it will never actually output the value 1; it will instead output 0 because the end of a ramp is the same moment as the beginning of the next ramp. Because **phasor~** is constantly moving and interpolating between 0 and 1, it's usually best not to rely on detecting any specific value in its output signal, but just to know that it's always increasing linearly from 0 toward 1.

This patch simply allows you to see the signal produced by **phasor~**. The following examples show some ways it can be useful:

“[Using phasor~ directly as a control signal](using-phasor-directly-control-signal.md)”

“[Repeatedly reading a function with phasor~](repeatedly-reading-function-phasor.md)”

“[Transport-controlled phasor~](transport-controlled-phasor.md)”

“[Triggering events with each cycle of a phasor~](triggering-events-each-cycle-phasor.md)”

## Objects used

`ezdac~`, `scope~`, `phasor~`

*Patch contains 5 boxes, 2 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasorview.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasorview.png`
