---
type: cookbook
name: "Routing MIDI to other applications"
summary: "The easiest way to establish MIDI connection between Max and other applications on the same computer is via the \"virtual\" MIDI ports Max provides."
chapter: "Max"
keywords: ["MIDI", "ctlout", "makenote", "noteout"]
objects: ["+", "b", "counter", "ctlout", "drunk", "expr", "makenote", "metro", "noteout", "random"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIvirtualport.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIvirtualport.png"
---

# Routing MIDI to other applications

The easiest way to establish MIDI connection between Max and other applications on the same computer is via the "virtual" MIDI ports Max provides. Max creates two virtual input ports and two virtual output ports that can be accessed by other MIDI applications. (You can see those virtual ports listed in Max's MIDI Setup, by choosing *MIDI Setup...* from the Options menu.)

This example shows how one can generate MIDI information in Max and send it to another application. Here note information and controller information is being sent to the virtual port "from MaxMSP 1". Any application that's set to receive MIDI input from that virtual port will get the data that Max is transmitting. In this case Max is generating a cloud of random notes and is also moving the volume up and down in a sinusoidal fashion every 100 notes.

## Objects used

`ctlout`, `expr`, `counter`, `b`, `metro`, `+`, `drunk`, `random`, `makenote`, `noteout`

*Patch contains 13 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIvirtualport.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIvirtualport.png`
