---
type: cookbook
name: "Delay with tempo-relative timing"
summary: "The delay attribute (the delay time) of a delay~ object can be specified with tempo-relative timing (such as ‘notevalues’) instead of samples."
chapter: "MSP"
keywords: ["delay~", "delay", "meter~", "tempo"]
objects: ["*~", "+~", "-~", "delay~", "ezadc~", "ezdac~", "gain~", "meter~", "number~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaydemo02.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaydemo02.png"
---

# Delay with tempo-relative timing

The delay attribute (the delay time) of a **delay~** object can be specified with tempo-relative timing (such as ‘notevalues’) instead of samples. This example shows a delay time of a dotted eighth note rhythmic value, at whatever the current transport tempo is. The transport tempo is 120 bpm by default; a dotted eighth note at that tempo will last 375 ms which, at a sample rate of 44100 samples per second, is 16,537.5 samples. Specifying the delay time as a rhythmic value allows you not to have to worry about the math of exactly how many samples of delay you need (other than making sure that you create a big enough buffer for **delay~**). In this case, 88200 samples' worth of memory space will be a great plenty for a dotted eighth note at any reasonable tempo.

This example shows the use of a **gain~** object so that we can control the level of sound that is coming into MSP from the audio input (which allows us to turn the audio input down to 0 if we need to do so), and a **meter~** object to show how much signal is being sent to **delay~**. There is also a subpatch that allows you to control the balance between direct input sound and delayed sound. The right inlet of the subpatch expects a value from 0 to 1, where 0 is all direct sound and no delayed sound, a value of 1 is all delayed sound and no direct sound, and a value of 0.5 will be a half-and-half mix of the two. In audio processing terminology this value is often referred to as the "wetness" or the "wet/dry mix", meaning the balance between the effect and the original sound. (Double click on the patcher object to see its contents.) This kind of simple mixer is frequently useful when applying audio effects.

## Objects used

`*~` ×2, `-~`, `sig~`, `+~`, `number~`, `meter~`, `gain~`, `delay~`, `ezdac~`, `ezadc~`

*Patch contains 20 boxes, 16 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaydemo02.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaydemo02.png`
