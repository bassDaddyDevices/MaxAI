---
type: cookbook
name: "Adjust the pitch of a comb filter"
summary: "This patch demonstrates how to adjust the delay time of a comb filter to make the filter correspond to a desired fundamental pitch."
chapter: "MSP"
keywords: ["comb~", "mtof", "filter"]
objects: ["!/", "comb~", "ezdac~", "gain~", "kslider", "mtof", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/combfiltering.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/combfiltering.png"
---

# Adjust the pitch of a comb filter

This patch demonstrates how to adjust the delay time of a comb filter to make the filter correspond to a desired fundamental pitch.

The filtering formula used by the **comb~** object is

*y[n] = a x[n] + b x[n-(DR/1000)] + c y[n-(DR/1000)]*

wherein R is the sampling rate, D is a delay time in milliseconds, x[n] is the current input sample, y[n] is the current output sample, and a, b, and c are gain scaling factors.

That formula can be shown diagrammatically like this,

![](../images/sites/default/files/u2/comb~diagramsmaller.png)

![](/dobrian_book/drupal/sites/default/files/combfilterdiagram.png)where d is shorthand for DR/1000 samples.

In the patch we convert a MIDI-based pitch number into a frequency in Hertz, then use that to calculate the correct delay time for the filter. Using delay feedback (a past y[n] value) with feedback gain approaching 1 creates strong resonance at the comb frequency, yielding an inverted comb response pattern sort of like this,

![](../images/sites/default/files/u2/Comb_filter_response.png)  
[<https://commons.wikimedia.org/w/index.php?curid=15298010]>

resulting in a strong imposition of the fundamental pitch and a buzzy timbre.![](https://commons.wikimedia.org/wiki/File:Comb_filter_response_fb_pos.svg#/media/File:Comb_filter_response_fb_pos.svg)

## Objects used

`kslider`, `mtof`, `!/`, `comb~`, `gain~`, `ezdac~`, `sfplay~`

*Patch contains 28 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/combfiltering.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/combfiltering.png`
