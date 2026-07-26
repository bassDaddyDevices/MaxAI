---
type: cookbook
name: "Two ways to get BPM timing"
summary: "Sometimes it’s more convenient to think about musical time in \"beats per minute\" (BPM) instead of milliseconds."
chapter: "Max"
keywords: ["BPM", "tempo", "counter"]
objects: ["!/", "counter", "loadbang", "metro", "select", "tempo"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/twoBPMideas.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/twoBPMideas.png"
---

# Two ways to get BPM timing

Sometimes it’s more convenient to think about musical time in "beats per minute" (BPM) instead of milliseconds. (Beats per minute is also a much better unit to use when you want to express an accelerando or decelerando.) Here are two easy ways to express timing in terms of beats per minute.

The metro object expects to receive its time interval in milliseconds. In order to cause metro to bang at a BPM rate, you just need to divide BPM (beats/minute) into 60000 (milliseconds/minute). The one-minute units cancel each other out, leaving a value in milliseconds per beat.

*(milliseconds/minute) / (beats/minute) = milliseconds/beat*

The patch on the left demonstrates this method. In the example, a tempo of 80 BPM results in 750 milliseconds per beat. The **metro** with that interval can be used to trigger events on the beat, and by counting beats you can also count measures.

The patch on the right demonstrates the **tempo** object. It works rather like a combination of the **metro** and **counter** objects, but it uses BPM and metric divisions of a whole note to express the timing of its output. It assumes a whole note as one measure and a quarter note as one beat. You specify a tempo value in BPM, either as the first typed-in argument or as a number in the second inlet, and you specify a fraction to express the rhythmic values you want it to report. For example, the arguments 80 1 16 means "at a tempo of 80 quarter notes per minute, output every 1/16 note. It will output a count showing where it is in the 4/4 measure, starting at 0 and counting up to 15. (At a tempo of 80 BPM, one quarter-note is 750 ms, so the interval between 16th-note pulses is 187.5 ms.)

## Objects used

`counter` ×2, `select`, `loadbang`, `!/`, `tempo`, `metro`

*Patch contains 34 boxes, 17 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/twoBPMideas.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/twoBPMideas.png`
