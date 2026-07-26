---
type: cookbook
name: "Subpatch for playing sound cues from sflist~"
summary: "This is a subpatch that can be used for playing sound cues from an sflist~ object."
chapter: "MSP"
keywords: ["sampler", "sfplay~", "sflist~", "sound cue", "poly~"]
objects: ["*~", "dbtoa", "expr", "in", "out~", "routepass", "sfplay~", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playsamples.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playsamples3.png"
---

# Subpatch for playing sound cues from sflist~

This is a subpatch that can be used for playing sound cues from an **sflist~** object. It has one **inlet** and one **outlet**, and—serving the same purpose—it also has an **in** object and an **out~** object; thus, it can be used either as a normal subpatch or as the content of a **poly~** object. It's monophonic, but one could easily adapt it to make a stereo version.

The object that plays the sound cue is **sfplay~**. Rather than sending 'open' or 'preload' messages to that object, this subpatch assumes that there is an **sflist~** object somewhere else that contains the necessary sound cues. So you just refer this **sfplay~** object to that **sflist~** by sending in the message 'set' followed by the name of the **sflist~**.

For playing a sound cue, this subpatch expects to get three pieces of information in a single list: the cue number (referring to the **sflist~**), a number of semitones you'd like to transpose the sample by means of speed change (the transposition can be a fractional number), and the number of decibels of gain or trim you'd like to use to alter the amplitude of the sound. To provide all that information, you send in a three-item list. If you send in a two-item list, the amplitude will stay the same as previously designated (unity gain initially). If you send in just a single number (the cue number), the previous transposition and amplitude will be used.

When multiple copies of this subpatch are used (as in a **poly~**, for example), each voice of the **poly~** could refer to a different **sflist~** if so desired, or they could all refer to the same **sflist~**. This is quite a simple yet versatile patch, because you have easy control of the choice of sample, its transposition, and its amplitude. To stop a sound cue, of course, you just need to send in 0.

## Objects used

`routepass`, `out~`, `*~`, `dbtoa`, `expr`, `unpack`, `sfplay~`, `in`

*Patch contains 15 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playsamples.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playsamples3.png`
