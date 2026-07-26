---
type: cookbook
name: "MIDI stream to exponential curve"
summary: "In this patch the zmap object changes the scale of the incoming number stream from the ctlin object from the standard range of MIDI (0-127) – the 0 is bypassed"
chapter: "MSP"
keywords: ["zmap", "dbtoa", "cycle~", "ctlin"]
objects: ["*~", "0", "0.", "ctlin", "cycle~", "dbtoa", "ezdac~", "line~", "loadmess", "sel", "slider", "zmap"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/exponentialCurveMIDI.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/exponentialCurveMIDI.png"
---

# MIDI stream to exponential curve

In this patch the **zmap** object changes the scale of the incoming number stream from the **ctlin** object from the standard range of MIDI (0-127) – the 0 is bypassed so that it is translated properly once the range is mapped back to linear amplitude – to a specified range in decibels – in the case of the example from -63 to 0 dB. The **dbtoa** object then converts this back to linear amplitude which is used to control the amplitude of the **cycle~** sending to the **dac~** via the **line~** and **\*~** objects.

## Objects used

`*~`, `ezdac~`, `cycle~`, `line~`, `0`, `0.`, `ctlin`, `sel`, `slider`, `loadmess`, `zmap`, `dbtoa`

*Patch contains 16 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/exponentialCurveMIDI.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/exponentialCurveMIDI.png`
