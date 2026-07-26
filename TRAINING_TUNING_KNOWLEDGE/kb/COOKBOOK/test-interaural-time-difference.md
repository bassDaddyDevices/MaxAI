---
type: cookbook
name: "Test Interaural Time Difference"
summary: "When a sound is to one side or the other of us, it arrives at one ear ever-so-slightly before the other."
chapter: "MSP"
keywords: ["sampstoms~", "delay~", "click~"]
objects: ["click~", "delay~", "ezdac~", "metro", "sampstoms~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testITD.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testInterauralTimeDifference.png"
---

# Test Interaural Time Difference

When a sound is to one side or the other of us, it arrives at one ear ever-so-slightly before the other. This phenomenon is known as interaural time difference (ITD). We're extremely sensitive to this very small time difference (less than a millisecond), and we use it, in part, to determine the location of a sound. Thus, w hen we hear a sound slightly earlier in one ear than the other, we have the impression that the sound is coming from the side of the ear that hears it first. As a result, if we make a sound appear slightly earlier in one channel than the other in stereo, the "precedence effect" (also known as the "Haas effect") will give the illusion of the sound having an off-center location.

This patch allows you to test the precedence effect with a maximally short sound. It uses the **click~** object to play a single-sample impulse of 1 amidst a stream of 0 values in the audio signal. The **delay~** object delays the signal going to the right channel by a specified number of samples, and the **sampstoms~** object shows the delay time in milliseconds. Try listening to repeated clicks, which initially will sound like they're located in the center of the stereo field, and then gradually increasing the number of samples of delay for the right channel. With only a few samples of delay, the effect will be timbral rather than spatial, but once the time delay is great enough (which might be only about 10 samples or so) you will start to perceive the sound as being to the left of center, because you're hearing the left channel earlier than the right channel. Knowing the speed of sound, and the average width of the human head, you can calculate that a sound that is 90° to one side will have an ITD of about 600 microseconds (0.6 milliseconds), which is about 25-30 samples of delay at a sample rate of 44,100 Hz.

In a related example, you can "[Test interaural intensity difference](test-interaural-intensity-difference.md)" (IID) and compare it with ITD. Both are effective means of sound spatialization/localization, and can certainly be used in combination.

## Objects used

`metro`, `sampstoms~`, `ezdac~`, `delay~`, `click~`

*Patch contains 11 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testITD.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testInterauralTimeDifference.png`
