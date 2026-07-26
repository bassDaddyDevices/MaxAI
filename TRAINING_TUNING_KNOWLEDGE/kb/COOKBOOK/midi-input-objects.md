---
type: cookbook
name: "MIDI input objects"
summary: "Max has dedicated objects for parsing each particular type of MIDI channel message coming into the computer, such as notes, pitchbends, controllers, etc., and i"
chapter: "Max"
keywords: ["MIDI", "notein", "controller", "noteout", "bendin", "bendout", "pgmout", "ctlin", "ctlout"]
objects: ["bendin", "bendout", "ctlin", "ctlout", "notein", "noteout", "pgmout"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIinputobjects.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIinputobjects.png"
---

# MIDI input objects

Max has dedicated objects for parsing each particular type of MIDI channel message coming into the computer, such as notes, pitchbends, controllers, etc., and it has corresponding output objects for formatting and transmitting MIDI messages to be sent out of Max. This patch shows a few such objects: the input objects **notein**, **bendin**, and **ctlin**, and their corresponding output objects **noteout**, **bendout**, and **ctlout**, as well as **pgmout** for transmitting MIDI program change messages.

In this example, incoming notes from the M-Audio Ozone keyboard controller (MIDI input port "Ozone Port 1") are passed out to the operating system of Mac OS X, a virtual MIDI output port called "AU DLS Synth 1". In this way, MIDI messages from a (silent) MIDI control keyboard can be passed to a virtual software synthesizer that interprets the messages correctly and plays the appropriate sound in response.

These MIDI input objects are useful because they identify and parse specific types of incoming MIDI messages, and the output objects are useful because they take the vital information (such as pitch and velocity) and format a correct MIDI message to be transmitted elsewhere.

## Objects used

`pgmout`, `ctlout`, `ctlin`, `bendout`, `bendin`, `noteout`, `notein`

*Patch contains 19 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIinputobjects.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIinputobjects.png`
