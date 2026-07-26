---
type: cookbook
name: "Rhythmic delays in time with a musical tempo"
summary: "The tempo-relative timing capabilities in Max can be used to synchronize MSP processing in time with a musical beat."
chapter: "MSP"
keywords: ["click~", "random", "tapin~", "tapout~", "transport", "AIFF file", "WAVE file"]
objects: ["+", "0", "change", "click~", "dac~", "loadbang", "matrix~", "metro", "random", "sel", "sfplay~", "t", "tapin~", "tapout~", "translate", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/rhythmicdelays.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/rhythmicdelays.png"
---

# Rhythmic delays in time with a musical tempo

The tempo-relative timing capabilities in Max can be used to synchronize MSP processing in time with a musical beat. In this example, timings of delays are specified in tempo-relative time units so that they remain rhythmically correct for any tempo.

Click on the **button** above the **click~** and you will hear a click followed by four rhythmically delayed versions of the click (with diminishing amplitudes). The timings of the delays have been set to a dotted eighth note, a dotted quarter note, a double-dotted quarter note, and a half-note-plus-a-sixteenth. The **tapout~** object does not interpret tempo-relative time syntax on its own, so we use the translate object to convert time musical units such as *8nd* or bars.beats.units such as *0.1.360* into milliseconds.

Now try changing the tempo of the **transport** to some other tempo such as 96 bpm, and then trigger the click again. Notice how the rate of the rhythm has changed commensurate with the change in the global tempo. Finally, start the **transport**, which will also start the **metro**, which will begin playing a different sound every quarter note. Since the delays are all set to happen on sixteenth note pulses somewhere between the quarter notes, you will hear a composite rhythm that is more complex than is actually being played by the **metro**. If you change the tempo, the delays will stay in the same rhythmic relationship to the quarter-note beat.

## Objects used

`translate` ×4, `loadbang` ×2, `t` ×2, `sel` ×2, `0`, `sfplay~`, `metro`, `+`, `random`, `change`, `transport`, `dac~`, `matrix~`, `click~`, `tapin~`, `tapout~`

*Patch contains 38 boxes, 48 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/rhythmicdelays.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/rhythmicdelays.png`
