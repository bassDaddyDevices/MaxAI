---
type: cookbook
name: "Random access of a sound sample"
summary: "The fact that groove~ can leap to any point in the buffer~ makes it a suitable object for certain kinds of algorithmic fragmented sound playback."
chapter: "MSP"
keywords: ["groove~", "buffer~", "info~", "line~", "sampling"]
objects: ["*", "*~", "-", "buffer~", "ezdac~", "groove~", "i", "info~", "line~", "metro", "pow", "random", "sig~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/randomaccesssound.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/randomaccesssound.png"
---

# Random access of a sound sample

The fact that **groove~** can leap to any point in the **buffer~** makes it a suitable object for certain kinds of algorithmic fragmented sound playback. In this example it periodically plays a small chunk of sound chosen at random (and with a randomly chosen rate of playback).

The **info~** object reports the length of the sound that has been read into the **buffer~**, and that number is used to set the maximum value for the **random** object that will be used to choose time locations. When the **metro** is turned on, its bangs trigger three things: an amplitude envelope, a starting point in ms, and a playback rate. The starting point is some randomly chosen millisecond time in the **buffer~**. The rate is calculated by choosing a random number from 0 to 200, offsetting it and scaling it so that it is in the range -1 to 1, and using that number as the exponent for a power of 2. That's converted into a signal by the **sig~** object to control the rate of **groove~**. (2 to the -1 power is 0.5, 2 to the 0 power is 1, and 2 to the 1 power is 2, so the rate will always be some value distributed exponentially between 0.5 and 2.)

The amplitude envelope is important to prevent clicks when **groove~** leaps to a new location in the **buffer~**. The **line~** object creates a trapezoidal envelope that is the same duration as the chunk of sound being played. It ramps up to 1 in 10 milliseconds, stays at 1 for some amount of time (the length of the note minus the time needed for the attack and release portions), and ramps back to 0 in 10 ms. Notice that whenever the interval of the **metro** is changed, that interval minus 20 is stored and is used as the sustain time for subsequent notes. This pretty effectively creates a trapezoidal "window" that fades the sound down to 0 just before a new start time is chosen, then fades it back up to 1 at the time the new note is played.

MSP calculates audio signals several samples at a time, in order to ensure that it always has enough audio to play without ever running out (which would cause clicks). The number of samples it calculates at a time is determined by the signal vector size, which can be set in the Audio Status window. If the sample rate is 44100 Hz, and the signal vector size is 64, this means that audio is computed in chunks of 1.45 ms at a time; a larger signal vector size such as 512 would mean that audio is computed in chunks of 11.61 ms at a time. For this reason, the millisecond scheduler of Max messages might not be in perfect synchrony with the MSP calculation interval based on the signal vector size. This causes the possibility that we will get clicks even if we are trying to make Max messages occur only at moments when the signal is at 0. For that reason, you need to be very careful to synchronize those events carefully. One thing that can help is to synchronize the Max scheduler to send messages only at the same time as the beginning of a signal vector calculation. You can do that by setting the Scheduler in Overdrive and Scheduler in Audio Interrupt options both On in the Audio Status window. Another useful technique (although not so appropriate with **groove~**, which can only have its starting points triggered by Max messages) is to cause everything in your MSP computations to be triggered by other signals instead of by Max messages. See “[The phasor~ object](phasor-object.md)” example––along with the subsequent links in that example––for more demonstrations.

## Objects used

`-` ×2, `random` ×2, `t`, `pow`, `sig~`, `ezdac~`, `*`, `*~`, `i`, `line~`, `metro`, `info~`, `groove~`, `buffer~`

*Patch contains 22 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/randomaccesssound.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/randomaccesssound.png`
