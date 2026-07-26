---
type: cookbook
name: "Envelope follower with minimal latency"
summary: "Audio signals change drastically and quickly."
chapter: "MSP"
keywords: ["gen~", "envelope follower"]
objects: ["buffer~", "capture~", "click~", "count~", "dac~", "delay", "gen~", "poke~", "prepend", "sfplay~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testbetterenvelopefollower~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testbetterenvelopefollower~.png"
---

# Envelope follower with minimal latency

Audio signals change drastically and quickly. A 100 Hz sine tone goes from (absolute value) peak to peak in 5 milliseconds. An attempt to detect its peak amplitude in a lesser time interval might incorrectly evaluate a non-peak values as a peak. What we really care about is the shape of the peaks over time, so a certain amount of latency is necessary to represent that shape properly. And, if we plan to use the envelope to shape other sounds, some smoothing of the envelope is necessary to minimize the audio-rate modulation it causes when applied to other signals.

This patch demonstrates a realtime envelope follower that responds to the input signal with minimal latency. It responds to new peaks instantaneously (with sample-level immediacy), and smooths the envelope over any number of samples you specify. Because MSP works with audio one signal vector at a time, we can only get sample-level precision within a single MSP object. The **gen~** object opens up that internal MSP world and allows you to program at the sample-level with MSP-like patching, even though it receives and sends its input and output vector by vector in MSP. (You can do the same in Java with the **mxj~** object, or you can write your own MSP external object in C. But **gen~** gives you sample-level programming capability in a MSP-like patching language. If need be, the code you create in **gen~** can then be exported to be used in different formats, such as VST.)

Inside the **gen~** object, the gen patch compares each incoming sample to the previously-detected peak value. If it detects a new peak, it begins to interpolate toward that new value over the course of the next n samples. That is, it calculates 1/n of the way from its previous output to the new peak, and outputs that value. As long as no new peak is detected, it will continue to interpolate to that new peak over n samples. Once it arrives at that peak (if it doesn't detect some new peak before it gets there), it resets itself and begins interpolating toward the next (presumably lesser) peak value. It's revising its opinion of the "peak" value every sample, so it will always be approaching the greatest value detected since the previous peak was reached.

The algorithm is described as well as possible inside the **gen~** object, and the gen code is thoroughly commented. You can see its effect by looking inside the **capture~** and **buffer~**objects in the demo patch. If you want to use this code in a patch of your own, you can copy and paste the **gen~** object or you can download [the .gendsp file](http://music.arts.uci.edu/dobrian/w16/music215B/examples/max/patches/envelopefollower.gendsp). Try different numbers for the *rampsamples* parameter to get the enveloping effect you want.

## Objects used

`capture~` ×4, `gen~` ×2, `poke~` ×2, `buffer~` ×2, `delay` ×2, `prepend` ×2, `dac~` ×2, `t` ×2, `count~`, `sfplay~`, `click~`

*Patch contains 32 boxes, 32 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testbetterenvelopefollower~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testbetterenvelopefollower~.png`
