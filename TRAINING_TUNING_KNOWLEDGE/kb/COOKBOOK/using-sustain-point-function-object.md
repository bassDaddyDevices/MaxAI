---
type: cookbook
name: "Using a sustain point in a function object"
summary: "When you play a note with MIDI, you usually want the note to sustain as long as the key is held down, then you want it to turn off (either immediately or gradua"
chapter: "MSP"
keywords: ["kslider", "poly", "scale", "dbtoa", "function", "mtof", "line~", "saw~"]
objects: ["*~", "dac~", "dbtoa", "function", "kslider", "line~", "loadmess", "mtof", "notein", "poly", "saw~", "scale", "select", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/functionwithrelease.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/functionwithrelease.png"
---

# Using a sustain point in a function object

When you play a note with MIDI, you usually want the note to sustain as long as the key is held down, then you want it to turn off (either immediately or gradually) when the key is released (when the note-off message is received). Because MIDI is designed to function in real time, in live performance, there is no duration information contained in a note-on message. The duration can only be known once the key has been released. Therefore, when a MIDI note-on message occurs, a MIDI synth needs to "attack" the note and let it "decay" to its stable "sustain" level, then either stay at that level or slowly diminish (depending on the instrumental effect desired), and finally "release" and turn off completely when the note-off message arrives. So, although we still want an ADSR amplitude envelope, we want the ADS parts to happen on note-on, but we want to delay the R part till the note-off message arrives.

The **function** object takes that fact into account. You can set any breakpoint in the function (except for the first and last points) to be a "sustain" point where the function will pause. You do that by command-clicking on the point (control-click on Windows) you want to sustain or by sending a 'sustain' message. When **function** receives a 'bang', it will send out a message to tell the **line~** object to make the function shape up to the first sustain point. Then, when **function** receives a 'next' message it will send a message to **line~** to continue the function, up to the end or up to the next sustain point.

In this example patch, the third point of the function (point number 2, since the points are numbered starting at 0) is set to be a sustain point. When the **function** receives a 'bang' (from a nonzero velocity in a note-on message) it sends out the instructions to **line~** to proceed up to that point. Then, when **function** gets a 'next' message (triggered by the 0 velocity from a note-off message) it completes the envelope.

Note that here we are using the **poly 1 1**object to ensure monophonic performance; each new note-on triggers a note-off for the previous note. If that note-off is immediately followed by a note-on, then the release will never have time to occur, and the new attack will happen instead.

## Objects used

`*~` ×2, `dbtoa`, `t`, `line~`, `function`, `select`, `scale`, `notein`, `poly`, `dac~`, `loadmess`, `kslider`, `saw~`, `mtof`

*Patch contains 25 boxes, 23 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/functionwithrelease.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/functionwithrelease.png`
