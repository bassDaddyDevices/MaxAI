---
type: cookbook
name: "Adjusting audio amplitude"
summary: "Amplification of audio (turning the volume up or down) corresponds to the mathematical operation of multiplication in your program."
chapter: "MSP"
keywords: ["*~", "number~", "slider", "volume", "amplitude"]
objects: ["*~", "closebang", "cycle~", "ezdac~", "loadbang", "number~", "scope~", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/adjustamplitude.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/adjustamplitude.png"
---

# Adjusting audio amplitude

Amplification of audio (turning the volume up or down) corresponds to the mathematical operation of multiplication in your program.

If you simply send a Max message to the **\*~**object to provide a new multiplier value, though, the amplitude of the audio signal might change so abruptly as to cause an unwanted click in the sound. (This is explained in greater detail in the "[MSP Basic Tutorial: Adjustable Oscillator](https://docs.cycling74.com/max7/tutorials/05_mspbasicchapter02)".) To avoid such clicks, you need to use a control signal instead, one that interpolates to the new multiplier sample-by-sample over the course of a small amount of time. The **number~** object is capable of doing that. It ramps smoothly to a new value over a number of milliseconds that you can specify in the *Ramp Time* attribute in the object's Inspector. (You can also set the ramp time via the object's right inlet.)

Max provides many different ways to adjust the amplitude of an audio signal. This patch shows just one way, using a **slider** object to provide numbers from 0 to 1, using the **number~** object to convert that to a signal and interpolate to the new value over a very short amount of time to avoid clicks, and then using the **\*~** object to scale the audio signal.

## Objects used

`scope~` ×2, `closebang`, `loadbang`, `slider`, `number~`, `*~`, `ezdac~`, `cycle~`

*Patch contains 21 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/adjustamplitude.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/adjustamplitude.png`
