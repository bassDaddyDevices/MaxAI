---
type: cookbook
name: "Play a sinusoidal tone"
summary: "This simple program allows you to listen to a sinusoidal tone with any desired frequency and amplitude."
chapter: "MSP"
keywords: ["cycle~", "ezdac~"]
objects: ["*~", "cycle~", "ezdac~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playasinusoidaltone.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playasinusoidaltone.png"
---

# Play a sinusoidal tone

This simple program allows you to listen to a sinusoidal tone with any desired frequency and amplitude. Initially both frequency and amplitude are set to 0, so you'll need to set the frequency to some number in the audible range, and you'll need to increase the amplitude to some value greater than 0 but not greater than 1. The speaker icon (**ezdac~** object) is an on/off button for audio, and sends the output signal to the DAC.

[If you're totally new to Max, you might benefit from this [15-minute video walkthrough of this example](https://youtu.be/iuG-WHhr16g).]

## Objects used

`scope~` ×2, `*~`, `cycle~`, `ezdac~`

*Patch contains 17 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playasinusoidaltone.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playasinusoidaltone.png`
