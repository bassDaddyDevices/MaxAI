---
type: cookbook
name: "Simple flanging"
summary: "This patch demonstrates a simple implementation of \"flanging\"—the effect created by making a delayed copy of a sound, with the delay time periodically fluctuati"
chapter: "MSP"
keywords: ["delay~", "delay", "flanging"]
objects: ["*~", "+~", "cycle~", "delay~", "ezadc~", "ezdac~", "gain~", "loadbang", "number~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaydemo04.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaydemo04.png"
---

# Simple flanging

This patch demonstrates a simple implementation of "flanging"—the effect created by making a delayed copy of a sound, with the delay time periodically fluctuating, and then mixing the delayed sound with the original.

The number of samples of delay can be provided in the right inlet of a **delay~** object as an MSP signal instead of as an individual Max *int* or *float* message. The main reason for doing that is to get a special effect by continuously modulating the delay time. When the delay time is modulated by a repeating signal such as a low-frequency oscillator (LFO), the resulting effect is flanging. Essentially, any time the delay is changing continuously, that's a simulation of the sound source moving toward us or away from us, which introduces a ["Doppler shift"](http://en.wikipedia.org/wiki/Doppler_effect) in the perceived pitch.

Notice that the signal in the right inlet of **delay~** represents samples of delay, so we need to scale the output of **cycle~** to the appropriate range and offset its center point. In this example we scale its range to + or - 21 samples and offset that by 22 samples, so the delay time fluctuates between 1 and 43 samples, 6 times per second. Subtle flanging of plus or minus about half a millisecond, as is shown in this example, imposes a modest vibrato on the incoming sound. You can play around with different flange rates and different depths of vibrato to get a variety of effects. When the flanged sound is mixed with the direct sound, the two sounds interfere in potentially interesting ways.

As you can read in the article "[Categories of Perception for Vibrato, Flange, and Stereo Chorus: Mapping Out the Musically Useful Ranges of Modulation Rate and Depth for Delay-Based Effects](http://www.dafx.ca/proceedings/papers/p_149.pdf)", a flange depth of 1 ms is amply sufficient for subtle musical uses, and depths greater than that are more in the range of "supra-useful" values for more obvious audio effects. This flanger is made capable of accepting delays up to 10 ms (441 samples), thus flange depths up to 5 ms.

## Objects used

`number~` ×3, `gain~` ×2, `+~` ×2, `loadbang`, `ezdac~`, `ezadc~`, `cycle~`, `*~`, `delay~`

*Patch contains 20 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaydemo04.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaydemo04.png`
