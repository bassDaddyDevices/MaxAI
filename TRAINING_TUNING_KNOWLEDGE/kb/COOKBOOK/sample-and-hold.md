---
type: cookbook
name: "Sample and hold"
summary: "The idea of “sample and hold” is to capture the amplitude of a signal at a particular instant in time, and hold it constant for a while."
chapter: "MSP"
keywords: ["cycle~", "ezdac~", "live.gain~", "noise~", "number~", "phasor~", "sah~", "*~", "+~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "live.gain~", "noise~", "number~", "phasor~", "sah~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sample_hold.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sample_hold.png"
---

# Sample and hold

The idea of “sample and hold” is to capture the amplitude of a signal at a particular instant in time, and hold it constant for a while. In MSP, the **sah~** object allows you to do just that. The signal you want to sample goes in the left inlet of **sah~**, and a triggering signal goes in the right inlet. Whenever the triggering signal surpasses a particular threshold (going upward), whatever the amplitude value of the left inlet’s signal is at that instant will be sent out as a constant signal value, until the next trigger.

The **phasor~** object is a good candidate to use as a repetitive triggering signal because it produces a reliably repeating shape. In this example, a threshold value of 0.5 is used by **sah~**, and because **phasor~** always goes upward from 0 to 1, it’s sure to pass 0.5.

The **noise~** object continually produces random sample values from -1 to 1. The **sah~** object grabs and holds one of those samples, triggered by the **phasor~** which is surpassing the threshold 8 times per second. Using **+~** and a **\*~** objects you can move that value (from -1 to 1) into a range from 440 to 880 to be used as the frequency value for a **cycle~** oscillator. (In this example, we first move the value into the range 0 to 1, then move that into the range 440 to 880, to show the conversion explicitly.)

## Objects used

`number~` ×3, `+~` ×2, `*~` ×2, `phasor~`, `cycle~`, `sah~`, `ezdac~`, `live.gain~`, `noise~`

*Patch contains 19 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sample_hold.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sample_hold.png`
