---
type: cookbook
name: "Control the volume and rate of a sound file"
summary: "The right inlet of sfplay~ accepts a rate factor (increment factor) to control the speed of sound file playback."
chapter: "MSP"
keywords: ["sfplay~", "*~", "number~", "amplitude control", "playback rate"]
objects: ["*~", "ezdac~", "loadbang", "number~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/volume_rate_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/volume_rate_0.png"
---

# Control the volume and rate of a sound file

The right inlet of **sfplay~** accepts a rate factor (increment factor) to control the speed of sound file playback. The factor can be supplied as a floating point number or as a MSP signal.

To control the amplitude of a signal, you need to multiply it by a gain factor—greater than 1 to increase it, and between 0 and 1 to decrease it. The MSP object for multiplication is **\*~**. Although **\*~** accepts either a float or a signal in its right inlet, it's usually best to control amplitude with a signal that doesn't change instantaneously, in order to avoid clicks in the sound. The **number~** object used in this example actually has built-in linear interpolation that it uses when it receives a new number. When you change the value in the **number~** object, it moves its output signal to that new value gradually over a certain amount of time, which you can set using the ‘Ramp Time in Milliseconds’ attribute in the object's inspector. (The **line~** object is also useful for moving from one value to another over a specified period of time, interpolating linearly sample-by-sample.)

## Objects used

`*~` ×2, `loadbang`, `number~`, `ezdac~`, `sfplay~`

*Patch contains 26 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/volume_rate_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/volume_rate_0.png`
