---
type: cookbook
name: "Cycle~ behaviors"
summary: "Here are a few behaviors of the cycle~ object worth knowing."
chapter: "MSP"
keywords: ["cycle~", "phasor~", "phase offset", "reset"]
objects: ["*~", "+~", "cycle~", "ezdac~", "line~", "number~", "phasor~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/cycle~behaviors.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0630 Cycle~ behaviors.png"
---

# Cycle~ behaviors

Here are a few behaviors of the **cycle~** object worth knowing.

1) When an inlet is capable of accepting either a *signal* or a *float*, as in the case of the right inlet of a **cycle~** object, and a signal patch cord is connected to that inlet (say, for example, coming from a **phasor~**), *float* messages are ignored. The *signal* and the *float* are not combined in any way. You can use one or the other but not both.

2) It is more correct to think of the value supplied in the right inlet of **cycle~** not as the instantaneous phase, but rather as the phase offset that is applied to the otherwise independent operation of the **cycle~**.

Some examples might help to make that last sentence clear.

a) A **cycle~** object generates a cosine wave at the specified frequency and with the specified phase offset whenever MSP audio is on. A **cycle~** object with no frequency specified as an argument and no frequency info coming in its inlet has a default frequency of 0 Hz. Likewise, its phase offset is 0 by default. Since its frequency is 0, it does not increment through the waveform at all. So, a **cycle~** object with no arguments and nothing connected to its inlets will generate a constant output signal of 1 (the 0 phase position of a cosine function).

b) A 0 Hz **cycle~** with a **phasor~** connected to its right inlet will be totally controlled by the **phasor~**. Its frequency will be equal to that of the **phasor~**. Its instantaneous position within the cosine function will depend on the signal being supplied in its right inlet; when the **phasor~** is at 0.5, for example, the **cycle~** will be sending out -1 (1/2 cycle through the cosine function).

c) Each time MSP audio is turned on, **cycle~** starts at 0 phase plus whatever phase offset is supplied in its right inlet. If a **cycle~** is running at some nonzero frequency and you later send it a *float* phase offset of *0* hoping to set it back to its initial default phase, you will be disappointed because all you have done is change its phase offset (or not changed it at all if its phase offset was already 0) relative to where it was in its cycle at that instant; it will continue to run from wherever it was (offset by whatever phase offset has been specified for it).

d) A *float* message in the right inlet of a **phasor~** object is different. It does reset the **phasor~** to whatever phase you specify, at the moment that it receives a float in its right inlet. So let’s say you want to apply a sinusoidal vibrato to a note, and you want it always to begin on the center frequency of the vibrato. You would therefore want to ensure that your LFO is in sine phase at the moment the note is played. You could control your LFO with a **phasor~**, and set the phase of the phasor to 0.75 (specifying sine phase for the cosinusoidal **cycle~** object) at the moment each note is played.

e) Starting with Max version 8, the **cycle~** object understands a *reset* message with an argument between 0 and 1 to reset its phase position at that moment in time. So, a message *reset 0.75* will cause **cycle~** to go immediately to the point 3/4 of the way through its waveform (equivalent to the sine phase) and proceed from there. In both cases, either with a *float* in the right inlet of the **phasor~** object or with a *reset* message to **cycle~**, any *float* value that exceeds the range 0 to 1 will be wrapped around to be kept within the range from 0 to 1.

## Objects used

`number~` ×3, `cycle~` ×3, `*~` ×2, `ezdac~`, `line~`, `+~`, `phasor~`

*Patch contains 19 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/cycle~behaviors.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0630 Cycle~ behaviors.png`
