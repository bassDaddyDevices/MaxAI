---
type: cookbook
name: "Very simple monophonic MIDI synthesizer"
summary: "This is a bare-bones monophonic MIDI synthesizer that uses the pitch and velocity information from incoming MIDI note messages to control the frequency and amplitude of a sawtooth waveform."
chapter: "MSP"
keywords: ["notein", "poly", "synthesizer"]
objects: ["*~", "bendin", "bendout", "ctlin", "ctlout", "dbtoa", "ezdac~", "kslider", "mtof", "notein", "pgmout", "poly", "saw~", "scale", "select", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplemonophonicMIDIsynth.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/enforcingmonophonyinaMIDIsynth.png"
---

# Very simple monophonic MIDI synthesizer

This is a bare-bones monophonic MIDI synthesizer that uses the pitch and velocity information from incoming MIDI note messages to control the frequency and amplitude of a sawtooth waveform. It works, but it could definitely be improved. It's nearly identical to the even more bare-bones "[Overly simple MIDI synth](http://overly-simple-midi-synth)" example, but with one improvement, the addition of the **poly** object, described below.

This patch uses the MIDI key number (pitch) data byte to set the frequency of a sawtooth oscillator, and it uses the velocity data byte to set the amplitude of the oscillator. Note-on velocity values in the range 1-127 are mapped to a range of decibels from -60 to 0, and those decibel values are then converted to linear amplitude values to scale the amplitude of the oscillator.

One not-so-obvious problem with designing a monophonic synthesizer is the fact that people usually don't play a keyboard in an idealized way, ending one note and then starting another. More commonly, people play *legato* (the Italian word for "tied", meaning connected), in order to get a smoother-sounding transition between notes, by pressing the key of a new note *before* releasing the key of the previously-played note. Even if the player is not consciously thinking of playing legato, it's very likely that s/he will play the keyboard in that slightly-overlapping manner. That can be a problem when you're making a monophonic synthesizer in MIDI, because the note-off message of the previous note will come *after* the note-on message of the new note, and could confusingly turn off the new note.

To address that problem, in this example we use the **poly** object to limit the number of note messages being sent to the synthesizer, so that the synth never gets more than one note message at a time. The **poly** object keeps track of the number of note-on messages (pitch-velocity pairs) it's holding, and it will turn off the oldest note (the one it has held the longest) when it gets a new note that exceeds its limit. This is the most common way of limiting the number of simultaneous MIDI notes. In our case, we're limiting the number of possible notes to 1, and implementing "voice-stealing" (turning off the previous note before playing the new one) in order to avoid the overlapping note problem described in the previous paragraph.

Possible improvements to this synthesizer include:  
- handling overlapping or simultaneous incoming MIDI note messages by producing polyphonic synthesis (multiple simultaneous tones in response to multiple note messages).  
- an ADSR amplitude envelope to control the loudness better  
- implementation of MIDI pitchbend messages to alter the frequency commensurately  
- vibrato and/or tremolo effect by means of a low-frequency oscillator (LFO), with the modulation wheel controlling the depth of the modulation effect  
- portamento to glide from one frequency to another  
- envelope to control the timbre of the instrument so that it changes character over the course of the note, probably dependent on the MIDI note velocity  
- etc.

## Objects used

`poly`, `slider`, `ezdac~`, `*~`, `saw~`, `dbtoa`, `select`, `scale`, `mtof`, `ctlout`, `ctlin`, `pgmout`, `bendout`, `bendin`, `notein`, `kslider`

*Patch contains 45 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplemonophonicMIDIsynth.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/enforcingmonophonyinaMIDIsynth.png`
