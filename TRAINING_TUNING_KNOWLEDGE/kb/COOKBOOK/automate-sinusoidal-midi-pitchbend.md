---
type: cookbook
name: "Automate sinusoidal MIDI pitchbend"
summary: "This patch demonstrates one way to create a sinusoidal pattern of numbers in Max."
chapter: "MSP"
keywords: ["snapshot~", "cycle~", "bendout", "pitchbend"]
objects: ["*", "+", "bendout", "cycle~", "ezdac~", "loadbang", "slider", "snapshot~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinusoidalbend.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinusoidalBend.png"
---

# Automate sinusoidal MIDI pitchbend

This patch demonstrates one way to create a sinusoidal pattern of numbers in Max.

The MSP object **cycle~** generates a sinusoidal waveform at the audio sampling rate, and the **snapshot~** object reports the value of its input at regular intervals—every 40 milliseconds in this example. The range of **cycle~** is -1 to 1, so we add 1 to it to offset the range to be 0 to 2, and we then multiply it by 64 to get numbers in a range between 0 and 128. The **slider** object will convert that *float* to an *int* (as would the **bendout** object if it received the *float* directly), and transmits the number out as a MIDI pitchbend message.

Another way to do this sort of task is shown in the example "[Sinusoidal events](sinusoidal-events.md)". See also, the example "[Play a sinusoidal melody](play-sinusoidal-melody.md)".

## Objects used

`loadbang`, `bendout`, `slider`, `*`, `+`, `snapshot~`, `ezdac~`, `cycle~`

*Patch contains 13 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinusoidalbend.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinusoidalBend.png`
