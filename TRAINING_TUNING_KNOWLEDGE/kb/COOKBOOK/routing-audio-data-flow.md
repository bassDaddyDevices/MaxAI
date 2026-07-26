---
type: cookbook
name: "Routing audio data flow"
summary: "The selector~ and gate~ objects serve the same function for audio signals as the switch and gate objects do for Max messages."
chapter: "MSP"
keywords: ["selector~", "gate~"]
objects: ["+~", "adc~", "dac~", "gate~", "selector~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/switchingaudioinput_output_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/switchingaudioinput_output_0.png"
---

# Routing audio data flow

The **selector~** and **gate~** objects serve the same function for audio signals as the **switch** and **gate** objects do for Max messages. The **selector~** object chooses one signal inlet to pass to its outlet. The **gate~** object chooses one outlet out of which to pass its incoming signal.

Because the **selector~** and **gate~** objects make their changes instantly, they might cause a click to occur in the audio signal. For this reason, they're best used only for situations when there's no signal passing through them or when the signal is at 0. In general, to make such a switch you'll want to fade the audio signal quickly down to 0 before making the switch, then fade it back up immediately afterward.

## Objects used

`dac~` ×2, `adc~` ×2, `+~`, `gate~`, `selector~`, `sfplay~`

*Patch contains 32 boxes, 25 connections, 3 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/switchingaudioinput_output_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/switchingaudioinput_output_0.png`
