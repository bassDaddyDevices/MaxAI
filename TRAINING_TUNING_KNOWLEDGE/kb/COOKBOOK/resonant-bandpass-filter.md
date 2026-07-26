---
type: cookbook
name: "Resonant bandpass filter"
summary: "The reson~ object is a resonant bandpass filter; it passes frequencies in a specified region, and attenuates the other frequencies."
chapter: "MSP"
keywords: ["spectroscope~", "reson~", "filters"]
objects: ["*~", "+~", "cycle~", "ezdac~", "gate~", "loadbang", "noise~", "reson~", "sfplay~", "spectroscope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/resondemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/resondemo.png"
---

# Resonant bandpass filter

The **reson~** object is a resonant bandpass filter; it passes frequencies in a specified region, and attenuates the other frequencies. It requires only three parameter values: input gain, center (resonated) frequency, and a resonance quality factor (Q). The Q determines the bandwidth of the passed region around the center frequency. Specifically, Q is defined as center frequency divided by bandwidth, where bandwidth is the extent, in Hertz, above and below the center frequency before the frequencies will be significantly attenuated. For example, a center frequency of 1,000 Hz and a Q of 50 would mean that the bandwidth is 20 Hz, so frequencies outside the range from 980 Hz to 1020 Hz will be attenuated.

In this example, we use a low-frequency oscillator (LFO) to continuously modulate the center frequency of the filter. You can choose to use white noise or a sound file as your sound source.  If you look inside the **p filtersweepwithreson~** subpatch, you’ll see that the LFO is moving rather slowly, one cycle every two seconds, and its amplitude is being scaled up to 800 and offset by 1000, so that it causes a back-and-forth sweep of the center frequency between 200 Hz and 1,800 Hz. Because the Q is rather high, creating a narrow passband, the overall power of the input signal is diminished considerably by the filter, so the input gain factor has been set to turn up the gain commensurately. Experiment with different values of all the parameters, and with different input sounds.

## Objects used

`spectroscope~` ×2, `loadbang`, `+~`, `*~`, `cycle~`, `reson~`, `ezdac~`, `sfplay~`, `noise~`, `gate~`

*Patch contains 36 boxes, 34 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/resondemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/resondemo.png`
