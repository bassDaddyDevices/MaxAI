---
type: cookbook
name: "Using A Loop to Set Master Tempo"
summary: "The groove~ object can be used to record a loop on the fly and use the loop length to set a master tempo which can send MIDI clock messages to other machines."
chapter: "Max"
keywords: ["buffer~", "sig~", "uzi", "seq~", "midiout~", "groove~", "startloop", "looping"]
objects: ["/", "buffer~", "ezdac~", "groove~", "loadbang", "midiout", "number~", "sel", "seq~", "sig~", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/UseLooptoSetMasterTempo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Use Loop to set master tempo1.png"
---

# Using A Loop to Set Master Tempo

The **groove~** object can be used to record a loop on the fly and use the loop length to set a master tempo which can send MIDI clock messages to other machines. The **groove~** object sends out its right outlet a signal that goes from 0. to 1. as the current playback location of **groove~** goes from its ‘loopstart’ point to its ‘loopend’ point. By default, **groove~**’s ‘loopstart’ point is 0 and its ‘loopend’ point is the end of the associated **buffer~**. (That is, by default, **groove~** loops from start to end of the **buffer~**.) So every time you loop through your recorded sample with **groove~**, **groove~** will send a **phasor~**-like ramp from 0. to 1. out its right outlet.

You can use that ramp to trigger as many MIDI clock messages as you want, using the **seq~** object. So, for example, if you wanted to consider your loop to be one measure of 4/4 time, you could trigger 96 MIDI clock messages (4 beats x24 clocks per beat).

## Objects used

`number~`, `ezdac~`, `midiout`, `sel`, `/`, `loadbang`, `uzi`, `seq~`, `sig~`, `groove~`, `buffer~`

*Patch contains 18 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/UseLooptoSetMasterTempo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Use Loop to set master tempo1.png`
