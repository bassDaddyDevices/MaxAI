---
type: cookbook
name: "ADSR amplitude envelope"
summary: "The way that a sound’s amplitude evolves over time is called its amplitude envelope."
chapter: "Max"
keywords: ["dial", "adsr~", "ioscbank~", "amplitude envelope", "envelope"]
objects: ["*", "*~", "adsr~", "dial", "ezdac~", "ioscbank~", "key", "keyup", "loadbang", "scope~", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/adsr01.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/adsr01.png"
---

# ADSR amplitude envelope

The way that a sound’s amplitude evolves over time is called its amplitude envelope. The amplitude envelope of most musical notes, and indeed most acoustic sounds, can be characterized as having essentially four parts: 1) the attack, when the note is initiated, during which the sound goes from silence to full amplitude, 2) the decay, when the sound loses some of its initial energy and the amplitude diminishes gradually from its peak, 3) in some sounds there is a sustain portion, during which the player holds the amplitude at a fairly steady level, and 4) the release, when the player explicitly causes the sound to end. The use of line segments to describe these four parts—attack, decay, sustain, and release—can successfully emulate the amplitude envelope of many sounds. For that reason, the so-called ADSR envelope generator has become a canonical tool of sound synthesis. An ADSR envelope can be defined by four numbers, representing attack time, decay time, sustain level (the amplitude to which the sound decays and is then sustained constant by the player), and release time.

Max provides an **adsr~** object that, when turned on, generates a control signal that provides the attack and decay portions of the envelope, and then stays at the sustain level until it is turned off, at which point it releases the note and goes to silence. Its left inlet expects a nonzero number to trigger the start of the envelope and define the peak attack amplitude. The other inlets are used to specify the attack time, decay time, sustain level factor (which will always be relative to the peak attack amplitude), and release time. In many hardware synthesizers, and in many software imitations of those, these values are provided by dials, so we’ve replicated that interface in this example.

In the lower left portion of the patch, there is an **ioscbank~** object, which is a bank of 16 sine oscillators. The message box sets the frequency and amplitude of each oscillator. But we don’t hear that sound because it is being multiplied by 0. When the **adsr~** envelope generator is triggered, the envelope shape is used to control the amplitude of the sound. You can trigger and release the envelope with the space bar. Experiment with different parameter values for the **adsr~** object.

## Objects used

`dial` ×4, `select` ×2, `ezdac~`, `scope~`, `keyup`, `key`, `ioscbank~`, `*~`, `loadbang`, `*`, `adsr~`

*Patch contains 38 boxes, 33 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/adsr01.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/adsr01.png`
