---
type: cookbook
name: "Program changes for multi-timbral MIDI"
summary: "You can use a MIDI \"program change\" message to tell a synthesizer to change to a different sound."
chapter: "Max"
keywords: ["transport", "metro", "random", "makenote", "noteout", "pgmout"]
objects: ["+", "<", "clip", "makenote", "metro", "noteout", "pgmout", "random", "select", "t", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/programchangesformultitimbralmidi.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/programchangesformultitimbralmidi.png"
---

# Program changes for multi-timbral MIDI

You can use a MIDI "program change" message to tell a synthesizer to change to a different sound. The Max object for that is **pgmout**.

Note that "program change" is a MIDI channel message, which means that it applies to a particular MIDI channel. Most synthesizers (including the one in your computer's OS) are multi-timbral, meaning that they're capable of playing different timbres on different MIDI channels. So, to get more than one sound at a time, you'll need to send different program change messages on different MIDI channels, and play the notes you want on each channel.

In this example, we've chosen program 5 on MIDI channel 1 (electric piano in General MIDI), program 36 on MIDI channel 2 (fretless electric bass in General MIDI), and some Latin percussion (bongos, congas, and timbales) on channel 10, which by default in General MIDI should be used for key-based percussion set.

## Objects used

`t` ×6, `random` ×6, `metro` ×3, `select` ×3, `<` ×3, `clip` ×3, `+` ×3, `makenote` ×3, `noteout` ×3, `pgmout` ×2, `transport`

*Patch contains 79 boxes, 55 connections, 3 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/programchangesformultitimbralmidi.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/programchangesformultitimbralmidi.png`
