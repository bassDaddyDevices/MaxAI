---
type: cookbook
name: "Trapezoidal control signals"
summary: "The trapezoid~ object outputs a trapezoidal shape, rising linearly from 0 to 1 in a certain fraction of its time, then staying at 1, then falling linearly back to 0 in a fraction of its time."
chapter: "MSP"
keywords: ["phasor~", "trapezoid~", "scope~", "line~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "line~", "live.gain~", "phasor~", "scope~", "trapezoid~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/trapezoidalcontrolsignals.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/trapezoidalcontrolsignals.png"
---

# Trapezoidal control signals

The **trapezoid~** object outputs a trapezoidal shape, rising linearly from 0 to 1 in a certain fraction of its time, then staying at 1, then falling linearly back to 0 in a fraction of its time. Its timing is driven by a control signal at its input, one that goes in a straight line from 0 to 1; so a **phasor~** or a **line~** is the obvious choice for input to **trapezoid~**. As the input goes from 0 to 1, the output draws the designated trapezoidal shape. (Thus, the ramp times, which are specified as a fraction of the whole period, depend on the timing of the input.)

A trapezoid is often used as an amplitude "window", to create a fade-in at the beginning and a fade-out at the end.

In this example, **line~** and **trapezoid~** are used to make a 4-second amplitude envelope for a tone. Because the whole envelope is four seconds long, the fade-in and fade-out are each 1/8 of that—500 ms.

## Objects used

`scope~` ×4, `*~` ×2, `cycle~` ×2, `trapezoid~` ×2, `ezdac~`, `live.gain~`, `+~`, `line~`, `phasor~`

*Patch contains 22 boxes, 18 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/trapezoidalcontrolsignals.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/trapezoidalcontrolsignals.png`
