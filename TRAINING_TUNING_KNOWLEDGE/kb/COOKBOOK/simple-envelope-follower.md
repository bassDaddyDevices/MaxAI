---
type: cookbook
name: "Simple envelope follower"
summary: "An \"envelope follower\" provides a smoothed global representation of the extreme amplitudes of a signal."
chapter: "MSP"
keywords: ["envelope follower", "Peakamp~"]
objects: ["line~", "pack", "peakamp~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/envelopefollower~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/envelopefollower~.png"
---

# Simple envelope follower

An "envelope follower" provides a smoothed global representation of the extreme amplitudes of a signal. It can be as rough or as detailed as you want it to be, depending on how much of the original signal you disregard in the evaluation of the peaks. Because sound signals tend to vary in both positive and negative directions around a central 0 value, it's best to evaluate the absolute values of the samples, so that peaks in the negative direction are easily compared to peaks in the positive direction. And because we care about the peaks, and not all the values that cross rapidly between positive peaks and negative peaks, it makes sense to disregard the non-peak values, and interpolate from one peak value to another.

One pretty simple way to obtain an amplitude envelope in real time is to periodically evaluate a short segment of the incoming signal -- usually 5 to 20 milliseconds at a time -- to determine the peak amplitude within that segment, then go to that peak value quickly (with sample-to-sample interpolation) from the previously detected peak value. The **peakamp~**object provides a periodic report of the peak absolute value within a segment of a signal. This patch uses the **line~** object to interpolate toward the peak value detected by **peakamp~** during the time while **peakamp~** is evaluating the next segment of the incoming signal. For many situations, this simple solution is good enough.

Note that realtime envelope following always requires some degree of latency (lag time) between the input signal and the amplitude envelope representation of that signal. It requires that each peak be determined, and the smoothing process to get from peak to peak, which is essentially a lowpass filtering process applied to the detected peaks, requires some small amount of time. In this patch, the **peakamp~** interval takes some number of milliseconds -- during which the peak could occur at any time from the beginning to the end of that segment -- and the interpolation to that value takes the same number of milliseconds. Thus, the latency may be anywhere from n to 2n milliseconds. Still, for a value of n=10, for example, the lag will be only 10-20 ms, which is usually not a problematic amount of latency in a music performance.

## Objects used

`pack`, `line~`, `peakamp~`

*Patch contains 9 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/envelopefollower~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/envelopefollower~.png`
