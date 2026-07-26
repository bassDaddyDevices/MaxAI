---
type: cookbook
name: "Tempo-relative timing for MSP LFO control"
summary: "The MSP phasor~ object is frequently used as a low-frequency control signal for audio."
chapter: "MSP"
keywords: ["cycle~", "ezdac~", "gain~", "mtof~", "phasor~", "scope~", "transport", "*~", "+~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "gain~", "mtof~", "phasor~", "scope~", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasegliss.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasegliss.png"
---

# Tempo-relative timing for MSP LFO control

The MSP **phasor~** object is frequently used as a low-frequency control signal for audio. Because it is often used to control other signals over a specific period of time, **phasor~** can use tempo-relative timing, too. The frequency (rate) of a **phasor~** is normally specified in Hertz, but you can alternatively give **phasor~** a time interval, using tempo-relative time units, and it will use the inverse of that to determine its frequency.

For example, if I wanted a **phasor~** to ramp from 0 to 1 every 500 milliseconds, I would specify a frequency of 2 Hz so that it will complete one cycle every 1/2 second. I could alternatively give it a tempo-relative time unit, such as *4n*, which—if we assume the default transport tempo of 120 bpm—equals 1/2 second (500 ms), and **phasor~** will interpret that as its period, and use the inverse of that (2/1) to determine its frequency. If the tempo of the transport changes, **phasor~** will revise its frequency accordingly. This works even if the transport is not running.

In this example patch, **phasor~** is being used to control a pitch glissando of one octave, which then gets translated by **mtof** into frequency for a **cycle~** object. The **phasor~** on the left completes one sweep per beat, while the **phasor~** on the right completes three sweeps per beat (once for each eighth-note triplet). If you change the tempo of the **transport**, the **phasor~** objects adjust their frequency to match the new tempo, thus staying in sync. If you provide the **phasor~** on the right with a new time interval—a sixteenth note or a quintuplet sixteenth note (which equals 96 ticks)—it will change its rate. Unless that change were to happen exactly on the beat, though, the **phasor~** on the right will likely no longer be in phase with the **phasor~** on the left. So if you want them to remain in phase it's a good idea either to trigger such a change exactly on the beat or to reset the phase of both **phasor~**s by sending a phase value in their right inlets.

Other MSP objects don't understand tempo-relative time units the way that **phasor~** does, but there's usually a way to sync them to the transport's tempo if you want to. For example, if you want use tempo-relative timings for the rate of a **cycle~** object that you're using as a LFO, you can just set the frequency of the **cycle~** to 0, and then drive it by connecting the output of a **phasor~** to its right inlet. If you want the delay time of a **tapout~** object to be exactly the same interval as a tempo-relative time unit, you can use **translate** to convert that time unit into milliseconds.

## Objects used

`mtof~` ×2, `+~` ×2, `*~` ×2, `cycle~` ×2, `phasor~` ×2, `gain~`, `transport`, `ezdac~`, `scope~`

*Patch contains 27 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasegliss.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasegliss.png`
