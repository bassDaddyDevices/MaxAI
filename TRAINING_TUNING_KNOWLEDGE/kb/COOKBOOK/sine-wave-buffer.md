---
type: cookbook
name: "Sine Wave into Buffer~"
summary: "The cycle~ object allows you to read from a stored cosine function (use a phase offset of 0.75 to get a sine phase), and does high-quality interpolation to give"
chapter: "Max"
keywords: ["cycle~", "buffer~", "sampstoms~", "uzi", "expr"]
objects: ["buffer~", "expr", "loadbang", "peek~", "sampstoms~", "t", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/SineWaveIntoBuffer.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/SineWaveIntoBuffer.png"
---

# Sine Wave into Buffer~

The **cycle~** object allows you to read from a stored cosine function (use a phase offset of 0.75 to get a sine phase), and does high-quality interpolation to give you excellent resolution even though it only uses a 512-sample table. (See MSP Tutorial chapters 1-3).

But if you want to put a sine wave into a **buffer~**, here’s a way:

Once opened, the patch will set the **buffer~** ‘size’ to the appropriate duration (in ms), at the current sample rate, for 512 samples, using the **sampstoms~**. Then it will send this same integer (the number of samples) to an **uzi**, which, in turn, will drive the output of the **expr** object that will calculate the appropriate value for each sample, and save it into the **buffer~**.

## Objects used

`t`, `peek~`, `buffer~`, `sampstoms~`, `loadbang`, `expr`, `uzi`

*Patch contains 17 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/SineWaveIntoBuffer.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/SineWaveIntoBuffer.png`
