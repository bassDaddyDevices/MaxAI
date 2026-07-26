---
type: cookbook
name: "Delay effects"
summary: "The tapin~ and tapout~ objects work together to delay sound."
chapter: "MSP"
keywords: ["tapin~", "tapout~", "feedback", "delay", "LFO", "flanging"]
objects: ["*~", "+~", "cycle~", "ezdac~", "line~", "pack", "sfplay~", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delayeffects.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delayeffects.png"
---

# Delay effects

The **tapin~** and **tapout~** objects work together to delay sound. The **tapin~** creates a place in memory for storing a [circular buffer](https://en.wikipedia.org/wiki/Circular_buffer) of the most recently received signal. Its argument specifies how many milliseconds of audio it should store. Any connected **tapout**~ object accesses that memory to get the recent past of an audio signal. Open a sound file in **sfplay~** and play the file, and experiment with different delay times for **tapout~**.

A subtle feature of this **tapin~** and **tapout~**combination of objects is that the **tapout~** object cannot access the current signal vector; that is, its minimum delay is one signal vector (the number of audio samples processed at a time by MSP, as specified in the Audio Status... dialog). The advantage of that restriction is that, because the output of **tapout~** is not from the current signal vector, you can make a feedback loop back into **tapin~** to make feedback echo effects, as shown here. Note that you'll usually want to reduce the amplitude of the feedback signal, by multiplying it by less than 1, before it goes back into **tapin~**, in order to avoid an infinitely increasing amplitude.

To create a flanging effect, you can control the delay time of **tapout~** with a continuous signal, as is being shown in the upper right corner of the patch. If you want to hear that effect, edit the patch to connect the **tapin~** obejct to that time-varying **tapout~** delay.

## Objects used

`*~` ×3, `tapout~` ×2, `pack` ×2, `line~` ×2, `+~` ×2, `cycle~`, `tapin~`, `ezdac~`, `sfplay~`

*Patch contains 37 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delayeffects.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delayeffects.png`
