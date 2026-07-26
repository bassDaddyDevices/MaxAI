---
type: cookbook
name: "Simple delay of audio signal"
summary: "The delay~ object creates a \"ring buffer\" into which it constantly records the signal coming in its left inlet."
chapter: "MSP"
keywords: ["delay~", "delay", "mstosamps~", "click~", "adstatus"]
objects: ["+~", "adstatus", "click~", "delay~", "ezdac~", "loadbang", "mstosamps~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaydemo01.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaydemo01_0.png"
---

# Simple delay of audio signal

The **delay~** object creates a "[ring buffer](http://en.wikipedia.org/wiki/Circular_buffer)" into which it constantly records the signal coming in its left inlet. The first typed-in argument specifies the size of the buffer, in samples. The second argument (or a number in the right inlet) specifies how many samples in the past **delay~** should look for the signal it will send out its outlet. So, assuming a sample rate of 44100 Hz, this patch creates a one-second buffer and instructs **delay~** to send out the sound it received 1/10 of a second ago.

Entering those values as typed-in arguments makes a rather unsafe assumption about the sample rate. (The sample rate could be 48000 or 96000 or whatever the user has set it to.) A better way to make sure you're allotting the correct amount of memory and specifying the correct delay time is to use an **adstatus ‘**sr’ object (which can be triggered by **loadbang** to report the sample rate) to calculate the size of the buffer in samples (in this case we know we want 1 second's worth of memory, so we can use the sample rate directly), and use the **mstosamps~** object (which will make its calculation based on the current sample rate) to convert the desired delay time from milliseconds to samples.

When the **click~** object receives a *bang* it sends out a single sample with a value of 1; it sends out all 0 values otherwise. That's a very clearly defined moment in time (known as an "impulse") that lets you confirm that **delay~** is doing what it's supposed to do.

## Objects used

`loadbang`, `adstatus`, `mstosamps~`, `ezdac~`, `+~`, `click~`, `delay~`

*Patch contains 13 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaydemo01.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaydemo01_0.png`
