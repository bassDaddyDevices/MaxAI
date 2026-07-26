---
type: cookbook
name: "Choose a random mix of sine tones"
summary: "This patch uses a random number generator to choose a mix of 12 sine tones, play them, and display them as white pixels in a black and white matrix."
chapter: "MSP"
keywords: ["jit.noise", "ioscbank~", "random", "oscillator"]
objects: ["!/", "counter", "dac~", "ioscbank~", "iter", "jit.<", "jit.noise", "jit.pwindow", "jit.spill", "live.gain~", "loadbang", "qmetro", "t", "vexpr"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playpixels.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playpixels2.png"
---

# Choose a random mix of sine tones

This patch uses a random number generator to choose a mix of 12 sine tones, play them, and display them as white pixels in a black and white matrix. The 12 sine tones are played with a single object called **ioscbank~**, which is a bank of interpolating sinusoidal oscillators.

The arguments for **ioscbank~** are the number of oscillators, the number of samples to interpolate when changing an oscillator’s frequency, and the number of samples to interpolate when changing an oscillator’s amplitude. The arguments here say to create 12 oscillators, change frequency immediately with no interpolation (since changing the frequency should not inherently cause a click, and besides, the frequencies never get changed in this particular patch), and interpolate to new amplitudes over 400 samples, which is 9 milliseconds at a sample rate of 44,100 Hz, just enough time to avoid creating clicks by turning oscillators on and off. The **patcher** **frequencies** subpatch just contains the initial frequency and amplitude settings for the oscillators. The frequencies are the first 12 harmonics of the fundamental 220 Hz (the pitch A below middle C) and the initial amplitudes are all 0. The order of the frequencies has been chosen just so that they will correlate with the pixels shown in the **jit.pwindow**; the highest frequencies will be in the top row of the matrix, and the lowest frequencies will be in the bottom row.

The on/off choices for each of the 12 oscillators are generated in a **jit.noise** object in the **patcher** *b&w\_pixels* subpatch. Other objects exist for making random on/off choices, notably **decide** and **random**, but since we intend to display these as pixels in a 4x3 matrix anyway, **jit.noise** is a reasonable choice of random number generator for this patch. When a **jit.noise** receives a *bang*, it produces a matrix filled with random numbers. This object is specified to generate a single plane of char data (numbers 0 to 255) in a 4x3 matrix. This would normally appear as gradations of gray when displayed. The matrix is passed through a **jit.<** object and the numbers are tested to see if they’re less than 0.5. (Even though we’re dealing with char data, the *val* attribute should be specified as a float.) This will convert all the values to either 255 (true) or 0 (false). That matrix is then sent out the left outlet to be displayed in the **jit.pwindow**, and it’s also converted to a list of 12 numbers, which are changed into 0 and 1 values (to be suitable as on/off amplitudes for the oscillators), and sent out, where they’re used to set the amplitudes of the tones produces by **ioscbank~**.

## Objects used

`loadbang`, `dac~`, `counter`, `jit.pwindow`, `live.gain~`, `t`, `iter`, `ioscbank~`, `vexpr`, `jit.spill`, `jit.<`, `jit.noise`, `!/`, `qmetro`

*Patch contains 27 boxes, 25 connections, 2 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playpixels.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playpixels2.png`
