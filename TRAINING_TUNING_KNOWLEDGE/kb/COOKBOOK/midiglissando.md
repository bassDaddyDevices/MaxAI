---
type: cookbook
name: "MIDIGlissando"
summary: "This example shows how to control glissando using MIDI."
chapter: "Max"
keywords: ["ftom", "xbendout", "bendout", "flush", "noteout", "ctlout", "line", "midiout", "sustain"]
objects: ["*", "+", "-", "0", "1", "2", "bendout", "closebang", "ctlout", "flush", "ftom", "key", "keyup", "kslider", "line", "loadbang", "loadmess", "makenote", "midiout", "mousestate", "noteout", "pgmout", "sel", "slider", "sustain", "t", "xbendout"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIGlissando.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIGlissando.PNG"
---

# MIDIGlissando

This example shows how to control glissando using MIDI. A little bit of revision: MIDI notes can only be played with whole numbers 0-127. Some synths allow you to specify an alternate tuning other than 12-tone equal temperament, but that’s not what we’re after in this case. So, let’s say, if you’re converting frequency to midi note values you will need to calculate the desired pitchbend from the fractional part of the value you obtain from **ftom**. And to complicate matters, the actual effect of a MIDI pitchbend message depends on the pitchbend range setting of the receiving synthesizer. By default it’s almost always ±2 semitones, but you can usually change that on the receiving device. There is a registered parameter number (RPN) for setting the pitchbend range via MIDI, so if the synth understands that message you can set the range you want remotely. The built-in AU DLS Synth on Mac, and Microsoft GS Wavetable Synth on Windows, understands that message. In this example patch you can a) set the pitchbend range you want and try it out with a mock keyboard and pitchbend wheel, and b) play any frequency by calculating the correct pitchbend (assuming a default pitchbend range of ±2 semitones).

See more on the “[more MIDIglissando](more-midiglissando.md)” example.

## Objects used

`sel` ×3, `noteout` ×2, `loadmess` ×2, `midiout`, `loadbang`, `2`, `closebang`, `pgmout`, `+`, `*`, `makenote`, `xbendout`, `-`, `ftom`, `t`, `0`, `1`, `keyup`, `key`, `sustain`, `line`, `slider`, `mousestate`, `flush`, `kslider`, `bendout`, `ctlout`

*Patch contains 49 boxes, 44 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIGlissando.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIGlissando.PNG`
