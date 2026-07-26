---
type: cookbook
name: "Multi-tap audio delay with feedback"
summary: "Audio delay is achieved by creating a buffer in which the most recent past sound can be stored."
chapter: "MSP"
keywords: ["allpass~", "delay", "ezdac~", "feedback", "gain~", "number~", "meter~", "sfplay~", "tapin~", "tapout~", "*~", "+~", "AIFF file", "WAVE file"]
objects: ["*~", "+~", "allpass~", "ezdac~", "gain~", "meter~", "number~", "sfplay~", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/multitapdelay.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/multitapdelay.png"
---

# Multi-tap audio delay with feedback

Audio delay is achieved by creating a buffer in which the most recent past sound can be stored. Usually this is called a "ring buffer" or "[circular buffer](https://en.wikipedia.org/wiki/Circular_buffer)", because when the buffer is filled (with, let's say, the past one second of sound), it loops around and begins refilling itself at the beginning, thus overwriting the sound that was stored more than one second ago. In this way, the buffer always stores the most recent one second (or whatever amount can be contained in the buffer), and we can access past sound samples by working backward through the buffer from the most recently stored sample (looping back to the end and continuing backward if necessary). But in MSP you don't really need to worry about the inner workings of such a circular buffer, because the object **tapin~** takes care of that for you. The **tapin~** object creates a circular buffer space in memory to store the designated amount of its most recently received audio signal.

The **tapout~** object, once its inlet is connected to the outlet of a **tapin~** object, can access ("tap") that stored signal at any point in the recent past (up to the maximum time stored in the **tapin~**). The **tapout~** can tap the signal at as many points as it has typed-in arguments. (It always has at least one tap point, by default.) The delay time(s) are specified in milliseconds, either by the typed-in argument, by a *float* or *int* received in the inlet, or by a *signal* received in the inlet. (As is the case with all MSP objects, if an inlet can receive either a *signal* or a *float*, if it has a *signal* connected to it, then arguments and *float*s are ignored.)

In this example, the **tapout~** object has three different delay times specified by typed-in arguments, and those delay times can be changed with numbers in its inlets. The outputs of **tapout~** are mixed with (added to) the original un-delayed signal, sent to a **gain~** object to control their volume (since the sum of the four signals could easily exceed 1) and then sent to the **ezdac~**. The output(s) of **tapout~** can be fed back into the inlet of a **tapin~** to create feedback. The minimum delay time that can be obtained with **tapout~**, however, is the duration of one signal vector. The fed-back signal will (must) always have at least that much delay. Also, in order to avoid clipping due to rapidly-accumulated additions, it's almost always a good idea to scale down the delayed signal—by multiplying it by some number between 0 and 1—before feeding it back into the **tapin~** from which it came.

In this example, the fed-back signal is also passed through an all-pass filter (**allpass~**). This type of filter has the effect of delaying different frequencies by slightly different times, thus changing their phase relationships, without altering the frequency content of the sound. In audio it can be used to reduce or blur resonance effects caused by feeding sound back with short delay time.

## Objects used

`+~` ×3, `allpass~`, `number~`, `*~`, `meter~`, `gain~`, `tapout~`, `tapin~`, `ezdac~`, `sfplay~`

*Patch contains 30 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/multitapdelay.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/multitapdelay.png`
