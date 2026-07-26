---
type: cookbook
name: "Variable-mode filter demo"
summary: "This patch allows you to try out various filter settings of the biquad~ object, via the filtergraph~ object."
chapter: "MSP"
keywords: ["biquad~", "dac~", "dbtoa", "delay", "filtergraph~", "filtering", "gain~", "loadbang", "meter~", "metro", "noise~", "spectroscope~", "unpack", "umenu", "*~"]
objects: ["*~", "0", "1", "biquad~", "dac~", "dbtoa", "delay", "filtergraph~", "gain~", "loadbang", "meter~", "metro", "noise~", "spectroscope~", "umenu", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/filterdemo_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/filterdemo__0.png"
---

# Variable-mode filter demo

This patch allows you to try out various filter settings of the **biquad~** object, via the **filtergraph~** object. For adjusting the parameters you can drag on **filtergraph~** with the mouse, or you can send values in its three rightmost inlets for frequency, gain, and Q. The **spectroscope~** object tries to draw the spectrum of the signal.

If you want to change the coefficients of **biquad~** in real time while a sound is playing, it's usually better to use MSP signals rather than individual Max messages, to avoid causing clicks. (It doesn't really matter in this example, since the source signal is noise anyway.) The example "[Smooth filter changes](http://music.arts.uci.edu/dobrian_book/drupal/content/smooth-filter-changes)" demonstrates two ways to do that.

## Objects used

`unpack`, `loadbang`, `meter~`, `dac~`, `umenu`, `dbtoa`, `spectroscope~`, `gain~`, `biquad~`, `filtergraph~`, `*~`, `1`, `0`, `delay`, `noise~`, `metro`

*Patch contains 37 boxes, 30 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/filterdemo_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/filterdemo__0.png`
