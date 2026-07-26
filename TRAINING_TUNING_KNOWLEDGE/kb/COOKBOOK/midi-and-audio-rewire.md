---
type: cookbook
name: "MIDI and audio via ReWire"
summary: "Max can interface with other applications via ReWire."
chapter: "MSP"
keywords: ["bangbang", "drunk", "ezdac~", "gain~", "makenote", "metro", "midiformat", "pack", "prepend", "random", "rewire~", "slider", "thresh"]
objects: ["+", "b", "drunk", "ezdac~", "gain~", "makenote", "metro", "midiformat", "pack", "prepend", "random", "rewire~", "slider", "thresh"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIviaReWire.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIviaReWire.png"
---

# MIDI and audio via ReWire

Max can interface with other applications via [ReWire](https://www.propellerheads.se/download/updates_rewire/). Max can [act as either a ReWire host or a ReWire client](https://docs.cycling74.com/max5/vignettes/core/rewire.html). Max can be a client to an open host application just by choosing "ad\_rewire" as the MSP audio driver in the DSP Status window. Alternatively, you can use Max as the host (mixer) application by including the **rewire~** object in your program. This establishes Max as a mixer (host) application, and a ReWire-capable synth application that you open while Max is a mixer will pipe its audio to MSP via the outlets of the **rewire~** object.

This example shows Max in use as a host to the synth program Reason. Max can send formatted MIDI messages to Reason to play notes and control parameters of the Reason devices (see the **rewire~** reference page for details), and MSP can further process the synth audio after it comes out of **rewire~**. Here Max is generating note information, formatting it as MIDI messages and sending those to the **rewire~** object to be transmitted to Reason via ReWire. The audio that Reason produces in response will be piped back to Max via ReWire, where it can be used in MSP. (In this case MSP is only being used to control the output volume, but the sound received via ReWire can be treated just like any other MSP audio signal.)

## Objects used

`gain~` ×2, `thresh`, `pack`, `midiformat`, `prepend`, `b`, `metro`, `+`, `drunk`, `random`, `makenote`, `slider`, `ezdac~`, `rewire~`

*Patch contains 18 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MIDIviaReWire.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MIDIviaReWire.png`
