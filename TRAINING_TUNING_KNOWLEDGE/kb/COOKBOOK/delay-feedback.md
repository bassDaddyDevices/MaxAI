---
type: cookbook
name: "Delay with feedback"
summary: "The delay~ object does not permit its delayed signal to be fed back into its own left inlet."
chapter: "MSP"
keywords: ["tapin~", "tapout~", "delay", "feedback"]
objects: ["*~", "+~", "ezadc~", "ezdac~", "gain~", "number~", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaydemo05.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaydemo05.png"
---

# Delay with feedback

The **delay~** object does not permit its delayed signal to be fed back into its own left inlet. (You can probably imagine how that would make it impossible for MSP to calculate the correct signal, since you'd be asking it to perform infinite recursion: the signal plus the delayed signal plus the delayed sum of those two plus...). If you want to get delay with feedback, you need to use objects that are designed to handle that.

The **tapin~** and **tapout~** objects together work similarly to the **delay~** object. The **tapin~** object allows you to create a ring buffer containing the most recently received signal, and you specify the size of the buffer as the argument to **tapin~**––in terms of milliseconds. (The size in samples will be calculated automatically based on the sample rate.) A **tapout~** object that's connected to the **tapin~** object will refer to that ring buffer and will look a certain amount of time in the past for its output (whatever number of milliseconds you specify). In this case we typed in 1000 ms as the delay time for **tapout~** to use, but that can be changed with a number in the inlet.

Unlike the **delay~** object, which can have a delay time as small as one sample, **tapout~** has a minimum delay time of one signal vector. (The signal vector size is specified in the Audio Status window.) This might be a disadvantage if you want extremely short delay times (in which case **delay~** might be a better object to use), but it has the advantage of permitting its output to be fed back into the inlet of **tapin~** (because MSP can calculate each vector's samples without having to account for the delayed sound from the same vector). Feeding the delayed sound back into the delay buffer allows for echoes of echoes, giving the potential for a series of repeating echoes using a single delay tap. But one must be careful not to create a situation in which the sum of the original signal and the delayed signal, plus a delayed version of that, etc., grows ever louder and causes clipping. For that reason, you almost invariably will want to multiply the delayed signal by some number between 0 and 1 to scale down its amplitude.

## Objects used

`gain~`, `ezdac~`, `number~`, `+~`, `*~`, `ezadc~`, `tapout~`, `tapin~`

*Patch contains 9 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaydemo05.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaydemo05.png`
