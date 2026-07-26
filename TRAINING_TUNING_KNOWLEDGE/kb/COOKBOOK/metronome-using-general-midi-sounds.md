---
type: cookbook
name: "Metronome using General MIDI sounds"
summary: "When you’re trying to synchronize musical events to a timeline, it’s sometimes useful to have a metronome that tells you where the computer thinks the beat is."
chapter: "Max"
keywords: ["loadbang", "makenote", "metro", "noteout", "select", "transport"]
objects: ["loadbang", "makenote", "metro", "noteout", "sel", "textbutton", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Metronome using General MIDI sounds.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Metronome using General MIDI sounds.png"
---

# Metronome using General MIDI sounds

When you’re trying to synchronize musical events to a timeline, it’s sometimes useful to have a metronome that tells you where the computer thinks the beat is. The metronome makes a percussive sound on each beat, and ideally makes a unique sound on the first beat of each measure. Most DAW and MIDI sequencing programs have such a feature. This example patch demonstrates a way to implement a transport-synchronized metronome using MIDI messages to trigger percussive clave sounds in a synthesizer.

A computer metronome could trigger any sort of sound: MIDI notes, percussion sounds, recorded samples, synthesized beeps, etc. In this example, I’ve chosen to use two specific MIDI notes, key numbers 75 and 76 on MIDI channel 10 which, according to the [General MIDI](http://en.wikipedia.org/wiki/General_MIDI) standard, plays the sounds of Claves and High Wood Block. Those sounds should be roughly the same on any GM-compliant synthesizer, including the synthesizers built into the Mac OS and Windows OS.

The “global transport” in Max is a timekeeper that’s separate from, but linked to, the main Max scheduler of events. It governs the behavior of timing objects that use tempo-relative timing syntax (note values, bars.beat.units notation, or ticks). The **transport** object provides an interface within a Max patch to communicate with the global transport. The **transport** object can be used to control the global transport timekeeper, such as by setting its current time position, setting its tempo, setting its time signature, and starting or stopping it. The **transport** object can also be queried for that information; a *bang* in the inlet of **transport** will send that status info out its outlets.

This example uses both the ‘setting’ and ‘getting’ capabilities of the **transport** object. The **metro** object in this patch is initialized with a timing interval of ‘4n’, meaning that when it’s turned on it will send out a *bang* every quarter note (which, at the default tempo of 120, will be every 500 ms). It also has its ‘quantize’ attribute set to ‘4n’, which means that its output will be snapped precisely to the quarter note timepoints (the beats) of the global transport. Because the **metro** interval is states as a tempo-relative timing value (4n), this **metro** will only run when the global transport is turned on. The **textbutton** labeled Rewind triggers a *0* message to the right inlet of **transport**, which resets the global transport to the time position of 0 ticks. The messages *1* and *0* from the **toggle** labeled Start/Stop turn the **transport** on or off. In this example, I’ve provided separate **toggle** switches for turning the global transport on and off and for turning the **metro** on and off, because in a more elaborate complete program the metronome controls and the transport controls would probably be encapsulated as separate parts of the program. (The user should be able to start and stop the transport in one place, and should be able to turn on or off the option of hearing the metronome in another place.)

Each time the **metro** sends out a *bang*, at moments that will necessarily be synchronized with the beats of the global transport, it queries the **transport** object to find out which beat of the measure it is. If it’s the first beat of the measure, it plays the Claves sound with a dynamic of fortissimo (velocity 127); if it’s any other beat of the measure, it plays the High Wood Block sound with a more moderate forte dynamic (velocity 100). Note that the note durations are set at ‘8n’ in the **makenote** object, to ensure that each MIDI note will be turned off after half a beat’s time.

## Objects used

`textbutton`, `loadbang`, `makenote`, `noteout`, `sel`, `transport`, `metro`

*Patch contains 28 boxes, 21 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Metronome using General MIDI sounds.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Metronome using General MIDI sounds.png`
