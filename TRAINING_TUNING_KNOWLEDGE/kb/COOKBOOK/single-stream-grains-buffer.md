---
type: cookbook
name: "Single stream of grains from a buffer~"
summary: "This patch shows several techniques relevant to granular synthesis, playing a stream of short excerpts of recorded sound."
chapter: "MSP"
keywords: ["adstatus", "bangbang", "buffer~", "dbtoa", "delay", "expr", "groove~", "line~", "pan~", "random", "record~", "rslider", "sig~", "granulation"]
objects: ["!-", "!/", "*", "*~", "+", "-", "adc~", "adstatus", "b", "buffer~", "dac~", "dbtoa", "delay", "expr", "groove~", "line~", "loadbang", "metro", "pan~", "random", "record~", "rslider", "sel", "sig~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/buffergrains.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/buffergrains.png"
---

# Single stream of grains from a buffer~

This patch shows several techniques relevant to granular synthesis, playing a stream of short excerpts of recorded sound. (The patch uses one abstraction, called **pan~**, that's provided in the example titled "[Constant-intensity panning subpatch](constant-intensity-panning-subpatch.md)". You'll need to download that abstraction and save it with the name **pan~** somewhere in Max's file search path.)

At the top of this patch, you'll see a way to record sounds into a **buffer~** object, a named place in RAM where other objects can access the sound data. The **buffer~ *recordedsound*** object establishes a storage location in RAM for one minute's worth of sound that can be referred to with the name *recordedsound*. The **record~ *recordedsound*** object records sound into that location. By default, each time you record sound this way, the **record~** object will start at the beginning of its named **buffer~**. However, if you turn on its *append* attribute (send it the message *append 1*), it will instead start each recording at the location where the previous recording stopped, resulting in a concatenation of separate recordings in a single **buffer~**. Each time the **record~** object receives a nonzero number in its inlet, it begins recording the signal coming into its inlet into the **buffer~**.

In this example, we've included a quick 5-millisecond fade-in and fade-out whenever recording starts and stops, to avoid clicks in the stored sound data at the beginning and end of each recorded excerpt. When the **toggle** is turned on, the **line~** object is told to fade the signal amplitude in to 1 in 5 milliseconds as **record~** begins recording. When the **toggle** is turned off, we tell line~ to fade the signal amplitude down to 0 in 5 ms, and we delay turning off the **record~** object for 5 ms to allow that fade-out to take place.

The **loadbang** object sets up some initial conditions of this patch. It sets the Max scheduler to synchronize with the MSP signal vector by turning on the **adstatus *takeover*** object. This is equivalent to setting the Scheduler to run in Audio Interrupt in the Audio Status... dialog box. Running the Scheduler in Audio Interrupt can help minimize potential clicks caused by the fact that each playback grain is triggered by a Max message from **metro**; this ensures that Max messages are sent only at the beginning of an MSP signal vector. (N.B., an even better way to avoid such sychnronization problems is to trigger grains by an impulse in MSP instead of by a Max message, as demonstrated in the example "[Play a stream of random grains from a sound file](play-stream-random-grains-sound-file.md)".) We also turn on the *append* attribute of the **record~** object, and turn MSP on, so that sound is coming in and the patch is ready to run.

In th bottom part of the patch, an automated grain player randomly chooses the parameters of each grain. The rate of grain playback is determined by the time interval of the **metro** object (initially 100 ms), which can be changed using the **number** box labeled "grains per second"; the number of grains per second is divided into 1000 to determine the milliseconds per grain for **metro**. Each *bang* from **metro** triggers parameter choices for the starting point of the grain within the **buffer~**, its pitch transposition (rate of playback), its amplitude, the grain's duration, and the left-to-right panning of the grain. The random numbers for those parameters are triggered by the **metro** in different **random** objects, and the range of those random numbers is constrained by the values provided in the **rslider** objects. The starting point parameter is constrained by the size of the **buffer~**. The playback rate of the grain is calculated based on a range of possible transpositions in semitones. The amplitude is calculated based on a range of decibels. The duration range can make the grains more or less staccato, but should always be set to be no greater than the interval of the **metro**, accounting for an additional 10 ms for the fade-in and fade-out of the grain). The left-to-right panning of the grain is specified in a range from 0 to 1, which the **pan~** abstraction uses to calculate the correct amplitude for each stereo channel, to enact constant-intensity panning of the grains.

## Objects used

`*` ×6, `+` ×5, `rslider` ×5, `!-` ×5, `random` ×5, `*~` ×3, `line~` ×2, `adstatus`, `!/`, `metro`, `dbtoa`, `expr`, `dac~`, `pan~`, `loadbang`, `adc~`, `t`, `delay`, `b`, `sel`, `record~`, `sig~`, `groove~`, `-`, `buffer~`

*Patch contains 75 boxes, 80 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/buffergrains.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/buffergrains.png`
