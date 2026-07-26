---
type: cookbook
name: "Audio cue chooser"
summary: "This examples shows a way to choose automatically from a list of preestablished sound cues, with a crossfade between cues rather than a sudden switch."
chapter: "MSP"
keywords: ["sflist~", "sfplay~", "matrix~"]
objects: ["+", "bangbang", "delay", "ezdac~", "gswitch2", "loadbang", "matrix~", "metro", "random", "sel", "sflist~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/audiocuechooser.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/audiocuechooser.png"
---

# Audio cue chooser

This examples shows a way to choose automatically from a list of preestablished sound cues, with a crossfade between cues rather than a sudden switch.

To do this we have two stereo **sfplay~** objects, both of which refer to the same list of sound cues in an **sflist~** object, named "cuelist". Instead of sending *open* and *preload* messages to each **sfplay~** object, you can send those same messages to a single **sflist~**, and then the **sfplay~** objects refer to that object by its name.

The cue-choosing algorithm here is very simplistic—we just choose a cue number at random with a **random** object (either by clicking on the **button** or using the **metro** to send a *bang* once per second). And if all we wanted to do was switch from one cue to another, that's all we'd need, and we'd really only need one **sfplay~** object to do that. However, our goal is to make a crossfade between the currently playing cue and the newly chosen cue. For that, we need two **sfplay~** objects, sending the cue selections to alternating objects, and we need a way to mix and fade the two sounds.

The **matrix~** object serves as an audio mixer, and is good for what we need to do here. The four channels of audio from the two **sfplay~** objects are mixed down to two channels in **matrix~**, and the messages to **matrix~** turn down the amplitude of one sound while turning up the amplitude of the other sound. (For basic information about **matrix~**, see the example titled "[Using **matrix~** for audio routing and mixing](https://using-matrix-audio-routing-and-mixing)".)

A **toggle** object is a good way to alternate between two choices. To alternate between the **sfplay~** objects, the *bang* from the button triggers the **toggle**, which a) switches the outlet of the **ggate** object (a.k.a. **gswitch2**) and b) triggers the appropriate messages to the **matrix~**. So, to summarize what happens each time the **metro** sends out a *bang*: cancel any *bang* that might be scheduled in either of the **delay** objects, switch the outlet of **ggate** and trigger the correct messages to fade out the current sound cue and fade in the new sound cue, then choose the new sound cue a random, sending it out the desired outlet of the **ggate**, and also scheduling a *0* message for the previous **sfplay~** to be stopped after the crossfade has been completed.

## Objects used

`delay` ×2, `sfplay~` ×2, `bangbang`, `metro`, `ezdac~`, `matrix~`, `sel`, `gswitch2`, `+`, `random`, `loadbang`, `sflist~`

*Patch contains 26 boxes, 35 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/audiocuechooser.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/audiocuechooser.png`
