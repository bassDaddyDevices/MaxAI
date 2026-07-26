---
type: cookbook
name: "DIY ring buffer"
summary: "For time-delayed audio, we need to create what's called a \"circular buffer\" or a \"ring buffer\", an array of samples to which we record continuously in a loop, a"
chapter: "MSP"
keywords: ["ring buffer", "delay", "delay~", "buffer~", "poke~", "count~", "index~"]
objects: ["-~", "adc~", "buffer~", "count~", "dac~", "index~", "loadbang", "loadmess", "poke~", "pong~", "prepend", "translate"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ringbufferdemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ringbufferdemo.png"
---

# DIY ring buffer

For time-delayed audio, we need to create what's called a "[circular buffer](https://en.wikipedia.org/wiki/Circular_buffer)" or a "ring buffer", an array of samples to which we record continuously in a loop, and which we can then use always to access the most recently recorded sound from the past.

The MSP object **delay~** does exactly that. And another pair of objects—**tapin~** and **tapout~** does the same thing, but with a minimum delay of one signal vector so that you can even feed the delayed sound back into the delay loop. However, in this example, we build and access a ring buffer ourselves, just to demonstrate inner workings of the process in a little more detail.

The **buffer~** object creates an array in RAM for storing sound and accessing it in a variety of ways. Here we create a one-second buffer, and we use a sample counter (the **count~** object) to put each sample of the incoming sound (from **adc~**) into that array, using the **poke~** object to access individual sample locations in the array. At the same time, we can use that same sample counter, which is always pointing to the location of the current time in the array, to calculate the signal some amount of time (some number of samples) in the past. If the current time in samples minus the delay time in samples is less than 0, we need to wrap the calculated sample location back into the array (by adding the number of samples in the array); that's what the **pong~** object does for us.

You can try this out yourself, but beware of the possibility of feedback, since this patch sends the incoming sound from **adc~**, with some delay, right back out via the **dac~**.

## Objects used

`translate` ×2, `prepend` ×2, `index~`, `-~`, `pong~`, `adc~`, `poke~`, `dac~`, `loadmess`, `loadbang`, `buffer~`, `count~`

*Patch contains 30 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ringbufferdemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ringbufferdemo.png`
