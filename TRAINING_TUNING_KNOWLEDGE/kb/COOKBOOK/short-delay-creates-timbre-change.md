---
type: cookbook
name: "Short delay creates a timbre change"
summary: "A single sample value of 1 (surrounded on either side by sample values of 0) is the shortest possible sound that can be represented in a digital audio signal."
chapter: "MSP"
keywords: ["delay~", "click~", "live.dial"]
objects: ["!-~", "*~", "+~", "click~", "delay~", "ezdac~", "key", "live.dial", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delayclick~_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delayclick~_0.PNG"
---

# Short delay creates a timbre change

A single sample value of 1 (surrounded on either side by sample values of 0) is the shortest possible sound that can be represented in a digital audio signal. Electrical engineers call this signal an impulse. It theoretically contains every frequency up to the Nyquist frequency (one-half the sample rate), so it’s useful for testing filters and for determining the mathematical formulae to describe different sorts of filtering effects.

In MSP, the **click~** object sends out such a signal whenever it receives the message *bang* in its inlet. Because it’s the shortest possible sound we can make, it’s good for experimenting to see how much two sounds may differ in their onset time before we can detect that they’re not simultaneous. The **delay~** object delays the click by a certain number of samples, and the two sounds––the initial impulse and its delayed copy––are mixed together in the **patcher mix~** subpatch. When the delay time is sufficiently short, the two clicks will fuse together in our perception, albeit with a slight timbre change. Only when the delay is sufficiently large (greater than our perceptual threshold of the present) can we discern that the sound we hear is actually two separate events. Try experimenting with different short delay times, to hear the timbre change the delay creates and to see when the two clicks become perceptible to you as non-simultaneous.

## Objects used

`sel`, `key`, `click~`, `delay~`, `!-~`, `+~`, `*~`, `ezdac~`, `live.dial`

*Patch contains 25 boxes, 17 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delayclick~_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delayclick~_0.PNG`
