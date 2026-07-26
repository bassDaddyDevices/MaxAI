---
type: cookbook
name: "Chorusing"
summary: "For this example to work properly, you will also need to download the additional Max file mix~.maxpat from the example “A use subpatch for mixing and balancing"
chapter: "MSP"
keywords: ["chorus", "mix~", "rand~", "tapin~", "tapout~"]
objects: ["*~", "+~", "ezdac~", "gain~", "meter~", "mix~", "number~", "rand~", "sfplay~", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/chorusing.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/chorusing_0.png"
---

# Chorusing

For this example to work properly, you will also need to download the additional Max file mix~.maxpat from the example “[A use subpatch for mixing and balancing two sounds](useful-subpatch-mixing-and-balancing-two-sounds.md).”

The audio effect called "chorusing" is derived from the natural phenomenon of interference that occurs when multiple instruments or voices play (imperfectly) in unison. There are constant unpredictable irregularities in timing and tuning between the ostensibly unison voices, causing subtle random types of interference. The chorusing effect is achieved similarly to flanging, usually with the following differences:

- the delay times are usually greater than 20 milliseconds, to simulate the kind of timing imperfections evident in human performance,

- delay times are often modulated with a Brownian (low-frequency) noise source rather than a sinusoidal oscillator, the better to simulate random mistunings of human playing, and

- more than one delay tap is often used, in order to simulate multiple voices.

In this example, four delay taps are modulated by very-low-frequency noise from **rand~** objects. The scaled delayed signals can be fed back into the **tapin~** for more complexity (emulating still more voices). The delayed signals are mixed with the original, scaled by **gain~** and sent on to the **ezdac~**. For such an effect to be easily controllable, one should really have a scheme that allows the user to adjust all of the modulators with just one or two dials. One could also consider panning each of the delayed "voices" to a different virtual location in the stereo field before sending the mixed sound out.

## Objects used

`number~` ×14, `*~` ×9, `+~` ×7, `rand~` ×4, `mix~`, `meter~`, `gain~`, `tapout~`, `tapin~`, `ezdac~`, `sfplay~`

*Patch contains 55 boxes, 55 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/chorusing.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/chorusing_0.png`
