---
type: cookbook
name: "Basic RAM recording into buffer~"
summary: "To record a sound into RAM, you must first allocate/designate a place in RAM into which to record."
chapter: "MSP"
keywords: ["adc~", "buffer~", "dac~", "play~", "record~", "record", "RAM"]
objects: ["adc~", "buffer~", "dac~", "play~", "record~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/basicRAMrecording.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/basicRAMrecording.png"
---

# Basic RAM recording into buffer~

To record a sound into RAM, you must first allocate/designate a place in RAM into which to record. The **buffer~** object creates a named buffer in memory large enough to store the specified duration of audio data. In this example, the buffer is named "theholdingplace" and holds up to 60,000 milliseconds (one minute) of audio. The incoming audio signal from the **adc~** object goes into a **record~** object that refers to that memory buffer. When **record~** receives a nonzero number, it begins recording until it receives a *0*, or until the end of the buffer is reached. To play back the sound, the most direct method is to refer to the named buffer with a **play~** object; **play~** responds to *start* and *stop* messages.

## Objects used

`play~`, `dac~`, `buffer~`, `record~`, `adc~`

*Patch contains 18 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/basicRAMrecording.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/basicRAMrecording.png`
