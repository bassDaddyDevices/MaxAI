---
type: cookbook
name: "Event timing with transport"
summary: "This patch shows a simple use of a transport-governed metronome to trigger events at a constant rate."
chapter: "Max"
keywords: ["transport", "metro", "timing", "tempo", "timepoint"]
objects: ["counter", "cycle~", "dac~", "live.gain~", "metro", "mtof", "select", "timepoint", "transport", "when"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/eventtimingwithtransport.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/eventtimingwithtransport.png"
---

# Event timing with transport

This patch shows a simple use of a transport-governed metronome to trigger events at a constant rate. The **metro** object that has the argument '4n' will be governed by the transport because its interval is specified in a tempo-relative, music-based "note values" format. (Just for the sake of comparison, the patch includes another **metro** that is unaffected by the transport because its interval is specified in milliseconds.) The transport-governed **metro** will only run when the transport is on.

This patch does a very simple musical task. When the **metro** is turned on (and the transport is running) it will trigger a **counter** at regular intervals. The interval is a quarter note initially, because of the typed-in argument, but you can change the interval by clicking on one of the message boxes that provides a different rhythmic note value. The actual time in milliseconds will be calculated internally, based on the 'tempo' attribute of the transport. At a tempo of 100 beats per minute, a quarter note equals 600 milliseconds.

The numbers from the **counter** progress in a loop from 60 to 71. Those numbers are used as if they were MIDI pitch values, middle C up to B, which are converted to the appropriate frequency with the **mtof** object, and sent to a **cycle~** oscillator.

Note that the **toggle** at the top labeled "start/stop" does several things. When it's turned on, it sends out the number 1, which is first detected by the **select** object. ("If the input is equal to 1, send a *bang* out the first outlet.") The **select** object turns the volume of the **live.gain~** object to -20 dB (**live.gain~** internally interpolates sample-by-sample over a specified ramp time, 10 ms by default, to avoid clicks), resets the transport to time 0 (specified in ticks), and resets the **counter** to be ready to send out its minimum value. Next, the 1 from the **toggle** turns on the **transport**, and turns on the **metro**.

## Objects used

`metro` ×2, `when`, `dac~`, `select`, `timepoint`, `transport`, `mtof`, `live.gain~`, `cycle~`, `counter`

*Patch contains 45 boxes, 34 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/eventtimingwithtransport.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/eventtimingwithtransport.png`
