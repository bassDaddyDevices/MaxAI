---
type: cookbook
name: "Sinusoidal events"
summary: "To generate a series of numbers in Max that outline a sinusoidal shape, you can use the sin() function in the expr object."
chapter: "Max"
keywords: ["sinusoid", "expr", "sine", "bline", "counter"]
objects: ["bline", "counter", "expr", "metro", "sel", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinusoidalevents.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinusoidalevents.png"
---

# Sinusoidal events

To generate a series of numbers in Max that outline a sinusoidal shape, you can use the *sin()* function in the **expr** object. As the argument in the *sin()* function goes from 0 to 2π (6.283185), the output will be the sine of that value, going from 0 up to 1, down to -1, and back up to 0. So, by feeding a series of numbers into **expr**, you can generate numbers that follow that sinusoidal pattern.

The left part of the patch shows how you can use **counter** to trigger a progressive series of inputs, in this case numbers from 0 to 99. Inside the **expr**, those numbers are multiplied by 0.01 so that they go from 0.00 to 0.99, then they're multiplied by 6.283185 so that they go from 0 to almost 2π, then that's used as the argument in *sin()*. The result of the *sin()* function gets 1 added to it, so that its range is 0 to 2, then that is multiplied by 64 so that its range is 0 to 128, then that value is truncated to an integer and sent out. The result is a sinuosoidal pattern that varies from 0 to 127 (a useful range for MIDI).

The right part of the patch does something very similar, using the **bline** object instead of a counter. The **message** box tells bline "Set yourself to 0, and get ready to go to 1 over the course of the next 100 *bang*s you receive." Because the numbers from **bline** will already go in increments of 0.01 (one hundred steps from 0 to 1), there's no need for the 0.01 multiplication we used in the left part of the patch. When **bline** reaches its destination on the 100th *bang*, a *bang* comes out its right outlet, which we use to retrigger the **message** box in order to set up **bline** for the next *bang* it receives.

In both these cases, since the **metro** is sending a *bang* every 40 milliseconds, be expect it to produce 25 *bang*s per second, so it will produce 100 events in 4 seconds. So, you can think of the frequency of the sinusoidal motion to be 0.25 cycles per second, and the sampling rate is 25 samples per second.

Another way you could do this task is demonstrated in the example "[Automate sinusoidal MIDI pitchbend](automate-sinusoidal-midi-pitchbend.md)". See also, the example "[Play a sinusoidal melody](play-sinusoidal-melody.md)".

## Objects used

`sel` ×2, `slider` ×2, `metro` ×2, `expr` ×2, `bline`, `counter`

*Patch contains 16 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sinusoidalevents.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sinusoidalevents.png`
