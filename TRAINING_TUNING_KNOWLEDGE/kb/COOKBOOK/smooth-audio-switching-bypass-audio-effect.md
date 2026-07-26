---
type: cookbook
name: "Smooth audio switching to bypass an audio effect"
summary: "This example shows how, instead of switching instantaneously from one audio signal to another, we can do a quick crossfade between signals, thus avoiding clicks."
chapter: "MSP"
keywords: ["cycle~", "line~", "*~"]
objects: ["*~", "+~", "==", "cycle~", "ezadc~", "ezdac~", "line~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bypassexample.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bypassexample.png"
---

# Smooth audio switching to bypass an audio effect

This example shows how, instead of switching instantaneously from one audio signal to another, we can do a quick crossfade between signals, thus avoiding clicks. The patch illustrates a common reason for switching signals––to bypass an audio effect.

Initially the incoming signal from **adc~** goes through a ring modulation supatch. (Notice that the **line~** object on the left is initialized to a 0 signal, and the one on the right that's going to the ring modulator is initialized to 1.) If we want to bypass the ring modulation effect, we just click on the **toggle**, sending a 1 to the left **line~** object (thus passing an unchanged signal through the **\*~** object to the **+~** object); however, the 1 from the toggle also goes to the **==** ‘0’ object (but is not equal to 0), thus sending a 0 to the other **line~** object, turning it off. The **toggle** acts as a bypass switch by quickly crossfading from processed signal to unprocessed signal.

## Objects used

`*~` ×3, `line~` ×2, `==`, `ezdac~`, `+~`, `cycle~`, `ezadc~`

*Patch contains 20 boxes, 18 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bypassexample.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bypassexample.png`
