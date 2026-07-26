---
type: cookbook
name: "Synchronizing MSP audio loops with the transport"
summary: "This example shows one way you might use phasor~ to make the length of an audio sample loop stay precisely synchronized with the beat of the transport."
chapter: "MSP"
keywords: ["buffer~", "ezdac~", "info~", "looping", "phasor~", "play~", "prepend", "sprintf", "trigger", "translate", "transport", "trapezoid~", "unpack", "*~", "!/"]
objects: ["!/", "*~", "buffer~", "ezdac~", "info~", "phasor~", "play~", "prepend", "sprintf", "t", "translate", "transport", "trapezoid~", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/barlooper.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/barlooper.png"
---

# Synchronizing MSP audio loops with the transport

This example shows one way you might use **phasor~** to make the length of an audio sample loop stay precisely synchronized with the beat of the transport.

Upon loading a sound file into a **buffer~**, you can use **info~** to learn the duration of that **buffer~** (which will be the same as the duration of the sound file if you used the *replace* message to load it in), and then translate that duration into bars.beats.units to find out how many measures long it is at the current transport tempo. In this example, the number of bars is used to set the maximum limit of a **number box**. You can use that **number box** to specify how many bars of the sound file you'd like to play in a loop. That number of bars is translated back into milliseconds to determine the rate and range of a **phasor~**. The **phasor~** drives a **play~** object to read from the **buffer~**, and it also drives a **trapezoid~** object which is used as an amplitude envelope to taper the last 1/1000th of the loop in order to avoid clicks.

As you change the tempo of the **transport**, **translate** will update its output, and the **phasor~** will therefore continue to read the correct number of bars' worth of sound from the **buffer~**.

## Objects used

`*~` ×2, `translate` ×2, `trapezoid~`, `prepend`, `t`, `ezdac~`, `play~`, `phasor~`, `!/`, `sprintf`, `unpack`, `info~`, `buffer~`, `transport`

*Patch contains 36 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/barlooper.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/barlooper.png`
