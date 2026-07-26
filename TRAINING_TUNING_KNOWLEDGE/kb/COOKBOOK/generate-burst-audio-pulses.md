---
type: cookbook
name: "Generate a burst of audio pulses"
summary: "This example shows how you can generate a pulse burst of a certain number of repeated rectangle waves."
chapter: "MSP"
keywords: ["pulse", "duty cycle"]
objects: ["<~", "delay", "expr", "ezdac~", "f", "gate~", "live.gain~", "pak", "phasor~", "scope~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pulseburstgenerator.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pulseburstgenerator.png"
---

# Generate a burst of audio pulses

This example shows how you can generate a pulse burst of a certain number of repeated rectangle waves. It allows you to choose how many pulses you want to produce, the rate at which you want them to occur, and the width of the pulse relative to the pulse rate, also known as the duty cycle. The patch uses a **phasor~** (with its rate specified by the user) and a **<~** object (with its threshold specified by the duty cycle) to generate pulse that goes briefly to 1 then back to 0. It uses the specified number of occurences and the rate to calculate in **expr** how much time it will take to complete that number of repetitions, and it opens a **gate~** just long enough for that number of pulses to pass through.

## Objects used

`live.gain~`, `ezdac~`, `f`, `delay`, `expr`, `pak`, `<~`, `phasor~`, `t`, `gate~`, `scope~`

*Patch contains 20 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pulseburstgenerator.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pulseburstgenerator.png`
