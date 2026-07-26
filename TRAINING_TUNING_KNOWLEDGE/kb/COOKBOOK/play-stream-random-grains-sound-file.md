---
type: cookbook
name: "Play a stream of random grains from a sound file"
summary: "This patch demonstrates a method for playing a stream of sound grains randomly chosen from a sound file."
chapter: "MSP"
keywords: ["granulation", "info~", "phasor~", "delta~", "sah~", "sample-and-hold"]
objects: ["!/", "*~", "+~", "-", "<~", "abs~", "buffer~", "cycle~", "delta~", "ezdac~", "info~", "live.gain~", "loadbang", "noise~", "number~", "phasor~", "play~", "sah~", "scope~", "t", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/streamofgrains.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/streamofgrains.png"
---

# Play a stream of random grains from a sound file

This patch demonstrates a method for playing a stream of sound grains randomly chosen from a sound file.

We first load a sound file into a **buffer~**. When you use the *replace* message to load the file, the **buffer~** will be resized to the size of the sound file, and **buffer~** will send a *bang* out of its right outlet when it has finished loading the file. The *bang* can be used to trigger an **info~** object, which will report information about the sound file. The info we care about in this case is the file's duration; that duration, in milliseconds, will tell us the range of numbers we can use to specify a grain segment we want to play.

The **phasor~** object is used here to read through a segment of the sound, and also to read through the windowing function contained in the **buffer~ useasawindow**, which we have filled with a Hann (a.k.a. Hanning) window function. That window shape will be used to taper the amplitude of the grain of sound at each end, thus avoiding clicks.

Since we know the frequency of the **phasor~** in cycles per second, we can easily calculate its period in ms (1000/frequency), giving us the duration of each grain. At just the precise moment when each new grain starts—when the window function has tapered the sound's amplitude down to 0—we choose a new starting location in the **buffer~**. We can detect when the **phasor~** starts a new cycle by checking its change with the **delta~** object. At the moment when the **phasor~** leaps from 1 back to 0, the change will suddenly be negative, causing a 1 value to come out of the **<~ 0** object. That will trigger the **sah~** (sample and hold) object to grab a random value from the **noise~** object (the absolute value of which will be between 0 and 1). We multiply that by the duration of the **buffer~**, and use the result to set a new random starting point in the **buffer~**. From that point, we read through the next grain of sound (the duration of which we calculated using the period of the **phasor~**). Because we choose the new location at the very beginning of the **phasor~**'s cycle, the amplitude will be 0 at that moment, so there will be no discontinuty in the sound. The result is a continuous stream of randomly chosen bits of sound, at a constant rate, windowed by the Hanning function.

## Objects used

`*~` ×3, `loadbang` ×2, `buffer~` ×2, `play~`, `+~`, `ezdac~`, `live.gain~`, `number~`, `<~`, `sah~`, `-`, `t`, `!/`, `abs~`, `noise~`, `info~`, `umenu`, `delta~`, `scope~`, `cycle~`, `phasor~`

*Patch contains 35 boxes, 37 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/streamofgrains.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/streamofgrains.png`
