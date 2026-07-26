---
type: cookbook
name: "A useful noise gate (ducker) subpatch for rejecting unwanted sounds"
summary: "A \"ducker\" is a system that turns a signal down to 0 when it's below a given threshold."
chapter: "MSP"
keywords: ["ducker~", "Peakamp~", "rampsmooth~", "translate", "noise gate"]
objects: ["*~", ">=", "change", "dbtoa", "patcherargs", "peakamp~", "rampsmooth~", "sig~", "translate", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ducker~_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ducker~2.png"
---

# A useful noise gate (ducker) subpatch for rejecting unwanted sounds

A "ducker" is a system that turns a signal down to 0 when it's below a given threshold. This is also frequently called a "noise gate" in audio engineering, because it acts as a doorway that closes out unwanted low-level ambient noise and lets through only the louder, more desired signal. It's useful for suppressing unwanted low-level audio, such as in a cell phone transmission when the user is not talking, or, more to the point for musical purposes, as in a microphone signal when the musician is not playing.

You can include this subpatch in your MSP audio signal chain somewhere between the sound source (such as **adc~**) and other processors or analyzers in which you want to suppress ambient noise. The patch allows you to set a threshold, specified in decibels, above which the incoming audio signal will pass unaltered, and below which the signal will get turned down to complete silence. It uses the **peakamp~** object to monitor the peak amplitude of the incoming audio signal, to see if the peak is above or below the threshold. (You could make a version of this that uses RMS amplitude instead, with the **average~**object instead of **peakamp~**, but I find that the peak amplitude is a more useful measurement in most situations and using it causes the ducker to be more quickly responsive.) You can set the monitoring interval in milliseconds. The patch also allows the user to set "attack" and "release" times, in milliseconds; the "attack" value determines how quickly the gain will be turned up to unity when the peak amplitude rises above the threshold, and the "release" value determines how quickly the sound will be turned down when its peak amplitude falls below the threshold. The **rampsmooth~** object smooths the transitions from 0 to 1 (sound being turned on), and from 1 to 0 (sound being turned off), over the specified amounts of time. Because the **rampsmooth~** object expects time to be specified in samples rather than ms (not so intuitive for the user), the **translate** object is used to convert milliseconds (what the user cares about) into samples (what **rampsmooth~** cares about), using the current audio sampling rate.

The above-mentioned values—threshold, attack time, release time, and monitoring interval—can be sent in the inlets. Those values can initially be specified as typed-in arguments in the parent patch, if so desired, thanks to the **patcherargs** object. If no values are provided explicitly by the user, **patcherargs** provides useful initial default values: threshold of -40 dB, attack time of 10 ms, release time of 500 ms, and monitoring interval of 10 ms.

## Objects used

`translate` ×2, `dbtoa`, `sig~`, `unpack`, `patcherargs`, `rampsmooth~`, `*~`, `change`, `>=`, `peakamp~`

*Patch contains 24 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ducker~_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ducker~2.png`
