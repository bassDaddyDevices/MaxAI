---
type: cookbook
name: "Change of delay time may cause clicks"
summary: "The main ways to delay a sound in Max are demonstrated in the examples from this site Simple delay of an audio signal(simple-delay-audio-signal.md) and Delay wi"
chapter: "MSP"
keywords: ["tapin~", "tapout~", "delay", "click"]
objects: ["+~", "ezdac~", "gain~", "sfplay~", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplechangeofdelaytime.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplechangeofdelaytime2.png"
---

# Change of delay time may cause clicks

The main ways to delay a sound in Max are demonstrated in the examples from this site [Simple delay of an audio signal](simple-delay-audio-signal.md) and [Delay with tempo-relative timing](delay-tempo-relative-timing.md). You might want to take a look at those examples and read the associated text to review how they work, and what their pros and cons are.

Whenever you change the delay time, you risk causing a click by creating a discontinuity in the output waveform. (The amplitude at the new location in the ring buffer is likely to be different from the amplitude at the old location, so the output waveform will leap instantly from the old amplitude to the new amplitude.) This patch allows you to try that, to confirm that clicks can occur. You might sometimes get lucky and change the delay time at a moment of silence thus avoiding a click, but the odds are that a click will occur. So if you plan to change the delay time while listening, you probably want to try to solve that problem. Examples such as "[Continuous change of delay time causes a pitch shift](continuous-change-delay-time-causes-pitch-shift.md)," "[Ducking when changing delay time using tapin~ and tapout~](ducking-when-changing-delay-time-using-tapin-and-tapout.md)," and "[Abstraction for crossfading between delay times](abstraction-crossfading-between-delay-times.md)" address this issue.

## Objects used

`gain~` ×2, `sfplay~`, `tapout~`, `tapin~`, `+~`, `ezdac~`

*Patch contains 15 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplechangeofdelaytime.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplechangeofdelaytime2.png`
