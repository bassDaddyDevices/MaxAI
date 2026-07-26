---
type: cookbook
name: "Envelope with the function object"
summary: "The line~ object calculates and performs that interpolation, sending out a signal that arrives at a specified destination value in a specified amount of time."
chapter: "Max"
keywords: ["function", "mtof", "saw~", "line~", "envelope", "adsr"]
objects: ["*~", "dac~", "function", "i", "line~", "live.gain~", "loadmess", "mtof", "saw~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/adsrfunction.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/adsrfunction.png"
---

# Envelope with the function object

The **line~** object calculates and performs that interpolation, sending out a signal that arrives at a specified destination value in a specified amount of time. Once the signal arrives at that value, it stays there until it receives another message telling it to transition linearly to a new signal value.

It has been noted by synthesizer designers and acoustics researchers that the amplitude envelope (the global shape of the change in amplitude) over the course of a note, as played by many instruments, can be approximated by just a few line segments that describe the short "attack" time as the sound starts rising from silence to peak amplitude, a "decay" time as the sound settles from the attack into a more steady state, the steady-state "sustain" level, and the "release" time as the sound goes silent when the note ends. In synthesizer design, therefore, it has been common to describe the amplitude envelope of a note in terms of those four traits, abbreviated ADSR: attack decay sustain release.

The **function** object in Max allows you to draw a shape made up of line segments by clicking at the breakpoints conjoining those segments. Therefore, **function** is very useful for drawing an ADSR envelope. When the object receives the message 'bang', it sends out a message intended for a **line~** object that will cause the **line~** to send out a signal in the exact shape of the shape shown in the **function**.

This patch shows how a fixed shape drawn in **function** might be used to produce an amplitude envelope with **line~**. The envelope goes from 0 to peak amplitude in 5 milliseconds, then decays to half that amplitude in 120 milliseconds, stays at that amplitude for 750 ms, and drops to 0 in 125 ms. Thus the total duration of the note will be 1 second. The 'setdomain' message to **function** will keep the shape the same but will change all the transition times proportionally to execute the shape in the specified number of milliseconds.

This works fine for cases where we know the note duration in advance. For use with MIDI in real time, however, the note duration is not known in advance, so it would be better to have an envelope that performs the attack and decay portions, then holds steady until the MIDI note-off message indicates that the note has been released. That is demonstracted in the patch [Using a sustain point in a function object](using-sustain-point-function-object.md).

## Objects used

`loadmess`, `dac~`, `live.gain~`, `i`, `mtof`, `saw~`, `*~`, `line~`, `function`

*Patch contains 20 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/adsrfunction.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/adsrfunction.png`
