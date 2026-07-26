---
type: cookbook
name: "Biquad filter"
summary: "The biquad~ object is a biquadratic filter."
chapter: "MSP"
keywords: ["filtergraph~", "biquad~", "spectroscope~", "filtering"]
objects: ["*~", "+~", "biquad~", "ezdac~", "filtergraph~", "gate~", "loadbang", "noise~", "number~", "sfplay~", "spectroscope~", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/biquadexample01.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/biquadexample01.png"
---

# Biquad filter

The **biquad~** object is a biquadratic filter. In technical terms, that’s a second-order IIR filter with two poles and two zeros; in practical terms, it’s a versatile filter that can have a wide variety of characteristics—lowpass, hipass, bandpass, notch, shelf, etc.—depending on the values of the coefficients in the filtering equation. But unless you’re a trained electrical engineer, you probably don’t know exactly how the coefficient values correspond to particular filtering characteristics. However, a very useful user-interface object called **filtergraph~** allows you to specify the filter characteristics you want, and it calculates and provides the necessary coefficient values for **biquad~**. These two objects are literally made for each other.

This patch provides two possible sound sources—a sound file or white noise—and lets you hear them either filtered or unfiltered. The filtering is done with **biquad~**, which gets its coefficient values from a **filtergraph~**. You can specify to **filtergraph~** the type of filtering you want, and you can also specify the frequency, gain, and Q of the filter, either by sending the values in the three rightmost inlets of **filtergraph~** or by dragging on the graphic user interface. The needed coefficient values are sent out the left outlet of **filtergraph~**, which should be connected to the second inlet of **biquad~**. 

In this patch, and in several of the other example patches that demonstrate filters, a **spectroscope~** object is used to visualize the spectrum of the filtered sound. It provides a continually updated graph of amplitude over frequency. In both **filtergraph~** and **spectroscope~**, both the amplitude and the frequency may be viewed according to either a linear or logarithmic scale, depending on the *logfreq* and *logamp* attributes.

## Objects used

`umenu` ×2, `gate~` ×2, `spectroscope~`, `number~`, `*~`, `loadbang`, `filtergraph~`, `+~`, `biquad~`, `ezdac~`, `sfplay~`, `noise~`

*Patch contains 45 boxes, 39 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/biquadexample01.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/biquadexample01.png`
