---
type: cookbook
name: "Phasor as control signal"
summary: "The phasor~ object is an oscillator that makes a \"sawtooth\" waveform, repeatedly ramping from 0 to 1."
chapter: "MSP"
keywords: ["phasor~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "phasor~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasorascontrolsignal.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasorascontrolsignal.png"
---

# Phasor as control signal

The **phasor~** object is an oscillator that makes a "sawtooth" waveform, repeatedly ramping from 0 to 1. (Technically, it goes from 0 to almost 1, because whenever it would arrive at exactly 1, it wraps around and begins again from 0.) You can listen to this sawtooth waveform, but **phasor~** is perhaps even more useful as a control signal, to provide a repeated linearly-changing value in your program. You can change its values by multiplying its output (thus scaling it to any desired range) and adding an offset to it to move its range up or down.

In this example, one **phasor~** is used to control the frequency of a **cycle~** object, and another **phasor~** is used to control the amplitude of the **cycle~**. The first **phasor~** is initially given a rate of 0.25 Hz, which means it will complete its ramp every four seconds. The output of that **phasor~** is multiplied by 880 and offset by 220, so that it ramps repeatedly from 220 to 1100, and that values is used as the frequency of the **cycle~**. The other **phasor~** has been given a negative frequency, causing it to ramp backward from 1 to 0 once every second. The result is a new amplitude attack every second, while the pitch glides upward over the course of four seconds.

## Objects used

`*~` ×3, `scope~` ×2, `phasor~` ×2, `cycle~`, `+~`, `ezdac~`

*Patch contains 28 boxes, 17 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasorascontrolsignal.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasorascontrolsignal.png`
