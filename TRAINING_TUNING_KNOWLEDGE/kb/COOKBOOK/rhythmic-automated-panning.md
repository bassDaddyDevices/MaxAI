---
type: cookbook
name: "Rhythmic automated panning"
summary: "This example allows a choice of four different modes of intensity panning, and two ways to specify the rate of panning change."
chapter: "MSP"
keywords: ["pass~", "radiogroup", "translate", "transport", "groove~", "patcher", "pcontrol"]
objects: ["!/", "*", "*~", "+", "+~", "==", ">>", "adc~", "buffer~", "change", "cycle~", "delay", "ezdac~", "gain~", "groove~", "line~", "metro", "pack", "pass~", "pcontrol", "radiogroup", "random", "record~", "sig~", "slider", "translate", "transport", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/choosepanning_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/choosepanning_0.PNG"
---

# Rhythmic automated panning

This example allows a choice of four different modes of intensity panning, and two ways to specify the rate of panning change. The choice of four possible pannings is: static centered, left-to-right sudden switching, left-to-right gradual gliding, and random gliding. The rate of change can be controlled by sliders, either in Hertz (changes per second) or note values (based on the current transport tempo).

A few objects and techniques here bear some explanation. The bit-shift operator **>>** shifts the binary form of an integer some number of bits to the right, which is equivalent to dividing by a power of 2. So shifting an integer 3 bits to the right is equivalent to an integer division by 8 (with the remainder being discarded). Why not just use a **/ 8** object? No reason (although it's perhaps a little more computationally efficient). It's just a nerdy way to scale down a range of numbers, by focusing only on the most significant bits of its binary form. The **radiogroup** object allows you to create a related set of mutually exclusive buttons, providing the user a choice of one (and only one) of several options. It sends out the index number of the selected button (counting up from 0).

The **pcontrol** object allows certain types of automated control of a subpatch or abstraction. One thing you can do is totally disable the MIDI and audio functions of a subpatch or abstraction, with the message *enable 0* (and *enable 1* to re-enable it). Inside those **patcher** objects that are getting enabled/disabled by the **radiogroup**, the audio chain of each one ends with a **pass~** object. The **pass~** object normally passes audio signals through unchanged, but it sends out a constant signal value of 0 whenever its patcher is disabled. This is crucial so that the subpatch doesn't get stuck sending out a constant non-zero signal when it's disabled. The fact that all the subpatches send out 0 when they're disabled means that they don't get in the way of the one subpatch that is enabled, when the signals all are added together in the right inlet of the **patcher pan~** object.

## Objects used

`pcontrol` ×4, `==` ×4, `pass~` ×4, `line~` ×3, `pack` ×3, `metro` ×3, `sig~` ×3, `*~` ×3, `>>` ×2, `change` ×2, `slider` ×2, `cycle~` ×2, `*`, `random`, `translate`, `+`, `!/`, `transport`, `umenu`, `radiogroup`, `gain~`, `+~`, `groove~`, `ezdac~`, `delay`, `adc~`, `record~`, `buffer~`

*Patch contains 118 boxes, 90 connections, 5 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/choosepanning_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/choosepanning_0.PNG`
