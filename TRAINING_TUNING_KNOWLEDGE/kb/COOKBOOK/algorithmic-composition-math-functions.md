---
type: cookbook
name: "Algorithmic composition with math functions"
summary: "This patch is based on an example in the Max 3.5 Tutorial, chapter 44."
chapter: "Max"
keywords: ["detonate", "expr", "uzi", "algorithmic composition", "MIDI sequencer"]
objects: ["b", "ctlout", "delay", "detonate", "expr", "makenote", "noteout", "random", "t", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/onethousandnotes.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/onethousandnotes_0.png"
---

# Algorithmic composition with math functions

This patch is based on an example in the Max 3.5 Tutorial, chapter 44. It demonstrates a) the use of math functions to generate patterns for musical parameters and b) faster-than-realtime recording of MIDI data in the **detonate** object.

The **detonate** object is a multi-track MIDI sequencer. You can use it to record note information by sending it a *record* message and then providing (in the first five inlets) vital MIDI note information consisting of delta time (the change in time from the onset of the previous note), pitch, velocity, duration, and channel. (You can also store ancillary information, such as controller data, along with each note event.) Then, to play that information back, you send **detonate** a *start* message, followed by a *next* message telling it to send out the next note. Because the time-till-the-next-note (i.e., the delta time of the next next note) comes out the left outlet, you can use that to determine how long to wait before sending the next *next* message.

The **uzi** object will send out a fast-as-possible ascending series of numbers (and a *bang* for each one) in response to a single *bang*. In this example it instantaneously sends out 1000 numbers going from 0 to 999. Those numbers are plugged into various mathematical expressions to create specific functions (curves or shapes) over the course of 1000 notes. That information is recorded by **detonate** as note information, and when **uzi** is done it triggers *start* and *next* messages to begin playing the notes.

The effect of those expressions is described in [two pages from the Max 4.6 Tutorial manual](http://music.arts.uci.edu/dobrian/Music215S12/MaxPatches/onethousandnotes.pdf). (Note, the manual refers to a **-1** object after the right outlet of **uzi**, an object which existed in the original because **uzi** could originally only count starting from 1. In more recent versions, **uzi** can be instructed to start counting from any number, so we have set it to begin counting from 0, thus removing the need for the **-1** object.)

## Objects used

`expr` ×5, `noteout`, `t`, `b`, `random`, `uzi`, `detonate`, `delay`, `makenote`, `ctlout`

*Patch contains 25 boxes, 30 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/onethousandnotes.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/onethousandnotes_0.png`
