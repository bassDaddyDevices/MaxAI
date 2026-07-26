---
type: cookbook
name: "A/B audio switch"
summary: "This patch shows how the selector~ object may be used to choose just one of two (or more) different audio signals."
chapter: "MSP"
keywords: ["key", "selector~", "switch"]
objects: ["dac~", "key", "loadbang", "sel", "selector~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/abaudioswitch.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/abaudioswitch.png"
---

# A/B audio switch

This patch shows how the **selector~** object may be used to choose just one of two (or more) different audio signals. A number in the left inlet specifies which of **selector~**'s signal inlets should be passed to its outlet.

This is fine for choosing a signal while the signals are silenced, such as if the **sfplay~** objects are not currently playing. However, because the change of inlet in **selector~** happens instantaneously, with no crossfade, it can cause an audible click if the signals are being heard at the time of the switch. For a smooth, clickless switch between inputs, you would want to do a quick crossfade between sounds.

There are several examples of how to switch sound inputs with a crossfade. See "[A/B audio crossfade](ab-audio-crossfade.md)", "[Choosing one of two signals](choosing-one-two-signals.md)", or "[Choose one of several sounds](choose-one-several-sounds.md)".

## Objects used

`sfplay~` ×2, `sel`, `key`, `dac~`, `selector~`, `loadbang`

*Patch contains 23 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/abaudioswitch.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/abaudioswitch.png`
