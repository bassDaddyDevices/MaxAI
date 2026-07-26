---
type: cookbook
name: "Using phasor~ directly as a control signal"
summary: "If you need a linear signal that repeats at a specific rate, phasor~ can be scaled and offset to provide a repeating line from one signal value to another."
chapter: "MSP"
keywords: ["phasor~", "scope~", "control signal"]
objects: ["*~", "+~", "cycle~", "ezdac~", "gain~", "phasor~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasorcontrol.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasorcontrol.png"
---

# Using phasor~ directly as a control signal

If you need a linear signal that repeats at a specific rate, **phasor~** can be scaled and offset to provide a repeating line from one signal value to another. In this example, we use **phasor~** to directly control both frequency and amplitude of an oscillator.

Since **phasor~** ramps from 0 to (almost) 1, it would normally create a crescendo in amplitude, and indeed it can be useful for that purpose over long periods of time as a control signal for other control signals. A more normal amplitude envelope for a single note, however, goes quickly to a peak amplitude and then gradually decreases to 0 over the course of the note. So in this patch we multiply the **phasor~** signal by -0.5, which causes it to ramp from 0 to -0.5, and then we add 0.5 to that so that it is now ramping from 0.5 to 0. (Notice that the leap up from 0 to 0.5 is instantaneous, though, causing a click in this case. A more sophisticated program might do something to smooth that transition.) We use a similar scaling and offsetting procedure for the control of frequency of the **cycle~**. We multiply the **phasor~**'s output by 500 then add 500 to that so that the result is a ramp that goes from 500 to 1000 (a number that we use as Hz in the **cycle~**). You can experiment with other rate settings for the **phasor~** and other frequency ranges for the **cycle~**.

## Objects used

`*~` ×3, `+~` ×2, `scope~`, `gain~`, `cycle~`, `ezdac~`, `phasor~`

*Patch contains 13 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasorcontrol.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasorcontrol.png`
