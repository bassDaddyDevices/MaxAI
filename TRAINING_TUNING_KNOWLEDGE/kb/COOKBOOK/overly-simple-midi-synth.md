---
type: cookbook
name: "Overly simple MIDI synth"
summary: "This is a bare-bones monophonic MIDI synthesizer that uses the pitch and velocity information from incoming MIDI note messages to control the frequency and amplitude of a sawtooth waveform."
chapter: "Max"
keywords: ["MIDI", "synthesizer", "kslider", "notein"]
objects: ["*~", "bendin", "bendout", "ctlin", "ctlout", "dbtoa", "ezdac~", "kslider", "mtof", "notein", "pgmout", "saw~", "scale", "select", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIsynth.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIsynth.png"
---

# Overly simple MIDI synth

This is a bare-bones monophonic MIDI synthesizer that uses the pitch and velocity information from incoming MIDI note messages to control the frequency and amplitude of a sawtooth waveform.

This patch uses the MIDI key number (pitch) data byte to set the frequency of a sawtooth oscillator, and it uses the velocity data byte to set the amplitude of the oscillator. Note-on velocity values in the range 1-127 are mapped to a range of decibels from -60 to 0, and those decibel values are then converted to linear amplitude values to scale the amplitude of the oscillator.

Possible improvements to this synthesizer include:  
- handling overlapping or simultaneous incoming MIDI note messages by producing polyphonic synthesis (multiple simultaneous tones in response to multiple note messages).  
- an ADSR amplitude envelope to control the loudness better  
- implementation of MIDI pitchbend messages to alter the frequency commensurately  
- vibrato and/or tremolo effect by means of a low-frequency oscillator (LFO), with the modulation wheel controlling the depth of the modulation effect  
- portamento to glide from one frequency to another  
- envelope to control the timbre of the instrument so that it changes character over the course of the note, probably dependent on the MIDI note velocity  
- etc.

## Objects used

`slider`, `ezdac~`, `*~`, `saw~`, `dbtoa`, `select`, `scale`, `mtof`, `ctlout`, `ctlin`, `pgmout`, `bendout`, `bendin`, `notein`, `kslider`

*Patch contains 44 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIsynth.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIsynth.png`
