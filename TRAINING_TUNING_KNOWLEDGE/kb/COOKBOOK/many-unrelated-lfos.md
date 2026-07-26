---
type: cookbook
name: "Many Unrelated LFOs"
summary: "By combining numerous low-frequency oscillators with unrelated repetition rates, you can create irregular shapes of modulation and patterns that never exactly r"
chapter: "MSP"
keywords: ["cycle~", "phasor~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "phasor~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/manyunrelatedLFOs.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/manyunrelatedLFOs_.png"
---

# Many Unrelated LFOs

By combining numerous low-frequency oscillators with unrelated repetition rates, you can create irregular shapes of modulation and patterns that never exactly repeat, creating a sound that changes in ways that seem constantly varying in somewhat unpredictable ways. In this example, on the right side of the patch LFOs are combined to create irregular shapes, which control the frequency of a **cycle~** object and a **phasor~** object, which in turn are multiplied (ring modulation), creating a rich and constantly changing sound; meanwhile, on the left side of the patch an extremely low frequency LFO at a rate of 1/30 Hz (a repetition period of 30 seconds) controls the rate at which a **phasor~** object reads through a Hanning function to create note lengths that range from 4 seconds to 1/12 of a second.

## Objects used

`*~` ×13, `+~` ×11, `cycle~` ×6, `phasor~` ×4, `ezdac~`, `scope~`

*Patch contains 51 boxes, 53 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/manyunrelatedLFOs.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/manyunrelatedLFOs_.png`
