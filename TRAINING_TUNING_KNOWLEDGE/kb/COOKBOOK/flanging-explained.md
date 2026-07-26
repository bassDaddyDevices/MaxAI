---
type: cookbook
name: "Flanging explained"
summary: "For this example to work properly, you will also need to download the additional Max file \"mix~.maxpat\" from the example \"A useful subpatch for mixing and balan"
chapter: "MSP"
keywords: ["flanging", "tapout~", "Doppler"]
objects: ["*~", "+~", "cycle~", "ezdac~", "gain~", "meter~", "mix~", "number~", "sfplay~", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/flanging1.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/flanging1.png"
---

# Flanging explained

For this example to work properly, you will also need to download the additional Max file "mix~.maxpat" from the example "[A useful subpatch for mixing and balancing two sounds](useful-subpatch-mixing-and-balancing-two-sounds.md)", which will be used as a **mix~** object in this patch.

The audio effect of "flanging" is achieved by using a LFO to continually modulate the delay time of a sound, and then (usually) mixing the delayed sound with the original sound to create interference. Modulating the delay time of a sound has the effect of changing its virtual distance from the listener, thus creating a subtle (or not-so-subtle) [Doppler effect](https://en.wikipedia.org/wiki/Doppler_effect). The effect is discussed and demonstrated in the [MSP Tutorial chapter on Flanging](https://docs.cycling74.com/max7/tutorials/15_delaychapter04).

To modulate the delay time without creating clicks, the delay time of **tapout~** must be supplied as a smoothly-changing *signal*. A sinusoidal **cycle~** object is the most common LFO source. Its amplitude must be scaled so that it produces the range of millisecond delays desired (i.e., the desired plus-and-minus range of milliseconds by which the delay time will fluctuate), and then that value must be added to a base delay time within the delay buffer. In this example, the amplitude gain of the LFO (i.e., the modulation depth) is first limited from 0 to 1, and then is multiplied by the base delay time. Thus, the modulation depth is specified as a fraction (0 to 1) of the delay time. Specifying a longer delay time will proportionally increase the modulation depth.

Using a relatively short delay time, a moderate modulation depth, a very slow modulation rate (less than 1 Hz), and a balanced dry/wet mix, you can achieve subtle flanging effects. Increasing the flange rate to several cycles per second can make a sort of flanging vibrato effect. And of course, by increasing the delay time, modulation depth, modulation rate, and wetness, you can create a wide range of surreal effects. Feeding some of the flanged signal back into the delay line further complicates the effect.

## Objects used

`number~` ×5, `*~` ×3, `cycle~`, `+~`, `mix~`, `meter~`, `gain~`, `tapout~`, `tapin~`, `ezdac~`, `sfplay~`

*Patch contains 33 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/flanging1.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/flanging1.png`
